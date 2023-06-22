import React, { useState, useEffect } from "react";
import { Typography, Card, CardHeader, Button } from "@material-tailwind/react";
import { TaskCardShort } from "@/widgets/cards";
import { DoughnutChart } from "@/widgets/charts";
import { upcomingTask, halfDoughnutChartsData } from "@/data";

export function Home() {
  const [tasks, setTasks] = useState([]);
  const [chartsData, setChartsData] = useState([]);

  useEffect(() => {
    setTasks(upcomingTask);
    setChartsData(halfDoughnutChartsData);
  }, []);

  return (
    <div className="mt-4">
      <div className="mb-6 grid grid-cols-1 gap-6">
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
      <div className="mb-14 grid grid-cols-1 gap-6">
        <Card className="overflow-hidden">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 flex items-center justify-between p-6"
          >
            <div>
              <Typography variant="h5" color="blue-gray" className="mb-1">
                Các công việc <br className="hidden sm:inline" /> sắp hết hạn
              </Typography>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-4 ">
                {tasks.map(({ tag, title, time, ...rest }) => {
                  return (
                    <TaskCardShort
                      key={title}
                      {...rest}
                      title={title}
                      tag={tag}
                      time={
                        <Typography className="font-normal text-blue-gray-600">
                          <span>Deadline</span>
                          <br />
                          <strong className="font-bold">
                            {time.hour + " " + time.day}
                          </strong>
                          &nbsp;
                        </Typography>
                      }
                    />
                  );
                })}
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
      <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-2">
        {chartsData.map((props) => (
          <DoughnutChart key={props.key} data={props} {...props} />
        ))}
      </div>
      <div className="mb-4 grid grid-cols-1 gap-6">
        <Button
          variant="text"
          className="d-flex justify-content-center align-items-center h-20 gap-2 text-2xl"
          color="green"
        >
          Xem chi tiết báo cáo công việc
        </Button>
      </div>
    </div>
  );
}

export default Home;
