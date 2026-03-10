import { MessageCircle, Headset } from 'lucide-react';

const TeamSupportSection = () => {
  return (
    <section className="bg-blue-50 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start mx-auto md:mx-0">
          <h2 className="font-bold text-3xl md:text-4xl text-blue-900">
            Tim Kami Siap Membantu Anda
          </h2>
          <p className="text-gray-700 mt-4 leading-relaxed max-w-lg">
            Kami paham bahwa membuat website bukanlah keputusan mudah. Oleh karena itu, 
            kami siap membantu Anda untuk menemukan pilihan terbaik yang sesuai dengan 
            budget dan goals Anda. Hubungi kami untuk berkonsultasi.
          </p>
          <button className="mt-8 bg-blue-900 text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-blue-800 transition shadow-lg">
            <MessageCircle size={20} />
            Konsultasi Sekarang
          </button>
        </div>

        {/* Right Column */}
        <div className="flex justify-center items-center">
          <div className="relative shadow-xl rounded-full p-10 bg-white animate-float">
            <Headset size={80} className="text-blue-900" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSupportSection;
