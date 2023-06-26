import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  DateTimeInputs,
  DescriptionInput,
  PrioritySelect,
  WorkspaceInput,
  TaskNameInput,
} from "./components";

const priorityOptions = ["Khẩn cấp", "Không khẩn cấp"];

function AddPersonalTask() {
  const [isOpen, setIsOpen] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [startTimeDay, setStartTimeDay] = useState("");
  const [startTimeHour, setStartTimeHour] = useState("");
  const [endTimeDay, setEndTimeDay] = useState("");
  const [endTimeHour, setEndTimeHour] = useState("");
  const [deadlineDay, setDeadlineDay] = useState("");
  const [deadlineHour, setDeadlineHour] = useState("");
  const [selected, setSelected] = useState(priorityOptions[0]);
  const [workspace, setWorkspace] = useState("");
  const [color, setColor] = useState("#2296f4");

  function closeModal() {
    setIsOpen(false);
    setTaskName("");
    setDescription("");
    setStartTimeDay("");
    setStartTimeHour("");
    setEndTimeDay("");
    setEndTimeHour("");
    setDeadlineDay("");
    setDeadlineHour("");
    setWorkspace("");
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
      color: color,
      taskName: taskName,
      workspace: workspace,
      time: {
        startTime: {
          hour: startTimeHour,
          day: startTimeDay,
        },
        endTime: {
          hour: endTimeHour,
          day: endTimeDay,
        },
        deadline: {
          hour: deadlineHour,
          day: deadlineDay,
        },
      },
      description: description,
      footer: {
        priority: selected,
        status: "Chưa hoàn thành",
      },
      type: "Personal",
      rating: 0,
    };
    closeModal();
  }

  return (
    <>
      <figure className="mr-5 cursor-pointer" onClick={openModal}>
        <img
          src="/public/img/user.png"
          alt="Cá nhân"
          width="166"
          height="200"
        />
        <figcaption className="text-center font-medium pt-6 text-xl">
          Cá nhân
        </figcaption>
      </figure>

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
                      Thêm công việc cá nhân
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

export default AddPersonalTask;
