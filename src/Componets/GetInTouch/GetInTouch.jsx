import React from "react";
import { ContactForm } from "./ContactForm";

export const GetInTouch = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2  py-5 my-5 gap-2 md:gap-5 text-white
"
    >
      <div className="  *:p-5 *:rounded-lg grid grid-cols-2 gap-2 md:gap-5">
        <div className="col-span-2 shadow-xl drop-shadow-2xl flex items-center justify-center ">
          <p>Regional Office</p>
        </div>
        <div className="flex items-center shadow-xl drop-shadow-2xl justify-center">
          f
        </div>
        <div className="flex items-center shadow-xl drop-shadow-2xl justify-center">
          f
        </div>
      </div>
      <div className=" p-5 flex justify-center items-center rounded-lg shadow-xl drop-shadow-2xl ">
        <ContactForm />
      </div>
    </div>
  );
};
