import { Typography, Input } from "@material-tailwind/react";

export function DateTimeInputs({
  startTimeDay,
  startTimeHour,
  endTimeHour,
  deadlineDay,
  deadlineHour,
  handleStartTimeDayChange,
  handleStartTimeHourChange,
  handleEndTimeHourChange,
  handleDeadlineDayChange,
  handleDeadlineHourChange,
}) {
  return (
    <div className="mt-8">
      <Typography className="font-normal">Thực hiện</Typography>
      <div className="flex space-x-20">
        <div className="w-32 mr-2">
          <Input
            className="focus:!border-t-blue-500 focus:!border-blue-500 !border !border-blue-gray-100 "
            labelProps={{
              className: "hidden",
            }}
            type="date"
            value={startTimeDay}
            onChange={handleStartTimeDayChange}
          />
        </div>
        <div className="w-32">
          <Input
            className="focus:!border-t-blue-500 focus:!border-blue-500 !border !border-blue-gray-100 "
            labelProps={{
              className: "hidden",
            }}
            type="time"
            value={startTimeHour}
            onChange={handleStartTimeHourChange}
          />
        </div>
        <div className="w-32">
          <Input
            className="focus:!border-t-blue-500 focus:!border-blue-500 !border !border-blue-gray-100 "
            labelProps={{
              className: "hidden",
            }}
            type="time"
            value={endTimeHour}
            onChange={handleEndTimeHourChange}
          />
        </div>
      </div>
      <div className="mt-3">
        <Typography className="font-normal">Đến hạn</Typography>
        <div className="flex space-x-20">
          <div className="w-32 mr-2">
            <Input
              className="focus:!border-t-blue-500 focus:!border-blue-500 !border !border-blue-gray-100 "
              labelProps={{
                className: "hidden",
              }}
              type="date"
              value={deadlineDay}
              onChange={handleDeadlineDayChange}
            />
          </div>
          <div className="w-32">
            <Input
              className="focus:!border-t-blue-500 focus:!border-blue-500 !border !border-blue-gray-100 "
              labelProps={{
                className: "hidden",
              }}
              type="time"
              value={deadlineHour}
              onChange={handleDeadlineHourChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DateTimeInputs;
