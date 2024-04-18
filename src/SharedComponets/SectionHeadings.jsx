import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export const SectionHeadings = ({ heading, subheading }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      data-aos-easing="linear"
      data-aos-duration="1000"
      data-aos="zoom-out"
      className="space-y-3 my-5 "
    >
      <h1 className="text-center text-2xl md:text-4xl font-bold">{heading}</h1>
      <p className="text-center text-[#ffffff77] font-light w-4/5 mx-auto">
        {subheading}
      </p>
    </div>
  );
};
SectionHeadings.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
};
