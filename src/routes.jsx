import {
  CodeBracketSquareIcon,
  UserIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { Detail, Group, Home, Personal } from "@/pages/dashboard";

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
      {
        label: "Chi tiết",
        icon: UserGroupIcon,
        name: "dashboard",
        path: "/detail",
        element: <Detail />,
      },
    ],
  },
];

export default routes;
