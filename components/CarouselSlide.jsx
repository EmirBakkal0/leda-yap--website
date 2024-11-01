import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

function CarouselSlide(props) {
  const xs_height = `min-h-[${props.xs}svh]`;
  const sm_height = `sm:min-h-[${props.sm}svh]`;

  return (
    <SplideSlide>
      <div
        className={` relative flex min-h-[300px] pb-32 pt-16 md:min-h-[500px]`}
        // style={{
        //   minHeight: "600px",
        // }}
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
