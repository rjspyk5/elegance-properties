import PropTypes from "prop-types";

export const SectionHeadings = ({ heading, subheading }) => {
  return (
    <div className="space-y-4">
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
