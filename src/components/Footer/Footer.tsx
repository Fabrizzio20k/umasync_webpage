import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex flex-col bg-mainBlue-900">
            <div className="mx-5 sm:mx-10 xl:mx-auto my-5">
                <div className="border-b-2 border-gray-700">
                    <h2 className="font-bold text-2xl font-earthFont bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">Umasync Robotics</h2>
                </div>
            </div>
            <div className="mx-5 sm:mx-10 xl:mx-auto mb-4 text-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 test">
                    <div className="flex flex-col test">
                        <h3 className="font-bold text-lg">Contacto</h3>
                        <p className="text-sm">Calle 123, Ciudad de México, México</p>
                        <p className="text-sm"> </p>
                    </div>
                    <div className="flex flex-col test">
                        <h3 className="font-bold text-lg">Redes Sociales</h3>
                        <p className="text-sm">Facebook</p>
                        <p className="text-sm">Instagram</p>
                        <p className="text-sm">Twitter</p>
                    </div>
                    <div className="flex flex-col test">
                        <h3 className="font-bold text-lg">Redes Sociales</h3>
                        <p className="text-sm">Facebook</p>
                        <p className="text-sm">Instagram</p>
                        <p className="text-sm">Twitter</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}