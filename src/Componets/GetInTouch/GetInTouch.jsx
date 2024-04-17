import React from "react";
import { ContactForm } from "./ContactForm";
import { SectionHeadings } from "../../SharedComponets/SectionHeadings";
import { Maps } from "../Maps/Maps";

export const GetInTouch = () => {
  return (
    <>
      <div className="rounded-xl drop-shadow-xl backdrop-blur-md p-5 bg-[#ffffff09] my-5">
        <SectionHeadings
          heading="Get In Touch"
          subheading="Contact us today to schedule a viewing or inquire about our luxury properties. Our team of experts is ready to assist you in finding your dream home or investment opportunity."
        />
        <div
          className="grid grid-cols-1 md:grid-cols-2  mt-8 gap-2 md:gap-5 text-white
"
        >
          <div className=" flex flex-col text-center ">
            <p>Office:187,Malibag,Dhaka</p>
            <p>Phone: 01684883865</p>
            <p>Email: elegance.properties@gmail.com</p>
            <div className="relative z-10 mt-5">
              <Maps />
            </div>
          </div>
          <div className=" p-5 flex justify-center items-center rounded-lg ">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};
