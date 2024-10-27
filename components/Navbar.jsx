"use client";

import { Navbar } from "flowbite-react";
import Image from "next/image";
export function Nav() {
    return (
        <nav className="container mx-auto shadow-lg">
            <Navbar fluid rounded >
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
                        width={250}
                        height={72}
                    />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link href="/" >
                        Ana Sayfa
                    </Navbar.Link>
                    <Navbar.Link href="ustyapi.html">Üst Yapı Tesisleri</Navbar.Link>
                    <Navbar.Link href="altyapi.html">Alt Yapı</Navbar.Link>
                    <Navbar.Link href="about.html">Hakkımızda</Navbar.Link>
                    <Navbar.Link href="#footer">İletişim</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </nav>

    );
}