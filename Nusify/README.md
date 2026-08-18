# Nusify

Nusify adalah website agency premium untuk layanan pembuatan website, redesign, online shop, portfolio, pricing, blog, dashboard, dan pemesanan langsung via WhatsApp. Project ini dibangun dengan React 19, TypeScript, Vite, Tailwind CSS, Framer Motion, dan React Router.

## Fitur Utama

- Landing page agency dengan visual modern dan glassmorphism.
- Halaman layanan, portfolio, pricing, blog, kontak, login, register, dashboard user, dan dashboard admin.
- Sistem auth sederhana berbasis `localStorage`.
- Protected route untuk halaman pricing, dashboard user, dan dashboard admin.
- Flow pemesanan paket yang mengarahkan customer ke WhatsApp.
- Dark mode lewat context theme.
- Animasi halaman dan komponen memakai Framer Motion.
- Konfigurasi siap deploy ke Vercel.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- React Router DOM 7
- Framer Motion
- Lenis
- Lucide React
- ESLint
- Vercel

## Struktur Folder

```txt
Nusify/
├── public/                 # Asset publik
├── src/
│   ├── assets/             # Gambar dan media aplikasi
│   ├── components/         # Komponen UI reusable
│   ├── context/            # AuthContext dan ThemeContext
│   ├── pages/              # Halaman utama aplikasi
│   ├── pages/service/      # Halaman detail layanan
│   ├── App.tsx             # Router dan layout global
│   ├── main.tsx            # Entry point React
│   └── index.css           # Style global
├── vercel.json             # Konfigurasi deploy Vercel
├── vite.config.ts          # Konfigurasi Vite
├── package.json            # Script dan dependency
└── README.md
```

## Halaman Aplikasi

| Route | Deskripsi |
| --- | --- |
| `/` | Homepage Nusify |
| `/about` | Profil dan informasi agency |
| `/services` | Daftar layanan |
| `/service/online-shop` | Detail layanan online shop |
| `/service/redesign` | Detail layanan redesign |
| `/portfolio` | Portfolio project |
| `/pricing` | Paket harga, butuh login |
| `/payment` | Form pemesanan via WhatsApp |
| `/blog` | Daftar artikel |
| `/blog/:id` | Detail artikel |
| `/contact` | Kontak dan lokasi |
| `/login` | Login user |
| `/register` | Registrasi user |
| `/dashboard` | Dashboard user, butuh login |
| `/admin` | Dashboard admin, butuh role admin |

## Prasyarat

- Node.js 20 atau lebih baru direkomendasikan.
- npm 10 atau lebih baru.

## Instalasi Lokal

```bash
cd Nusify
npm install
npm run dev
```

Aplikasi berjalan di URL yang ditampilkan Vite, biasanya `http://localhost:5173`.

## Script

```bash
npm run dev      # Menjalankan development server
npm run build    # Typecheck TypeScript lalu build production
npm run lint     # Menjalankan ESLint
npm run preview  # Preview hasil build production
```

## Build Production

```bash
npm run build
npm run preview
```

Output build tersimpan di folder `dist/`.

## Deployment Vercel

Project sudah punya `vercel.json`:

```json
{
  "name": "nusify",
  "cleanUrls": true,
  "framework": "vite"
}
```

Deploy dari root folder `Nusify`:

```bash
vercel --prod
```

Jika deploy lewat dashboard Vercel, gunakan konfigurasi berikut:

- Framework Preset: Vite
- Root Directory: `Nusify`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

## Environment Variable

Saat ini project tidak membutuhkan environment variable. Nomor WhatsApp pemesanan masih didefinisikan langsung di `src/pages/Payment.tsx`.

## Catatan Auth

Auth masih memakai `localStorage`, cocok untuk demo frontend. Untuk production penuh, gunakan backend auth, session aman, validasi role server-side, dan penyimpanan data user di database.

## Lisensi

Belum ada lisensi khusus yang disertakan di repository ini.
