import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <h1>Bangun Identitas Digital Bisnis Anda</h1>
        <p>Kami adalah agency pembuatan website profesional untuk Bisnis, Startup, dan UMKM.</p>
        <Link to="/contact" className="btn-cta">Mulai Proyek Anda</Link>
      </section>
      <section className="services-summary">
        <h2>Layanan Kami</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Company Profile</h3>
          </div>
          <div className="service-card">
            <h3>Toko Online</h3>
          </div>
        </div>
        <Link to="/services" className="btn-outline">Lihat Semua Layanan</Link>
      </section>
    </div>
  );
};

export default Home;
