import React from "react";
import advantage1 from "../assets/advantage1.svg";
import advantage2 from "../assets/advantage2.svg";
import advantage3 from "../assets/advantage3.svg";
import advantage4 from "../assets/advantage4.svg";
import advantage5 from "../assets/advantage5.svg";

const Advantage = () => {
  return (
    <div className="bg-[#0B1928] pt-[100px] pb-[50px] relative overflow-hidden">
      {/* Decorative Images */}
      <img
        className="absolute left-0 top-[0px] w-[150px] sm:w-[auto]"
        src={advantage1}
        alt="Left Decoration"
      />
      <img
        className="absolute right-0 top-[0px] w-[150px] sm:w-[auto]"
        src={advantage2}
        alt="Right Decoration"
      />

      {/* Benefits Button */}
      <button className="border border-[#848EA033] rounded-[50px] px-[20px] py-[10px] text-[14px] text-[#1BD1C2] flex items-center justify-center w-[120px] sm:w-[110px] mx-auto mb-[30px]">
        Benefits
      </button>

      {/* Title */}
      <div className="text-[28px] sm:text-[44px] text-white text-center max-w-[90%] sm:max-w-[605px] mx-auto leading-snug">
        Unlock the advantages of using Recruito AI for your hiring needs.
      </div>

      {/* Advantage Cards */}
      <div className="flex flex-wrap items-stretch justify-center gap-[20px] max-w-[1100px] mx-auto w-[85%] mt-[30px]">
        {/* Card 1 */}
        <div className="px-[12px] pt-[20px] pb-[30px] border border-[#848EA033] rounded-[8px] bg-[#152232] w-full sm:w-[350px] flex-grow max-w-[350px] min-h-[286px]">
          <div className="max-w-[66px] mx-auto">
            <img
              className="border border-[#848EA033] rounded-[10px] p-[15px]"
              src={advantage3}
              alt="Automate Processes Icon"
            />
          </div>
          <div className="text-[18px] sm:text-[21px] text-white text-center font-medium my-[20px]">
            Automate Processes
          </div>
          <div className="text-[#848EA0] text-center max-w-[90%] mx-auto text-[14px] sm:text-[16px]">
            Let Recruito handle resume screening, scheduling, and interviews so
            you can focus on strategic decisions.
          </div>
        </div>

        {/* Card 2 */}
        <div className="px-[12px] pt-[20px] pb-[30px] border border-[#848EA033] rounded-[8px] bg-[#152232] w-full sm:w-[350px] flex-grow max-w-[350px] min-h-[286px]">
          <div className="max-w-[66px] mx-auto">
            <img
              className="border border-[#848EA033] rounded-[10px] p-[15px]"
              src={advantage4}
              alt="Provide Instant Information Icon"
            />
          </div>
          <div className="text-[18px] sm:text-[21px] text-white text-center font-medium my-[20px]">
            Provide Instant Information
          </div>
          <div className="text-[#848EA0] text-center max-w-[90%] mx-auto text-[14px] sm:text-[16px]">
            Quickly access relevant candidate data, ensuring no talent is
            overlooked in your search.
          </div>
        </div>

        {/* Card 3 */}
        <div className="px-[12px] pt-[20px] pb-[30px] border border-[#848EA033] rounded-[8px] bg-[#152232] w-full sm:w-[350px] flex-grow max-w-[350px] min-h-[286px]">
          <div className="max-w-[66px] mx-auto">
            <img
              className="border border-[#848EA033] rounded-[10px] p-[15px]"
              src={advantage5}
              alt="Make Data-Driven Decisions Icon"
            />
          </div>
          <div className="text-[18px] sm:text-[21px] text-white text-center font-medium my-[20px]">
            Make Data-Driven Decisions
          </div>
          <div className="text-[#848EA0] text-center max-w-[90%] mx-auto text-[14px] sm:text-[16px]">
            Utilize analytics to rank candidates based on key metrics, providing
            unbiased recommendations for your hiring team.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
