import React from "react";
// import PropTypes from "prop-types";

export const Card = ({ img }) => {
  return (
    <div
      className={`w-[576px] h-[600px] bg-card01 bg-cover mr-2 flex flex-col justify-end`}
    >
      <div className="w-[576px] h-[142px]">
        <h2 className="text-sm leading-5 tracking-[2px] uppercase text-white ml-[30px] mb-2">
          Product Photography
        </h2>
        <p className="text-sm leading-5 text-[#C0C0C0] w-[501px] h-[50px] ml-[30px] mb-1">
          Cras commodo consequat orci, in convallis risus egestas non. Nulla
          efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac,
          cursus quam.
        </p>
        <div className="w-[130px] h-[42px] bg-white flex items-center justify-around rounded-lg ml-[30px]">
          <div className="w-8 h-8 bg-black rounded-full"></div>
          <button className="text-[15px] leading-5 tracking-[0.4px]">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};
