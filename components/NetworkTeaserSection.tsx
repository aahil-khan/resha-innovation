'use client';

import Link from 'next/link';
import { HOME_SECTIONS } from '@/lib/constants';
import { EthnicDivider } from './EthnicDivider';
import { IconMapPin, IconFactory, IconClipboard, IconLeaf } from './Icons';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';

const TEASER_NODES = [
  { id: 'varanasi', lat: 25.32, lng: 82.97, city: 'Varanasi',  type: 'active' },
  { id: 'amritsar', lat: 31.62, lng: 74.88, city: 'Amritsar',  type: 'active' },
  { id: 'tirupati', lat: 13.63, lng: 79.42, city: 'Tirupati',  type: 'active' },
  { id: 'jaipur',   lat: 26.91, lng: 75.79, city: 'Jaipur',    type: 'active' },
  { id: 'kanpur',   lat: 26.45, lng: 80.33, city: 'Kanpur',    type: 'partner' },
  { id: 'surat',    lat: 21.17, lng: 72.83, city: 'Surat',     type: 'partner' },
  { id: 'mumbai',   lat: 19.08, lng: 72.88, city: 'Mumbai',    type: 'onboarding' },
  { id: 'kolkata',  lat: 22.56, lng: 88.36, city: 'Kolkata',   type: 'onboarding' },
];

const STATS = [
  { Icon: IconMapPin,   label: 'Active Pilot Sites',   value: '4',     note: 'Varanasi, Amritsar, Tirupati, Jaipur' },
  { Icon: IconFactory,  label: 'Processing Partners',   value: '2',     note: 'Kanpur & Surat' },
  { Icon: IconClipboard,label: 'Institutions Onboarding', value: '3',  note: 'Mumbai, Kolkata, Pune' },
  { Icon: IconLeaf,     label: 'Total kg Diverted',     value: '12,400+', note: 'From rivers and open burning' },
];

export function NetworkTeaserSection() {
  const network = HOME_SECTIONS.network;

  // Dynamically import map to avoid SSR window errors
  const Map = useMemo(() => dynamic(
    () => import('./DynamicMap'),
    { 
      loading: () => <div className="w-full h-full min-h-[420px] flex items-center justify-center bg-[#F5F0E8] text-forest font-medium">Loading map tiles...</div>,
      ssr: false 
    }
  ), []);

  return (
    <section className="py-20 md:py-28 px-6" style={{ background: '#FAF7F2' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-6 h-px bg-saffron"/>
            <span className="text-saffron text-xs font-semibold uppercase tracking-widest">Live Network</span>
            <div className="w-6 h-px bg-saffron"/>
          </div>
          <h2 className="text-4xl md:text-6xl text-forest mb-4" style={{ fontFamily: 'Marcellus, serif' }}>
            {network.title}
          </h2>
          <p className="text-dark-gray max-w-xl mx-auto leading-relaxed">{network.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* India Map */}
          <div className="rounded-2xl p-2 relative overflow-hidden" style={{ background: '#F5F0E8', border: '1px solid #E8E5E0', height: '440px' }}>
            <Map nodes={TEASER_NODES} zoom={4.2} interactive={false} />

            {/* Legend */}
            <div className="absolute bottom-4 left-4 flex flex-col gap-2 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3 z-[400] shadow-sm border border-light-gray">
              {[
                { color: '#1B5E3B', label: 'Active Pilot' },
                { color: '#F5A623', label: 'Processing Partner' },
                { color: '#E87722', label: 'Onboarding' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full" style={{ background: item.color }}/>
                  <span className="text-xs text-dark-gray font-medium uppercase tracking-wider">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats + CTA */}
          <div className="space-y-4">
            {STATS.map((stat, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl sacred-card transition-all hover:translate-x-1 duration-300">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(27,94,59,0.08)' }}>
                  <stat.Icon size={20} color="#1B5E3B" />
                </div>
                <div>
                  <p className="font-bold text-forest text-sm">{stat.label}</p>
                  <p className="text-saffron font-bold text-lg" style={{ fontFamily: 'Marcellus, serif' }}>{stat.value}</p>
                  <p className="text-dark-gray text-xs mt-0.5">{stat.note}</p>
                </div>
              </div>
            ))}
            <Link href="/network" className="btn-saffron w-full justify-center mt-6">
              {network.cta_text}
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-20"><EthnicDivider /></div>
    </section>
  );
}
