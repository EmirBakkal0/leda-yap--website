"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import CarouselSlide from "./CarouselSlide";

export default function Carousel({ slideAmount, src }) {
  const slides = Array.from(Array(slideAmount).keys());
  return (
    <Splide
      options={{
        rewind: true,
        autoplay: true,
        gap: "1rem",
        lazyLoad: "nearby",
        type: "loop",
      }}
    >
      {slides.map((index) => (
        <CarouselSlide
          key={index}
          img={`/ustyapi/${src}/${index}.jpg`}
          sm="95"
          xs="85"
        />
      ))}
    </Splide>
  );
}
