import { useNavigate } from "react-router-dom";
import { IoLocation } from "react-icons/io5";
import "animate.css";
import PropTypes from "prop-types";
import { setData } from "../../../assets/Localstorage";
import { useContext } from "react";
import { AuthContext } from "./../../../Provider/Provider";
import Swal from "sweetalert2";
export const EstateCard = ({
  estate: { id, image, estate_title, price, facilities, location, area },
}) => {
  const navigate = useNavigate();
  const handleViewDetails = () => {
    navigate(`/estate/${id}`);
  };
  const { user } = useContext(AuthContext);

  const handleAddToWishList = () => {
    if (user) {
      setData(user.email, id);
      Swal.fire("Added to wishlist successfully");
    } else {
      navigate("/login");
    }
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
        <p className="font-bold md:text-lg lg:text-xl my-4">Price : {price}</p>
      </div>
      <div className=" mb-5 px-7">
        <div className="flex justify-between">
          <button
            onClick={handleAddToWishList}
            className="btn min-h-4 h-10 bg-[#ad7f28]"
          >
            Add to wishlist
          </button>
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

EstateCard.propTypes = {
  estate: PropTypes.object,
};
