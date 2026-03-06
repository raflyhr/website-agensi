import React from "react";
import {
  ShieldAlert,
  TrendingUp,
  Users,
  Clock,
  Monitor,
  Sparkles,
} from "lucide-react";
import NusifyMascot from "./NusifyMascot";

const DigitalEraSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-white dark:bg-slate-900">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-20 dark:opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-400 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-purple-400 blur-[100px] rounded-full animate-float"></div>
      </div>

      {/* Dotted Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#475569 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-sm font-bold tracking-wide">
              <Sparkles className="w-4 h-4 mr-2 text-brand-blue" />
              Digital Transformation Insights
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Apakah bisnis Anda siap <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
                berkompetisi di era digital?
              </span>
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              Di era yang serba cepat ini, kehadiran digital bukan lagi pilihan,
              melainkan keharusan. Tanpa website yang profesional, bisnis Anda
              kehilangan peluang emas untuk menjangkau jutaan calon pelanggan
              setiap detiknya.
            </p>

            <div className="space-y-4">
              <div className="flex items-start p-4 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 rounded-2xl group transition-all duration-300 hover:shadow-md">
                <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg mr-4">
                  <ShieldAlert className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    Sulit eksis di Search Engine Google
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Bisnis Anda tidak akan ditemukan saat pelanggan mencari
                    solusi yang Anda tawarkan.
                  </p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/20 rounded-2xl group transition-all duration-300 hover:shadow-md">
                <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg mr-4">
                  <Monitor className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    Terkesan tidak profesional
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Ketiadaan website menurunkan tingkat kepercayaan (trust)
                    calon pelanggan terhadap brand Anda.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Highlight Box */}
            <div className="relative inline-block p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 animate-float delay-700">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-10 bg-gradient-to-b from-brand-blue to-brand-purple rounded-full"></div>
                <p className="text-lg font-bold text-slate-800 dark:text-slate-200">
                  "Website adalah kantor digital bisnis Anda."
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Stats & Mascot */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 md:gap-6 relative z-10">
              {/* Stat Card 1 */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-xl border border-slate-50 dark:border-slate-700 transform hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-1">
                  7+ Jam
                </h3>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Rata-rata penggunaan internet harian di Indonesia
                </p>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-xl border border-slate-50 dark:border-slate-700 transform translate-y-8 hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-1">
                  90%
                </h3>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Pelanggan cek kehadiran online sebelum membeli
                </p>
              </div>

              {/* Stat Card 3 (Visual Placeholder) */}
              <div className="col-span-2 mt-4 bg-gradient-to-br from-brand-blue to-brand-purple p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                <div className="relative z-10 flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-blue-100 font-bold uppercase tracking-widest text-xs">
                      Market Growth
                    </p>
                    <h3 className="text-2xl font-bold text-white">
                      Digital Economy Indonesia 2025
                    </h3>
                    <div className="flex items-center text-white/90 font-bold text-xl">
                      <TrendingUp className="w-6 h-6 mr-2" />
                      $146 Billion
                    </div>
                  </div>
                </div>
                {/* Decorative circle in card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              </div>
            </div>

            {/* Nusify Mascot Component */}
            <div className="absolute -bottom-16 -right-12 md:-right-20 w-48 md:w-64 z-20 pointer-events-none">
              <NusifyMascot />
              {/* Badge for Mascot */}
              <div className="absolute top-10 right-4 bg-white dark:bg-slate-800 px-3 py-1 rounded-full shadow-lg border border-slate-100 dark:border-slate-700 text-[10px] font-black text-brand-blue uppercase tracking-tighter transform rotate-12">
                Nusify Buddy
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalEraSection;
