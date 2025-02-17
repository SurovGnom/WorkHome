import React, { useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const emojis = ["😀", "😂", "😍", "😎", "😢", "😡"];

 const App =() => {
     const storedVotes = localStorage.getItem("emojiVotes");
     const initialVotes =  storedVotes ? JSON.parse(storedVotes) : emojis.reduce((acc, emoji) => ({ ...acc, [emoji]: 0 }), {})
     const [votes,setVotes] = useState(initialVotes);
     const [winner,setWinner] = useState("");
     const [maxVoteCount,setMaxVoteCount] = useState(0);

    useEffect(()=>{
        localStorage.setItem("emojiVotes", JSON.stringify(votes));
    },[votes])

    const vote = (emoji) => {
        setVotes((prevVotes) =>({...prevVotes,[emoji]: prevVotes[emoji]+1}));
    };

    const showResults = () => {
        const maxVotes = Math.max(...Object.values(votes));
        const winners = Object.keys(votes).filter((emoji) => votes[emoji] === maxVotes);
        setWinner(`Переможець: ${winners.join(" ")}`);
        setMaxVoteCount(maxVotes);
    };

    const clearResults = () => {
        localStorage.removeItem("emojiVotes");
            setVotes( emojis.reduce((acc, emoji) => ({ ...acc, [emoji]: 0 }), {}));
            setWinner("");
            setMaxVoteCount( 0)

    };
        return (
            <div className="p-4 max-w-md mx-auto text-center">
                <h1 className="text-2xl font-bold mb-4">Голосування за смайлики</h1>
                <div className="grid grid-cols-3 gap-4">
                    {emojis.map((emoji) => (
                        <button
                            key={emoji}
                            className="text-3xl p-4 border rounded-lg bg-gray-100 hover:bg-gray-200"
                            onClick={() => vote(emoji)}
                        >
                            {emoji} {votes[emoji]}
                        </button>
                    ))}
                </div>
                <div className="mt-4 flex justify-center gap-4">
                    <button className="bg-success text-white px-4 py-2 rounded" onClick={showResults}>
                        Show Results
                    </button>
                    <h3 className="mt-4 text-xl font-bold" id="result">{winner}</h3>
                    {maxVoteCount > 0 && (
                        <h5 className="mt-2 text-lg font-semibold">Кількість голосів : {maxVoteCount}</h5>
                    )}
                    <button className="bg-danger text-white px-4 py-2 rounded" onClick={clearResults}>
                        Очистити результати
                    </button>
                </div>

            </div>
        );

}


export default App;
