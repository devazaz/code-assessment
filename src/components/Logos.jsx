import React from "react";
import ogilvy from "../assets/ogilvy.svg";
import intys from "../assets/intys.svg";
import linkdin from "../assets/linkdin.svg";
import featuresRightStart from "../assets/featuresRightStar.svg"
import featuresLeftStart from "../assets/featuresLeftStar.svg"

const logos = [ogilvy, intys, linkdin]; // Array of unique logos

const Logos = () => {
  return (
    <div className="mt-[100px] sm:mt-[300px] lg:mt-[500px] w-[90%] mx-auto overflow-hidden">
      {/* Header Text */}
      <div className="text-[#3E4757] text-center text-[14px] mb-[2px]">
        Trusted by the world-leading organizations
      </div>

      {/* Sliding Logos Container */}
      <div className="w-full overflow-hidden mb-[120px] relative">
        <div className="flex space-x-6 animate-scroll">
          {/* Duplicate logos to create an infinite loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 h-20 sm:w-40 sm:h-24 lg:w-48 lg:h-28 mx-4 flex items-center justify-center"
            >
              <img
                src={logo}
                alt={`Trusted Organization Logo ${index + 1}`}
                className="max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Features Button */}
      <button className="border border-[#848EA033] rounded-[20px] px-[25px] py-[10px] text-[14px] text-[#004CD3] flex items-center justify-center w-[110px] mx-auto">
        Features
      </button>

      {/* Main Heading */}
      <div className="text-[24px] sm:text-[44px] text-[#0B1928] font-semibold max-w-[711px] text-center my-[30px] mx-auto relative">
        Streamline your recruitment with our advanced features
        <div><img className="absolute left-[-30%] bottom-[-10px]" src={featuresLeftStart} /></div>
        <div><img className="absolute right-[-30%] top-[-20px]" src={featuresRightStart} /></div>
      </div>
    </div>
  );
};

export default Logos;
