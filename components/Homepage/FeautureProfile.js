"use client";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import Image from "next/image";
import AppSlider from "../AppSlider";
import FeauturedCard from "../Cards/FeauturedCard";

const FeautureProfile = () => {
  const combos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const sliderSettings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024, // For screens less than 1024px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 768, // For screens less than 768px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 450, // For screens less than 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="bg-[#146DB2]    ">
      <div className="flex items-center md:px-12 pt-6">
        <div className="pt-5">
          <Image
            src="/image/home/live1.png"
            width={191.37}
            height={136.59}
            alt="a"
          />
        </div>
        <div className=" pb-6 md:w-[46.3rem]    text-center mx-auto ">
          <h1 className="md:text-[50px] text-[30px] pb-4 font-semibold text-white ">
            Featured Profiles
          </h1>
          <p className="text-white px-2 md:text-[20px]    ">
            Established with a vision to provide high-quality and accessible
            education, our platform is designed to cater to the diverse learning
            needs of students.
          </p>
        </div>
        <div className="pt-5">
          <Image
            src="/image/home/live2.png"
            width={191.37}
            height={136.59}
            alt="a"
          />
        </div>
      </div>
      <div className="  px-12 pt-4 rounded-xl pb-4">
        <AppSlider settings={sliderSettings}>
          {combos.map((product, index) => (
            <FeauturedCard key={index} />
          ))}
        </AppSlider>
      </div>
    </div>
  );
};

export default FeautureProfile;
