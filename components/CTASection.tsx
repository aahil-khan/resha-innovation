import Link from "next/link";
import { HOME_SECTIONS } from "@/lib/constants";
import { FadeIn } from "./FadeIn";

export function CTASection() {
  const cta = HOME_SECTIONS.cta;

  return (
    <section
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: "#E87722" }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Ccircle cx='30' cy='30' r='25' fill='none' stroke='white' stroke-width='0.5'/%3E%3Ccircle cx='30' cy='30' r='15' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center z-10">
        <FadeIn direction="up">
          <div className="flex justify-center mb-8">
            <img src="/resha-logo.svg" alt="RESHA Logo" className="h-16 w-auto brightness-0 invert opacity-90" />
          </div>

          <h2
            className="text-4xl md:text-6xl text-white mb-6 leading-tight"
            style={{ fontFamily: "Marcellus, serif" }}
          >
            {cta.title}
          </h2>
          <p className="text-white/85 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            {cta.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/onboard"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-forest text-white rounded-xl font-bold text-lg hover:bg-forest-dark transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {cta.button_text}
            </Link>
            <Link
              href="/network"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-white/60 text-white rounded-xl font-semibold text-base hover:bg-white/10 transition-all duration-300"
            >
              {cta.secondary_link}
            </Link>
          </div>
          <p className="text-white/60 text-sm">
            Site assessment & pilot proposal delivered within 7 business days
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
