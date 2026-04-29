import { HOME_SECTIONS } from '@/lib/constants';
import { EthnicDivider } from './EthnicDivider';

export function ProblemSection() {
  const problem = HOME_SECTIONS.problem;

  return (
    <section className="py-20 px-6 bg-parchment">
      <EthnicDivider />

      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-forest mb-6">
            {problem.title}
          </h2>
          <p className="text-lg text-dark-gray leading-relaxed font-sans">
            {problem.description}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {problem.stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg border border-light-gray hover:shadow-lg transition-shadow"
            >
              <p className="text-4xl font-sans font-bold text-saffron mb-2">
                {stat.number}
              </p>
              <p className="text-dark-gray font-sans">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <EthnicDivider />
    </section>
  );
}
