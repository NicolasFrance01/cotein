import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const lora = Lora({ subsets: ["latin"], variable: "--font-serif" });

export const metadata = {
  title: "VISTA.IO | Análisis de Datos",
  description: "Usa los datos para obtener una vista de 360 grados de tu negocio",
};

import Navbar from "../components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${lora.variable}`}>
      <body className="bg-[#050505] font-sans text-[#f4f4f4] flex flex-col min-h-screen antialiased selection:bg-[#ff6044]/30">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
