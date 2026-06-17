"use client";
import { Monitor, Network, PhoneCall, Video, Wrench, BarChart, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ParticleBackground from "../components/ParticleBackground";

const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    viewport={{ once: false, amount: 0.1 }}
    transition={{ duration: 0.6, delay: delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const servicios = [
    {
      title: "Mantenimiento Informático",
      desc: "Mantenimiento preventivo y correctivo de hardware y software para computadoras de escritorio, laptops y servidores.",
      icon: <Monitor size={48} strokeWidth={1} />,
    },
    {
      title: "Redes y Conectividad",
      desc: "Diseño, instalación y configuración de redes LAN/WAN, cableado estructurado y soluciones Wi-Fi corporativas.",
      icon: <Network size={48} strokeWidth={1} />,
    },
    {
      title: "Telefonía y Telecomunicaciones",
      desc: "Instalación y mantenimiento de centrales telefónicas (PBX, IP) y equipos de radiocomunicación.",
      icon: <PhoneCall size={48} strokeWidth={1} />,
    },
    {
      title: "Cámaras de Seguridad (CCTV)",
      desc: "Sistemas de videovigilancia, instalación de cámaras IP y analógicas, configuración de DVR/NVR.",
      icon: <Video size={48} strokeWidth={1} />,
    },
    {
      title: "Soporte Técnico Especializado",
      desc: "Asistencia técnica remota y presencial para resolver incidencias de manera rápida y eficiente.",
      icon: <Wrench size={48} strokeWidth={1} />,
    },
    {
      title: "Asesoría IT",
      desc: "Consultoría tecnológica para optimizar los recursos informáticos de su empresa.",
      icon: <BarChart size={48} strokeWidth={1} />,
    },
  ];

  return (
    <main className="bg-black text-white selection:bg-blue-500/30">
      {/* HERO SECTION */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-tech pt-20">
        <ParticleBackground />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-tight">
              EL FUTURO <br /> DE LA <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">TECNOLOGÍA</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 font-light">
              Soluciones innovadoras para empresas e individuos. Conectividad, soporte y mantenimiento liderado por expertos de COTEIN.
            </p>
          </FadeIn>
          <FadeIn delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#servicios" className="btn-primary flex items-center gap-2">
              Descubrir más <ArrowRight size={18} />
            </a>
            <a href="#contacto" className="btn-secondary">
              Contactar
            </a>
          </FadeIn>
        </div>
      </section>

      {/* NOSOTROS SECTION */}
      <section id="nosotros" className="py-24 bg-black border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <FadeIn>
                <h2 className="text-sm text-blue-500 font-bold tracking-widest uppercase mb-4">Sobre Nosotros</h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">Socios estratégicos para tu crecimiento tecnológico.</h3>
              </FadeIn>
            </div>
            <div className="lg:w-1/2">
              <FadeIn delay={0.2}>
                <p className="text-lg text-gray-400 mb-6 font-light">
                  COTEIN LTDA (Mat. 40271) nace del esfuerzo cooperativo de profesionales del sector informático y de telecomunicaciones. Nuestro objetivo es proveer soluciones integrales, eficientes y seguras.
                </p>
                <p className="text-lg text-gray-400 font-light">
                  Al elegirnos, eliges calidad, compromiso y una visión enfocada al futuro. Trabajamos codo a codo contigo para asegurarnos de que tu infraestructura tecnológica esté siempre a la vanguardia.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS SECTION */}
      <section id="servicios" className="py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-20">
            <h2 className="text-sm text-blue-500 font-bold tracking-widest uppercase mb-4">Soluciones</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Nuestros Servicios</h3>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicios.map((s, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-[#111] border border-white/5 p-10 hover:bg-[#151515] hover:border-blue-500/30 transition-all duration-500 group h-full flex flex-col">
                  <div className="text-blue-500 mb-8 group-hover:scale-110 group-hover:text-white transition-transform duration-500">
                    {s.icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-4 tracking-tight">{s.title}</h4>
                  <p className="text-gray-400 font-light flex-grow leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO SECTION */}
      <section id="contacto" className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-5/12">
              <FadeIn>
                <h2 className="text-sm text-blue-500 font-bold tracking-widest uppercase mb-4">Contacto</h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight leading-tight">Trabajemos<br />juntos.</h3>
                
                <div className="space-y-8 mt-12">
                  <div className="flex items-start gap-4">
                    <div className="text-blue-500 mt-1"><MapPin size={24} /></div>
                    <div>
                      <h5 className="font-bold mb-1 text-lg">Ubicación</h5>
                      <p className="text-gray-400 font-light">Buenos Aires, Argentina (Mat. 40271)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-blue-500 mt-1"><Phone size={24} /></div>
                    <div>
                      <h5 className="font-bold mb-1 text-lg">Teléfono</h5>
                      <p className="text-gray-400 font-light">+54 11 0000-0000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-blue-500 mt-1"><Mail size={24} /></div>
                    <div>
                      <h5 className="font-bold mb-1 text-lg">Email</h5>
                      <p className="text-gray-400 font-light">info@cotein.com.ar</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
            
            <div className="lg:w-7/12">
              <FadeIn delay={0.2}>
                <form className="bg-[#111] p-10 border border-white/5 flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm text-gray-400 uppercase tracking-widest font-medium">Nombre</label>
                      <input type="text" className="bg-black border border-gray-800 p-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Tu nombre" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm text-gray-400 uppercase tracking-widest font-medium">Email</label>
                      <input type="email" className="bg-black border border-gray-800 p-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="tu@email.com" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-400 uppercase tracking-widest font-medium">Asunto</label>
                    <input type="text" className="bg-black border border-gray-800 p-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Asunto de tu mensaje" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-400 uppercase tracking-widest font-medium">Mensaje</label>
                    <textarea rows="5" className="bg-black border border-gray-800 p-4 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="¿En qué podemos ayudarte?"></textarea>
                  </div>
                  <button type="button" className="btn-primary mt-4 self-start">
                    Enviar Mensaje
                  </button>
                </form>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black py-8 border-t border-white/10 text-center">
        <p className="text-gray-500 text-sm font-light">© 2026 COTEIN LTDA. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
