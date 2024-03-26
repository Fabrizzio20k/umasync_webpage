"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { Spin as Hamburger } from 'hamburger-react';

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const [size, setSize] = useState(32);

    useEffect(() => {
        const checkWindowSize = () => {
            if (window.innerWidth > 1000 && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", checkWindowSize);

        return () => {
            window.removeEventListener("resize", checkWindowSize);
        };
    }, [isOpen]);


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 400) {
                setSize(window.innerWidth / 12);
            } else {
                setSize(32);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <header className="bg-mainBlue-800 fixed w-full">
            <nav className="flex flex-row max-w-1920 items-center justify-between mx-5 sm:mx-10 xl:mx-auto">
                <Link href="/" className="my-2">
                    <ul className="flex items-center justify-between cursor-pointer">
                        <Image src="/icons/logo.webp" alt="Logo" width={50} height={50} />
                        <div className="flex flex-col items-center justify-center ms-5">
                            <h3 className="font-earthFont text-white text-1xl font-bold ">Umasync</h3>
                            <h3 className="font-earthFont text-white text-1xl font-bold ">Robotics</h3>
                        </div>
                    </ul>
                </Link>
                <ul className="flex-row font-earthFont space-x-10 my-2 hidden lg:flex">
                    <Link href="/" className={`${styles.item} text-white hover:text-blue-400 transition-all duration-500`}>Inicio</Link>
                    <Link href="/" className={`${styles.item} text-white hover:text-blue-400 transition-all duration-500`}>Nosotros</Link>
                    <Link href="/" className={`${styles.item} text-white hover:text-blue-400 transition-all duration-500`}>Alianzas</Link>
                    <Link href="/" className={`${styles.item} text-white hover:text-blue-400 transition-all duration-500`}>Proyectos</Link>
                    <Link href="/" className={`${styles.item} text-white hover:text-blue-400 transition-all duration-500`}>Eventos</Link>
                    <Link href="/" className={`${styles.item} text-white hover:text-blue-400 transition-all duration-500`}>Contacto</Link>
                </ul>
                <div className="lg:hidden">
                    <Hamburger rounded={true} toggled={isOpen} toggle={setIsOpen} size={size} color="white" />
                </div>
            </nav>
        </header>
    );
}