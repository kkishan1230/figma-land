import React from "react";
import mac from "../images/mac.png";

const Organise = () => {
  return (
    <div className="max-w-[1243px] mx-auto flex mt-[200px] md:mt-[100px] lg:max-w-[680px] lg:flex-col-reverse lg:items-center xl2:max-w-[1100px] sm:flex-col">
      <div className="w-[50%] lg:w-[80%] lg:text-center ">
        <h2 className="max-w-[335px] mb-[27px] md:text-[36px] md:leading-[36px] md:mt-[20px] lg:mx-auto lg:mt-[70px] lg:mb-[10px] sm:mb-[27px] sm:max-w-[210px]">
          Fastest way to organize
        </h2>
        <p className="tag-line max-w-[532px] md:text-[24px] md:leading-[30px] sm:max-w-[265px] sm:mx-auto">
          Most calendars are designed for teams.
          <span className="sm:hidden">Slate is designed for freelancers</span>
        </p>
        <button className="btn w-[236px] h-[60px] rounded-[35px] mt-[70px] md:w-[150px] md:h-[40px] lg:mt-[40px] sm:mt-[69px]">
          <h3 className="text-[#ffffff] md:text-[16px]">Try For Free</h3>
        </button>
      </div>
      <div className="w-[50%] md:max-w-[50%] lg:w-[80%] sm:max-w-[379px] sm:mt-[66px]">
        <img src={mac} alt="" />
      </div>
    </div>
  );
};

export default Organise;
