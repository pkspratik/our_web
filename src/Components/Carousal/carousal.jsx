// Install packages:
// npm install react-slick slick-carousel

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function MyCarousel({ items }) {
  const settings = {
    dots: true,               // show navigation dots
    infinite: true,           // loop slides
    speed: 1000,              // fade transition duration
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,           // enable auto sliding
    autoplaySpeed: 5000,      // 5 seconds between slides
    fade: true,               // 👈 smooth fade transition
    pauseOnHover: true,       // pause when hovering
    arrows: true              // show navigation arrows         
  };

  return (
    <Slider {...settings}>
      {items.map((item, i) => (
        <div key={i} className="text-center">
          <img 
            src={item.imageUrl} 
            alt={item.title} 
            style={{ width: "100%", borderRadius: "10px" }} 
          />
          {/* <h3>{item.title}</h3> */}
        </div>
      ))}
    </Slider>
  );
}
