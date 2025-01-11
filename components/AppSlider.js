import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const AppSlider = ({ children, settings, nextSlide, prevSlide }) => {
  const sliderRef = useRef(null);

  const handleNextSlide = () => {
    if (nextSlide) {
      nextSlide();
    } else {
      sliderRef.current.slickNext();
    }
  };

  const handlePrevSlide = () => {
    if (prevSlide) {
      prevSlide();
    } else {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className="relative">
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
    </div>
  );
};

export default AppSlider;