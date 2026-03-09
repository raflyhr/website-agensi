import { MessageCircle, Send, Sparkles, ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  const whatsappNumber = "6282373336946";
  const prefilledMessage =
    "Halo Nusify, saya ingin berkonsultasi untuk membangun website impian bisnis saya.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(prefilledMessage)}`;

  return (
    <section className="relative py-24 overflow-hidden bg-white dark:bg-slate-900">
      {/* Background Decorations */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#475569 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      {/* Decorative Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-purple/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Top Content Area */}
        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 text-blue-600 dark:text-blue-400 text-sm font-bold tracking-wide uppercase animate-bounce-slow">
            <Sparkles className="w-4 h-4 mr-2" />
            Start Your Digital Journey
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight">
            Bangun Website Impian <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-indigo-500 to-brand-purple">
              Bisnis Anda Sekarang
            </span>
          </h2>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Tim Nusify siap membantu Anda menciptakan website profesional yang
            meningkatkan kredibilitas dan membantu bisnis Anda berkembang.
          </p>
        </div>

        {/* Middle Area: CTA Button */}
        <div className="flex justify-center mb-24 relative">
          {/* Directional Cues (Subtle Arrows/Lines) */}
          <div className="absolute -top-12 left-1/2 -translate-x-32 hidden md:block opacity-20 rotate-[-15deg]">
            <ArrowRight className="w-12 h-12 text-brand-blue rotate-[220deg]" />
          </div>
          <div className="absolute -top-12 left-1/2 translate-x-20 hidden md:block opacity-20 rotate-[15deg]">
            <ArrowRight className="w-12 h-12 text-brand-purple rotate-[-40deg]" />
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-brand-blue to-brand-purple text-white font-bold text-lg rounded-2xl shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.05] active:scale-95 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              <MessageCircle className="w-6 h-6 mr-3 fill-current" />
              Konsultasi Sekarang
              <Send className="w-5 h-5 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-shimmer"></div>
          </a>
        </div>

        {/* Bottom Area: Team Showcase */}
        <div className="relative mt-20 flex justify-center">
          {/* Background Glow behind team */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-[2/1] bg-gradient-to-t from-brand-blue/20 via-transparent to-transparent blur-[100px] -z-10 rounded-full"></div>

          <div className="relative group animate-float">
            {/* Team Showcase Cut-out Image Placeholder */}
            <div className="max-w-5xl mx-auto overflow-hidden">
              {/* Using a friendly business group photo placeholder */}
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
                alt="Nusify Professional Team"
                className="w-full h-auto rounded-[4rem] grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl border-4 border-white/10 dark:border-slate-800 transform hover:scale-[1.02]"
              />
            </div>

            {/* Floating Speech Bubble for Mascot */}
            <div className="absolute -top-10 -right-4 md:-right-10 bg-white dark:bg-slate-800 p-4 md:p-6 rounded-[2rem] shadow-2xl border border-slate-100 dark:border-slate-700 max-w-[200px] md:max-w-[250px] animate-bounce-slow">
              <p className="text-xs md:text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                "Kami sudah tidak sabar untuk mulai membangun website impian
                Anda!" 🦉
              </p>
              <div className="absolute bottom-[-10px] right-10 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white dark:border-t-slate-800"></div>
            </div>

            {/* Trust Badges below team */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 group-hover:opacity-100 transition-opacity">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  Premium Quality
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  Fast Delivery
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  Lifetime Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
