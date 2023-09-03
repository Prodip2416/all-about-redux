import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./rootReducer";
import {createStore} from "redux";

export const store = createStore(rootReducer, composeWithDevTools());
