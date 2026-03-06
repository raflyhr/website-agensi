import { Target, Users, Search, AlertCircle, BarChart3, Globe } from 'lucide-react';
import NusifyMascot from './NusifyMascot';

const ProblemAwarenessSection = () => {
  const points = [
    {
      icon: <Target className="w-6 h-6 text-blue-500" />,
      text: "Website Anda harus berkompetisi dengan ratusan website lainnya untuk mendapatkan perhatian",
      bg: "bg-blue-50/50 dark:bg-blue-900/10",
      border: "border-blue-100 dark:border-blue-900/20"
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      text: "Pengunjung akan selalu membandingkan website Anda dengan kompetitor",
      bg: "bg-purple-50/50 dark:bg-purple-900/10",
      border: "border-purple-100 dark:border-purple-900/20"
    },
    {
      icon: <Search className="w-6 h-6 text-emerald-500" />,
      text: "Website yang biasa-biasa saja akan mudah dilupakan dan tenggelam",
      bg: "bg-emerald-50/50 dark:bg-emerald-900/10",
      border: "border-emerald-100 dark:border-emerald-900/20"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>
      
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="space-y-10 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800/30 text-red-600 dark:text-red-400 text-sm font-bold tracking-wide">
                <AlertCircle className="w-4 h-4 mr-2" />
                Critical Market Update
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Namun website biasa <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 italic">
                  tidaklah cukup!
                </span>
              </h2>
              
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                Menurut data dari <span className="font-bold text-slate-900 dark:text-white underline decoration-blue-500/30">websitesetup.org</span>, setiap harinya muncul:
              </p>
              
              {/* Highlight Number Card */}
              <div className="relative inline-block mt-4 group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative px-8 py-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-2xl flex items-center space-x-6">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
                    <BarChart3 className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter">
                      576.000
                    </div>
                    <div className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em] mt-1">
                      Website Baru / Hari
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Points Cards */}
            <div className="space-y-4">
              {points.map((point, index) => (
                <div 
                  key={index}
                  className={`flex items-center p-5 ${point.bg} border ${point.border} rounded-2xl transform hover:scale-[1.02] hover:shadow-lg transition-all duration-300 group cursor-default`}
                >
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm mr-5 group-hover:rotate-6 transition-transform">
                    {point.icon}
                  </div>
                  <p className="font-bold text-slate-800 dark:text-slate-200 leading-snug">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Element */}
          <div className="relative order-1 lg:order-2">
            <div className="relative z-10 p-8">
              {/* Central Mockup/Dashboard Visual */}
              <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden transform rotate-2">
                <div className="h-10 bg-slate-100 dark:bg-slate-800 flex items-center px-4 space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                  <div className="flex-1"></div>
                  <Globe className="w-4 h-4 text-slate-400" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-32 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center justify-center">
                      <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center">
                        <AlertCircle className="w-6 h-6 text-red-500 opacity-40" />
                      </div>
                    </div>
                    <div className="h-32 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800"></div>
                  </div>
                  <div className="h-20 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 animate-pulse"></div>
                  <div className="h-12 w-1/2 bg-blue-500/20 rounded-full self-center mx-auto"></div>
                </div>
              </div>

              {/* Multiple Small Browser Windows (Competition Visual) */}
              <div className="absolute -top-4 -left-4 w-48 h-32 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 -rotate-6 z-0 opacity-60"></div>
              <div className="absolute -bottom-8 -right-4 w-48 h-32 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 rotate-12 z-0 opacity-40"></div>

              {/* Mascot Observing Competition */}
              <div className="absolute -bottom-10 -left-10 w-48 md:w-56 z-20 pointer-events-none drop-shadow-2xl scale-75 lg:scale-100">
                <NusifyMascot />
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg border border-white/10 animate-bounce">
                   Wow, so many websites!
                </div>
              </div>
            </div>

            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-500/10 blur-[100px] -z-10 rounded-full"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemAwarenessSection;
