import React from "react"
import styles from "../scss/commonstyles.module.scss"

function HabitCard({habitcards}:any) {
  
 if (!habitcards || habitcards.length === 0) {
        return <div></div>
    }
    return (<>
        <div className={styles.cardflex}>
            {
                habitcards.map((el:any, index:any) =>



                    <div key={index} className={`commoncard ${styles.card}`}>
                        <div className={styles.top}>
                            <div>{el.name}</div>
                            <span className={styles.chip}>{el.category}</span>
                        </div>
                        <div className={styles.content}>
                            <span>{el.streak}</span> day streak
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.dotsflex}>

                                <div className={`${styles.dot} ${styles.filled}`} />
                                <div className={`${styles.dot} ${styles.filled}`} />
                                <div className={`${styles.dot} ${styles.filled}`} />
                                <div className={`${styles.dot} ${styles.filled}`} />
                                <div className={`${styles.dot}`} />
                                <div className={`${styles.dot} `} />
                                <div className={`${styles.dot} `} />



                            </div>
                        </div>
                    </div>

                )
            }
        </div>



    </>)
} export default HabitCard