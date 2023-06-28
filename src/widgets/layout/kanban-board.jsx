import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "@/widgets/layout";

export default function KanbanBoard({ type }) {
  const { upcomingTasks } = useContext(TaskContext);
  const [todo, setTodo] = useState([]);
  const [inprogress, setInprogress] = useState([]);
  const [done, setDone] = useState([]);
  setTodo(
    upcomingTasks.filter((task) => task.footer.status === "Chưa hoàn thành")
  );
  setInprogress(
    upcomingTasks.filter((task) => task.footer.status === "Đang thực hiện")
  );
  setDone(
    upcomingTasks.filter((task) => task.footer.status === "Đã hoàn thành")
  );

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (source.droppableId == destination.droppableId) return;

    //REMOVE FROM SOURCE ARRAY

    // if (source.droppableId == 2) {
  //     setCompleted(removeItemById(draggableId, completed));
  //   } else {
  //     setIncomplete(removeItemById(draggableId, incomplete));
  //   }

  //   // GET ITEM

  //   const task = findItemById(draggableId, [...incomplete, ...completed]);

  //   //ADD ITEM
  //   if (destination.droppableId == 2) {
  //     setCompleted([{ ...task, completed: !task.completed }, ...completed]);
  //   } else {
  //     setIncomplete([{ ...task, completed: !task.completed }, ...incomplete]);
  //   }
  };

  // function findItemById(id, array) {
  //   return array.find((item) => item.id == id);
  // }

  // function removeItemById(id, array) {
  //   return array.filter((item) => item.id != id);
  // }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex space-x-7">
        <Column title={"To do"} tasks={todo} id={"1"} />
        <Column title={"In Progress"} tasks={inprogress} id={"2"} />
        <Column title={"Done"} tasks={done} id={"3"} />
      </div>
    </DragDropContext>
  );
}

// import React, { useState, useEffect, useContext } from "react";
// import { Typography } from "@material-tailwind/react";
// import { TaskCard } from "@/widgets/cards";
// import { TaskContext } from "@/context/TaskContext";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// const kanbanColumns = [
//   {
//     id: "todo",
//     title: "To do",
//     status: "Chưa hoàn thành",
//   },
//   {
//     id: "inprogress",
//     title: "In Progress",
//     status: "Đang thực hiện",
//   },
//   {
//     id: "done",
//     title: "Done",
//     status: "Đã hoàn thành",
//   },
// ];
// export const KanbanBoard = ({ type }) => {
//   const { upcomingTasks } = useContext(TaskContext);
//   const [tasks, setTasks] = useState(upcomingTasks);
//   const handleDragEndWithTasks = (result, columnIndex) => {
//     handleDragEnd(result, columnIndex, tasks);
//   };
//   function handleDragEnd(result, columnIndex, tasks) {
//     console.log("Linhhhh");

//     if (!result.destination) {
//       return;
//     }

//     const { source, destination } = result;

//     if (
//       source.droppableId === destination.droppableId &&
//       source.index === destination.index
//     ) {
//       return;
//     }

//     const draggedTask = tasks.find(
//       (task) => task.taskName === result.draggableId
//     );
//     const column = kanbanColumns.find(
//       (col) => col.id === destination.droppableId
//     );
//     const updatedStatus = column.status;

//     const updatedTasks = tasks.map((task) => {
//       if (task.taskName === draggedTask.taskName) {
//         return {
//           ...task,
//           footer: {
//             ...task.footer,
//             status: updatedStatus,
//           },
//         };
//       }
//       return task;
//     });

//     setTasks(updatedTasks);
//   }

//   function compareDates(dateString) {
//     const currentDate = new Date(); // Ngày hiện tại
//     const dateParts = dateString.split("/");

//     // Trích xuất ngày, tháng, năm từ chuỗi đầu vào
//     const day = parseInt(dateParts[0], 10);
//     const month = parseInt(dateParts[1], 10) - 1; // Trừ 1 vì tháng trong đối tượng Date bắt đầu từ 0
//     const year = parseInt(dateParts[2], 10);

//     // Tạo đối tượng Date từ ngày trong chuỗi đầu vào
//     const inputDate = new Date(year, month, day);

//     // So sánh ngày đầu vào với ngày hiện tại
//     if (inputDate < currentDate) {
//       console.log("input:" + inputDate);
//       console.log(currentDate);
//       return true;
//     } else {
//       return false;
//     }
//   }

//   return (
//     <DragDropContext onDragEnd={handleDragEndWithTasks}>
//       <div className="flex space-x-7">
//         {kanbanColumns.map((element) => (
//           <Droppable droppableId={element.id} key={element.id}>
//             {(provided) => (
//               <div
//                 className="w-1/3 space-y-8 shadow-lg p-6 rounded-[12px] bg-white"
//                 key={element.title}
//                 ref={provided.innerRef}
//                 {...provided.droppableProps}
//               >
//                 <h2 className="text-lg font-bold mb-4 py-0.5">
//                   {element.title}
//                 </h2>
//
//                 {upcomingTasks
//                   .filter(
//                     (task) =>
//                       task.footer.status === element.status &&
//                       task.type === type
//                   )
//                   .map((task, index) => (
//                     <Draggable
//                       key={task.taskName}
//                       draggableId={task.taskName}
//                       index={index}
//                     >
//                       {(provided) => (
//                         <div
//                           ref={provided.innerRef}
//                           {...provided.draggableProps}
//                           {...provided.dragHandleProps}
//                         >
//                           <TaskCard
//                             key={task.taskName}
//                             taskName={task.taskName}
//                             workspace={task.workspace}
//                             description={task.description}
//                             color={task.color}
//                             footer={
//                               <Typography className="font-normal text-blue-gray-600">
//                                 <span>{task.footer.priority}</span>
//                               </Typography>
//                             }
//                             cardColor={`${
//                               compareDates(task.time.endTime.day)
//                                 ? "bg-red-100"
//                                 : ""
//                             }`}
//                             fullWidth={true}
//                           />
//                         </div>
//                       )}
//                     </Draggable>
//                   ))}
//                 {provided.placeholder}
//               </div>
//             )}
//           </Droppable>
//         ))}
//       </div>
//     </DragDropContext>
//   );
// };

// export default KanbanBoard;
