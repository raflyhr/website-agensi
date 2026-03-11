import { Phone, Clock, MapPin, MessageCircle, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <div className="relative min-h-screen">
      {/* 1. Header Section (Papan Nama) */}
      <section className="w-full bg-blue-50/50 dark:bg-slate-800/50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="page-header mb-0! text-left md:text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white">
              Contact <span className="text-blue-600 dark:text-blue-400">Us</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl md:mx-auto">
              Kami paham bahwa membangun website adalah langkah besar. 
              Konsultasikan ide Anda secara gratis dengan tim ahli kami.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Info Grid Section (Ruang Kerja) */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 relative z-10">
        <section className="grid md:grid-cols-2 gap-8 lg:gap-12 pb-24">
          
          {/* Sisi Kiri: Bantuan & Waktu */}
          <div className="space-y-8">
            <div className="premium-card p-8 lg:p-12 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  Butuh Bantuan?
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                  Kontak kami untuk berkonsultasi mengenai kebutuhan website, 
                  strategi digital, atau kendala teknis yang Anda hadapi. 
                  Tim kami siap memberikan solusi terbaik.
                </p>
              </div>
              
              <div className="space-y-6">
                <a 
                  href="tel:+6282373336946" 
                  className="inline-flex items-center space-x-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 dark:bg-slate-800 flex items-center justify-center text-white group-hover:bg-blue-600 transition-colors shadow-lg">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Panggil Kami</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">+62 823 7333 6946</p>
                  </div>
                </a>

                <div className="pt-8 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Available from</h3>
                      <p className="font-semibold text-slate-700 dark:text-slate-300">Monday to Friday</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">09.00 - 18.00 WIB (GMT+7)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Lokasi & Map */}
          <div className="space-y-8">
            <div className="premium-card p-0 overflow-hidden flex flex-col h-full">
              <div className="p-8 lg:p-10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Our Location</h2>
                </div>
                <p className="font-bold text-slate-900 dark:text-white">PT NUSIFY DIGITAL KREATIF</p>
                <p className="text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  Jl. Tarumanegara II No.18a, Bogor Selatan,<br />
                  Jawa Barat, Indonesia 16137
                </p>
              </div>

              {/* Map Container */}
              <div className="grow min-h-[300px] relative bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15852.793774845!2d106.7909!3d-6.6231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5c772099351%3A0x2a98f12128a313e6!2sBogor%20Selatan%2C%20Bogor%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1710000000000!5m2!1sen!2sid" 
                  className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 3. CTA Section (Jabat Tangan) */}
      <section className="relative py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 overflow-hidden">
        {/* Background Decorations */}
        <div className="bg-ornament-blue"></div>
        <div className="bg-ornament-purple"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-slate-900 dark:text-white tracking-tight">
            Build Your <span className="bg-linear-to-r from-blue-600 to-brand-purple bg-clip-text text-transparent">Dream Website</span> Today!
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12">
            Kami paham membangun website adalah investasi besar. Sampaikan kebutuhan 
            Anda dan kami akan berikan penawaran terbaik sesuai budget Anda.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                  href="https://wa.me/6288980840381"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-linear-to-r from-brand-blue to-brand-purple text-white font-bold rounded-2xl shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center group"
                >
                  Konsultasi Sekarang
                  <MessageCircle className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
