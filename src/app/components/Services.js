import "./services.css";

export default function Services() {
  const services = [
    "Aile Hukuku",
    "Ticaret Hukuku",
    "Ceza Hukuku",
    "İcra ve İflas Hukuku",
    "İş Hukuku",
    "Gayrimenkul Hukuku",
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2>Çalışma Alanlarımız</h2>
        <div className="services-grid">
          {services.map((item, index) => (
            <div key={index} className="service-card">
              <h3>{item}</h3>
              <p>
                {item} kapsamında müvekkillerimize güncel mevzuat ve
                uygulamalar ışığında kapsamlı danışmanlık ve temsil hizmeti
                sunmaktayız.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
