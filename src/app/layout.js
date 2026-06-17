import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "COTEIN LTDA | Cooperativa de Servicios Técnicos y Telecomunicaciones",
  description: "Servicio técnico y mantenimiento de equipos de telecomunicaciones e informática limitada. Conectando y manteniendo el futuro.",
  keywords: ["cotein", "cooperativa", "telecomunicaciones", "informática", "servicio técnico", "mantenimiento"],
};

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundGlow from "../components/BackgroundGlow";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.variable}`} style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <BackgroundGlow />
        <Navbar />
        <main style={{ flex: "1" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
