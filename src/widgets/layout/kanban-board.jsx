import React, { useState, useEffect, useContext } from "react";
import { Typography, Rating } from "@material-tailwind/react";
import { TaskCard } from "@/widgets/cards";
import { TaskContext } from "@/context/TaskContext";
import API_URL from "@/constants";
import axios from "axios";

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

function compareDates(dateString) {
  const currentDate = new Date(); // Ngày hiện tại
  const dateParts = dateString.split("/");

  // Trích xuất ngày, tháng, năm từ chuỗi đầu vào
  const day = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10) - 1; // Trừ 1 vì tháng trong đối tượng Date bắt đầu từ 0
  const year = parseInt(dateParts[2], 10);

  // Tạo đối tượng Date từ ngày trong chuỗi đầu vào
  const inputDate = new Date(year, month, day);

  // So sánh ngày đầu vào với ngày hiện tại
  if (inputDate < currentDate) {
    return true;
  } else {
    return false;
  }
}

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
                  <div className="flex items-center justify-between">
                    <Typography className="font-normal text-blue-gray-600">
                      <span>{task.footer.priority}</span>
                    </Typography>
                    {task.footer.status === "Đã hoàn thành" && (
                      <Rating
                        unratedColor="amber"
                        ratedColor="amber"
                        value={task.rating}
                        onChange={(value) => {
                          task.rating = value;
                          axios.patch(`${API_URL}/tasks/${task.id}`, {
                            rating: value,
                          });
                        }}
                      />
                    )}
                  </div>
                }
                cardColor={`${
                  compareDates(task.time.endTime.day) &&
                  task.footer.status !== "Đã hoàn thành"
                    ? "bg-red-100"
                    : ""
                }`}
                fullWidth={true}
              />
            ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
