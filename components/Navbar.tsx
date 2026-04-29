'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-parchment/98 backdrop-blur-md shadow-md border-b border-light-gray'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Lotus/Mandala mark */}
          <div className="w-9 h-9 relative">
            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <circle cx="18" cy="18" r="17" stroke="#1B5E3B" strokeWidth="1.5" opacity="0.3"/>
              <circle cx="18" cy="18" r="11" stroke="#1B5E3B" strokeWidth="1.5" opacity="0.5"/>
              <circle cx="18" cy="18" r="5" fill="#1B5E3B" opacity="0.8"/>
              {/* Petals */}
              {[0,45,90,135,180,225,270,315].map((angle, i) => (
                <ellipse
                  key={i}
                  cx="18" cy="18" rx="3" ry="7"
                  fill="#E87722"
                  opacity="0.7"
                  transform={`rotate(${angle} 18 18) translate(0 -9)`}
                  style={{transformOrigin: '18px 18px'}}
                />
              ))}
              <circle cx="18" cy="18" r="3" fill="#1B5E3B"/>
            </svg>
          </div>
          <span
            className="text-2xl text-forest group-hover:text-forest-light transition-colors"
            style={{ fontFamily: 'DM Serif Display, serif', letterSpacing: '-0.02em' }}
          >
            resha
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors duration-200 ${
              isActive('/') ? 'text-saffron' : 'text-forest hover:text-saffron'
            }`}
          >
            Home
          </Link>
          <Link
            href="/network"
            className={`text-sm font-medium transition-colors duration-200 ${
              isActive('/network') ? 'text-saffron' : 'text-forest hover:text-saffron'
            }`}
          >
            Network
          </Link>
          <Link
            href="/onboard"
            className="px-5 py-2.5 bg-saffron text-white rounded-lg text-sm font-semibold hover:bg-saffron-light transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Partner With Us
          </Link>
        </div>

        {/* Mobile Menu */}
        <button
          className="md:hidden p-2 text-forest hover:text-saffron transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-parchment border-t border-light-gray px-6 py-4 space-y-3">
          <Link href="/" className="block text-forest font-medium py-2" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link href="/network" className="block text-forest font-medium py-2" onClick={() => setMobileOpen(false)}>Network</Link>
          <Link href="/onboard" className="block btn-saffron w-full text-center" onClick={() => setMobileOpen(false)}>Partner With Us</Link>
        </div>
      )}
    </nav>
  );
}
