import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getTasksQuery } from "../../firebase/db";
import { TasksContext, useAuthUser } from ".";

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const { user } = useAuthUser();

  useEffect(() => {
    if (!user) return;
    const tasksQuery = getTasksQuery(user);

    if (!tasksQuery) return;

    const unsub = onSnapshot(tasksQuery, (snaps) => {
      console.log("Snap detected");
      const updatedTasks = [];
      snaps.forEach((snap) => {
        updatedTasks.push(snap.data());
      });
      setTasks(updatedTasks);
    });

    return () => unsub();
  }, [user]);

  return (
    <TasksContext.Provider value={tasks}>{children}</TasksContext.Provider>
  );
};

export default TasksProvider;
