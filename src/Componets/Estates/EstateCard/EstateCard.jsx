import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const EstateCard = ({
  estate: { id, image, estate_title, price, facilities },
}) => {
  const navigate = useNavigate();
  const handleViewDetails = () => {
    console.log("clicked");
    navigate(`/estate/${id}`);
  };
  return (
    <div className="card backdrop-blur-lg bg-[#ffffff10]">
      <figure>
        <img src={image} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{estate_title}</h2>
        <p>How to park your car at your garage?</p>
        <div className="card-actions justify-end">
          <button onClick={handleViewDetails} className="btn btn-primary">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
