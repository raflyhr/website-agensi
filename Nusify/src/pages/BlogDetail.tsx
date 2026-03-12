import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Clock, 
  Calendar,
  Share2,
  Bookmark,
  ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  date: string;
  content: string;
}

const mockPosts: BlogPost[] = [
  {
    id: 1,
    title: "Mengapa Iklan Anda Belum Sukses? Kesalahan Terbesar yang Paling Sering Terjadi",
    excerpt: "Banyak pengusaha yang melakukan kesalahan fatal ini saat menjalankan iklan digital...",
    category: "Digital Marketing",
    readTime: "5 min read",
    date: "2024-03-10",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    content: `
      <h2>Kesalahan Fatal dalam Iklan Digital</h2>
      <p>Menjalankan iklan bukan hanya soal membakar uang. Banyak yang gagal karena mereka menargetkan audiens yang salah atau tidak memiliki landing page yang teroptimasi.</p>
      <h3>1. Targeting yang Terlalu Luas</h3>
      <p>Mencoba menjual ke semua orang sama saja dengan tidak menjual ke siapa pun. Spesifikasikan siapa pelanggan ideal Anda.</p>
      <h3>2. Copywriting yang Membosankan</h3>
      <p>Iklan Anda harus bisa menghentikan scrolling pengguna. Gunakan hook yang kuat di 3 detik pertama.</p>
      <h3>3. Tidak Ada Data Retargeting</h3>
      <p>Seringkali pembelian tidak terjadi di pertemuan pertama. Gunakan Pixel untuk menargetkan ulang mereka yang sudah tertarik.</p>
    `
  },
  {
    id: 2,
    title: "Perpanjangan dan Maintainance Website Apakah Wajib? Ini Jawabannya",
    excerpt: "Apakah Anda menggunakan jasa profesional untuk membuat website? Ketahui kapan harus...",
    category: "Tips Website",
    readTime: "7 min read",
    date: "2024-03-08",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800&auto=format&fit=crop",
    content: `
      <h2>Pentingnya Maintenance Website</h2>
      <p>Banyak yang beranggapan bahwa setelah website jadi, tugas selesai. Padahal, website adalah aset digital yang butuh perawatan berkala.</p>
      <h3>Keamanan adalah Prioritas</h3>
      <p>Sistem CMS dan plugin perlu diupdate untuk menutup celah keamanan dari serangan malware atau hacker.</p>
      <h3>Performa yang Tetap Stabil</h3>
      <p>Database yang membengkak seiring waktu bisa memperlambat loading website. Maintenance memastikan website tetap kencang.</p>
      <p>Jangan sampai bisnis Anda rugi hanya karena website down di saat jam sibuk pelanggan.</p>
    `
  },
  {
    id: 3,
    title: "3 Metris Terpenting yang Harus dimonitor agar Digital Marketing Anda Sukses",
    excerpt: "Monitoring metris adalah kunci utama untuk mengetahui keberhasilan kampanye...",
    category: "Marketing",
    readTime: "6 min read",
    date: "2024-03-05",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=800&auto=format&fit=crop",
    content: `
      <h2>Jangan Hanya Melihat 'Like', Lihatlah Data Ini</h2>
      <p>Dalam dunia digital marketing, data adalah segalanya. Namun tidak semua data itu relevan untuk pertumbuhan bisnis Anda.</p>
      <h3>1. Customer Acquisition Cost (CAC)</h3>
      <p>Berapa biaya yang Anda keluarkan untuk mendapatkan satu pelanggan baru? Jika biaya iklan lebih besar dari profit, strategi Anda perlu dievaluasi.</p>
      <h3>2. Conversion Rate (CR)</h3>
      <p>Berapa persen pengunjung yang benar-benar melakukan tindakan (membeli/kontak)? Metris ini menunjukkan efektivitas penawaran Anda.</p>
      <h3>3. Customer Lifetime Value (CLV)</h3>
      <p>Berapa total nilai belanja pelanggan selama mereka loyal kepada Anda. Bisnis yang sukses adalah bisnis yang bisa membuat pelanggan datang lagi.</p>
    `
  },
  {
    id: 4,
    title: "Buat Website Sendiri vs Pakai Jasa Profesional: Untung dan Ruginya",
    excerpt: "Kemajuan teknologi membuat siapa pun bisa membuat website sendiri. Bagaiamana...",
    category: "Development",
    readTime: "10 min read",
    date: "2024-03-01",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    content: `
      <h2>Dilema Pembuatan Website</h2>
      <p>Zaman sekarang, tools seperti Wix atau Canva memudahkan siapa saja membuat website. Namun, untuk skala bisnis, apakah itu cukup?</p>
      <h3>Keuntungan Buat Sendiri</h3>
      <p>Biaya yang dikeluarkan sangat minimal. Cocok untuk Anda yang baru memulai hobi atau sekadar portofolio sederhana.</p>
      <h3>Kelebihan Jasa Profesional</h3>
      <p>Website dibuat dengan struktur kode yang SEO-friendly, desain unik yang merepresentasikan brand, dan dukungan teknis 24/7. Anda bisa fokus mengurus bisnis, biar kami yang urus teknisnya.</p>
    `
  },
  {
    id: 5,
    title: "Peluang: Bagaimana Memanfaatkannya dengan Baik",
    excerpt: "Peluang ada di mana-mana dan bisa muncul kapan saja. Sudahkah Anda...",
    category: "Business",
    readTime: "4 min read",
    date: "2024-02-28",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    content: `
      <h2>Peluang Hanya Datang pada yang Siap</h2>
      <p>Di era ekonomi digital yang berubah cepat, kemampuan membaca peluang adalah aset terbesar seorang pengusaha.</p>
      <p>Jangan menunggu peluang sempurna. Ambillah peluang yang ada, lakukan validasi cepat, dan lakukan iterasi. Kegagalan tercepat adalah tidak pernah mencoba sama sekali.</p>
      <blockquote>Peluang emas seringkali terbungkus dalam pakaian kerja yang melelahkan.</blockquote>
    `
  },
  {
    id: 6,
    title: "Price vs Value: Yang Harus diketahui Pembeli dan Penjual",
    excerpt: "Kita tahu untuk mendapatkan suatu produk atau jasa ada harga yang harus dibayar...",
    category: "Insights",
    readTime: "8 min read",
    date: "2024-02-25",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop",
    content: `
      <h2>Kenapa Ada Website Seharga 500rb dan 50jt?</h2>
      <p>Harga (Price) adalah apa yang Anda bayar. Nilai (Value) adalah apa yang Anda dapatkan.</p>
      <p>Jasa website murah biasanya hanya memberikan template standar. Sebaliknya, website bernilai tinggi memberikan desain yang meningkatkan kepercayaan pelanggan dan sistem yang mengonversi pengunjung menjadi pembeli.</p>
      <p>Pilihlah investasi yang memberikan ROI (Return on Investment) terbaik bagi bisnis Anda dalam jangka panjang.</p>
    `
  },
  {
    id: 7,
    title: "Strategi SEO Efektif untuk Website Baru di Tahun 2024",
    excerpt: "Memulai dari nol tidaklah mudah. Pelajari strategi SEO yang paling efektif untuk...",
    category: "SEO",
    readTime: "12 min read",
    date: "2024-02-20",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=800&auto=format&fit=crop",
    content: `
      <h2>SEO di Tahun 2024: Adaptasi dengan AI</h2>
      <p>Google terus memperbarui algoritma mereka. Strategi SEO lama mungkin sudah tidak efektif lagi.</p>
      <h3>E-E-A-T Adalah Kunci</h3>
      <p>Experience, Expertise, Authoritativeness, dan Trustworthiness. Google lebih menyukai konten yang ditulis oleh ahli di bidangnya.</p>
      <h3>Optimasi untuk Search Intent</h3>
      <p>Jangan hanya menembak keyword, tapi pahami apa yang dicari pengguna. Apakah mereka ingin informasi (Informatif) atau ingin membeli (Transaksional)?</p>
    `
  },
  {
    id: 8,
    title: "Panduan Google Ads untuk Mendatangkan Profit Konsisten",
    excerpt: "Apa yang terjadi jika Anda menggunakan Google Ads untuk bisnis Anda? Simak...",
    category: "Advertising",
    readTime: "9 min read",
    date: "2024-02-15",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=800&auto=format&fit=crop",
    content: `
      <h2>Mendominasi Baris Pertama Google</h2>
      <p>Google Ads adalah cara tercepat untuk mendapatkan traffic berkualitas tinggi langsung ke website Anda.</p>
      <p>Kunci suksesnya terletak pada pemilihan keyword yang memiliki niat beli tinggi dan Quality Score landing page yang baik. Dengan strategi bidding yang tepat, Anda bisa mengungguli kompetitor besar sekalipun.</p>
    `
  },
  {
    id: 9,
    title: "Tools yang Tepat untuk Membuat Website Anda Lebih Cepat",
    excerpt: "Kecepatan adalah segalanya di dunia digital. Gunakan tools pilihan kami untuk...",
    category: "Development",
    readTime: "5 min read",
    date: "2024-02-10",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
    content: `
      <h2>Tools Wajib Web Developer</h2>
      <p>Sekecil apapun delay pada website Anda, itu bisa menghilangkan potensi pelanggan.</p>
      <p>Gunakan tools seperti <strong>Google PageSpeed Insights</strong> untuk audit, <strong>TinyPNG</strong> untuk optimasi gambar, dan <strong>Vite</strong> untuk development workflow yang lebih efisien.</p>
      <p>Ingat, 1 detik saja lebih lambat bisa menurunkan tingkat konversi hingga 7%.</p>
    `
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    // 1. Coba cari di localStorage
    const savedPosts = localStorage.getItem("nusify_blog_posts");
    let foundPost = null;

    if (savedPosts) {
      const posts: BlogPost[] = JSON.parse(savedPosts);
      foundPost = posts.find((p) => p.id === Number(id));
    }

    // 2. Jika tidak ada di localStorage, cari di mockPosts
    if (!foundPost) {
      foundPost = mockPosts.find((p) => p.id === Number(id));
    }

    if (foundPost) {
      setPost(foundPost);
    }

    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Post not found</h2>
          <button 
            onClick={() => navigate("/blog")}
            className="text-blue-600 font-bold flex items-center gap-2 mx-auto"
          >
            <ArrowLeft size={18} /> Kembali ke Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pb-24">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap items-center gap-4 mb-6"
            >
              <span className="px-4 py-1.5 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest rounded-full">
                {post.category}
              </span>
              <span className="flex items-center text-slate-300 text-xs font-semibold">
                <Clock size={14} className="mr-1.5" />
                {post.readTime}
              </span>
              <span className="flex items-center text-slate-300 text-xs font-semibold">
                <Calendar size={14} className="mr-1.5" />
                {post.date}
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8"
            >
              {post.title}
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Breadcrumbs & Actions */}
          <div className="lg:col-span-12 flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-8">
            <nav className="flex items-center gap-2 text-sm font-bold">
              <button 
                onClick={() => navigate("/")}
                className="text-slate-400 hover:text-blue-600 transition-colors"
              >
                Home
              </button>
              <ChevronRight size={14} className="text-slate-300" />
              <button 
                onClick={() => navigate("/blog")}
                className="text-slate-400 hover:text-blue-600 transition-colors"
              >
                Blog
              </button>
              <ChevronRight size={14} className="text-slate-300" />
              <span className="text-blue-600 truncate max-w-[200px]">{post.title}</span>
            </nav>

            <div className="flex items-center gap-3">
              <button className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                <Share2 size={18} />
              </button>
              <button className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                <Bookmark size={18} />
              </button>
            </div>
          </div>

          {/* Sidebar Left: Author/Info */}
          <aside className="lg:col-span-3 space-y-8">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-black">
                  N
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Nusify Team</h4>
                  <p className="text-xs text-slate-500">Expert Content Creator</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Membantu bisnis bertransformasi secara digital dengan solusi teknologi tepat guna.
              </p>
              <button className="w-full py-3 bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-blue-600 hover:text-white transition-all">
                Follow Team
              </button>
            </div>

            <div className="hidden lg:block">
              <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Tags</h5>
              <div className="flex flex-wrap gap-2">
                {[post.category, "Technology", "Digital", "Business"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold rounded-lg border border-slate-200 dark:border-slate-700">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          {/* Article Full Content */}
          <article className="lg:col-span-9">
            <div 
              className="prose prose-lg dark:prose-invert max-w-none 
                prose-headings:font-black prose-headings:text-slate-900 dark:prose-headings:text-white
                prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-p:leading-relaxed
                prose-strong:text-slate-900 dark:prose-strong:text-white
                prose-img:rounded-[2.5rem] prose-img:shadow-2xl
              "
              dangerouslySetInnerHTML={{ __html: post.content || `
                <h2>Introduction</h2>
                <p>${post.excerpt}</p>
                <p>Maaf, artikel ini belum memiliki konten lengkap. Konten utuh akan segera diupdate oleh tim editorial Nusify.</p>
                <blockquote>Lakukan otomasi sebelum kompetitor Anda melakukannya.</blockquote>
              ` }}
            />

            <div className="mt-20 pt-10 border-t border-slate-100 dark:border-slate-800">
              <h4 className="text-xl font-black text-slate-900 dark:text-white mb-8">What do you think?</h4>
              <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
                <textarea 
                  placeholder="Leave a comment..."
                  className="w-full bg-white dark:bg-slate-800 border-none rounded-2xl p-6 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
                  rows={4}
                ></textarea>
                <div className="flex justify-end mt-4">
                  <button className="px-8 py-3 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                    Post Comment
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
