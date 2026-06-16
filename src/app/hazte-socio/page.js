import MemberForm from "../../components/MemberForm";

export const metadata = {
  title: "Hazte Socio | COTEIN LTDA",
  description: "Únete a COTEIN, cooperativa de trabajo en telecomunicaciones e informática.",
};

export default function HazteSocio() {
  return (
    <div style={{ paddingTop: "120px", paddingBottom: "4rem" }}>
      <div className="container">
        <h1 className="section-title text-gradient-rainbow animate-fade-in">Hazte Socio</h1>
        
        <div style={{ display: "grid", gridTemplateColumns: "1fr lg:2fr", gap: "3rem" }}>
          <div>
            <h2 style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>Beneficios de unirte a COTEIN</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div className="glass-panel" style={{ padding: "1.5rem" }}>
                <h4 style={{ color: "var(--accent-cyan)", marginBottom: "0.5rem" }}>Trabajo Colaborativo</h4>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>Forma parte de una red de profesionales donde el esfuerzo conjunto multiplica las oportunidades de crecimiento.</p>
              </div>
              <div className="glass-panel" style={{ padding: "1.5rem" }}>
                <h4 style={{ color: "var(--accent-cyan)", marginBottom: "0.5rem" }}>Capacitación Continua</h4>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>Acceso a talleres, certificaciones y actualización tecnológica constante para mantenerte a la vanguardia.</p>
              </div>
              <div className="glass-panel" style={{ padding: "1.5rem" }}>
                <h4 style={{ color: "var(--accent-cyan)", marginBottom: "0.5rem" }}>Participación Democrática</h4>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>Como socio cooperativista, tu voz y voto son fundamentales en la toma de decisiones de la organización.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>Formulario de Solicitud</h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
              Completa el siguiente formulario para iniciar el proceso de asociación. Nuestro equipo evaluará tu solicitud y se contactará contigo.
            </p>
            <MemberForm />
          </div>
        </div>
      </div>
    </div>
  );
}
