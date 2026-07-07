import { useState } from "react";
import styles from "../../shared/styles/commonstyles.module.scss";

function GoalCard({ goal, onDelete, onAddTask, onToggleTask, onEditTask, onDeleteTask }: any) {
  const [newTask, setNewTask] = useState("");
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;

    onAddTask(goal.id, newTask);

    setNewTask("");
  };

  const startEditing = (task: any) => {
    setEditingTaskId(task.id);
    setEditingText(task.text);
  };

  const saveEdit = (taskId: number) => {
    if (!editingText.trim()) return;

    onEditTask(goal.id, taskId, editingText.trim());
    setEditingTaskId(null);
    setEditingText("");
  };

  const cancelEdit = () => {
    setEditingTaskId(null);
    setEditingText("");
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
        {goal.tasks.map((task: any) => (
          <div key={task.id} className={styles.items} style={{ display: "flex", justifyContent: "space-between", alignItems: "center",gap:"12px" }}>
            {editingTaskId === task.id ? (
              <>
                <input
                  type="text"
                  value={editingText}
                  style={{ outline: "none", boxShadow: "none" }}
                  onChange={(e) => setEditingText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      saveEdit(task.id);
                    }
                    if (e.key === "Escape") {
                      cancelEdit();
                    }
                  }}
                  autoFocus
                />
                <div style={{ display: "flex", gap: "8px" }}>
                  <button onClick={() => saveEdit(task.id)}>Save</button>
                  <button onClick={cancelEdit}>Cancel</button>
                </div>
              </>
            ) : (
              <>
                <label className={styles.checkboxblock}>
                  <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => onToggleTask(goal.id, task.id)}
                  />
                  {task.text}
                </label>
                <div style={{ display: "flex", gap: "8px" }}>
                  <button onClick={() => startEditing(task)}>Edit</button>
                  <button onClick={() => onDeleteTask(goal.id, task.id)}>Delete</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <div className={styles.addgoalblock}>
        <input
          type="text"
          value={newTask}
          style={{ outline: "none", boxShadow: "none" }}
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
