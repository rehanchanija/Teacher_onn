import React, { forwardRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const AppSlider = forwardRef(({ children, settings }, ref) => {
  return (
    <div className="relative">
      <Slider ref={ref} {...settings}>
        {children}
      </Slider>
    </div>
  );
});

export default AppSlider;
