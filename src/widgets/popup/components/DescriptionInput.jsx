import { Typography, Input } from "@material-tailwind/react";

export function DescriptionInput({ value, onChange }) {
  return (
    <div className="mt-3">
      <Typography className="font-normal">Mô tả công việc</Typography>
      <Input
        className="h-14 focus:!border-t-blue-500 focus:!border-blue-500 !border !border-blue-gray-100 "
        labelProps={{
          className: "hidden",
        }}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default DescriptionInput;
