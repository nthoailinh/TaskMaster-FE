import React, { useState } from "react";
import { Card, CardHeader, Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import routes from "@/routes";
import { CheckCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

export function DetailHeader({ completedTask, newTask }) {
  const [selectedTab, setSelectedTab] = useState("personal");
  const navigate = useNavigate();

  function handleClick(path) {
    navigate(path);
  }

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="mt-4">
      <div className="mb-6 grid grid-cols-1">
        <Card className="overflow-hidden">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 flex items-center justify-between p-6"
          >
            <div className="col-span-1 flex items-center justify-center ml-4">
              {routes.map(({ layout, pages }) => {
                if (layout === "dashboard") {
                  return pages.map(({ label, path }, key) => {
                    if (path.includes("/detail")) {
                      return (
                        <Button
                          key={key}
                          variant="outlined"
                          color="blue-gray"
                          value={key}
                          className="mr-2"
                          onClick={() => handleClick(`/${layout}${path}`)}
                        >
                          {label}
                        </Button>
                      );
                    }
                    return null;
                  });
                }
                return null;
              })}
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <Typography className="text-lg font-normal text-blue-gray-600">
                <CheckCircleIcon className="h-6 w-6 inline-block mr-2" />
                Công việc đã hoàn thành
                <span className="font-bold ml-8">
                  {completedTask.toString().padStart(2, "0")}
                </span>
              </Typography>
            </div>
            <div className="col-span-1 flex items-center justify-center mr-12">
              <Typography className="text-lg font-normal text-blue-gray-600">
                <PlusCircleIcon className="h-6 w-6 inline-block mr-2" />
                Công việc mới
                <span className="font-bold ml-8">
                  {newTask.toString().padStart(2, "0")}
                </span>
              </Typography>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}

export default DetailHeader;
