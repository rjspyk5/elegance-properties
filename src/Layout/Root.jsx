import { Outlet } from "react-router-dom";
import { Navbar } from "../SharedComponets/Navbar";
import { Footer } from "../SharedComponets/Footer";

export const Root = () => {
  return (
    <div className="px-4 md:px-7 lg:px-11">
      <Navbar></Navbar>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};
