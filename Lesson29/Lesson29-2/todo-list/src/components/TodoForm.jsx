import {useState} from 'react';
import {addTodo} from "../features/todo/todoSlice.js";
import {useDispatch} from "react-redux";

const TodoForm =() => {
    const [task, setTask] = useState("")
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        if (task.trim()){
            e.preventDefault()
            dispatch(addTodo(task))
            setTask("")
        }
    }
        return (
            <div>
                <form action="" onSubmit={handleSubmit}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control"
                               value={task}
                               onChange={(e) => setTask(e.target.value)}
                               placeholder="Add a new task"
                        />
                        <button className="btn btn-outline-secondary" type="submit"
                                onClick={() => dispatch(addTodo())}>Add Todo
                        </button>
                    </div>
                </form>
            </div>
        );
}

export default TodoForm;