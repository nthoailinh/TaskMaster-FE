import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Button, Typography, Input } from "@material-tailwind/react";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";

export function AddTaskPopup() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
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
                    className="text-2xl font-medium leading-6 text-gray-900 pt-8"
                  >
                    Thêm công việc cá nhân
                  </Dialog.Title>
                  <div className="mt-12">
                    <div className="w-96">
                      <Input label="Tên công việc" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="w-96">
                      <Input label="Mô tả công việc" />
                    </div>
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
