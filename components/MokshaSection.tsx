import { HOME_SECTIONS } from '@/lib/constants';
import { EthnicDivider } from './EthnicDivider';

export function MokshaSection() {
  const moksha = HOME_SECTIONS.moksha;

  return (
    <section className="py-20 px-6 bg-parchment">
      <EthnicDivider />

      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image/Illustration placeholder */}
          <div className="flex items-center justify-center bg-light-gray rounded-lg p-12 h-96 border-2 border-forest">
            <div className="text-center">
              <div className="text-6xl mb-4">⚙️</div>
              <p className="text-forest font-sans font-bold text-2xl">MOKSHA</p>
              <p className="text-dark-gray font-sans text-sm mt-2">
                Advanced Shredding Technology
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-forest mb-6">
              {moksha.title}
            </h2>
            <p className="text-lg text-dark-gray leading-relaxed font-sans mb-8">
              {moksha.description}
            </p>

            {/* Benefits list */}
            <div className="space-y-4">
              {moksha.benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-saffron rounded-full flex items-center justify-center text-white text-sm font-bold">
                      ✓
                    </div>
                  </div>
                  <p className="text-dark-gray font-sans">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <EthnicDivider />
    </section>
  );
}
