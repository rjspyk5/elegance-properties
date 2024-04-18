import { Outlet } from "react-router-dom";
import { Navbar } from "../SharedComponets/Navbar";
import { Footer } from "../SharedComponets/Footer";
export const Root = () => {
  return (
    <div className="flex flex-col">
      <div className="sticky top-0 z-40 backdrop-blur-lg">
        <Navbar></Navbar>
      </div>
      <div className="px-4 md:px-7 lg:px-11 min-h-screen">
        <Outlet />
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};
