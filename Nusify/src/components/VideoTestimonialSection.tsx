import { useState } from 'react';
import { Play, User, Video, Quote, PlayCircle } from 'lucide-react';
import NusifyMascot from './NusifyMascot';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  thumbnail: string;
  videoUrl: string;
}

const VideoTestimonialSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Andi Wijaya",
      company: "Tech Solution Indonesia",
      thumbnail: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=250&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder
    },
    {
      id: 2,
      name: "Siti Rahma",
      company: "Batik Modern Nusantara",
      thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=250&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder
    },
    {
      id: 3,
      name: "Budi Santoso",
      company: "Kopi Kenangan Digital",
      thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=250&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder
    },
    {
      id: 4,
      name: "Lina Marlina",
      company: "Startup Hub Jakarta",
      thumbnail: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=250&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder
    }
  ];

  const [activeVideo, setActiveVideo] = useState<Testimonial>(testimonials[0]);

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden bg-slate-950">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Apa buktinya perkataan <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple italic">
              di atas benar?
            </span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Lihat bagaimana pengalaman klien kami setelah menggunakan layanan pembuatan website dari Nusify.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Playlist */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <div className="p-6 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Video className="w-5 h-5 text-brand-blue" />
                  <span className="text-sm font-bold text-white uppercase tracking-widest">
                    30+ Video Testimoni
                  </span>
                </div>
              </div>

              <div className="max-h-[500px] overflow-y-auto scrollbar-hide p-4 space-y-3">
                {testimonials.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveVideo(item)}
                    className={`w-full flex items-center p-3 rounded-2xl transition-all duration-300 group ${
                      activeVideo.id === item.id 
                        ? 'bg-brand-blue/10 border border-brand-blue/30 shadow-lg' 
                        : 'hover:bg-slate-800/50 border border-transparent'
                    }`}
                  >
                    <div className="relative w-24 h-16 rounded-xl overflow-hidden flex-shrink-0">
                      <img 
                        src={item.thumbnail} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 flex items-center justify-center bg-black/40 ${activeVideo.id === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity`}>
                        <PlayCircle className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="ml-4 text-left">
                      <h4 className={`font-bold text-sm ${activeVideo.id === item.id ? 'text-brand-blue' : 'text-white'} transition-colors`}>
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-500 truncate max-w-[150px]">
                        {item.company}
                      </p>
                    </div>
                    {activeVideo.id === item.id && (
                      <div className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Mascot Integration */}
            <div className="mt-8 flex items-center space-x-4 p-6 bg-slate-900/30 rounded-3xl border border-slate-800/50 group">
              <div className="w-16 h-16 grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100">
                <NusifyMascot />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-300">"Klien kami selalu puas!"</p>
                <p className="text-xs text-slate-500 mt-1">Nusify Buddy - Brand Mascot</p>
              </div>
            </div>
          </div>

          {/* Right Column: Video Player */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="relative group">
              {/* Decorative Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-blue to-brand-purple opacity-20 blur-2xl rounded-[3rem] group-hover:opacity-30 transition-opacity"></div>
              
              <div className="relative aspect-video bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-800">
                <iframe
                  className="w-full h-full"
                  src={activeVideo.videoUrl}
                  title={`Testimonial - ${activeVideo.name}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                
                {/* Overlay Quote */}
                <div className="absolute top-6 left-6 p-4 bg-slate-950/60 backdrop-blur-md rounded-2xl border border-white/10 max-w-[200px] hidden md:block">
                  <Quote className="w-5 h-5 text-brand-blue mb-2" />
                  <p className="text-xs text-white/90 italic">
                    "Layanan Nusify luar biasa, website kami jadi lebih modern!"
                  </p>
                </div>
              </div>

              {/* Active Client Info */}
              <div className="mt-6 flex items-center justify-between p-6 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-[2rem]">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center border border-brand-blue/30">
                    <User className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">{activeVideo.name}</h3>
                    <p className="text-sm text-slate-500">{activeVideo.company}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-[10px] font-black text-emerald-500 uppercase tracking-tighter">Verified Client</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialSection;
