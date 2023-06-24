import React, { useState } from "react";
import {
  Card,
  CardHeader,
  Tabs,
  TabsHeader,
  Tab,
  Typography,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import routes from "@/routes";
import { StarIcon, NewspaperIcon } from "@heroicons/react/24/outline";

export function DetailHeader({ completedTask, newTask }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
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
              <Tabs value={activeTab}>
                <TabsHeader
                  indicatorProps={{
                    className: "bg-blue-50 shadow-none text-blue-500",
                  }}
                >
                  {routes.map(
                    ({ layout, pages }) =>
                      layout === "dashboard" &&
                      pages.map(
                        ({ label, path }, key) =>
                          path.includes("/detail") && (
                            <NavLink
                              to={`/${layout}${path}`}
                              className="px-2"
                              key={key}
                            >
                              <Tab
                                value={key}
                                className="py-4 px-2"
                                onClick={() => handleTabChange(key)}
                              >
                                {label}
                              </Tab>
                            </NavLink>
                          )
                      )
                  )}
                </TabsHeader>
              </Tabs>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <Typography className="text-lg">
                <StarIcon className="h-6 w-6 inline-block mr-2" />
                Nhiệm vụ đã hoàn thành
                <span className="font-bold ml-8">{completedTask.toString().padStart(2, '0')}</span>
              </Typography>
            </div>
            <div className="col-span-1 flex items-center justify-center mr-8">
              <Typography className="text-lg">
                <NewspaperIcon className="h-6 w-6 inline-block mr-2" />
                Nhiệm vụ mới
                <span className="font-bold ml-8">{newTask.toString().padStart(2, '0')}</span>
              </Typography>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}

export default DetailHeader;
