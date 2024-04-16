import { Estates } from "../Componets/Estates/Estates";
import { Slider } from "../Componets/Slider/Slider";
import { GetInTouch } from "./../Componets/GetInTouch/GetInTouch";

export const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Estates />
      <GetInTouch />
    </div>
  );
};
