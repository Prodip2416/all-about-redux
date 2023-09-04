import { COLOR_FILTER_TODO, STATUS_CHANGED } from "./actionType";
import { initialState } from "./initialState";

export const reducerFilter = (state = initialState, action) => {
  switch (action.type) {
    case STATUS_CHANGED:
      return {
        ...state,
        status: action.payload,
      };

    case COLOR_FILTER_TODO:
      if (action.payload.type == "remove") {
        return {
          ...state,
          color: "",
        };
      } else if (action.payload.type == "add") {
        return {
          ...state,
          color: action.payload.color,
        };
      }
    default:
      return state;
  }
};
