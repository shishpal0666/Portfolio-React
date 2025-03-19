import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <main>
      <Sidebar />
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Body;
