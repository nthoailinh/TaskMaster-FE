import React from "react";
import { DetailHeader } from "@/widgets/layout";
import { upcomingTask } from "@/data";

export function DetailGroup() {
  const completedTask = upcomingTask.filter(
    (task) => task.footer.status === "Đã hoàn thành" && task.type === "Group"
  ).length;
  const newTask = upcomingTask.filter(
    (task) => task.footer.status !== "Đã hoàn thành" && task.type === "Group"
  ).length;
  return (
    <div className="pt-4">
      <DetailHeader completedTask={completedTask} newTask={newTask} />
    </div>
  );
}

export default DetailGroup;
