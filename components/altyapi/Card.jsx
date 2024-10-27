import React from "react";
import Carousel from "@/components/altyapi/Carousel";

export default function Card({ header, slideSrc, slideAmount, p }) {
  return (
    <section className="p-4">
      <h2 className="p-2 pb-4 font-sans text-2xl font-bold">{header}</h2>
      <Carousel slideAmount={slideAmount} src={slideSrc} />
      <p className="mt-4 text-center">{p}</p>
    </section>
  );
}
