export const metadata = {
  title: "Acerca de Nosotros | COTEIN LTDA",
  description: "Conoce más sobre COTEIN, nuestra historia, misión y visión como cooperativa de trabajo en telecomunicaciones e informática.",
};

export default function AcercaDe() {
  return (
    <div style={{ paddingTop: "120px" }}>
      <div className="container">
        <h1 className="section-title text-gradient-rainbow animate-fade-in">Acerca de Nosotros</h1>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", marginBottom: "4rem" }}>
          <div className="glass-panel" style={{ padding: "3rem 2rem" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "var(--accent-cyan)" }}>Nuestra Historia</h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>
              COTEIN LTDA (Cooperativa de Trabajo de Servicio Técnico y Mantenimiento de Equipos de Telecomunicaciones e Informática Limitada) nació con el propósito de agrupar a profesionales del sector para brindar soluciones tecnológicas de alta calidad.
            </p>
            <p style={{ color: "var(--text-secondary)" }}>
              Con matrícula número 40271, nos enorgullece ser una organización basada en los principios cooperativos, enfocada en la excelencia y el trabajo en equipo.
            </p>
          </div>
          
          <div className="glass-panel" style={{ padding: "3rem 2rem" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "var(--accent-cyan)" }}>Nuestra Misión</h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>
              Proveer servicios técnicos y de mantenimiento de primer nivel, asegurando el óptimo funcionamiento de las infraestructuras de telecomunicaciones e informática de nuestros clientes.
            </p>
            <h2 style={{ fontSize: "2rem", margin: "2rem 0 1.5rem 0", color: "var(--accent-cyan)" }}>Nuestra Visión</h2>
            <p style={{ color: "var(--text-secondary)" }}>
              Ser la cooperativa tecnológica líder a nivel nacional, reconocida por la innovación, confiabilidad y el compromiso con el desarrollo sustentable de nuestros socios y la comunidad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
