export const metadata = {
  title: "Nuestros Servicios | COTEIN LTDA",
  description: "Servicios profesionales en mantenimiento de equipos informáticos, redes y telecomunicaciones.",
};

export default function Servicios() {
  const servicios = [
    {
      title: "Mantenimiento Informático",
      desc: "Mantenimiento preventivo y correctivo de hardware y software para computadoras de escritorio, laptops y servidores.",
      icon: "💻"
    },
    {
      title: "Redes y Conectividad",
      desc: "Diseño, instalación y configuración de redes LAN/WAN, cableado estructurado y soluciones Wi-Fi corporativas.",
      icon: "🌐"
    },
    {
      title: "Telefonía y Telecomunicaciones",
      desc: "Instalación y mantenimiento de centrales telefónicas (PBX, IP) y equipos de radiocomunicación.",
      icon: "📞"
    },
    {
      title: "Cámaras de Seguridad (CCTV)",
      desc: "Sistemas de videovigilancia, instalación de cámaras IP y analógicas, configuración de DVR/NVR.",
      icon: "📹"
    },
    {
      title: "Soporte Técnico Especializado",
      desc: "Asistencia técnica remota y presencial para resolver incidencias de manera rápida y eficiente.",
      icon: "🛠️"
    },
    {
      title: "Asesoría IT",
      desc: "Consultoría tecnológica para optimizar los recursos informáticos de su empresa.",
      icon: "📊"
    }
  ];

  return (
    <div style={{ paddingTop: "120px", paddingBottom: "4rem" }}>
      <div className="container">
        <h1 className="section-title text-gradient-rainbow animate-fade-in">Nuestros Servicios</h1>
        <p style={{ textAlign: "center", color: "var(--text-secondary)", maxWidth: "800px", margin: "0 auto 4rem auto", fontSize: "1.1rem" }}>
          Brindamos soluciones integrales adaptadas a las necesidades tecnológicas de empresas, instituciones y particulares, garantizando el mejor desempeño de sus equipos.
        </p>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "2rem" }}>
          {servicios.map((s, index) => (
            <div key={index} className="glass-panel" style={{ padding: "2.5rem", transition: "transform 0.3s" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>{s.icon}</div>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "1rem", color: "var(--accent-cyan)" }}>{s.title}</h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: "1.7" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
