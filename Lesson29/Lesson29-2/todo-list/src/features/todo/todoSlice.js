import {createSlice} from '@reduxjs/toolkit';


export const todoSlice = createSlice({
    name:"todo",
    initialState:{
        todos:[],
        type:'string',
    },reducers:{
        addTodo: (state,action) =>{
            if (action.payload.trim()) {
                state.todos.push(action.payload);
            }
        },
    }
})

export const {addTodo} = todoSlice.actions

export default todoSlice.reducer