import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useContext } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { TaskContext } from "@/context/TaskContext";
import { workspaces } from "@/data";
import API_URL from "@/constants";
import axios from "axios";
import {
  DateTimeInputs,
  DescriptionInput,
  PrioritySelect,
  TaskNameInput,
  WorkspaceInput,
} from "./components";

const priorityOptions = ["Khẩn cấp", "Không khẩn cấp"];

function revertDate(dateString) {
  const dateParts = dateString.split("/");
  const day = dateParts[0];
  const month = dateParts[1];
  const year = dateParts[2].trim();

  return `${year}-${month}-${day}`;
}

function formatDate(dateString) {
  const dateParts = dateString.split("-");
  const year = dateParts[0];
  const month = dateParts[1];
  const day = dateParts[2].trim();

  return `${day}/${month}/${year}`;
}

function EditPersonalTask({ task, setIsEditPopupOpen }) {
  const { upcomingTasks, setUpcomingTasks } = useContext(TaskContext);
  const [isOpen, setIsOpen] = useState(true);
  const [taskName, setTaskName] = useState(task.taskName);
  const [description, setDescription] = useState(task.description);
  const [startTimeDay, setStartTimeDay] = useState(
    revertDate(task.time.startTime.day)
  );
  const [startTimeHour, setStartTimeHour] = useState(task.time.startTime.hour);
  const [endTimeDay, setEndTimeDay] = useState(
    revertDate(task.time.endTime.day)
  );
  const [endTimeHour, setEndTimeHour] = useState(task.time.endTime.hour);
  const [deadlineDay, setDeadlineDay] = useState(
    revertDate(task.time.deadlineTime.day)
  );
  const [deadlineHour, setDeadlineHour] = useState(task.time.deadlineTime.hour);
  const [selected, setSelected] = useState(task.footer.priority);
  const [workspace, setWorkspace] = useState(task.workspace);
  const [color, setColor] = useState(task.color);

  function closeModal() {
    setIsEditPopupOpen(false);
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function handleTaskNameChange(event) {
    setTaskName(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleStartTimeDayChange(event) {
    setStartTimeDay(event.target.value);
  }

  function handleStartTimeHourChange(event) {
    setStartTimeHour(event.target.value);
  }

  function handleEndTimeDayChange(event) {
    setEndTimeDay(event.target.value);
  }

  function handleEndTimeHourChange(event) {
    setEndTimeHour(event.target.value);
  }

  function handleDeadlineDayChange(event) {
    setDeadlineDay(event.target.value);
  }

  function handleDeadlineHourChange(event) {
    setDeadlineHour(event.target.value);
  }

  function handlePriorityChange(value) {
    setSelected(value);
  }

  function handleWorkspaceChange(value) {
    setWorkspace(value);
  }

  function handleColorChange(color) {
    setColor(color);
  }

  function handleSave() {
    const newPersonalTask = {
      id: task.id,
      color: color,
      taskName: taskName,
      workspace: workspace,
      time: {
        startTime: {
          hour: startTimeHour,
          day: formatDate(startTimeDay),
        },
        endTime: {
          hour: endTimeHour,
          day: formatDate(endTimeDay),
        },
        deadlineTime: {
          hour: deadlineHour,
          day: formatDate(deadlineDay),
        },
      },
      description: description,
      footer: {
        priority: selected,
        status: task.footer.status,
      },
      type: "Personal",
      rating: task.rating,
    };
    const newUpcomingTasks = upcomingTasks.map((t) => {
      if (t.id === task.id) {
        return newPersonalTask;
      }
      return t;
    });
    setUpcomingTasks(newUpcomingTasks);
    axios
      .put(`${API_URL}/tasks/${task.id}`, newPersonalTask)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    closeModal();
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 pb-8 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between">
                    <Typography variant="h3" color="gray" className="pt-12">
                      Chỉnh sửa công việc cá nhân
                    </Typography>
                    <XMarkIcon
                      onClick={closeModal}
                      className="h-6 w-6 text-gray-400 cursor-pointer"
                    />
                  </div>

                  <TaskNameInput
                    value={taskName}
                    onChange={handleTaskNameChange}
                  />

                  <DescriptionInput
                    value={description}
                    onChange={handleDescriptionChange}
                  />

                  <div className="mt-8 flex">
                    <PrioritySelect
                      priorityOptions={priorityOptions}
                      value={selected}
                      onChange={handlePriorityChange}
                    />
                    <WorkspaceInput
                      workspaces={workspaces}
                      values={{ workspace, color }}
                      onChanges={{ handleWorkspaceChange, handleColorChange }}
                    />
                  </div>

                  <DateTimeInputs
                    startTimeDay={startTimeDay}
                    startTimeHour={startTimeHour}
                    endTimeDay={endTimeDay}
                    endTimeHour={endTimeHour}
                    deadlineDay={deadlineDay}
                    deadlineHour={deadlineHour}
                    handleStartTimeDayChange={handleStartTimeDayChange}
                    handleStartTimeHourChange={handleStartTimeHourChange}
                    handleEndTimeDayChange={handleEndTimeDayChange}
                    handleEndTimeHourChange={handleEndTimeHourChange}
                    handleDeadlineDayChange={handleDeadlineDayChange}
                    handleDeadlineHourChange={handleDeadlineHourChange}
                  />

                  <div className="flex justify-center mt-8 pt-8">
                    <Button
                      onClick={handleSave}
                      color="blue"
                      className="mr-16 capitalize text-sm w-32"
                    >
                      Lưu
                    </Button>
                    <Button
                      onClick={closeModal}
                      color="gray"
                      className="capitalize text-sm w-32"
                    >
                      Hủy
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default EditPersonalTask;
