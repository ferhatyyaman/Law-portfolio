import "./contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h1>İletişime Geçin</h1>
        <p>Bize ulaşmak için aşağıdaki formu doldurabilirsiniz.</p>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Ad Soyad</label>
            <input type="text" id="name" placeholder="Adınızı Soyadınızı giriniz" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-posta</label>
            <input type="email" id="email" placeholder="ornek@mail.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Konu</label>
            <input type="text" id="subject" placeholder="Konu başlığı" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mesajınız</label>
            <textarea id="message" rows="5" placeholder="Mesajınızı buraya yazın..." required></textarea>
          </div>

          <button type="submit" className="submit-btn">Gönder</button>
        </form>
      </div>
    </section>
  );
}
