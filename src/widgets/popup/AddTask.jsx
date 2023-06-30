import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import AddGroupTask from "./AddGroupTask";
import AddPersonalTask from "./AddPersonalTask";

function AddTask() {
  const [isOpen, setIsOpen] = useState(false);

  function closeFatherModal() {
    setIsOpen(false);
  }

  function openFatherModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Button
        onClick={openFatherModal}
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
        <Dialog as="div" className="relative z-20" onClose={closeFatherModal}>
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
                      Thêm công việc
                    </Typography>
                    <XMarkIcon
                      onClick={closeFatherModal}
                      className="h-6 w-6 text-gray-400 cursor-pointer"
                    />
                  </div>

                  <div className="flex justify-center mt-8 pt-2 space-x-20">
                    <AddPersonalTask closeFatherModal={closeFatherModal} />
                    <AddGroupTask closeFatherModal={closeFatherModal} />
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

export default AddTask;
