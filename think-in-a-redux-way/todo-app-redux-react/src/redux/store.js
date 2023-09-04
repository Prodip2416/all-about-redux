import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./rootReducer";
import {applyMiddleware, createStore} from "redux";
import logger from 'redux-logger'

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));
