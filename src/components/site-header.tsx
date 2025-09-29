'use client';
import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur">
      <div className="max-w-[80vw] mx-auto flex h-14 items-center justify-between px-4">
        <button className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-sm text-zinc-300 hover:bg-white/5">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
          Menu
        </button>
        <nav className="hidden gap-6 text-sm text-zinc-300 md:flex">
          <Link href="#tools" className="hover:text-white">
            Tools
          </Link>
          <Link href="#manifesto" className="hover:text-white">
            Manifesto
          </Link>
          <Link href="#about" className="hover:text-white">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
