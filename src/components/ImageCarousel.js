import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Image} from "@chakra-ui/react"

import algonquin from '../images/algonquin.jpg'
import car from '../images/3carbg.jpg'

function ImageCarousel() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
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
                src={algonquin}
                alt="Vincent Mai" 
            />
        </div>
        <div>
            <Image 
                src={car}
                alt="Vincent Mai"    
            />
        </div>
      </Slider>
    </div>
  );
}

export default ImageCarousel;
