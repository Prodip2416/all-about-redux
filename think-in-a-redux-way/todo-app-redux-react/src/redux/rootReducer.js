import { reducerTodos } from "./todos/reducerTodos";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  todos: reducerTodos,
});
