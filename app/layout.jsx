import { Inter } from "next/font/google";
import { ThemeModeScript } from "flowbite-react";
import "./globals.css";
import { Nav } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Leda Yapı",
  description: "Made by Emir Bakkal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <ThemeModeScript />
      </head>
      <body className={`${roboto.className} bg-gray-200`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
