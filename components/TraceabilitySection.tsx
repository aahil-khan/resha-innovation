import { HOME_SECTIONS } from '@/lib/constants';
import { EthnicDivider } from './EthnicDivider';

export function TraceabilitySection() {
  const traceability = HOME_SECTIONS.traceability;

  return (
    <section className="py-20 px-6 bg-light-gray">
      <EthnicDivider />

      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-forest mb-6">
              {traceability.title}
            </h2>
            <p className="text-lg text-dark-gray leading-relaxed font-sans mb-8">
              {traceability.description}
            </p>

            {/* Features */}
            <div className="space-y-6">
              <div className="border-l-4 border-saffron pl-4">
                <h3 className="font-sans font-bold text-forest mb-2">QR Code Tracking</h3>
                <p className="text-sm text-dark-gray font-sans">
                  Every device gets a unique QR code for real-time tracking
                </p>
              </div>
              <div className="border-l-4 border-saffron pl-4">
                <h3 className="font-sans font-bold text-forest mb-2">Blockchain Verified</h3>
                <p className="text-sm text-dark-gray font-sans">
                  Immutable records ensure complete transparency and accountability
                </p>
              </div>
              <div className="border-l-4 border-saffron pl-4">
                <h3 className="font-sans font-bold text-forest mb-2">Recovery Reports</h3>
                <p className="text-sm text-dark-gray font-sans">
                  Detailed documentation of all recovered materials and environmental impact
                </p>
              </div>
            </div>
          </div>

          {/* Right: Visual representation */}
          <div className="bg-white rounded-lg p-8 border-2 border-forest">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-forest rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-sans font-bold text-forest">Collection</h4>
                  <p className="text-sm text-dark-gray font-sans">Device assigned to batch</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-saffron rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-sans font-bold text-forest">Processing</h4>
                  <p className="text-sm text-dark-gray font-sans">Materials extracted & logged</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-forest rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-sans font-bold text-forest">Recovery</h4>
                  <p className="text-sm text-dark-gray font-sans">Materials returned to supply chain</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-saffron rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-sans font-bold text-forest">Verification</h4>
                  <p className="text-sm text-dark-gray font-sans">Impact report generated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EthnicDivider />
    </section>
  );
}
