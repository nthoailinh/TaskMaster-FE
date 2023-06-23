import React from "react";
import { Typography, Card, CardHeader, Button } from "@material-tailwind/react";

export function Personal() {
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
                Đây là Cá nhân
              </Typography>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}

export default Personal;
