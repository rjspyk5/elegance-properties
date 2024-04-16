import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

export const EstateDetails = () => {
  const { id } = useParams();
  const { data } = useLoaderData();
  const estate = data.find((el) => el.id === parseInt(id));
  return (
    <div className="card border border-r-second">
      <figure>
        <img src={estate.image} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Life hack</h2>
        <p>How to park your car at your garage?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Learn now!</button>
        </div>
      </div>
    </div>
  );
};
