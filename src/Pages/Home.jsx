import { Helmet } from "react-helmet-async";
import { Estates } from "../Componets/Estates/Estates";
import { Slider } from "../Componets/Slider/Slider";
import { GetInTouch } from "./../Componets/GetInTouch/GetInTouch";
import { FAQ } from "./../Componets/FAQ/FAQ";
import { Maps } from "../Componets/Maps/Maps";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in-back"
        className="my-8"
      >
        <Slider />
      </div>

      <Estates />

      <FAQ />

      <GetInTouch />
    </div>
  );
};
