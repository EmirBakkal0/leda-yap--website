import { DarkThemeToggle } from "flowbite-react";
import Carousel from "@/components/Carousel"
export default function Home() {
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(5).keys())

  const pics = []


  return (
    <main className="">

      <Carousel />

      <section className=" container mx-auto grid md:grid-cols-2">
        <div className="flex flex-col">
          <h2>Hakkımızda</h2>

          <p>
            Güvenilir, kaliteli, ekonomik ve zamanında verdiğimiz hizmetlerimizle, firmamızın ilkeleri doğrultusunda,
            daima araştırarak ve yeniliklerle ülkenin çağdaş çizgisinin yükselmesine katkıda bulunmak ve 
            Leda Engineering’ın dünya markası olmasını sağlamaktır.
          </p>

        </div>
        <div>
          <h2>Kalite Politikamız</h2>
          <p>
          Leda Engineering olarak, Kalite Yönetim Sistemimizin etkinliğinin sürekli iyileştirilmesini ve şartlara uygunluğunun periyodik
           olarak gözden geçirilmesini, bu amaçla Kalite Politikamız ve buna paralel olarak belirlediğimiz Kalite Hedeflerimizin 
           iyileştirilmesinin sürekliliğini taahhüt ederiz.
          </p>
        </div>
      </section>



    </main>
  );
}
