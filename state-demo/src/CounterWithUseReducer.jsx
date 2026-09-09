import { useReducer } from "react";

const initialCount = 0;

const countReducer = (state, action) => {
    
    if(action === "inc") return state + 1;

    else if(action === "dec") return state - 1;

    return initialCount;
}

export const CounterWithUseReducer = () => {
    const [state, dispatch] = useReducer(countReducer, initialCount)

    return <>
        <button onClick={() => dispatch("inc")}>Increment</button> <br />
        <button onClick={() => dispatch("dec")}>Decrement</button> <br />
        <button onClick={() => dispatch("reset")}>Reset</button> <br />
        <p>Count: {state} </p>
    </>
}

// useReducer works somewhat similar like reduce() func of js but accepts different arguments like countReducer and initialCount