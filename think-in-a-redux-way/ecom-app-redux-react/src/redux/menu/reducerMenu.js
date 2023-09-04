import { TOGGLED_MENU } from "./actionTypes";

const initialState = {
  menu: "home",
};

export const reducerMenu = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLED_MENU:
      return {
        ...state,
        menu: action?.payload,
      };

    default:
      return state;
  }
};
