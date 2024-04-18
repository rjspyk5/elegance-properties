import { ContactForm } from "./ContactForm";
import { SectionHeadings } from "../../SharedComponets/SectionHeadings";
import { Maps } from "../Maps/Maps";
export const GetInTouch = () => {
  return (
    <>
      <div className="rounded-xl drop-shadow-xl backdrop-blur-md p-7 bg-[#ffffff09] ">
        <div>
          <SectionHeadings
            heading="Contact With Us"
            subheading="Contact us today to schedule a viewing or inquire about our luxury properties. Our team of experts is ready to assist you in finding your dream home or investment opportunity."
          />
        </div>

        <div className=" flex flex-col my-12 text-center ">
          <h5 className="font-bold text-lg">Office Adress</h5>
          <p>187,Malibag,Dhaka</p>
          <p>Phone: 01684883865</p>
          <p>Email: elegance.properties@gmail.com</p>{" "}
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 text-white
"
        >
          <div className="relative z-10">
            <Maps />
          </div>

          <div className=" flex justify-center items-center rounded-lg ">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};
