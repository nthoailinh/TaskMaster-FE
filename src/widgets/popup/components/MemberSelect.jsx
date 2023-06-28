import { Typography } from "@material-tailwind/react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

export function MemberSelect({ memberOptions, value, onChange }) {
  const animatedComponents = makeAnimated();
  return (
    <div className="mt-3">
      <Typography className="font-normal">Giao việc</Typography>
      <Select
        options={memberOptions.map((option) => ({
          value: option,
          label: option,
        }))}
        value={value}
        onChange={onChange}
        isMulti
        components={animatedComponents}
        className="w-full"
        classNamePrefix="react-select"
      />
    </div>
  );
}

export default MemberSelect;
