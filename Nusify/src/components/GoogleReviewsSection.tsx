import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, MapPin, Quote, ExternalLink } from 'lucide-react';
import NusifyMascot from './NusifyMascot';

const GoogleReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Hendy Puinoza",
      text: "Pelayanan sangat profesional dan proses pembuatan website sangat cepat. Hasilnya benar-benar sesuai dengan ekspektasi kami.",
      rating: 5,
      company: "CEO Tech Solution"
    },
    {
      id: 2,
      name: "Liandra Hie",
      text: "Website bisnis kami terlihat jauh lebih profesional setelah menggunakan layanan Nusify. Support timnya juga sangat responsif.",
      rating: 5,
      company: "Owner Batik Nusantara"
    },
    {
      id: 3,
      name: "Budi Santoso",
      text: "Sangat puas dengan konsep yang diberikan. Website tidak hanya cantik tapi juga fungsional dan cepat diakses.",
      rating: 5,
      company: "Digital Marketing Manager"
    },
    {
      id: 4,
      name: "Siska Amelia",
      text: "Nusify benar-benar mengerti kebutuhan bisnis modern. Prosesnya effortless dan hasilnya luar biasa!",
      rating: 5,
      company: "Creative Director"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="relative py-24 overflow-hidden bg-white dark:bg-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/30 text-emerald-600 dark:text-emerald-400 text-sm font-bold tracking-wide uppercase">
            Trusted by 500+ Businesses
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Ratusan bisnis telah mempercayakan <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
              pembuatan website kepada Nusify.
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Lihat ulasan asli dari klien kami melalui Google dan temukan lokasi kantor kami.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Google Reviews */}
          <div className="space-y-10">
            {/* Trust Badge */}
            <div className="flex items-center space-x-6 p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 w-fit transform hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-white rounded-xl shadow-inner flex items-center justify-center p-2">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <div>
                <div className="flex items-center space-x-1 mb-1">
                  <span className="text-2xl font-black text-slate-900 dark:text-white">4.9</span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Based on Google Reviews</p>
              </div>
            </div>

            {/* Review Carousel */}
            <div className="relative">
              <div className="overflow-hidden p-4 -m-4">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {reviews.map((review) => (
                    <div key={review.id} className="w-full flex-shrink-0 p-4">
                      <div className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-700 relative group hover:-translate-y-2 transition-transform">
                        <Quote className="absolute top-6 right-8 w-12 h-12 text-slate-100 dark:text-slate-700/50" />
                        <div className="relative z-10 space-y-4">
                          <div className="flex text-amber-400 mb-2">
                            {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                          </div>
                          <p className="text-lg text-slate-700 dark:text-slate-300 italic leading-relaxed">
                            "{review.text}"
                          </p>
                          <div className="pt-4 border-t border-slate-50 dark:border-slate-700/50">
                            <h4 className="font-bold text-slate-900 dark:text-white">{review.name}</h4>
                            <p className="text-sm text-slate-400">{review.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center space-x-4 mt-8">
                <button 
                  onClick={prevReview}
                  className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextReview}
                  className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Map */}
          <div className="relative group">
            {/* Mascot Integration */}
            <div className="absolute -top-12 -right-12 w-32 h-32 z-20 animate-bounce-slow pointer-events-none hidden lg:block">
              <NusifyMascot />
              <div className="absolute -top-8 -left-20 bg-slate-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-xl shadow-lg border border-white/10">
                 Kunjungi kantor kami! 🦉
              </div>
            </div>

            <div className="relative bg-white dark:bg-slate-800 p-4 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-slate-700 overflow-hidden">
              <div className="absolute top-8 left-8 z-10 flex items-center space-x-3 p-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/20">
                <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Nusify Head Office</h4>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Jakarta, Indonesia</p>
                </div>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>
              </div>
              
              <div className="aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.2405626219!2d106.75947752671561!3d-6.22938668740523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad062c2!2sJakarta!5e0!3m2!1sid!2sid!4v1709861234567!5m2!1sid!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-1000"
                ></iframe>
              </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-brand-blue/10 blur-3xl -z-10 rounded-full group-hover:bg-brand-blue/20 transition-colors duration-700"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;
