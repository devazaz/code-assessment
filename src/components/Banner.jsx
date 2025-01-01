import React from "react";
import buttonStar from "../assets/start.svg";
import bannerImg from "../assets/banner.svg";
import bannerStar from "../assets/bannerStart.svg";

const Banner = () => {
  return (
    <div className="pt-[106px] pb-[300px] relative">
      <div className="text-[32px] sm:text-[56px] leading-[40px] sm:leading-[70px] max-w-[90%] sm:max-w-[650px] mx-auto text-center font-semibold">
        Revolutionize Your Hiring Process with{" "}
        <span className="bg-gradient-to-r from-[#1AD7BE] to-[#1F67E7] inline-block text-transparent bg-clip-text relative">
          Recruito AI
          <img
            className="w-[20px] sm:w-[25px] top-[8px] sm:top-[12px] absolute right-[-20px] sm:right-[-30px]"
            src={bannerStar}
            alt="Star"
          />
        </span>
      </div>
      <div className="text-[14px] sm:text-[16px] max-w-[90%] sm:max-w-[430px] mx-auto text-center text-[#3E4757] my-[20px]">
        Your fully automated hiring assistant that sources, screens, and
        interviews candidates effortlessly
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-[10px] sm:gap-0 sm:justify-between max-w-[90%] sm:max-w-[400px] mx-auto">
        <button className="text-[14px] font-semibold border border-[#848EA080] py-[10px] px-[20px] sm:px-[25px] rounded-[25px] text-[#0B1928] w-full sm:w-auto">
          Start Your Free Trial
        </button>
        <button className="bg-[#1AD7BE20] rounded-[50px] px-[4px] py-[4px] w-full sm:w-auto">
          <div className="px-[2px] py-[2px] bg-gradient-to-r from-[#1AD7BE70] to-[#1F67E770] rounded-[50px] text-[14px]">
            <div className="text-[14px] font-semibold py-[10px] px-[20px] sm:px-[25px] rounded-[25px] bg-gradient-to-r from-[#1AD7BE] to-[#1F67E7] text-white flex items-center justify-center sm:justify-between">
              <div className="mr-[10px] hidden sm:block">
                <img src={buttonStar} alt="Star" />
              </div>
              <div>Request A Demo</div>
            </div>
          </div>
        </button>
      </div>
      <div className="w-[98%] absolute mx-auto left-[1%] top-[480px] flex justify-center">
        <img src={bannerImg} alt="Banner" className="w-full  max-w-[1400px]" />
      </div>
    </div>
  );
};

export default Banner;
