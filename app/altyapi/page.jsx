import React from "react";
import Carousel from "@/components/altyapi/Carousel";
import Card from "@/components/altyapi/Card";

function Altyapi() {
  return (
    <div className="container mx-auto grid md:grid-cols-2 ">
      <Card
        header={"Atıksu Arıtma"}
        slideAmount={16}
        slideSrc={"atiksu"}
        p="Evsel ve endüstriyel kullanım sonucu oluşan atıksuların, deşarj limitlerine uygun veya kullanma suyu olarak kullanılabilir seviyelere eriştirebilen, ilgili prosesler ile arıtımın yapıldığı sistemlerdir."
      />

      <Card
        header="İçme Suyu Arıtma"
        slideAmount={10}
        slideSrc={"icmesu"}
        p="Tabiatta mevcut olan su kaynaklarının kullanılabilir ve içilebilir özelliğe getirilmesi amacıyla kurulan tesislerdir."
      />

      <Card
        header="Nehir Suyu Arıtma"
        slideAmount={3}
        slideSrc={"nehirsu"}
        p="Akarsu kaynaklı suların kullanılabilir özelliğe getirilmesi amacıyla kurulan tesislerdir."
      />
      <Card
        header="Alt Yapı"
        slideAmount={7}
        slideSrc={"altyapı"}
        p="Atıksu ve içme suyu hatlarının imali."
      />
    </div>
  );
}

export default Altyapi;
