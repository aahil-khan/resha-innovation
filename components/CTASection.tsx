import Link from 'next/link';
import { HOME_SECTIONS } from '@/lib/constants';

export function CTASection() {
  const cta = HOME_SECTIONS.cta;

  return (
    <section className="py-24 px-6 bg-forest">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-sans font-bold text-parchment mb-6">
          {cta.title}
        </h2>
        <p className="text-lg text-parchment/90 font-sans mb-12 leading-relaxed">
          {cta.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/onboard"
            className="px-8 py-4 bg-saffron text-white rounded-lg font-sans font-semibold hover:bg-saffron/90 transition-all duration-300 text-lg"
          >
            {cta.button_text}
          </Link>
          <Link
            href="/network"
            className="px-8 py-4 border-2 border-parchment text-parchment rounded-lg font-sans font-semibold hover:bg-parchment hover:text-forest transition-all duration-300 text-lg"
          >
            Explore Network
          </Link>
        </div>

        {/* Footer note */}
        <p className="mt-12 text-parchment/70 font-sans text-sm">
          Join over 240 organizations transforming India&apos;s electronics ecosystem
        </p>
      </div>
    </section>
  );
}
