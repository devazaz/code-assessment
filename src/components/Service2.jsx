import React from "react";
import asset1 from "../assets/image2.svg";
import asset2 from "../assets/images-box.svg";
import asset3 from "../assets/images-bottom-grid.svg";

const Service2 = () => {
  return (
    <div className="relative overflow-hidden pt-[30px] ">
      <div className="flex flex-wrap lg:flex-row-reverse items-center justify-between max-w-[1280px] w-[85%] mx-auto gap-[20px]">
        {/* Text Content */}
        <div className="w-full lg:w-[50%] max-w-[482px] mx-auto text-center lg:text-left">
          <div className="text-[28px] lg:text-[44px] text-[#0B1928] font-semibold leading-tight">
            Automated Resume Screening & Filtering
          </div>
          <div className="text-[14px] lg:text-[16px] text-[#3E4757] mt-[10px]">
            Our AI instantly sorts and prioritizes resumes, highlighting only
            the strongest matches and discarding unqualified applicants.
          </div>
        </div>

        {/* Image Content */}
        <div className="w-full lg:w-[46%] relative border rounded-[20px] bg-white mx-auto">
          <img
            className="w-full max-w-[640px] mx-auto"
            src={asset1}
            alt="Service Illustration"
          />
        </div>
      </div>

      {/* Bottom Background Asset */}
      <img
        className="absolute bottom-[-80px] sm:bottom-[-120px] left-[-10px] sm:left-[-20px] z-[-1] w-[150px] sm:w-[auto]"
        src={asset3}
        alt="Decorative Background Grid"
      />
    </div>
  );
};

export default Service2;
