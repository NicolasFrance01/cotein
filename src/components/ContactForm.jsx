"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Enviando...");
    setTimeout(() => {
      setStatus("¡Mensaje enviado con éxito! Nos contactaremos a la brevedad.");
      e.target.reset();
    }, 1500);
  };

  return (
    <div className="glass-panel" style={{ padding: "2rem" }}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="name">Nombre Completo</label>
          <input type="text" id="name" required className="form-input" placeholder="Ej: Juan Pérez" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" required className="form-input" placeholder="juan@ejemplo.com" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="subject">Asunto</label>
          <input type="text" id="subject" required className="form-input" placeholder="Consulta sobre servicio técnico" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="message">Mensaje</label>
          <textarea id="message" required className="form-textarea" rows="5" placeholder="Escribe tu consulta aquí..."></textarea>
        </div>
        <button type="submit" className="btn-primary" style={{ width: "100%" }}>Enviar Mensaje</button>
        {status && <p style={{ marginTop: "1rem", textAlign: "center", color: "var(--accent-cyan)" }}>{status}</p>}
      </form>
    </div>
  );
}
