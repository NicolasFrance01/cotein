"use client";
import Link from "next/link";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link href="/" className="navbar-logo text-gradient-rainbow">
          CO.TE.IN.
        </Link>

        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <Link href="/" onClick={() => setIsOpen(false)}>Inicio</Link>
          <Link href="/acerca-de" onClick={() => setIsOpen(false)}>Acerca de</Link>
          <Link href="/servicios" onClick={() => setIsOpen(false)}>Servicios</Link>
          <Link href="/contacto" onClick={() => setIsOpen(false)}>Contacto</Link>
          <Link href="/hazte-socio" className="btn-primary ml-4" onClick={() => setIsOpen(false)}>
            Hazte Socio
          </Link>
        </div>

        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
        </button>
      </div>
    </nav>
  );
}
