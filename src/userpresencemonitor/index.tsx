import React, { useEffect, useRef, useState } from "react";

function Userpresencemonitor({ name }: any) {
  const [idleSeconds, setIdleSeconds] = useState(0);
  const [isOnline, setIsOnline] = useState(true);

  const renderCountRef = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  renderCountRef.current++;

  // 🔹 Mount / Unmount
  useEffect(() => {
    console.log("component mounted");

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      console.log("component unmounted");
    };
  }, []);

  // 🔹 Idle timer
  useEffect(() => {
    if (!isOnline) return;

    intervalRef.current = setInterval(() => {
      setIdleSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isOnline]);

  // 🔹 Derived status (NO extra state 👍)
  const status = !isOnline
    ? "Offline"
    : idleSeconds > 12
    ? "Away"
    : "Online";

  // 🔹 Log status change
  useEffect(() => {
    console.log(`User status: ${status}`);
  }, [status]);

  return (
    <div className="overallformofuserpresence">
      <b>User presence monitor</b>

      <div className="formuserpresence">
        <div className="block">
          <label>User name</label>
          <p>{name}</p>
        </div>

        <div className="block">
          <label>Status</label>
          <p>{status}</p>
        </div>

        <div className="block">
          <label>Idle seconds</label>
          <p>{idleSeconds}</p>
        </div>

        <div className="block">
          <label>Render count</label>
          <p>{renderCountRef.current}</p>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "end",
          gap: "12px",
          marginTop: "12px",
        }}
      >
        <span>Offline</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={isOnline}
            onChange={(e) => {
              setIsOnline(e.target.checked);
              setIdleSeconds(0);
            }}
          />
          <span className="slider round"></span>
        </label>
        <span>Online</span>
      </div>
    </div>
  );
}

export default Userpresencemonitor;
