import {
  CodeBracketSquareIcon,
  UserIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import {
  DetailPersonal,
  DetailGroup,
  Group,
  Home,
  Personal,
} from "@/pages/dashboard";

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
        label: "Cá nhân",
        icon: UserGroupIcon,
        name: "dashboard/detail",
        path: "/detail/personal",
        element: <DetailPersonal />,
      },
      {
        label: "Nhóm",
        icon: UserGroupIcon,
        name: "dashboard/detail",
        path: "/detail/group",
        element: <DetailGroup />,
      },
    ],
  },
];

export default routes;
