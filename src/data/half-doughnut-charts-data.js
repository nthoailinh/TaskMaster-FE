export const halfDoughnutChartsData = [
  {
    key: "personal",
    datasets: [
      {
        data: [80, 20],
        backgroundColor: [
          "#03C66A",
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
    key: "group",
    datasets: [
      {
        data: [60, 40],
        backgroundColor: [
          "#03C66A",
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

export default halfDoughnutChartsData;
