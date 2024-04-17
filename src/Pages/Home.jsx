import { Helmet } from "react-helmet-async";
import { Estates } from "../Componets/Estates/Estates";
import { Slider } from "../Componets/Slider/Slider";
import { GetInTouch } from "./../Componets/GetInTouch/GetInTouch";
import { FAQ } from "./../Componets/FAQ/FAQ";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Maps } from "../Componets/Maps/Maps";

export const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Elegance | Home</title>
      </Helmet>
      <div className="my-8 animate__animated animate__fadeIn animate__slower relative">
        <Slider />
      </div>

      <Estates />

      <FAQ />
      <GetInTouch />
    </div>
  );
};
