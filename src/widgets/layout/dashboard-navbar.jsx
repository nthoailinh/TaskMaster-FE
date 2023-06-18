import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  MenuItem,
  IconButton,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserIcon,
  UserGroupIcon,
  CodeBracketSquareIcon,
  ArrowsRightLeftIcon,
  PlusIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";

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
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label, icon }, key) => (
        <Typography
          key={label}
          as="a"
          href="#"
          variant="h6"
          color="blue-gray"
          className="font-normal"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            {label}
          </MenuItem>
        </Typography>
      ))}
    </ul>
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
    <Navbar className="min-w-full py-2 px-4 lg:px-3 lg:py-4">
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
          <Button className="mr-2 flex items-center normal-case">
            <PlusIcon className="text-500 mr-1 h-5 w-5" />
            <Typography
              as="li"
              variant="h6"
              color="white"
              className="p-1 font-normal"
            >
              Thêm việc
            </Typography>
          </Button>
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
      <MobileNav open={isNavOpen} className="overflow-scroll">
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
          <Button className="mr-2 flex items-center normal-case">
            <PlusIcon className="text-500 mr-1 h-5 w-5" />
            <Typography
              as="li"
              variant="small"
              color="white"
              className="p-1 font-normal"
            >
              Thêm việc
            </Typography>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}

export default DashboardNavbar;
