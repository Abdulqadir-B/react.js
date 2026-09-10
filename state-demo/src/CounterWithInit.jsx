// using the init as the 3rd argument in the useReducer() hook

import { useReducer } from "react";

const initialCount = 0;

const countReducer = (state, action) => {
  if (action === "inc") return state + 1;
  else if (action === "dec") return state - 1;

  return initialCount;
};

// init function -> 3rd argument
const init = (initialCount) => {
  console.log("init function called - this only runs once!");

  // use localStorage -> setItem() from the console and refresh to see
  const savedCount = localStorage.getItem("count");

  if (savedCount !== null) {
    console.log("Found saved count:", savedCount);
    return parseInt(savedCount);
  }

  console.log("No saved count, using initial value:", initialCount);

  return initialCount;
};

export const CounterWithInit = () => {
  const [state, dispatch] = useReducer(countReducer, initialCount, init);

  return (
    <>
      <button onClick={() => dispatch("inc")}>Increment</button> <br />
      <button onClick={() => dispatch("dec")}>Decrement</button> <br />
      <button onClick={() => dispatch("reset")}>Reset</button> <br />
      <p>Count: {state} </p>
    </>
  );
};
