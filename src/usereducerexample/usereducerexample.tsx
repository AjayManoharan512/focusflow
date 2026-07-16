import { useEffect, useReducer, useState, useRef } from "react";

function Usereducerexample() {
  const boxref = useRef<HTMLDivElement | null>(null);
  const addInputRef = useRef<HTMLInputElement | null>(null);
  const editInputRef = useRef<HTMLInputElement | null>(null);
  const [inputval, setinputval] = useState("")
  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState("")

  const initialstate = [{}];
  function reducer(state: any, action: any) {

    switch (action.type) {
      case "add": return [...state, { id: Date.now(), text: inputval, done: false }];
      case "toggle": return state.map((task: any) => task.id === action.id ? { ...task, done: !task.done } : task);
      case "delete": return state.filter((task: any) => task.id !== action.id);
      case "edit": return state.map((task: any) => task.id === action.id ? { ...task, text: action.payload } : task);
      default: return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialstate)
  const boxHeight = boxref.current?.offsetHeight ?? 0;

  useEffect(() => {
    addInputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (editId !== null) {
      editInputRef.current?.focus();
    }
  }, [editId]);
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", width: "400px", margin: "auto", marginTop: "100px", padding: "20px", border: "1px solid black", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)", background: boxHeight >= 300 ? "blue" : "" }} ref={boxref}>

        <h1 style={{ textAlign: "center" }}>Tasks</h1>
        <div>

          <input
            ref={addInputRef}
            type="text"
            placeholder="Add a task"
            onKeyDown={(e: any) => {
              if (e.key === "Enter") {
                dispatch({ type: "add" })
              }
            }}
            onChange={(e: any) => setinputval(e.target.value)}
            style={{
              border: "1px solid #d2d3d4",
              padding: "6px",
              borderRadius: "6px",
            }}
          ></input>
          <button onClick={() => dispatch({ type: "add" })}>Add task</button>
        </div>
        <div>
          {state.filter((task: any) => task.text?.trim()).length > 0 &&
            state
              .filter((task: any) => task.text?.trim())
              .map((task: any) => (
                <div key={task.id} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: "10px", gap: "10px" }}>
                  {editId === task.id ? (
                    <div style={{ display: "flex", gap: "5px", flex: 1 }}>
                      <input
                        ref={editInputRef}
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        style={{
                          flex: 1,
                          padding: "6px",
                          border: "1px solid #d2d3d4",
                          borderRadius: "6px",
                        }}
                      />
                      <button
                        onClick={() => {
                          dispatch({ type: "edit", id: task.id, payload: editText });
                          setEditId(null);
                        }}
                      >
                        Save
                      </button>
                      <button onClick={() => setEditId(null)}>Cancel</button>
                    </div>
                  ) : (
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", flex: 1 }}>
                      <span style={{ textDecoration: task.done ? "line-through" : "none" }}>{task.text}</span>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <button
                          onClick={() => {
                            setEditId(task.id);
                            setEditText(task.text);
                          }}
                        >
                          Edit
                        </button>
                        <button onClick={() => dispatch({ type: "delete", id: task.id })}>Delete</button></div>
                    </div>
                  )}
                </div>
              ))}

        </div>


      </div>

    </>

  );
}

export default Usereducerexample;
