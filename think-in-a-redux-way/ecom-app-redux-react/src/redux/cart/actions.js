import { ADD_TO_CART, DELETE_CART, UPDATE_CART } from "./actionType";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};
export const updateCart = (productId, actionName) => {
  return {
    type: UPDATE_CART,
    payload: {
      productId,
      actionName,
    },
  };
};
export const deleteCart = (productId) => {
  return {
    type: DELETE_CART,
    payload: {
      productId,
    },
  };
};
