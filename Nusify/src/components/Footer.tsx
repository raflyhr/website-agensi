import { Link } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  Star,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 pt-24 pb-8 border-t border-slate-900 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* 1. Business Information */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-purple rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                <span className="text-white font-black text-xl">N</span>
              </div>
              <span className="text-2xl font-black text-white tracking-tighter">
                Nusify<span className="text-brand-blue">.</span>
              </span>
            </Link>
            <div className="space-y-4">
              <h4 className="text-white font-bold text-lg">PT Nusify Digital Kreatif</h4>
              <p className="text-sm leading-relaxed">
                Nusify adalah agency digital yang membantu bisnis membangun website profesional, modern, dan siap bersaing di era digital.
              </p>
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span>
                  Jl. Contoh Bisnis No.123<br />
                  Bandung, Jawa Barat<br />
                  Indonesia
                </span>
              </div>
            </div>
          </div>

          {/* 2. Contact Details */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg uppercase tracking-widest text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://wa.me/6282373336946" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-brand-blue transition-colors">
                    <Phone className="w-4 h-4 text-brand-blue" />
                  </div>
                  <span className="text-sm font-medium">+62 823 7333 6946</span>
                </a>
              </li>
              <li>
                <a href="mailto:hello@nusify.com" className="flex items-center space-x-3 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-brand-blue transition-colors">
                    <Mail className="w-4 h-4 text-brand-blue" />
                  </div>
                  <span className="text-sm font-medium">hello@nusify.com</span>
                </a>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-brand-blue transition-colors">
                  <Clock className="w-4 h-4 text-brand-blue" />
                </div>
                <div className="text-sm font-medium">
                  <p>Senin – Jumat</p>
                  <p className="text-xs text-slate-500">09.00 – 17.00 WIB</p>
                </div>
              </li>
            </ul>
          </div>

          {/* 3. Sitemap / Navigation */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
              {['Home', 'Services', 'Portfolio', 'Pricing', 'Blog', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase()}`} 
                    className="text-sm hover:text-brand-blue transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Blog / Resources */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg uppercase tracking-widest text-sm">Latest Articles</h4>
            <ul className="space-y-4">
              {[
                "Cara Memilih Website untuk Bisnis",
                "Kenapa Website Penting untuk UMKM",
                "Tips Membuat Website yang Profesional"
              ].map((article, index) => (
                <li key={index}>
                  <Link to="/blog" className="text-sm hover:text-white leading-relaxed block group transition-colors">
                    <span className="block text-xs text-slate-600 mb-1 group-hover:text-brand-purple transition-colors font-bold">RESOURCES</span>
                    {article}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Google Rating Badge */}
        <div className="py-8 border-t border-slate-900/50 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-6 p-4 bg-slate-900/50 rounded-2xl border border-slate-800 w-fit group hover:border-brand-blue/30 transition-colors">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1.5 shadow-lg">
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center space-x-1 mb-0.5">
                <span className="text-lg font-black text-white">4.9</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
              </div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Based on 120+ Google Reviews</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex items-center space-x-4">
            {[
              { icon: <Facebook className="w-5 h-5" />, link: "#" },
              { icon: <Instagram className="w-5 h-5" />, link: "#" },
              { icon: <Twitter className="w-5 h-5" />, link: "#" },
              { icon: <Linkedin className="w-5 h-5" />, link: "#" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.link} 
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium">
          <p>© {currentYear} PT Nusify Digital Kreatif. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
