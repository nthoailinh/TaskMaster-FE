import { Routes, Route } from "react-router-dom";
import { Sidenav, DashboardNavbar } from "@/widgets/layout";
import routes from "@/routes";
import { useMaterialTailwindController } from "@/context";

export function Dashboard() {
  const [controller] = useMaterialTailwindController();
  const { sidenavType } = controller;

  return (
    <div className="min-h-screen bg-blue-gray-50/50 grid grid-cols-12">
      <div className="col-span-3">
        <Sidenav
          routes={routes}
          brandImg={
            sidenavType === "white" ? "/img/girl.png" : "/img/logo-ct-dark.png"
          }
          brandName="Nguyễn Thị Hoài Linh"
        />
      </div>
      <div className="col-span-9 p-4 pl-12">
        <DashboardNavbar />
        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "dashboard" &&
              pages.map(({ path, element }) => (
                <Route exact path={path} element={element} />
              ))
          )}
        </Routes>
        <div className="text-blue-gray-600"></div>
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
