import React from "react";
import asset1 from "../assets/image3.svg";
import asset2 from "../assets/images-box.svg";
import asset3 from "../assets/images-bottom-grid.svg";

const Service3 = () => {
  return (
    <div className="relative overflow-hidden pt-[30px] ">
      <div className="flex flex-wrap items-center justify-between max-w-[1280px] w-[85%] mx-auto gap-[20px]">
        {/* Text Content */}
        <div className="w-full lg:w-[50%] max-w-[482px] mx-auto text-center lg:text-left">
          <div className="text-[28px] lg:text-[44px] text-[#0B1928] font-semibold leading-tight">
            Candidate Sourcing & Job Posting
          </div>
          <div className="text-[14px] lg:text-[16px] text-[#3E4757] mt-[10px]">
            Recruito automatically posts your position or actively hunts top
            candidates across multiple platforms. No human intervention needed.
          </div>
        </div>

        {/* Image Content */}
        <div className="w-full lg:w-[46%] relative border px-[20px] sm:px-[30px] pt-[40px] sm:pt-[60px] rounded-[20px] bg-white mx-auto">
          <img
            className="w-full max-w-[640px] mx-auto"
            src={asset1}
            alt="Service Illustration"
          />
          <img
            className="absolute top-[-40px] sm:top-[-60px] right-[-20px] sm:right-[-30px] w-[100px] sm:w-[auto]"
            src={asset2}
            alt="Decorative Box"
          />
        </div>
      </div>

      {/* Bottom Background Asset */}
      <img
        className="absolute bottom-[-80px] sm:bottom-[-120px] right-[-10px] sm:right-[-20px] z-[-1] w-[150px] sm:w-[auto]"
        src={asset3}
        alt="Decorative Background Grid"
      />
    </div>
  );
};

export default Service3;
