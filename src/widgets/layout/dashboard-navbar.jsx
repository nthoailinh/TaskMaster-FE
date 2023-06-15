import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

import {
  PlusIcon,
  ArrowsRightLeftIcon,
  UserIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export function DashboardNavbar() {
  const [openNav, setOpenNav] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Link to={`/home`}>
        <Button color="white" className="normal-case">
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <a
              href="#"
              className={`flex items-center ${
                activeSection === "overview"
                  ? "text-lightBlue-500"
                  : "text-blueGray-500"
              }`}
              onMouseEnter={() => setActiveSection("overview")}
              onMouseLeave={() => setActiveSection(null)}
            >
              Tổng quan
            </a>
          </Typography>
        </Button>
      </Link>

      <Link to={`/profile`}>
        <Button color="white" className="normal-case">
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <a
              href="#"
              className={`flex items-center ${
                activeSection === "personal"
                  ? "text-lightBlue-500"
                  : "text-blueGray-500"
              }`}
              onMouseEnter={() => setActiveSection("personal")}
              onMouseLeave={() => setActiveSection(null)}
            >
              Cá nhân
            </a>
          </Typography>
        </Button>
      </Link>

      <Button color="white" className="normal-case">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a
            href="#"
            className={`flex items-center ${
              activeSection === "group"
                ? "text-lightBlue-500"
                : "text-blueGray-500"
            }`}
            onMouseEnter={() => setActiveSection("group")}
            onMouseLeave={() => setActiveSection(null)}
          >
            Nhóm
          </a>
        </Typography>
      </Button>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <div className="hidden lg:block">{navList}</div>
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
      </div>
      <MobileNav open={openNav}>
        <div className="ml-auto flex items-center">
          <Button color="purple" className="mr-5 flex items-center">
            <ArrowsRightLeftIcon className="text-500 mr-1 h-5 w-5" />
            Tích hợp
          </Button>
          <Button className="mr-2 flex items-center">
            <PlusIcon className="text-500 mr-1 h-5 w-5" />
            Thêm việc
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;
