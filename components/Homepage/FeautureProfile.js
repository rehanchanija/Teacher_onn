"use client";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Image from "next/image";
import AppSlider from "../AppSlider";
import FeauturedCard from "../Cards/FeauturedCard";
import { useQuery } from "@tanstack/react-query";
import { getFeaturedTutor } from "@/api/tutor.api";

const FeautureProfile = () => {


  const { data } = useQuery({
    querykey: ["GET_FEATURED_TUTOR"],
    queryFn: getFeaturedTutor,
  })

  console.log(data)
  const sliderSettings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [

      {
        breakpoint: 1024, // For screens less than 1024px
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 768, // For screens less than 768px
        settings: {
          slidesToShow: 3,
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
    <div className="bg-[#146DB2]">
      <div className=" space-y-4  max-w-6xl mx-auto  ">
        <div className="flex items-center   px-2 pt-6">
          <div className="pt-5 hidden md:block">
            <Image
              src="/image/home/live1.png"
              width={191.37}
              height={136.59}
              alt="a"
            />
          </div>
          <div className=" pb-6    text-center  ">
            <h1 className="lg:text-[50px] text-[26px] pb-4 font-semibold text-white ">
              Featured Profiles
            </h1>
            <p className="text-white px-2 md:text-[20px] text-lg   ">
              Established with a vision to provide high-quality and accessible
              education,  our platform is designed to cater to the diverse learning
              needs of students.
            </p>
          </div>
          <div className="pt-5 hidden md:block">
            <Image
              src="/image/home/live2.png"
              width={191.37}
              height={136.59}
              alt="a"
            />
          </div>
        </div>
        <div className=" pb-12 px-8  ">
          <AppSlider settings={sliderSettings}>
            {data?.map?.((tutor, index) => (
              <FeauturedCard key={index} tutor={tutor} />
            ))}
          </AppSlider>
        </div>
      </div>
    </div>
  );
};

export default FeautureProfile;
