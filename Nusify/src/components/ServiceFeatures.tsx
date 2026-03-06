import { 
  MonitorSmartphone, 
  LayoutDashboard, 
  ShieldCheck, 
  Zap, 
  Wrench,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const ServiceFeatures = () => {
  const features = [
    {
      title: "Responsive Design",
      description: "Website didesain untuk 3 tipe perangkat berbeda: mobile, tablet, dan desktop, sehingga tampilan website akan selalu optimal kapan pun diakses.",
      icon: <MonitorSmartphone className="w-7 h-7" />,
      gradient: "from-blue-500 to-cyan-400",
      shadow: "shadow-blue-500/10"
    },
    {
      title: "Simple Management System",
      description: "Sistem pengelolaan website yang mudah tanpa perlu berhubungan dengan hal teknis. Dilengkapi user guide yang berisi langkah-langkah mengoperasikan website secara detail.",
      icon: <LayoutDashboard className="w-7 h-7" />,
      gradient: "from-purple-500 to-pink-400",
      shadow: "shadow-purple-500/10"
    },
    {
      title: "Performance & Security Care",
      description: "Website Anda ditempatkan di cloud server dengan performansi dan perlindungan berstandar tinggi sehingga website selalu cepat diakses, nyaman digunakan, dan aman dari serangan.",
      icon: <ShieldCheck className="w-7 h-7" />,
      gradient: "from-emerald-500 to-teal-400",
      shadow: "shadow-emerald-500/10"
    },
    {
      title: "Easy & Effortless Process",
      description: "Mulai dari start hingga finish Anda akan dipandu oleh project manager yang berpengalaman. Proses pengerjaan akan terasa sangat mudah, menyenangkan, dan effortless.",
      icon: <Zap className="w-7 h-7" />,
      gradient: "from-amber-500 to-orange-400",
      shadow: "shadow-amber-500/10"
    },
    {
      title: "Full Maintenance Service",
      description: "Layanan full maintenance untuk menjaga kualitas website sehingga Anda dapat tenang dan fokus sepenuhnya pada pekerjaan tanpa gangguan.",
      icon: <Wrench className="w-7 h-7" />,
      gradient: "from-indigo-500 to-blue-400",
      shadow: "shadow-indigo-500/10"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Background Enhancements */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
            Mengapa Memilih Layanan <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
              Website Profesional Nusify?
            </span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group relative bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${feature.shadow}`}
            >
              {/* Feature Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 rounded-[3rem]"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-8 shadow-lg transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 animate-bounce-slow`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-brand-blue transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-8 flex-grow">
                  {feature.description}
                </p>

                <div className="flex items-center space-x-2 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest group-hover:text-brand-purple transition-colors">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Premium Advantage</span>
                </div>
              </div>
            </div>
          ))}

          {/* Special CTA Card */}
          <div className="group relative bg-gradient-to-br from-brand-blue to-brand-purple p-1 rounded-[2.5rem] shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-2">
            <div className="bg-white dark:bg-slate-900 h-full w-full rounded-[2.4rem] p-10 flex flex-col justify-center items-center text-center space-y-6">
              <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center animate-pulse">
                <ArrowRight className="w-10 h-10 text-brand-blue" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">
                  Siap Memulai Proyek Anda?
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                  Konsultasikan kebutuhan bisnis Anda dengan tim ahli kami secara gratis.
                </p>
              </div>
              <button className="px-8 py-3 bg-gradient-to-r from-brand-blue to-brand-purple text-white font-bold rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all">
                Mulai Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
