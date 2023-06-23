import React, { useState, useEffect } from "react";
import { Typography, Card, CardHeader, Button } from "@material-tailwind/react";
import { TaskCardShort } from "@/widgets/cards";
import { DoughnutChart } from "@/widgets/charts";
import { upcomingTask, halfDoughnutChartsData } from "@/data";
import { useNavigate } from "react-router-dom";

export function Detail() {
  const [tasks, setTasks] = useState([]);
  const [chartsData, setChartsData] = useState([]);
  const navigate = useNavigate();
  function handleClickDetail() {
    navigate("/dashboard/detail");
  }

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
    </div>
  );
}

export default Detail;
