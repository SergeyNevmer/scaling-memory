import React from "react";
import PropTypes from "prop-types";

export const Card = ({ title, text, img }) => {
  return (
    <div
      className={`w-[576px] h-[600px] ${img} bg-cover mr-2 flex flex-col justify-end`}
    >
      <div className="w-[576px]">
        <h2 className="text-sm leading-5 tracking-[2px] uppercase text-white ml-[30px] mb-2">
          {title}
        </h2>
        <p className="text-sm leading-5 text-[#C0C0C0] w-[501px] ml-[30px] mb-3">
          {text}
        </p>
        <div className="w-[138px] h-[42px] bg-white flex items-center justify-around rounded-lg ml-[30px] mb-3">
          <div className="w-8 h-8 bg-black rounded-full"></div>
          <button className="text-[15px] leading-5 tracking-[0.4px]">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
