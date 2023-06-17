import { chartsConfig } from "@/configs";

const websiteViewsChart = {
  type: "bar",
  height: 220,
  series: [
    {
      name: "Views",
      data: [50, 20, 10, 22, 50, 10, 40],
    },
  ],
  options: {
    ...chartsConfig,
    colors: "#fff",
    plotOptions: {
      bar: {
        columnWidth: "16%",
        borderRadius: 5,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: ["M", "T", "W", "T", "F", "S", "S"],
    },
  },
};

const dailySalesChart = {
  type: "line",
  height: 220,
  series: [
    {
      name: "Sales",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#fff"],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  },
};

export const statisticsChartsData = [
  {
    datasets: [
      {
        data: [80, 20],
        backgroundColor: [
          "#7DC27C",
          "#E5EAFC"
        ],
        display: true,
        borderColor: "#D1D6DC"
      }
    ],
    color: "blue",
    title: "Công việc cá nhân đã hoàn thành",
    description: "Số liệu trong 7 ngày gần nhất",
  },
  {
    datasets: [
      {
        data: [80, 20],
        backgroundColor: [
          "#7DC27C",
          "#E5EAFC"
        ],
        display: true,
        borderColor: "#D1D6DC"
      }
    ],
    color: "pink",
    title: "Công việc nhóm đã hoàn thành",
    description: "Số liệu trong 7 ngày gần nhất",
  },
];

export default statisticsChartsData;
