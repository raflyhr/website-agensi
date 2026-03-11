import { useState } from "react";
import { ExternalLink, Globe, ChevronRight, Award, MessageCircle, Star, Rocket, Layers, Users } from "lucide-react";

interface PortfolioItem {
  name: string;
  category: string;
  description: string;
  url?: string;
  color: string;
  badgeColor: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    name: "rscarolus.or.id",
    category: "Healthcare",
    description: "Website rumah sakit dengan sistem informasi pasien, jadwal dokter, dan portal layanan medis online.",
    url: "https://rscarolus.or.id",
    color: "from-blue-500/10 to-blue-600/10",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    name: "proban.co.id",
    category: "Automotive",
    description: "Platform perdagangan spare part otomotif dengan katalog produk, harga grosir, dan sistem pemesanan.",
    url: "https://proban.co.id",
    color: "from-purple-500/10 to-purple-600/10",
    badgeColor: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  },
  {
    name: "kingsmenindonesia.co.id",
    category: "Production House",
    description: "Website production house profesional menampilkan portofolio film, iklan, dan layanan kreatif.",
    url: "https://kingsmenindonesia.co.id",
    color: "from-emerald-500/10 to-emerald-600/10",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  },
  {
    name: "hyundaiinternusa.com",
    category: "Automotive",
    description: "Website dealer resmi Hyundai dengan showcase kendaraan, simulasi kredit, dan booking test drive.",
    url: "https://hyundaiinternusa.com",
    color: "from-indigo-500/10 to-indigo-600/10",
    badgeColor: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
  },
  {
    name: "plnindonesiapowerrenewables.co.id",
    category: "Energy",
    description: "Portal energi terbarukan PLN Indonesia Power dengan dashboard proyek dan laporan keberlanjutan.",
    url: "https://plnindonesiapowerrenewables.co.id",
    color: "from-orange-500/10 to-orange-600/10",
    badgeColor: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  },
  {
    name: "Nusify Ecosystem",
    category: "Company Profile",
    description: "Website agensi digital Nusify — showcase layanan, portofolio klien, dan sistem manajemen konten.",
    color: "from-pink-500/10 to-pink-600/10",
    badgeColor: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400",
  },
  {
    name: "toko-material.co.id",
    category: "E-Commerce",
    description: "Toko online material bangunan dengan fitur keranjang belanja, pembayaran online, dan tracking pesanan.",
    color: "from-yellow-500/10 to-yellow-600/10",
    badgeColor: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  },
  {
    name: "kliniksehat-group.com",
    category: "Healthcare",
    description: "Website jaringan klinik kesehatan dengan sistem pendaftaran pasien online dan konsultasi dokter.",
    color: "from-blue-500/10 to-cyan-600/10",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    name: "PropertyPrime Indonesia",
    category: "Company Profile",
    description: "Landing page properti premium dengan virtual tour, galeri unit, dan form peminatan investasi.",
    color: "from-slate-500/10 to-gray-600/10",
    badgeColor: "bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-400",
  },
];

const categories = ["Semua", "Healthcare", "Automotive", "E-Commerce", "Company Profile", "Energy", "Production House"];

const stats = [
  { value: "500+", label: "Website Aktif", icon: <Globe className="w-5 h-5" /> },
  { value: "50+", label: "Industri", icon: <Layers className="w-5 h-5" /> },
  { value: "5.0", label: "Google Rating", icon: <Star className="w-5 h-5" /> },
  { value: "3+", label: "Tahun Pengalaman", icon: <Rocket className="w-5 h-5" /> },
];

const Portofolio = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filtered =
    activeCategory === "Semua"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-full h-[500px] pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-5%] w-[35%] h-[80%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute top-[10%] right-[-5%] w-[30%] h-[60%] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      {/* ─── Hero Header ─────────────────────────────── */}
      <header className="pt-32 pb-16 px-6 max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/30 text-indigo-600 dark:text-indigo-400 text-sm font-bold tracking-wide uppercase animate-fade-in">
          <Award className="w-4 h-4 mr-2" />
          Trusted by 500+ Clients
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
          Portfolio{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue via-indigo-500 to-brand-purple">
            Nusify
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
          Lebih dari <span className="font-bold text-slate-900 dark:text-white">500 website</span> telah kami bangun untuk klien dari berbagai industri di seluruh Indonesia.
        </p>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 p-5 flex flex-col items-center gap-2 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-brand-blue">
                {stat.icon}
              </div>
              <span className="text-2xl font-black text-slate-900 dark:text-white">{stat.value}</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </header>

      {/* ─── Filter Tab ───────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 mb-10">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-lg shadow-blue-500/25 scale-105"
                  : "bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-800 hover:border-brand-blue/50 hover:text-brand-blue"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ─── Portfolio Grid ───────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-slate-400 dark:text-slate-600">
            <Users className="w-16 h-16 mx-auto mb-4 opacity-30" />
            <p className="font-bold text-lg">Belum ada portfolio di kategori ini.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden cursor-pointer"
              >
                {/* Background Glow on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10 space-y-5">
                  {/* Top Row */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                      <Globe className="w-6 h-6 text-brand-blue" />
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${item.badgeColor}`}>
                      {item.category}
                    </span>
                  </div>

                  {/* Name & Desc */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white break-words leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center text-xs font-bold text-slate-400 group-hover:text-brand-blue dark:group-hover:text-blue-400 transition-colors">
                      Visit Project{" "}
                      <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-300 hover:text-brand-purple transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Result Count */}
        <p className="text-center mt-8 text-sm text-slate-400 font-medium">
          Menampilkan <span className="text-slate-700 dark:text-slate-300 font-bold">{filtered.length}</span> dari{" "}
          <span className="text-slate-700 dark:text-slate-300 font-bold">{portfolioItems.length}</span> portfolio
        </p>
      </section>

      {/* ─── CTA Section ──────────────────────────────── */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto relative rounded-[3.5rem] bg-gradient-to-br from-brand-blue via-indigo-600 to-brand-purple p-12 md:p-20 overflow-hidden text-center text-white shadow-2xl shadow-blue-500/30">
          {/* Decorative circles */}
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-bold">
              <MessageCircle className="w-4 h-4 mr-2" />
              Konsultasi Gratis
            </div>

            <h2 className="text-3xl md:text-5xl font-black mb-5 leading-tight">
              Siap Punya Website Profesional? <br />
              <span className="text-white/80">Mari Diskusi Sekarang!</span>
            </h2>

            <p className="text-white/70 mb-10 max-w-xl mx-auto text-base leading-relaxed">
              Kami siap membantu wujudkan website impian bisnis Anda. Konsultasi pertama gratis, tanpa biaya tersembunyi.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/6288980840381"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-10 py-4 bg-white text-blue-600 font-black rounded-2xl shadow-xl hover:scale-[1.05] active:scale-95 transition-all duration-300 text-base"
              >
                <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Hubungi via WhatsApp
              </a>
              <a
                href="/pricing"
                className="flex items-center gap-2 px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold rounded-2xl hover:bg-white/20 transition-all duration-300 text-base"
              >
                Lihat Harga
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portofolio;
