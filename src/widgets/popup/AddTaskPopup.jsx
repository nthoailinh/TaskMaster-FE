import { Dialog, Transition, Listbox, Switch } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Button, Typography, Input } from "@material-tailwind/react";
import {
  PlusIcon,
  XMarkIcon,
  CheckIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";

const piorityOptions = [
  "Quan trọng - Khẩn cấp",
  "Quan trọng - Không khẩn cấp",
  "Không quan trọng - Khẩn cấp",
  "Không quan trọng - Không khẩn cấp",
];

function TaskNameInput({ value, onChange }) {
  return (
    <div className="mt-8">
      <Typography className="font-normal">Tên công việc</Typography>
      <Input
        className="focus:!border-t-blue-500 focus:!border-blue-500 !border !border-blue-gray-100 "
        labelProps={{
          className: "hidden",
        }}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

function DescriptionInput({ value, onChange }) {
  return (
    <div className="mt-3">
      <Typography className="font-normal">Mô tả công việc</Typography>
      <Input
        className="focus:!border-t-blue-500 focus:!border-blue-500 !border !border-blue-gray-100 "
        labelProps={{
          className: "hidden",
        }}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

function DateTimeInputs({
  startTimeDay,
  startTimeHour,
  endTimeHour,
  deadlineDay,
  deadlineHour,
  handleStartTimeDayChange,
  handleStartTimeHourChange,
  handleEndTimeHourChange,
  handleDeadlineDayChange,
  handleDeadlineHourChange,
}) {
  return (
    <div className="mt-8">
      <Typography className="font-normal">Thực hiện</Typography>
      <div className="flex space-x-20">
        <div className="w-32 mr-2">
          <Input
            className="focus:!border-t-blue-500 focus:!border-blue-500 !border !border-blue-gray-100 "
            labelProps={{
              className: "hidden",
            }}
            type="date"
            value={startTimeDay}
            onChange={handleStartTimeDayChange}
          />
        </div>
        <div className="w-32">
          <Input
            className="focus:!border-t-blue-500 focus:!border-blue-500 !border !border-blue-gray-100 "
            labelProps={{
              className: "hidden",
            }}
            type="time"
            value={startTimeHour}
            onChange={handleStartTimeHourChange}
          />
        </div>
        <div className="w-32">
          <Input
            className="focus:!border-t-blue-500 focus:!border-blue-500 !border !border-blue-gray-100 "
            labelProps={{
              className: "hidden",
            }}
            type="time"
            value={endTimeHour}
            onChange={handleEndTimeHourChange}
          />
        </div>
      </div>
      <div className="mt-3">
        <Typography className="font-normal">Đến hạn</Typography>
        <div className="flex space-x-20">
          <div className="w-32 mr-2">
            <Input
              className="focus:!border-t-blue-500 focus:!border-blue-500 !border !border-blue-gray-100 "
              labelProps={{
                className: "hidden",
              }}
              type="date"
              value={deadlineDay}
              onChange={handleDeadlineDayChange}
            />
          </div>
          <div className="w-32">
            <Input
              className="focus:!border-t-blue-500 focus:!border-blue-500 !border !border-blue-gray-100 "
              labelProps={{
                className: "hidden",
              }}
              type="time"
              value={deadlineHour}
              onChange={handleDeadlineHourChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function PrioritySelect({ selected, handlePriorityChange }) {
  return (
    <div className="w-96">
      <Listbox value={selected} onChange={handlePriorityChange}>
        <Listbox.Label>
          <Typography className="font-normal">Độ ưu tiên</Typography>
        </Listbox.Label>
        <div className="mt-1 relative">
          <Listbox.Button className="w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            <span className="block truncate">{selected}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronUpDownIcon
                className="h-4 w-4 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
              {piorityOptions.map((option) => (
                <Listbox.Option
                  key={option}
                  value={option}
                  className={({ active }) =>
                    `${active ? "text-blue-900 bg-blue-100" : "text-gray-900"}
                      cursor-default select-none relative py-2 pl-3 pr-9`
                  }
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? "font-medium" : "font-normal"
                        } block truncate`}
                      >
                        {option}
                      </span>

                      {selected && (
                        <span
                          className={`${
                            active ? "text-blue-600" : "text-blue-600"
                          }
                            absolute inset-y-0 right-0 flex items-center pr-4`}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      )}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

function TagInput({ value, onChange }) {
  return (
    <div className="mt-0.5">
      <Typography className="font-normal">Tag</Typography>
      <Input
        className="focus:!border-t-blue-500 focus:!border-blue-500 !border !border-blue-gray-100 "
        labelProps={{
          className: "hidden",
        }}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

function AddTaskPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [startTimeDay, setStartTimeDay] = useState("");
  const [startTimeHour, setStartTimeHour] = useState("");
  const [endTimeHour, setEndTimeHour] = useState("");
  const [deadlineDay, setDeadlineDay] = useState("");
  const [deadlineHour, setDeadlineHour] = useState("");
  const [selected, setSelected] = useState(piorityOptions[0]);
  const [tag, setTag] = useState("");
  const [notification, setNotification] = useState(false);

  function closeModal() {
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

  function handleTagChange(event) {
    setTag(event.target.value);
  }

  function handleSave() {
    console.log(taskName);
    console.log(description);
    console.log(startTimeDay);
    console.log(startTimeHour);
    console.log(endTimeHour);
    console.log(deadlineDay);
    console.log(deadlineHour);
    console.log(selected);
    console.log(tag);
    closeModal();
  }

  return (
    <>
      <Button
        onClick={openModal}
        color="blue"
        className="mr-5 flex items-center normal-case"
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
                  <PrioritySelect
                    selected={selected}
                    handlePriorityChange={handlePriorityChange}
                  />
                  <TagInput value={tag} onChange={handleTagChange} />

                  <div className="mt-4 flex justify-start">
                    <Typography className="mr-8 font-normal">
                      Bật thông báo
                    </Typography>
                    <Switch
                      checked={notification}
                      className={`${
                        false ? "bg-blue-600" : "bg-gray-200"
                      } relative inline-flex items-center h-6 rounded-full w-11`}
                    >
                      <span
                        className={`${
                          false ? "translate-x-6" : "translate-x-1"
                        } inline-block w-4 h-4 transform bg-white rounded-full`}
                      />
                    </Switch>
                  </div>

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

export default AddTaskPopup;
