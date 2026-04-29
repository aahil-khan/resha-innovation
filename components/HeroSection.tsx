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
            style={{ fontFamily: 'Marcellus, serif' }}
          >
            {hero.headline_line1}
          </span>
          <span
            className="block text-6xl md:text-8xl lg:text-9xl text-gradient-saffron"
            style={{ fontFamily: 'Marcellus, serif', fontStyle: 'italic' }}
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

      </div>

      {/* Bottom ethnic divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <EthnicDivider goldAccent={true} />
      </div>
    </section>
  );
}
