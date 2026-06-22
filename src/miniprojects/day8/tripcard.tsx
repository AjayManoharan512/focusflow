import React, { useState } from "react";
import styles from "../scss/commonstyles.module.scss";

function Trpcard({ trip, ondelete, onlistdel, onToggle ,onaddactivity}: any) {
      const [newActivity, setNewActivity] = useState("");
  const handleAdd = () => {
    if (!newActivity.trim()) return;

    onaddactivity(trip.id, newActivity);
    setNewActivity("");
   
  };
  const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
    return (
        <div className={`commoncard ${styles.goalformcard} ${styles.tripformcard}`}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
                className={styles.header}
            >
                <div className={styles.title} style={{ padding: "0px", display:"flex", alignItems:"center", gap:"4px" }}><LocationIcon/>   {trip.destination}</div>

                <button onClick={() => ondelete(trip.id)}>
                    Delete Trip
                </button>
            </div>

            <div className={styles.body}>

                {trip.activities.map((activity: any) => (
                    <div key={activity.id} className={styles.items}>

                        <label className={styles.checkboxblock} style={{ alignItems: "center" }} >
                            <input
                                type="checkbox"
                                checked={activity.done}
                                onChange={() => onToggle(trip.id, activity.id)}

                            />
                            <span
                                style={{
                                    textDecoration: activity.done ? "line-through" : "none",
                                }}
                            >
                                {activity.text}
                            </span>
                        </label>
                        <div style={{ display: "grid" }} onClick={() => onlistdel(trip.id, activity.id)}>
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" stroke="#000000" stroke-width="2"></path> <path d="M9 9L15 15M15 9L9 15" stroke="#000000" stroke-width="2" stroke-linecap="round"></path> </g></svg>
                        </div>

                    </div>
                ))}
            </div>
               { trip.activities.length >0 ?<div className={styles.footer}>
                 <input type="text"
                 placeholder="Enter extra trip activities"
                 value={newActivity}
                  onChange={(e:any)=> setNewActivity(e.target.value  )}
                 onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAdd()
            }
          }}
                  
                  />
             </div>:""}

        </div>
    );
}

export default Trpcard;