import { IoLocation } from "react-icons/io5";
export const Iteam = ({ estate }) => {
  return (
    <div>
      <div className="flex">
        <img className="w-56" src={estate.image} alt="" />
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
        </div>
      </div>
    </div>
  );
};
