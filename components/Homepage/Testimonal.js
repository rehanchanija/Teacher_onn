
import Link from "next/link";
import TestimonialsCard from "../Cards/TestimonialsCard";
import AppSlider from "../AppSlider";
import { useRef } from "react";
const Testimonals = () => {
  const sliderRef = useRef(null);

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const combos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sliderSettings = {
    // dots: true,
    infinite: true,
    speed:500,
    slidesToShow: 3 ,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
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
    <div className="space-y-8">
      <div className="flex  items-center justify-between space-y-4">

           <div className=" md:w-[729Px]  mt-8 ">
        <Link href="" className="text-[#1BADFF] text-[18px]">
          ~ TESTIMONIALS ~
        </Link>
        <h1 className="text-[3.1rem] pb-3 leading-[63.1px]  font-extrabold  text-[#0F283C]">
        Trusted by Thousand of<span className="text-[#146DB2]"> Students and Parents </span>
        </h1>
        <p className="text-[#667681] pb-4 text-[20px]   ">
        Don’t take our word for it. Trust our customers.
        </p>

      </div>
      <div className="flex  space-x-6 mb-4">
        <button
          className="text-[#1268AA] py-3 border-[#1268AA] border px-6 text-[17.36px] font-bold   rounded-md transform transition-transform duration-300 hover:scale-110"
          onClick={prevSlide}
        >
          <span className="px-2 font-bold">&lt;</span>
          Previous
        </button>
        <button
          className="p-2 bg-[#1BADFF] text-white rounded-full transform transition-transform duration-300 hover:scale-110"
          onClick={nextSlide}
        >
          <span>&gt;</span>
          Next
        </button>
      </div>
      </div> 
      <div className="   ">
      <AppSlider  ref={sliderRef} settings={sliderSettings}>
          {combos.map((product, index) => (
            <TestimonialsCard key={index} />
          ))}
        </AppSlider>

      </div>
    </div>
  );
};

export default Testimonals;
