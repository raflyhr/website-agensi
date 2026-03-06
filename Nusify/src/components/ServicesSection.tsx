import { 
  Palette, 
  Lightbulb, 
  Code2, 
  Zap, 
  Settings, 
  CheckCircle2,
  Sparkles
} from "lucide-react";
import NusifyMascot from "./NusifyMascot";

const ServicesSection = () => {
  const services = [
    {
      title: "Design with Purpose",
      description: "Website didesain secara custom untuk menunjang brand identity dan kredibilitas bisnis Anda. Layout dan elemen visual dioptimalkan untuk menarik target audience.",
      icon: <Palette className="w-8 h-8" />,
      color: "blue",
      delay: "0"
    },
    {
      title: "Strategic Website Concept",
      description: "Setiap website dirancang dengan konsep yang matang agar mampu menyampaikan pesan bisnis secara efektif dan memberikan pengalaman terbaik bagi pengunjung.",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "purple",
      delay: "100"
    },
    {
      title: "Professional Development",
      description: "Website dikembangkan menggunakan teknologi modern dengan performa tinggi, keamanan yang baik, serta mudah digunakan oleh pengunjung.",
      icon: <Code2 className="w-8 h-8" />,
      color: "indigo",
      delay: "200"
    },
    {
      title: "Website Optimization",
      description: "Website dioptimalkan agar cepat diakses, mobile friendly, serta mendukung performa SEO agar lebih mudah ditemukan di mesin pencari.",
      icon: <Zap className="w-8 h-8" />,
      color: "emerald",
      delay: "300"
    },
    {
      title: "Maintenance & Support",
      description: "Kami menyediakan layanan maintenance dan support agar website bisnis Anda tetap aman, stabil, dan selalu up to date.",
      icon: <Settings className="w-8 h-8" />,
      color: "orange",
      delay: "400"
    },
    {
      title: "End-to-End Excellence",
      description: "Dari penyusunan konsep hingga peluncuran, kami memastikan setiap detail website Anda sempurna dan siap bersaing di pasar digital.",
      icon: <CheckCircle2 className="w-8 h-8" />,
      color: "rose",
      delay: "500"
    }
  ];

  const getColorClasses = (color: string) => {
    const classes: { [key: string]: string } = {
      blue: "text-blue-500 bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800/30 group-hover:bg-blue-500 group-hover:text-white",
      purple: "text-purple-500 bg-purple-50 dark:bg-purple-900/20 border-purple-100 dark:border-purple-800/30 group-hover:bg-purple-500 group-hover:text-white",
      indigo: "text-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 border-indigo-100 dark:border-indigo-800/30 group-hover:bg-indigo-500 group-hover:text-white",
      emerald: "text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 border-emerald-100 dark:border-emerald-800/30 group-hover:bg-emerald-500 group-hover:text-white",
      orange: "text-orange-500 bg-orange-50 dark:bg-orange-900/20 border-orange-100 dark:border-orange-800/30 group-hover:bg-orange-500 group-hover:text-white",
      rose: "text-rose-500 bg-rose-50 dark:bg-rose-900/20 border-rose-100 dark:border-rose-800/30 group-hover:bg-rose-500 group-hover:text-white"
    };
    return classes[color] || classes.blue;
  };

  return (
    <section className="relative py-24 overflow-hidden bg-white dark:bg-slate-900">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-500/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-purple-500/5 blur-[120px] rounded-full"></div>
      </div>

      {/* Dotted Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-sm font-bold tracking-wide uppercase">
            <Sparkles className="w-4 h-4 mr-2 text-brand-blue" />
            Our Expert Services
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Layanan yang kami berikan untuk <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
              bisnis profesional Anda
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Dari penyusunan konsep, desain, development, hingga maintenance website, 
            semua prosesnya mudah dan efisien.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white dark:bg-slate-800/50 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]"></div>
              
              <div className="relative z-10 space-y-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-500 shadow-sm ${getColorClasses(service.color)}`}>
                  {service.icon}
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 flex items-center text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest group-hover:text-brand-purple transition-colors">
                  Learn More <CheckCircle2 className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle Mascot Integration */}
        <div className="mt-20 flex flex-col items-center justify-center space-y-6">
          <div className="relative group">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-4 py-2 rounded-2xl shadow-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 whitespace-nowrap">
               We build with passion and precision! 🦉
            </div>
            <div className="w-32 h-32 md:w-40 md:h-40 grayscale hover:grayscale-0 transition-all duration-700 opacity-40 hover:opacity-100">
              <NusifyMascot />
            </div>
          </div>
          <p className="text-xs font-bold text-slate-400 dark:text-slate-600 uppercase tracking-[0.3em]">
            Professional Quality Guaranteed
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
