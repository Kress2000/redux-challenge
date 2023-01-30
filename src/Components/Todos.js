import { createSlice } from "@reduxjs/toolkit";
import {TodosData} from './FakeTodos';
export const TodoSlice = createSlice({
    name: "todos",
    initialState: {
        value: TodosData},
        reducers: {
            addTodo: (state, action)=>{
                //todo cdes asdd
                state.value.push(action.payload)
            }
        }
})
export const {addTodo} = TodoSlice.actions;
export default TodoSlice.reducer;