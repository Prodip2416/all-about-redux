import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./rootReducer";
import { myLogger } from "./middlewares/myLogger";
import logger from "redux-logger";

export const store = createStore(
  rootReducer,
  applyMiddleware(myLogger, logger)
);
