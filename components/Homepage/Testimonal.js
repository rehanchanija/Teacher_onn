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
    <div className="md:mt-24 mt-20 mb-24 md:px-12">

      <div className="space-y-8   max-w-6xl mx-auto    ">
        <div className="md:flex items-center justify-between space-y-4">
          <div className="xl:w-[729px] md:w-[512px]  text-center px-4 md:text-left ">
            <Link href="" className="text-[#1BADFF]  text-[18px]">
              ~ TESTIMONIALS ~
            </Link>
            <h1 className="xl:text-[50px] md:text-[40px] pt-2 sm:leading-[50px] text-[30px] pb-3 xl:leading-[60px] font-bold text-[#0F283C]">
              Trusted by Thousands of <span className="text-[#146DB2]">Students and Parents</span>
            </h1>
            <p className="text-[#667681] pb-4 text-[16px] md:text-[20px]">
              Don’t take our word for it. Trust our customers.
            </p>
          </div>
          <div className="flex justify-center  space-x-6 mb-4">
            <button
              className="text-[#1268AA] py- border-[#1268AA] border-[1.5px] px-4  md:text-[17.36px] font-bold rounded-md transform transition-transform duration-300 hover:scale-110"
              onClick={prevSlide}
            >
              <span className="md:px-3 px-1 font-bold">&lt;</span> Previous
            </button>
            <button
              className="bg-[#1BADFF] py-4 text-white px-4 md:px-6 md:text-[17.36px] font-bold rounded-md transform transition-transform duration-300 hover:scale-110"
              onClick={nextSlide}
            >
              Next <span className="md:px-3 px-1 font-bold">&gt;</span>
            </button>
          </div>
        </div>
        <div >
          <AppSlider ref={sliderRef} settings={sliderSettings}>
            {combos.map((_, index) => (
              <TestimonialsCard key={index} />
            ))}
          </AppSlider>
        </div>
      </div>
    </div>
  );
};

export default Testimonals;
