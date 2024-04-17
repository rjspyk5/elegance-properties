import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { IoLocation } from "react-icons/io5";
import "animate.css";

export const EstateCard = ({
  estate: { id, image, estate_title, price, facilities, location, area },
}) => {
  const navigate = useNavigate();
  const handleViewDetails = () => {
    console.log("clicked");
    navigate(`/estate/${id}`);
  };

  return (
    <div className="card hover:scale-[100.8%]   duration-300  bg-[#ffffff10]">
      <figure>
        <img src={image} className="h-[290px]" alt="car!" />
      </figure>

      <div className="card-body">
        <p className="flex gap-2 text-[#ffffff77] font-light items-center ">
          <IoLocation />
          {location}
        </p>
        <h2 className="card-title">{estate_title}</h2>
        <p className="space-x-2 my-2">
          Area : <span>{area}</span>
        </p>
        <div className="flex gap-2 flex-grow">
          <p>Facilites:</p>
          <div className="flex flex-wrap gap-2">
            {facilities.map((el, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-lg bg-[#19ee6b0a] backdrop-blur-lg"
              >
                {" "}
                {el}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 mb-2 px-7">
        <div className="flex justify-between">
          <p className="font-bold md:text-lg lg:text-xl">Price : {price}</p>
          <button
            onClick={handleViewDetails}
            className="btn min-h-4 h-10 bg-first"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
