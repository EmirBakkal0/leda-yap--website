import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

function CarouselSlide(props) {
  const xs_height = `min-h-[${props.xs}svh]`;
  const sm_height = `sm:min-h-[${props.sm}svh]`;

  return (
    <SplideSlide>
      <div
        className={`${xs_height} ${sm_height} relative flex  pb-32  pt-16`}
        style={{
          minHeight: "55vh",
        }}
      >
        <div
          className="absolute top-0 size-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${props.img})`,
          }}
        ></div>
      </div>
    </SplideSlide>
  );
}

export default CarouselSlide;
