import { Typography, Input } from "@material-tailwind/react";

export function DescriptionInput({ value, onChange }) {
  return (
    <div className="mt-3">
      <Typography className="font-normal">Mô tả công việc</Typography>
      <textarea
        id="message"
        rows="2"
        className="block p-2.5 w-full text-sm text-gray-700 rounded-lg border border-gray-300"
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
}

export default DescriptionInput;
