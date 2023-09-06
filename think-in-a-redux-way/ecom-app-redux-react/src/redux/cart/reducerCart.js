import { ADD_TO_CART, DELETE_CART, UPDATE_CART } from "./actionType";
import { initialState } from "./initialState";

export const reducerCart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];

    case UPDATE_CART:
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

    case DELETE_CART:
      return state.filter((i) => i.id != action.payload.productId);

    default:
      return state;
  }
};
