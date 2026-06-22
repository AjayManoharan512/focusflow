import React, { useEffect, useState } from "react";
import styles from "./scss/todolist.module.scss";
import deleteicon from "../../public/delete.svg"
import nodata from "../../public/nodata.svg"
import add from "../../public/adder.svg"
function Todolist() {
  const [todos, settodos] = useState("")
  const [overalltodos, setoveralltodos] = useState<any>([])
    const [searchoveralltodos, setsearchoveralltodos] = useState<any>([])
  const [searchtxt, setsearchtxt] = useState("")


  const handleAdd = () => {
    if (!todos.trim()) return;
    setoveralltodos([...overalltodos, { text: todos, completed: false }]);
      setsearchoveralltodos([...overalltodos, { text: todos, completed: false }]);
    settodos("");
  };
  const handledel = (ig: any) => {
    const updatedItems = overalltodos.filter((_, index) => index !== ig)
    setoveralltodos(updatedItems)
  }
  const handlestrike = (i: any) => {
    const updated = [...overalltodos];
    updated[i].completed = !updated[i].completed;
    setoveralltodos(updated);


  }


  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      setoveralltodos(JSON.parse(saved));
    }
  }, []);// get local storage

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(overalltodos));
  }, [overalltodos]); // save in local storage

const searchtxtfunc=(e:any)=>{
setsearchtxt(e.target.value)
let usertext= e.target.value;
if (usertext){
  
  var filtered= overalltodos.filter((el:any)=>{
 return el.text.toLowerCase().includes(usertext.toLowerCase());
    
})

  setoveralltodos(filtered)
}
else{
  setoveralltodos(searchoveralltodos)
}
}

  return (
    <>
      <div className={styles.todolistcontainer}>
        <div className={styles.title}>
          Your Todo
        </div>
        <div className={styles.body}>
          <div className={styles.inputsection}>
            <input type="text" value={todos} placeholder="Enter task here" onChange={(e) => settodos(e.target.value)} onKeyDown={(e: any) => { if (e.key === "Enter") { handleAdd() } }} />

            <div onClick={handleAdd} className={styles.addbtn}>
              <img src={add} />
            </div>
          </div>
          <div style={{ maxWidth: "240px", padding: "12px 0" }} className={styles.inputsection}>
            <input type="text" placeholder="Search" onChange={searchtxtfunc} />
          </div>

          {
            overalltodos.length > 0 ? <div className={styles.taskscontainer}>
              {
                overalltodos.map((item: any, i: any) => <div key={i} className={styles.tasks}>
                  <div className={styles.cont}><label className={item.completed ? styles.strike : ""}><input type="checkbox" checked={item.completed} onChange={() => handlestrike(i)} /> {item.text} </label></div>
                  <div className={styles.imgcontainer} onClick={() => handledel(i)}><img src={deleteicon} /> </div>
                </div>)

              }

            </div> : <div className={styles.nodata}> <div>No Tasks <img src={nodata} alt="" /></div></div>
          }
       

        </div>
      </div>
    </>)
} export default Todolist