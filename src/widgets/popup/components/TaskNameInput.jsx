import { Typography, Input } from "@material-tailwind/react";

export function TaskNameInput({ value, onChange }) {
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

export default TaskNameInput;
