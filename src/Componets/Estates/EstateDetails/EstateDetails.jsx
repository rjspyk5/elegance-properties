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
      <div>
        <h1>{estate.estate_title}</h1>
        <p>Description: {estate.description}</p>
        <p>Type: {estate.segment_name}</p>
        <p>Status: {estate.status}</p>
        <p>Location: {estate.description}</p>
        <p>Area: {estate.area}</p>
        <p>Price: {estate.price}</p>
        <p>Facilites: {estate.facilities}</p>
        <hr />
      </div>
    </div>
  );
};
