import { Sparkles, ShieldCheck, MessageSquare, MousePointerClick, TrendingUp } from 'lucide-react';
import NusifyMascot from './NusifyMascot';

const BenefitSection = () => {
  const benefits = [
    {
      icon: <Sparkles className="w-8 h-8 text-blue-500" />,
      title: "Menarik dan Standout",
      description: "Desain visual yang unik dan modern memastikan brand Anda langsung mencuri perhatian di tengah keramaian digital.",
      color: "from-blue-500/20 to-indigo-500/20",
      iconBg: "bg-blue-100 dark:bg-blue-900/30"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-purple-500" />,
      title: "Kredibilitas Perusahaan",
      description: "Website profesional membangun kepercayaan instan bagi calon klien dan menunjukkan standar tinggi bisnis Anda.",
      color: "from-purple-500/20 to-pink-500/20",
      iconBg: "bg-purple-100 dark:bg-purple-900/30"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-emerald-500" />,
      title: "Value Bisnis Tersampaikan",
      description: "Konsep konten yang strategis menyampaikan pesan bisnis Anda dengan jelas tanpa membosankan pengunjung.",
      color: "from-emerald-500/20 to-teal-500/20",
      iconBg: "bg-emerald-100 dark:bg-emerald-900/30"
    },
    {
      icon: <MousePointerClick className="w-8 h-8 text-orange-500" />,
      title: "Konversi Action Tinggi",
      description: "Elemen navigasi dan CTA yang dirancang khusus memotivasi pengunjung untuk segera mengambil tindakan.",
      color: "from-orange-500/20 to-red-500/20",
      iconBg: "bg-orange-100 dark:bg-orange-900/30"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-white dark:bg-slate-900">
      {/* Background Enhancements */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>
      
      {/* Soft Glow behind section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-brand-blue/5 via-transparent to-brand-purple/5 blur-[120px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 text-blue-600 dark:text-blue-400 text-sm font-bold tracking-wide uppercase">
            <TrendingUp className="w-4 h-4 mr-2" />
            The Nusify Advantage
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Bisnis Anda butuh website dengan desain <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
              dan konsep yang menarik agar...
            </span>
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative bg-white dark:bg-slate-800 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
            >
              {/* Card Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 space-y-6">
                <div className={`w-16 h-16 ${benefit.iconBg} rounded-2xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-sm`}>
                  {benefit.icon}
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-blue transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Bottom line decoration */}
                <div className="w-10 h-1 bg-slate-200 dark:bg-slate-700 rounded-full group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-brand-blue group-hover:to-brand-purple transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle Mascot Observer */}
        <div className="mt-16 flex justify-center lg:justify-end">
          <div className="relative group opacity-50 hover:opacity-100 transition-opacity duration-500">
            <div className="absolute -top-12 -left-20 bg-slate-900 text-white text-[10px] font-bold px-4 py-2 rounded-2xl shadow-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
               Your business deserves the best! 🚀
            </div>
            <div className="w-32 h-32 md:w-40 md:h-40">
              <NusifyMascot />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
