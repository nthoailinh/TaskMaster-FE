import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);

export function DoughnutChart({ data, title, description }) {
  return (
    <Card>
      <CardHeader>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Doughnut
            data={data}
            options={{
              rotation: -90,
              circumference: 180,
              cutout: "80%",
              maintainAspectRatio: false,
              responsive: true,
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
            className="my-12"
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h1"
              color="blue-gray"
              className="mt-28"
              style={{ fontSize: "40px" }}
            >
              {data.datasets[0].data[0]}%
            </Typography>
          </div>
        </div>
      </CardHeader>
      <CardBody className="p-6">
        <Typography variant="h5" color="blue-gray" style={{ fontSize: "24px" }}>
          {title}
        </Typography>
        <Typography
          variant="small"
          className="font-normal text-blue-gray-600"
          style={{ fontSize: "16px" }}
        >
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default DoughnutChart;
