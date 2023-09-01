import { rootReducer } from "../rootReducer";

export const myLogger = (state) => (next) => (action) => {
  console.log(`Action: ${JSON.stringify(action)}`);
  console.log(`Before: ${JSON.stringify(state.getState())}`);

  console.log(
    `Upcoming: ${JSON.stringify(
      [action].reduce(rootReducer, state.getState())
    )}`
  );

  return next(action);
};
