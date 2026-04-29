import { HOME_SECTIONS } from '@/lib/constants';
import { EthnicDivider } from './EthnicDivider';

export function SolutionSection() {
  const solution = HOME_SECTIONS.solution;
  const pipeline = HOME_SECTIONS.pipeline;

  return (
    <section className="py-20 px-6 bg-light-gray">
      <EthnicDivider />

      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-forest mb-6">
            {solution.title}
          </h2>
          <p className="text-lg text-dark-gray leading-relaxed font-sans">
            {solution.description}
          </p>
        </div>

        {/* Pipeline */}
        <div className="mt-16">
          <h3 className="text-3xl font-sans font-bold text-forest mb-12 text-center">
            {pipeline.title}
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            {pipeline.steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Card */}
                <div className="bg-white p-6 rounded-lg border-2 border-forest h-full">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h4 className="text-xl font-sans font-bold text-forest mb-2">
                    {step.name}
                  </h4>
                  <p className="text-sm text-dark-gray font-sans">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector (hide on last item) */}
                {index < pipeline.steps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                    <svg
                      className="w-8 h-8 text-forest"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M13 5l7 7m0 0l-7 7m7-7H6"
                      />
                    </svg>
                  </div>
                )}

                {/* Mobile arrow */}
                {index < pipeline.steps.length - 1 && (
                  <div className="md:hidden text-center mt-2">
                    <svg
                      className="w-6 h-6 text-forest mx-auto rotate-90"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M13 5l7 7m0 0l-7 7m7-7H6"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <EthnicDivider />
    </section>
  );
}
