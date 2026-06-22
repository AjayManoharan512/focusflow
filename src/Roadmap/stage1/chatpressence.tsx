import react, { useEffect } from "react";

function Chatpresence ({isconnected , func, name}:any){
   useEffect(()=>{
     console.log(`${name} joined the chat`)
     const timer= setTimeout(() => {
         console.log(`${name} is active nearly 5 secs`)
     }, 5000);
     const updater= setTimeout(() => {
        func(false)
     }, 15000);
     return(()=>{clearTimeout(timer), clearTimeout(updater) ,  console.log(`${name} left the chat`)})
   },[])
   useEffect(()=>{
       if(isconnected){
        console.log(`${name} is online`)
       }
       else{
        console.log(`${name} is offline`)
       }
   },[isconnected])
    return(<>
    
    </>)
}export default Chatpresence;