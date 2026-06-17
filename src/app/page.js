"use client";
import { Cloud, Cpu, Network, MapPin, Phone, Mail, Check } from "lucide-react";
import { motion } from "framer-motion";
import ParticleBackground from "../components/ParticleBackground";
import AnimatedCounter from "../components/AnimatedCounter";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const flipIn = {
  hidden: { opacity: 0, rotateY: 90 },
  visible: { 
    opacity: 1, 
    rotateY: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  return (
    <main className="bg-[#050505] text-[#f4f4f4] relative">
      
      {/* BACKGROUND PARTICLES FOR HERO */}
      <div className="absolute top-0 left-0 w-full h-[140vh] overflow-hidden opacity-50 z-0">
         <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-10 pointer-events-none" />
         <ParticleBackground />
      </div>

      {/* 1. INICIO SECTION */}
      <section id="inicio" className="relative z-10 pt-48 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <motion.div 
          className="md:w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h1 className="text-6xl md:text-7xl lg:text-[85px] leading-[1.1] text-vista-serif mb-8 tracking-tighter">
            EL FUTURO <br/>DE LA TECNOLOGÍA
          </h1>
          <p className="text-[17px] leading-relaxed text-white/80 max-w-lg mb-8 font-light">
            Soluciones innovadoras para empresas e individuos. Conectividad, soporte y mantenimiento liderado por expertos de COTEIN.
          </p>
          <a href="#contacto" className="inline-block bg-[#FF6044] hover:bg-[#ff4a2b] text-white px-8 py-3.5 rounded text-[14px] font-medium transition-colors">
            Contactar
          </a>
        </motion.div>
      </section>

      {/* 2. ACERCA DE NOSOTROS */}
      <section id="nosotros" className="relative z-10 py-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
        <motion.div 
          className="md:w-full pt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl lg:text-[54px] leading-[1.1] text-vista-serif mb-12">
            Socios estratégicos para tu crecimiento
          </h2>
          <div className="border-l-2 border-[#FF6044] pl-6 max-w-2xl">
            <p className="text-[14px] leading-relaxed text-white/70 mb-4">
              COTEIN LTDA (Mat. 40271) nace del esfuerzo cooperativo de profesionales del sector informático y de telecomunicaciones. Nuestro objetivo es proveer soluciones integrales, eficientes y seguras.
            </p>
            <p className="text-[14px] leading-relaxed text-white/70">
              Al elegirnos, eliges calidad, compromiso y una visión enfocada al futuro.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 3. SERVICIOS SECTION */}
      <section id="servicios" className="relative z-10 py-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <motion.div 
          className="w-full flex flex-col md:flex-row gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Card 1 */}
          <motion.div variants={flipIn} className="vista-card rounded-xl p-10 flex-1 perspective-1000">
            <div className="w-12 h-12 border border-white/20 rounded flex items-center justify-center mb-6">
              <Network className="text-white/80" strokeWidth={1} />
            </div>
            <h3 className="text-2xl text-vista-serif mb-4">Instalación de<br/>redes</h3>
            <p className="text-[13px] text-white/60 leading-relaxed">
              Despliegue y configuración de infraestructura de red para asegurar conectividad de alta velocidad y estabilidad en todo momento.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={flipIn} className="vista-card rounded-xl p-10 flex-1 perspective-1000">
            <div className="w-12 h-12 border border-white/20 rounded flex items-center justify-center mb-6">
              <Cpu className="text-white/80" strokeWidth={1} />
            </div>
            <h3 className="text-2xl text-vista-serif mb-4">Mantenimiento<br/>preventivo</h3>
            <p className="text-[13px] text-white/60 leading-relaxed">
              Protege tus equipos antes de que fallen. Revisiones constantes y soporte proactivo para evitar cortes inesperados.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={flipIn} className="vista-card rounded-xl p-10 flex-1 perspective-1000">
            <div className="w-12 h-12 border border-white/20 rounded flex items-center justify-center mb-6">
              <Cloud className="text-white/80" strokeWidth={1} />
            </div>
            <h3 className="text-2xl text-vista-serif mb-4">Servicio técnico<br/>especializado</h3>
            <p className="text-[13px] text-white/60 leading-relaxed">
              Expertos listos para solucionar problemas complejos en servidores, estaciones de trabajo y sistemas de telecomunicación.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. VELOCITY SECTION (NOW HAS VISTA-GRADIENT-BG) */}
      <section className="relative z-10 py-32 px-6 vista-gradient-bg border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl lg:text-[54px] leading-[1.1] text-vista-serif">
              Calidad sin precedentes.<br/>Máxima fiabilidad.
            </h2>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex flex-col items-start md:items-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="border-l-2 border-[#FF6044] pl-6 mb-8 max-w-md text-left">
              <p className="text-[13px] leading-relaxed text-white/70">
                Trabajamos codo a codo contigo para asegurarnos de que tu infraestructura tecnológica esté siempre a la vanguardia. Conectando y manteniendo el futuro de tu negocio con los más altos estándares de calidad.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. CTA / CONTACTO SECTION */}
      <section id="contacto" className="relative z-10 py-32 vista-gradient-bg px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 justify-between">
          <div className="w-full md:w-5/12">
            <h2 className="text-4xl md:text-5xl lg:text-[54px] text-vista-serif mb-8">
              Trabajemos<br/>juntos.
            </h2>
            <div className="border-l-2 border-[#FF6044] pl-6 mb-8 max-w-md">
              <p className="text-[14px] leading-relaxed text-white/70 mb-8">
                Estamos listos para impulsar el área tecnológica de tu empresa. Contáctanos hoy mismo para una consulta.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-[#FF6044] mt-1"><MapPin size={20} /></div>
                  <div>
                    <h5 className="font-medium text-[15px] mb-1">Ubicación</h5>
                    <p className="text-white/60 text-[13px]">Claudio Cuenca 1563 PA<br/>X5009 Córdoba, Provincia de Córdoba</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-[#FF6044] mt-1"><Phone size={20} /></div>
                  <div>
                    <h5 className="font-medium text-[15px] mb-1">Teléfono</h5>
                    <p className="text-white/60 text-[13px]">0351 657-7646</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-[#FF6044] mt-1"><Mail size={20} /></div>
                  <div>
                    <h5 className="font-medium text-[15px] mb-1">Email</h5>
                    <p className="text-white/60 text-[13px]">info@cotein.com.ar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-7/12" id="socio">
            <h3 className="text-2xl text-vista-serif mb-6">Contáctanos o Hazte Socio</h3>
            <form className="bg-[#181a18] p-10 border border-white/5 rounded-xl flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] text-white/60 uppercase tracking-widest">Nombre</label>
                  <input type="text" className="bg-[#050505] border border-white/10 rounded-md py-3 px-4 text-[13px] text-white focus:outline-none focus:border-[#FF6044] transition-colors" placeholder="Tu nombre" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] text-white/60 uppercase tracking-widest">Email</label>
                  <input type="email" className="bg-[#050505] border border-white/10 rounded-md py-3 px-4 text-[13px] text-white focus:outline-none focus:border-[#FF6044] transition-colors" placeholder="tu@email.com" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[12px] text-white/60 uppercase tracking-widest">Asunto</label>
                <input type="text" className="bg-[#050505] border border-white/10 rounded-md py-3 px-4 text-[13px] text-white focus:outline-none focus:border-[#FF6044] transition-colors" placeholder="Asunto de tu mensaje (ej: Consulta o Hazte Socio)" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[12px] text-white/60 uppercase tracking-widest">Mensaje</label>
                <textarea rows="5" className="bg-[#050505] border border-white/10 rounded-md py-3 px-4 text-[13px] text-white focus:outline-none focus:border-[#FF6044] transition-colors resize-none" placeholder="¿En qué podemos ayudarte?"></textarea>
              </div>
              <button className="bg-[#FF6044] hover:bg-[#ff4a2b] text-white px-8 py-3.5 rounded text-[14px] font-medium transition-colors self-start mt-2">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="relative z-10 bg-[#050505] pt-12 pb-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12H9" stroke="#FF6044" strokeWidth="2"/>
              <path d="M15 12H20" stroke="#FF6044" strokeWidth="2"/>
              <path d="M12 4V9" stroke="#FF6044" strokeWidth="2"/>
              <path d="M12 15V20" stroke="#FF6044" strokeWidth="2"/>
              <circle cx="12" cy="12" r="2" stroke="#FF6044" strokeWidth="2"/>
              <circle cx="4" cy="12" r="2" fill="#FF6044"/>
              <circle cx="20" cy="12" r="2" fill="#FF6044"/>
            </svg>
            <span className="font-sans font-bold tracking-[0.2em] text-[15px] uppercase">COTEIN LTDA</span>
          </div>
          <p className="text-[12px] text-white/60">
            © 2026 COTEIN LTDA. Matrícula 40271. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
