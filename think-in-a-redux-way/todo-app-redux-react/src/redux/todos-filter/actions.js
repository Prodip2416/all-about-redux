import { COLOR_FILTER_TODO, STATUS_CHANGED } from "./actionType";

export const statusChanged = (status) => {
  return {
    type: STATUS_CHANGED,
    payload: status
  };
};
export const colorSelectFilter = (color) => {
  return {
    type: COLOR_FILTER_TODO,
    payload: {
      color,
    },
  };
};
