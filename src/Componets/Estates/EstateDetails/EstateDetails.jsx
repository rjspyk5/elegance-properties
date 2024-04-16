import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

export const EstateDetails = () => {
  const { id } = useParams();
  const { data } = useLoaderData();
  const estate = data.find((el) => el.id === parseInt(id));
  return <div>EstateDetails</div>;
};
