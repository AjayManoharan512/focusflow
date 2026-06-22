import React, { useEffect, useState } from "react";
import styles from "../scss/commonstyles.module.scss";
import HabitCard from "../day1";
const habitcards = [
    { name: "Walking", category: "health", streak: 20 },
    { name: "Meditation", category: "mind", streak: 10 },
     { name: "Reading", category: "mind", streak: 50 },
    { name: "Gardening", category: "hobby", streak: 70 },
    { name: "Swimming", category: "health", streak: 20 },
]
function Dashboard() {

    const [activefilter, setactivefilter] = useState({
        tab: "all",
        
    })
    const filtered = activefilter.tab === "all"
        ? habitcards
        : habitcards.filter(h => h.category.toLowerCase() === activefilter.tab)

    return (<>
        <div className={styles.dashboardbody}>
            <div className={styles.headerarea}>
                <div className={styles.title}>My Habits</div>
                <div className={styles.today}>Today</div>
            </div>
            <div className={styles.maingridblock}>
                <div className={styles.box}>
                    <div className={styles.val}>{habitcards.length}</div>
                    <div className={styles.desc}>Total habits</div>
                </div>
                <div className={styles.box}>
                    <div className={styles.val}>{Math.max(...habitcards.map(h => h.streak))}</div>
                    <div className={styles.desc}>Best streak</div>
                </div>
                <div className={styles.box}>
                    <div className={styles.val}>3</div>
                    <div className={styles.desc}>Done today</div>
                </div>
            </div>
            <div style={{ padding: "0 16px" }} className={styles.filters}>
                <div
                    className={`${styles.filter} ${activefilter.tab === "all" ? styles.filled : ""
                        }`}
                    onClick={() => setactivefilter({ tab: "all"})}
                >
                    All
                </div>

                <div
                    className={`${styles.filter} ${activefilter.tab === "health" ? styles.filled : ""
                        }`}
                    onClick={() => setactivefilter({ tab: "health" })}
                >
                    Health
                </div>

                <div
                    className={`${styles.filter} ${activefilter.tab === "mind" ? styles.filled : ""
                        }`}
                    onClick={() => setactivefilter({ tab: "mind" })}
                >
                    Mind
                </div>
                <div
                    className={`${styles.filter} ${activefilter.tab === "hobby" ? styles.filled : ""
                        }`}
                    onClick={() => setactivefilter({ tab: "hobby" })}
                >
                    Hobby
                </div>
            </div>
            <HabitCard habitcards={filtered} />
        </div>
    </>)
} export default Dashboard