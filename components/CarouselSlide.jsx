import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';

function CarouselSlide(props) {
  return (
    <SplideSlide>
        <div className="relative pt-16 pb-32 flex min-h-[55svh] sm:min-h-[75svh]  h-full"
          // style={{
          //   minHeight: "75vh"
          // }}
          >
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url(${props.img})`
            }}>
            
          </div>
         
        </div>
      </SplideSlide>
  )
}

export default CarouselSlide