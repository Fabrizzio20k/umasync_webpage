import Image from "next/image";
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="flex flex-col bg-mainBlue-900 min-w-64">
            <div className="mx-5 sm:mx-10 xl:mx-auto mt-4">
                <div className="border-b-2 border-gray-700">
                    <h2 className="mb-4 font-bold text-2xl font-earthFont bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">Umasync Robotics</h2>
                </div>
            </div>
            <div className="mx-5 sm:mx-10 xl:mx-auto my-10 text-slate-400">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex flex-col space-y-2">
                        <h3 className="font-bold text-lg font-cabinBold mb-1">Ubicanos en: </h3>
                        <a href="https://maps.app.goo.gl/SJpidNvu1FnSJnZd7" target="_blank" rel="noreferrer" className="hover:text-gray-300 transition-colors duration-500">
                            <p className="text-sm font-cabinRegular">Jirón Medrano Silva #165 - UTEC</p>
                            <p className="text-sm font-cabinRegular">Lima, Perú</p>
                        </a>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <h3 className="font-bold text-lg font-cabinBold mb-1">Síguenos en nuestras redes sociales</h3>
                        <div className="flex flex-row">
                            <a href="https://www.instagram.com/umasync_robotics/" target="_blank" rel="noreferrer" className="mr-2 hover:text-gray-300 transition-colors duration-500">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/umasync-robotics-9045722bb/" target="_blank" rel="noreferrer" className="mr-2 hover:text-gray-300 transition-colors duration-500">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="https://www.tiktok.com/@umasyncrobotics" target="_blank" rel="noreferrer" className="mr-2 hover:text-gray-300 transition-colors duration-500">
                                <FaTiktok size={24} />
                            </a>
                        </div>
                        <p className="text-sm font-cabinRegular">umasyncrobotics@utec.edu.pe</p>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <h3 className="font-bold text-lg font-cabinBold mb-1">Más información</h3>
                        <a href="#" rel="noreferrer" className="hover:text-gray-300 transition-colors duration-500">
                            <p className="text-sm font-cabinRegular">Terminos y condiciones</p>
                        </a>
                        <a href="#" rel="noreferrer" className="hover:text-gray-300 transition-colors duration-500">
                            <p className="text-sm font-cabinRegular">Políticas de privacidad</p>
                        </a>
                        <a href="#" rel="noreferrer" className="hover:text-gray-300 transition-colors duration-500">
                            <p className="text-sm font-cabinRegular">FAQ</p>
                        </a>

                    </div>
                    <div className="flex flex-col space-y-2 justify-center">
                        <h3 className="text-sm font-cabinRegular mb-1">&copy; 2024 Umasync Robotics</h3>
                        <p className="text-sm font-cabinRegular">Todos los derechos reservados</p>
                        <a href="https://fabrizziodev.vercel.app" target="_blank" rel="noreferrer" className="hover:text-gray-300 transition-colors duration-500">
                            <p className="text-sm font-cabinRegular">Made with ❤️ by Fabrizzio20k</p>
                        </a>

                    </div>
                </div>
            </div>
        </footer>
    );
}