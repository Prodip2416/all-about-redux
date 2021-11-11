import { combineReducers } from "redux";
import { cartReducers } from "./cartReducers";
import { itemReducers } from "./itemReducers";

export const rootReducer = combineReducers({
    itemsReducers: itemReducers,
    cartReducers: cartReducers
})