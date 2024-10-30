"use client";

import { Navbar } from "flowbite-react";
import Image from "next/image";
export function Nav() {
  return (
    <nav className=" mx-auto bg-white shadow-lg">
      <Navbar fluid rounded className="container mx-auto">
        <Navbar.Brand href="/" className="hidden md:block">
          <Image
            src="/ledaeng_logo.png"
            alt="Leda Engineering Logo"
            width={282}
            height={74}
          />
        </Navbar.Brand>
        <Navbar.Brand href="/">
          <Image
            src="/ledayapi_logo.jpg"
            alt="Leda Yapı Logo"
            width={192}
            height={55}
          />
        </Navbar.Brand>
        <Navbar.Brand href="http://bklgrup.com">
          <Image
            src="/BKL-GRUP-logo.png"
            alt="BKL GRUP Logo"
            width={87}
            height={55}
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/">Ana Sayfa</Navbar.Link>
          <Navbar.Link href="ustyapi.html">Üst Yapı Tesisleri</Navbar.Link>
          <Navbar.Link href="altyapi.html">Alt Yapı Tesisleri</Navbar.Link>
          {/* <Navbar.Link href="about">Hakkımızda</Navbar.Link> */}
          <Navbar.Link href="#footer">İletişim</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}
