import { reducerMenu } from "./menu/reducerMenu";
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
  menu: reducerMenu,
});
