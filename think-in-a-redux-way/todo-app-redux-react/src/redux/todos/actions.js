import {
  ADD_TODO,
  ALL_COMPLETED_TODO,
  CLEAR_COMPLETED_TODO,
  COLOR_SELECTED_TODO,
  DELETE_TODO,
  TOGGLED_TODO,
} from "./actionsType";

export const addTodos = (value) => {
  return {
    type: ADD_TODO,
    payload: value,
  };
};
export const toggledTodos = (id) => {
  return {
    type: TOGGLED_TODO,
    payload: {
      id,
    },
  };
};
export const colorSelectedTodos = (id, color) => {
  return {
    type: COLOR_SELECTED_TODO,
    payload: {
      id,
      color,
    },
  };
};
export const deletedTodos = (id) => {
  return {
    type: DELETE_TODO,
    payload: {
      id,
    },
  };
};
export const allCompletedTodos = () => {
  return {
    type: ALL_COMPLETED_TODO,
  };
};
export const clearCompletedTodos = () => {
  return {
    type: CLEAR_COMPLETED_TODO,
  };
};
