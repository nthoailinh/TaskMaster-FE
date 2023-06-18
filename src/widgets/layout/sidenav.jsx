import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Avatar, Button, Typography } from "@material-tailwind/react";
import { useMaterialTailwindController, setOpenSidenav } from "@/context";
import { CardData, statisticsChartsData } from "@/data";
import { TaskCard } from "@/widgets/cards";

const Stepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (stepIndex) => {
    setActiveStep(stepIndex);
  };

  const steps = ["09:00 AM", "10:00 AM", "11:00 AM"]; // Danh sách các bước

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-2">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div className="mr-4">{step}</div> {/* Hiển thị chữ bước */}
            <Button
              className={`rounded-full p-2 ${
                activeStep === index ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => handleStepClick(index)}
            >
              {index + 1} {/* Hiển thị số bước */}
            </Button>
            {/* Task card here */}
          </div>
        ))}
      </div>
      {/* <div className="mt-2 flex gap-2">
        <div
          className={`h-1 w-1 rounded-full ${
            activeStep === 0 ? "bg-blue-500" : "bg-blue-200"
          }`}
        />
        <div
          className={`h-1 w-1 rounded-full ${
            activeStep === 1 ? "bg-blue-500" : "bg-blue-200"
          }`}
        />
        <div
          className={`h-1 w-1 rounded-full ${
            activeStep === 2 ? "bg-blue-500" : "bg-blue-200"
          }`}
        />
      </div> */}
    </div>
  );
};

export function Sidenav({ brandImg, brandName, routes }) {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType, openSidenav } = controller;

  const sidenavTypes = {
    white: "bg-white shadow-lg",
  };

  return (
    <aside
      className={`${sidenavTypes[sidenavType]} ${
        openSidenav ? "translate-x-0" : "-translate-x-80"
      } fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-1/5 rounded-xl transition-transform duration-300 xl:translate-x-0`}
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

export default Sidenav;
