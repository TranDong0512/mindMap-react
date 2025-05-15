import { useReducer } from "react";

type State = {
    count: number;
};

type Action =
    | { type: "INCREMENT" }
    | { type: "DECREMENT" }
    | { type: "RESET" };

const initialState: State = {
    count: 0,
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + 1 };
        case "DECREMENT":
            return { ...state, count: state.count - 1 };
        case "RESET":
            return { ...state, count: 0 };
        default:
            return state;
    }
};

const UseReducerComponent = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div>Count: {state.count}</div>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
            <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        </div>
    );
};

export default UseReducerComponent;
