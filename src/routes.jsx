import {
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  CodeBracketSquareIcon,
  UserIcon,
  UserGroupIcon
} from "@heroicons/react/24/solid";
import { Group, Home, Personal } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        label: "Tổng quan",
        icon: CodeBracketSquareIcon,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        label: "Cá nhân",
        icon: UserIcon,
        name: "dashboard",
        path: "/personal",
        element: <Personal />,
      },
      {
        label: "Nhóm",
        icon: UserGroupIcon,
        name: "dashboard",
        path: "/group",
        element: <Group />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
