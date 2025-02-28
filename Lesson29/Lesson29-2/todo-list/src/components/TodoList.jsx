import React from 'react';
import {useSelector} from "react-redux";

function TodoList() {
    const todos = useSelector(state => state.todo.todos)
    return (
        <div>
            <ul className="list-group">
                {todos.filter(todo => todo.trim()).map((todo => (
                    <li  className="list-group-item">
                        {todo}
                    </li>
                ))
            )}
        </ul>
    <footer>
       <h4>Всього:<span>{todos.length}</span></h4>
    </footer>
</div>
)
    ;

}

export default TodoList;