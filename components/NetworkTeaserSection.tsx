import Link from 'next/link';
import { HOME_SECTIONS } from '@/lib/constants';
import { EthnicDivider } from './EthnicDivider';

// India map with pulse dots for active cities
const CITY_DOTS = [
  { name: 'Varanasi', x: 295, y: 185, type: 'active' },
  { name: 'Amritsar', x: 200, y: 125, type: 'active' },
  { name: 'Tirupati', x: 265, y: 370, type: 'active' },
  { name: 'Jaipur', x: 220, y: 200, type: 'active' },
  { name: 'Kanpur', x: 280, y: 195, type: 'partner' },
  { name: 'Surat', x: 195, y: 270, type: 'partner' },
  { name: 'Mumbai', x: 185, y: 305, type: 'onboarding' },
  { name: 'Kolkata', x: 345, y: 235, type: 'onboarding' },
];

const DOT_COLORS = {
  active: { fill: '#1B5E3B', ring: 'rgba(27,94,59,0.3)' },
  partner: { fill: '#F5A623', ring: 'rgba(245,166,35,0.3)' },
  onboarding: { fill: '#E87722', ring: 'rgba(232,119,34,0.3)' },
};

export function NetworkTeaserSection() {
  const network = HOME_SECTIONS.network;

  return (
    <section className="py-20 md:py-28 px-6" style={{ background: '#FAF7F2' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-6 h-px bg-saffron"/>
            <span className="text-saffron text-xs font-semibold uppercase tracking-widest">Live Network</span>
            <div className="w-6 h-px bg-saffron"/>
          </div>
          <h2
            className="text-4xl md:text-6xl text-forest mb-4"
            style={{ fontFamily: 'DM Serif Display, serif' }}
          >
            {network.title}
          </h2>
          <p className="text-dark-gray max-w-xl mx-auto leading-relaxed">{network.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* India Map SVG */}
          <div
            className="rounded-2xl p-6 relative overflow-hidden"
            style={{ background: '#F5F0E8', border: '1px solid #E8E5E0', minHeight: '420px' }}
          >
            <svg
              viewBox="0 0 520 520"
              className="w-full h-full"
              style={{ maxHeight: '400px' }}
            >
              {/* India outline — simplified path */}
              <path
                d="M195 80 L205 70 L225 72 L245 68 L260 75 L270 70 L285 78 L295 72 L310 80 L325 85 L335 95 L340 108 L355 115 L365 128 L360 140 L370 155 L375 168 L365 180 L370 195 L360 208 L355 225 L360 238 L352 250 L358 265 L348 278 L340 292 L328 305 L318 320 L305 335 L295 350 L285 365 L275 378 L268 390 L260 405 L255 415 L250 420 L245 415 L240 400 L238 388 L235 378 L228 368 L218 355 L208 345 L198 335 L190 320 L185 308 L180 295 L175 282 L170 268 L168 255 L172 242 L168 228 L165 215 L160 202 L162 188 L168 175 L162 162 L158 148 L165 135 L168 122 L175 110 L183 98 L195 80Z"
                fill="none"
                stroke="#1B5E3B"
                strokeWidth="2"
                opacity="0.4"
              />
              {/* Fill */}
              <path
                d="M195 80 L205 70 L225 72 L245 68 L260 75 L270 70 L285 78 L295 72 L310 80 L325 85 L335 95 L340 108 L355 115 L365 128 L360 140 L370 155 L375 168 L365 180 L370 195 L360 208 L355 225 L360 238 L352 250 L358 265 L348 278 L340 292 L328 305 L318 320 L305 335 L295 350 L285 365 L275 378 L268 390 L260 405 L255 415 L250 420 L245 415 L240 400 L238 388 L235 378 L228 368 L218 355 L208 345 L198 335 L190 320 L185 308 L180 295 L175 282 L170 268 L168 255 L172 242 L168 228 L165 215 L160 202 L162 188 L168 175 L162 162 L158 148 L165 135 L168 122 L175 110 L183 98 L195 80Z"
                fill="#1B5E3B"
                opacity="0.04"
              />

              {/* City dots with pulse animation */}
              {CITY_DOTS.map((dot, i) => {
                const colors = DOT_COLORS[dot.type as keyof typeof DOT_COLORS];
                return (
                  <g key={i}>
                    {/* Pulse ring */}
                    <circle
                      cx={dot.x}
                      cy={dot.y}
                      r="14"
                      fill={colors.ring}
                      style={{
                        animation: 'pulse-dot 2.5s ease-in-out infinite',
                        animationDelay: `${i * 300}ms`,
                      }}
                    />
                    {/* Dot */}
                    <circle cx={dot.x} cy={dot.y} r="6" fill={colors.fill} />
                    {/* Label */}
                    <text
                      x={dot.x + 10}
                      y={dot.y + 4}
                      fontSize="9"
                      fill="#4A4A4A"
                      fontFamily="Outfit, sans-serif"
                      fontWeight="600"
                    >
                      {dot.name}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 flex flex-col gap-2">
              {[
                { type: 'active', label: 'Active Pilot', color: '#1B5E3B' },
                { type: 'partner', label: 'Processing Partner', color: '#F5A623' },
                { type: 'onboarding', label: 'Onboarding', color: '#E87722' },
              ].map((item) => (
                <div key={item.type} className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: item.color }}/>
                  <span className="text-xs text-dark-gray">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats + CTA */}
          <div className="space-y-6">
            {[
              { label: 'Active Pilot Sites', value: '4', note: 'Varanasi, Amritsar, Tirupati, Jaipur' },
              { label: 'Processing Partners', value: '2', note: 'Kanpur & Surat' },
              { label: 'Institutions Onboarding', value: '3', note: 'Mumbai, Kolkata, Pune' },
              { label: 'Total kg Diverted', value: '12,400+', note: 'From rivers and open burning' },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-xl sacred-card"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(27,94,59,0.08)' }}
                >
                  <span
                    className="text-xl font-bold text-forest"
                    style={{ fontFamily: 'DM Serif Display, serif' }}
                  >
                    {stat.value}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-forest text-sm">{stat.label}</p>
                  <p className="text-dark-gray text-xs mt-0.5">{stat.note}</p>
                </div>
              </div>
            ))}

            <Link
              href="/network"
              className="btn-saffron w-full justify-center"
            >
              {network.cta_text}
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <EthnicDivider />
      </div>
    </section>
  );
}
