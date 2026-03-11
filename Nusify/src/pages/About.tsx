import { motion } from "framer-motion";
import { Play, Quote, Video, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const clients = [
    { name: "Ibu Kiki", company: "PT Citradata Purnakharisma" },
    { name: "Pak Bara", company: "PT Bina Selamat Veritas" },
    { name: "Pak Mulia", company: "PT PLN Indonesia Power Renewables" },
    { name: "Pak Herry", company: "PT Barokah Intisari" },
    { name: "Pak Firdaus", company: "Sosok Bisnis" },
    { name: "Pak Aldy", company: "Indomotor Lestari" },
  ];

  return (
    <div className="bg-[#020617] min-h-screen text-white overflow-hidden font-sans">
      {/* Existing Content Placeholder - Styled to match theme */}
      <section className="pt-32 pb-16 px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6"
        >
          Tentang Kami
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          Membantu bisnis lokal go digital dengan website profesional yang memukau dan fungsional.
        </motion.p>
      </section>

      {/* Premium Video Testimonial Section */}
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
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen" />
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
                {clients.map((client, index) => (
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
        </div>
      </section>
    </div>
  );
}
