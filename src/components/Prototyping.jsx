import React from "react";
import proto_img from "../images/letter.png";

const Prototyping = () => {
  return (
    <div className="max-w-[1440px] mx-auto mt-[200px] lg:max-w-[680px]  xl:px-[50px] xl2:max-w-[1100px] xl2:px-0">
      <div className="flex items-center justify-between lg:flex-col lg:gap-10">
        <div className="w-[50%] lg:w-[80%] xl2:pr-[20px]">
          <img src={proto_img} alt="" />
        </div>
        <div className="w-[50%] pl-[113px] lg:w-[80%] xl2:pl-[40px]">
          <h3>At your fingertips</h3>
          <h2 className="mt-4 w-[324px] mb-9">Lightning fast prototyping </h2>
          <div className="pl-2">
            <h3>Subscribe to our Newsletter</h3>
            <p className="mb-[36px]">Available exclusivery on Figmaland</p>
            <div className="flex gap-3 items-center">
              <input
                type="text"
                placeholder="Your Email"
                className="w-[273px] h-[54px] py-[19px] px-[39px] rounded-[39px] border-solid border-[1px] border-[#E8E8E8] font-Roboto placeholder:text-[#18171D] bg-[#F4F4F4] "
              />
              <button className="btn w-[178px] h-[58px] rounded-[35px] ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prototyping;
