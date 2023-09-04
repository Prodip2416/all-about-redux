import { TOGGLED_MENU } from "./actionTypes";

export const toggledMenu = (menu) => {
  return {
    type: TOGGLED_MENU,
    payload: menu,
  };
};
