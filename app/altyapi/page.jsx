import React from "react";
import Carousel from "@/components/altyapi/Carousel";
import Card from "@/components/altyapi/Card";

function Altyapi() {
  return (
    <div className="container mx-auto grid md:grid-cols-2">
      <Card
        header={"Atıksu Arıtma"}
        slideAmount={15}
        slideSrc={"atiksu"}
        p="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
          adipisci porro et laudantium mollitia ea ipsam tenetur non distinctio
          quibusdam!"
      />

      <Card
        header="İçme Suyu Arıtma"
        slideAmount={10}
        slideSrc={"icmesu"}
        p="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
          adipisci porro et laudantium mollitia ea ipsam tenetur non distinctio
          quibusdam!"
      />

      <Card
        header="Nehir Arıtma"
        slideAmount={3}
        slideSrc={"nehirsu"}
        p="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
          adipisci porro et laudantium mollitia ea ipsam tenetur non distinctio
          quibusdam!"
      />
      <Card
        header="Alt Yapı"
        slideAmount={5}
        slideSrc={"altyapı"}
        p="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
          adipisci porro et laudantium mollitia ea ipsam tenetur non distinctio
          quibusdam!"
      />
    </div>
  );
}

export default Altyapi;
