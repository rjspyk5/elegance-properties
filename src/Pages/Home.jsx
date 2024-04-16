import { Helmet } from "react-helmet-async";
import { Estates } from "../Componets/Estates/Estates";
import { Slider } from "../Componets/Slider/Slider";
import { GetInTouch } from "./../Componets/GetInTouch/GetInTouch";
import { FAQ } from "./../Componets/FAQ/FAQ";

export const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Elegance | Home</title>
      </Helmet>
      <Slider></Slider>
      <Estates />
      <FAQ />

      <GetInTouch />
    </div>
  );
};
