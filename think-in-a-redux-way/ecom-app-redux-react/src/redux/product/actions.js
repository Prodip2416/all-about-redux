import {
  ADD_PRODUCT,
  GET_INITIAL_QUANTITY_PRODUCT,
  UPDATE_PRODUCT,
} from "./actionsType";

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};
export const updateProduct = (productId, actionName) => {
  return {
    type: UPDATE_PRODUCT,
    payload: {
      productId,
      actionName,
    },
  };
};
export const getInitialProduct = (productId, cartQuantity) => {
  return {
    type: GET_INITIAL_QUANTITY_PRODUCT,
    payload: {
      productId,
      cartQuantity,
    },
  };
};
