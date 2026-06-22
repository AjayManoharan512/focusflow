import React from 'react'
import styles from "../../assets/styles/stage1.module.scss"
import Button from '../../customcomponents/button'
import Profilecard from '../../customcomponents/profilecard'
import Login from '../../customcomponents/login'

function Greetingcardgenerator({user}:any) {
  console.log(user)
  return (
    <>
  <div>
    {/* <p>{`Your name is ${user.name} and your age is ${user.age}` }  </p> */}
    {/* <Button  variant={"secondarybtn"} onClick={()=> console.log("button clicked")} title={"submit"} name={"submitbutton"}></Button> */}
     <Profilecard user={user}></Profilecard>
     
  </div>
    
    </>
  )
}

export default Greetingcardgenerator