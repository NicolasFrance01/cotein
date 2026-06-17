import ContactForm from "../../components/ContactForm";
import Map from "../../components/Map";
import { MapPin, Phone, Mail } from "lucide-react";
import AnimatedSection from "../../components/AnimatedSection";

export const metadata = {
  title: "Contacto | COTEIN LTDA",
  description: "Comunícate con COTEIN para consultas, presupuestos o soporte técnico.",
};

export default function Contacto() {
  return (
    <div style={{ paddingTop: "120px", paddingBottom: "4rem" }}>
      <div className="container">
        <AnimatedSection>
          <h1 className="section-title" style={{ letterSpacing: "-0.02em" }}>Contacto</h1>
        </AnimatedSection>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem" }}>
          <AnimatedSection delay={0.1}>
            <div>
            <h2 style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>Envíanos tu consulta</h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
              Completa el formulario y nuestro equipo de soporte te responderá a la brevedad posible.
            </p>
            <ContactForm />
          </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
          <div>
            <h2 style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>Información de Contacto</h2>
            <div className="glass-panel" style={{ padding: "2rem", marginBottom: "2rem" }}>
              <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
                <div style={{ color: "var(--text-primary)", display: "flex", alignItems: "center" }}><MapPin size={24} /></div>
                <div>
                  <h4 style={{ fontWeight: 600 }}>Dirección</h4>
                  <p style={{ color: "var(--text-secondary)" }}>Buenos Aires, Argentina (Mat. 40271)</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
                <div style={{ color: "var(--text-primary)", display: "flex", alignItems: "center" }}><Phone size={24} /></div>
                <div>
                  <h4 style={{ fontWeight: 600 }}>Teléfono</h4>
                  <p style={{ color: "var(--text-secondary)" }}>+54 11 0000-0000</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "1rem" }}>
                <div style={{ color: "var(--text-primary)", display: "flex", alignItems: "center" }}><Mail size={24} /></div>
                <div>
                  <h4 style={{ fontWeight: 600 }}>Correo</h4>
                  <p style={{ color: "var(--text-secondary)" }}>info@cotein.com.ar</p>
                </div>
              </div>
            </div>
            
            <h3 style={{ fontSize: "1.4rem", marginBottom: "1rem" }}>Nuestra Ubicación</h3>
            <Map />
          </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
