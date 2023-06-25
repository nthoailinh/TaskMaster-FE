import React, { useState, useRef, useEffect } from "react";
import { Button, Typography } from "@material-tailwind/react";
import CreatableSelect from "react-select/creatable";
import { SketchPicker } from "react-color";
import { workspaces } from "@/data";

const createOption = (label, color) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ""),
  color,
});

const defaultOptions = workspaces.map(({ name, color }) =>
  createOption(name, color)
);

export function WorkspaceInput({ values, onChanges }) {
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
        <CreatableSelect
          isClearable
          isDisabled={isLoading}
          isLoading={isLoading}
          onChange={handleValueChange}
          onCreateOption={handleCreate}
          options={options}
          value={value}
          placeholder=""
          className="mt-1 w-56"
        />
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
          <div ref={colorPickerRef}>
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

export default WorkspaceInput;
