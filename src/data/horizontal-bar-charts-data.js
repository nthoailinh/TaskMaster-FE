import { Rating } from "@material-tailwind/react";

export const horizontalBarChartsData = [
  {
    key: "evaluationPersonal",
    title: "Đánh giá công việc cá nhân đã thực hiện",
    labels: ["5", "4", "3", "2", "1"],
    datasets: [
      {
        label: "Rating",
        data: [75, 12, 8, 3, 2],
        backgroundColor: ["purple", "gray", "gray", "gray", "gray"],
      },
    ],
  },
];

export default horizontalBarChartsData;
