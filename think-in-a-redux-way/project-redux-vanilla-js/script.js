const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
const totalEl = document.getElementById("total");
const resetEl = document.getElementById("reset");

// initial state
const initialState = {
  id: 1,
  value: 0,
};

// action identityfier
const INCREMENT = "increment";
const DECREMENT = "decrement";
const RESET = "reset";

// action creator
const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};
const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};
const reset = () => {
  return {
    type: RESET,
  };
};

// reducer function
function totalReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
      };
    case DECREMENT:
      if (state.value <= action.payload) {
        return {
          ...state,
          value: 0,
        };
      } else {
        return {
          ...state,
          value: state.value - action.payload,
        };
      }
    case RESET:
      return {
        id: 1,
        value: 0,
      };
    default:
      return state;
  }
}

// create store
const store = Redux.createStore(totalReducer);

const render = () => {
  const state = store.getState();
  console.log({ state });
  totalEl.innerText = state.value.toString();
};

// update UI
render();

store.subscribe(render);

// button click listener
incrementEl.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    store.dispatch(increment(e.target.valueAsNumber));
  }
});
decrementEl.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    store.dispatch(decrement(e.target.valueAsNumber));
  }
});

//reset click event
resetEl.addEventListener("click", (e) => {
  incrementEl.value = 0;
  decrementEl.value = 0;
  store.dispatch(reset());
});
