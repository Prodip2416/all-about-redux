import { NEW_BOOKING, DELETE_BOOKING } from "./actionTypes";
const initialState = [];

export function bookingReducer(state = initialState, action) {
  switch (action.type) {
    case NEW_BOOKING:
      return [...state, action.payload];

    case DELETE_BOOKING:
      const allBooking = state.filter((b) => b.id != action.payload);
      return [...allBooking];

    default:
      return state;
  }
}
