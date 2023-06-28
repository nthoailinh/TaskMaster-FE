import React from "react";
import { TaskCard } from "@/widgets/cards";
import { Droppable } from "react-beautiful-dnd";

export default function Column({ title, tasks, id }) {
  const { upcomingTasks } = useContext(TaskContext);

  return (
    <Droppable droppableId={id}>
      {(provided, snapshot) => (
        <div
          className="w-1/3 space-y-8 shadow-lg p-6 rounded-[12px] bg-white"
          ref={provided.innerRef}
          {...provided.droppableProps}
          isDraggingOver={snapshot.isDraggingOver}
        >
          <h2 className="text-lg font-bold mb-4 py-0.5"> {title}</h2>
          <hr className="my-2" />
          {upcomingTasks
            .filter(
              (task) =>
                task.footer.status === element.status && task.type === type
            )
            .map((task, index) => (
              <Draggable
                key={task.taskName}
                draggableId={task.taskName}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
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
                      cardColor={`${
                        compareDates(task.time.endTime.day) ? "bg-red-100" : ""
                      }`}
                      fullWidth={true}
                      index={index}
                    />
                  </div>
                )}
              </Draggable>
            ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
