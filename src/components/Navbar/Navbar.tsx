"use client"
import Image from "next/image";

export default function Navbar() {
    return (
        <header className="bg-mainBlue-800">
            <nav className="flex flex-row w-100 items-center justify-between mx-10">
                <ul className="flex items-center justify-start my-3">
                    <Image src="/icons/logo.webp" alt="Logo" width={70} height={100} />
                    <div className="flex flex-col items-center justify-center ms-5 ">
                        <h3 className="font-earthFont text-white text-2xl font-bold ">Umasync</h3>
                        <h3 className="font-earthFont text-white text-2xl font-bold ">Robotics</h3>
                    </div>
                </ul>
                <ul className="flex flex-row font-earthFont text-white space-x-10 my-3">
                    <li onClick={() => alert("Gaaaaaaa")}>Inicio</li>
                    <li>Nosotros</li>
                    <li>Alianzas</li>
                    <li>Proyectos</li>
                    <li>Eventos</li>
                    <li>Contacto</li>
                </ul>
            </nav>
        </header>
    );
}