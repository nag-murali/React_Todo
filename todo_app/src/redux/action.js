import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "./actionTypes";

export const add_todo = ( data ) => {
   return { type: ADD_TODO,
    payload: data
   }
};

export const remove_todo = ( ) => ({
    type: REMOVE_TODO
})

export const update_todo = (data) => {
    return {
        type: UPDATE_TODO,
    payload: data
    }
}