import Link from 'next/link';
import { HOME_SECTIONS } from '@/lib/constants';

export function HeroSection() {
  const hero = HOME_SECTIONS.hero;

  return (
    <section className="pt-32 pb-24 px-6 min-h-screen flex items-center bg-gradient-to-b from-parchment via-parchment to-light-gray">
      <div className="max-w-5xl mx-auto text-center">
        {/* Eye-catching intro text */}
        <div className="mb-6 inline-block">
          <p className="text-saffron font-sans text-base font-semibold">
            Sustainable Electronics Ecosystem
          </p>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-sans font-bold text-forest mb-4 leading-tight text-balance">
          {hero.headline}
        </h1>

        {/* Subheadline */}
        <p className="text-3xl md:text-4xl font-sans text-saffron mb-8 leading-tight text-balance">
          {hero.subheadline}
        </p>

        {/* Supporting text */}
        <p className="text-lg text-dark-gray max-w-2xl mx-auto mb-12 leading-relaxed font-sans">
          {hero.supporting_text}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/onboard"
            className="px-8 py-4 bg-forest text-parchment rounded-lg font-sans font-semibold hover:bg-saffron transition-all duration-300 text-lg"
          >
            {hero.cta_text}
          </Link>
          <Link
            href="#network"
            className="px-8 py-4 border-2 border-forest text-forest rounded-lg font-sans font-semibold hover:bg-forest hover:text-parchment transition-all duration-300 text-lg"
          >
            Explore Network
          </Link>
        </div>

        {/* Decorative element */}
        <div className="mt-16 flex justify-center gap-3">
          <div className="w-2 h-2 bg-saffron rounded-full" />
          <div className="w-2 h-2 bg-forest rounded-full" />
          <div className="w-2 h-2 bg-saffron rounded-full" />
        </div>
      </div>
    </section>
  );
}
