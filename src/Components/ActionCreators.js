import * as actions from './ActionTypes';

export const  AddTodo=title=>({
    type: actions.ADD_TODO,
    payload: {
        title
    }
})
// complete Todos
export const CompeteTodo = id =>({
        type: actions.REMOVE_TODO,
        payload: {
            id
        }
    })
// delete 
export const DeleteTodo=id=>({
        type: actions.COMPLETE_TODO,
        payload: {
            id
        }
    })