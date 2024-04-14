import React from "react";

export const SectionHeadings = ({ heading, subheading }) => {
  return (
    <div className="space-y-3 my-5">
      <h1 className="text-center text-2xl md:text-4xl font-bold">{heading}</h1>
      <p className="text-center text-[#ffffff77] font-light w-4/5 mx-auto">
        {subheading}
      </p>
    </div>
  );
};
