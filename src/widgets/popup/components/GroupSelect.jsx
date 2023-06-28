import { Transition, Listbox } from "@headlessui/react";
import { Fragment } from "react";
import { Typography } from "@material-tailwind/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export function GroupSelect({ groupOptions, value, onChange }) {
  return (
    <div className="mt-6">
      <Listbox value={value} onChange={onChange}>
        <Listbox.Label>
          <Typography className="font-normal">Chọn nhóm</Typography>
        </Listbox.Label>
        <div className="mt-1 relative">
          <Listbox.Button className="h-9 w-full bg-white opacity-100 border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            <span className="block truncate">{value}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronDownIcon
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
            <Listbox.Options className="z-50 absolute mt-1 w-full bg-white opacity-100 shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
              {groupOptions.map((option) => (
                <Listbox.Option
                  key={option}
                  value={option}
                  className={({ active }) =>
                    `${active ? "text-blue-900 bg-blue-100" : "text-gray-900"}
                        cursor-default select-none relative py-2 pl-3 pr-9`
                  }
                >
                  {({ value, active }) => (
                    <>
                      <span
                        className={`${
                          value ? "font-medium" : "font-normal"
                        } block truncate`}
                      >
                        {option}
                      </span>

                      {value && (
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

export default GroupSelect;
