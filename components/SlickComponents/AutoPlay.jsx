"use client";

import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";

const NextArrow = ({ onClick }) => {
  return (
    <button className="text-accent" onClick={onClick}>
      <IoIosArrowForward />
    </button>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <button className="text-accent" onClick={onClick}>
      <IoIosArrowBack />
    </button>
  );
};

const AutoPlay = ({ children, className, rtl = false }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    rtl: rtl,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className={className}>
      {children}
    </Slider>
  );
};

export default AutoPlay;
