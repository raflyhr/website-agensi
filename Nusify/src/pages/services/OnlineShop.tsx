import { useEffect, useRef, useState } from "react";
import {
  MessageCircle,
  ShoppingCart,
  CreditCard,
  Search,
  Truck,
  Palette,
  Timer,
  LifeBuoy,
  Building2,
  Zap,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Reveal = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      {children}
    </div>
  );
};

const LogosMarquee = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [x, setX] = useState(0);
  useEffect(() => {
    let raf = 0;
    const speed = 0.5;
    const loop = () => {
      setX((prev) => {
        const el = trackRef.current;
        if (!el) return prev;
        const width = el.scrollWidth / 2;
        const nx = prev - speed;
        return Math.abs(nx) >= width ? 0 : nx;
      });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);
  const items = [
    "PUPR",
    "PLN",
    "Bank Intidana",
    "PUPR",
    "PLN",
    "Bank Intidana",
  ];
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40">
      <div
        ref={trackRef}
        className="flex gap-6 py-4 will-change-transform"
        style={{ transform: `translateX(${x}px)` }}
      >
        {items.map((n, i) => (
          <div
            key={i}
            className="flex items-center justify-center h-16 w-48 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 font-bold"
          >
            {n}
          </div>
        ))}
      </div>
    </div>
  );
};

const ProblemAwarenessSection = () => {
  return (
    <section id="problem-awareness" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-72 md:h-80 lg:h-96 flex items-center"
          >
            <div className="relative">
              <div className="text-7xl md:text-8xl font-extrabold text-black leading-none select-none">
                did
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 text-orange-500 text-4xl md:text-5xl font-extrabold select-none">
                you
              </div>
              <div className="mt-10 md:mt-12 text-7xl md:text-8xl font-extrabold text-black leading-none select-none">
                know
              </div>
              <div className="absolute -right-6 md:-right-10 -top-4 text-orange-500 text-7xl font-extrabold select-none">
                ?
              </div>
            </div>
          </motion.div>
        </Reveal>
        <Reveal delay={120}>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="uppercase text-xs tracking-widest bg-blue-900 text-white px-3 py-1 rounded-md inline-block">
              Tahukah Anda?
            </span>
            <h3 className="mt-4 text-3xl md:text-4xl font-bold text-blue-900">
              Website Biasa{" "}
              <span className="text-blue-600">Tidaklah Cukup</span>!
            </h3>
            <p className="mt-4 text-gray-600">
              Berdasarkan informasi dari websitesetup.org, setiap harinya muncul
              576.000 website baru.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5" />
                <span>Website bukanlah suatu barang langka</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5" />
                <span>
                  Semua orang / bisnis bisa memiliki website, termasuk
                  kompetitor Anda
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5" />
                <span>
                  Pengunjung / calon customer akan selalu membandingkan website
                  Anda dengan kompetitor
                </span>
              </li>
            </ul>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
};

const OnlineShop = () => {
  return (
    <div className="bg-slate-950 text-slate-300">
      <section className="relative bg-blue-100 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="space-y-6">
              <span className="uppercase tracking-widest text-xs bg-blue-900 text-white px-3 py-1 rounded-md inline-block">
                JASA PEMBUATAN ONLINE SHOP
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
                Website <span className="text-blue-800">Profesional</span> untuk
                Bisnis <span className="text-blue-800">Profesional</span>
              </h1>
              <div className="max-w-xl space-y-2">
                <p className="text-gray-600">
                  Segera miliki toko online profesional agar Anda dapat melayani
                  customer secara lebih efektif.
                </p>
                <p className="text-gray-600 font-semibold">
                  More loyal customers = more profit!
                </p>
              </div>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-teal-700 text-white px-6 py-3 rounded-full hover:bg-teal-800 transition"
                >
                  <span className="font-bold">Konsultasi Sekarang</span>
                  <MessageCircle className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative flex items-center justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1595502124338-8209bc4c1d7c?q=80&w=1200&auto=format&fit=crop"
                  alt="Unboxing package"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute -top-4 -left-4 bg-white rounded-xl p-3 shadow-lg animate-float"
                style={{ animationDuration: "4s" }}
              >
                <ShoppingCart className="w-6 h-6 text-blue-700" />
              </div>
              <div
                className="absolute -bottom-4 left-8 bg-white rounded-xl p-3 shadow-lg animate-float"
                style={{ animationDuration: "4s", animationDelay: "0.2s" }}
              >
                <CreditCard className="w-6 h-6 text-emerald-600" />
              </div>
              <div
                className="absolute -right-4 top-6 bg-white rounded-xl p-3 shadow-lg animate-float"
                style={{ animationDuration: "4s", animationDelay: "0.4s" }}
              >
                <Search className="w-6 h-6 text-amber-600" />
              </div>
              <div
                className="absolute -right-2 -bottom-2 bg-white rounded-xl p-3 shadow-lg animate-float"
                style={{ animationDuration: "4s", animationDelay: "0.6s" }}
              >
                <Truck className="w-6 h-6 text-indigo-600" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Inserted Problem Awareness Section (below Value Proposition) */}
      <section className="py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal>
              <div className="p-6 rounded-3xl border border-slate-800 bg-slate-900/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">
                  Professional Design
                </h3>
                <p className="text-slate-400">
                  Desain website profesional yang meningkatkan kepercayaan
                  pengunjung dan memperkuat citra bisnis Anda.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="p-6 rounded-3xl border border-slate-800 bg-slate-900/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-4">
                  <Timer className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">
                  Fast Loading
                </h3>
                <p className="text-slate-400">
                  Website dioptimalkan agar terbuka kurang dari 4 detik sehingga
                  pelanggan tidak menunggu lama saat berbelanja.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="p-6 rounded-3xl border border-slate-800 bg-slate-900/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-4">
                  <LifeBuoy className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">
                  Full Support
                </h3>
                <p className="text-slate-400">
                  Tim profesional siap membantu memastikan website Anda tetap
                  aman, stabil, dan selalu optimal.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28 bg-slate-900/40 border-y border-slate-800">
        <ProblemAwarenessSection />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-900/60 border border-slate-800 text-slate-400 text-xs font-black tracking-[0.2em] uppercase">
                Did You Know? Did You Know?
              </div>
              <h2 className="mt-4 text-5xl md:text-6xl font-extrabold text-white">
                Did You Know?
              </h2>
              <p className="mt-4 text-slate-400">
                Setiap hari ribuan website baru muncul di internet. Jika website
                Anda terlihat biasa saja, pelanggan akan dengan mudah beralih ke
                kompetitor.
              </p>
            </div>
          </Reveal>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal>
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
                <p className="text-sm text-slate-300 font-semibold">
                  Pelanggan selalu membandingkan website sebelum membeli
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
                <p className="text-sm text-slate-300 font-semibold">
                  Desain yang kurang profesional menurunkan kepercayaan
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
                <p className="text-sm text-slate-300 font-semibold">
                  Kecepatan website mempengaruhi keputusan pembelian
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <Reveal>
              <div className="lg:col-span-5 space-y-5">
                <h3 className="text-3xl md:text-4xl font-extrabold text-white">
                  Apa Solusinya?
                </h3>
                <p className="text-slate-400">
                  Kami membantu bisnis Anda memiliki website yang menarik,
                  cepat, dan profesional sehingga mampu bersaing di dunia
                  digital.
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <div className="px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-black tracking-wider">
                    Dipercaya oleh lebih dari 500+ klien
                  </div>
                </div>
                <div className="pt-4">
                  <LogosMarquee />
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="lg:col-span-7">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 group">
                    <img
                      src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop"
                      alt="Dashboard preview"
                      className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 group">
                    <img
                      src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?q=80&w=1200&auto=format&fit=crop"
                      alt="Design preview"
                      className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 col-span-2 group">
                    <img
                      src="https://images.unsplash.com/photo-1556157381-36a9d97d1621?q=80&w=1200&auto=format&fit=crop"
                      alt="Project preview"
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28 bg-slate-900/40 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <Reveal>
              <div className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1548337138-e08756dedf3f?q=80&w=1200&auto=format&fit=crop"
                  alt="Our team"
                  className="w-full h-80 object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-black tracking-wider">
                  <Building2 className="w-4 h-4" />
                  Our Team
                </div>
                <h3 className="mt-4 text-3xl font-extrabold text-white">
                  Kami Ada untuk Membantu
                </h3>
                <p className="mt-3 text-slate-400">
                  Di balik setiap website yang kami bangun, ada tim profesional
                  yang siap membantu bisnis Anda berkembang.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple text-white font-bold shadow-2xl shadow-blue-500/20 transition-all hover:opacity-95 hover:scale-[1.02] active:scale-95"
                  >
                    <Zap className="w-5 h-5" />
                    Mulai Diskusi
                  </Link>
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center px-6 py-3 rounded-full border border-slate-700 text-slate-300 font-bold hover:bg-slate-900 transition-all"
                  >
                    Lihat Portfolio
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlineShop;
