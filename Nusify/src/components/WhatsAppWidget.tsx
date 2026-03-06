import React, { useState } from 'react';
import { X, MessageCircle, Send, Clock, User } from 'lucide-react';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = "6288980840381";
  const prefilledMessage = "Halo Nusify, saya ingin konsultasi pembuatan website.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(prefilledMessage)}`;

  return (
    <div className="fixed bottom-6 left-6 z-[9999] flex flex-col items-start">
      {/* Chat Popup Card */}
      <div
        className={`mb-4 w-80 sm:w-96 bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden transition-all duration-500 ease-in-out transform ${
          isOpen 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-10 scale-90 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-emerald-600 p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3 text-white">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <MessageCircle className="w-6 h-6 fill-current" />
            </div>
            <div>
              <h3 className="font-bold text-lg">WhatsApp</h3>
              <p className="text-xs text-emerald-100">Official Nusify Support</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-black/10 rounded-full transition-colors text-white/80 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              <User className="w-6 h-6 text-slate-400" />
            </div>
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-2xl rounded-tl-none relative">
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Ingin berkonsultasi untuk rencana pembuatan website Anda?
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mt-2 font-medium">
                Tekan tombol <span className="text-emerald-600 font-bold">Chat Now</span> di bawah untuk terhubung dengan tim konsultan kami.
              </p>
              {/* Message tail */}
              <div className="absolute top-0 -left-2 w-0 h-0 border-t-[10px] border-t-slate-100 dark:border-t-slate-800 border-l-[10px] border-l-transparent"></div>
            </div>
          </div>

          <div className="flex items-center justify-center py-2 text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold border-t border-slate-50 dark:border-slate-800">
            <Clock className="w-3 h-3 mr-2" />
            Operational: 09.00 - 18.00 WIB (Mon - Fri)
          </div>
        </div>

        {/* Footer / CTA Button */}
        <div className="p-6 pt-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-2xl shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/40 transition-all duration-300 flex items-center justify-center group active:scale-[0.98]"
          >
            <span>Chat Now</span>
            <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 transform hover:scale-110 active:scale-90 ${
          isOpen 
            ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 rotate-90' 
            : 'bg-emerald-600 text-white'
        }`}
      >
        {isOpen ? (
          <X className="w-8 h-8" />
        ) : (
          <>
            <MessageCircle className="w-8 h-8 fill-current" />
            {/* Pulsing effect */}
            <span className="absolute inset-0 rounded-full bg-emerald-600 animate-ping opacity-25"></span>
          </>
        )}
      </button>
    </div>
  );
};

export default WhatsAppWidget;
