import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Avatar, Button, Typography } from "@material-tailwind/react";
import { useMaterialTailwindController, setOpenSidenav } from "@/context";
import { CardData, statisticsChartsData } from "@/data";
import { TaskCard } from "@/widgets/cards";

const Stepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [cardData, setCardData] = useState(CardData);

  useEffect(() => {
    setCardData(CardData);
  }, [CardData]);

  const handleStepClick = (stepIndex) => {
    setActiveStep(stepIndex);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-2">
        {cardData
          .slice(0, 3)
          .map(({ title, tag, description, color, footer, time }, index) => (
            <div
              key={index}
              className={`my-3 flex items-center pl-4 pt-5 pb-1 pr-1 ${
                index === 0 ? "rounded-xl bg-red-50 " : ""
              }`}
            >
              <div className="mr-4">{time.hour}</div>
              <Button
                className={`mr-4 rounded-full p-2 ${
                  activeStep === index ? "bg-red-400 text-white" : "bg-gray-400"
                }`}
                onClick={() => handleStepClick(index)}
              >
                {index + 1}
              </Button>
              <TaskCard
                key={title}
                title={title}
                tag={tag}
                description={description}
                color={color}
                footer={
                  <Typography className="font-normal text-blue-gray-600">
                    <span>{footer.piority}</span>
                    <br />
                    <span>{footer.status}</span>
                    &nbsp;
                  </Typography>
                }
                cardColor={`${index === 0 ? "bg-red-50" : ""}`}
              />
            </div>
          ))}
      </div>
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
      } fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-1/4 rounded-xl transition-transform duration-300 xl:translate-x-0`}
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
