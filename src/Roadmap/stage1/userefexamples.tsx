import React, { useEffect, useRef, useState } from "react";


// function Trackprevvalue(){
//     const [currentval , setcurrentval]= useState("")
//     const inpref=useRef("")
//     useEffect(()=>{
//       inpref.current=currentval
//     },[currentval])
//     return(<>
//     <input type="text"  ref={inpref}  onChange={(e:any)=> setcurrentval(e.target.value)}/><br></br>
//       {`current val : ${currentval}`} <br></br>
//           {`prev val : ${inpref.current}`}
//     </>)
// }export default Trackprevvalue;

// function Trackrender({name}:any){
//       const inpref=useRef(0)
//      console.log(inpref.current ++)
//     return(<>
//       {name}
//     </>)
// }export default Trackrender;

// function Trackrerender({name}:any){

//       const trueref= useRef(true)
//       if(trueref.current){
//         console.log("first render")
//         trueref.current=false;
//       }else{
//         console.log("re-renders")
//       }
    
//     return(<>
//       {name}

//     </>)
// }export default Trackrerender;
// function Autofocusinputnew(){
//     const inpref= useRef(null)
//     useEffect(()=>{
//         inpref.current?.focus()
//     },[])
//     function handlefocus(){
//          inpref.current?.focus()
//     }
//     return(<>
//      <input type="text" ref={inpref}/>
//      <button onClick={handlefocus}>focus</button>
//     </>)
// }export default Autofocusinputnew