import React from "react";
import PropTypes from "prop-types";

export const Icon = ({ text, img }) => {
  return (
    <div className="flex items-center">
      <img src={img} alt="clock" />
      <p className="text-white text-xs leading-3 ml-[6px]">{text}</p>
    </div>
  );
};

Icon.propTypes = {
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
