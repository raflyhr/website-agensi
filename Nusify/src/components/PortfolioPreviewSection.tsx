import { Link } from "react-router-dom";
import { ExternalLink, Globe, ChevronRight, Award } from "lucide-react";

const PortfolioPreviewSection = () => {
  const clients = [
    { name: "rscarolus.or.id", category: "Healthcare", color: "from-blue-500/10 to-blue-600/10" },
    { name: "proban.co.id", category: "Automotive", color: "from-purple-500/10 to-purple-600/10" },
    { name: "kingsmenindonesia.co.id", category: "Production House", color: "from-emerald-500/10 to-emerald-600/10" },
    { name: "hyundaiinternusa.com", category: "Automotive Dealer", color: "from-indigo-500/10 to-indigo-600/10" },
    { name: "plnindonesiapowerrenewables.co.id", category: "Energy & Renewables", color: "from-orange-500/10 to-orange-600/10" },
    { name: "Nusify Ecosystem", category: "Internal Project", color: "from-pink-500/10 to-pink-600/10" },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/30 text-indigo-600 dark:text-indigo-400 text-sm font-bold tracking-wide uppercase animate-fade-in">
            <Award className="w-4 h-4 mr-2" />
            Trusted by Industry Leaders
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Ingin punya website profesional yang menarik dan standout? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-indigo-500 to-brand-purple">
              Nusify dapat membantu Anda
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Nusify telah berpengalaman menangani pembuatan website lebih dari{" "}
            <span className="font-bold text-slate-900 dark:text-white">500 perusahaan</span>{" "}
            di seluruh Indonesia.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="group relative bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Background Glow on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${client.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                    <Globe className="w-6 h-6 text-brand-blue" />
                  </div>
                  <ExternalLink className="w-5 h-5 text-slate-300 group-hover:text-brand-purple transition-colors" />
                </div>
                
                <div className="space-y-2">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-brand-blue transition-colors">
                    {client.category}
                  </p>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white break-words">
                    {client.name}
                  </h3>
                </div>

                <div className="flex items-center text-xs font-bold text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                  Visit Project <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button Section */}
        <div className="flex flex-col items-center justify-center space-y-8 relative">
          {/* Background Glow for CTA */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-24 bg-brand-blue/20 blur-[60px] pointer-events-none"></div>
          
          <Link
            to="/portfolio"
            className="group relative px-10 py-5 bg-gradient-to-r from-brand-blue to-brand-purple text-white font-bold rounded-2xl shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.05] active:scale-95 transition-all duration-300 flex items-center justify-center overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Lihat 200+ Portfolio Kami
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
            {/* Shiny effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-shimmer"></div>
          </Link>
          
          <p className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
            Join 500+ Happy Clients
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreviewSection;
