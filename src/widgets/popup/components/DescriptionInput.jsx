import { Typography, Input } from "@material-tailwind/react";

export function DescriptionInput({ value, onChange }) {
  return (
    <div className="mt-3">
      <Typography className="font-normal">Mô tả công việc</Typography>
      {/* <Input
        className="h-14 focus:!border-t-blue-500 focus:!border-blue-500 !border !border-blue-gray-100"
        labelProps={{
          className: "hidden",
        }}
        value={value}
        onChange={onChange}
        multiline
      /> */}
      <textarea
        id="message"
        rows="2"
        class="block p-2.5 w-full text-sm text-gray-700 rounded-lg border border-gray-300"
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
}

export default DescriptionInput;
