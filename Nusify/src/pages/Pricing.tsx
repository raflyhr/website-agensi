import { useState } from "react";
import { Check, ChevronDown, ChevronRight, MapPin, Star, MessageCircle, Layout, Rocket } from "lucide-react";

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "Basic",
    price: "2.500.000",
    description: "Cocok untuk profil bisnis standar.",
    features: [
      "Gratis Domain .com / .my.id",
      "Kapasitas Hosting 1GB",
      "Halaman Landing Page",
      "5 Halaman Maksimal",
      "Optimasi SEO Dasar",
      "Satu Kali Revisi",
      "Waktu Kerja 7-10 Hari",
    ],
  },
  {
    name: "Pro",
    price: "3.500.000",
    description: "Pilihan terbaik untuk usaha berkembang.",
    features: [
      "Gratis Domain .com / .id",
      "Kapasitas Hosting 2GB",
      "Desain Custom Premium",
      "10 Halaman Maksimal",
      "Integrasi WhatsApp Chat",
      "Kecepatan Website diutamakan",
      "Tiga Kali Revisi",
      "Waktu Kerja 10-14 Hari",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Solusi lengkap untuk kebutuhan khusus.",
    isPopular: true,
    features: [
      "Semua Fitur Pro & Lebih",
      "Kapasitas Hosting & Resource Unlimitied",
      "Sistem Database Kompleks",
      "Integrasi API Pihak Ke-3",
      "Prioritas Maintenance",
      "Revisi Tak Terbatas",
      "Keamanan Website Tertinggi",
    ],
  },
];

const faqs = [
  {
    question: "Apa saja persiapan sebelum membuat website?",
    answer: "Anda cukup menyiapkan profil bisnis, logo, dan deskripsi layanan atau produk yang ingin ditampilkan. Kami akan membantu merapikan kontennya untuk Anda.",
  },
  {
    question: "Berapa biaya perpanjangan website setiap tahun?",
    answer: "Biaya perpanjangan meliputi biaya domain dan hosting. Harganya bervariasi mulai dari 500rb - 1.5jt per tahun tergantung paket yang dipilih.",
  },
  {
    question: "Berapa lama proses pembuatan website?",
    answer: "Tergantung tingkat kerumitan, biasanya berkisar antara 7 hingga 21 hari kerja.",
  },
  {
    question: "Apakah website saya akan muncul di Google?",
    answer: "Ya, semua paket kami sudah termasuk optimasi SEO dasar agar website Anda mudah ditemukan di mesin pencari.",
  },
];

const PortfolioCategory = ({ title, active, onClick }: { title: string, active: boolean, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
      active ? "bg-blue-600 text-white shadow-lg" : "text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
    }`}
  >
    {title}
  </button>
);

const Pricing = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState("Company Profile");

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-slate-900 overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-blue-50 dark:bg-blue-900/10 pointer-events-none -z-10"></div>
      
      {/* Hero Header */}
      <header className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6">
          Pricing <span className="text-blue-600 dark:text-blue-400">Plans</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Transparan, terpercaya, dan profesional.
        </p>
      </header>

      {/* Pricing Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-32">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-4">
            Kenapa harus pembuatan website di Nusify?
          </h2>
          <p className="text-slate-500 max-w-3xl mx-auto">
            Kami memberikan solusi website yang tidak hanya cantik secara visual, tapi juga performa tinggi dan ramah Google (SEO Friendly).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, idx) => (
            <div 
              key={idx}
              className={`relative flex flex-col p-8 rounded-[2.5rem] border transition-all duration-500 group overflow-hidden opacity-0 animate-fade-in-up ${
                plan.isPopular 
                  ? "bg-slate-900/90 dark:bg-slate-800/80 backdrop-blur-xl border-blue-500/50 text-white shadow-[0_20px_60px_-15px_rgba(59,130,246,0.3)] scale-105 z-10" 
                  : "bg-white/70 dark:bg-slate-800/50 backdrop-blur-lg border-slate-200/50 dark:border-slate-700/50 text-slate-900 dark:text-white hover:border-blue-400/30 hover:shadow-2xl hover:shadow-blue-900/10"
              }`}
              style={{ animationDelay: `${0.2 + idx * 0.1}s`, animationFillMode: "forwards" }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty("--x", `${x}px`);
                e.currentTarget.style.setProperty("--y", `${y}px`);
              }}
            >
              {/* Cursor Follow Glow */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(600px circle at var(--x) var(--y), ${plan.isPopular ? 'rgba(59, 130, 246, 0.15)' : 'rgba(99, 102, 241, 0.1)'}, transparent 40%)`
                }}
              />

              {/* Animated Border Gradient for Popular Plan */}
              {plan.isPopular && (
                <div className="absolute inset-0 rounded-[2.5rem] p-[1px] bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 opacity-50 -z-10 animate-gradient-border"></div>
              )}

              <div className="relative z-10">
                <h3 className={`text-sm font-black uppercase tracking-widest mb-4 italic flex items-center gap-2 ${plan.isPopular ? "text-blue-400" : "opacity-70"}`}>
                  {plan.name}
                  {plan.isPopular && <span className="inline-block px-2 py-0.5 rounded-full bg-blue-500/20 text-[10px] not-italic text-blue-300 border border-blue-500/30">Most Popular</span>}
                </h3>
                
                <div className="flex items-baseline gap-1 mb-6 group-hover:translate-x-1 transition-transform duration-300">
                  <span className="text-sm font-bold opacity-70">Rp</span>
                  <span className={`text-4xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r ${plan.isPopular ? "from-white to-blue-200" : "from-slate-900 to-slate-700 dark:from-white dark:to-slate-400"}`}>
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && <span className="text-sm font-medium opacity-60">/paket</span>}
                </div>
                
                <p className="text-sm mb-8 opacity-70 leading-relaxed min-h-[40px]">{plan.description}</p>
                
                <ul className="space-y-4 mb-10 grow">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm font-medium group/item transition-all duration-300 hover:translate-x-1">
                      <div className={`p-1 rounded-full ${plan.isPopular ? "bg-blue-500/20 text-blue-300" : "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"} transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-12`}>
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </div>
                      <span className={`opacity-90 group-hover/item:opacity-100 transition-opacity ${plan.isPopular ? "text-slate-100" : "text-slate-700 dark:text-slate-300"}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`relative w-full py-4 rounded-2xl font-black text-sm transition-all duration-300 overflow-hidden group/btn hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] ${
                  plan.isPopular 
                    ? "bg-white text-slate-900 hover:bg-blue-50" 
                    : "bg-slate-900 text-white hover:bg-blue-600 dark:bg-white dark:text-slate-900 dark:hover:bg-blue-50"
                }`}>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Pilih Paket Ini
                    <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </span>
                  {/* Button Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover/btn:animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="bg-blue-100 dark:bg-blue-900/20 py-16 mb-32">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
              Masih bingung menentukan paket? Mari kita bicarakan dulu!
            </h2>
            <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-sm hover:bg-blue-600 transition-all flex items-center gap-2 group">
              Hubungi Konsultan Kami
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="w-64 h-64 bg-blue-200 dark:bg-blue-800 rounded-full flex items-center justify-center border-8 border-white dark:border-slate-800 shadow-xl overflow-hidden">
             {/* Character Image Placeholder */}
             <div className="text-blue-600 dark:text-blue-400">
                <MessageCircle size={80} strokeWidth={3} />
             </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-6 italic underline decoration-blue-600 decoration-4 underline-offset-8">
            Contoh website untuk inspirasi?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Toko Online", "Landing Page"].map(cat => (
              <PortfolioCategory 
                key={cat} 
                title={cat} 
                active={activeCategory === cat} 
                onClick={() => setActiveCategory(cat)} 
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map(item => (
            <div key={item} className="group relative rounded-3xl overflow-hidden aspect-4/3 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 shadow-sm">
                <div className="w-full h-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-400">
                   <Layout size={40} />
                </div>
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-slate-900 px-6 py-2 rounded-xl font-bold">Lihat Detail</button>
                </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-5xl mx-auto px-6 mb-32">
        <div className="bg-slate-900 dark:bg-slate-800 rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="p-10 text-center border-b border-slate-800 dark:border-slate-700">
            <h2 className="text-3xl md:text-4xl font-black text-white italic tracking-tight">
              Frequency Asked <span className="text-blue-500">Questions</span>
            </h2>
          </div>
          <div className="p-6 md:p-12 space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`rounded-2xl border transition-all duration-300 ${
                  activeFaq === idx 
                    ? "bg-white dark:bg-slate-900 border-transparent" 
                    : "border-slate-800 hover:border-slate-700"
                }`}
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <span className={`font-bold transition-colors ${activeFaq === idx ? "text-blue-600" : "text-white"}`}>
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${activeFaq === idx ? "rotate-180" : ""}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-6 text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Reviews */}
      <section className="max-w-7xl mx-auto px-6 mb-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
           <div className="flex items-center gap-2 text-blue-600 font-bold mb-4 uppercase tracking-widest text-xs">
              <MapPin size={16} />
              Lokasi Kami
           </div>
           <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 leading-none">
             Berlokasi di Bogor & Bekasi <br/> <span className="text-slate-400">Seluruh Indonesia</span>
           </h2>
           <p className="text-slate-500 mb-8 border-l-4 border-blue-600 pl-6 py-2">
             Kami melayani klien dari berbagai kota di Indonesia. Koordinasi dilakukan secara online melaui Meet/WhatsApp untuk efisiensi waktu Bapak/Ibu.
           </p>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <div className="flex gap-1 text-yellow-400 mb-4">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-xs font-bold text-slate-400 mb-2">Google Maps</p>
                  <p className="text-sm font-black text-slate-900 dark:text-white">Rating 5.0 (256 Review)</p>
              </div>
              <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                     <Rocket size={20} />
                  </div>
                  <p className="text-xs font-bold text-slate-400 mb-2">Portfolio</p>
                  <p className="text-sm font-black text-slate-900 dark:text-white">500+ Website Aktif</p>
              </div>
           </div>
        </div>
        
        <div className="aspect-square bg-slate-200 dark:bg-slate-800 rounded-[3rem] overflow-hidden border-8 border-white dark:border-slate-700 shadow-2xl relative">
            {/* Map Placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 p-10 text-center">
               <MapPin size={64} className="mb-4 text-blue-600 opacity-50" />
               <p className="font-bold">Bogor & Bekasi Hub</p>
               <p className="text-xs">Visual Peta akan muncul di sini</p>
            </div>
            <div className="absolute bottom-6 left-6 right-6 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800">
               <p className="text-xs font-bold text-slate-400 mb-1">Kantor Utama</p>
               <p className="text-sm font-black text-slate-900 dark:text-white">Jl. Raya Pajajaran No. 123, Bogor Timur, Jawa Barat 16127</p>
            </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto p-12 md:p-24 rounded-[4rem] bg-linear-to-br from-blue-600 to-indigo-700 relative overflow-hidden text-center text-white shadow-2xl">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071823991-b1ae5e6a3048?q=80&w=2000&auto=format&fit=crop')] opacity-20 mix-blend-overlay"></div>
           <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                Build Your Dream <br/> Website Today!
              </h2>
              <button className="bg-white text-blue-600 px-10 py-5 rounded-[2rem] font-black text-lg hover:bg-slate-100 transition-all shadow-xl hover:scale-105 active:scale-95">
                Mulai Konsultasi Sekarang
              </button>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
