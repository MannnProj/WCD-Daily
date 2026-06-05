# BrandKu React + Tailwind CSS

Landing page BrandKu yang sebelumnya dibuat dengan HTML, JavaScript DOM, dan Tailwind CDN sekarang sudah dikonversi menjadi aplikasi React dengan Tailwind CSS.

## Fitur

- Layout landing page responsif dengan header sticky, hero section, kartu fitur, dan footer.
- Styling menggunakan Tailwind CSS melalui file CSS build, bukan CDN.
- Tombol CTA interaktif dengan counter klik.
- Feedback berubah setelah tombol diklik.
- Tombol CTA otomatis nonaktif setelah 3 kali klik.

## Teknologi

- React
- Vite
- Tailwind CSS
- PostCSS
- Autoprefixer

## Struktur File

```text
.
├── index.html
├── tailwind.html
├── index.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── src
    ├── App.jsx
    └── index.css
```

Keterangan singkat:

- `index.html`: entry HTML utama untuk Vite.
- `tailwind.html`: shell HTML versi nama file lama yang tetap mount ke aplikasi React.
- `index.js`: entry React yang merender komponen utama.
- `src/App.jsx`: komponen landing page dan logic counter CTA.
- `src/index.css`: tempat directive Tailwind (`@tailwind base`, `components`, dan `utilities`).
- `tailwind.config.js`: konfigurasi scanning class Tailwind.
- `vite.config.js`: konfigurasi Vite dengan plugin React.

## Cara Menjalankan

Install dependency:

```bash
npm install
```

Jalankan development server:

```bash
npm run dev
```

Buka URL yang muncul di terminal, biasanya:

```text
http://127.0.0.1:5173/
```

## Build Production

Untuk membuat versi production:

```bash
npm run build
```

Hasil build akan dibuat di folder `dist/`.

## Preview Build

Setelah build, preview hasil production dengan:

```bash
npm run preview
```
