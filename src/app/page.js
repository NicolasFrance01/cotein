"use client";
import { Cloud, Cpu, Network, ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import ParticleBackground from "../components/ParticleBackground";
import AnimatedCounter from "../components/AnimatedCounter";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
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
      
      {/* BACKGROUND PARTICLES FOR HERO & NUMBERS */}
      <div className="absolute top-0 left-0 w-full h-[140vh] overflow-hidden opacity-50 z-0">
         <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-10" />
         <ParticleBackground />
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative z-10 pt-48 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <motion.div 
          className="md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h1 className="text-6xl md:text-7xl lg:text-[85px] leading-[1.1] text-vista-serif mb-8">
            EN ANÁLISIS<br />DE DATOS
          </h1>
          <p className="text-[15px] leading-relaxed text-white/80 max-w-xs mb-8">
            Usa los datos para obtener una vista de 360 grados de tu negocio
          </p>
          <button className="bg-[#FF6044] hover:bg-[#ff4a2b] text-white px-8 py-3.5 rounded text-[14px] font-medium transition-colors">
            Más información
          </button>
        </motion.div>
      </section>

      {/* 2. CARDS SECTION */}
      <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
        <motion.div 
          className="md:w-5/12 pt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl lg:text-[54px] leading-[1.1] text-vista-serif mb-12">
            Deja que los datos lleven tu negocio al siguiente nivel
          </h2>
          <div className="border-l-2 border-[#FF6044] pl-6">
            <p className="text-[13px] leading-relaxed text-white/70 max-w-sm">
              Este es el espacio para dar la bienvenida a los visitantes del sitio. Capta su atención con un texto que explique claramente de qué trata el sitio. Puedes añadir una imagen o un video atractivos.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="md:w-7/12 flex flex-col gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Card 1 */}
          <motion.div variants={fadeInUp} className="vista-card rounded-xl p-10 md:mr-12">
            <div className="w-12 h-12 border border-white/20 rounded flex items-center justify-center mb-6">
              <Cloud className="text-white/80" strokeWidth={1} />
            </div>
            <h3 className="text-2xl text-vista-serif mb-4">Modernización del<br/>análisis en la nube</h3>
            <p className="text-[13px] text-white/60 leading-relaxed max-w-sm">
              Este es el espacio para describir tus áreas de especialización y los servicios específicos que ofreces a los clientes.
            </p>
          </motion.div>

          {/* Cards Group */}
          <div className="flex flex-col sm:flex-row gap-6 md:ml-12">
            {/* Card 2 */}
            <motion.div variants={fadeInUp} className="vista-card rounded-xl p-10 flex-1">
              <div className="w-12 h-12 border border-white/20 rounded flex items-center justify-center mb-6">
                <Cpu className="text-white/80" strokeWidth={1} />
              </div>
              <h3 className="text-2xl text-vista-serif mb-4">Versatilidad en la<br/>aplicación</h3>
              <p className="text-[13px] text-white/60 leading-relaxed">
                Este es el espacio para describir tus áreas de especialización y los servicios específicos que ofreces a los clientes.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeInUp} className="vista-card rounded-xl p-10 flex-1 mt-6 sm:mt-0">
              <div className="w-12 h-12 border border-white/20 rounded flex items-center justify-center mb-6">
                <Network className="text-white/80" strokeWidth={1} />
              </div>
              <h3 className="text-2xl text-vista-serif mb-4">Servicio integral de<br/>experiencia del<br/>cliente</h3>
              <p className="text-[13px] text-white/60 leading-relaxed">
                Este es el espacio para describir tus áreas de especialización y los servicios específicos que ofreces a los clientes.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 3. VELOCITY SECTION */}
      <section className="relative z-10 py-32 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <motion.div 
          className="md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl lg:text-[54px] leading-[1.1] text-vista-serif">
            Velocidad sin precedentes.<br/>Máxima fiabilidad.
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
              Este es el espacio para dar la bienvenida a los visitantes del sitio. Capta su atención con un texto que explique claramente de qué trata el sitio. Puedes añadir una imagen o un video atractivos.
            </p>
          </div>
          <button className="bg-[#FF6044] hover:bg-[#ff4a2b] text-white px-8 py-3.5 rounded text-[14px] font-medium transition-colors">
            Más información
          </button>
        </motion.div>
      </section>

      {/* 4. STATS SECTION */}
      <section className="relative z-10 py-32 text-center border-t border-white/5">
        <h3 className="text-2xl text-vista-serif mb-24">Orgullosos de nuestras cifras</h3>
        
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-12">
          {[
            { num: 15, label: "años de experiencia" },
            { num: 100, label: "años de experiencia" },
            { num: 22, label: "años de experiencia" },
            { num: 2600, label: "años de experiencia" },
            { num: 5, label: "años de experiencia" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex flex-col items-center"
            >
              <div className="text-6xl md:text-7xl lg:text-[90px] text-[#FF6044] font-light tracking-tighter mb-4 font-serif">
                <AnimatedCounter value={stat.num} delay={i * 0.1} />
              </div>
              <p className="text-[11px] uppercase tracking-wider text-white/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. PARTNERS SECTION */}
      <section className="relative z-10 py-24 border-t border-white/5 bg-[#050505]">
        <h3 className="text-xl text-vista-serif text-center mb-16">Nuestros socios</h3>
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-70">
          {/* Mock Logos for Partners */}
          <span className="text-2xl font-bold tracking-tighter italic">/// Imoge</span>
          <span className="text-xl font-bold flex items-center gap-2"><div className="w-4 h-4 bg-white transform rotate-45"/> Datox.Ai</span>
          <span className="text-2xl font-bold tracking-tight text-[#e2fca5]">⚡energator</span>
          <span className="text-2xl font-bold tracking-wider">Drivilux</span>
          <span className="text-xl font-bold italic tracking-widest">/// WHEELBU</span>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="relative z-10 py-40 vista-gradient-bg px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <h2 className="text-4xl md:text-5xl lg:text-[54px] text-vista-serif w-full md:w-1/2">
            ¿Quieres impulsar tu negocio?
          </h2>
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <div className="border-l-2 border-[#FF6044] pl-6 mb-8 max-w-md">
              <p className="text-[13px] leading-relaxed text-white/70">
                Este es el espacio para dar la bienvenida a los visitantes del sitio. Capta su atención con un texto que explique claramente de qué trata el sitio. Puedes añadir una imagen o un video atractivos.
              </p>
            </div>
            <button className="bg-[#FF6044] hover:bg-[#ff4a2b] text-white px-10 py-3.5 rounded text-[14px] font-medium transition-colors">
              Empezar
            </button>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="relative z-10 bg-[#050505] pt-24 pb-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 mb-24">
          
          {/* Left Column */}
          <div className="flex flex-col gap-12">
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
              <span className="font-sans font-bold tracking-[0.2em] text-[15px] uppercase">VISTA.IO</span>
            </div>
            
            <div className="flex flex-col gap-3">
              <a href="#" className="text-[13px] text-white/80 hover:text-white underline underline-offset-4">Soluciones</a>
              <a href="#" className="text-[13px] text-white/80 hover:text-white underline underline-offset-4">Visión</a>
              <a href="#" className="text-[13px] text-white/80 hover:text-white underline underline-offset-4">Blog</a>
              <a href="#" className="text-[13px] text-white/80 hover:text-white underline underline-offset-4 mt-2">Política de Privacidad</a>
              <a href="#" className="text-[13px] text-white/80 hover:text-white underline underline-offset-4">Declaración de accesibilidad</a>
            </div>

            <button className="bg-[#FF6044] hover:bg-[#ff4a2b] text-white px-8 py-3.5 rounded text-[14px] font-medium transition-colors w-fit mt-4">
              Empezar
            </button>
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            <h3 className="text-3xl text-vista-serif mb-6">Únete a nuestro boletín informativo</h3>
            <p className="text-[12px] text-white/70 mb-8">
              Mantente al día con nuestras últimas noticias y actualizaciones directamente en tu bandeja de entrada.
            </p>
            
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="text-[12px] text-white/90">Dirección de email *</label>
                <input 
                  type="email" 
                  placeholder="Ingresa tu correo electrónico" 
                  className="bg-transparent border-b border-white/30 py-2 text-[13px] text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>
              
              <label className="flex items-center gap-3 cursor-pointer group mt-2">
                <div className="w-4 h-4 border border-white/50 rounded-sm flex items-center justify-center group-hover:border-white transition-colors">
                  <Check size={12} className="opacity-0 text-white" />
                </div>
                <span className="text-[12px] text-white/80 group-hover:text-white transition-colors">
                  Sí, acepto recibir emails promocionales. *
                </span>
              </label>

              <button className="bg-[#FF6044] hover:bg-[#ff4a2b] text-white px-8 py-3.5 rounded text-[14px] font-medium transition-colors w-full md:w-1/2 mt-4">
                Unirme ahora
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mt-20">
          <div className="flex flex-col gap-4 text-[13px] text-white/70">
            <p className="font-bold text-white">+52-1-33-12345678<br/>info@misitio.com</p>
            <p>Av. Fray Antonio Alcalde 10. 44100<br/>Guadalajara, Jal., México</p>
          </div>
          
          <div className="flex flex-col gap-6 items-start md:items-end">
            <div className="flex gap-4">
               {/* Mock Social Icons */}
               <div className="w-6 h-6 rounded-full border border-white/50 flex items-center justify-center">f</div>
               <div className="w-6 h-6 rounded-full border border-white/50 flex items-center justify-center">in</div>
               <div className="w-6 h-6 rounded-full border border-white/50 flex items-center justify-center">tw</div>
            </div>
            <p className="text-[12px] text-white/60">
              © 2035 por VISTA.IO. Desarrollado y protegido por Wix
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
