import React from 'react';
import TodoForm from "../../components/TodoForm.jsx";
import TodoList from "../../components/TodoList.jsx";




function Todo(){
    return (
        <>
            <h1>TODO</h1>
            <TodoForm/>
            <h3>Todos</h3>
            <hr/>
            <TodoList/>
        </>
    )
}

export default Todo