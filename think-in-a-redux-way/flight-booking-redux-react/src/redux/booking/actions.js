import { NEW_BOOKING, DELETE_BOOKING } from "./actionTypes";

export const addBooking = (value) => {
  return {
    type: NEW_BOOKING,
    payload: value,
  };
};
export const deleteBooking = (value) => {
  return {
    type: DELETE_BOOKING,
    payload: value,
  };
};
