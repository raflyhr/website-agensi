const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Agency Kreatif</h3>
          <p>Membantu bisnis lokal go digital dengan website profesional.</p>
        </div>
        <div className="footer-section">
          <h4>Hubungi Kami</h4>
          <p>Email: hello@agencykreatif.com</p>
          <p>Telepon: +62 812 3456 7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Agency Kreatif. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
