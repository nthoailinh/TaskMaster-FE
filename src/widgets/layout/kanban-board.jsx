import React, { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import { TaskCard } from "@/widgets/cards";
import { upcomingTask } from "@/data";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const kanbanColumns = [
  {
    id: "todo",
    title: "To do",
    status: "Chưa hoàn thành",
  },
  {
    id: "inprogress",
    title: "In Progress",
    status: "Đang thực hiện",
  },
  {
    id: "done",
    title: "Done",
    status: "Đã hoàn thành",
  },
];

export const KanbanBoard = ({ type }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(upcomingTask);
  }, []);

  const handleDragEnd = (result, columnIndex) => {
    if (!result.destination) {
      return;
    }

    const { source, destination } = result;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const draggedTask = tasks.find((task) => task.title === result.draggableId);

    const updatedTasks = [...tasks];
    updatedTasks.splice(source.index, 1);
    updatedTasks.splice(destination.index, 0, draggedTask);

    setTasks(updatedTasks);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex space-x-7">
        {kanbanColumns.map((element, columnIndex) => (
          <Droppable droppableId={element.id} key={element.id}>
            {(provided) => (
              <div
                className="w-1/3 space-y-8 shadow-lg p-6 rounded-[12px] bg-white"
                key={element.title}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h2 className="text-lg font-bold mb-4 py-0.5">
                  {element.title}
                </h2>
                <hr className="my-2" />

                {tasks
                  .filter(
                    (task) =>
                      task.footer.status === element.status &&
                      task.type === type
                  )
                  .map((task, index) => (
                    <Draggable
                      key={task.title}
                      draggableId={task.title}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <TaskCard
                            key={task.title}
                            title={task.title}
                            tag={task.tag}
                            description={task.description}
                            color={task.color}
                            footer={
                              <Typography className="font-normal text-blue-gray-600">
                                <span>{task.footer.priority}</span>
                              </Typography>
                            }
                            fullWidth={true}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;
