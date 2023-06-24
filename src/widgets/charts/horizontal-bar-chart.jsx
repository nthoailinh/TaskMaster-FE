import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

export function HorizontalBarChart({ data, title }) {
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
          <Bar
            data={data}
            options={{
              indexAxis: "y",
              responsive: true,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                y: {
                  grid: {
                    display: false, // Tắt grid theo chiều ngang
                  },
                },
                x: {
                  max: 100,
                  ticks: {
                    stepSize: 25,
                    callback: (value) => {
                      if (
                        value === 0 ||
                        value === 25 ||
                        value === 50 ||
                        value === 75 ||
                        value === 100
                      ) {
                        return value;
                      }
                      return null;
                    },
                  },
                },
              },
              barThickness: 20,
            }}
            className="my-12"
          />
        </div>
      </CardHeader>
      <CardBody className="p-6">
        <Typography variant="h5" color="blue-gray" style={{ fontSize: "24px" }}>
          {title}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default HorizontalBarChart;
