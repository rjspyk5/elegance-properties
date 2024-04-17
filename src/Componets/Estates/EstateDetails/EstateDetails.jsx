import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

export const EstateDetails = () => {
  const { id } = useParams();
  const { data } = useLoaderData();
  const estate = data.find((el) => el.id === parseInt(id));
  return (
    <div className="flex border border-r-second">
      <Helmet>
        <title>Elegance | EstateDetails</title>
      </Helmet>
      <figure>
        <img className="rounded-lg" src={estate.image} alt="car!" />
      </figure>
      <div className="space-y-3 p-2">
        <span className="px-2 rounded-xl py-1 bg-[#0bf7892c]">
          Status: {estate.status}
        </span>
        <h1 className="font-bold text-3xl">{estate.estate_title}</h1>
        <p>Location: {estate.description}</p>
        <p>Description: {estate.description}</p>
        <p>Type: {estate.segment_name}</p>

        <p>Area: {estate.area}</p>
        <p>Price: {estate.price}</p>
        <p>Facilites: {estate.facilities}</p>
        <hr />
      </div>
    </div>
  );
};
