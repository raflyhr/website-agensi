import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import {
  MessageCircle,
  Smartphone,
  CheckCircle2,
  XCircle,
  Star,
  Code,
  Terminal,
  Cpu,
  BarChart3,
  AppWindow,
  Layout,
  MousePointer2,
  Zap,
  Gauge,
  Server,
  Activity,
  Database,
  Timer,
  AlertTriangle,
  FileX2,
  Settings2,
  SmartphoneNfc,
  MessagesSquare,
  FileText,
  Code2,
  ListTodo,
  Rocket,
  Headset,
  Building2,
  Globe2,
  MapPin,
  Network,
  LifeBuoy,
  FileEdit,
  TrendingUp,
  Quote,
  ExternalLink,
  Laptop2,
  Play,
  ArrowRight,
  Video,
} from "lucide-react";
import Lenis from "lenis";

// Improved Indonesia Map SVG Component
const IndonesiaMap = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 800 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ filter: "drop-shadow(0 0 10px rgba(59, 130, 246, 0.2))" }}
  >
    {/* Sumatera */}
    <path
      d="M110 80 L140 50 L170 60 L180 90 L170 130 L140 150 L110 120 Z"
      className="fill-[#0f172a] stroke-[#475569] stroke-[1.5] hover:fill-[#1e293b] transition-colors duration-300"
    />

    {/* Jawa */}
    <path
      d="M190 170 L340 180 L350 190 L200 190 L180 180 Z"
      className="fill-[#0f172a] stroke-[#475569] stroke-[1.5] hover:fill-[#1e293b] transition-colors duration-300"
    />

    {/* Kalimantan */}
    <path
      d="M260 90 L330 80 L360 120 L330 150 L260 140 Z"
      className="fill-[#0f172a] stroke-[#475569] stroke-[1.5] hover:fill-[#1e293b] transition-colors duration-300"
    />

    {/* Sulawesi */}
    <path
      d="M380 100 L410 90 L430 120 L400 150 L380 130 L400 120 L380 110 Z"
      className="fill-[#0f172a] stroke-[#475569] stroke-[1.5] hover:fill-[#1e293b] transition-colors duration-300"
    />

    {/* Papua */}
    <path
      d="M530 110 L630 100 L660 130 L630 160 L530 150 Z"
      className="fill-[#0f172a] stroke-[#475569] stroke-[1.5] hover:fill-[#1e293b] transition-colors duration-300"
    />

    {/* Bali & Nusa Tenggara */}
    <path
      d="M360 185 L470 190 L460 200 L360 195 Z"
      className="fill-[#0f172a] stroke-[#475569] stroke-[1.5] hover:fill-[#1e293b] transition-colors duration-300"
    />
  </svg>
);

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Typewriter({
  words,
  speed = 90,
  pause = 1000,
}: {
  words: string[];
  speed?: number;
  pause?: number;
}) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const handler = setTimeout(
      () => {
        if (!deleting && subIndex < words[index].length) {
          setSubIndex(subIndex + 1);
          return;
        }
        if (!deleting && subIndex === words[index].length) {
          setDeleting(true);
          return;
        }
        if (deleting && subIndex > 0) {
          setSubIndex(subIndex - 1);
          return;
        }
        setDeleting(false);
        setIndex((index + 1) % words.length);
      },
      deleting ? speed / 1.5 : subIndex === words[index].length ? pause : speed,
    );
    return () => clearTimeout(handler);
  }, [words, index, subIndex, deleting, speed, pause]);

  return (
    <span className="text-white">{words[index].substring(0, subIndex)}</span>
  );
}

function CountUp({ to, duration = 1500 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            setStarted(true);
            const start = performance.now();
            const animate = (now: number) => {
              const p = Math.min(1, (now - start) / duration);
              setValue(Math.floor(to * p));
              if (p < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration, started]);
  return <span ref={ref}>{value}</span>;
}

function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const moveMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateCursor = () => {
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;
      cursorX += dx * 0.1;
      cursorY += dy * 0.1;
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      requestAnimationFrame(animateCursor);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer")
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mouseover", handleMouseOver);
    requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`pointer-events-none fixed top-0 left-0 z-50 -ml-6 -mt-6 h-12 w-12 rounded-full transition-all duration-300 ease-out mix-blend-screen ${
        hovered
          ? "scale-150 bg-blue-500/30 blur-2xl"
          : "scale-100 bg-blue-400/20 blur-xl"
      }`}
    />
  );
}

export default function Redesign() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let frameId: number;

    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  const typingWords = useMemo(
    () => ["CEPAT AKSES", "USER FRIENDLY", "MUDAH DIKELOLA", "BERMANFAAT"],
    [],
  );
  const logos = [
    {
      name: "PUPR",
      logo: "https://dummyimage.com/200x80/111111/ffffff.png&text=PUPR",
    },
    { name: "PLN", logo: "https://logo.clearbit.com/pln.co.id" },
    {
      name: "Indonesia Power",
      logo: "https://dummyimage.com/200x80/111111/ffffff.png&text=Indonesia+Power",
    },
    { name: "STMA Trisakti", logo: "https://logo.clearbit.com/trisakti.ac.id" },
    {
      name: "Bank Intidana",
      logo: "https://dummyimage.com/200x80/111111/ffffff.png&text=Bank+Intidana",
    },
    {
      name: "Pos Logistics",
      logo: "https://logo.clearbit.com/poslogistics.co.id",
    },
  ];

  const beforeAfter = [
    {
      name: "PT Curator Karya Indonesia",
      desc: "Redesign total website company profile dengan nuansa modern dan profesional.",
      before:
        "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?q=80&w=1400&auto=format&fit=crop",
      after:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop",
      link: "#",
    },
    {
      name: "Pantry Magic",
      desc: "Optimasi UX dan perbaikan struktur navigasi untuk e-commerce kitchenware.",
      before:
        "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=1400&auto=format&fit=crop",
      after:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop",
      link: "#",
    },
    {
      name: "Indonesia Tea Institute",
      desc: "Modernisasi tampilan visual dan integrasi sistem pendaftaran kelas online.",
      before:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1400&auto=format&fit=crop",
      after:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop",
      link: "#",
    },
    {
      name: "Alegre Furniture",
      desc: "Pengembangan website katalog produk furniture dengan performa tinggi.",
      before:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1400&auto=format&fit=crop",
      after:
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1400&auto=format&fit=crop",
      link: "#",
    },
  ];

  return (
    <div className="bg-black text-gray-300 min-h-screen overflow-hidden">
      <CustomCursor />
      <div className="relative">
        <div className="pointer-events-none absolute -top-40 -left-40 w-[620px] h-[620px] bg-white/5 blur-[140px] rounded-full" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 w-[520px] h-[520px] bg-white/5 blur-[140px] rounded-full" />
      </div>

      <main>
        <section className="relative min-h-[90vh] flex items-center justify-center px-6 bg-[#020617] overflow-hidden">
          {/* Background Gradient & Glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen" />
            <div className="absolute bottom-[-10%] left-1/4 w-[40vw] h-[40vh] bg-indigo-600/10 blur-[100px] rounded-full mix-blend-screen" />
          </div>

          <div className="max-w-6xl mx-auto text-center relative z-10 py-20">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6"
            >
              Saatnya Tingkatkan <br className="hidden md:block" />
              Website Anda agar lebih...
            </motion.h1>

            {/* Dynamic Typing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 h-20 md:h-24 flex items-center justify-center"
            >
              <Typewriter words={typingWords} speed={100} pause={2000} />
            </motion.div>

            {/* Sub Headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-gray-400 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed"
            >
              Solusi untuk website yang lambat, desain jadul, atau sulit
              dikelola. Kami bantu transformasi digital bisnis Anda.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12"
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-blue-600 text-white font-medium overflow-hidden transition-all hover:bg-blue-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.3)]"
              >
                <span className="relative z-10">Konsultasi Sekarang</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/20 to-blue-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </Link>
            </motion.div>
          </div>

          {/* Decorative Tech Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Floating Card 1: Code Snippet */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0, y: [0, -15, 0] }}
              transition={{
                opacity: { duration: 1, delay: 0.5 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute top-1/4 left-[5%] md:left-[10%] bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="space-y-2 font-mono text-xs text-blue-300/80">
                <p>
                  <span className="text-purple-400">const</span> redesign =
                  <span className="text-yellow-400"> true</span>;
                </p>
                <p>
                  <span className="text-purple-400">if</span> (redesign) {"{"}
                </p>
                <p className="pl-4 text-green-400">growBusiness();</p>
                <p>{"}"}</p>
              </div>
            </motion.div>

            {/* Floating Card 2: Terminal Icon */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0, y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{
                opacity: { duration: 1, delay: 0.7 },
                y: {
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                },
                rotate: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                },
              }}
              className="absolute top-1/3 right-[5%] md:right-[12%] bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl"
            >
              <Terminal className="w-8 h-8 text-indigo-300" />
            </motion.div>

            {/* Floating Card 3: Analytics Chart */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: [0, -12, 0] }}
              transition={{
                opacity: { duration: 1, delay: 0.9 },
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                },
              }}
              className="absolute bottom-1/4 left-[15%] md:left-[20%] bg-neutral-900/80 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-green-500/20 p-1.5 rounded-lg">
                  <BarChart3 className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400">Traffic</div>
                  <div className="text-xs font-bold text-white">+124%</div>
                </div>
              </div>
              <div className="h-1 w-24 bg-neutral-700 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-green-500 rounded-full" />
              </div>
            </motion.div>

            {/* Floating Card 4: UI Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -10, 0],
                rotate: [0, -3, 0],
              }}
              transition={{
                opacity: { duration: 1, delay: 1.1 },
                y: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                },
                rotate: {
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                },
              }}
              className="absolute bottom-1/3 right-[15%] md:right-[20%] bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-xl hidden sm:block"
            >
              <AppWindow className="w-6 h-6 text-blue-300 mb-2" />
              <div className="space-y-1.5 w-20">
                <div className="h-1.5 w-full bg-white/20 rounded-full" />
                <div className="h-1.5 w-2/3 bg-white/10 rounded-full" />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative py-32 px-6 overflow-hidden bg-black">
          {/* Background Decor */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full mix-blend-screen" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full mix-blend-screen translate-x-20 translate-y-20" />
          </div>

          {/* Large Quote Mark */}
          <div className="absolute top-12 left-6 md:left-24 text-white/5 text-[200px] font-serif leading-none select-none pointer-events-none">
            “
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            {/* Top Divider */}
            <div className="w-24 mx-auto border-t border-gray-800 my-8" />

            {/* Quote Text */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative text-3xl md:text-5xl font-semibold text-white leading-relaxed drop-shadow-lg"
            >
              "If it ain't broke, don't fix it is the slogan of the complacent,
              the arrogant or the scared. It's an excuse for inaction."
            </motion.p>

            {/* Author */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-gray-400 text-lg mt-8 tracking-wide font-medium"
            >
              — Colin Powell
            </motion.div>

            {/* Bottom Divider */}
            <div className="w-24 mx-auto border-t border-gray-800 my-8" />

            {/* Floating Tech Elements */}
            <motion.div
              className="absolute -top-12 right-0 md:-right-16 bg-neutral-900/80 border border-white/10 p-4 rounded-2xl backdrop-blur-md shadow-2xl"
              animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Code className="w-6 h-6 text-blue-400/70" />
            </motion.div>

            <motion.div
              className="absolute bottom-0 left-0 md:-left-16 bg-neutral-900/80 border border-white/10 p-4 rounded-2xl backdrop-blur-md shadow-2xl"
              animate={{ y: [0, -12, 0], rotate: [0, -3, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <Terminal className="w-6 h-6 text-indigo-400/70" />
            </motion.div>

            <motion.div
              className="absolute top-1/2 -right-6 md:-right-24 bg-neutral-900/80 border border-white/10 p-3 rounded-2xl backdrop-blur-md shadow-2xl"
              animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            >
              <Cpu className="w-5 h-5 text-purple-400/70" />
            </motion.div>
          </div>
        </section>

        <section className="relative py-28 px-6 bg-[#020617] overflow-hidden">
          {/* Tech Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Website Biasa <br />
                <span className="text-blue-500">Tidaklah Cukup!</span>
              </h2>
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-blue-500/20 p-2 rounded-lg">
                    <Star className="w-5 h-5 text-blue-400" />
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    <span className="text-white font-bold text-2xl">75%</span>{" "}
                    pengguna menilai kredibilitas bisnis berdasarkan desain
                    website.
                  </p>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed pl-14">
                  Website profesional bukan lagi sekadar pelengkap, tetapi
                  kebutuhan untuk bersaing di dunia digital yang semakin
                  kompetitif.
                </p>
              </div>

              {/* Tech Emblems */}
              <div className="mt-12 flex items-center gap-6 opacity-30">
                <div className="flex items-center gap-2 font-mono text-xs text-blue-400">
                  <Code className="w-4 h-4" />
                  <span>{"{ css: grid }"}</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-indigo-400">
                  <Layout className="w-4 h-4" />
                  <span>flexbox_layout</span>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              {/* Blue Glow behind card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/10 blur-[100px] rounded-full" />

              {/* Main UI Card */}
              <div className="relative bg-neutral-900 border border-white/10 rounded-3xl p-6 shadow-2xl backdrop-blur-sm overflow-hidden group">
                {/* Mockup Header */}
                <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  </div>
                  <div className="text-[10px] text-gray-500 font-mono">
                    nusify-v2.0.dev
                  </div>
                </div>

                {/* Dashboard Content Mockup */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 space-y-4">
                    <div className="h-32 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-2xl border border-blue-500/20 p-4">
                      <div className="w-1/2 h-2 bg-blue-400/30 rounded-full mb-3" />
                      <div className="w-3/4 h-2 bg-blue-400/10 rounded-full" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-20 bg-white/5 rounded-xl border border-white/5 p-3">
                        <BarChart3 className="w-4 h-4 text-blue-400 mb-2" />
                        <div className="w-full h-1 bg-white/10 rounded-full" />
                      </div>
                      <div className="h-20 bg-white/5 rounded-xl border border-white/5 p-3">
                        <Cpu className="w-4 h-4 text-purple-400 mb-2" />
                        <div className="w-full h-1 bg-white/10 rounded-full" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-full bg-white/5 rounded-2xl border border-white/5 p-4 flex flex-col justify-between">
                      <div className="space-y-3">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="h-1.5 w-full bg-white/10 rounded-full"
                          />
                        ))}
                      </div>
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 mx-auto" />
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-6 -right-6 bg-blue-600 text-white p-4 rounded-2xl shadow-xl z-20"
                >
                  <MousePointer2 className="w-6 h-6" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -bottom-8 -left-8 bg-neutral-800 border border-white/10 p-4 rounded-2xl shadow-xl z-20"
                >
                  <Smartphone className="w-6 h-6 text-indigo-400" />
                </motion.div>

                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-1/2 -right-4 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 p-2 rounded-lg text-[10px] text-emerald-400 font-bold z-20"
                >
                  +89% CONVERSION
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative py-28 px-6 bg-black overflow-hidden">
          {/* Background Glow */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/10 blur-[120px] rounded-full mix-blend-screen" />
            <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full mix-blend-screen" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Mobile Experience Matters
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                Di era digital, pengalaman pengguna di perangkat seluler
                menentukan keberhasilan bisnis Anda. Jangan biarkan pengunjung
                pergi karena tampilan yang rusak.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Bad Example */}
              <motion.div
                initial={{ opacity: 0, x: -50, rotate: -5 }}
                whileInView={{ opacity: 1, x: 0, rotate: -2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative group"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-10 bg-red-500/10 text-red-400 px-6 py-2 rounded-full border border-red-500/20 flex items-center gap-2 backdrop-blur-md z-20 shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                  <XCircle className="w-5 h-5" />
                  <span className="font-semibold">Tidak Responsif</span>
                </div>

                {/* Phone Frame - Bad */}
                <div className="relative mx-auto border-[12px] border-neutral-800 rounded-[2.5rem] bg-white h-[580px] w-[300px] shadow-2xl overflow-hidden flex flex-col transform transition-transform duration-500 hover:scale-105 hover:rotate-0">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-800 rounded-b-2xl z-30" />

                  {/* Bad Content - Desktop site squeezed */}
                  <div className="w-[800px] origin-top-left scale-[0.375] h-[1600px] bg-white text-black p-8 pt-20 overflow-hidden">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-8 border-b pb-4">
                      <div className="text-4xl font-bold text-blue-600">
                        BRAND
                      </div>
                      <div className="flex gap-8 text-2xl text-gray-600 font-medium">
                        <span>Home</span>
                        <span>About</span>
                        <span>Services</span>
                        <span>Contact</span>
                      </div>
                    </div>
                    {/* Hero */}
                    <div className="flex gap-8 mb-12 bg-gray-50 p-8 rounded-xl">
                      <div className="w-1/2">
                        <h1 className="text-6xl font-bold mb-6 text-gray-800">
                          Welcome to Our Website
                        </h1>
                        <p className="text-3xl text-gray-500 leading-relaxed">
                          This text is too small to read on mobile without
                          zooming. Users will struggle to navigate.
                        </p>
                        <button className="mt-8 px-8 py-4 bg-blue-600 text-white text-2xl rounded">
                          Learn More
                        </button>
                      </div>
                      <div className="w-1/2 bg-gray-300 h-80 rounded-xl"></div>
                    </div>
                    {/* Grid content that overflows */}
                    <div className="grid grid-cols-3 gap-6">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                          key={i}
                          className="border-2 border-gray-200 p-6 rounded-xl"
                        >
                          <div className="h-40 bg-gray-100 mb-4 rounded-lg"></div>
                          <h3 className="text-3xl font-bold text-gray-800 mb-2">
                            Feature {i}
                          </h3>
                          <p className="text-2xl text-gray-500">
                            Description goes here.
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Overlay indicating bad UX */}
                  <div className="absolute inset-0 bg-black/5 pointer-events-none" />
                </div>
              </motion.div>

              {/* Good Example */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="relative group"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:right-10 bg-emerald-500/10 text-emerald-400 px-6 py-2 rounded-full border border-emerald-500/20 flex items-center gap-2 backdrop-blur-md z-20 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-semibold">Responsif & Modern</span>
                </div>

                {/* Phone Frame - Good */}
                <div className="relative mx-auto border-[12px] border-neutral-800 rounded-[2.5rem] bg-neutral-900 h-[580px] w-[300px] shadow-2xl overflow-hidden flex flex-col transform transition-transform duration-500 hover:scale-105">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-800 rounded-b-2xl z-30" />

                  {/* Good Content - Mobile First */}
                  <div className="h-full overflow-hidden relative">
                    {/* Scrollable Area */}
                    <div className="h-full overflow-y-auto pt-12 px-5 pb-8 no-scrollbar">
                      {/* Header */}
                      <div className="flex justify-between items-center mb-6">
                        <div className="w-8 h-8 rounded-full bg-blue-500" />
                        <div className="space-y-1">
                          <div className="w-6 h-0.5 bg-white rounded-full" />
                          <div className="w-4 h-0.5 bg-white rounded-full ml-auto" />
                        </div>
                      </div>

                      {/* Hero */}
                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-3 leading-tight">
                          Mobile First <br />
                          <span className="text-blue-400">Experience</span>
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                          Tampilan yang nyaman dibaca, navigasi mudah, dan
                          elemen yang tertata rapi.
                        </p>
                        <div className="w-full h-40 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 mb-6 relative overflow-hidden group-hover:scale-[1.02] transition-transform">
                          <div className="absolute inset-0 bg-black/10" />
                          <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
                            <div className="h-2 w-1/2 bg-white/70 rounded-full mb-2" />
                            <div className="h-2 w-3/4 bg-white/40 rounded-full" />
                          </div>
                        </div>
                        <div className="flex gap-3 overflow-x-auto pb-4 -mx-5 px-5 no-scrollbar">
                          {[1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className="min-w-[120px] h-32 rounded-xl bg-neutral-800 border border-white/5 p-3 flex flex-col justify-end"
                            >
                              <div className="w-8 h-8 rounded-full bg-neutral-700 mb-auto" />
                              <div className="h-2 w-16 bg-neutral-600 rounded-full mb-1" />
                              <div className="h-2 w-10 bg-neutral-700 rounded-full" />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* List Items */}
                      <div className="space-y-3">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="flex items-center gap-4 p-3 rounded-xl bg-neutral-800/50 border border-white/5"
                          >
                            <div className="w-10 h-10 rounded-lg bg-neutral-700 shrink-0" />
                            <div className="flex-1">
                              <div className="h-2.5 w-24 bg-neutral-600 rounded-full mb-2" />
                              <div className="h-2 w-32 bg-neutral-700 rounded-full" />
                            </div>
                            <div className="w-6 h-6 rounded-full bg-neutral-700 flex items-center justify-center text-[10px] text-white">
                              →
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Floating Decor */}
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute bottom-6 right-6 bg-blue-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg z-30"
                    >
                      FAST
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="relative py-28 px-6 bg-[#020617] overflow-hidden">
          {/* Background Glow */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full mix-blend-screen" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/5 blur-[120px] rounded-full mix-blend-screen translate-x-40" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-24"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Performa Adalah Segalanya
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                Website yang lambat akan ditinggalkan oleh calon pelanggan
                bahkan sebelum mereka membaca isi halaman Anda. Kami memastikan
                website Anda terbang secepat kilat.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left Side - Performance Score */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative flex flex-col items-center justify-center"
              >
                <div className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center">
                  {/* Outer Ring */}
                  <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="45%"
                      className="stroke-gray-800 fill-none"
                      strokeWidth="8"
                    />
                    <motion.circle
                      cx="50%"
                      cy="50%"
                      r="45%"
                      className="stroke-emerald-500 fill-none"
                      strokeWidth="8"
                      strokeDasharray="282.6%"
                      initial={{ strokeDashoffset: "282.6%" }}
                      whileInView={{ strokeDashoffset: "28.26%" }} // 90% full for 97/100
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Score Content */}
                  <div className="text-center">
                    <div className="text-7xl md:text-8xl font-black text-white drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                      <CountUp to={97} duration={2000} />
                    </div>
                    <div className="text-emerald-400 font-bold text-xl mt-2 tracking-widest uppercase">
                      PERFECT
                    </div>
                  </div>

                  {/* Floating Tech Badges around score */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-4 -right-4 bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-2xl backdrop-blur-md shadow-lg"
                  >
                    <Zap className="w-6 h-6 text-emerald-400" />
                  </motion.div>
                </div>
                <div className="mt-10 text-center">
                  <div className="flex items-center gap-3 justify-center text-gray-400 mb-2">
                    <Gauge className="w-5 h-5" />
                    <span className="font-medium tracking-wide">
                      Google PageSpeed Score
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-emerald-500/50"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Speed Metrics Cards */}
              <div className="grid gap-6">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="group relative p-6 rounded-2xl border border-white/5 bg-slate-900/40 backdrop-blur-md hover:border-blue-500/30 transition-all shadow-xl overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Timer className="w-12 h-12 text-blue-400" />
                  </div>
                  <div className="relative flex items-center gap-6">
                    <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center">
                      <Timer className="w-7 h-7 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm mb-1">
                        Load Time
                      </div>
                      <div className="text-3xl font-bold text-white tracking-tight">
                        <CountUp to={734} duration={1500} /> ms
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="group relative p-6 rounded-2xl border border-white/5 bg-slate-900/40 backdrop-blur-md hover:border-indigo-500/30 transition-all shadow-xl overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Activity className="w-12 h-12 text-indigo-400" />
                  </div>
                  <div className="relative flex items-center gap-6">
                    <div className="w-14 h-14 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                      <Activity className="w-7 h-7 text-indigo-400" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm mb-1">
                        Largest Contentful Paint (LCP)
                      </div>
                      <div className="text-3xl font-bold text-white tracking-tight">
                        1.1 s
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="group relative p-6 rounded-2xl border border-white/5 bg-slate-900/40 backdrop-blur-md hover:border-emerald-500/30 transition-all shadow-xl overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Star className="w-12 h-12 text-emerald-400" />
                  </div>
                  <div className="relative flex items-center gap-6">
                    <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                      <Star className="w-7 h-7 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm mb-1">
                        Performance Grade
                      </div>
                      <div className="text-3xl font-bold text-white tracking-tight">
                        A+
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Decorative Tech Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/4 left-[5%] opacity-10"
              >
                <Server className="w-16 h-16 text-blue-400" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-1/4 right-[5%] opacity-10"
              >
                <Database className="w-16 h-16 text-indigo-400" />
              </motion.div>

              {/* Floating Code Snippet Card */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.3 }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-12 left-12 bg-neutral-900 border border-white/10 p-4 rounded-xl font-mono text-[10px] text-blue-300 hidden md:block"
              >
                <div className="mb-2 text-gray-500">
                  // lighthouse-report.json
                </div>
                <div>{"{"}</div>
                <div className="pl-4">
                  "performance": <span className="text-emerald-400">0.97</span>,
                </div>
                <div className="pl-4">"accessibility": 1.0,</div>
                <div className="pl-4">"seo": 1.0</div>
                <div>{"}"}</div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="relative py-28 px-6 bg-[#020617] overflow-hidden">
          {/* Subtle Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Background Warning Glow */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="w-[800px] h-[400px] bg-red-500/5 blur-[120px] rounded-full mix-blend-screen" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Apakah Website Anda Mengalami Masalah Ini?
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                Banyak website bisnis mengalami masalah yang menghambat
                pertumbuhan digital mereka. Kenali tanda-tandanya sebelum
                terlambat.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.1 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                {
                  title: "Desain Sudah Jadul",
                  desc: "Tampilan website tidak lagi menarik dan terlihat ketinggalan zaman, menurunkan kepercayaan pengunjung.",
                  icon: FileX2,
                  color: "text-orange-400",
                  bg: "bg-orange-500/10",
                  border: "group-hover:border-orange-500/30",
                },
                {
                  title: "Tidak Mobile Friendly",
                  desc: "Website terlihat berantakan atau sulit digunakan di perangkat mobile, membuat pengguna frustrasi.",
                  icon: SmartphoneNfc,
                  color: "text-red-400",
                  bg: "bg-red-500/10",
                  border: "group-hover:border-red-500/30",
                },
                {
                  title: "Fitur Tidak Berfungsi",
                  desc: "Beberapa tombol, form kontak, atau fitur penting lainnya error dan tidak berjalan dengan baik.",
                  icon: AlertTriangle,
                  color: "text-yellow-400",
                  bg: "bg-yellow-500/10",
                  border: "group-hover:border-yellow-500/30",
                },
                {
                  title: "Sulit Mengubah Konten",
                  desc: "Update konten, promo, atau informasi produk sangat sulit dilakukan tanpa bantuan programmer.",
                  icon: Settings2,
                  color: "text-blue-400",
                  bg: "bg-blue-500/10",
                  border: "group-hover:border-blue-500/30",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className={`group relative p-8 rounded-2xl border border-white/5 bg-slate-900/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-slate-900/60 ${item.border}`}
                >
                  <div
                    className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Decorative corner accent */}
                  <div
                    className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/5 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="relative py-28 px-6 bg-[#020617] overflow-hidden">
          {/* Subtle Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-24"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Bagaimana Proses Kami Bekerja?
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                Kami memiliki proses kerja yang terstruktur untuk memastikan
                setiap proyek website berjalan dengan lancar dan menghasilkan
                hasil terbaik.
              </p>
            </motion.div>

            <div className="relative">
              {/* Connecting Line (Desktop) */}
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 -translate-y-1/2 hidden md:block" />

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ staggerChildren: 0.1 }}
                className="grid md:grid-cols-3 gap-8 relative z-10"
              >
                {[
                  {
                    step: "01",
                    title: "Consultation",
                    desc: "Diskusi mendalam mengenai kebutuhan, masalah website saat ini, dan tujuan bisnis Anda.",
                    icon: MessagesSquare,
                    color: "text-blue-400",
                    bg: "bg-blue-500/10",
                    border: "hover:border-blue-500/50",
                  },
                  {
                    step: "02",
                    title: "Proposal",
                    desc: "Kami memberikan solusi teknis terbaik beserta estimasi biaya transparan dan timeline pengerjaan.",
                    icon: FileText,
                    color: "text-indigo-400",
                    bg: "bg-indigo-500/10",
                    border: "hover:border-indigo-500/50",
                  },
                  {
                    step: "03",
                    title: "Work in Progress",
                    desc: "Tim developer dan designer mulai mengerjakan proses redesign website dengan standar coding modern.",
                    icon: Code2,
                    color: "text-purple-400",
                    bg: "bg-purple-500/10",
                    border: "hover:border-purple-500/50",
                  },
                  {
                    step: "04",
                    title: "Feedback",
                    desc: "Anda dapat meninjau hasil sementara (preview link) dan memberikan masukan untuk penyempurnaan.",
                    icon: ListTodo,
                    color: "text-pink-400",
                    bg: "bg-pink-500/10",
                    border: "hover:border-pink-500/50",
                  },
                  {
                    step: "05",
                    title: "Finishing",
                    desc: "Finalisasi desain, optimasi performa, SEO basic, dan testing menyeluruh sebelum peluncuran.",
                    icon: Rocket,
                    color: "text-orange-400",
                    bg: "bg-orange-500/10",
                    border: "hover:border-orange-500/50",
                  },
                  {
                    step: "06",
                    title: "After Sales Support",
                    desc: "Kami tetap memberikan bantuan teknis, garansi error, dan dukungan setelah website Anda online.",
                    icon: Headset,
                    color: "text-emerald-400",
                    bg: "bg-emerald-500/10",
                    border: "hover:border-emerald-500/50",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    className={`group relative p-8 rounded-2xl border border-white/5 bg-slate-900/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-slate-900/80 ${item.border}`}
                  >
                    <div className="absolute top-4 right-4 text-4xl font-bold text-white/5 select-none font-mono">
                      {item.step}
                    </div>

                    <div
                      className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className={`w-7 h-7 ${item.color}`} />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="relative py-28 px-6 bg-[#020617] overflow-hidden">
          {/* Subtle Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Dipercaya oleh Berbagai Instansi dan Perusahaan
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                Kami telah membantu berbagai perusahaan, instansi pemerintah,
                dan organisasi dalam membangun website profesional mereka.
              </p>
            </motion.div>

            <div className="relative">
              {/* Fade Edges */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-20 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-20 pointer-events-none" />

              <div className="flex flex-col gap-8">
                {/* Row 1 - Scroll Left */}
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: "-50%" }}
                  transition={{
                    repeat: Infinity,
                    duration: 40,
                    ease: "linear",
                  }}
                  className="flex gap-8 w-max"
                >
                  {[...logos, ...logos, ...logos].map((l, i) => (
                    <div
                      key={`r1-${i}`}
                      className="w-64 h-24 bg-slate-900/50 rounded-xl border border-white/5 flex items-center justify-center p-6 group hover:border-blue-500/30 hover:bg-slate-900/80 transition-all duration-300"
                    >
                      <img
                        src={l.logo}
                        alt={l.name}
                        className="max-h-12 w-auto opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110"
                      />
                    </div>
                  ))}
                </motion.div>

                {/* Row 2 - Scroll Right */}
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
                      className="w-64 h-24 bg-slate-900/50 rounded-xl border border-white/5 flex items-center justify-center p-6 group hover:border-indigo-500/30 hover:bg-slate-900/80 transition-all duration-300"
                    >
                      <img
                        src={l.logo}
                        alt={l.name}
                        className="max-h-12 w-auto opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Decorative Floating Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 left-10 opacity-20"
              >
                <Building2 className="w-20 h-20 text-blue-500" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-10 right-10 opacity-20"
              >
                <Globe2 className="w-20 h-20 text-indigo-500" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="relative py-28 px-6 bg-[#020617] overflow-hidden">
          {/* Subtle Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Lihat Bagaimana Kami Melakukan Perubahan
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                Geser slider untuk melihat transformasi visual dari website
                klien kami sebelum dan sesudah redesign.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              {beforeAfter.map((item) => (
                <BeforeAfter
                  key={item.name}
                  name={item.name}
                  desc={item.desc}
                  before={item.before}
                  after={item.after}
                  link={item.link}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-28 px-6 bg-[#020617] overflow-hidden">
          {/* Subtle Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Melayani Klien dari Seluruh Indonesia
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                Kami telah membantu berbagai bisnis dari Sabang hingga Merauke
                dalam membangun website profesional yang modern dan optimal.
              </p>
            </motion.div>

            <div className="relative w-full max-w-[900px] mx-auto">
              {/* Map Container - Aspect Ratio locked to SVG viewBox 800:300 */}
              <div className="relative aspect-[8/3] w-full bg-[#020617] rounded-[2rem] border border-white/5 shadow-2xl overflow-hidden group">
                {/* Tech Grid Background */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />

                {/* SVG Map of Indonesia */}
                <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8 z-10">
                  <IndonesiaMap className="w-full h-full drop-shadow-lg" />
                </div>

                {/* Glowing Locations */}
                {[
                  { name: "Jakarta", top: "60%", left: "26%", delay: 0 },
                  { name: "Bandung", top: "62%", left: "28%", delay: 0.2 },
                  { name: "Surabaya", top: "62%", left: "40%", delay: 0.4 },
                  { name: "Yogyakarta", top: "63%", left: "35%", delay: 0.6 },
                  { name: "Medan", top: "23%", left: "16%", delay: 0.8 },
                  { name: "Makassar", top: "47%", left: "49%", delay: 1.0 },
                  { name: "Denpasar", top: "65%", left: "46%", delay: 1.2 },
                  { name: "Papua", top: "43%", left: "75%", delay: 1.4 },
                ].map((city, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: city.delay, duration: 0.5 }}
                    className="absolute z-20"
                    style={{ top: city.top, left: city.left }}
                  >
                    <div className="relative group cursor-pointer -translate-x-1/2 -translate-y-1/2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,1)] relative z-10" />
                      <div className="absolute inset-0 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-75" />

                      {/* Tooltip on hover */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-30">
                        <div className="bg-slate-900/90 backdrop-blur border border-white/10 px-3 py-1.5 rounded-lg text-xs font-semibold text-white shadow-xl">
                          {city.name}
                        </div>
                        <div className="w-2 h-2 bg-slate-900/90 border-r border-b border-white/10 rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2" />
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Animated Connection Lines (Stylized) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 mix-blend-screen">
                  <motion.path
                    d="M 26% 60% Q 37% 53% 49% 47%" // Jakarta -> Makassar
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.5 }}
                    transition={{ duration: 2, delay: 1.5 }}
                  />
                  <motion.path
                    d="M 26% 60% Q 21% 41% 16% 23%" // Jakarta -> Medan
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.5 }}
                    transition={{ duration: 2, delay: 1.7 }}
                  />
                  <motion.path
                    d="M 49% 47% Q 62% 45% 75% 43%" // Makassar -> Papua
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.5 }}
                    transition={{ duration: 2, delay: 1.9 }}
                  />
                  <defs>
                    <linearGradient
                      id="lineGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
                      <stop offset="50%" stopColor="rgba(59, 130, 246, 0.8)" />
                      <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Decorative Tech Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-10 right-10 opacity-10"
              >
                <Network className="w-24 h-24 text-blue-500" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-10 left-10 opacity-10"
              >
                <MapPin className="w-16 h-16 text-emerald-500" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="relative py-28 px-6 bg-[#020617] overflow-hidden">
          {/* Subtle Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Background Glow */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="w-[800px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full mix-blend-screen" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Apa yang Akan Anda Dapatkan?
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                Kami tidak hanya membuat website yang indah, tetapi juga
                memastikan website Anda mudah digunakan, mudah dikelola, dan
                siap berkembang bersama bisnis Anda.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.1 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                {
                  title: "Mudah Berkomunikasi",
                  desc: "Tim kami siap membantu Anda dengan komunikasi yang jelas dan responsif setiap saat.",
                  icon: MessagesSquare,
                  color: "text-blue-400",
                  bg: "bg-blue-500/10",
                  border: "group-hover:border-blue-500/50",
                },
                {
                  title: "Mudah Mendapatkan Bantuan",
                  desc: "Kami menyediakan support teknis prioritas jika Anda membutuhkan bantuan mendesak.",
                  icon: LifeBuoy,
                  color: "text-indigo-400",
                  bg: "bg-indigo-500/10",
                  border: "group-hover:border-indigo-500/50",
                },
                {
                  title: "Mudah Update Konten",
                  desc: "Website dirancang dengan CMS yang user-friendly agar Anda dapat mengubah konten dengan mudah.",
                  icon: FileEdit,
                  color: "text-purple-400",
                  bg: "bg-purple-500/10",
                  border: "group-hover:border-purple-500/50",
                },
                {
                  title: "Mudah Upgrade",
                  desc: "Arsitektur website yang fleksibel memungkinkan penambahan fitur baru di masa depan.",
                  icon: TrendingUp,
                  color: "text-emerald-400",
                  bg: "bg-emerald-500/10",
                  border: "group-hover:border-emerald-500/50",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className={`group relative p-8 rounded-2xl border border-white/5 bg-slate-900/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-slate-900/80 ${item.border}`}
                >
                  <div
                    className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className={`w-7 h-7 ${item.color}`} />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Decorative corner accent */}
                  <div
                    className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/5 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="relative py-28 px-6 bg-[#020617] overflow-hidden">
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
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-5xl mx-auto">
                Apa pendapat mereka tentang <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  jasa pembuatan web dari Imajiner?
                </span>
              </h2>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                Berikut adalah beberapa ulasan tulus dari klien-klien yang telah
                mempercayakan pembuatan website mereka kepada kami.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-12 gap-12 items-start mb-32">
              {/* Left Side: Main Video Testimonial */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-7"
              >
                <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900 group shadow-2xl hover:shadow-blue-900/20 transition-all duration-500">
                  {/* Video Thumbnail Placeholder */}
                  <div className="aspect-video bg-slate-800 relative overflow-hidden group cursor-pointer">
                    <img
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000&auto=format&fit=crop"
                      alt="Pak Ghalistan"
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-20 h-20 flex items-center justify-center">
                        <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20" />
                        <div className="relative w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8 text-white fill-white ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-8 bg-slate-900/90 backdrop-blur border-t border-white/5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-1">
                          Ghalistan
                        </h4>
                        <p className="text-blue-400 font-medium">
                          UPPF Indonesia
                        </p>
                      </div>
                      <Quote className="w-10 h-10 text-white/10" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Side: Video Testimonial List */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-5 flex flex-col h-full"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <Video className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">30 Videos</h3>
                </div>

                <div className="space-y-4">
                  {[
                    { name: "Ibu Kiki", company: "PT Citradata Purnakharisma" },
                    { name: "Pak Bara", company: "PT Bina Selamat Veritas" },
                    {
                      name: "Pak Mulia",
                      company: "PT PLN Indonesia Power Renewables",
                    },
                    { name: "Pak Herry", company: "PT Barokah Intisari" },
                    { name: "Pak Firdaus", company: "Sosok Bisnis" },
                    { name: "Pak Aldy", company: "Indomotor Lestari" },
                  ].map((client, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5, y: -2 }}
                      className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 cursor-pointer transition-all duration-300 hover:border-blue-500/30 hover:bg-white/10 hover:shadow-lg backdrop-blur-sm"
                    >
                      <div className="w-12 h-12 rounded-full bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300">
                        <Play className="w-4 h-4 text-blue-400 fill-blue-400 group-hover:text-white group-hover:fill-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                          {client.name}
                        </h4>
                        <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                          {client.company}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 text-center">
                  <Link
                    to="/testimonials"
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors group"
                  >
                    View All Testimonials
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Final CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-white/10 p-12 text-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/20 blur-[100px] rounded-full" />

              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Tim Kami Siap Membantu Anda
                </h2>
                <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                  Jangan biarkan website lama menghambat pertumbuhan bisnis
                  Anda. Konsultasikan kebutuhan website Anda sekarang dan
                  dapatkan solusi terbaik.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Konsultasi Sekarang
                  </Link>
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold border border-white/10 transition-all"
                  >
                    Lihat Portfolio
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}

function BeforeAfter({
  name,
  desc,
  before,
  after,
  link,
}: {
  name: string;
  desc: string;
  before: string;
  after: string;
  link: string;
}) {
  const [percent, setPercent] = useState(50);
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-sm overflow-hidden hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-1">
      {/* Device Frame (Laptop) */}
      <div className="p-4 md:p-6 pb-0">
        <div className="relative rounded-t-xl overflow-hidden border-[6px] border-b-0 border-neutral-800 bg-neutral-900 shadow-2xl">
          {/* Camera Dot */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-neutral-700 z-20" />

          <div className="relative aspect-[16/10] bg-neutral-900 overflow-hidden group/slider">
            <img
              src={before}
              alt="Before"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <div
              className="absolute inset-0 w-full h-full"
              style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}
            >
              <img
                src={after}
                alt="After"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize z-10"
              style={{ left: `${percent}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
                <div className="flex gap-0.5">
                  <div className="w-0.5 h-3 bg-neutral-400" />
                  <div className="w-0.5 h-3 bg-neutral-400" />
                </div>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur text-white text-xs font-bold px-2 py-1 rounded border border-white/10">
              BEFORE
            </div>
            <div className="absolute top-4 right-4 bg-blue-600/80 backdrop-blur text-white text-xs font-bold px-2 py-1 rounded border border-white/10">
              AFTER
            </div>

            {/* Invisible Range Input */}
            <input
              type="range"
              min={0}
              max={100}
              value={percent}
              onChange={(e) => setPercent(parseInt(e.target.value, 10))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
            />
          </div>
        </div>
        {/* Laptop Bottom Deck */}
        <div className="h-3 bg-neutral-800 rounded-b-lg relative mx-auto w-[102%] shadow-xl flex items-center justify-center">
          <div className="w-16 h-1 bg-neutral-700 rounded-b-md" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 pt-4">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {name}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
          {desc}
        </p>

        <a
          href={link}
          className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 px-5 py-2.5 rounded-full transition-all hover:scale-105 shadow-lg shadow-blue-500/20"
        >
          <Laptop2 className="w-4 h-4" />
          Lihat Website
          <ExternalLink className="w-3 h-3 opacity-70" />
        </a>
      </div>
    </div>
  );
}
