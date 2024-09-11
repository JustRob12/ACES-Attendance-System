import MobileNavBar from "@/components/main/MobileNavBar";
import DashboardNavBar from "@/components/main/DashboardNavBar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <>
      <DashboardNavBar />
      <Outlet />
      <MobileNavBar />
    </>
  );
}

export default DashboardLayout;
