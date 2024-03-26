"use client"
import Image from "next/image";
import { usePathname } from 'next/navigation'
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { Spin as Hamburger } from 'hamburger-react';
import { RiHome6Line, RiCalendarEventLine, RiContactsLine } from "react-icons/ri";
import { GoOrganization } from "react-icons/go";
import { TbHeartHandshake } from "react-icons/tb";
import { LuListTodo } from "react-icons/lu";
import { IconType } from "react-icons";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import React from "react";
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const [size, setSize] = useState(32);
    const [isDarkMode, setIsDarkMode] = useState(true);

    const iconsSet: IconType[] = [RiHome6Line, GoOrganization, TbHeartHandshake, LuListTodo, RiCalendarEventLine, RiContactsLine];
    const menuOptions: string[] = ["Inicio", "Nosotros", "Alianzas", "Proyectos", "Eventos", "Contacto"];
    const menuLinks: string[] = ["/", "/nosotros", "/alianzas", "/proyectos", "/eventos", "/contacto"];

    const path = usePathname();

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
                        <Image src="/icons/logo.webp" alt="Logo" width={50} height={50} className="filter brightness-125 saturate-150" />
                        <div className="flex flex-col items-center justify-center ms-5">
                            <h3 className="font-earthFont text-white text-1xl font-bold ">Umasync</h3>
                            <h3 className="font-earthFont text-white text-1xl font-bold ">Robotics</h3>
                        </div>
                    </ul>
                </Link>
                <ul className="flex-row font-earthFont space-x-10 my-2 hidden lg:flex">
                    {menuOptions.map((option, i) => (
                        <li key={i} className="text-white hover:text-blue-400 transition-all duration-500">
                            <Link href={menuLinks[i]} className={`${styles.item} ${path === menuLinks[i] ? styles.linkActive : ""}`}>{option}</Link>
                        </li>
                    ))}
                    <button onClick={() => {
                        alert("Cambiando de modo")
                        setIsDarkMode(!isDarkMode)
                    }}>
                        {isDarkMode && (<BsFillMoonStarsFill className="text-white text-xl hover:text-blue-400 transition-all duration-500" />)}
                        {!isDarkMode && (<BsSunFill className="text-white text-xl hover:text-blue-400 transition-all duration-500" />)}
                    </button>

                </ul>
                <div className="lg:hidden">
                    <Hamburger rounded={true} toggled={isOpen} toggle={setIsOpen} size={size} color="white" />
                </div>
            </nav>
            <AnimatePresence>
                {isOpen && (
                    <>
                        <div onClick={() => setIsOpen(false)} className="fixed top-15 left-0 w-full h-full bg-black filter opacity-60"></div>
                        <motion.div
                            className="fixed top-15 left-0 w-fit h-full bg-mainBlue-800 overflow-auto font-earthFont z-10"
                            initial={{ x: '-100vw' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100vw' }}
                            transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}

                        >
                            <ul className="flex flex-col space-y-4 py-4 px-4 mx-auto">
                                {menuOptions.map((option, i) => (
                                    <li key={i} className="flex flex-row w-full justify-between items-center text-white hover:text-blue-400 transition-all duration-500">
                                        <Link href={menuLinks[i]} className={`${styles.item} ${path === menuLinks[i] ? styles.linkActive : ""}`}>{option}</Link>
                                        {React.createElement(iconsSet[i], { className: `${path === menuLinks[i] ? styles.linkActive : ""} text-xl ms-10` })}
                                    </li>
                                ))}
                                <li className="flex flex-row w-full justify-between items-center border-t-2 border-slate-200 text-white hover:text-blue-400 transition-all duration-500">
                                    <h1>Modo: </h1>
                                    <button onClick={() => {
                                        alert("Cambiando de modo")
                                        setIsDarkMode(!isDarkMode)
                                    }} className="py-4">
                                        {isDarkMode && (<BsFillMoonStarsFill className="text-xl" />)}
                                        {!isDarkMode && (<BsSunFill className="text-xl" />)}
                                    </button>
                                </li>
                            </ul>
                        </motion.div>
                    </>
                )
                }
            </AnimatePresence>
        </header >
    );
}