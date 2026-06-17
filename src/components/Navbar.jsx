"use client";
import Link from "next/link";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="#inicio" className="navbar-logo">
          CO.TE.IN.
        </a>

        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <a href="#inicio" onClick={() => setIsOpen(false)}>Inicio</a>
          <a href="#acerca-de" onClick={() => setIsOpen(false)}>Acerca de</a>
          <a href="#servicios" onClick={() => setIsOpen(false)}>Servicios</a>
          <a href="#contacto" onClick={() => setIsOpen(false)}>Contacto</a>
          <a href="#hazte-socio" className="btn-primary ml-4" onClick={() => setIsOpen(false)}>
            Hazte Socio
          </a>
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
