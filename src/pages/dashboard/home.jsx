import React, { useState, useEffect, useContext } from "react";
import {
  Typography,
  Card,
  CardHeader,
  Button,
  CardBody,
} from "@material-tailwind/react";
import { TaskCardShort } from "@/widgets/cards";
import { DoughnutChart } from "@/widgets/charts";
import { halfDoughnutChartsData } from "@/data";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "@/context/TaskContext";

function compareDates(dateString) {
  const currentDate = new Date(); // Ngày hiện tại
  const dateParts = dateString.split("/");

  // Trích xuất ngày, tháng, năm từ chuỗi đầu vào
  const day = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10) - 1; // Trừ 1 vì tháng trong đối tượng Date bắt đầu từ 0
  const year = parseInt(dateParts[2], 10);

  // Tạo đối tượng Date từ ngày trong chuỗi đầu vào
  const inputDate = new Date(year, month, day);

  // So sánh ngày đầu vào với ngày hiện tại
  if (inputDate < currentDate) {
    return true;
  } else {
    return false;
  }
}

export function Home() {
  const { upcomingTasks } = useContext(TaskContext);
  const [chartsData, setChartsData] = useState([]);
  const navigate = useNavigate();
  function handleClickDetail() {
    navigate("/dashboard/home/detail/personal");
  }

  useEffect(() => {
    setChartsData(halfDoughnutChartsData);
  }, []);

  return (
    <div className="mt-4">
      <div className="mb-3 grid grid-cols-1 gap-6">
        <Card className="overflow-hidden">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 flex items-center justify-between p-6"
          >
            <div>
              <Typography variant="h5" color="blue-gray" className="mb-1">
                Xin chào Hoài Linh
              </Typography>
              <Typography
                variant="small"
                className="flex items-center gap-1 font-normal text-blue-gray-600"
              >
                Chúc bạn một ngày làm việc hiệu quả
              </Typography>
            </div>
          </CardHeader>
        </Card>
      </div>
      <div className="mb-10">
        <Card className="overflow-hidden">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 flex items-center justify-between pt-6 pl-6 pb-2"
          >
            <div>
              <Typography variant="h5" color="blue-gray" className="mb-1">
                Các công việc sắp hết hạn
              </Typography>
            </div>
          </CardHeader>
          <hr />
          <CardBody>
            <div className="p-5">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-4">
                {upcomingTasks
                  .filter(({ footer }) => footer.status === "Chưa thực hiện")
                  .map(({ workspace, taskName, time, footer, id, ...rest }) => {
                    return (
                      <TaskCardShort
                        key={taskName}
                        {...rest}
                        taskId={id}
                        taskName={taskName}
                        workspace={workspace}
                        status={footer.status}
                        time={
                          <Typography className="font-normal text-blue-gray-600">
                            <span>Deadline</span>
                            <br />
                            <strong className="font-bold">
                              {time.deadlineTime.hour +
                                " " +
                                time.deadlineTime.day}
                            </strong>
                            &nbsp;
                          </Typography>
                        }
                        cardColor={`${
                          compareDates(time.endTime.day) ? "bg-red-100" : ""
                        }`}
                      />
                    );
                  })}
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="mb-1 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-2">
        {chartsData.map((props) => (
          <DoughnutChart key={props.key} data={props} {...props} />
        ))}
      </div>
      <div className="grid grid-cols-1">
        <Button
          variant="text"
          className="h-20 text-2xl"
          color="green"
          onClick={handleClickDetail}
        >
          Xem chi tiết báo cáo công việc
        </Button>
      </div>
    </div>
  );
}

export default Home;
