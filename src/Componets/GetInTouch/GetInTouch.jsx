import React from "react";
import { ContactForm } from "./ContactForm";

export const GetInTouch = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2  py-5 my-5 gap-2 md:gap-5 text-white
"
    >
      <div className="shadow drop-shadow-xl shadow-[#1f1e1e58]  *:p-5 *:rounded-lg grid grid-cols-2 gap-2 md:gap-5">
        <div className="col-span-2 bg-base-100 flex items-center justify-center ">
          <p>Regional Office</p>
        </div>
        <div className="flex items-center bg-base-100 justify-center">f</div>
        <div className="flex items-center bg-base-100 justify-center">f</div>
      </div>
      <div className="shadow drop-shadow-xl p-5 flex justify-center items-center rounded-lg shadow-[#1f1e1e58] bg-base-100 ">
        <ContactForm />
      </div>
    </div>
  );
};
