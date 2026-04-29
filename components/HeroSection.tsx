import Link from 'next/link';
import { HOME_SECTIONS } from '@/lib/constants';
import { EthnicDivider } from './EthnicDivider';

export function HeroSection() {
  const hero = HOME_SECTIONS.hero;

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #FAF7F2 0%, #F5F0E8 40%, #ede8df 100%)' }}
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute min-w-full min-h-full object-cover"
          style={{ opacity: 1 }}
        >
          <source src="/animation.mp4" type="video/mp4" />
        </video>
        {/* Subtle overlay to maintain contrast if needed */}
        <div className="absolute inset-0 bg-parchment/10 mix-blend-overlay"></div>
      </div>

      {/* Background mandala rings */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow">
          <svg width="900" height="900" viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.035">
            <circle cx="450" cy="450" r="400" stroke="#1B5E3B" strokeWidth="1"/>
            <circle cx="450" cy="450" r="320" stroke="#1B5E3B" strokeWidth="1"/>
            <circle cx="450" cy="450" r="240" stroke="#1B5E3B" strokeWidth="1"/>
            <circle cx="450" cy="450" r="160" stroke="#1B5E3B" strokeWidth="1"/>
            <circle cx="450" cy="450" r="80" stroke="#1B5E3B" strokeWidth="1"/>
            {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle) => (
              <line
                key={angle}
                x1="450" y1="50" x2="450" y2="850"
                stroke="#1B5E3B" strokeWidth="0.5"
                transform={`rotate(${angle} 450 450)`}
              />
            ))}
          </svg>
        </div>
        {/* Corner ethnic accents */}
        <div className="absolute top-0 left-0 w-64 h-64 opacity-5">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0 L200 0 L200 200" fill="#1B5E3B" opacity="0.3"/>
            {[0,20,40,60,80,100].map((i) => (
              <line key={i} x1="0" y1={i} x2={i} y2="0" stroke="#E87722" strokeWidth="1"/>
            ))}
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 opacity-5" style={{transform: 'scaleX(-1)'}}>
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0 L200 0 L200 200" fill="#1B5E3B" opacity="0.3"/>
            {[0,20,40,60,80,100].map((i) => (
              <line key={i} x1="0" y1={i} x2={i} y2="0" stroke="#E87722" strokeWidth="1"/>
            ))}
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center z-10">
        {/* Overline badge */}
        <div className="inline-flex items-center gap-2 mb-8 animate-fade-in">
          <div className="w-8 h-px bg-saffron"/>
          <span
            className="text-saffron text-sm font-semibold uppercase tracking-widest"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Reverence in Recycling
          </span>
          <div className="w-8 h-px bg-saffron"/>
        </div>

        {/* Main headline */}
        <h1 className="mb-6 leading-tight animate-fade-in-up delay-100">
          <span
            className="block text-6xl md:text-8xl lg:text-9xl text-forest"
            style={{ fontFamily: 'DM Serif Display, serif' }}
          >
            {hero.headline_line1}
          </span>
          <span
            className="block text-6xl md:text-8xl lg:text-9xl text-gradient-saffron"
            style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic' }}
          >
            {hero.headline_line2}
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg md:text-xl text-dark-gray max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-300"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          {hero.subheadline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-500">
          <Link href="/network" className="btn-saffron text-base">
            {hero.cta_primary}
          </Link>
          <Link
            href="/onboard"
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-forest text-forest rounded-lg font-semibold text-base hover:bg-forest hover:text-parchment transition-all duration-300"
          >
            {hero.cta_secondary}
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 opacity-50 animate-float">
          <span className="text-xs text-dark-gray uppercase tracking-widest">Scroll</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4A4A4A" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
          </svg>
        </div>
      </div>

      {/* Bottom ethnic divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <EthnicDivider goldAccent={true} />
      </div>
    </section>
  );
}
