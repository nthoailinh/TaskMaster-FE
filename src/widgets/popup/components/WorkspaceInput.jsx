import React, { useState } from "react";
import { Typography } from "@material-tailwind/react";
import CreatableSelect from "react-select/creatable";
import { workspaces } from "@/data";

const createOption = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ""),
});

const defaultOptions = workspaces.map(({ name }) => createOption(name));

export function WorkspaceInput({ values, onChange }) {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState(defaultOptions);
  const [value, setValue] = useState(null);

  const handleCreate = (inputValue) => {
    setIsLoading(true);
    const newOption = createOption(inputValue);
    setIsLoading(false);
    setOptions((prev) => [...prev, newOption]);
    setValue(newOption);
  };
  return (
    <div className="mt-1 w-48">
      <Typography className="font-normal ">Nơi làm việc</Typography>
      <CreatableSelect
        isClearable
        isDisabled={isLoading}
        isLoading={isLoading}
        onChange={(newValue) => setValue(newValue)}
        onCreateOption={handleCreate}
        options={options}
        value={value}
        placeholder=""
      />
    </div>
  );
}

export default WorkspaceInput;
