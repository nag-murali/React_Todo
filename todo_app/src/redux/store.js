import { reducer_todo } from "./reducer";
import {createStore} from "redux";

export const store = createStore(reducer_todo);

console.log(store.getState());