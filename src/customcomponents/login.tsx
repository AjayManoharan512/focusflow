import React, { useEffect, useState } from 'react'
import styles from "../assets/styles/stage1.module.scss"
import Button from './button'

function Loginneww() {
    const [islogin , setlogin] = useState(false)
    useEffect(()=>{
        if(islogin== true){
       alert("welcome user")
        }

    }, [islogin])
  return (
    <div>
          <div style={{height:"100%" , display:"grid", placeItems:"center" , minHeight:"100dvh"}}>
           <div className={styles.centered}>
                    {islogin ? <p>Log out</p> : <><p>Log in</p>  </>}
                 {islogin ? <><Button title={"Logout"} onClick={() => setlogin(!islogin)} variant={"secondarybtn"} ></Button> </> :<> <Button title={"Login"} onClick={() => setlogin(!islogin)}  ></Button></>} 
            </div>
          </div>
        
    </div>
  )
}

export default Loginneww