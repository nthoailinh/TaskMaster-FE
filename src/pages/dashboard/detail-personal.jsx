import React, { useState, useEffect } from "react";
import { DetailHeader } from "@/widgets/layout";
import { upcomingTask, horizontalBarChartsData } from "@/data";
import { HorizontalBarChart } from "@/widgets/charts";

export function DetailPersonal() {
  const [chartsData, setChartsData] = useState([]);
  useEffect(() => {
    setChartsData(horizontalBarChartsData);
  }, []);
  const completedTask = upcomingTask.filter(
    (task) => task.footer.status === "Đã hoàn thành" && task.type === "Personal"
  ).length;
  const newTask = upcomingTask.filter(
    (task) => task.footer.status !== "Đã hoàn thành" && task.type === "Personal"
  ).length;
  return (
    <div className="pt-4">
      <div className="mb-14">
        <DetailHeader completedTask={completedTask} newTask={newTask} />
      </div>
      <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-2">
        {chartsData.map((props) => (
          <HorizontalBarChart key={props.key} data={props} {...props} />
        ))}
      </div>
    </div>
  );
}

export default DetailPersonal;
