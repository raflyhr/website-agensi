import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import onlineShopHero from "../../assets/online-shop-hero.png";
import tshirtDesignProject from "../../assets/tshirt-design-project.jpg";
import ctaImage from "../../assets/cta-image.png";
import {
  MessageCircle,
  ShoppingCart,
  CreditCard,
  Timer,
  Truck,
  BarChart3,
  MousePointer2,
  Code,
  Sparkles,
  Zap,
  Headset,
  Layout,
  Globe,
  ShieldCheck,
  Info,
  TrendingUp,
  CheckCircle2,
  Rocket,
  Smartphone,
  Search,
  Star,
  ShoppingBag,
  Users,
  Award,
  Check,
  Building2,
  ExternalLink,
  ArrowRight,
  X,
  Play,
  Quote,
  Video,
  ChevronRight,
} from "lucide-react";
import NusifyMascot from "../../components/NusifyMascot";
import CountUp from "react-countup";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function OnlineShop() {
  const logos = [
    { name: "PLN", logo: "https://logo.clearbit.com/pln.co.id" },
    {
      name: "POS Logistics",
      logo: "https://logo.clearbit.com/poslogistics.co.id",
    },
    {
      name: "Universitas Trisakti",
      logo: "https://logo.clearbit.com/trisakti.ac.id",
    },
    {
      name: "Prasetiya Mulya",
      logo: "https://logo.clearbit.com/prasetiyamulya.ac.id",
    },
    { name: "Data Print", logo: "https://logo.clearbit.com/dataprint.co.id" },
    {
      name: "Proban Motoparts",
      logo: "https://logo.clearbit.com/proban.co.id",
    },
    { name: "Permata Bank", logo: "https://logo.clearbit.com/permatabank.com" },
  ];

  return (
    <div className="relative min-h-screen text-white bg-gradient-to-b from-[#020617] via-[#050a18] to-[#020617] overflow-hidden">
      {/* Static Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-cyan-600/15 blur-[150px] rounded-full opacity-60" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-gradient-to-r from-indigo-600/15 via-pink-600/15 to-blue-600/15 blur-[150px] rounded-full opacity-40" />
      </div>
      <main className="text-slate-300 relative z-10">
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[#020617]/50 backdrop-blur-[1px]">
            {/* Gradient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 blur-[100px] rounded-full mix-blend-screen" />

            {/* Tech Grid */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            ></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)]"
              >
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-bold tracking-widest text-blue-100 uppercase">
                  Jasa Pembuatan Online Shop
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight"
              >
                Website{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  Profesional
                </span>{" "}
                <br />
                untuk Bisnis{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Profesional
                </span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg text-slate-400 leading-relaxed max-w-xl"
              >
                Bangun toko online profesional yang siap melayani{" "}
                <span className="text-blue-300 font-medium">pelanggan</span>{" "}
                24/7. Tingkatkan kepercayaan pelanggan, percepat{" "}
                <span className="text-indigo-300 font-medium">transaksi</span>,
                dan ubah pengunjung menjadi pembeli loyal demi{" "}
                <span className="text-emerald-300 font-medium">profit</span>{" "}
                maksimal.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-blue-600 text-white font-semibold shadow-[0_0_20px_rgba(37,99,235,0.3)] overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.5)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>Konsultasi Sekarang</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* RIGHT VISUAL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              {/* Main Image Container */}
              <div className="relative z-10 w-full aspect-square max-w-[500px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />

                {/* Main Illustration (Woman Unboxing) */}
                <img
                  src={onlineShopHero}
                  alt="Online Shop Success"
                  className="relative z-10 w-full h-full object-cover rounded-[3rem] border border-white/10 shadow-2xl"
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, black 80%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 80%, transparent 100%)",
                  }}
                />

                {/* Mascot Integration */}
                <div className="absolute -bottom-10 -left-10 z-20 w-32 h-32 md:w-40 md:h-40">
                  <NusifyMascot />
                </div>

                {/* Floating UI Elements - static, no continuous animation */}
                <div className="absolute top-10 -right-8 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-xl">
                  <ShoppingCart className="w-6 h-6 text-blue-400" />
                </div>

                <div className="absolute bottom-20 -right-4 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-xl">
                  <CreditCard className="w-6 h-6 text-emerald-400" />
                </div>

                <div className="absolute top-1/2 -left-12 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-xl">
                  <Truck className="w-6 h-6 text-orange-400" />
                </div>

                <div className="absolute -top-8 left-20 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl shadow-xl flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-purple-400" />
                  <span className="text-xs font-bold text-white">
                    +128% Sales
                  </span>
                </div>
              </div>

              {/* Decorative Tech Elements */}
              <div className="absolute top-0 right-0 text-white/5 font-mono text-6xl font-bold select-none -z-10">
                {"{ }"}
              </div>
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
          >
            <span className="text-[10px] tracking-widest uppercase">
              Scroll
            </span>
            <MousePointer2 className="w-5 h-5" />
          </motion.div>
        </section>

        {/* KEY VALUE PROPOSITION SECTION */}
        <section className="relative py-32 overflow-hidden bg-[#020617]/50 backdrop-blur-[1px]">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Grid Pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            ></div>

            {/* Glowing Dots */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full blur-[2px] animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-indigo-500 rounded-full blur-[2px] animate-pulse delay-700"></div>
            <div className="absolute top-1/2 left-10 w-1.5 h-1.5 bg-emerald-500 rounded-full blur-[1px] animate-pulse delay-300"></div>

            {/* Abstract Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.05]">
              <path
                d="M0 100 Q 250 50 500 100 T 1000 100"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M1000 600 Q 750 650 500 600 T 0 600"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Section Header (Optional but good for context) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Kenapa Memilih Layanan Kami?
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                Kami menghadirkan solusi website online shop yang tidak hanya
                indah, tapi juga cepat, aman, dan berorientasi pada hasil.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8 items-stretch">
              {/* Feature Card 1: Professional Design */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.2)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Layout className="w-7 h-7 text-blue-400 group-hover:animate-bounce" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                    Professional Design
                  </h3>

                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    Kami merancang desain website online shop yang profesional
                    dan elegan untuk meningkatkan kepercayaan pelanggan dan
                    memperkuat identitas bisnis Anda.
                  </p>
                </div>
              </motion.div>

              {/* Feature Card 2: Fast Loading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-emerald-500/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(16,185,129,0.2)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-7 h-7 text-emerald-400 group-hover:animate-pulse" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors">
                    Fast Loading
                  </h3>

                  <p className="text-slate-400 leading-relaxed mb-4 group-hover:text-slate-300 transition-colors">
                    Website online shop yang kami bangun dioptimalkan agar
                    memiliki kecepatan akses tinggi, sehingga pelanggan dapat
                    berbelanja dengan nyaman tanpa menunggu lama.
                  </p>

                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold">
                    <Timer className="w-3 h-3" />
                    <span>&lt; 4 detik loading speed</span>
                  </div>
                </div>
              </motion.div>

              {/* Feature Card 3: Full Support */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(168,85,247,0.2)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Headset className="w-7 h-7 text-purple-400 group-hover:animate-spin-slow" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    Full Support
                  </h3>

                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    Tim profesional kami siap membantu Anda kapan pun
                    dibutuhkan, mulai dari keamanan website, maintenance, hingga
                    pengembangan fitur tambahan.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Mascot Element - static */}
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none">
              <div className="relative w-40 h-40 opacity-80 hover:opacity-100 transition-opacity">
                <NusifyMascot />
                <div className="absolute -top-12 -left-20 bg-white text-slate-900 px-4 py-2 rounded-xl rounded-br-none shadow-lg text-sm font-bold">
                  Best Choice!
                </div>
              </div>
            </div>
          </div>

          {/* Programmer Decorations - static */}
          <div className="absolute top-20 left-10 text-white/5 font-mono text-4xl font-bold select-none hidden md:block">
            {"{"}
          </div>
          <div className="absolute bottom-20 right-10 text-white/5 font-mono text-4xl font-bold select-none hidden md:block">
            {"}"}
          </div>
        </section>

        {/* DID YOU KNOW SECTION */}
        <section className="relative py-32 overflow-hidden bg-[#020617]/50 backdrop-blur-[1px]">
          {/* Background Tech Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            ></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full mix-blend-screen" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side: Large Typography */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                {/* Decorative text - static */}
                <div className="absolute -top-10 -left-10 text-white/5 font-mono text-6xl font-bold select-none hidden md:block">
                  {"{ ? }"}
                </div>

                {/* Main Text */}
                <div className="text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter text-white/10 select-none">
                  DID
                </div>
                <div className="flex items-baseline gap-4 -mt-2 md:-mt-4">
                  <div className="text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter text-white/10 select-none">
                    YOU
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 tracking-wide"
                  >
                    KNOW?
                  </motion.div>
                </div>

                {/* Small Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
                >
                  <Info className="w-4 h-4 text-orange-400" />
                  <span className="text-xs font-bold text-orange-100 uppercase tracking-widest">
                    Fakta Bisnis Digital
                  </span>
                </motion.div>
              </motion.div>

              {/* Right Side: Content & Mascot */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-6 relative z-10 bg-slate-900/40 border border-white/5 p-8 rounded-3xl backdrop-blur-sm"
                >
                  <p className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    Setiap hari, lebih dari{" "}
                    <span className="text-blue-400">576.000 website baru</span>{" "}
                    muncul di internet.
                  </p>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    Tanpa desain yang profesional, kecepatan akses yang tinggi,
                    dan pengalaman pengguna yang intuitif, bisnis Anda akan
                    sulit bersaing di tengah lautan kompetitor digital.
                  </p>

                  <div className="flex items-center gap-4 pt-4">
                    <div className="h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent" />
                    <span className="text-xs font-mono text-slate-500">
                      SOURCE: FORBES DIGITAL
                    </span>
                  </div>
                </motion.div>

                {/* Mascot Element - static */}
                <div className="absolute -bottom-20 -right-10 w-48 h-48 hidden md:block z-20 pointer-events-none">
                  <NusifyMascot />
                </div>

                {/* Abstract Lines */}
                <svg
                  className="absolute -top-20 -right-20 w-64 h-64 opacity-10 pointer-events-none"
                  viewBox="0 0 200 200"
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="60"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM AWARENESS SECTION */}
        <section className="relative py-32 overflow-hidden bg-[#020617]/50 backdrop-blur-[1px]">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Tech Grid */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            ></div>

            {/* Glowing Orbs */}
            <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full mix-blend-screen" />
            <div className="absolute bottom-1/3 right-10 w-[300px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full mix-blend-screen" />
          </div>

          <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
            {/* Section Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Website Biasa <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  Tidaklah Cukup!
                </span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                Persaingan digital semakin ketat. Jangan biarkan bisnis Anda
                tenggelam di antara jutaan website lainnya.
              </p>
            </motion.div>

            {/* Statistic Highlight */}
            <div className="relative mb-20">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 blur-3xl rounded-full pointer-events-none" />

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10"
              >
                <div className="text-7xl md:text-9xl font-black text-white tracking-tight drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                  <CountUp end={576000} duration={2.5} separator="," />
                </div>
                <div className="text-xl md:text-2xl font-medium text-slate-300 mt-4">
                  website baru muncul setiap hari di internet
                </div>
              </motion.div>

              {/* Mascot Interaction */}
              <motion.div
                className="absolute -right-4 md:right-20 top-0 w-24 h-24 md:w-32 md:h-32 hidden sm:block"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <NusifyMascot />
                {/* Exclamation Bubble */}
                <div className="absolute -top-8 -right-4 bg-red-500 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold text-xl shadow-lg animate-bounce">
                  !
                </div>
              </motion.div>
            </div>

            {/* Key Insights Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Kepercayaan Pelanggan",
                  desc: "Website profesional meningkatkan kredibilitas dan rasa aman pelanggan saat bertransaksi.",
                  icon: ShieldCheck,
                  color: "text-blue-400",
                  bg: "bg-blue-500/10",
                  border: "border-blue-500/20",
                },
                {
                  title: "Identitas Bisnis",
                  desc: "Desain modern memperkuat branding dan membuat bisnis Anda terlihat lebih bonafide.",
                  icon: Globe,
                  color: "text-purple-400",
                  bg: "bg-purple-500/10",
                  border: "border-purple-500/20",
                },
                {
                  title: "Keputusan Pembelian",
                  desc: "Kecepatan dan pengalaman pengguna (UX) adalah faktor utama penentu konversi penjualan.",
                  icon: TrendingUp,
                  color: "text-emerald-400",
                  bg: "bg-emerald-500/10",
                  border: "border-emerald-500/20",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className={`p-8 rounded-3xl bg-slate-900/50 backdrop-blur-sm border ${item.border} hover:-translate-y-2 transition-transform duration-300 group`}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Floating Tech Decorations */}
            <div className="absolute top-20 left-10 opacity-20 pointer-events-none hidden md:block">
              <Code className="w-12 h-12 text-white" />
            </div>
            <div className="absolute bottom-20 right-10 opacity-20 pointer-events-none hidden md:block">
              <div className="w-20 h-20 border-2 border-dashed border-white rounded-full animate-spin-slow" />
            </div>
          </div>
        </section>

        {/* URGENCY & COMPARISON SECTION */}
        <section className="relative py-32 overflow-hidden bg-[#020617]/50 backdrop-blur-[1px]">
          {/* Background Tech Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            ></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-red-600/10 blur-[150px] rounded-full mix-blend-screen" />
          </div>

          <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Setiap Hari Anda Menunda Website Profesional, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  Kompetitor Anda Semakin Unggul.
                </span>
              </h2>
            </motion.div>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg md:text-xl text-slate-300 leading-relaxed mb-16 max-w-4xl mx-auto"
            >
              Di era digital saat ini, pelanggan menilai kualitas bisnis hanya
              dalam hitungan detik dari tampilan website. Website yang terlihat
              biasa saja dapat membuat calon pelanggan berpindah ke kompetitor
              yang memiliki tampilan lebih profesional dan meyakinkan.
            </motion.p>

            {/* Comparison Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
              {/* Bad Website */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="group p-8 rounded-3xl bg-slate-900/40 border border-red-500/20 backdrop-blur-sm relative overflow-hidden hover:bg-slate-900/60 transition-colors"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50" />
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest mb-6">
                  <X className="w-3 h-3" />
                  Website Biasa
                </div>
                <ul className="space-y-4 text-left">
                  {[
                    "Desain kurang profesional",
                    "Loading lambat & berat",
                    "Tidak mobile friendly",
                    "Kurang meyakinkan pelanggan",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-400"
                    >
                      <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Professional Website */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="group p-8 rounded-3xl bg-slate-900/60 border border-emerald-500/30 backdrop-blur-md relative overflow-hidden shadow-2xl hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6 relative z-10">
                  <Check className="w-3 h-3" />
                  Website Profesional
                </div>
                <ul className="space-y-4 text-left relative z-10">
                  {[
                    "Desain modern & premium",
                    "Loading cepat & optimal",
                    "Mobile responsive sempurna",
                    "Meningkatkan kepercayaan customer",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-white font-medium"
                    >
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-emerald-400" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-white mb-8">
                Bangun Website Profesional Anda Sekarang.
              </h3>
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold text-lg shadow-[0_0_30px_rgba(220,38,38,0.4)] overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(220,38,38,0.6)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                <span>Konsultasi Gratis</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Decorative Particles */}
            <div className="absolute top-20 left-10 w-2 h-2 bg-red-500 rounded-full animate-ping hidden md:block" />
            <div className="absolute bottom-40 right-10 w-2 h-2 bg-orange-500 rounded-full animate-ping delay-700 hidden md:block" />
          </div>
        </section>
        <section className="relative py-32 overflow-hidden bg-[#020617]/50 backdrop-blur-[1px]">
          {/* Background Tech Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            ></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
          </div>

          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                <Sparkles className="w-3 h-3" />
                The Solution
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Apa Solusinya?
              </h2>
            </motion.div>

            {/* Solution Message */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg md:text-xl text-slate-300 leading-relaxed mb-12 max-w-3xl mx-auto"
            >
              <span className="text-white font-semibold">Imajiner</span>{" "}
              membantu Anda membangun website online shop yang modern, cepat,
              dan profesional. Kami merancang pengalaman belanja digital yang
              membuat pengunjung nyaman, meningkatkan kepercayaan pelanggan, dan
              membantu bisnis Anda berkembang.
            </motion.p>

            {/* Feature Highlights */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
              {[
                {
                  text: "Desain Modern & Profesional",
                  icon: Layout,
                  color: "text-blue-400",
                  bg: "bg-blue-500/10",
                },
                {
                  text: "Performa Cepat & Optimal",
                  icon: Rocket,
                  color: "text-emerald-400",
                  bg: "bg-emerald-500/10",
                },
                {
                  text: "Pengalaman Pengguna Nyaman",
                  icon: Smartphone,
                  color: "text-purple-400",
                  bg: "bg-purple-500/10",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <div
                    className={`w-8 h-8 rounded-full ${item.bg} flex items-center justify-center`}
                  >
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                  </div>
                  <span className="text-sm font-medium text-slate-200">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA & Mascot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="relative inline-block"
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-blue-600 text-white font-bold text-lg shadow-[0_0_30px_rgba(37,99,235,0.3)] overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(37,99,235,0.5)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                <span>Konsultasi Sekarang</span>
              </Link>

              {/* Mascot Interaction */}
              <motion.div
                className="absolute -right-24 top-1/2 -translate-y-1/2 w-24 h-24 hidden md:block pointer-events-none"
                animate={{
                  y: ["-50%", "-60%", "-50%"],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <NusifyMascot />
              </motion.div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-20 left-10 text-white/5 font-mono text-4xl font-bold select-none hidden md:block"
            >
              {"{"}
            </motion.div>
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="absolute bottom-20 right-10 text-white/5 font-mono text-4xl font-bold select-none hidden md:block"
            >
              {"}"}
            </motion.div>
          </div>
        </section>

        {/* UI PREVIEW SECTION */}
        <section className="relative py-32 overflow-hidden bg-[#020617]/50 backdrop-blur-[1px]">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Tech Grid */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            ></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full mix-blend-screen" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-24"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Desain Modern untuk Online Shop Profesional
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                Kami merancang tampilan website online shop yang modern,
                responsif, dan nyaman digunakan di berbagai perangkat. Setiap
                elemen dirancang untuk meningkatkan pengalaman pengguna.
              </p>
            </motion.div>

            {/* UI Preview Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative max-w-5xl mx-auto"
            >
              {/* Browser Window */}
              <div className="relative rounded-2xl border border-white/10 bg-[#0f172a]/80 backdrop-blur-xl shadow-2xl overflow-hidden group">
                {/* Browser Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="flex-1 mx-8">
                    <div className="h-8 bg-black/20 rounded-lg flex items-center px-4 gap-2 text-xs text-slate-500">
                      <Globe className="w-3 h-3" />
                      <span>imajiner.id/store</span>
                    </div>
                  </div>
                  <div className="w-20" /> {/* Spacer */}
                </div>

                {/* Website Content Mockup */}
                <div className="relative aspect-[16/10] bg-[#0f172a] overflow-hidden">
                  {/* Navbar */}
                  <div className="h-16 border-b border-white/5 flex items-center justify-between px-8">
                    <div className="w-24 h-6 bg-white/10 rounded" />
                    <div className="flex gap-6">
                      <div className="w-16 h-4 bg-white/5 rounded" />
                      <div className="w-16 h-4 bg-white/5 rounded" />
                      <div className="w-16 h-4 bg-white/5 rounded" />
                    </div>
                    <div className="flex gap-4">
                      <Search className="w-5 h-5 text-slate-600" />
                      <ShoppingBag className="w-5 h-5 text-slate-600" />
                    </div>
                  </div>

                  {/* Hero Banner */}
                  <div className="m-8 h-64 rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/5 relative overflow-hidden flex items-center px-12">
                    <div className="w-1/2 space-y-4">
                      <div className="h-8 w-3/4 bg-white/10 rounded-lg" />
                      <div className="h-4 w-1/2 bg-white/5 rounded-lg" />
                      <div className="h-10 w-32 bg-blue-600 rounded-lg mt-4 shadow-lg shadow-blue-500/20" />
                    </div>
                    <div className="absolute right-12 top-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-2xl" />
                  </div>

                  {/* Product Grid */}
                  <div className="px-8 grid grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="space-y-3 group/card cursor-pointer"
                      >
                        <div className="aspect-square rounded-xl bg-white/5 border border-white/5 relative overflow-hidden group-hover/card:border-blue-500/30 transition-colors">
                          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />
                        </div>
                        <div className="h-4 w-3/4 bg-white/10 rounded" />
                        <div className="h-3 w-1/2 bg-white/5 rounded" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating UI Elements */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-24 -right-12 bg-slate-800/90 backdrop-blur border border-white/10 p-4 rounded-xl shadow-2xl z-20 w-48 hidden md:block"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-xs text-emerald-400 font-bold">
                        Payment Success
                      </div>
                      <div className="text-[10px] text-slate-400">
                        Order #202488
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute bottom-24 -left-12 bg-slate-800/90 backdrop-blur border border-white/10 p-4 rounded-xl shadow-2xl z-20 hidden md:block"
                >
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className="w-3 h-3 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <div className="text-xs font-medium text-white">
                    "Website sangat cepat!"
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">
                    - Verified Buyer
                  </div>
                </motion.div>

                {/* Mascot Interaction */}
                <motion.div
                  className="absolute -bottom-12 -right-16 w-40 h-40 hidden md:block z-30 pointer-events-none"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <NusifyMascot />
                </motion.div>
              </div>

              {/* Glow behind mockup */}
              <div className="absolute -inset-4 bg-blue-500/20 blur-3xl -z-10 rounded-[3rem]" />
            </motion.div>

            {/* Floating Tech Decor */}
            <div className="absolute top-1/3 left-0 text-white/5 font-mono text-6xl font-bold select-none hidden xl:block">
              {"< >"}
            </div>
            <div className="absolute bottom-1/3 right-0 text-white/5 font-mono text-6xl font-bold select-none hidden xl:block">
              {"</ >"}
            </div>
          </div>
        </section>

        {/* SOCIAL PROOF / STATS SECTION */}
        <section className="relative py-32 overflow-hidden bg-[#020617]/50 backdrop-blur-[1px]">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Tech Grid */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            ></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-600/10 blur-[150px] rounded-full mix-blend-screen" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-bold text-white mb-16 leading-tight max-w-4xl mx-auto"
            >
              Dengan pengalaman menangani lebih dari{" "}
              <span className="text-emerald-400">500 klien</span>, Imajiner siap
              mewujudkan website impian Anda.
            </motion.h2>

            <div className="relative inline-block mb-20">
              {/* Main Statistic */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10"
              >
                <div className="text-8xl md:text-[10rem] font-black text-white leading-none tracking-tighter drop-shadow-[0_0_40px_rgba(16,185,129,0.3)]">
                  <CountUp end={500} duration={2.5} />
                  <span className="text-emerald-400">+</span>
                </div>
                <div className="text-xl md:text-2xl font-bold text-slate-300 mt-2 uppercase tracking-widest">
                  Klien Telah Dilayani
                </div>
              </motion.div>

              {/* Floating Trust Badges */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 -left-12 md:-left-24 bg-slate-800/80 backdrop-blur border border-white/10 p-3 rounded-xl shadow-xl hidden sm:block"
              >
                <ShieldCheck className="w-8 h-8 text-blue-400" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-0 -right-12 md:-right-24 bg-slate-800/80 backdrop-blur border border-white/10 p-3 rounded-xl shadow-xl hidden sm:block"
              >
                <Award className="w-8 h-8 text-yellow-400" />
              </motion.div>
            </div>

            {/* Trust Indicators */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  text: "Pengalaman Bertahun-tahun",
                  icon: Users,
                  color: "text-blue-400",
                  bg: "bg-blue-500/10",
                  border: "hover:border-blue-500/50",
                },
                {
                  text: "Ratusan Website Diluncurkan",
                  icon: Rocket,
                  color: "text-purple-400",
                  bg: "bg-purple-500/10",
                  border: "hover:border-purple-500/50",
                },
                {
                  text: "Dipercaya Berbagai Instansi",
                  icon: Building2,
                  color: "text-emerald-400",
                  bg: "bg-emerald-500/10",
                  border: "hover:border-emerald-500/50",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className={`group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl ${item.border}`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.text}
                  </h3>
                  <div className="w-8 h-1 bg-white/10 rounded-full mx-auto group-hover:w-16 transition-all duration-300" />
                </motion.div>
              ))}
            </div>

            {/* Abstract Tech Decorations */}
            <div className="absolute top-20 right-10 opacity-20 pointer-events-none hidden md:block">
              <div className="w-24 h-24 border border-dashed border-white rounded-full animate-spin-slow" />
            </div>
            <div className="absolute bottom-20 left-10 opacity-20 pointer-events-none hidden md:block">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-100" />
                <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-200" />
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL SECTION */}
        <section
          id="testimonials"
          className="relative py-32 overflow-hidden bg-[#020617]/50 backdrop-blur-[1px]"
        >
          {/* Background Tech Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            ></div>
            <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full mix-blend-screen" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-5xl mx-auto">
                Apa Pendapat Mereka Tentang <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Jasa Pembuatan Website dari Imajiner?
                </span>
              </h2>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                Berikut adalah beberapa ulasan tulus dari klien-klien yang telah
                mempercayakan pembuatan website mereka kepada kami.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* Left Side: Video Testimonial */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-7"
              >
                <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900 group shadow-2xl">
                  {/* Video Thumbnail Placeholder */}
                  <div className="aspect-video bg-slate-800 relative overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000&auto=format&fit=crop"
                      alt="Pak Ghalistan"
                      className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                        <Play className="w-8 h-8 text-white fill-white ml-1" />
                      </div>
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-8 bg-slate-900/90 backdrop-blur border-t border-white/5">
                    <Quote className="w-10 h-10 text-blue-500/50 mb-4" />
                    <p className="text-xl text-slate-300 italic mb-6 leading-relaxed">
                      "Kerjasama dengan tim Imajiner sangat luar biasa. Mereka
                      tidak hanya membuat website, tapi memberikan solusi bisnis
                      yang nyata. Sangat direkomendasikan!"
                    </p>
                    <div>
                      <h4 className="text-lg font-bold text-white">
                        Pak Ghalistan
                      </h4>
                      <p className="text-sm text-blue-400">UPPF Indonesia</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Side: Testimonial List */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-5 h-[500px] overflow-hidden flex flex-col"
              >
                <div className="flex items-center justify-between mb-4 px-2">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Video className="w-5 h-5 text-red-500" />
                    Video Testimonials
                  </h3>
                  <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full border border-blue-500/20">
                    30+ Videos
                  </span>
                </div>

                <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
                  {[
                    {
                      name: "Ibu Kiki",
                      role: "PT Citradata Purnakharisma",
                      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
                    },
                    {
                      name: "Pak Bara",
                      role: "PT Bina Selamat Veritas",
                      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
                    },
                    {
                      name: "Pak Mulia",
                      role: "PT PLN Indonesia Power Renewables",
                      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
                    },
                    {
                      name: "Pak Herry",
                      role: "PT Barokah Intisari",
                      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
                    },
                    {
                      name: "Pak Firdaus",
                      role: "Sosok Bisnis",
                      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
                    },
                    {
                      name: "Pak Aldy",
                      role: "Indomotor Lestari",
                      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
                    },
                  ].map((client, index) => (
                    <motion.div
                      key={index}
                      whileHover={{
                        x: 5,
                        backgroundColor: "rgba(30, 41, 59, 0.8)",
                      }}
                      className="group flex items-center gap-4 p-4 rounded-xl bg-slate-900/40 border border-white/5 cursor-pointer transition-all hover:border-blue-500/30 hover:shadow-lg"
                    >
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 group-hover:border-blue-500/50 transition-colors">
                        <img
                          src={client.img}
                          alt={client.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="w-4 h-4 text-white fill-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                          {client.name}
                        </h4>
                        <p className="text-xs text-slate-400 truncate w-48">
                          {client.role}
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-600 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </motion.div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-white/5 text-center">
                  <Link
                    to="/testimonials"
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors group"
                  >
                    View All 30+ Video Testimonials
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-40 left-10 opacity-20 pointer-events-none hidden xl:block">
              <div className="w-32 h-32 border border-dashed border-white rounded-full animate-spin-slow" />
            </div>
          </div>
        </section>
        <section className="relative py-32 overflow-hidden bg-[#020617]/50 backdrop-blur-[1px]">
          {/* Background Tech Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            ></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full mix-blend-screen" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
              >
                <Layout className="w-3 h-3" />
                Portfolio Klien Imajiner
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto"
              >
                Beberapa Contoh Portfolio Online Shop Kami
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto"
              >
                Website online shop bukan hanya tentang tampilan, tetapi juga
                pengalaman pengguna, kecepatan, dan kepercayaan pelanggan. Kami
                membantu bisnis membangun toko online yang modern, cepat, dan
                siap bersaing di era digital.
              </motion.p>
            </div>

            {/* Portfolio Grid */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ staggerChildren: 0.1 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  name: "Fashion ",
                  desc: "E-commerce kitchenware premium dengan navigasi intuitif.",
                  img: tshirtDesignProject,
                  tags: ["E-Commerce", "Retail"],
                },
                {
                  name: "Indonesia Tea Institute",
                  desc: "Platform edukasi dan penjualan teh dengan sistem booking kelas.",
                  img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
                  tags: ["Education", "Shop"],
                },
                {
                  name: "Alegre Furniture",
                  desc: "Katalog furniture modern dengan fitur filter produk canggih.",
                  img: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1200&auto=format&fit=crop",
                  tags: ["Furniture", "Catalog"],
                },
                {
                  name: "Jahitmart",
                  desc: "Marketplace perlengkapan menjahit terlengkap di Indonesia.",
                  img: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1200&auto=format&fit=crop",
                  tags: ["Marketplace", "Tools"],
                },
                {
                  name: "VIP Fragrance",
                  desc: "Toko parfum eksklusif dengan desain elegan dan mewah.",
                  img: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1200&auto=format&fit=crop",
                  tags: ["Luxury", "Beauty"],
                },
                {
                  name: "Acosta",
                  desc: "Brand fashion lokal dengan integrasi payment gateway otomatis.",
                  img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
                  tags: ["Fashion", "Store"],
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="group relative rounded-2xl bg-slate-900 border border-white/10 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 z-10" />
                    <img
                      src={project.img}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay Content */}
                    <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white font-bold text-sm hover:bg-blue-500 transition-colors shadow-lg">
                          Lihat Website <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 relative z-30 bg-slate-900 border-t border-white/5">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                      {project.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute top-1/3 -left-10 text-white/5 font-mono text-6xl font-bold select-none hidden xl:block">
              {"["}
            </div>
            <div className="absolute bottom-1/3 -right-10 text-white/5 font-mono text-6xl font-bold select-none hidden xl:block">
              {"]"}
            </div>
          </div>
        </section>

        {/* CLIENT LOGO WALL SECTION */}
        <section className="relative py-32 overflow-hidden bg-[#020617]/50 backdrop-blur-[1px]">
          {/* Background Tech Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            ></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full mix-blend-screen" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Building2 className="w-3 h-3" />
              Klien Kami
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-bold text-white mb-16 leading-tight max-w-4xl mx-auto"
            >
              Dipercaya oleh berbagai perusahaan dan instansi ternama
            </motion.h2>

            {/* Logo Carousel */}
            <div className="relative w-full overflow-hidden">
              {/* Fade Edges */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-20 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-20 pointer-events-none" />

              {/* Scrolling Row 1 */}
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-50%" }}
                transition={{
                  repeat: Infinity,
                  duration: 40,
                  ease: "linear",
                }}
                className="flex gap-8 w-max mb-8"
              >
                {[...logos, ...logos, ...logos].map((l, i) => (
                  <div
                    key={`r1-${i}`}
                    className="w-64 h-24 bg-slate-900/50 rounded-xl border border-white/5 flex items-center justify-center p-6 group hover:border-blue-500/30 hover:bg-slate-900/80 transition-all duration-300 relative"
                  >
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

                    <img
                      src={l.logo}
                      alt={l.name}
                      className="max-h-12 w-auto opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110 relative z-10"
                    />
                  </div>
                ))}
              </motion.div>

              {/* Scrolling Row 2 (Reverse) */}
              <motion.div
                initial={{ x: "-50%" }}
                animate={{ x: 0 }}
                transition={{
                  repeat: Infinity,
                  duration: 45,
                  ease: "linear",
                }}
                className="flex gap-8 w-max"
              >
                {[...logos, ...logos, ...logos].reverse().map((l, i) => (
                  <div
                    key={`r2-${i}`}
                    className="w-64 h-24 bg-slate-900/50 rounded-xl border border-white/5 flex items-center justify-center p-6 group hover:border-indigo-500/30 hover:bg-slate-900/80 transition-all duration-300 relative"
                  >
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

                    <img
                      src={l.logo}
                      alt={l.name}
                      className="max-h-12 w-auto opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110 relative z-10"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="text-slate-500 mt-12 text-sm italic font-medium">
              and many more...
            </div>

            {/* Abstract Tech Decorations */}
            <div className="absolute top-1/2 left-10 opacity-20 pointer-events-none hidden md:block">
              <div className="w-32 h-32 border border-white/10 rounded-full animate-spin-slow border-dashed" />
            </div>
            <div className="absolute bottom-20 right-10 opacity-20 pointer-events-none hidden md:block">
              <div className="w-2 h-20 bg-gradient-to-b from-blue-500/50 to-transparent" />
            </div>
          </div>
        </section>

        {/* CLOSING & TEAM SECTION */}
        <section className="relative py-32 overflow-hidden bg-[#020617]/50 backdrop-blur-[1px]">
          {/* Background Tech Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            ></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/10 blur-[150px] rounded-full mix-blend-screen" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Build Your Dream <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Website Today
                </span>
              </h2>
            </motion.div>

            {/* Closing Message */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg md:text-xl text-slate-300 leading-relaxed mb-12 max-w-3xl mx-auto"
            >
              Membangun website online shop yang sukses bukan hanya tentang
              desain, tetapi tentang strategi, pengalaman pengguna, dan
              teknologi yang tepat. Tim Imajiner siap membantu Anda merancang
              website yang tidak hanya terlihat profesional, tetapi juga mampu
              meningkatkan kepercayaan pelanggan dan pertumbuhan bisnis Anda.
            </motion.p>

            {/* Main CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mb-20"
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-blue-600 text-white font-bold text-lg shadow-[0_0_30px_rgba(37,99,235,0.3)] overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(37,99,235,0.5)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                <span>Konsultasi Sekarang</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Team Photo Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative max-w-5xl mx-auto group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10" />

              {/* Photo Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={ctaImage}
                  alt="Imajiner Team"
                  className="w-full h-[400px] md:h-[500px] object-cover filter brightness-75 group-hover:brightness-90 transition-all duration-700 group-hover:scale-105"
                />

                {/* Overlay Text */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20 text-left">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="bg-slate-900/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl inline-block"
                  >
                    <p className="text-xl md:text-2xl font-bold text-white leading-tight">
                      Tim Profesional yang Siap <br />
                      Membantu Bisnis Anda Tumbuh.
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -inset-4 bg-indigo-500/20 blur-3xl -z-10 rounded-[3rem] opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
            </motion.div>

            {/* Abstract Tech Decorations */}
            <div className="absolute top-20 left-10 opacity-20 pointer-events-none hidden md:block">
              <div className="w-24 h-24 border border-white/10 rounded-full animate-ping-slow" />
            </div>
            <div className="absolute bottom-1/2 right-10 opacity-20 pointer-events-none hidden md:block">
              <div className="w-32 h-32 border-2 border-dashed border-white/20 rounded-full animate-spin-slow" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer Fade Transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none z-20" />
    </div>
  );
}
