import { combineReducers } from "redux";
import counter from './counter';
import logged from './logged';

const allReducer = combineReducers({
    counter: counter,
    logged: logged
});

export default allReducer;