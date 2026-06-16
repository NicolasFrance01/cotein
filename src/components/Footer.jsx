export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--bg-secondary)", padding: "4rem 0 2rem 0", marginTop: "auto" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
        <div>
          <h3 className="text-gradient-rainbow" style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>CO.TE.IN.</h3>
          <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>
            Cooperativa de Trabajo de Servicio Técnico y Mantenimiento de Equipos de Telecomunicaciones e Informática Limitada.
          </p>
          <p style={{ color: "var(--text-secondary)", fontWeight: "bold" }}>MAT. 40271</p>
        </div>
        
        <div>
          <h4 style={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}>Enlaces Rápidos</h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <li><a href="/">Inicio</a></li>
            <li><a href="/acerca-de">Acerca de Nosotros</a></li>
            <li><a href="/servicios">Servicios</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>
        
        <div>
          <h4 style={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}>Contacto</h4>
          <p style={{ color: "var(--text-secondary)", marginBottom: "0.5rem" }}>📍 [Dirección de la cooperativa]</p>
          <p style={{ color: "var(--text-secondary)", marginBottom: "0.5rem" }}>📞 [Número de teléfono]</p>
          <p style={{ color: "var(--text-secondary)" }}>✉️ [Correo electrónico]</p>
        </div>
      </div>
      
      <div style={{ textAlign: "center", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.1)", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
        <p>&copy; {new Date().getFullYear()} COTEIN LTDA. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
