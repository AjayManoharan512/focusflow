import { useState } from "react"


// function Addanonobjecttoarray() {


//     const[ userdtls, setuserdtls ] =useState({name:"" , age:""})
//     const [overallinfo, setoverallinfo] = useState<any>([])
//        console.log(overallinfo)
//     const formsubmit=(e:any)=>{
//         e.preventDefault()
//          setoverallinfo((prev :any) => [...prev, userdtls]);
//         setuserdtls({name:"" , age:""})
      
//     }
 
//   return (
//     <>
    
//     <p>Update objects</p>
//     <form onSubmit={formsubmit}>
//          <div>
//              <label> Name:</label> 
//              <input value={userdtls.name} onChange={(e)=>setuserdtls(prev=>({...prev, name:e.target.value}))} type="text" placeholder="Enter name"></input>
//          </div>
//           <div>
//              <label> Name:</label> 
//              <input value={userdtls.age} onChange={(e)=>setuserdtls(prev=>({...prev, age:e.target.value}))} type="number" placeholder="Enter age"></input>
//          </div>
//          <button> Submit</button>
//     </form>
//     </>
//   )
// }

// export default Addanonobjecttoarray




// function Updateobject() {
//   const [username, setusername] = useState<any>({ name: "Ajay", age: 26 });

//   console.log(username);

//   return (
//     <>
//      <p> {username.name}</p>
//      <p> {username.age}</p> 
//      <p>{username.city !==null? <>{username.city}</>:<></>}</p><br></br>

//       <button onClick={() => setusername(prev => ({ ...prev, name :"Mano" ,age: 28 , city:"Periyapalli" }))}>
//         Update 
//       </button>
//     </>
//   );
// }

// export default Updateobject;


// function Addtoarray(){
//     const [skills, setskills]=useState(["html", "css"])
//     return(
//         <>
//         {skills.map((el)=><p>{el}</p>)}
//         <button onClick={()=>setskills([...skills, "js", "React"])}>Add skills</button>
//         </>
//     )
// }export default Addtoarray



// function Removeusers(){
//     const [users, setusers]= useState(["Ajay" , "Vetri" , "vicky" , "reghu"])
//     const removereghu=()=>{
//         setusers(prev=> prev.filter(el=>el !=="reghu"))
//     }
//     return(<>
//     {
//     users.map((el)=><><p>{el}</p><br></br></>)
// }
// <button onClick={removereghu}> Remove reghu</button>

//     </>)
// }export default Removeusers

// function Updateiteminarray(){
//     const [todos, setTodos] = useState([
//   { id: 1, text: "Learn JS" },
//   { id: 2, text: "Learn React" }
// ]);
// const updateskill=()=>{
//      setTodos(prev =>
//       prev.map(item =>
//         item.id === 1 ? { ...item, text: "Master JS" } : item
//       )
//     );
    
// }
// console.log(todos)

//     return(<>
//     <button onClick={updateskill}>updateiteminarray</button>
//     </>)
// }export default Updateiteminarray;

// function Increasecounter(){
//     const [count , setcount] = useState(0);
//     function incrementfn(){
//         setcount(prev=> prev+1)
//     }
//     return(<>
//     <p>{count}</p>
//     <button onClick={incrementfn}>Increment</button>
//     </>)
// }export default Increasecounter;

// function Updatednestedobject(){
//     const [profile, setProfile] = useState({
//   name: "Ajay",
//   address: { city: "Chennai", pin: 600045 }
// });
// const changepin=()=>{
//     setProfile(prev => ({
//       ...prev,
//       address: {
//         ...prev.address,
//         pin: 600100    
//       }
//     }));
// }
// console.log(profile)
//     return(<>
//         <button onClick={changepin}> Change pin</button>
//     </>)
// }export default Updatednestedobject


function Deleteobjectbyid(){
    const [users, setusers]= useState([
        {id:1 ,  name :"Ajay" , role:"ui dev"} ,
        {id:2 , name:"Reghu" , role:"ui dev"},
        {id:3 , name:"Venky" , role:"ui dev"},
    ]
    )
    const deleteuser=(id:any)=>{
       setusers(users.filter((el)=>el.id !==id  ))
    }
    return(<>
    {
       users.map((el)=><p key={el.id}>{el.name} <span style={{color:"red" , lineHeight:"normal" , cursor:"pointer"}} onClick={()=>deleteuser(el.id)}>remove</span></p> )
    }

    </>)
}export default Deleteobjectbyid