"use client"
import Image from "next/image";
import { usePathname } from 'next/navigation'
import { useState, useEffect, useCallback } from "react";
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
    const [isDarkMode, setIsDarkMode] = useState(false);

    const iconsSet: IconType[] = [RiHome6Line, GoOrganization, TbHeartHandshake, LuListTodo, RiCalendarEventLine, RiContactsLine];
    const menuOptions: string[] = ["Inicio", "Nosotros", "Alianzas", "Proyectos", "Eventos", "Contacto"];
    const menuLinks: string[] = ["/", "/nosotros", "/alianzas", "/proyectos", "/eventos", "/contacto"];

    const handleDarkMode = () => {
        const newIsDarkMode = !isDarkMode;
        setIsDarkMode(newIsDarkMode);
        window.localStorage.setItem("darkMode", newIsDarkMode ? "true" : "false");
        handleChangeTheme(newIsDarkMode);
    }

    const handleChangeTheme = useCallback((newIsDarkMode: boolean) => {
        if (newIsDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        console.log("Dark mode: ", newIsDarkMode);
    }, []);

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

    useEffect(() => {
        if (window.localStorage.getItem("darkMode") !== null) {
            if (window.localStorage.getItem("darkMode") === "true") {
                setIsDarkMode(true);
            }
            else {
                setIsDarkMode(false);
            }
        }
        else {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setIsDarkMode(true);
                window.localStorage.setItem("darkMode", "true");
            }
            else {
                setIsDarkMode(false);
                window.localStorage.setItem("darkMode", "false");
            }
        }
        handleChangeTheme(isDarkMode);


    }, [handleChangeTheme, isDarkMode]);


    return (
        <header className="bg-white shadow-md fixed w-full dark:bg-mainBlue-800 transition-all duration-500">
            <nav className="flex flex-row max-w-1920 items-center justify-between mx-5 sm:mx-10 xl:mx-auto">
                <Link href="/" className="my-2">
                    <ul className="flex items-center justify-between cursor-pointer">
                        <Image src="/icons/logo.webp" alt="Logo" width={50} height={50} className="dark:filter dark:brightness-125 dark:saturate-150 transition-all duration-500" />
                        <div className="flex flex-col items-center justify-center ms-5">
                            <h3 className="font-earthFont text-sky-500 dark:text-white text-1xl font-bold transition-all duration-500">Umasync</h3>
                            <h3 className="font-earthFont text-sky-600 dark:text-white text-1xl font-bold transition-all duration-500">Robotics</h3>
                        </div>
                    </ul>
                </Link>
                <ul className="flex-row font-earthFont space-x-10 my-2 hidden lg:flex">
                    {menuOptions.map((option, i) => (
                        <li key={i} className="text-black hover:text-mainBlue-300 dark:text-white dark:hover:text-mainBlue-300 transition-all duration-500">
                            <Link href={menuLinks[i]} className={`${styles.item} ${path === menuLinks[i] ? styles.linkActive : ""}`}>{option}</Link>
                        </li>
                    ))}
                    <button onClick={handleDarkMode}>
                        {isDarkMode && (<BsFillMoonStarsFill className="text-black text-xl hover:text-mainBlue-300 dark:text-white dark:hover:text-mainBlue-300 transition-all duration-500" />)}
                        {!isDarkMode && (<BsSunFill className="text-black dark:text-white text-xl hover:text-mainBlue-300  transition-all duration-500" />)}
                    </button>

                </ul>
                <div className="lg:hidden text-black dark:text-white">
                    <Hamburger rounded={true} toggled={isOpen} toggle={setIsOpen} size={size} />
                </div>
            </nav>
            <AnimatePresence>
                {isOpen && (
                    <>
                        <div onClick={() => setIsOpen(false)} className="fixed top-15 left-0 w-full h-full bg-black filter opacity-60"></div>
                        <motion.div
                            className="bg-white fixed top-14 left-0 w-fit h-full overflow-auto font-earthFont z-10 dark:bg-mainBlue-800 transition-colors duration-500"
                            initial={{ x: '-150vw' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-150vw' }}
                            transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}

                        >
                            <ul className="flex flex-col space-y-10 py-4 px-4 mx-auto">
                                {menuOptions.map((option, i) => (
                                    <li key={i} className="flex flex-row w-full justify-between items-center text-black hover:text-mainBlue-300 dark:text-white dark:hover:text-mainBlue-300 transition-all duration-500">
                                        <Link href={menuLinks[i]} className={`${styles.item} ${path === menuLinks[i] ? styles.linkActive : ""}`}>{option}</Link>
                                        {React.createElement(iconsSet[i], { className: `${path === menuLinks[i] ? styles.linkActive : ""} text-xl ms-10` })}
                                    </li>
                                ))}
                                <li className="flex flex-row w-full justify-between items-center border-t-2 border-slate-200 text-black dark:text-white hover:text-mainBlue-300 dark:hover:text-mainBlue-300 transition-all duration-500">
                                    <h1>Modo: </h1>
                                    <button onClick={handleDarkMode} className="py-4">
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