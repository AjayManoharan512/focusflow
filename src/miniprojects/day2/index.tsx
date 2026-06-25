import { useState } from "react";
import styles from "../shared/styles/commonstyles.module.scss"


    
    const moods = [
        { label: "great", icon: "😁", message: "You're on fire today! Keep that energy going, it's contagious." },
        { label: "good", icon: "🙂", message: "Solid day! Good is more than enough — build on it." },
        { label: "okay", icon: "😐", message: "That's okay. Not every day is peak — just keep showing up." },
        { label: "low", icon: "😔", message: "Tough day? Be kind to yourself. Rest is part of the process." },
        { label: "bad", icon: "😞", message: "Sorry you're feeling this way. Take it one small step at a time." },
    ]
  
function MoodCapturer() {
    const [logincount, setlogincount] = useState(0)
     const [activetab, setactivetab] = useState(null)
       const handletab = (index: number) => {
        setactivetab(index)
        setlogincount(prev => prev + 1)
    }
    const reset = () => {
        setactivetab(null)
        setlogincount(0)
    }
   
    return (<>
        <div className={`commoncard ${styles.moodcard}`}>
            <div className={styles.top}>
                <div>How are u feeling today</div>
                <span>Tap a mood to log it</span>
            </div>
            <div className={styles.center}>
                <div className={styles.btnflex}>
                    {
                        moods.map((item, index) => <div key={index} className={`${styles.moodbtn} ${activetab === index ? styles.active : ""}`} onClick={() => handletab(index)} >{item.label}<br></br>{item.icon} </div>)
                    }

                </div>
                <div className={styles.abtmoodtxt}>
                    {
                        moods?.[activetab]?.message ?? <div> No data</div>
                    }

                </div>

            </div>
            <div className={styles.bottom}>
                { logincount > 0 ?<div>Logged <span>{logincount}</span> times</div>: ""}
                {logincount > 0 ?<button onClick={reset}>Reset</button>:""}
            </div>
        </div>
    </>)
} export default MoodCapturer
