import { HOME_SECTIONS } from '@/lib/constants';
import { EthnicDivider } from './EthnicDivider';

export function SolutionSection() {
  const { steps } = HOME_SECTIONS.solution;

  return (
    <section className="py-20 md:py-28 px-6" style={{ background: '#F5F0E8' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-6 h-px bg-saffron"/>
            <span className="text-saffron text-xs font-semibold uppercase tracking-widest">Our Process</span>
            <div className="w-6 h-px bg-saffron"/>
          </div>
          <h2
            className="text-4xl md:text-6xl text-forest mb-4"
            style={{ fontFamily: 'DM Serif Display, serif' }}
          >
            The Dignity-First Approach
          </h2>
          <p className="text-dark-gray max-w-xl mx-auto leading-relaxed">
            A sacred, traceable journey from offering to fiber — handled with the reverence each thread deserves.
          </p>
        </div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Connecting dashed line (desktop) */}
          <div className="hidden md:block absolute top-16 left-0 right-0 z-0">
            <div
              className="h-px"
              style={{
                backgroundImage: 'repeating-linear-gradient(90deg, #E87722 0, #E87722 12px, transparent 12px, transparent 24px)',
                opacity: 0.4,
              }}
            />
          </div>

          <div className="grid md:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                {/* Icon circle */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-4 transition-all duration-300 group-hover:scale-110 shadow-md"
                  style={{ background: 'white', border: '2px solid #E8E5E0', boxShadow: '0 4px 16px rgba(27,94,59,0.1)' }}
                >
                  {step.icon}
                </div>

                {/* Step number badge */}
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white mb-3"
                  style={{ background: '#E87722', fontSize: '10px' }}
                >
                  {index + 1}
                </div>

                {/* Content */}
                <h3
                  className="text-forest font-bold text-sm mb-2"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {step.name}
                </h3>
                <p className="text-dark-gray text-xs leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div
          className="mt-16 p-8 rounded-2xl text-center border-l-4 border-gold"
          style={{ background: 'rgba(245,166,35,0.06)', borderLeft: '4px solid #F5A623' }}
        >
          <p
            className="text-2xl md:text-3xl text-forest italic mb-3"
            style={{ fontFamily: 'DM Serif Display, serif' }}
          >
            "Sacred cloth completes its spiritual journey — not in a river, but in a new life."
          </p>
          <p className="text-dark-gray text-sm">— RESHA Founding Principle</p>
        </div>
      </div>

      <div className="mt-20">
        <EthnicDivider />
      </div>
    </section>
  );
}
