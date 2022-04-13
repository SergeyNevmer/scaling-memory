import React from "react";
import PropTypes from "prop-types";

export const Card = ({ img }) => {
  return <div className={`w-[576px] h-[600px] bg-${img} bg-cover mr-2`}></div>;
};
