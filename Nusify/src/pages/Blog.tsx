import { useState } from "react";
import {
  ArrowRight,
  Clock,
  Tag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useTheme } from "../context/theme-core";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
}

const mockPosts: BlogPost[] = [
  {
    id: 1,
    title:
      "Mengapa Iklan Anda Belum Sukses? Kesalahan Terbesar yang Paling Sering Terjadi",
    excerpt:
      "Banyak pengusaha yang melakukan kesalahan fatal ini saat menjalankan iklan digital...",
    category: "Digital Marketing",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Perpanjangan dan Maintainance Website Apakah Wajib? Ini Jawabannya",
    excerpt:
      "Apakah Anda menggunakan jasa profesional untuk membuat website? Ketahui kapan harus...",
    category: "Tips Website",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title:
      "3 Metris Terpenting yang Harus dimonitor agar Digital Marketing Anda Sukses",
    excerpt:
      "Monitoring metris adalah kunci utama untuk mengetahui keberhasilan kampanye...",
    category: "Marketing",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Buat Website Sendiri vs Pakai Jasa Profesional: Untung dan Ruginya",
    excerpt:
      "Kemajuan teknologi membuat siapa pun bisa membuat website sendiri. Bagaiamana...",
    category: "Development",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Peluang: Bagaimana Memanfaatkannya dengan Baik",
    excerpt:
      "Peluang ada di mana-mana dan bisa muncul kapan saja. Sudahkah Anda...",
    category: "Business",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Price vs Value: Yang Harus diketahui Pembeli dan Penjual",
    excerpt:
      "Kita tahu untuk mendapatkan suatu produk atau jasa ada harga yang harus dibayar...",
    category: "Insights",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Strategi SEO Efektif untuk Website Baru di Tahun 2024",
    excerpt:
      "Memulai dari nol tidaklah mudah. Pelajari strategi SEO yang paling efektif untuk...",
    category: "SEO",
    readTime: "12 min read",
    image:
      "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Panduan Google Ads untuk Mendatangkan Profit Konsisten",
    excerpt:
      "Apa yang terjadi jika Anda menggunakan Google Ads untuk bisnis Anda? Simak...",
    category: "Advertising",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "Tools yang Tepat untuk Membuat Website Anda Lebih Cepat",
    excerpt:
      "Kecepatan adalah segalanya di dunia digital. Gunakan tools pilihan kami untuk...",
    category: "Development",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
  },
];

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Pagination Logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = mockPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(mockPosts.length / postsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-slate-900 pb-24">
      {/* Background Decorations */}
      <div className="bg-ornament-blue"></div>
      <div className="bg-ornament-purple"></div>

      <header className="pt-32 pb-16 px-6 max-w-7xl mx-auto relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6">
          Our <span className="text-blue-600 dark:text-blue-400">Insights</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Dapatkan tips terbaru seputar teknologi, desain, dan strategi digital
          untuk mengembangkan bisnis Anda.
        </p>
      </header>

      <main className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentPosts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              {/* Image Container */}
              <div className="aspect-16/10 overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col grow">
                <div className="flex items-center gap-4 mb-4 text-xs font-bold uppercase tracking-wider">
                  <span className="flex items-center text-blue-600 dark:text-blue-400">
                    <Tag className="w-3 h-3 mr-1.5" />
                    {post.category}
                  </span>
                  <span className="flex items-center text-slate-400 dark:text-slate-500 border-l border-slate-200 dark:border-slate-700 pl-4">
                    <Clock className="w-3 h-3 mr-1.5" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-slate-50 dark:border-slate-700/50">
                  <span className="inline-flex items-center text-sm font-extrabold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination Logic Implementation */}
        <div className="flex justify-center items-center gap-3">
          <button
            onClick={() => paginate(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={`flex items-center px-4 py-2 text-sm font-bold transition-all ${
              currentPage === 1
                ? "text-slate-300 cursor-not-allowed"
                : "text-slate-600 dark:text-slate-400 hover:text-blue-600"
            }`}
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Prev
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => paginate(page)}
                className={`w-10 h-10 rounded-xl text-sm font-bold transition-all overflow-hidden relative group ${
                  currentPage === page
                    ? "text-white"
                    : "text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {currentPage === page && (
                  <span className="absolute inset-0 bg-blue-600 shadow-lg shadow-blue-500/30"></span>
                )}
                <span className="relative z-10">{page}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className={`flex items-center px-4 py-2 text-sm font-bold transition-all ${
              currentPage === totalPages
                ? "text-slate-300 cursor-not-allowed"
                : "text-slate-600 dark:text-slate-400 hover:text-blue-600"
            }`}
          >
            Next
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default Blog;
