import { useState } from "react";
import styles from "../../shared/styles/commonstyles.module.scss";

function GoalForm({ onAddGoal }: any) {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");

  const onADD = () => {
    if (!title.trim()) return;

    const newGoal = {
      id: Date.now(),
      title,
      tasks: task.trim()
        ? [
            {
              id: Date.now() + 1,
              text: task,
              done: false,
            },
          ]
        : [],
    };

    onAddGoal(newGoal);

    setTitle("");
    setTask("");
  };

  return (
    <div className={`commoncard ${styles.goalformcard}`}>
      <div className={styles.title}>Add a New Goal</div>

      <input
        type="text"
        value={title}
        placeholder="Your Goal"
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className={styles.addgoalblock}>
        <input
          type="text"
          value={task}
          placeholder="First Task"
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={onADD}>Add Goal</button>
      </div>
    </div>
  );
}

export default GoalForm;
