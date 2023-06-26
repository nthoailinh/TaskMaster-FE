import React, { useState, useEffect, useContext } from "react";
import { Typography } from "@material-tailwind/react";
import { TaskCard } from "@/widgets/cards";
import { TaskContext } from "@/context/TaskContext";

const kanbanColumns = [
  {
    title: "To do",
    status: "Chưa hoàn thành",
  },
  {
    title: "In Progress",
    status: "Đang thực hiện",
  },
  {
    title: "Done",
    status: "Đã hoàn thành",
  },
];

export const KanbanBoard = ({ type }) => {
  const { upcomingTasks } = useContext(TaskContext);

  return (
    <div className="flex space-x-7">
      {kanbanColumns.map((element) => (
        <div
          className="w-1/3 space-y-8 shadow-lg p-6 rounded-[12px] bg-white"
          key={element.title}
        >
          <h2 className="text-lg font-bold mb-4 py-0.5">{element.title}</h2>
          <hr className="my-2" />
          {upcomingTasks
            .filter(
              (task) =>
                task.footer.status === element.status && task.type === type
            )
            .map((task) => (
              <TaskCard
                key={task.taskName}
                taskName={task.taskName}
                workspace={task.workspace}
                description={task.description}
                color={task.color}
                footer={
                  <Typography className="font-normal text-blue-gray-600">
                    <span>{task.footer.priority}</span>
                  </Typography>
                }
                fullWidth={true}
              />
            ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
