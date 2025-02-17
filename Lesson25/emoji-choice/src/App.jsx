import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const emojis = ["😀", "😂", "😍", "😎", "😢", "😡"];

class App extends Component {
    constructor(props) {
        super(props);
        const storedVotes = localStorage.getItem("emojiVotes");
        this.state = {
            votes: storedVotes ? JSON.parse(storedVotes) : emojis.reduce((acc, emoji) => ({ ...acc, [emoji]: 0 }), {}),
            winner: "",
            maxVoteCount: 0
        };
    }

    componentDidUpdate() {
        localStorage.setItem("emojiVotes", JSON.stringify(this.state.votes));
    }

    vote = (emoji) => {
        this.setState((prevState) => ({
            votes: { ...prevState.votes, [emoji]: prevState.votes[emoji] + 1 }
        }));
    };

    showResults = () => {
        const maxVotes = Math.max(...Object.values(this.state.votes));
        const winners = Object.keys(this.state.votes).filter((emoji) => this.state.votes[emoji] === maxVotes);
        this.setState({ winner: `Переможець: ${winners.join(" ")}`, maxVoteCount: maxVotes });
    };

    clearResults = () => {
        localStorage.removeItem("emojiVotes");
        this.setState({
            votes: emojis.reduce((acc, emoji) => ({ ...acc, [emoji]: 0 }), {}),
            winner: "",
            maxVoteCount: 0
        });
    };

    render() {

        return (
            <div className="p-4 max-w-md mx-auto text-center">
                <h1 className="text-2xl font-bold mb-4">Голосування за смайлики</h1>
                <div className="grid grid-cols-3 gap-4">
                    {emojis.map((emoji) => (
                        <button
                            key={emoji}
                            className="text-3xl p-4 border rounded-lg bg-gray-100 hover:bg-gray-200"
                            onClick={() => this.vote(emoji)}
                        >
                            {emoji} {this.state.votes[emoji]}
                        </button>
                    ))}
                </div>
                <div className="mt-4 flex justify-center gap-4">
                    <button className="bg-success text-white px-4 py-2 rounded" onClick={this.showResults}>
                        Show Results
                    </button>
                    <div className="mt-4 text-xl font-bold" id="result">{this.state.winner}</div>
                    {this.state.maxVoteCount > 0 && (
                        <div className="mt-2 text-lg font-semibold">Кількість голосів : {this.state.maxVoteCount}</div>
                    )}
                    <button className="bg-danger text-white px-4 py-2 rounded" onClick={this.clearResults}>
                        Очистити результати
                    </button>
                </div>

            </div>
        );
    }
}

export default App;
