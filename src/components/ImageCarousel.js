import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Image} from "@chakra-ui/react"

import babyskipper from '../images/babyskipper.jpg'

function ImageCarousel() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
            <Image 
                src={babyskipper}
                alt="Vincent Mai"        
            />
        </div>
        <div>
            <Image 
                src={babyskipper}
                alt="Vincent Mai"        
            />
        </div>
        <div>
            <Image 
                src={babyskipper}
                alt="Vincent Mai"        
            />
        </div>
      </Slider>
    </div>
  );
}

export default ImageCarousel;
