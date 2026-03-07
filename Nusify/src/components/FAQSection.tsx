import { useState } from "react";
import { Plus, Minus, HelpCircle, MessageCircle } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "Berapa biaya pembuatan website di Nusify?",
      answer:
        "Biaya pembuatan website bergantung pada kebutuhan bisnis Anda, seperti jumlah halaman, fitur khusus, dan desain yang diinginkan. Untuk melihat estimasi harga, Anda dapat mengunjungi halaman Pricing kami atau menghubungi tim Nusify untuk konsultasi gratis.",
    },
    {
      id: 2,
      question: "Berapa lama proses pembuatan website?",
      answer:
        "Rata-rata proses pembuatan website membutuhkan waktu sekitar 7–21 hari kerja, tergantung tingkat kompleksitas proyek dan kesiapan materi dari klien.",
    },
    {
      id: 3,
      question: "Apakah saya bisa meminta revisi desain?",
      answer:
        "Tentu saja. Kami menyediakan beberapa kali revisi agar hasil akhir website benar-benar sesuai dengan kebutuhan dan identitas bisnis Anda.",
    },
    {
      id: 4,
      question: "Apakah website yang dibuat sudah SEO Friendly?",
      answer:
        "Ya. Semua website yang kami buat sudah dioptimalkan dengan struktur SEO dasar, kecepatan loading yang baik, dan mobile-friendly agar lebih mudah ditemukan di Google.",
    },
    {
      id: 5,
      question: "Apakah Nusify menyediakan layanan maintenance?",
      answer:
        "Ya. Kami menyediakan layanan maintenance website untuk memastikan website Anda tetap aman, cepat, dan selalu up-to-date.",
    },
  ];

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      className="relative py-24 overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      {/* FAQ Schema Script */}
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      {/* Background Decorations */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#475569 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-brand-blue/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-brand-purple/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-sm font-bold tracking-wide uppercase">
            <HelpCircle className="w-4 h-4 mr-2 text-brand-blue" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Masih Ada Pertanyaan?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Kami telah merangkum beberapa pertanyaan yang paling sering
            ditanyakan oleh calon klien sebelum memulai pembuatan website.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`bg-white dark:bg-slate-900 rounded-[1.5rem] border transition-all duration-300 shadow-sm overflow-hidden ${
                openId === faq.id
                  ? "border-brand-blue/30 shadow-xl shadow-brand-blue/5"
                  : "border-slate-100 dark:border-slate-800 hover:border-brand-blue/20"
              }`}
            >
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors"
              >
                <h3
                  className={`text-lg font-bold transition-colors pr-8 ${
                    openId === faq.id
                      ? "text-brand-blue"
                      : "text-slate-900 dark:text-white"
                  }`}
                >
                  {faq.question}
                </h3>
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    openId === faq.id
                      ? "bg-brand-blue border-brand-blue text-white rotate-180"
                      : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400"
                  }`}
                >
                  {openId === faq.id ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openId === faq.id
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 md:p-8 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                  <div className="h-[1px] w-full bg-slate-50 dark:bg-slate-800 mb-6"></div>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 p-8 bg-gradient-to-r from-brand-blue/5 to-brand-purple/5 rounded-[2rem] border border-slate-200/50 dark:border-slate-700/50 text-center">
          <p className="text-slate-600 dark:text-slate-400 font-medium mb-4">
            Belum menemukan jawaban yang Anda cari?
          </p>
          <a
            href="https://wa.me/6282373336946?text=Halo%20Nusify%2C%20saya%20ingin%20bertanya%20lebih%20lanjut%20mengenai%20layanan%20pembuatan%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 hover:scale-105 transition-all group"
          >
            <MessageCircle className="w-5 h-5 mr-3 text-brand-blue group-hover:scale-110 transition-transform" />
            Tanya Tim Nusify Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
