import Link from 'next/link';
import { HOME_SECTIONS, NETWORK_NODES } from '@/lib/constants';
import { EthnicDivider } from './EthnicDivider';

export function NetworkTeaserSection() {
  const network = HOME_SECTIONS.network;

  return (
    <section id="network" className="py-20 px-6 bg-light-gray">
      <EthnicDivider />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-forest mb-6">
            {network.title}
          </h2>
          <p className="text-lg text-dark-gray font-sans max-w-2xl mx-auto">
            {network.description}
          </p>
        </div>

        {/* Network nodes preview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {NETWORK_NODES.slice(0, 3).map((node) => (
            <div
              key={node.id}
              className="bg-white p-6 rounded-lg border border-light-gray hover:border-saffron hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-saffron rounded-full" />
                <h3 className="font-sans font-bold text-forest">{node.city}</h3>
              </div>
              <p className="text-sm text-dark-gray font-sans mb-4">{node.name}</p>
              <div className="space-y-2 border-t border-light-gray pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-dark-gray font-sans">Members:</span>
                  <span className="font-bold text-forest">{node.members}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-dark-gray font-sans">Processed:</span>
                  <span className="font-bold text-saffron">{node.devices_processed}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to network page */}
        <div className="text-center">
          <Link
            href="/network"
            className="inline-block px-8 py-4 bg-forest text-parchment rounded-lg font-sans font-semibold hover:bg-saffron transition-all duration-300 text-lg"
          >
            {network.cta_text}
          </Link>
        </div>
      </div>

      <EthnicDivider />
    </section>
  );
}
