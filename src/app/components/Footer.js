import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Sol kısım - Logo + Sosyal Medya */}
        <div className="footer-left">
          <h2 className="footer-logo">Hukuk Bürosu</h2>
        </div>

        {/* Orta kısım - Menü */}
        <div className="footer-middle">
          <h3>Sayfalar</h3>
          <ul>
            <li><a href="#about">Hakkımızda</a></li>
            <li><a href="#services">Hizmetlerimiz</a></li>
            <li><a href="#contact">İletişim</a></li>
          </ul>
        </div>

        {/* Sağ kısım - İletişim */}
        <div className="footer-right">
          <h3>İletişim</h3>
          <p><strong>Adres:</strong> Levent, İstanbul</p>
          <p><strong>Tel:</strong> +90 212 123 45 67</p>
          <p><strong>E-posta:</strong> info@hukukdanismanlik.com</p>
        </div>
      </div>

      {/* En alt copyright */}
      <div className="footer-bottom">
        <p>© 2025 Hukuk Bürosu - Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  );
}
