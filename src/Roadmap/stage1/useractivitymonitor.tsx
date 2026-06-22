import React, { useEffect, useState } from 'react';
import styles from "../../assets/styles/stage1.module.scss"

function Useractivitymonitor({name , currentsts}:any){
   
      useEffect(() => {
    console.log(`${name} component mounted`);
    return () => {
      console.log(`${name} component unmounted`);
    };
  }, []);

  
  useEffect(() => {
    if (currentsts) {
      console.log(`${name} is now ONLINE`);
    } else {
      console.log(`${name} is now OFFLINE`);
    }
  }, [currentsts]);


  useEffect(() => {
    if (!currentsts) return;

    const timer = setTimeout(() => {
      console.log(`${name} is active for 10 seconds`);
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentsts]);

    return(<>
    {name} 

    </>)
}export default Useractivitymonitor;