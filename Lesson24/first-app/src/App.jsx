import "./App.css"

function App() {
    const swapiData = {
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "19BBY",
        "gender": "male",
        "homeworld": "https://swapi.dev/api/planets/1/",
        "films": [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/6/"
        ],
        "species": [],
        "vehicles": [
            "https://swapi.dev/api/vehicles/14/",
            "https://swapi.dev/api/vehicles/30/"
        ],
        "starships": [
            "https://swapi.dev/api/starships/12/",
            "https://swapi.dev/api/starships/22/"
        ],
        "created": "2014-12-09T13:50:51.644000Z",
        "edited": "2014-12-20T21:17:56.891000Z",
        "url": "https://swapi.dev/api/people/1/"
    };
    return (
        <div className="container ">
            <h1 className=" mb-4">SWAPI</h1>
            <div className="input-group ">
                <span className="input-group-text">https://swapi.dev/api/</span>
                <input type="text" className="form-control " placeholder="people/1/"/>
                <span className="input-group-text">Get Info</span>
            </div>
            <div className="swapi-list">
                <button type="button" className="btn">
                    <span className="badge text-bg-secondary ">people</span>
                    <span className="badge text-bg-secondary">1</span>
                </button>
                <pre className="m-2">{JSON.stringify(swapiData, null, 2)}</pre>
            </div>
        </div>
    );
}

export default App
