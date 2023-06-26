import React, { useState, useEffect, useContext } from "react";
import { DetailHeader } from "@/widgets/layout";
import { horizontalBarChartsData } from "@/data";
import { TaskContext } from "@/context/TaskContext";
import { HorizontalBarChart } from "@/widgets/charts";

export function DetailPersonal() {
  const { upcomingTasks } = useContext(TaskContext);
  const [chartsData, setChartsData] = useState([]);
  useEffect(() => {
    setChartsData(horizontalBarChartsData);
  }, []);
  const completedTask = upcomingTasks.filter(
    (task) => task.footer.status === "Đã hoàn thành" && task.type === "Personal"
  ).length;
  const newTask = upcomingTasks.filter(
    (task) => task.footer.status !== "Đã hoàn thành" && task.type === "Personal"
  ).length;
  return (
    <div className="pt-4">
      <div className="mb-14">
        <DetailHeader completedTask={completedTask} newTask={newTask} />
      </div>
      <div className="mb-6 grid">
        {chartsData.map((props) => (
          <HorizontalBarChart key={props.key} data={props} {...props} />
        ))}
      </div>
    </div>
  );
}

export default DetailPersonal;
