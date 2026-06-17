import Link from "next/link";
import { Wrench, Wifi, Users } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

export default function Home() {
  return (
    <>
      <section className="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", paddingTop: "80px", backgroundColor: "transparent" }}>
        <AnimatedSection className="container" style={{ zIndex: 1, textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(3rem, 5vw, 5rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>
            Conectando y <br />
            <span>Manteniendo el Futuro</span>
          </h1>
          <p style={{ fontSize: "1.25rem", color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto 3rem auto" }}>
            Somos la cooperativa líder en servicio técnico y mantenimiento de equipos de telecomunicaciones e informática.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/servicios" className="btn-primary">Nuestros Servicios</Link>
            <Link href="/contacto" className="btn-secondary">Contáctanos</Link>
          </div>
        </AnimatedSection>
      </section>

      <section className="section" style={{ backgroundColor: "transparent" }}>
        <AnimatedSection className="container" delay={0.2}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            <div className="glass-panel" style={{ padding: "3rem 2rem", textAlign: "center" }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem", color: "var(--text-primary)" }}><Wrench size={48} strokeWidth={1} /></div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", fontWeight: 600 }}>Servicio Técnico</h3>
              <p style={{ color: "var(--text-secondary)" }}>Reparación y mantenimiento especializado de equipos informáticos con los más altos estándares.</p>
            </div>
            <div className="glass-panel" style={{ padding: "3rem 2rem", textAlign: "center" }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem", color: "var(--text-primary)" }}><Wifi size={48} strokeWidth={1} /></div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", fontWeight: 600 }}>Telecomunicaciones</h3>
              <p style={{ color: "var(--text-secondary)" }}>Instalación, configuración y mantenimiento de redes y equipos de comunicación corporativa.</p>
            </div>
            <div className="glass-panel" style={{ padding: "3rem 2rem", textAlign: "center", border: "1px solid var(--border-color)" }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem", color: "var(--text-primary)" }}><Users size={48} strokeWidth={1} /></div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", fontWeight: 600 }}>Sé Parte de COTEIN</h3>
              <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}>Únete a nuestra cooperativa y disfruta de los beneficios del trabajo colaborativo.</p>
              <Link href="/hazte-socio" className="btn-primary" style={{ display: "inline-block" }}>Asociarse</Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
