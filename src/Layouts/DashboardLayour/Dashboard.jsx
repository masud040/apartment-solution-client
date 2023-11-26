import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar/Sidebar";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Diamond House | Dashboard</title>
      </Helmet>
      <div className="relative min-h-screen md:flex">
        {/* Sidebar Component */}
        <Sidebar />
        <div className="flex-1  md:ml-64">
          <div className="p-5">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
