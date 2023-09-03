import {
  ADD_TODO,
  ALL_COMPLETED_TODO,
  CLEAR_COMPLETED_TODO,
  COLOR_SELECTED_TODO,
  DELETE_TODO,
  TOGGLED_TODO,
} from "./actionsType";
import { initialState } from "./initialState";

const getMaxId = (state) => {
  return state.reduce((prev, item) => Math.max(prev, item.id), 0);
};

export const reducerTodos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newItem = {
        ...action.payload,
        id: getMaxId(state) + 1,
      };
      return [...state, newItem];

    case TOGGLED_TODO:
      return state.map((todo) => {
        if (todo.id == action.payload.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      });

    case COLOR_SELECTED_TODO:
      return state.map((todo) => {
        if (todo.id == action.payload.id) {
          return {
            ...todo,
            color: [...action.payload.color],
          };
        } else {
          return todo;
        }
      });

    case DELETE_TODO:
      return state.filter((todo) => todo.id != action.payload.id);

    case ALL_COMPLETED_TODO:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });

    case CLEAR_COMPLETED_TODO:
      return state.filter((todo) => todo.completed != true);

    default:
      return state;
  }
};
