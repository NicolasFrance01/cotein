import Link from "next/link";
import { Monitor, Network, PhoneCall, Video, Wrench, BarChart, MapPin, Phone, Mail } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import ContactForm from "../components/ContactForm";
import MemberForm from "../components/MemberForm";
import Map from "../components/Map";

export default function Home() {
  const servicios = [
    {
      title: "Mantenimiento Informático",
      desc: "Mantenimiento preventivo y correctivo de hardware y software para computadoras de escritorio, laptops y servidores.",
      icon: <Monitor size={40} strokeWidth={1.5} />
    },
    {
      title: "Redes y Conectividad",
      desc: "Diseño, instalación y configuración de redes LAN/WAN, cableado estructurado y soluciones Wi-Fi corporativas.",
      icon: <Network size={40} strokeWidth={1.5} />
    },
    {
      title: "Telefonía y Telecomunicaciones",
      desc: "Instalación y mantenimiento de centrales telefónicas (PBX, IP) y equipos de radiocomunicación.",
      icon: <PhoneCall size={40} strokeWidth={1.5} />
    },
    {
      title: "Cámaras de Seguridad (CCTV)",
      desc: "Sistemas de videovigilancia, instalación de cámaras IP y analógicas, configuración de DVR/NVR.",
      icon: <Video size={40} strokeWidth={1.5} />
    },
    {
      title: "Soporte Técnico Especializado",
      desc: "Asistencia técnica remota y presencial para resolver incidencias de manera rápida y eficiente.",
      icon: <Wrench size={40} strokeWidth={1.5} />
    },
    {
      title: "Asesoría IT",
      desc: "Consultoría tecnológica para optimizar los recursos informáticos de su empresa.",
      icon: <BarChart size={40} strokeWidth={1.5} />
    }
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section id="inicio" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", paddingTop: "80px" }}>
        <AnimatedSection className="container">
          <div style={{ maxWidth: "800px" }}>
            <h1 style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)", fontWeight: 800, lineHeight: 1.05, marginBottom: "2rem", letterSpacing: "-0.03em" }}>
              Conectando el <br /> Futuro Hoy.
            </h1>
            <p style={{ fontSize: "1.25rem", color: "var(--text-secondary)", marginBottom: "3rem", maxWidth: "600px", lineHeight: 1.6 }}>
              Somos la cooperativa líder en servicio técnico y mantenimiento de equipos de telecomunicaciones e informática. Soluciones de alto rendimiento para tu negocio.
            </p>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              <a href="#servicios" className="btn-primary">Explorar Servicios</a>
              <a href="#contacto" className="btn-secondary">Hablemos</a>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ACERCA DE SECTION */}
      <section id="acerca-de" className="section" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr lg:1fr", gap: "4rem" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem" }}>
              <AnimatedSection style={{ flex: "1 1 400px" }}>
                <h2 style={{ fontSize: "3rem", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                  Más que técnicos, <br/> somos socios estratégicos.
                </h2>
              </AnimatedSection>
              
              <AnimatedSection style={{ flex: "1 1 400px" }} delay={0.2}>
                <div style={{ paddingLeft: "1rem", borderLeft: "2px solid rgba(255,255,255,0.1)" }}>
                  <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem", fontSize: "1.1rem" }}>
                    COTEIN LTDA nació con el propósito de agrupar a profesionales del sector para brindar soluciones tecnológicas de alta calidad. Con matrícula número 40271, nos basamos en los principios cooperativos, enfocados en la excelencia y el trabajo en equipo.
                  </p>
                  <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>
                    Nuestra visión es ser la cooperativa tecnológica líder a nivel nacional, reconocida por la innovación, confiabilidad y el compromiso con el desarrollo sustentable de nuestros socios y la comunidad.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS SECTION (LISTA ASIMÉTRICA) */}
      <section id="servicios" className="section" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <AnimatedSection>
            <h2 style={{ fontSize: "4rem", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "4rem" }}>Nuestros Servicios</h2>
          </AnimatedSection>
          
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            {servicios.map((s, index) => (
              <AnimatedSection key={index} delay={0.1}>
                <div className="service-list-item">
                  <div className="service-list-icon">
                    {s.icon}
                  </div>
                  <div className="service-list-content">
                    <h3 className="service-list-title">{s.title}</h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", maxWidth: "800px" }}>{s.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* HAZTE SOCIO SECTION (BANNER FULL WIDTH) */}
      <section id="hazte-socio" className="section" style={{ backgroundColor: "#050505", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <AnimatedSection style={{ flex: "1 1 400px" }}>
              <h2 style={{ fontSize: "3.5rem", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "2rem" }}>
                Únete a la Revolución Tecnológica.
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem", marginBottom: "2rem" }}>
                Forma parte de una red de profesionales donde el esfuerzo conjunto multiplica las oportunidades de crecimiento y desarrollo.
              </p>
              <ul style={{ listStyle: "none", marginBottom: "3rem", color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "1rem" }}><span style={{ color: "var(--text-primary)" }}>—</span> Trabajo Colaborativo</li>
                <li style={{ display: "flex", alignItems: "center", gap: "1rem" }}><span style={{ color: "var(--text-primary)" }}>—</span> Capacitación Continua</li>
                <li style={{ display: "flex", alignItems: "center", gap: "1rem" }}><span style={{ color: "var(--text-primary)" }}>—</span> Participación Democrática</li>
              </ul>
            </AnimatedSection>
            
            <AnimatedSection style={{ flex: "1 1 400px" }} delay={0.2}>
              <div className="glass-panel" style={{ padding: "3rem" }}>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "2rem", fontWeight: 600 }}>Solicitud de Asociación</h3>
                <MemberForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CONTACTO SECTION */}
      <section id="contacto" className="section">
        <div className="container">
          <AnimatedSection>
            <h2 style={{ fontSize: "4rem", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "4rem" }}>Contacto</h2>
          </AnimatedSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem" }}>
            <AnimatedSection delay={0.1}>
              <h3 style={{ fontSize: "1.8rem", marginBottom: "2rem", fontWeight: 600 }}>Hablemos de tu proyecto</h3>
              <p style={{ color: "var(--text-secondary)", marginBottom: "3rem", fontSize: "1.1rem" }}>
                Completa el formulario y nuestro equipo de soporte te responderá a la brevedad posible para brindarte la mejor solución.
              </p>
              <ContactForm />
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginBottom: "3rem" }}>
                <div style={{ display: "flex", gap: "1.5rem" }}>
                  <div style={{ color: "var(--text-primary)" }}><MapPin size={32} strokeWidth={1.5} /></div>
                  <div>
                    <h4 style={{ fontWeight: 600, fontSize: "1.2rem", marginBottom: "0.5rem" }}>Dirección</h4>
                    <p style={{ color: "var(--text-secondary)" }}>Buenos Aires, Argentina (Mat. 40271)</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "1.5rem" }}>
                  <div style={{ color: "var(--text-primary)" }}><Phone size={32} strokeWidth={1.5} /></div>
                  <div>
                    <h4 style={{ fontWeight: 600, fontSize: "1.2rem", marginBottom: "0.5rem" }}>Teléfono</h4>
                    <p style={{ color: "var(--text-secondary)" }}>+54 11 0000-0000</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "1.5rem" }}>
                  <div style={{ color: "var(--text-primary)" }}><Mail size={32} strokeWidth={1.5} /></div>
                  <div>
                    <h4 style={{ fontWeight: 600, fontSize: "1.2rem", marginBottom: "0.5rem" }}>Correo</h4>
                    <p style={{ color: "var(--text-secondary)" }}>info@cotein.com.ar</p>
                  </div>
                </div>
              </div>
              
              <div style={{ height: "300px", borderRadius: "var(--border-radius)", overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)" }}>
                <Map />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
