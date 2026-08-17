import { useState } from "react";
import styles from "../shared/styles/commonstyles.module.scss";

function Tasklistnew() {
   const [inputval, setinptval] = useState("");
   const [tasks, settasks] = useState<any>([]);
   const [tab, settab] = useState("all");

   const addtask = () => {
      if (!inputval.trim()) return;

      settasks([...tasks, { checked: false, val: inputval }]);
      setinptval("");
   };

   const handledel = (i: any) => {
      const newarr = tasks.filter((_: any, index: any) => index !== i);
      settasks(newarr);
   };

   const handlecheckboxchange = (i: any) => {
      const updatedTasks = tasks.map((task: any, index: any) =>
         index === i ? { ...task, checked: !task.checked } : task
      );

      settasks(updatedTasks);
   };

  
   const filteredTasks = tasks.filter((task: any) => {
      if (tab === "active") return !task.checked;
      if (tab === "done") return task.checked;
      return true;
   });

   return (
      <>
         <div className={`commoncard ${styles.tasklistcard}`}>
            <div className={styles.top}>
               <div style={{ marginBottom: "12px" }} className={styles.title}>
                  My Tasks
               </div>

               <div className={styles.inputwithadd}>
                  <input
                     type="text"
                     placeholder="Enter tasks here"
                     onChange={(e) => setinptval(e.target.value)}
                     value={inputval}
                     onKeyDown={(e) => {
                        if (e.key === "Enter") {
                           addtask();
                        }
                     }}
                  />

                  <button onClick={addtask}>Add</button>
               </div>
            </div>

            <div className={styles.filters}>
               <div
                  className={styles.filter}
                  onClick={() => settab("all")}
               >
                  All
               </div>

               <div
                  className={styles.filter}
                  onClick={() => settab("active")}
               >
                  Active
               </div>

               <div
                  className={styles.filter}
                  onClick={() => settab("done")}
               >
                  Done
               </div>
            </div>

            <div className={styles.center}>
               {filteredTasks.map((el: any, i: any) => (
                  <div className={styles.row} key={i}>
                     <label className={`${el.checked ? styles.strike : ""}`}>
                        <input
                           type="checkbox"
                           checked={el.checked}
                           onChange={() => handlecheckboxchange(i)}
                        />

                        {el.val}
                     </label>

                     <button onClick={() => handledel(i)}>
                        Delete
                     </button>
                  </div>
               ))}
            </div>

            {filteredTasks.length < 1 && (
               <div style={{ width: "100%", textAlign: "center" }}>
                  No data
               </div>
            )}
         </div>
      </>
   );
}

export default Tasklistnew;
