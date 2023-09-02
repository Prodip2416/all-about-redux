import { bookingReducer } from "./booking/bookingReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  booking: bookingReducer,
});
