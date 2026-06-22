import React from 'react'
import styles from "../assets/styles/stage1.module.scss"
function Profilecard({user}:any) {
    console.log(user)
    return (
        <div>
            <div className={styles.card}>
                <div className={styles.header}>
                        <h3 className={styles.name}> {user.name}</h3>
                        <p className={styles.title}> {user.title}</p>
                </div>
                <p className={styles.bio}>{user.bio}</p>
                
            </div>

        </div>
    )
}

export default Profilecard