import React from "react";
import { Typography, Card, CardHeader, Button } from "@material-tailwind/react";
import { TaskCard } from "@/widgets/cards";
import { DoughnutChart } from "@/widgets/charts";
import { CardData, statisticsChartsData } from "@/data";

export function Home() {
  return (
    <div className="mt-4">
      <div className="mb-4 grid grid-cols-1 gap-6">
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
      <div className="mb-12 grid grid-cols-1 gap-6">
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
                {CardData.map(({ tag, title, footer, ...rest }) => {
                  return (
                    <TaskCard
                      key={title}
                      {...rest}
                      title={title}
                      tag={tag}
                      footer={
                        <Typography className="font-normal text-blue-gray-600">
                          <div>Deadline</div>
                          <strong className="font-bold">{footer.value}</strong>
                          &nbsp;{footer.label}
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
        {statisticsChartsData.map((props) => (
          <DoughnutChart data={props} {...props} />
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
