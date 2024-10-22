import { Inter } from "next/font/google";
import { ThemeModeScript } from "flowbite-react";
import "./globals.css";
import { Nav } from "@/components/Navbar"
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Leda Yapı",
  description: "Generated by create flowbite react",
};

export default function RootLayout({ children }
) {
  return (
    <html lang="tr">
      <head>

        <ThemeModeScript />
      </head>
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}