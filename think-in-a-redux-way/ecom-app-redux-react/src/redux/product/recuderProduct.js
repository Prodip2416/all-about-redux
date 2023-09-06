import {
  ADD_PRODUCT,
  GET_INITIAL_QUANTITY_PRODUCT,
  UPDATE_PRODUCT,
} from "./actionsType";
import { initialState } from "./initialState";

export const reducerProduct = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];

    case UPDATE_PRODUCT:
      return state.map((item) => {
        if (item.id == action.payload.productId) {
          if (action.payload.actionName == "add") {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else if (action.payload.actionName == "remove") {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
        } else {
          return item;
        }
      });

    case GET_INITIAL_QUANTITY_PRODUCT:
      return state.map((item) => {
        if (item.id == action.payload.productId) {
          return {
            ...item,
            quantity: item.quantity + action.payload.cartQuantity,
          };
        } else {
          return item;
        }
      });

    default:
      return state;
  }
};
