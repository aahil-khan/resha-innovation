import Link from 'next/link';

export function Footer() {
  return (
    <footer style={{ background: '#1a1a1a', color: '#F5F0E8' }} className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <img src="/icon.svg" alt="RESHA Logo" className="h-9 w-auto brightness-110" />
            <span className="text-2xl" style={{ fontFamily: 'Marcellus, serif', color: '#F5F0E8', letterSpacing: '-0.02em' }}>resha</span>
          </div>

          {/* Copyright & Info */}
          <div className="text-center">
            <p className="text-sm font-medium" style={{ color: 'rgba(245,240,232,0.8)' }}>
              © 2025 RESHA. All rights reserved.
            </p>
            <p className="text-xs mt-1" style={{ color: 'rgba(245,240,232,0.4)' }}>
              Reverence in Recycling — Pilot Stage | India
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-8 text-sm font-semibold" style={{ color: 'rgba(245,240,232,0.6)' }}>
            <Link href="/" className="hover:text-saffron transition-colors">Home</Link>
            <Link href="/network" className="hover:text-saffron transition-colors">Network</Link>
            <Link href="/onboard" className="hover:text-saffron transition-colors">Partner</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
