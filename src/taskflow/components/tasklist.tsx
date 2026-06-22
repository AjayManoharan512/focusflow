import React, { useEffect } from 'react'
import Filterbar from './filterbar'



function Tasklist() {
  
  
const carddetails = [
    {
      id: 1,
      title: "Single Level - IVR",
      desc: "Handle audio responses/call routing using a single-level IVR menu with up to 5 DTMF keys.",
    
    },
    {
      id: 2,
      title: "Multi Level - IVR",
      desc: "Handle audio responses/call routing via multiple IVR menus at different levels.",
     
    },
    {
      id: 3,
      title: "Hunt Group",
      desc: "Route incoming calls automatically to particular groups.",
     
    },
     {
      id: 4,
      title: "Tata Group",
      desc: "Route incoming calls automatically to particular groups.",
     
    },
     {
      id: 5,
      title: "Tvs Group",
      desc: "Route incoming calls automatically to particular groups.",
     
    },
     {
      id: 6,
      title: "nissan Group",
      desc: "Route incoming calls automatically to particular groups.",
     
    },
  ];
  
  return (
    <>
      <div className='listcontainer'>
        <Filterbar/>
        <div className='cardwrapper'>
          {carddetails.map((card:any)=>  
          <div className='listcard'>
             <div className='header'>
               {card.title}
             </div>
             <div className='description'>
                {card.desc} <br></br><br></br>
                <span><input type="checkbox" />Completed</span>
             </div>
             <div>
          
             </div>
             
           </div>)}
           
        </div>
       
      </div>

 

     
    </>
  )
}

export default Tasklist