import { reducerMenu } from "./menu/reducerMenu";
import { combineReducers } from "redux";
import { reducerProduct } from "./product/recuderProduct";
import { reducerCart } from "./cart/reducerCart";

export const rootReducer = combineReducers({
  menu: reducerMenu,
  products: reducerProduct,
  carts: reducerCart,
});
