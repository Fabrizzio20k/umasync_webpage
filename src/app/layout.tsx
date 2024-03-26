import type { Metadata } from "next";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "UmaSync Robotics",
  description: "The official website of UmaSync Robotics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-slate-500">
        <Navbar />
        {children}
        <h1 className="text-7xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis architecto nulla minus dolor omnis cum quasi odio! Reiciendis necessitatibus excepturi voluptatem, consequuntur nesciunt unde delectus magni, fugit, dolorum exercitationem esse!</h1>
        <h1 className="text-7xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis architecto nulla minus dolor omnis cum quasi odio! Reiciendis necessitatibus excepturi voluptatem, consequuntur nesciunt unde delectus magni, fugit, dolorum exercitationem esse!</h1>
        <Footer />
      </body>
    </html>
  );
}
