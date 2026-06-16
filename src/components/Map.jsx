export default function Map() {
  return (
    <div className="glass-panel" style={{ overflow: "hidden", height: "400px", borderRadius: "var(--border-radius)" }}>
      <iframe
        title="Ubicación de COTEIN"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.44367005282!2d-58.50333830490906!3d-34.61566245778873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1718000000000!5m2!1ses-419!2sar"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
