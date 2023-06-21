import React from "react";
import Swal from "sweetalert2";
import { Typography, Button } from "@material-tailwind/react";
import { PlusIcon } from "@heroicons/react/24/outline";

function AddTaskPopup({ onAddTask }) {
  const showAddTaskPopup = () => {
    Swal.fire({
      title: "Thêm công việc",
      html:
        '<input id="swal-input1" class="swal2-input" placeholder="Tên công việc">' +
        '<textarea id="swal-input2" class="swal2-textarea" placeholder="Mô tả công việc"></textarea>',
      focusConfirm: false,
      preConfirm: () => {
        const taskName = document.getElementById("swal-input1").value;
        const taskDescription = document.getElementById("swal-input2").value;
        onAddTask(taskName, taskDescription);
      },
      showCancelButton: true,
      cancelButtonText: "Hủy",
      confirmButtonText: "Thêm",
    });
  };

  return (
    <Button
      className="mr-2 flex items-center normal-case"
      onClick={showAddTaskPopup}
    >
      <PlusIcon className="text-500 mr-1 h-5 w-5" />
      <Typography
        as="li"
        variant="h6"
        color="white"
        className="p-1 font-normal"
      >
        Thêm việc
      </Typography>
    </Button>
  );
}

export default AddTaskPopup;
