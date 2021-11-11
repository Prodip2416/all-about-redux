import { combineReducers } from "redux";
import { itemReducers } from "./itemReducers";
import { userReducers } from "./userReducers";


export const rootReducer = combineReducers({
    itemReducer: itemReducers,
    userReducer:userReducers
}); 