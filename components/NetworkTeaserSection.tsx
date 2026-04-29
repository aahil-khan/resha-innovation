import Link from 'next/link';
import { HOME_SECTIONS } from '@/lib/constants';
import { EthnicDivider } from './EthnicDivider';
import { IconMapPin, IconFactory, IconClipboard, IconLeaf } from './Icons';

// Same equirectangular projection as NetworkMap
function lngToX(lng: number) { return ((lng - 66.0) / 32.0) * 480 + 20; }
function latToY(lat: number) { return ((38.0 - lat) / 32.0) * 520 + 20; }

const INDIA_PATH_POINTS = [
  [68.5, 23.5], [69.0, 22.8], [69.5, 22.3],
  [70.2, 21.0], [69.8, 22.0], [70.8, 22.5], [71.2, 21.5],
  [72.0, 20.5], [72.5, 20.0], [72.8, 19.0],
  [73.2, 17.5], [73.8, 16.0], [73.8, 15.5],
  [74.8, 12.5], [75.5, 10.5], [77.5, 8.1],
  [79.5, 9.5], [80.0, 11.0], [80.2, 13.5],
  [80.5, 15.0], [80.8, 17.0], [82.0, 18.5],
  [85.0, 19.5], [87.0, 20.0],
  [88.5, 21.5], [89.0, 22.0], [91.0, 22.5],
  [92.5, 22.0], [93.5, 24.0], [94.0, 24.5],
  [97.0, 28.0], [96.5, 28.5],
  [95.0, 27.5], [93.0, 27.0], [92.0, 27.0],
  [89.0, 27.5], [88.0, 27.0],
  [84.0, 27.5], [80.0, 30.5],
  [79.0, 31.0], [77.5, 31.5], [76.0, 32.5], [74.8, 32.7],
  [74.0, 33.5], [73.5, 34.0], [72.5, 34.5],
  [71.5, 33.0], [70.5, 32.5], [70.0, 31.0],
  [69.5, 28.0], [69.0, 27.0], [68.5, 24.5], [68.5, 23.5],
];
const INDIA_D = 'M ' + INDIA_PATH_POINTS.map(([lng, lat]) => `${lngToX(lng).toFixed(1)},${latToY(lat).toFixed(1)}`).join(' L ') + ' Z';

const TEASER_NODES = [
  { lat: 25.32, lng: 82.97, city: 'Varanasi',  type: 'active' },
  { lat: 31.62, lng: 74.88, city: 'Amritsar',  type: 'active' },
  { lat: 13.63, lng: 79.42, city: 'Tirupati',  type: 'active' },
  { lat: 26.91, lng: 75.79, city: 'Jaipur',    type: 'active' },
  { lat: 26.45, lng: 80.33, city: 'Kanpur',    type: 'partner' },
  { lat: 21.17, lng: 72.83, city: 'Surat',     type: 'partner' },
  { lat: 19.08, lng: 72.88, city: 'Mumbai',    type: 'onboarding' },
  { lat: 22.56, lng: 88.36, city: 'Kolkata',   type: 'onboarding' },
];

const COLORS = {
  active: '#1B5E3B',
  partner: '#F5A623',
  onboarding: '#E87722',
};

const STATS = [
  { Icon: IconMapPin,   label: 'Active Pilot Sites',   value: '4',     note: 'Varanasi, Amritsar, Tirupati, Jaipur' },
  { Icon: IconFactory,  label: 'Processing Partners',   value: '2',     note: 'Kanpur & Surat' },
  { Icon: IconClipboard,label: 'Institutions Onboarding', value: '3',  note: 'Mumbai, Kolkata, Pune' },
  { Icon: IconLeaf,     label: 'Total kg Diverted',     value: '12,400+', note: 'From rivers and open burning' },
];

export function NetworkTeaserSection() {
  const network = HOME_SECTIONS.network;

  return (
    <section className="py-20 md:py-28 px-6" style={{ background: '#FAF7F2' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-6 h-px bg-saffron"/>
            <span className="text-saffron text-xs font-semibold uppercase tracking-widest">Live Network</span>
            <div className="w-6 h-px bg-saffron"/>
          </div>
          <h2 className="text-4xl md:text-6xl text-forest mb-4" style={{ fontFamily: 'DM Serif Display, serif' }}>
            {network.title}
          </h2>
          <p className="text-dark-gray max-w-xl mx-auto leading-relaxed">{network.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* India Map */}
          <div className="rounded-2xl p-4 relative overflow-hidden" style={{ background: '#F5F0E8', border: '1px solid #E8E5E0' }}>
            <svg viewBox="0 0 520 560" className="w-full" style={{ maxHeight: '420px' }}>
              <path d={INDIA_D} fill="#E8F5EE" stroke="#1B5E3B" strokeWidth="1.5" opacity="0.85"/>

              {TEASER_NODES.map((node, i) => {
                const cx = lngToX(node.lng);
                const cy = latToY(node.lat);
                const color = COLORS[node.type as keyof typeof COLORS];
                return (
                  <g key={i}>
                    {node.type === 'active' && (
                      <circle cx={cx} cy={cy} r="14" fill={color} opacity="0.1"
                        style={{ animation: `pulse-dot 2.5s ease-in-out infinite`, animationDelay: `${i * 300}ms` }}/>
                    )}
                    <circle cx={cx} cy={cy} r="5.5" fill={color} stroke="white" strokeWidth="1.5"/>
                    <text x={cx + 9} y={cy + 4} fontSize="9" fill="#1B5E3B"
                      fontFamily="Outfit, sans-serif" fontWeight="600" opacity="0.75">
                      {node.city}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Legend */}
            <div className="absolute bottom-5 left-5 flex flex-col gap-1.5 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2">
              {[
                { color: '#1B5E3B', label: 'Active Pilot' },
                { color: '#F5A623', label: 'Processing Partner' },
                { color: '#E87722', label: 'Onboarding' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: item.color }}/>
                  <span className="text-xs text-dark-gray">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats + CTA */}
          <div className="space-y-4">
            {STATS.map((stat, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl sacred-card">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(27,94,59,0.08)' }}>
                  <stat.Icon size={20} color="#1B5E3B" />
                </div>
                <div>
                  <p className="font-bold text-forest text-sm">{stat.label}</p>
                  <p className="text-saffron font-bold text-lg" style={{ fontFamily: 'DM Serif Display, serif' }}>{stat.value}</p>
                  <p className="text-dark-gray text-xs mt-0.5">{stat.note}</p>
                </div>
              </div>
            ))}
            <Link href="/network" className="btn-saffron w-full justify-center">
              {network.cta_text}
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-20"><EthnicDivider /></div>
    </section>
  );
}
