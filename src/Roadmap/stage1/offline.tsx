import React, { useState } from 'react';
import styles from "../../assets/styles/stage1.module.scss"
const Offlinestatus = ({name,status,onChange}:any) => {

    return (
        <>
            <div className={styles.statusbox}>
                <h4>{name}</h4>
               {status ? "ONLINE":"OFFLINE"}
                <label className="switch">
                    <input type="checkbox" checked={status}
      onChange={(e) => onChange(e.target.checked)}
        
        />
                    <span className="slider round"></span>
                </label>
            </div>
        </>
    )
}
export default Offlinestatus;