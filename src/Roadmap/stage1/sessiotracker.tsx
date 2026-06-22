import React, { useEffect, useState } from "react";
import styles from "../../assets/styles/stage1.module.scss"
function Sessiontracker({name}:any){
    const [activetxt, setactivetxt]= useState(false)
    useEffect(()=>{
     console.log(`${name} session started`)
     const timer= setInterval(() => {
        console.log(`${name} still online`)
     }, 5000);
     const stoper=setTimeout(()=>{
         console.log(`${name} session ended`)
           clearInterval(timer);
           setactivetxt(true)
    },20000);
     return () => {
    clearInterval(timer);
    clearTimeout(stoper)
 
  };
        
 
     
  
    },[])
    return(<> 
     <div className={styles.statusbox}>
        {name}<br></br>
       <span> Session is {activetxt ? <span style={{color:"red"}}>Ended</span>: <span style={{color:"green"}}>Active</span>}</span>
     </div>
    </>)
}export default Sessiontracker;