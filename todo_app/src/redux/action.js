import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "./actionTypes";

export const add_todo = ( data ) => {
   return { type: ADD_TODO,
    payload: data
   }
};

export const remove_todo = (data) => ({
    type: REMOVE_TODO,
    payload: data
})

export const update_todo = (data, index) => {
    return {
        type: UPDATE_TODO,
    payload: data,
     index : index
    }
}