import Link from "next/link";
import { useRef } from "react";
import AppSlider from "../AppSlider";
import TestimonialsCard from "../Cards/TestimonialsCard";

const Testimonals = () => {
  const sliderRef = useRef(null);

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const combos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 450, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="space-y-8  max-w-6xl mx-auto md:mt-0 md:mb-0 mb-12 px-4 md:px-12 ">
      <div className="md:flex items-center justify-between space-y-4">
        <div className="xl:w-[729px] md:w-[512px] mt-8 text-center md:text-left ">
          <Link href="" className="text-[#1BADFF] text-[18px]">
            ~ TESTIMONIALS ~
          </Link>
          <h1 className="xl:text-[50px] text-[30px] pb-3 xl:leading-[63.1px] font-extrabold text-[#0F283C]">
            Trusted by Thousands of <span className="text-[#146DB2]">Students and Parents</span>
          </h1>
          <p className="text-[#667681] pb-4 text-[20px]">
            Don’t take our word for it. Trust our customers.
          </p>
        </div>
        <div className="flex justify-center  space-x-6 mb-4">
          <button
            className="text-[#1268AA] lg:py-0 py-3 border-[#1268AA] border px-6 lg:text-[17.36px] font-bold rounded-md transform transition-transform duration-300 hover:scale-110"
            onClick={prevSlide}
          >
            <span className="xl:px-2 font-bold">&lt;</span> Previous
          </button>
          <button
            className="bg-[#1BADFF] py-3 text-white px-6 text-[17.36px] font-bold rounded-md transform transition-transform duration-300 hover:scale-110"
            onClick={nextSlide}
          >
            Next <span className="xl:px-2 font-bold">&gt;</span>
          </button>
        </div>
      </div>
      <div>
        <AppSlider ref={sliderRef} settings={sliderSettings}>
          {combos.map((_, index) => (
            <TestimonialsCard key={index} />
          ))}
        </AppSlider>
      </div>
    </div>
  );
};

export default Testimonals;
