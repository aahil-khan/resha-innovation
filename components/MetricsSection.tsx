import { HOME_SECTIONS, NETWORK_METRICS } from '@/lib/constants';
import { Counter } from './Counter';
import { EthnicDivider } from './EthnicDivider';

export function MetricsSection() {
  const metrics = HOME_SECTIONS.metrics;
  const iconMap: Record<string, string> = {
    Users: '👥',
    Zap: '⚡',
    Leaf: '🌿',
    Package: '📦',
  };

  return (
    <section className="py-20 px-6 bg-parchment">
      <EthnicDivider />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-forest mb-4">
            {metrics.title}
          </h2>
          <p className="text-lg text-dark-gray font-sans">
            {metrics.description}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {NETWORK_METRICS.map((metric, index) => {
            const iconKey = metric.icon as keyof typeof iconMap;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg border border-light-gray hover:shadow-lg transition-shadow hover:border-saffron"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">
                    {iconMap[iconKey] || '📊'}
                  </div>
                  <p className="text-dark-gray font-sans text-sm font-semibold">
                    {metric.label}
                  </p>
                </div>
                <div className="ml-0">
                  <Counter value={metric.value} duration={2500} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Impact statement */}
        <div className="mt-16 bg-gradient-to-r from-forest to-forest/80 text-parchment p-12 rounded-lg text-center">
          <p className="text-lg font-sans leading-relaxed mb-4">
            Each device processed through RESHA prevents environmental degradation and enables the recovery of valuable materials worth thousands of rupees per ton.
          </p>
          <p className="text-sm font-sans opacity-90">
            Our network operates transparently with complete traceability, ensuring fair compensation to all stakeholders.
          </p>
        </div>
      </div>

      <EthnicDivider />
    </section>
  );
}
