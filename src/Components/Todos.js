import { createSlice } from "@reduxjs/toolkit";
import {TodosData} from './FakeTodos';
export const TodoSlice = createSlice({
    name: "todos",
    initialState: {
        value: TodosData},
        reducers: {
            addTodo: (state, action)=>{
                state.value.push(action.payload)
            },
            deleteTodo: (state, action)=>{
                state.value = state.value.filter(todo=>todo.id !==action.payload.id);
            },
            completeTodo: (state, action)=>{
                // let index;
                state.value.forEach(todo=>{
                    if(todo.id ===action.payload.id){
                        todo.completed = action.payload.completed
                    }
                })
            }
        }
})
export const {addTodo, deleteTodo, completeTodo} = TodoSlice.actions;
export default TodoSlice.reducer;