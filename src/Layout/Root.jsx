import { Outlet } from "react-router-dom";
import { Navbar } from "../SharedComponets/Navbar";

export const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet />
    </div>
  );
};
