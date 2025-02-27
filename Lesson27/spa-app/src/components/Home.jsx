import React from 'react';

function Home() {
    return (
        <div className="container d-flex justify-content-center  align-items-center">
            <form action="">
                <input className="form-control form-control-lg" type="text" placeholder="Task"
                       aria-label=".form-control-lg example"/>
                <br/>
                <input className="form-control form-control-lg" type="text" placeholder="Description"
                       aria-label=".form-control-lg example"/>
                <button className=" btn btn-primary">Add Todo</button>
            </form>

        </div>
    )
}

export default Home;