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
  GroupSelect,
  MemberSelect,
} from "./components";

const priorityOptions = ["Khẩn cấp", "Không khẩn cấp"];

const groupOptions = ["Nhóm 1", "Nhóm 2"];
const memberOptions = ["Phan Minh Anh Tuấn", "Nguyễn Thị Hoài Linh"];

function AddGroupTask() {
  const [isOpen, setIsOpen] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [group, setGroup] = useState(groupOptions[0]);
  const [member, setMember] = useState(memberOptions[0]);
  const [startTimeDay, setStartTimeDay] = useState("");
  const [startTimeHour, setStartTimeHour] = useState("");
  const [endTimeHour, setEndTimeHour] = useState("");
  const [deadlineDay, setDeadlineDay] = useState("");
  const [deadlineHour, setDeadlineHour] = useState("");
  const [selected, setSelected] = useState(priorityOptions[0]);
  const [workspace, setworkspace] = useState("");
  const [notification, setNotification] = useState(false);

  function closeModal() {
    setIsOpen(false);
    setTaskName("");
    setDescription("");
    setStartTimeDay("");
    setStartTimeHour("");
    setEndTimeHour("");
    setDeadlineDay("");
    setDeadlineHour("");
    setworkspace("");
    setNotification(false);
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

  function handleGroupChange(value) {
    setGroup(value);
  }

  function handleMemberChange(value) {
    setMember(value);
  }

  function handleStartTimeDayChange(event) {
    setStartTimeDay(event.target.value);
  }

  function handleStartTimeHourChange(event) {
    setStartTimeHour(event.target.value);
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

  function handleworkspaceChange(event) {
    setworkspace(event.target.value);
  }

  function handleSave() {
    console.log(taskName);
    console.log(description);
    console.log(group);
    console.log(member);
    console.log(startTimeDay);
    console.log(startTimeHour);
    console.log(endTimeHour);
    console.log(deadlineDay);
    console.log(deadlineHour);
    console.log(selected);
    console.log(workspace);
    console.log(notification);
    closeModal();
  }

  return (
    <>
      <figure className="mr-5 cursor-pointer" onClick={openModal}>
        <img src="/public/img/group.png" alt="Nhóm" width="200" height="240" />
        <figcaption className="text-center font-medium pt-4 text-xl">
          Nhóm
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
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 pb-8 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between">
                    <Typography variant="h3" color="gray" className="pt-12">
                      Thêm công việc nhóm
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
                  <GroupSelect
                    groupOptions={groupOptions}
                    value={group}
                    onChange={handleGroupChange}
                  />
                  <MemberSelect
                    memberOptions={memberOptions}
                    value={member}
                    onChange={handleMemberChange}
                  />
                  <div className="mt-8 flex space-x-10">
                    <PrioritySelect
                      priorityOptions={priorityOptions}
                      value={selected}
                      onChange={handlePriorityChange}
                    />
                    <WorkspaceInput
                      value={workspace}
                      onChange={handleworkspaceChange}
                    />
                  </div>
                  <DateTimeInputs
                    startTimeDay={startTimeDay}
                    startTimeHour={startTimeHour}
                    endTimeHour={endTimeHour}
                    deadlineDay={deadlineDay}
                    deadlineHour={deadlineHour}
                    handleStartTimeDayChange={handleStartTimeDayChange}
                    handleStartTimeHourChange={handleStartTimeHourChange}
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

export default AddGroupTask;
