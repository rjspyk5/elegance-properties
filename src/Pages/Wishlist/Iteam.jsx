import { IoLocation } from "react-icons/io5";
import PropTypes from "prop-types";
export const Iteam = ({ estate }) => {
  return (
    <div className="bg-[#ffffff14] rounded-xl p-4">
      <div className="flex flex-col lg:flex-row gap-5 ">
        <figure>
          <img
            className="w-full lg:w-96 rounded-lg"
            src={estate.image}
            alt=""
          />{" "}
        </figure>
        <div>
          <h1 className="font-bold text-4xl">{estate.estate_title}</h1>
          <p> {estate.segment_name}</p>
          <p className="flex gap-2 text-[#ffffff77] font-light items-center">
            <IoLocation /> {estate.location}
          </p>
          <p className="font-bold text-lg">
            Description:{" "}
            <span className="font-normal ">{estate.description}</span>
          </p>
          <p className="font-bold text-2xl">Price : {estate.price}</p>
        </div>
      </div>
    </div>
  );
};
Iteam.propTypes = {
  estate: PropTypes.object,
};
