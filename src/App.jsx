import { useState } from 'react';

const features = [
  {
    title: 'Mudah Digunakan',
    description: 'Tidak perlu keahlian teknis. Setup dalam 5 menit.',
    iconBg: 'bg-indigo-50',
    iconText: 'text-indigo-600',
    hoverBorder: 'hover:border-indigo-200',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M13 2 4 14h7l-1 8 10-13h-7l1-7Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Serba Otomatis',
    description: 'Otomatiskan tugas berulang dan fokus pada hal yang penting.',
    iconBg: 'bg-emerald-50',
    iconText: 'text-emerald-600',
    hoverBorder: 'hover:border-emerald-200',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3v3m0 0H8.5A4.5 4.5 0 0 0 4 10.5v4A4.5 4.5 0 0 0 8.5 19h7a4.5 4.5 0 0 0 4.5-4.5v-4A4.5 4.5 0 0 0 15.5 6H12Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M9 12h.01M15 12h.01M9.5 16h5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Laporan Real-time',
    description: 'Pantau performa bisnismu kapan saja dan di mana saja.',
    iconBg: 'bg-amber-50',
    iconText: 'text-amber-600',
    hoverBorder: 'hover:border-amber-200',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 19V5m0 14h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 16v-5m4 5V8m4 8v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path
          d="m8 10 4-3 4 2 4-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

function getFeedback(counter) {
  if (counter === 1) {
    return `Terimakasih telah mencoba! Anda telah mengklik ctaBtn ${counter} kali.`;
  }

  if (counter === 2) {
    return 'Teks berubah setelah 2 kali klik feedback.';
  }

  if (counter >= 3) {
    return 'Tombol ctaBtn dinonaktifkan setelah 3 kali klik feedback.';
  }

  return '';
}

export default function App() {
  const [counter, setCounter] = useState(0);
  const isDisabled = counter >= 3;
  const feedback = getFeedback(counter);

  function handleCtaClick() {
    setCounter((currentCounter) => currentCounter + 1);
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-800">
      <header className="sticky top-0 z-10 flex flex-col gap-4 border-b border-gray-200 bg-white/90 px-6 py-4 shadow-sm backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <h1 className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-indigo-600">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-sm font-black text-white">
            B
          </span>
          BrandKu
        </h1>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <a href="#" className="text-gray-600 transition-colors hover:text-indigo-600">
            Beranda
          </a>
          <a href="#" className="text-gray-600 transition-colors hover:text-indigo-600">
            Fitur
          </a>
          <a href="#" className="text-gray-600 transition-colors hover:text-indigo-600">
            Harga
          </a>
        </nav>
      </header>

      <main>
        <section className="flex flex-col items-center bg-gradient-to-b from-indigo-50 via-white to-slate-50 px-6 py-20 text-center sm:px-8 sm:py-24">
          <h1 className="mb-5 max-w-3xl text-4xl font-extrabold leading-tight text-gray-950 sm:text-5xl">
            Solusi Terbaik untuk Bisnismu
          </h1>

          <p className="mb-8 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Platform all-in-one untuk manajemen, pemasaran, dan pertumbuhan bisnis kecil.
          </p>

          <button
            type="button"
            onClick={handleCtaClick}
            disabled={isDisabled}
            className="rounded-full bg-indigo-600 px-8 py-3 font-semibold text-white shadow-lg shadow-indigo-600/20 transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Mulai Gratis
          </button>

          <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-indigo-100 bg-white/80 px-5 py-3 shadow-sm">
            <span className="text-sm font-medium text-gray-600">Counter:</span>
            <span className="min-w-8 text-lg font-bold text-indigo-600">{counter}</span>
          </div>

          {feedback && <p className="mt-4 text-sm font-medium text-gray-500">{feedback}</p>}
        </section>

        <section className="bg-slate-50 px-6 py-16 sm:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-950">Mengapa BrandKu?</h2>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className={`rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${feature.hoverBorder}`}
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${feature.iconBg} ${feature.iconText}`}
                >
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-950 px-6 py-8 text-center text-sm text-gray-400 sm:px-8">
        <p>&copy; 2025 BrandKu. All rights reserved.</p>
      </footer>
    </div>
  );
}
