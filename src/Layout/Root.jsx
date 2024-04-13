import { Outlet } from "react-router-dom";
import { Navbar } from "../SharedComponets/Navbar";
import { Footer } from "../SharedComponets/Footer";

export const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};
