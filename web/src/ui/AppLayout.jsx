import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Sidebar";
import Header from "./Header";

function AppLayout() {
  return (
    <div>
      <Sidebar />
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;