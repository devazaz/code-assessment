import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import "swiper/css";
import "swiper/css/pagination";

const MySwiper = () => {
  const swiperRef = useRef(null); // Reference for Swiper instance

  const handleCardClick = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideToLoop(index); // Navigate to the clicked slide
    }
  };

  const slides = [
    {
      image: person1,
      name: "Alex Martin",
      position: "Company, HR",
      feedback:
        "Recruito has transformed our hiring process! We save countless hours each week. The quality of candidates has significantly improved since we started using Recruito.",
    },
    {
      image: person2,
      name: "Jane Doe",
      position: "Startup Founder",
      feedback:
        "Using Recruito AI has streamlined our recruitment process. It's a game-changer for hiring talented individuals quickly.",
    },
    {
      image: person1,
      name: "John Smith",
      position: "Recruitment Specialist",
      feedback:
        "Recruito AI's platform is user-friendly and effective. It's now an essential part of our recruitment strategy.",
    },
    {
      image: person2,
      name: "Emily White",
      position: "HR Manager",
      feedback:
        "The automation features in Recruito AI have saved us so much time. Highly recommended for any HR team.",
    },
  ];

  return (
    <div className="w-full relative">
      {/* Header Section */}
      <button className="border border-[#848EA033] mt-[100px] rounded-[20px] px-[20px] py-[10px] text-[14px] text-[#004CD3] flex items-center justify-center w-[100px] mx-auto">
        Testimonials
      </button>
      <div className="text-[24px] sm:text-[44px] text-[#0B1928] font-semibold max-w-[760px] text-center mx-auto mb-[30px] sm:mb-[50px]">
        Don’t just take our word for it—see what our clients say about Recruito
        AI.
      </div>

      {/* Swiper Carousel */}
      <Swiper
        ref={swiperRef} // Attach Swiper instance to ref
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        breakpoints={{
          1920: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1028: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
        className="swiper-container"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="border border-[#848EA033] p-[20px] rounded-[20px] min-h-[210px] bg-white cursor-pointer"
              onClick={() => handleCardClick(index)} // Navigate to slide on click
            >
              <div className="flex items-center">
                <img
                  className="w-[50px] h-[50px] rounded-full mr-[20px]"
                  src={slide.image}
                  alt={`Testimonial ${index + 1}`}
                />
                <div>
                  <div className="text-[#0B1928] mb-[8px]">{slide.name}</div>
                  <div className="text-[#848EA0] text-sm">{slide.position}</div>
                </div>
              </div>
              <div className="bg-[#E6E8EC33] p-[20px] rounded-[20px] mt-[20px] text-sm text-[#0B1928]">
                {slide.feedback}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Dots */}
      <div className="swiper-pagination mt-[40px]" />
    </div>
  );
};

export default MySwiper;
