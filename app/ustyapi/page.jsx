import React from "react";
import Carousel from "@/components/ustyapi/Carousel";
import Card from "@/components/ustyapi/Card";

export default function Ustyapi() {
  return (
    <div className="container mx-auto ">
      <div className="m-4 rounded-lg bg-white shadow-lg ">
        <h1 className="py-4 text-center text-2xl font-bold ">
          Güncel Projeler
        </h1>
      </div>
      {/* <h2>Leda City</h2> */}
      <div className="grid md:grid-cols-2">
        <Card
          header={"Kocaeli"}
          slideAmount={8}
          slideSrc={"kocaeli"}
          // p={"dsghjkndwaBATWYG ARSJHAGSKP"}
        />

        <Card
          header={"Tavşanlı"}
          slideAmount={3}
          slideSrc={"tavsan"}
          // p={"dsghjkndwaBATWYG ARSJHAGSKP"}
        />
      </div>
    </div>
  );
}
