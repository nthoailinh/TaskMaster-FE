import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Avatar, Button, Typography } from "@material-tailwind/react";
import { TaskCard } from "@/widgets/cards";
import { useMaterialTailwindController } from "@/context";
import { format, isToday } from "date-fns";
import { TaskContext } from "@/context/TaskContext";
import { upcomingTask } from "@/data";

const Stepper = () => {
  const { upcomingTasks } = useContext(TaskContext);
  const [activeStep, setActiveStep] = useState(0);
  const currentDate = new Date();
  const formattedDate = isToday(currentDate)
    ? `Hôm nay, ${format(currentDate, "dd/MM/yyyy")}`
    : format(currentDate, "'Ngày' dd/MM/yyyy");

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between pl-4 pr-1">
          <Typography className="font-bold">To do list</Typography>
          <Typography>{formattedDate}</Typography>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {upcomingTasks
            .filter(({ footer }) => footer.status === "Chưa thực hiện")
            .slice(0, 3)
            .map(
              (
                { taskName, workspace, description, color, footer, time },
                index
              ) => (
                <div
                  key={index}
                  className={`flex items-center pl-4 pb-1 pr-1 ${
                    index === 0 ? "rounded-xl bg-red-50 pt-5" : "pt-5"
                  }`}
                >
                  <div className="mr-4">{time.startTime.hour}</div>
                  <Button
                    className={`mr-4 rounded-full p-2 ${
                      activeStep === index
                        ? "bg-red-400 text-white"
                        : "bg-gray-400"
                    }`}
                  >
                    {index + 1}
                  </Button>
                  <TaskCard
                    key={taskName}
                    taskName={taskName}
                    workspace={workspace}
                    description={description}
                    color={color}
                    footer={
                      <Typography className="font-normal text-blue-gray-600">
                        <span>{footer.priority}</span>
                        <br />
                        <span>{footer.status}</span>&nbsp;
                      </Typography>
                    }
                    cardColor={`${index === 0 ? "bg-red-50" : ""}`}
                  />
                </div>
              )
            )}
        </div>
      </div>
    </div>
  );
};

export function Sidenav({ brandImg, brandName, routes }) {
  const [controller] = useMaterialTailwindController();
  const { sidenavType, openSidenav } = controller;

  const sidenavTypes = {
    white: "bg-white shadow-lg",
  };

  return (
    <aside
      className={`${sidenavTypes[sidenavType]} ${
        openSidenav ? "translate-x-0" : "-translate-x-80"
      } fixed inset-0 z-0 my-4 ml-4 h-[calc(100vh-32px)] w-1/4 rounded-xl transition-transform duration-300 xl:translate-x-0`}
    >
      <div
        className={`relative border-b ${
          sidenavType === "dark" ? "border-white/20" : "border-blue-gray-50"
        }`}
      >
        <Link to="/" className="flex items-center gap-4 py-6 px-8">
          <Avatar src={brandImg} size="sm" />
          <Typography
            variant="h6"
            color={sidenavType === "dark" ? "white" : "blue-gray"}
          >
            {brandName}
          </Typography>
        </Link>
      </div>
      <div className="w-full py-4 px-8">
        <Stepper />
      </div>
    </aside>
  );
}

Sidenav.propTypes = {
  brandImg: PropTypes.string.isRequired,
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.array.isRequired,
};

export default Sidenav;
