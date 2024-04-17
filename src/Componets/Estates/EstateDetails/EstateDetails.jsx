import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { IoLocation } from "react-icons/io5";

export const EstateDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useLoaderData();
  const estate = data.find((el) => el.id === parseInt(id));
  return (
    <div className="  mx-auto lg:w-[80%] mt-5 ">
      <Helmet>
        <title>Elegance | EstateDetails</title>
      </Helmet>
      <figure>
        <img
          className="rounded-lg w-full max-h-[500px]"
          src={estate.image}
          alt="car!"
        />
      </figure>
      <div className="space-y-3 mt-5">
        <span className="px-3 rounded-xl py-1 bg-[#0bf7892c]">
          {estate.status}
        </span>

        <h1 className="font-bold text-4xl">{estate.estate_title}</h1>
        <p> {estate.segment_name}</p>
        <p className="flex gap-2 text-[#ffffff77] font-light items-center">
          <IoLocation /> {estate.location}
        </p>
        <p className="font-bold text-lg">
          Description:{" "}
          <span className="font-normal ">{estate.description}</span>
        </p>
        <div className="flex gap-2 items-center flex-grow">
          <p className="font-bold ">Facilites:</p>
          <div className="flex flex-wrap gap-2">
            {estate.facilities.map((el, index) => (
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
        <p className="space-x-2 my-2 font-bold">
          Area : <span className="font-normal">{estate.area}</span>
        </p>
        <p className="font-bold text-2xl">Price : {estate.price}</p>
        <button onClick={() => navigate(-1)} className="btn ">
          Go back
        </button>
      </div>
    </div>
  );
};
