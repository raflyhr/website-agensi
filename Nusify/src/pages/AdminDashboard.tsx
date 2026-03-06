import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard, Users, Briefcase, Settings, LogOut,
  TrendingUp, Eye, MessageSquare, Star, Menu, X, Zap, Bell,
  FileText, Tag, Plus, Pencil, Trash2, Check, ChevronDown,
  Globe, Instagram, Twitter, Facebook, Youtube, Phone, Mail,
  Sun, Moon,
} from 'lucide-react';

// ─────────────── TYPES ───────────────
type ClientStatus = 'New' | 'Contacted' | 'In Progress' | 'Completed';
interface Client {
  id: number; name: string; email: string; type: string;
  budget: string; status: ClientStatus; date: string;
}
interface Portfolio {
  id: number; name: string; description: string; link: string;
  image: string; tech: string;
}
interface Service {
  id: number; name: string; description: string; price: string;
}
interface PricingPlan {
  id: number; name: string; price: string; features: string[];
}
interface BlogPost {
  id: number; title: string; category: string; date: string; excerpt: string;
}
interface Testimonial {
  id: number; name: string; company: string; review: string; rating: number;
}
interface SiteSettings {
  logo: string; email: string; phone: string; address: string;
  instagram: string; twitter: string; facebook: string; youtube: string;
}

// ─────────────── MOCK DATA ───────────────
const initClients: Client[] = [
  { id: 1, name: 'PT. Maju Bersama', email: 'info@majubersama.co.id', type: 'Company Profile', budget: 'Rp 3.000.000', status: 'New', date: '2026-03-06' },
  { id: 2, name: 'CV. Kreatif Nusantara', email: 'hello@kreatif.id', type: 'Landing Page', budget: 'Rp 1.500.000', status: 'In Progress', date: '2026-03-04' },
  { id: 3, name: 'Toko Sejahtera', email: 'tokosejahtera@gmail.com', type: 'E-Commerce', budget: 'Rp 8.000.000', status: 'Completed', date: '2026-02-28' },
  { id: 4, name: 'Restoran Bahari', email: 'bahari@resto.com', type: 'Landing Page', budget: 'Rp 2.000.000', status: 'Contacted', date: '2026-03-05' },
];
const initPortfolio: Portfolio[] = [
  { id: 1, name: 'Maju Bersama', description: 'Company profile modern dengan animasi', link: 'https://majubersama.co.id', image: 'https://placehold.co/400x240/6366f1/fff?text=Maju+Bersama', tech: 'React, Tailwind' },
  { id: 2, name: 'Toko Sejahtera', description: 'Platform e-commerce skala UMKM', link: 'https://tokosejahtera.id', image: 'https://placehold.co/400x240/8b5cf6/fff?text=Toko+Sejahtera', tech: 'Next.js, Prisma' },
  { id: 3, name: 'Restoran Bahari', description: 'Landing page restoran seafood', link: 'https://restoranbahari.id', image: 'https://placehold.co/400x240/06b6d4/fff?text=Resto+Bahari', tech: 'React, CSS' },
];
const initServices: Service[] = [
  { id: 1, name: 'Landing Page', description: 'Halaman pemasaran profesional untuk promosi produk atau jasa.', price: 'Mulai Rp 1.500.000' },
  { id: 2, name: 'Company Profile', description: 'Website resmi perusahaan dengan informasi lengkap dan desain premium.', price: 'Mulai Rp 3.000.000' },
  { id: 3, name: 'Web Application', description: 'Aplikasi web custom sesuai kebutuhan bisnis Anda.', price: 'Mulai Rp 8.000.000' },
  { id: 4, name: 'E-Commerce', description: 'Toko online lengkap dengan sistem pembayaran terintegrasi.', price: 'Mulai Rp 5.000.000' },
];
const initPricing: PricingPlan[] = [
  { id: 1, name: 'Starter', price: 'Rp 1.500.000', features: ['1 halaman (Landing Page)', 'Desain responsive', 'Domain .com (1 tahun)', 'Hosting (1 tahun)', 'Gratis revisi 3x'] },
  { id: 2, name: 'Business', price: 'Rp 4.000.000', features: ['Hingga 7 halaman', 'Desain premium', 'Domain + Hosting (1 tahun)', 'CMS sederhana', 'WhatsApp integration', 'Gratis revisi 5x'] },
  { id: 3, name: 'Premium', price: 'Rp 9.000.000', features: ['Halaman tidak terbatas', 'Desain custom eksklusif', 'Domain + Hosting (1 tahun)', 'E-commerce / Web App', 'SEO Setup', 'Analytics Dashboard', 'Support 3 bulan', 'Gratis revisi 10x'] },
];
const initBlog: BlogPost[] = [
  { id: 1, title: 'Cara Membuat Website untuk Bisnis Lokal', category: 'Tutorial', date: '2026-03-01', excerpt: 'Panduan lengkap membuat website bisnis yang profesional dan menarik pelanggan.' },
  { id: 2, title: 'Berapa Biaya Website Company Profile 2026?', category: 'Tips', date: '2026-02-20', excerpt: 'Perbandingan harga dan fitur dalam pembuatan website company profile di tahun 2026.' },
  { id: 3, title: '5 Alasan Bisnis Anda Butuh Website Sekarang', category: 'Artikel', date: '2026-02-10', excerpt: 'Di era digital, website adalah aset penting yang tidak boleh ditunda.' },
];
const initTestimonials: Testimonial[] = [
  { id: 1, name: 'Budi Santoso', company: 'PT. Maju Bersama', review: 'Hasilnya luar biasa! Website kami kini tampak sangat profesional dan modern.', rating: 5 },
  { id: 2, name: 'Sinta Dewi', company: 'CV. Kreatif Nusantara', review: 'Pengerjaan cepat dan hasilnya sesuai ekspektasi. Tim sangat responsif!', rating: 5 },
  { id: 3, name: 'Ahmad Fauzi', company: 'Toko Sejahtera', review: 'E-commerce kami kini berjalan lancar. Sangat puas dengan pelayanannya.', rating: 4 },
];
const initSettings: SiteSettings = {
  logo: '/logo.png', email: 'hello@nusify.id', phone: '+62 812 3456 7890',
  address: 'Jl. Jenderal Sudirman No.10, Jakarta 10220',
  instagram: 'nusify.id', twitter: 'nusifyid', facebook: 'nusify.id', youtube: 'nusify',
};

// ─────────────── SHARED COMPONENTS ───────────────
const Badge = ({ status }: { status: ClientStatus }) => {
  const map: Record<ClientStatus, string> = {
    New: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    Contacted: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    'In Progress': 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
    Completed: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
  };
  return <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${map[status]}`}>{status}</span>;
};

const SectionHeader = ({ title, subtitle, onAdd, addLabel }: { title: string; subtitle?: string; onAdd?: () => void; addLabel?: string }) => (
  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
    <div>
      <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">{title}</h2>
      {subtitle && <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{subtitle}</p>}
    </div>
    {onAdd && (
      <button onClick={onAdd} className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-blue-500/20 hover:opacity-90 active:scale-95 transition-all">
        <Plus className="w-4 h-4" /> {addLabel ?? 'Add New'}
      </button>
    )}
  </div>
);

const Modal = ({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-md p-6 relative" onClick={e => e.stopPropagation()}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">{title}</h3>
        <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500"><X className="w-5 h-5" /></button>
      </div>
      {children}
    </div>
  </div>
);

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="mb-4">
    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">{label}</label>
    {children}
  </div>
);

const inputCls = "w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm";

// ─────────────── CHART COMPONENTS ───────────────
const BarChart = ({ data, color }: { data: number[], color: string }) => {
  const max = Math.max(...data);
  return (
    <div className="flex items-end gap-1.5 h-32 w-full px-2">
      {data.map((val, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
          <div
            className={`w-full rounded-t-md transition-all duration-500 group-hover:opacity-80 ${color}`}
            style={{ height: `${(val / max) * 100}%` }}
          >
            <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded whitespace-nowrap pointer-events-none transition-opacity">
              {val}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const LineChart = ({ data, color }: { data: number[], color: string }) => {
  const max = Math.max(...data);
  const width = 300;
  const height = 100;
  const points = data.map((val, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - (val / max) * height;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="w-full h-32 px-2 py-4">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d={`M ${points} L ${width},${height} L 0,${height} Z`}
          fill="url(#lineGradient)"
        />
        <polyline
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={points}
          className="transition-all duration-1000 ease-out"
          style={{ strokeDasharray: 1000, strokeDashoffset: 0 }}
        />
        {data.map((val, i) => {
          const x = (i / (data.length - 1)) * width;
          const y = height - (val / max) * height;
          return (
            <circle key={i} cx={x} cy={y} r="4" fill="white" stroke={color} strokeWidth="2" className="cursor-pointer">
              <title>{val}</title>
            </circle>
          );
        })}
      </svg>
    </div>
  );
};

// ─────────────── SECTIONS ───────────────

// Dashboard Overview
const DashboardOverview = ({ clients, portfolio, posts }: { clients: Client[]; portfolio: Portfolio[]; posts: BlogPost[] }) => {
  const stats = [
    { label: 'Client Requests', value: clients.length, change: `${clients.filter(c => c.status === 'New').length} new`, icon: Users, color: 'from-blue-500 to-blue-600' },
    { label: 'Portfolio Items', value: portfolio.length, change: 'Active projects', icon: Briefcase, color: 'from-purple-500 to-purple-600' },
    { label: 'Blog Articles', value: posts.length, change: 'Published', icon: FileText, color: 'from-pink-500 to-pink-600' },
    { label: 'Avg Rating', value: '4.9', change: 'From clients', icon: Star, color: 'from-amber-400 to-orange-500' },
  ];
  const recent = clients.slice(0, 4);
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map(({ label, value, change, icon: Icon, color }) => (
          <div key={label} className="bg-white dark:bg-slate-900 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-800 flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${color} flex items-center justify-center shadow-lg shrink-0`}>
              <Icon className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{label}</p>
              <p className="text-2xl font-extrabold text-slate-900 dark:text-white mt-0.5">{value}</p>
              <p className="text-xs font-semibold text-emerald-500 flex items-center gap-1 mt-0.5"><TrendingUp className="w-3 h-3" /> {change}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-5">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-base font-extrabold text-slate-900 dark:text-white">Visitor Overview</h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">Total visitors this week</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full"><Eye className="w-3 h-3" /> 2.4k total</span>
              </div>
            </div>
            <LineChart data={[400, 800, 600, 1200, 950, 1500, 1300]} color="#3b82f6" />
            <div className="flex items-center justify-between mt-4 px-2">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                <span key={day} className="text-[10px] font-bold text-slate-400 uppercase">{day}</span>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <h2 className="text-base font-extrabold text-slate-900 dark:text-white">Recent Client Requests</h2>
              <button className="text-xs font-bold text-blue-600 hover:text-blue-700">View All</button>
            </div>
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {recent.map(c => (
                <div key={c.id} className="flex items-center gap-4 px-5 py-4">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-bold shrink-0">
                    {c.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-slate-800 dark:text-white truncate">{c.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{c.type} · {c.budget}</p>
                  </div>
                  <Badge status={c.status} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-5">
            <h2 className="text-base font-extrabold text-slate-900 dark:text-white mb-6">Request Distribution</h2>
            <BarChart data={[4, 8, 3, 6, 9]} color="bg-indigo-500" />
            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
                { label: 'Landing Page', val: '40%' },
                { label: 'Company Profile', val: '30%' },
                { label: 'E-Commerce', val: '20%' },
                { label: 'Web Application', val: '10%' },
              ].map(item => (
                <div key={item.label}>
                  <p className="text-[10px] text-slate-400 font-bold uppercase truncate">{item.label}</p>
                  <p className="text-sm font-extrabold text-slate-900 dark:text-white">{item.val}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-linear-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white shadow-xl shadow-blue-500/20">
            <p className="text-xs font-bold text-blue-100 uppercase tracking-widest mb-2">Pro Tip</p>
            <h3 className="text-lg font-extrabold mb-3">Optimize your conversion</h3>
            <p className="text-sm text-blue-50 mb-4 opacity-80 leading-relaxed">Client requests are up by 15% this week. Make sure to respond to "New" status requests within 24 hours.</p>
            <button className="w-full bg-white text-blue-600 py-2.5 rounded-xl font-bold text-sm shadow-lg hover:bg-blue-50 transition-colors">Improve Response Time</button>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/40 rounded-2xl p-4">
        <p className="text-xs font-semibold text-amber-700 dark:text-amber-400">
          ⚠️ <strong>Frontend Prototype:</strong> Data ini menggunakan mock data lokal. Integrasi backend akan dilakukan setelah API siap.
        </p>
      </div>
    </div>
  );
};

// Client Requests
const ClientRequests = ({ clients, setClients }: { clients: Client[]; setClients: (c: Client[]) => void }) => {
  const [filter, setFilter] = useState<'All' | ClientStatus>('All');
  const [editing, setEditing] = useState<Client | null>(null);
  const statuses: ClientStatus[] = ['New', 'Contacted', 'In Progress', 'Completed'];
  const filtered = filter === 'All' ? clients : clients.filter(c => c.status === filter);

  const updateStatus = (id: number, status: ClientStatus) => {
    setClients(clients.map(c => c.id === id ? { ...c, status } : c));
    setEditing(null);
  };
  const deleteClient = (id: number) => setClients(clients.filter(c => c.id !== id));

  return (
    <div>
      <SectionHeader title="Client Requests" subtitle={`${clients.length} total permintaan`} />
      <div className="flex flex-wrap gap-2 mb-4">
        {(['All', ...statuses] as const).map(s => (
          <button key={s} onClick={() => setFilter(s as typeof filter)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${filter === s ? 'bg-blue-600 text-white shadow' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}`}>
            {s}
          </button>
        ))}
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              {['Nama', 'Email', 'Jenis Website', 'Budget', 'Status', 'Tanggal', ''].map(h => (
                <th key={h} className="text-left px-5 py-3.5 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {filtered.map(c => (
              <tr key={c.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <td className="px-5 py-4 font-semibold text-slate-900 dark:text-white whitespace-nowrap">{c.name}</td>
                <td className="px-5 py-4 text-slate-500 dark:text-slate-400 whitespace-nowrap">{c.email}</td>
                <td className="px-5 py-4 text-slate-600 dark:text-slate-300 whitespace-nowrap">{c.type}</td>
                <td className="px-5 py-4 text-slate-600 dark:text-slate-300 whitespace-nowrap">{c.budget}</td>
                <td className="px-5 py-4 whitespace-nowrap">
                  <div className="relative inline-block">
                    <button onClick={() => setEditing(editing?.id === c.id ? null : c)}
                      className="flex items-center gap-1">
                      <Badge status={c.status} />
                      <ChevronDown className="w-3 h-3 text-slate-400" />
                    </button>
                    {editing?.id === c.id && (
                      <div className="absolute top-full mt-1 left-0 z-20 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 py-1 min-w-[140px]">
                        {statuses.map(s => (
                          <button key={s} onClick={() => updateStatus(c.id, s)}
                            className="w-full flex items-center justify-between px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700">
                            {s} {c.status === s && <Check className="w-3 h-3 text-blue-500" />}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </td>
                <td className="px-5 py-4 text-slate-500 dark:text-slate-400 whitespace-nowrap">{c.date}</td>
                <td className="px-5 py-4">
                  <button onClick={() => deleteClient(c.id)} className="p-2 rounded-lg text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && <p className="text-center py-10 text-slate-400 text-sm">Tidak ada data.</p>}
      </div>
    </div>
  );
};

// Portfolio
const PortfolioSection = ({ items, setItems }: { items: Portfolio[]; setItems: (p: Portfolio[]) => void }) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<Omit<Portfolio, 'id'>>({ name: '', description: '', link: '', image: '', tech: '' });
  const [editId, setEditId] = useState<number | null>(null);

  const openAdd = () => { setForm({ name: '', description: '', link: '', image: '', tech: '' }); setEditId(null); setOpen(true); };
  const openEdit = (p: Portfolio) => { setForm({ name: p.name, description: p.description, link: p.link, image: p.image, tech: p.tech }); setEditId(p.id); setOpen(true); };
  const save = () => {
    if (editId !== null) setItems(items.map(i => i.id === editId ? { ...form, id: editId } : i));
    else setItems([...items, { ...form, id: Date.now() }]);
    setOpen(false);
  };
  const del = (id: number) => setItems(items.filter(i => i.id !== id));

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <SectionHeader title="Portfolio" subtitle={`${items.length} project terdaftar`} onAdd={openAdd} addLabel="Tambah Portfolio" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(p => (
          <div key={p.id} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden group">
            <div className="aspect-video bg-slate-100 dark:bg-slate-800 overflow-hidden">
              <img src={p.image || 'https://placehold.co/400x240/6366f1/fff?text=No+Image'} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-4">
              <h3 className="font-extrabold text-slate-900 dark:text-white">{p.name}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">{p.description}</p>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-2.5 py-1 rounded-full font-semibold">{p.tech}</span>
              </div>
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <a href={p.link} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs text-slate-500 hover:text-blue-600 transition-colors"><Globe className="w-3 h-3" /> Visit</a>
                <button onClick={() => openEdit(p)} className="ml-auto p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors"><Pencil className="w-4 h-4" /></button>
                <button onClick={() => del(p.id)} className="p-1.5 rounded-lg text-slate-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500 transition-colors"><Trash2 className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {open && (
        <Modal title={editId ? 'Edit Portfolio' : 'Tambah Portfolio'} onClose={() => setOpen(false)}>
          <Field label="Nama Project"><input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className={inputCls} placeholder="Nama project" /></Field>
          <Field label="Deskripsi"><textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} className={inputCls} rows={3} placeholder="Deskripsi singkat" /></Field>
          <Field label="Link Website"><input value={form.link} onChange={e => setForm({ ...form, link: e.target.value })} className={inputCls} placeholder="https://..." /></Field>
          <Field label="Tambah Gambar">
            <input type="file" accept="image/*" onChange={handleImageUpload} className={inputCls} />
            {form.image && (
              <div className="mt-3 relative aspect-video rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
                <img src={form.image} alt="Preview" className="w-full h-full object-cover" />
                <button onClick={() => setForm({ ...form, image: '' })} className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
          </Field>
          <Field label="Tech Stack"><input value={form.tech} onChange={e => setForm({ ...form, tech: e.target.value })} className={inputCls} placeholder="React, Tailwind, ..." /></Field>
          <div className="flex gap-3 mt-2">
            <button onClick={() => setOpen(false)} className="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Batal</button>
            <button onClick={save} className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold shadow hover:opacity-90 transition-opacity">Simpan</button>
          </div>
        </Modal>
      )}
    </div>
  );
};

// Services
const ServicesSection = ({ items, setItems }: { items: Service[]; setItems: (s: Service[]) => void }) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<Omit<Service, 'id'>>({ name: '', description: '', price: '' });
  const [editId, setEditId] = useState<number | null>(null);

  const openAdd = () => { setForm({ name: '', description: '', price: '' }); setEditId(null); setOpen(true); };
  const openEdit = (s: Service) => { setForm({ name: s.name, description: s.description, price: s.price }); setEditId(s.id); setOpen(true); };
  const save = () => {
    if (editId !== null) setItems(items.map(i => i.id === editId ? { ...form, id: editId } : i));
    else setItems([...items, { ...form, id: Date.now() }]);
    setOpen(false);
  };
  const del = (id: number) => setItems(items.filter(i => i.id !== id));

  return (
    <div>
      <SectionHeader title="Services" subtitle={`${items.length} layanan aktif`} onAdd={openAdd} addLabel="Tambah Layanan" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map(s => (
          <div key={s.id} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm p-5 flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0">
              <Briefcase className="text-white w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-extrabold text-slate-900 dark:text-white">{s.name}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">{s.description}</p>
              <p className="text-sm font-bold text-blue-600 dark:text-blue-400 mt-2">{s.price}</p>
            </div>
            <div className="flex flex-col gap-1">
              <button onClick={() => openEdit(s)} className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors"><Pencil className="w-4 h-4" /></button>
              <button onClick={() => del(s.id)} className="p-1.5 rounded-lg text-slate-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500 transition-colors"><Trash2 className="w-4 h-4" /></button>
            </div>
          </div>
        ))}
      </div>
      {open && (
        <Modal title={editId ? 'Edit Layanan' : 'Tambah Layanan'} onClose={() => setOpen(false)}>
          <Field label="Nama Layanan"><input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className={inputCls} placeholder="Nama layanan" /></Field>
          <Field label="Deskripsi"><textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} className={inputCls} rows={3} placeholder="Deskripsi layanan" /></Field>
          <Field label="Harga"><input value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} className={inputCls} placeholder="Mulai Rp ..." /></Field>
          <div className="flex gap-3 mt-2">
            <button onClick={() => setOpen(false)} className="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Batal</button>
            <button onClick={save} className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold shadow hover:opacity-90 transition-opacity">Simpan</button>
          </div>
        </Modal>
      )}
    </div>
  );
};

// Pricing
const PricingSection = ({ plans, setPlans }: { plans: PricingPlan[]; setPlans: (p: PricingPlan[]) => void }) => {
  const [editPlan, setEditPlan] = useState<PricingPlan | null>(null);
  const [featureInput, setFeatureInput] = useState('');

  const saveEdit = () => {
    if (!editPlan) return;
    setPlans(plans.map(p => p.id === editPlan.id ? editPlan : p));
    setEditPlan(null);
  };
  const addFeature = () => {
    if (!featureInput.trim() || !editPlan) return;
    setEditPlan({ ...editPlan, features: [...editPlan.features, featureInput.trim()] });
    setFeatureInput('');
  };
  const removeFeature = (i: number) => {
    if (!editPlan) return;
    setEditPlan({ ...editPlan, features: editPlan.features.filter((_, idx) => idx !== i) });
  };

  return (
    <div>
      <SectionHeader title="Pricing" subtitle="Kelola paket harga layanan" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map(p => (
          <div key={p.id} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full">{p.name}</span>
              <button onClick={() => setEditPlan({ ...p })} className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors"><Pencil className="w-4 h-4" /></button>
            </div>
            <p className="text-2xl font-extrabold text-slate-900 dark:text-white mb-4">{p.price}</p>
            <ul className="space-y-2">
              {p.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />{f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {editPlan && (
        <Modal title={`Edit Paket ${editPlan.name}`} onClose={() => setEditPlan(null)}>
          <Field label="Nama Paket"><input value={editPlan.name} onChange={e => setEditPlan({ ...editPlan, name: e.target.value })} className={inputCls} /></Field>
          <Field label="Harga"><input value={editPlan.price} onChange={e => setEditPlan({ ...editPlan, price: e.target.value })} className={inputCls} placeholder="Rp ..." /></Field>
          <Field label="Fitur">
            <ul className="mb-2 space-y-1">
              {editPlan.features.map((f, i) => (
                <li key={i} className="flex items-center justify-between bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-lg text-sm text-slate-700 dark:text-slate-300">
                  {f}
                  <button onClick={() => removeFeature(i)} className="text-red-400 hover:text-red-600 ml-2"><X className="w-3 h-3" /></button>
                </li>
              ))}
            </ul>
            <div className="flex gap-2">
              <input value={featureInput} onChange={e => setFeatureInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && addFeature()} className={inputCls} placeholder="Tambah fitur baru..." />
              <button onClick={addFeature} className="px-3 py-2 rounded-xl bg-blue-600 text-white"><Plus className="w-4 h-4" /></button>
            </div>
          </Field>
          <div className="flex gap-3 mt-2">
            <button onClick={() => setEditPlan(null)} className="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">Batal</button>
            <button onClick={saveEdit} className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold hover:opacity-90">Simpan</button>
          </div>
        </Modal>
      )}
    </div>
  );
};

// Blog
const BlogSection = ({ posts, setPosts }: { posts: BlogPost[]; setPosts: (p: BlogPost[]) => void }) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<Omit<BlogPost, 'id'>>({ title: '', category: '', date: '', excerpt: '' });
  const [editId, setEditId] = useState<number | null>(null);

  const openAdd = () => { setForm({ title: '', category: '', date: new Date().toISOString().slice(0, 10), excerpt: '' }); setEditId(null); setOpen(true); };
  const openEdit = (p: BlogPost) => { setForm({ title: p.title, category: p.category, date: p.date, excerpt: p.excerpt }); setEditId(p.id); setOpen(true); };
  const save = () => {
    if (editId !== null) setPosts(posts.map(p => p.id === editId ? { ...form, id: editId } : p));
    else setPosts([{ ...form, id: Date.now() }, ...posts]);
    setOpen(false);
  };

  return (
    <div>
      <SectionHeader title="Blog" subtitle={`${posts.length} artikel diterbitkan`} onAdd={openAdd} addLabel="Tulis Artikel" />
      <div className="space-y-3">
        {posts.map(p => (
          <div key={p.id} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm p-5 flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center shrink-0">
              <FileText className="text-white w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-xs font-bold bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 px-2.5 py-0.5 rounded-full">{p.category}</span>
                <span className="text-xs text-slate-400">{p.date}</span>
              </div>
              <h3 className="font-extrabold text-slate-900 dark:text-white mt-1">{p.title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">{p.excerpt}</p>
            </div>
            <div className="flex gap-1 shrink-0">
              <button onClick={() => openEdit(p)} className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors"><Pencil className="w-4 h-4" /></button>
              <button onClick={() => setPosts(posts.filter(x => x.id !== p.id))} className="p-1.5 rounded-lg text-slate-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500 transition-colors"><Trash2 className="w-4 h-4" /></button>
            </div>
          </div>
        ))}
      </div>
      {open && (
        <Modal title={editId ? 'Edit Artikel' : 'Tulis Artikel'} onClose={() => setOpen(false)}>
          <Field label="Judul"><input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} className={inputCls} placeholder="Judul artikel" /></Field>
          <Field label="Kategori"><input value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} className={inputCls} placeholder="Tutorial, Tips, Artikel" /></Field>
          <Field label="Tanggal"><input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} className={inputCls} /></Field>
          <Field label="Ringkasan (Excerpt)"><textarea value={form.excerpt} onChange={e => setForm({ ...form, excerpt: e.target.value })} className={inputCls} rows={3} placeholder="Ringkasan singkat artikel..." /></Field>
          <div className="flex gap-3 mt-2">
            <button onClick={() => setOpen(false)} className="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">Batal</button>
            <button onClick={save} className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold hover:opacity-90">Simpan</button>
          </div>
        </Modal>
      )}
    </div>
  );
};

// Testimonials
const TestimonialsSection = ({ items, setItems }: { items: Testimonial[]; setItems: (t: Testimonial[]) => void }) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<Omit<Testimonial, 'id'>>({ name: '', company: '', review: '', rating: 5 });
  const [editId, setEditId] = useState<number | null>(null);

  const openAdd = () => { setForm({ name: '', company: '', review: '', rating: 5 }); setEditId(null); setOpen(true); };
  const openEdit = (t: Testimonial) => { setForm({ name: t.name, company: t.company, review: t.review, rating: t.rating }); setEditId(t.id); setOpen(true); };
  const save = () => {
    if (editId !== null) setItems(items.map(i => i.id === editId ? { ...form, id: editId } : i));
    else setItems([...items, { ...form, id: Date.now() }]);
    setOpen(false);
  };

  return (
    <div>
      <SectionHeader title="Testimonials" subtitle={`${items.length} testimoni terdaftar`} onAdd={openAdd} addLabel="Tambah Testimoni" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(t => (
          <div key={t.id} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm p-5">
            <div className="flex gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < t.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200 dark:text-slate-700'}`} />
              ))}
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 italic line-clamp-3 mb-3">"{t.review}"</p>
            <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800">
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">{t.name}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{t.company}</p>
              </div>
              <div className="flex gap-1">
                <button onClick={() => openEdit(t)} className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors"><Pencil className="w-4 h-4" /></button>
                <button onClick={() => setItems(items.filter(x => x.id !== t.id))} className="p-1.5 rounded-lg text-slate-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500 transition-colors"><Trash2 className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {open && (
        <Modal title={editId ? 'Edit Testimoni' : 'Tambah Testimoni'} onClose={() => setOpen(false)}>
          <Field label="Nama Client"><input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className={inputCls} placeholder="Nama client" /></Field>
          <Field label="Perusahaan"><input value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} className={inputCls} placeholder="Nama perusahaan" /></Field>
          <Field label="Review"><textarea value={form.review} onChange={e => setForm({ ...form, review: e.target.value })} className={inputCls} rows={3} placeholder="Isi review..." /></Field>
          <Field label={`Rating: ${form.rating}/5`}>
            <input type="range" min={1} max={5} value={form.rating} onChange={e => setForm({ ...form, rating: Number(e.target.value) })} className="w-full accent-blue-600" />
          </Field>
          <div className="flex gap-3 mt-2">
            <button onClick={() => setOpen(false)} className="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">Batal</button>
            <button onClick={save} className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold hover:opacity-90">Simpan</button>
          </div>
        </Modal>
      )}
    </div>
  );
};

// Analytics Section
const AnalyticsSection = () => {
  return (
    <div className="space-y-6">
      <SectionHeader title="Dashboard Analytics" subtitle="Statistik performa website dan konversi client" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm p-6">
          <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-6">Client Response Trend</h3>
          <div className="h-64">
            <LineChart data={[2, 5, 3, 9, 6, 12, 10, 15, 11, 18]} color="#8b5cf6" />
          </div>
          <div className="flex items-center justify-between mt-4 text-[10px] font-bold text-slate-400 uppercase">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm p-6">
          <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-6">New vs Completed Projects</h3>
          <div className="h-64 flex items-end gap-3 px-4">
            <div className="flex-1 flex flex-col gap-1 items-center">
              <div className="w-full bg-blue-500 rounded-t-lg h-32"></div>
              <div className="w-full bg-emerald-500 rounded-t-lg h-40"></div>
              <span className="text-[10px] font-bold text-slate-400 mt-2">WEEK 1</span>
            </div>
            <div className="flex-1 flex flex-col gap-1 items-center">
              <div className="w-full bg-blue-500 rounded-t-lg h-48"></div>
              <div className="w-full bg-emerald-500 rounded-t-lg h-36"></div>
              <span className="text-[10px] font-bold text-slate-400 mt-2">WEEK 2</span>
            </div>
            <div className="flex-1 flex flex-col gap-1 items-center">
              <div className="w-full bg-blue-500 rounded-t-lg h-56"></div>
              <div className="w-full bg-emerald-500 rounded-t-lg h-52"></div>
              <span className="text-[10px] font-bold text-slate-400 mt-2">WEEK 3</span>
            </div>
          </div>
          <div className="flex justify-center gap-6 mt-6">
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-blue-500" /> <span className="text-xs font-bold text-slate-600 dark:text-slate-300">New Requests</span></div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-emerald-500" /> <span className="text-xs font-bold text-slate-600 dark:text-slate-300">Completed</span></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Conversion Rate', val: '12.4%', sub: '+2.1% from last month', icon: TrendingUp, color: 'text-emerald-500' },
          { label: 'Avg Project Budget', val: 'Rp 4.2M', sub: 'Based on last 10 deals', icon: Briefcase, color: 'text-blue-500' },
          { label: 'User Retention', val: '88%', sub: 'Returning visitors', icon: Users, color: 'text-purple-500' },
        ].map(card => (
          <div key={card.label} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm p-6 leading-none">
            <div className="flex items-center justify-between mb-4">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{card.label}</p>
              <card.icon className={`w-5 h-5 ${card.color}`} />
            </div>
            <p className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">{card.val}</p>
            <p className="text-xs font-semibold text-slate-400">{card.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Settings
const SettingsSection = ({
  settings, setSettings, isDark, setIsDark,
}: {
  settings: SiteSettings; setSettings: (s: SiteSettings) => void;
  isDark: boolean; setIsDark: (v: boolean) => void;
}) => {
  const [form, setForm] = useState(settings);
  const [saved, setSaved] = useState(false);
  const save = () => { setSettings(form); setSaved(true); setTimeout(() => setSaved(false), 2000); };

  const hour = new Date().getHours();
  const isAutoDay = hour >= 6 && hour < 18;

  return (
    <div>
      <SectionHeader title="Settings" subtitle="Pengaturan website agency" />

      {/* Theme Settings Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm p-6 mb-6">
        <h3 className="font-extrabold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          {isDark ? <Moon className="w-5 h-5 text-indigo-500" /> : <Sun className="w-5 h-5 text-amber-500" />}
          Tampilan Dashboard
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
          Mode saat ini disesuaikan otomatis berdasarkan waktu&nbsp;
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            ({isAutoDay ? '☀️ Siang (06:00–18:00)' : '🌙 Malam (18:00–06:00)'})
          </span>. Kamu bisa mengubahnya secara manual di bawah.
        </p>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDark(false)}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 text-sm font-bold transition-all ${
              !isDark
                ? 'border-amber-400 bg-amber-50 text-amber-700'
                : 'border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}>
            <Sun className="w-4 h-4" /> Light Mode
          </button>
          <button
            onClick={() => setIsDark(true)}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 text-sm font-bold transition-all ${
              isDark
                ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300'
                : 'border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}>
            <Moon className="w-4 h-4" /> Dark Mode
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm p-6">
          <h3 className="font-extrabold text-slate-900 dark:text-white mb-4 flex items-center gap-2"><Globe className="w-5 h-5 text-blue-600" /> Informasi Kontak</h3>
          <Field label="Email"><div className="relative"><Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" /><input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className={`${inputCls} pl-9`} /></div></Field>
          <Field label="Telepon"><div className="relative"><Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" /><input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className={`${inputCls} pl-9`} /></div></Field>
          <Field label="Alamat"><textarea value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} className={inputCls} rows={2} /></Field>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm p-6">
          <h3 className="font-extrabold text-slate-900 dark:text-white mb-4 flex items-center gap-2"><Tag className="w-5 h-5 text-purple-600" /> Social Media</h3>
          <Field label="Instagram"><div className="relative"><Instagram className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" /><input value={form.instagram} onChange={e => setForm({ ...form, instagram: e.target.value })} className={`${inputCls} pl-9`} placeholder="username" /></div></Field>
          <Field label="Twitter / X"><div className="relative"><Twitter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" /><input value={form.twitter} onChange={e => setForm({ ...form, twitter: e.target.value })} className={`${inputCls} pl-9`} placeholder="username" /></div></Field>
          <Field label="Facebook"><div className="relative"><Facebook className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" /><input value={form.facebook} onChange={e => setForm({ ...form, facebook: e.target.value })} className={`${inputCls} pl-9`} placeholder="page name" /></div></Field>
          <Field label="YouTube"><div className="relative"><Youtube className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" /><input value={form.youtube} onChange={e => setForm({ ...form, youtube: e.target.value })} className={`${inputCls} pl-9`} placeholder="channel name" /></div></Field>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button onClick={save} className={`flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm shadow-lg transition-all active:scale-95 ${saved ? 'bg-emerald-500 shadow-emerald-500/20' : 'bg-gradient-to-r from-blue-600 to-indigo-600 shadow-blue-500/20 hover:opacity-90'}`}>
          {saved ? <><Check className="w-4 h-4" /> Tersimpan!</> : 'Simpan Pengaturan'}
        </button>
      </div>
    </div>
  );
};

// ─────────────── MAIN DASHBOARD ───────────────
type Section = 'dashboard' | 'analytics' | 'clients' | 'portfolio' | 'services' | 'pricing' | 'blog' | 'testimonials' | 'settings';

const navItems: { id: Section; label: string; icon: React.FC<{ className?: string }> }[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'analytics', label: 'Analytics', icon: TrendingUp },
  { id: 'clients', label: 'Client Requests', icon: Users },
  { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
  { id: 'services', label: 'Services', icon: Tag },
  { id: 'pricing', label: 'Pricing', icon: Star },
  { id: 'blog', label: 'Blog', icon: FileText },
  { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
  { id: 'settings', label: 'Settings', icon: Settings },
];

const AdminDashboard = () => {
  const [active, setActive] = useState<Section>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [clients, setClients] = useState<Client[]>(initClients);
  const [portfolio, setPortfolio] = useState<Portfolio[]>(initPortfolio);
  const [services, setServices] = useState<Service[]>(initServices);
  const [pricing, setPricing] = useState<PricingPlan[]>(initPricing);
  const [blog, setBlog] = useState<BlogPost[]>(initBlog);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initTestimonials);
  const [siteSettings, setSiteSettings] = useState<SiteSettings>(initSettings);

  // Auto dark mode based on time: 06:00–18:00 = light, else = dark
  const getAutoTheme = () => {
    const h = new Date().getHours();
    return h < 6 || h >= 18;
  };
  const [isDark, setIsDark] = useState(getAutoTheme);

  // Re-check every minute in case minute flips 06:00 or 18:00
  useEffect(() => {
    const interval = setInterval(() => setIsDark(getAutoTheme()), 60_000);
    return () => clearInterval(interval);
  }, []);

  const newClients = clients.filter(c => c.status === 'New').length;
  const currentNav = navItems.find(n => n.id === active);

  const navigate = (section: Section) => { setActive(section); setSidebarOpen(false); };

  const renderSection = () => {
    switch (active) {
      case 'dashboard': return <DashboardOverview clients={clients} portfolio={portfolio} posts={blog} />;
      case 'analytics': return <AnalyticsSection />;
      case 'clients': return <ClientRequests clients={clients} setClients={setClients} />;
      case 'portfolio': return <PortfolioSection items={portfolio} setItems={setPortfolio} />;
      case 'services': return <ServicesSection items={services} setItems={setServices} />;
      case 'pricing': return <PricingSection plans={pricing} setPlans={setPricing} />;
      case 'blog': return <BlogSection posts={blog} setPosts={setBlog} />;
      case 'testimonials': return <TestimonialsSection items={testimonials} setItems={setTestimonials} />;
      case 'settings': return <SettingsSection settings={siteSettings} setSettings={setSiteSettings} isDark={isDark} setIsDark={setIsDark} />;
    }
  };

  return (
    <div className={`flex min-h-screen bg-slate-100 dark:bg-slate-950 ${isDark ? 'dark' : ''}`}>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/40 z-20 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-slate-900 border-r border-slate-100 dark:border-slate-800 z-30 flex flex-col transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:z-auto`}>
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-5 border-b border-slate-100 dark:border-slate-800">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Zap className="text-white w-5 h-5" fill="currentColor" />
          </div>
          <div>
            <p className="font-extrabold text-slate-900 dark:text-white leading-none">Nusify</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mt-0.5">Admin Panel</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-5 space-y-0.5 overflow-y-auto">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button key={id} onClick={() => navigate(id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                active === id
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                  : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-800 dark:hover:text-white'
              }`}>
              <Icon className="w-5 h-5 shrink-0" />
              <span className="flex-1 text-left">{label}</span>
              {id === 'clients' && newClients > 0 && (
                <span className="text-xs font-bold bg-blue-600 text-white rounded-full min-w-[20px] h-5 flex items-center justify-center px-1.5">{newClients}</span>
              )}
            </button>
          ))}
        </nav>

        {/* Logout */}
        <div className="px-3 py-4 border-t border-slate-100 dark:border-slate-800">
          <Link to="/login" className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200">
            <LogOut className="w-5 h-5" /> Logout
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 px-5 py-4 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div>
              <h1 className="text-lg font-extrabold text-slate-900 dark:text-white leading-tight">{currentNav?.label}</h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">Nusify Admin Panel</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDark(!isDark)}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-amber-500 dark:hover:text-indigo-400 transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button className="relative p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-blue-600 transition-colors">
              <Bell className="w-5 h-5" />
              {newClients > 0 && <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />}
            </button>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/20 cursor-pointer">A</div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-5 sm:p-6">
          {renderSection()}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
