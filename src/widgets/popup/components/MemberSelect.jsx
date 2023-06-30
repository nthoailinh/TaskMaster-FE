import { Typography } from "@material-tailwind/react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

export function MemberSelect({
  selectedMembers,
  memberOptions,
  value,
  onChange,
}) {
  const animatedComponents = makeAnimated();
  return (
    <div className="mt-3">
      <Typography className="font-normal">Giao việc</Typography>
      <Select
        defaultValue={selectedMembers ? selectedMembers : ""}
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
