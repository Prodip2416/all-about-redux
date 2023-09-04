import { reducerFilter } from "./todos-filter/reducerFilter";
import { reducerTodos } from "./todos/reducerTodos";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  todos: reducerTodos,
  filters: reducerFilter,
});
