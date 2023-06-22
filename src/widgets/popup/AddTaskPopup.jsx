import { Dialog, Transition, Listbox } from "@headlessui/react";
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

export function AddTaskPopup() {
  let [isOpen, setIsOpen] = useState(false);
  let [startTime, setStartTime] = useState("");
  let [endTime, setEndTime] = useState("");
  const [selected, setSelected] = useState(piorityOptions[0]);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function handleStartTimeChange(event) {
    setStartTime(event.target.value);
  }

  function handleEndTimeChange(event) {
    setEndTime(event.target.value);
  }

  function handlePriorityChange(value) {
    setSelected(value);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function handleStartTimeChange(event) {
    setStartTime(event.target.value);
  }

  function handleEndTimeChange(event) {
    setEndTime(event.target.value);
  }

  function handleSave() {
    // TODO: Handle save logic here
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
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 pb-44 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-end">
                    <button
                      className="text-gray-500 hover:text-gray-600"
                      onClick={closeModal}
                    >
                      <XMarkIcon className="h-5 w-5" />
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-3xl font-medium leading-6 text-gray-900 pt-8"
                  >
                    Thêm công việc cá nhân
                  </Dialog.Title>
                  <div className="mt-12">
                    <Input label="Tên công việc" className="w-96" />
                  </div>
                  <div className="mt-4">
                    <Input label="Mô tả công việc" className="w-96" />
                  </div>
                  <div className="mt-4">
                    <Input label="Tag" className="w-96" />
                  </div>
                  <div className="mt-4">
                    <div className="flex space-x-20">
                      <div className="w-32 mr-2">
                        <Input label="Thời gian" type="date" />
                      </div>
                      <div className="w-32">
                        <Input
                          label="Giờ bắt đầu"
                          type="time"
                          value={startTime}
                          onChange={handleStartTimeChange}
                        />
                      </div>
                      <div className="w-32">
                        <Input
                          label="Giờ kết thúc"
                          type="time"
                          value={endTime}
                          onChange={handleEndTimeChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Listbox value={selected} onChange={handlePriorityChange}>
                      <Listbox.Label className="text-gray-700">
                        Độ ưu tiên
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
                                  `${
                                    active
                                      ? "text-blue-900 bg-blue-100"
                                      : "text-gray-900"
                                  }
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
                                          active
                                            ? "text-blue-600"
                                            : "text-blue-600"
                                        }
                                          absolute inset-y-0 right-0 flex items-center pr-4`}
                                      >
                                        <CheckIcon
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
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
                  <div className="flex justify-center mt-8">
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
