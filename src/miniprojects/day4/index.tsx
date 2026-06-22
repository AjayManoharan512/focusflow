import React, { useEffect, useState } from "react";
import styles from "../scss/commonstyles.module.scss";

function Focustimer() {
  const [timeleft, settimeleft] = useState(1500)
  const [isrunning, setisrunning] = useState(false);
  const [sessiondots, setsessiodots] = useState(0)

  useEffect(() => {
    if (timeleft <= 0) {
   setsessiodots(prev => prev >= 4 ? 0 : prev + 1)
      settimeleft(1500)
      setisrunning(false)
      return
    }
  
    if (!isrunning) return;

    const timer = setInterval(() => {
      settimeleft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isrunning, timeleft]);
  console.log(sessiondots)
  // minutes
  const minutes = Math.floor(timeleft / 60);

  // seconds
  const seconds = timeleft % 60;

 useEffect(() => {
  if(isrunning){
document.title = `focus session: ${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  }else{
    document.title=`focus session`
  }
    
  }, [isrunning, minutes, seconds]);
  return (
    <>
      <div className={`commoncard ${styles.focuscard}`}>
        focus session

        <div className={styles.circle}>
          {`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
        </div>

        <div className={styles.circularstsrow}>
          <div className={styles.circulardotsdiv}>
             {[0,1,2,3].map((i) => (
  <div key={i} className={`${styles.dot} ${i < sessiondots ? styles.filled : styles.none}`} />
))}
          </div>

     

          <span>{sessiondots} of 4 sessions</span>
        </div>

        <div className={styles.btnrow}>
          {isrunning ? (
            <button onClick={() => setisrunning(false)}>
              Pause
            </button>
          ) : (
            <button
              onClick={() => {
                if (timeleft > 0) {
                  setisrunning(true);
                }
              }}
            >
              Resume
            </button>
          )}

          <button
            onClick={() => {
              setisrunning(false);
              settimeleft(1500);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default Focustimer;