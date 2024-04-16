import React from "react";

export const EstateCard = ({
  estate: { id, image, estate_title, price, facilities },
}) => {
  return (
    <div className="card backdrop-blur-lg bg-[#ffffff10]">
      <figure>
        <img src={image} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{estate_title}</h2>
        <p>How to park your car at your garage?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Learn now!</button>
        </div>
      </div>
    </div>
  );
};
