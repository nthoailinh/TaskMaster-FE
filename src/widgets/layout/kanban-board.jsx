import React, { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import { TaskCard } from "@/widgets/cards";
import { upcomingTask } from "@/data";

const KanbanBoard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(upcomingTask);
  }, []);

  return (
    <div className="flex space-x-7">
      <div className="w-1/3 space-y-8 shadow-lg p-6 rounded-[12px]">
        <h2 className="text-lg font-bold mb-4 py-0.5">To Do</h2>
        <hr className="my-2" />
        {tasks
          .filter((task) => task.footer.status === "Chưa hoàn thành")
          .map((task, index) => (
            <TaskCard
              key={task.title}
              title={task.title}
              tag={task.tag}
              description={task.description}
              color={task.color}
              footer={
                <Typography className="font-normal text-blue-gray-600 ">
                  <span>{task.footer.priority}</span>
                  <br />
                  <span>{task.footer.status}</span>&nbsp;
                </Typography>
              }
            />
          ))}
      </div>
      <div className="w-1/3 space-y-8 shadow-lg p-6 rounded-[12px]">
        <h2 className="text-lg font-bold mb-4 py-0.5">In Progress</h2>
        <hr className="my-2" />
        {tasks
          .filter((task) => task.footer.status === "Đang thực hiện")
          .map((task, index) => (
            <TaskCard
              key={task.title}
              title={task.title}
              tag={task.tag}
              description={task.description}
              color={task.color}
              footer={
                <Typography className="font-normal text-blue-gray-600">
                  <span>{task.footer.priority}</span>
                  <br />
                  <span>{task.footer.status}</span>&nbsp;
                </Typography>
              }
            />
          ))}
      </div>
      <div className="w-1/3 space-y-8 shadow-lg p-6 rounded-[12px]">
        <h2 className="text-lg font-bold mb-4 py-0.5">Done</h2>
        <hr className="my-2" />
        {tasks
          .filter((task) => task.footer.status === "Đã hoàn thành")
          .map((task, index) => (
            <TaskCard
              key={task.title}
              title={task.title}
              tag={task.tag}
              description={task.description}
              color={task.color}
              footer={
                <Typography className="font-normal text-blue-gray-600">
                  <span>{task.footer.priority}</span>
                  <br />
                  <span>{task.footer.status}</span>&nbsp;
                </Typography>
              }
            />
          ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
