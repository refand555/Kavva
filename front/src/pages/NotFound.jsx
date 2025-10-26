// src/pages/NotFound.jsx
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen grid place-items-center bg-gray-50 px-6">
      <section className="text-center max-w-md">
        <p className="text-sm uppercase tracking-widest text-gray-400">Error</p>
        <h1 className="mt-2 text-7xl font-bold text-gray-900">404</h1>
        <p className="mt-4 text-gray-600">
          Halaman yang kamu cari tidak ditemukan atau sudah dipindahkan.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={() => history.back()}
            className="inline-flex items-center gap-2 rounded-2xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 active:scale-[.98] transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali
          </button>

          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-2xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:opacity-90 active:scale-[.98] transition"
          >
            <Home className="h-4 w-4" />
            Ke Beranda
          </a>
        </div>
      </section>
    </main>
  );
}
