import React, { useState } from "react";
import { upcomingTask } from "@/data";
import TaskContext from "./TaskContext";

export const TaskProvider = ({ children }) => {
  const [upcomingTasks, setUpcomingTasks] = useState(upcomingTask);

  const addTask = (newTask) => {
    setUpcomingTasks([...upcomingTasks, newTask]);
  };

  return (
    <TaskContext.Provider value={{ upcomingTasks, setUpcomingTasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
