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
        <div>
      <Doughnut
        data={data}
        options={{
          rotation: -90,
          circumference: 180,
          cutout: "90%",
          maintainAspectRatio: true,
          responsive: true
        }}
      />
    </div>
      </CardHeader>
      <CardBody className="p-6">
        <Typography variant="h6" color="blue-gray">
          {title}
        </Typography>
        <Typography variant="small" className="font-normal text-blue-gray-600">
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default DoughnutChart;
