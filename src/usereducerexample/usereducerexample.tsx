import React, { useReducer } from "react";

function Usereducerexample() {

  const initialState = {
    num1: "",
    num2: "",
    result: 0
  };

  function reducer(state, action) {
    switch (action.type) {
      case "SET_NUM1":
        return { ...state, num1: action.payload };

      case "SET_NUM2":
        return { ...state, num2: action.payload };

      case "ADD":
        return {
          ...state,
          result: Number(state.num1) + Number(state.num2)
        };

      case "SUB":
        return {
          ...state,
          result: Number(state.num1) - Number(state.num2)
        };

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          minHeight: "100dvh",
          minWidth: "300px",
          margin: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <input
            type="number"
            placeholder="Enter number 1"
            value={state.num1}
            onChange={(e) =>
              dispatch({ type: "SET_NUM1", payload: e.target.value })
            }
          />

          <input
            type="number"
            placeholder="Enter number 2"
            value={state.num2}
            onChange={(e) =>
              dispatch({ type: "SET_NUM2", payload: e.target.value })
            }
          />

          <div style={{ display: "flex", gap: "16px" }}>
            <button onClick={() => dispatch({ type: "ADD" })}>ADD</button>
            <button onClick={() => dispatch({ type: "SUB" })}>SUB</button>
          </div>

          <h2>Result: {state.result}</h2>
        </div>
      </div>
    </>
  );
}

export default Usereducerexample;
