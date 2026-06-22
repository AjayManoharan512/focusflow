import React, { useEffect, useState } from 'react';
import styles from "../../assets/styles/stage1.module.scss"

function Statuswatcher({name,status,func}:any){
      useEffect(()=>{
   console.log(`${status ? `${name} came`:`${name} goes`}`)
 const timer = setTimeout(() => {
    func(!status);
  }, 3000);

  return () => {
    clearTimeout(timer);
  };
  },[status])

    return(<>
     <div className={styles.statusbox}>
                <h4>{name}</h4>
               {status ? "ONLINE":"OFFLINE"}
                
            </div>
    </>)
}export default Statuswatcher