import { HOME_SECTIONS } from '@/lib/constants';
import { EthnicDivider } from './EthnicDivider';
import { ICON_MAP } from './Icons';

export function SolutionSection() {
  const { steps } = HOME_SECTIONS.solution;

  return (
    <section className="py-20 md:py-28 px-6" style={{ background: '#F5F0E8' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-6 h-px bg-saffron"/>
            <span className="text-saffron text-xs font-semibold uppercase tracking-widest">Our Process</span>
            <div className="w-6 h-px bg-saffron"/>
          </div>
          <h2 className="text-4xl md:text-6xl text-forest mb-4" style={{ fontFamily: 'Marcellus, serif' }}>
            The Dignity-First Approach
          </h2>
          <p className="text-dark-gray max-w-xl mx-auto leading-relaxed">
            A sacred, traceable journey from offering to fiber — handled with the reverence each thread deserves.
          </p>
        </div>

        <div className="relative">
          {/* Dashed connector */}
          <div className="hidden md:block absolute top-[28px] left-0 right-0 z-0">
            <div className="h-px" style={{
              backgroundImage: 'repeating-linear-gradient(90deg, #E87722 0, #E87722 12px, transparent 12px, transparent 24px)',
              opacity: 0.4,
            }}/>
          </div>

          <div className="grid md:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, index) => {
              const IconComponent = ICON_MAP[step.icon];
              return (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{ background: 'white', border: '2px solid #E8E5E0', boxShadow: '0 4px 16px rgba(27,94,59,0.1)' }}
                  >
                    {IconComponent && <IconComponent size={22} color="#1B5E3B" />}
                  </div>
                  <div className="w-5 h-5 rounded-full flex items-center justify-center text-white mb-3" style={{ background: '#E87722', fontSize: '10px', fontWeight: 700 }}>
                    {index + 1}
                  </div>
                  <p className="text-forest font-bold text-m mb-2">{step.name}</p>
                  <p className="text-dark-gray text-sm leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 p-8 rounded-2xl text-center" style={{ background: 'rgba(245,166,35,0.06)', borderLeft: '4px solid #F5A623' }}>
          <p className="text-2xl md:text-3xl text-forest italic mb-3" style={{ fontFamily: 'Marcellus, serif' }}>
            "Sacred cloth completes its spiritual journey — not in a river, but in a new life."
          </p>
          <p className="text-dark-gray text-sm">— RESHA Founding Principle</p>
        </div>
      </div>
      <div className="mt-20"><EthnicDivider /></div>
    </section>
  );
}
