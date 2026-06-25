import GoalForm from "./components/GoalForm";
import GoalCard from "./components/GoalCard";
import useLocalStorage from "../shared/hooks/useLocalStorage";

function Goalboard() {
const [goals, setGoals] = useLocalStorage<any[]>("goals", [])

  const addGoalHandler = (newGoal:any) => {
    setGoals((prev):any => [...prev, newGoal]);
  };

  const handleDelete = (goalId:any) => {
    setGoals((prev) => prev.filter((goal) => goal.id !== goalId));
  };

  const handleAddTask = (goalId:any, taskText:any) => {
    setGoals((prev:any) =>
      prev.map((goal:any) =>
        goal.id === goalId
          ? {
              ...goal,
              tasks: [
                ...goal.tasks,
                {
                  id: Date.now(),
                  text: taskText,
                  done: false,
                },
              ],
            }
          : goal
      )
    );
  };


  const handleToggleTask = (goalId:any, taskId:any) => {
  setGoals(prev =>
    prev.map(goal =>
      goal.id === goalId
        ? {
            ...goal,
            tasks: goal.tasks.map(task =>
              task.id === taskId
                ? { ...task, done: !task.done }
                : task
            )
          }
        : goal
    )
  )
}

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <GoalForm onAddGoal={addGoalHandler} />

      {goals.map((goal) => (
        <GoalCard
          key={goal.id}
          goal={goal}
          onDelete={handleDelete}
          onAddTask={handleAddTask}
          onToggleTask ={handleToggleTask}
        />
      ))}
    </div>
  );
}

export default Goalboard;
