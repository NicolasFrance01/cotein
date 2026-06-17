"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, User } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#050505]/95 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12H9" stroke="#FF6044" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 12H20" stroke="#FF6044" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 4V9" stroke="#FF6044" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 15V20" stroke="#FF6044" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="12" r="2" stroke="#FF6044" strokeWidth="2"/>
            <circle cx="4" cy="12" r="2" fill="#FF6044"/>
            <circle cx="20" cy="12" r="2" fill="#FF6044"/>
          </svg>
          <span className="font-sans font-bold tracking-[0.2em] text-[15px] uppercase text-white">
            VISTA.IO
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center">
          <div className="bg-[#181a18] rounded-full px-6 py-2.5 flex items-center gap-8 border border-white/5">
            <a href="#soluciones" className="text-[13px] text-white/80 hover:text-white transition-colors">Soluciones</a>
            <a href="#vision" className="text-[13px] text-white/80 hover:text-white transition-colors">Visión</a>
            <a href="#blog" className="text-[13px] text-white/80 hover:text-white transition-colors">Blog</a>
          </div>
          <button className="ml-4 bg-[#FF6044] hover:bg-[#ff4a2b] text-white px-6 py-2.5 rounded-full text-[13px] font-medium transition-colors">
            Empezar
          </button>
          
          <div className="ml-8 flex items-center gap-2 text-[#FF6044] cursor-pointer hover:text-[#ff4a2b] transition-colors">
            <User size={16} />
            <span className="text-[13px] font-medium">Iniciar sesión</span>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#050505] border-b border-white/10 px-6 py-6 flex flex-col gap-6">
          <a href="#soluciones" className="text-sm text-white/80" onClick={() => setIsOpen(false)}>Soluciones</a>
          <a href="#vision" className="text-sm text-white/80" onClick={() => setIsOpen(false)}>Visión</a>
          <a href="#blog" className="text-sm text-white/80" onClick={() => setIsOpen(false)}>Blog</a>
          <button className="bg-[#FF6044] w-full text-white px-6 py-3 rounded-full text-sm font-medium">
            Empezar
          </button>
        </div>
      )}
    </motion.nav>
  );
}
