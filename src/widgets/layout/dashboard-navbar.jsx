import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  MenuItem,
  IconButton,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import {
  UserIcon,
  UserGroupIcon,
  CodeBracketSquareIcon,
  ArrowsRightLeftIcon,
  PlusIcon,
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";
import AddTask from "../popup/AddTask";

import { Link } from "react-router-dom";

const navListItems = [
  {
    label: "Tổng quan",
    icon: CodeBracketSquareIcon,
  },
  {
    label: "Cá nhân",
    icon: UserIcon,
  },
  {
    label: "Nhóm",
    icon: UserGroupIcon,
  },
];

function NavList() {
  return (
    <div className="w-96">
      <Tabs value="app">
        <TabsHeader>
          {navListItems.map(({ label, icon }, key) => (
            <Tab value={key}>
              {React.createElement(icon, { className: "h-[24px] w-[24px]" })}{" "}
              {label}
            </Tab>
          ))}
        </TabsHeader>
      </Tabs>
    </div>
  );
}

export function DashboardNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <div className="min-w-full py-2 px-4 lg:px-3 lg:py-4">
      <div className="relative mx-auto flex items-center text-blue-gray-900">
        <div>
          <NavList />
        </div>
        <div className="ml-auto flex items-center">
          <Button color="purple" className="mr-5 flex items-center normal-case">
            <ArrowsRightLeftIcon className="text-500 mr-1 h-5 w-5" />
            <Typography
              as="li"
              variant="h6"
              color="white"
              className="p-1 font-normal"
            >
              Tích hợp
            </Typography>
          </Button>
          <AddTask />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll">
        <div className="ml-auto flex items-center">
          <Button color="purple" className="mr-5 flex items-center normal-case">
            <ArrowsRightLeftIcon className="text-500 mr-1 h-5 w-5" />
            <Typography
              as="li"
              variant="small"
              color="white"
              className="p-1 font-normal"
            >
              Tích hợp
            </Typography>
          </Button>
          <AddTask />
        </div>
      </Collapse>
    </div>
  );
}

export default DashboardNavbar;
