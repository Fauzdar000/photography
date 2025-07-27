import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./CarouselHome.css"; // custom styles

import clouds from "../assets/clouds.jpg";
import flower from "../assets/IMG_20250526_170230.jpg"
import pinkflower from "../assets/pinkflowers.jpg"


const photos = [
  {
    url: clouds,
    title: "Cloudy Peaks",
    desc: "Soft clouds drifting above serene mountain tops — a moment of peaceful solitude.",
  },
  {
    url: flower,
    title: "Golden Bloom",
    desc: "A vibrant yellow flower basking in the sunlight, symbolizing growth and renewal.",
  },
  {
    url: pinkflower,
    title: "Pink Elegance",
    desc: "Delicate pink petals captured at full bloom, representing beauty in simplicity.",
  },
];


export default function CarouselHome() {
  return (
    <div className="carousel-container">
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={true}
        interval={5000}
        
      >
        {photos.map((photo, index) => (
          <div key={index} className="slide">
            <img src={photo.url} alt={photo.title} className="carousel-img" />
            <div className="legend custom-legend">
              <h3>{photo.title}</h3>
              <p>{photo.desc}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
