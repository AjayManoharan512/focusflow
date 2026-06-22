import react, { useState } from "react"
import styles from "../scss/commonstyles.module.scss"

function Tripform({sendmessage}) {
  const [trip,settrip]=useState({
      id:1,
      destination:"",
      activity:""
  })
const addtripfunction = () => {
  if (!trip.destination.trim()) return
  sendmessage(trip)
  settrip({ destination: "", activity: "" })
}
    return (<>

        <div className={`commoncard ${styles.goalformcard}`}>
            <div className={styles.title}>Plan a New Trip</div>

            <input
                type="text"
                placeholder="Your destination"
                value={trip.destination}
                onChange={(e)=>{
                  settrip({
                    ...trip, destination:e.target.value
                  })
                }}
            />

            <div className={styles.addgoalblock}>
                <input
                    type="text"
                    placeholder="Your activity"
                     value={trip.activity}
                      onChange={(e)=>{
                  settrip({
                    ...trip, activity:e.target.value
                  })
                }}
               onKeyDown={(e) => {
            if (e.key === "Enter") {
              addtripfunction()
            }
          }}
                />

                <button onClick={addtripfunction} >Add Trip</button>
            </div>
        </div>
    </>)
} export default Tripform;