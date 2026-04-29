'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-parchment/95 backdrop-blur-sm z-50 border-b border-light-gray shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-forest rounded-full flex items-center justify-center">
            <span className="text-saffron font-sans text-lg font-bold">R</span>
          </div>
          <span className="text-xl font-sans text-forest font-bold">RESHA</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm font-sans transition-colors ${
              isActive('/')
                ? 'text-saffron font-semibold'
                : 'text-forest hover:text-saffron'
            }`}
          >
            Home
          </Link>
          <Link
            href="/network"
            className={`text-sm font-sans transition-colors ${
              isActive('/network')
                ? 'text-saffron font-semibold'
                : 'text-forest hover:text-saffron'
            }`}
          >
            Network
          </Link>
          <Link
            href="/onboard"
            className="px-6 py-2 bg-forest text-parchment rounded-md font-sans text-sm hover:bg-saffron transition-colors"
          >
            Join Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 hover:bg-light-gray rounded-md transition-colors">
          <svg
            className="w-6 h-6 text-forest"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
