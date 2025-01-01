import React from "react";
import icon from "../assets/header-icon.svg";
import footer1 from "../assets/footer1.svg";
import footer2 from "../assets/footer2.svg";
import footer3 from "../assets/footer3.svg";
import footer4 from "../assets/footer4.svg";
import footer5 from "../assets/footer5.svg";

const Footer = () => {
  return (
    <div className="bg-[#848EA00D] mt-[100px] py-[40px]">
      <div className="max-w-[1180px] w-[90%] mx-auto flex flex-wrap items-start justify-between gap-[20px]">
        {/* Left Section */}
        <div className="flex flex-col items-start">
          <div className="w-[120px] sm:w-[156px] mt-[20px]">
            <img src={icon} alt="Footer Logo" />
          </div>
          <div className="my-[20px] sm:my-[40px]">
            <img src={footer5} alt="Footer Illustration" />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center sm:items-end">
          <div className="flex items-center justify-between w-[120px] sm:w-[160px] mt-[20px] sm:mt-[30px] gap-[10px]">
            <img src={footer1} alt="Social Icon 1" />
            <img src={footer2} alt="Social Icon 2" />
            <img src={footer3} alt="Social Icon 3" />
            <img src={footer4} alt="Social Icon 4" />
          </div>
          <div className="my-[20px] sm:my-[40px] flex items-center justify-between w-[130px] mx-auto text-sm sm:text-base text-[#3E4757]">
            <div>Terms</div>
            <div>Privacy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
