import { useState } from "react";
import styles from "../../shared/styles/commonstyles.module.scss";

function GoalCard({ goal, onDelete, onAddTask,onToggleTask }:any) {
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;

    onAddTask(goal.id, newTask);
    
    setNewTask("");
  };

  return (
    <div className={`commoncard ${styles.goalformcard}`}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className={styles.title} style={{padding:"0px"}}>{goal.title}</div>

        <button onClick={() => onDelete(goal.id)}>
          Delete Goal
        </button>
      </div>

      <div className={styles.body}>
        {goal.tasks.map((task:any) => (
          <div key={task.id} className={styles.items}>
            <label className={styles.checkboxblock}>
              <input
                type="checkbox"
                checked={task.done}
             
                 onChange={() => onToggleTask(goal.id, task.id)}
              />
              {task.text}
            </label>
          </div>
        ))}
      </div>

      <div className={styles.addgoalblock}>
        <input
          type="text"
          value={newTask}
          placeholder="Add another task"
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask();
            }
          }}
        />

        <button onClick={addTask}>
          Add Task
        </button>
      </div>
    </div>
  );
}

export default GoalCard;
