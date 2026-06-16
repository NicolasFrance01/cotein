import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", paddingTop: "80px" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "radial-gradient(circle at center, rgba(0, 85, 255, 0.15) 0%, transparent 70%)", zIndex: 0 }}></div>
        <div className="container animate-fade-in" style={{ zIndex: 1, textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(3rem, 5vw, 5rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Conectando y <br />
            <span className="text-gradient">Manteniendo el Futuro</span>
          </h1>
          <p style={{ fontSize: "1.25rem", color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto 3rem auto" }}>
            Somos la cooperativa líder en servicio técnico y mantenimiento de equipos de telecomunicaciones e informática.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/servicios" className="btn-primary">Nuestros Servicios</Link>
            <Link href="/contacto" className="btn-secondary">Contáctanos</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            <div className="glass-panel" style={{ padding: "3rem 2rem", textAlign: "center" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🛠️</div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Servicio Técnico</h3>
              <p style={{ color: "var(--text-secondary)" }}>Reparación y mantenimiento especializado de equipos informáticos con los más altos estándares.</p>
            </div>
            <div className="glass-panel" style={{ padding: "3rem 2rem", textAlign: "center" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📡</div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Telecomunicaciones</h3>
              <p style={{ color: "var(--text-secondary)" }}>Instalación, configuración y mantenimiento de redes y equipos de comunicación corporativa.</p>
            </div>
            <div className="glass-panel" style={{ padding: "3rem 2rem", textAlign: "center", border: "1px solid var(--accent-cyan)" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🤝</div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--accent-cyan)" }}>Sé Parte de COTEIN</h3>
              <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}>Únete a nuestra cooperativa y disfruta de los beneficios del trabajo colaborativo.</p>
              <Link href="/hazte-socio" className="btn-primary" style={{ display: "inline-block" }}>Asociarse</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
