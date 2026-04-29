import { HOME_SECTIONS } from '@/lib/constants';
import { EthnicDivider } from './EthnicDivider';
import { ICON_MAP } from './Icons';
import { FadeIn } from './FadeIn';

export function ProblemSection() {
  const problem = HOME_SECTIONS.problem;

  return (
    <section className="relative py-0" style={{ background: '#1B5E3B' }}>
      <div className="px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-6 h-px bg-saffron"/>
                <span className="text-saffron text-xs font-semibold uppercase tracking-widest">The Challenge</span>
                <div className="w-6 h-px bg-saffron"/>
              </div>
              <h2 className="text-4xl md:text-6xl text-white mb-6" style={{ fontFamily: 'Marcellus, serif' }}>
                {problem.title}
              </h2>
            </div>
          </FadeIn>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {problem.stats.map((stat, index) => (
              <FadeIn key={index} direction="up" delay={100 * index}>
                <div className="border h-full border-white/10 rounded-xl p-8 text-center hover:border-saffron/40 transition-all duration-300 hover:bg-white/5">
                  <p className="text-5xl md:text-6xl mb-3" style={{
                    fontFamily: 'Marcellus, serif',
                    background: 'linear-gradient(135deg, #E87722, #F5A623)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}>{stat.number}</p>
                  <p className="text-white/70 text-sm leading-relaxed">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Two-column */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <FadeIn direction="right" delay={200}>
              <div>
                <p className="text-white/80 text-lg leading-relaxed mb-6">{problem.description}</p>
                <p className="text-white/60 text-sm leading-relaxed">
                  Unlike ordinary waste, sacred textiles carry spiritual significance. They have been offered to deities, soaked in rituals, dyed with sacred flowers. Disposing them carelessly is not merely an environmental failure — it is a spiritual wound for millions of devotees.
                </p>
              </div>
            </FadeIn>
            <div className="space-y-4">
              {problem.cards.map((card, index) => {
                const IconComponent = ICON_MAP[card.icon];
                return (
                  <FadeIn key={index} direction="left" delay={200 + index * 100}>
                    <div className="flex gap-4 p-5 rounded-xl border border-white/10 hover:border-saffron/30 hover:bg-white/5 transition-all duration-300">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(232,119,34,0.15)' }}>
                        {IconComponent && <IconComponent size={18} color="#E87722" />}
                      </div>
                      <div>
                        <p className="text-white font mb-2">{card.title}</p>
                        <p className="text-white/60 text-sm leading-relaxed">{card.description}</p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: '#1B5E3B' }}>
        <EthnicDivider color="#F5A623" />
      </div>
    </section>
  );
}
