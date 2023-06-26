import { Typography, Input } from "@material-tailwind/react";

export function DateTimeInputs({
  startTimeDay,
  startTimeHour,
  endTimeDay,
  endTimeHour,
  deadlineDay,
  deadlineHour,
  handleStartTimeDayChange,
  handleStartTimeHourChange,
  handleEndTimeDayChange,
  handleEndTimeHourChange,
  handleDeadlineDayChange,
  handleDeadlineHourChange,
}) {
  return (
    <div className="mt-8">
      <Typography className="font-normal">Bắt đầu</Typography>
      <div className="flex space-x-1">
        <div className="w-72 mr-2">
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
        <div className="w-64">
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
      </div>

      <div className="mt-3">
        <Typography className="font-normal">Kết thúc</Typography>
        <div className="flex space-x-1">
          <div className="w-72 mr-2">
            <Input
              className="focus:!border-t-blue-500 focus:!border-blue-500 !border !border-blue-gray-100 "
              labelProps={{
                className: "hidden",
              }}
              type="date"
              value={endTimeDay}
              onChange={handleEndTimeDayChange}
            />
          </div>
          <div className="w-64">
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
      </div>

      <div className="mt-3">
        <Typography className="font-normal">Đến hạn</Typography>
        <div className="flex space-x-1">
          <div className="w-72 mr-2">
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
          <div className="w-64">
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
