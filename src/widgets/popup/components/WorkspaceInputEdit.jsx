import { Transition, Listbox } from "@headlessui/react";
import { Fragment, useState, useRef, useEffect } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { SketchPicker } from "react-color";

const createOption = (label, color) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ""),
  color,
});

export function WorkspaceInputEdit({ workspaces, values, onChanges }) {
  const defaultOptions = workspaces.map(({ name, color }) =>
    createOption(name, color)
  );

  const { workspace, color } = values;
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState(defaultOptions);
  const [value, setValue] = useState(workspace);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedColor, setSelectedColor] = useState(color);
  const colorPickerRef = useRef();

  const handleCreate = (inputValue) => {
    setIsLoading(true);
    const newOption = createOption(inputValue);
    setIsLoading(false);
    setOptions((prev) => [...prev, newOption]);
    setValue(newOption);
    onChanges.handleWorkspaceChange(newOption.label);
  };

  const handleValueChange = (newValue) => {
    setValue(newValue);
    onChanges.handleWorkspaceChange(newValue.label);
    if (newValue && newValue.color) {
      setSelectedColor(newValue.color);
      onChanges.handleColorChange(newValue.color);
    }
  };

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
    onChanges.handleColorChange(color.hex);
  };

  const toggleColorPicker = () => {
    setShowColorPicker((prev) => !prev);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        colorPickerRef.current &&
        !colorPickerRef.current.contains(event.target)
      ) {
        setShowColorPicker(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="grid grid-cols-2 gap-8">
      <div>
        <Typography className="font-normal">Nơi làm việc</Typography>
        <Listbox value={value} onChange={handleValueChange}>
          <Listbox.Label>
            <Typography className="sr-only">Nơi làm việc</Typography>
          </Listbox.Label>
          <div className="mt-1 relative">
            <Listbox.Button className="w-56 bg-white opacity-100 border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
              <span className="block truncate">{value ? value.label : ""}</span>
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
                {options.map((option) => (
                  <Listbox.Option
                    key={option.value}
                    value={option}
                    className={({ active }) =>
                      `${active ? "text-blue-900 bg-blue-100" : "text-gray-900"}
                        cursor-default select-none relative py-2 pl-3 pr-9`
                    }
                  >
                    {({ active }) => (
                      <>
                        <span
                          className={`${
                            option.value ? "font-medium" : "font-normal"
                          } block truncate`}
                        >
                          {option.label}
                        </span>

                        {value === option && (
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

      <div className={`ml-16 relative ${showColorPicker ? "z-50" : ""}`}>
        <Typography className="font-normal">Màu sắc</Typography>
        <Button
          onClick={toggleColorPicker}
          className="mt-2 mb-1 rounded-lg"
          style={{ backgroundColor: selectedColor }}
          size="lg"
          fullWidth
        ></Button>
        {showColorPicker && (
          <div
            ref={colorPickerRef}
            className="transform -translate-x-32 translate-y-2"
          >
            <SketchPicker
              color={selectedColor}
              onChange={handleColorChange}
              className="absolute top-0 left-0"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default WorkspaceInputEdit;
