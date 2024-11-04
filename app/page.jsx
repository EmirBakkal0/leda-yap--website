// import { DarkThemeToggle } from "flowbite-react";
import Carousel from "@/components/Carousel";
export default function Home() {
  return (
    <main className="">
      <Carousel />

      <section className="container mx-auto mt-2 grid md:grid-cols-2">
        <div className="m-3 rounded-md  bg-white p-4 shadow-xl">
          <h2 className="mb-2 text-2xl font-bold">Hakkımızda</h2>

          <p>
            Güvenilir, kaliteli, ekonomik ve zamanında verdiğimiz
            hizmetlerimizle, firmamızın ilkeleri doğrultusunda, daima
            araştırarak ve yeniliklerle ülkenin çağdaş çizgisinin yükselmesine
            katkıda bulunmak ve Leda Engineering’ın dünya markası olmasını
            sağlamaktır.
          </p>
        </div>
        <div className="m-3 rounded-md  bg-white p-4 shadow-xl">
          <h2 className="mb-2 text-2xl font-bold">Kalite Politikamız</h2>
          <p>
            Leda Yapı olarak, Kalite Yönetim Sistemimizin etkinliğinin sürekli
            iyileştirilmesini ve şartlara uygunluğunun periyodik olarak gözden
            geçirilmesini, bu amaçla Kalite Politikamız ve buna paralel olarak
            belirlediğimiz Kalite Hedeflerimizin iyileştirilmesinin
            sürekliliğini taahhüt ederiz.
          </p>
        </div>
      </section>
      <div className="container mx-auto mb-4">
        <div className=" m-3 rounded-md bg-white py-2 shadow-xl">
          <div className="m-3">
            <iframe
              className="w-full "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8189.178511348045!2d29.96660019064295!3d40.734330925790466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb453f9c029e7b%3A0x1e08e2d28602d078!2zTEVEQSBNw7xoZW5kaXNsaWsgRMSxxZ8gVGljIEx0ZA!5e0!3m2!1str!2str!4v1730403350741!5m2!1str!2str"
              height="400"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className=" mt-2 text-center text-lg font-medium ">
              Leda Yapı - Leda Mühendislik Yaylacık Mah Kanalyolu Cad. No: 79
              Başiskele / Kocaeli
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
