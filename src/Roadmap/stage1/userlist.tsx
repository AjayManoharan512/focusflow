import React, { Component, useEffect, useReducer, useState } from 'react'
import styles from "../../global.scss"
import CustomRangePicker from '../../customcomponents/customdaterangepicker/datepicker';
// function Userlist() {

//     const userdata=[
//           {id:1 , name :"ajay", age:26 , place:"monday market"},
//           {id:2 , name :"shenu", age:27 , place:"kaliyakavilai"},
//           {id:3 , name :"dinu", age:28 , place:"muransankode"},
//           {id:4 , name :"kiran", age:20 , place:"chennai"}]
//   return (
//     <div>

//     {
//         userdata.map((el)=><div key={el.id} classNameNameName='commoncard'> <p>{el.name}</p> <p>{el.age}</p> <p>{el.place}</p></div>)
//     }

//     </div>
//   )
// }

// export default Userlist


// function Movielist(){
//     const movies=[
//         {
//             title:"shawshank redemption" , releasedyear:1999, rating:9 ,  id: crypto.randomUUID()
//         },
//          {
//             title:"God father" , releasedyear:1940, rating:10,  id: crypto.randomUUID()
//         },
//          {
//             title:"titanic" , releasedyear:2001, rating:9,  id: crypto.randomUUID()
//         },

//          {
//             title:"avator" , releasedyear:2016, rating:9,  id: crypto.randomUUID()
//         },
//     ]

//   return(
//     <>
//        {
//         movies.map((item)=>{
//               console.log(item.id)
//               return <div classNameNameName='commoncard' key={item.id} id={item.id}> <p>{item.title}</p> <p>{item.releasedyear}</p> <p>{item.rating}</p></div>
//         })
//        }
//     </>
//   )
// }export default Movielist


// function Counter(){
//     const initialstate=0;
//     function reducer(state:any, action:any){
//         switch(action.type){
//              case "inc": return state + 1; 
//              case "dec": return  state==0? 0:state - 1  ; 
//              case "reset":return 0;
//             default:return state;
//         }
//     }
//    const [state, dispatch]= useReducer(reducer, initialstate)
//     return(<>
//           <div style={{display:"flex" , flexDirection:"column" , gap:"12px" , maxWidth:"300px"}}>
//             <div style={{display:"flex", justifyContent:"center",  maxWidth:"300px"}}>
//                 {state}
//             </div>
//               <div style={{display:"flex" , gap:"12px", alignItems:"center", justifyContent:"center"}} >
//                  <button onClick={()=>dispatch({type:"inc"})}>Increment</button>
//                 <button  onClick={()=>dispatch({type:"dec"})}>Decrement</button>
//                 <button  onClick={()=>dispatch({type:"reset"})}>Reset</button>
//               </div>
//           </div>

//     </>)
// }export default  Counter

// function Tablist() {
//   const [activeTab, setActiveTab] = useState(1); 
//     const Tabss = [
//         {
//             id: 1, labell: "home", Componentt: <>content for home</>
//         },
//         {
//             id: 2, labell: "profile", Componentt: <>content for profile</>
//         },
//         {
//             id: 3, labell: "settingss", Componentt: <>content for settingss</>
//         },
//          {
//             id: 4, labell: "dashboard", Componentt: <>content for dashboard</>
//         },
//     ]
//     return (
//     <div classNameNameName='tabwrapper' style={{display:"flex", flexDirection:"column" , gap:"12px"}}>
//              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
//             {
//                 Tabss.map((el) => {
//                     return <>

//                         <button key={el.id} onClick={()=>setActiveTab(el.id )} classNameNameName={el.id === activeTab ? "activetab" :""}>{el.labell}</button>

//                     </>

//                 }

//                 )
//             }
//              </div>
//              <div style={{ padding:"12px"}}>
//               {
//                 Tabss.map((el) => {
//                     return <>
//                         <div key={el.id}>
//                                { el.id === activeTab ? el.Componentt :""}
//                        </div>
//                     </>

//                 }

//                 )
//             }
//             </div>


//     </div>
//     )


// } export default Tablist;


// function Showhidepassword(){
//     const [show , setshow]= useState(false)
//     return(<>
//     <div style={{position:"relative" , width:"230px"}}>
//     <input type={show ? "text" : "password"}  style={{width:"100%"}}/>
//       <span onClick={()=>setshow(!show)} style={{position:"absolute" , top:"0px" , right:"-3px" , color:"red"}}>e</span>
//     </div>

//     </>)
// }export default  Showhidepassword


// function Timerneww() {
//     const [timer, settimer] = useState(0)
//     const [running, setrunning] = useState(false)
//     useEffect(() => {
//         let num;
//         if (running) {
//             num = setInterval(() => {
//                 settimer((prev) => prev + 1);
//             }, 1000)

//         }
//       return () => clearInterval(num);

//     }, [running])
//     function startcounter(){
//           setrunning(true)
//     }
//     function stopcounter(){
//          setrunning(false)
//     }
//     function resetcounter(){
//          setrunning(false)
//          settimer(0)
//     }
//     return (
//         <>

//             <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "300px" }}>
//                 <div style={{ display: "flex", justifyContent: "center", maxWidth: "300px" }}>
//                     {timer}
//                 </div>

//                 <div style={{ display: "flex", gap: "12px", alignItems: "center", justifyContent: "center" }} >
//                     <button onClick={startcounter}>Start</button>
//                     <button onClick={stopcounter}>Stop</button>
//                     <button onClick={resetcounter}>Reset</button>
//                 </div>
//             </div>
//         </>
//     )
// } export default Timerneww;

// function Quotegenerator(){
//     const [quotee , setquote]= useState("")
//    useEffect(() => {
//      async function fetchdata() {
//       try {
//         const res = await fetch("https://dummyjson.com/quotes/random");
//         const data = await res.json();
//         setquote(data);



//       } catch (error) {
//         console.log("Error fetching quote:", error);
//       }
//     }

//     fetchdata();
//      const id = setInterval(() => {
//       fetchdata(); 
//     }, 5000);

//     return()=> clearInterval(id)
//   }, []);

//     return(

//     <div classNameNameName='commoncard'>
//     <p>{quotee.quote}</p>
//     <h5>{quotee.author}</h5>

//     </div>
//     )
// }export default Quotegenerator

// function Autosaveinput(){
//     const  [inptxt , setinptxt] = useState("")
//     const  [savtxt , setsavtxt] = useState(null)
//     useEffect(()=>{
//       var id;
//        id =setTimeout(() => {
//         setsavtxt(inptxt)
//       }, 5000)

//       return()=>clearTimeout(id)
//     },[inptxt])
//     return(<>
//     <p> last typed input is : {savtxt != null ? savtxt : "-"}</p> <br></br>
//     <input type='text'  value={inptxt} onChange={(e)=>setinptxt(e.target.value)}></input>
//     </>)
// }export default Autosaveinput
// function Trafficlights() {
//     const [colnew, setcolnew] = useState(0)
//     const arrayofcolors = ["red", "yellow", "green"]
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setcolnew((prev) => (prev + 1) % arrayofcolors.length);
//         }, 3000);

//         return () => clearInterval(interval);
//     }, []);

//     return (<>
//         <div style={{ display: "flex", flexDirection: "column", gap: "8px" , border:"1px solid #d2d3d4" , borderRadius:"20px" , width:"fit-content", padding:"12px"}}>
//             <span style={{ display: "inline-block", width: "42px", height: "42px", borderRadius: "50%", background: arrayofcolors[colnew] }} />
//             <span style={{ display: "inline-block", width: "42px", height: "42px", borderRadius: "50%", background: arrayofcolors[colnew] }} />
//             <span style={{ display: "inline-block", width: "42px", height: "42px", borderRadius: "50%", background: arrayofcolors[colnew] }} />
//         </div>





//     </>)
// } export default Trafficlights


function Formsmall() {
  const [info, setInfo] = useState({ name: "", email: "" });
  console.log(info);

  return (
    <>
      {/* <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={info.name}
        onChange={(e) =>
          setInfo((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
   
      <br />

      <input
        type="text"
        name="email"
        placeholder="Enter email"
        value={info.email}
        onChange={(e) =>
          setInfo((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      /> */}

   {/* <CustomRangePicker/> */}
    </>
  );
}

export default Formsmall;


