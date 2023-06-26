import React, { useContext } from "react";
import { DetailHeader } from "@/widgets/layout";
import { TaskContext } from "@/context/TaskContext";

export function DetailGroup() {
  const { upcomingTasks } = useContext(TaskContext);
  const completedTask = upcomingTasks.filter(
    (task) => task.footer.status === "Đã hoàn thành" && task.type === "Group"
  ).length;
  const newTask = upcomingTasks.filter(
    (task) => task.footer.status !== "Đã hoàn thành" && task.type === "Group"
  ).length;
  return (
    <div className="pt-4">
      <DetailHeader completedTask={completedTask} newTask={newTask} />
    </div>
  );
}

export default DetailGroup;
