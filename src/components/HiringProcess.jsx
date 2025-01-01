import React from "react";
import buttonStar from "../assets/start.svg";
import HiringProcess1 from "../assets/hiringProcess1.svg";
import HiringProcess2 from "../assets/hiringProcess2.svg";
import HiringProcess3 from "../assets/hiringProcess.svg";

const HiringProcess = () => {
  return (
    <div className="relative overflow-hidden pt-[40px] pb-[40px]">
      {/* Left Decorative Image */}
      <img
        className="absolute left-0 top-[20px] w-[150px] sm:w-[auto]"
        src={HiringProcess1}
        alt="Decorative Left"
      />
      
      {/* Right Decorative Image */}
      <img
        className="absolute right-0 top-[20px] w-[150px] sm:w-[auto]"
        src={HiringProcess2}
        alt="Decorative Right"
      />
      
      {/* Main Illustration */}
      <div className="w-[90px] sm:w-[114px] mx-auto mt-[20px] sm:mt-[40px]">
        <img src={HiringProcess3} alt="Hiring Process Illustration" />
      </div>
      
      {/* Heading */}
      <div className="text-[28px] sm:text-[44px] text-[#0B1928] font-semibold max-w-[90%] sm:max-w-[450px] text-center mx-auto leading-tight">
        Ready to enhance your hiring process?
      </div>
      
      {/* Button */}
      <button className="bg-[#1AD7BE20] rounded-[50px] px-[4px] py-[4px] flex items-center justify-center w-[180px] sm:w-[200px] mx-auto mt-[20px] sm:mt-[30px]">
        <div className="px-[2px] py-[2px] bg-gradient-to-r from-[#1AD7BE70] to-[#1F67E770] rounded-[50px] text-[14px]">
          <div className="text-[12px] sm:text-[14px] font-semibold py-[8px] sm:py-[10px] px-[20px] sm:px-[25px] rounded-[25px] bg-gradient-to-r from-[#1AD7BE] to-[#1F67E7] text-white flex items-center justify-between">
            <div className="mr-[10px]">
              <img src={buttonStar} alt="Star Icon" />
            </div>
            <div>Request A Demo</div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default HiringProcess;
