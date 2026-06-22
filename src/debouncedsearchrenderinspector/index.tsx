import React, { useEffect, useRef, useState } from "react";

function Debouncerenderins() {
  /* ---------------- Render counter (no re-render) ---------------- */
  const renderRef = useRef(0);
  renderRef.current++;

  /* ---------------- Search input state ---------------- */
  const [searchtxt, setsearchtxt] = useState("");

  /* ---------------- Debounced value ---------------- */
  const [debouncedValue, setDebouncedValue] = useState("");

  /* ---------------- Previous debounced value ---------------- */
  const prevDebouncedRef = useRef("");

  /* ---------------- Input DOM ref (ONLY for focus) ---------------- */
  const inputRef = useRef<HTMLInputElement | null>(null);

  /* Auto focus on mount */
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  /* Debounce logic */
  useEffect(() => {
    const timer = setTimeout(() => {
      prevDebouncedRef.current = debouncedValue; // store previous
      setDebouncedValue(searchtxt);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchtxt]);

  return (
    <div className="overallformofuserpresence">
      <b>Debounce monitor & render monitor</b>

      <div className="searchwrapper">
        <div className="header">
          <div>
            <input
              ref={inputRef}
              type="search"
              value={searchtxt}
              onChange={(e) => setsearchtxt(e.target.value)}
            />
            <button onClick={() => setsearchtxt("")}>Clear</button>
          </div>

          <div className="rightend">
            <label>Render count:</label>
            <p>{renderRef.current}</p>
          </div>
        </div>

        <div className="prevsearch">
          <div> <label style={{fontWeight:"500"}}>Debounced value:</label> {debouncedValue}</div>
          <div> <label style={{fontWeight:"500"}}> Previous debounced value:</label> {prevDebouncedRef.current}</div>
        </div>
      </div>
    </div>
  );
}

export default Debouncerenderins;
