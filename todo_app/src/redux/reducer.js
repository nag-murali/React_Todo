import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "./actionTypes";

const init_todo = [{
    des: "",
    status: false,
    date: "",
    time: ""
},];

export const reducer_todo = (store = init_todo, action) => {

    switch (action.type){

        case ADD_TODO : 
         return  [...store, action.payload];
         default : 
         return store;
    }
}