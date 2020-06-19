import React, { useReducer } from "react";
// useReducer(): action 钩子

const reducer = (state, action) => {
    switch (action.type) {
        case "countUp":
            return {
                ...state,
                count: state.count + 1
            };
        default:
            return state;
    }
};

const MyReducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    return (
        <div>
            <h1>Count: {state.count}</h1>
            <button
                onClick={() => {
                    dispatch({ type: "countUp" });
                }}
            >
                +1
            </button>
        </div>
    );
};

export default MyReducer;
