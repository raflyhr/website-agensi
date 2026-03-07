import { ArrowRight, CheckCircle2 } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description:
        "Kami memahami kebutuhan bisnis Anda melalui diskusi awal untuk menentukan tujuan website dan fitur yang dibutuhkan.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      number: "02",
      title: "Proposal",
      description:
        "Tim Nusify menyiapkan proposal yang berisi konsep website, timeline pengerjaan, dan estimasi biaya.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      number: "03",
      title: "Design",
      description:
        "Kami mulai merancang tampilan website yang modern, responsif, dan sesuai dengan identitas brand Anda.",
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "04",
      title: "Development",
      description:
        "Tim developer kami mengubah desain menjadi website yang cepat, aman, dan siap digunakan.",
      color: "from-pink-500 to-rose-500",
    },
    {
      number: "05",
      title: "Feedback & Revision",
      description:
        "Kami memberikan kesempatan bagi Anda untuk memberikan masukan dan melakukan revisi agar hasil akhir sesuai harapan.",
      color: "from-rose-500 to-orange-500",
    },
    {
      number: "06",
      title: "Launch & Support",
      description:
        "Setelah website selesai, kami membantu proses peluncuran serta memberikan dukungan teknis jika diperlukan.",
      color: "from-orange-500 to-amber-500",
    },
  ];

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

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Proses Kerja Kami
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Kami memiliki proses kerja yang terstruktur agar setiap proyek
            website berjalan lancar, transparan, dan tepat waktu.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Process Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 order-2 lg:order-1">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative bg-slate-50 dark:bg-slate-800/50 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 overflow-hidden"
              >
                {/* Step Number Background */}
                <div className="absolute -top-4 -right-4 text-8xl font-black text-slate-200/40 dark:text-slate-700/20 group-hover:text-brand-blue/10 transition-colors pointer-events-none">
                  {step.number}
                </div>

                <div className="relative z-10 space-y-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg transform group-hover:rotate-6 transition-transform`}
                  >
                    <CheckCircle2 className="w-6 h-6" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center">
                      <span className="text-brand-blue mr-2">
                        Step {step.number} —
                      </span>
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Team Image Placeholder */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-blue/10 blur-[100px] -z-10 rounded-full"></div>

            <div className="relative animate-float">
              {/* Image Cut-out Mockup using a Placeholder Image */}
              <div className="relative z-10 max-w-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                  alt="Nusify Team"
                  className="rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 border-8 border-white dark:border-slate-800"
                />
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-6 rounded-[2rem] shadow-2xl border border-slate-100 dark:border-slate-700 flex items-center space-x-4 animate-bounce-slow">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">
                      Ready to help
                    </p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      Professional Team
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-brand-purple/20 blur-3xl rounded-full"></div>
              <div className="absolute bottom-20 -right-10 w-40 h-40 bg-brand-blue/20 blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
