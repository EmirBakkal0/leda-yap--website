import React from "react";
import Carousel from "@/components/altyapi/Carousel";

export default function Card({ header, slideSrc, slideAmount, p }) {
  return (
    <section className="m-4 rounded-md  bg-white p-2 shadow-lg">
      <h2 className="p-2 pb-4 font-sans text-2xl font-bold">{header}</h2>
      <div className="">
        <Carousel slideAmount={slideAmount} src={slideSrc} />
      </div>
      <p className="mt-4 text-center text-lg">{p}</p>
    </section>
  );
}
