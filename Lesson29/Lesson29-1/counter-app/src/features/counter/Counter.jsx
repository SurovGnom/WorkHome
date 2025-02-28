import React from "react";
import {increment,decrement} from "./counterSlice";
import {useSelector, useDispatch} from "react-redux";

function Counter() {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    return (
        <>
            <div>
                <div >
                    <h3>Value:{count}</h3>
                </div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                    className="btn btn-primary"
                >
                    +
                </button>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                    className="btn btn-primary"
                >
                    -
                </button>
            </div>
        </>
    )
}

export default Counter;