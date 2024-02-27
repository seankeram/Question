import React, { useReducer } from "react";

const initialState = { count: 0, isActive: false };

function reducer(state, action) {
  switch (action.type) {
    case "toggle":
      return { ...state, isActive: !state.isActive };
    case "updateCount":
      return {
        ...state,
        count: state.isActive ? state.count + 1 : state.count - 1,
      };
    default:
      return state;
  }
}

function IncrementDecrement() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button onClick={() => dispatch({ type: "toggle" })}>
        {state.isActive ? "Deactivate" : "Activate"}
      </button>
      <button onClick={() => dispatch({ type: "updateCount" })}>
        {state.isActive ? "Increment" : "Decrement"}
      </button>
      <p>Count: {state.count}</p>
    </div>
  );
}

// const [isopen, setisopen] = useReducer((state) => !state, fals);
// setisopen;
