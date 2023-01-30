import * as actions from './ActionTypes'
// import {produce} from 'immer';
let id = 0
export default function Reducer(state=[], action){
    switch (action.type){
        case actions.ADD_TODO:
            return [
                ...state,
                 {
                    complete: false,
                    id:  ++id,
                    title: action.payload.title
                }
            ]
        case actions.COMPLETE_TODO:
            return state.map(todo=>todo.id !== action.payload.id? todo: {...todo, complete: true})
        case actions.REMOVE_TODO:
            return state.filter(todo=> todo.id !== action.payload.id)
        default:
            return state;

            
    }

}
