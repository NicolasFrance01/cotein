"use client";
import { useState } from "react";

export default function MemberForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Procesando solicitud...");
    setTimeout(() => {
      setStatus("¡Solicitud enviada! Pronto nos comunicaremos para indicarte los pasos a seguir.");
      e.target.reset();
    }, 2000);
  };

  return (
    <div className="glass-panel" style={{ padding: "2rem" }}>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div className="form-group">
            <label className="form-label" htmlFor="firstName">Nombre(s)</label>
            <input type="text" id="firstName" required className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="lastName">Apellido(s)</label>
            <input type="text" id="lastName" required className="form-input" />
          </div>
        </div>
        
        <div className="form-group">
          <label className="form-label" htmlFor="dni">DNI / Documento</label>
          <input type="text" id="dni" required className="form-input" />
        </div>
        
        <div className="form-group">
          <label className="form-label" htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" required className="form-input" />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="phone">Teléfono de Contacto</label>
          <input type="tel" id="phone" required className="form-input" />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="profession">Especialidad / Profesión (Opcional)</label>
          <input type="text" id="profession" className="form-input" placeholder="Ej: Técnico en Informática" />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="motivation">¿Por qué deseas unirte a COTEIN?</label>
          <textarea id="motivation" required className="form-textarea" rows="4"></textarea>
        </div>

        <button type="submit" className="btn-primary" style={{ width: "100%", marginTop: "1rem" }}>Enviar Solicitud de Asociación</button>
        {status && <p style={{ marginTop: "1rem", textAlign: "center", color: "var(--accent-cyan)", fontWeight: "500" }}>{status}</p>}
      </form>
    </div>
  );
}
