import { Switch } from "@headlessui/react";
import { Typography } from "@material-tailwind/react";

export function ToggleNotification({ value, onChange }) {
  return (
    <div className="mt-4 flex justify-start items-center">
      <Typography className="mr-8 font-normal">Bật thông báo</Typography>
      <Switch
        checked={value}
        onChange={onChange}
        className={`${value ? "bg-teal-900" : "bg-teal-200"}
relative inline-flex h-[34px] w-[70px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${value ? "translate-x-9" : "translate-x-0"}
pointer-events-none inline-block h-[30px] w-[30px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
}

export default ToggleNotification;
