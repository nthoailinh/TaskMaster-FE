import React, { useState } from "react";
import {
  Card,
  CardHeader,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import routes from "@/routes";

export function DetailHeader() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    console.log(activeTab);
    setActiveTab(index);
    console.log(activeTab);
  };

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
            <div className="col-span-1 flex items-center justify-center">
              <Tabs value={activeTab}>
                <TabsHeader
                  indicatorProps={{
                    className: "bg-blue-50 shadow-none text-blue-500 ",
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
              Nhiệm vụ đã hoàn thành
            </div>
            <div className="col-span-1 flex items-center justify-center">
              Nhiệm vụ mới
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}

export default DetailHeader;
