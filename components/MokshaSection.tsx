import { HOME_SECTIONS } from '@/lib/constants';
import { EthnicDivider } from './EthnicDivider';

export function MokshaSection() {
  const moksha = HOME_SECTIONS.moksha;

  return (
    <section className="relative overflow-hidden" style={{ background: '#F5F0E8' }}>
      <div className="grid md:grid-cols-2 min-h-[580px]">
        {/* Left — dark maroon */}
        <div
          className="relative flex flex-col justify-center px-10 md:px-16 py-20"
          style={{ background: '#7B1C1C' }}
        >
          {/* Decorative background rings */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
            <svg className="absolute -top-32 -left-32" width="500" height="500" viewBox="0 0 500 500" fill="none">
              <circle cx="250" cy="250" r="200" stroke="white" strokeWidth="1"/>
              <circle cx="250" cy="250" r="150" stroke="white" strokeWidth="0.5"/>
              <circle cx="250" cy="250" r="100" stroke="white" strokeWidth="0.5"/>
            </svg>
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-6 h-px bg-saffron"/>
              <span className="text-saffron text-xs font-semibold uppercase tracking-widest">Proprietary Technology</span>
            </div>

            <h2
              className="text-4xl md:text-5xl text-white mb-3"
              style={{ fontFamily: 'Marcellus, serif' }}
            >
              {moksha.title}
            </h2>
            <p
              className="text-xl mb-6 italic"
              style={{
                fontFamily: 'Marcellus, serif',
                background: 'linear-gradient(135deg, #E87722, #F5A623)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {moksha.subtitle}
            </p>
            <p className="text-white/75 leading-relaxed text-base mb-8">
              {moksha.description}
            </p>

            {/* Specs grid */}
            <div className="grid grid-cols-2 gap-3">
              {moksha.specs.map((spec, i) => (
                <div
                  key={i}
                  className="rounded-lg p-3 border border-white/10"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                >
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-1">{spec.label}</p>
                  <p className="text-white font-semibold text-sm">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — parchment with shredder illustration */}
        <div
          className="relative flex flex-col justify-center items-center px-10 md:px-16 py-20"
          style={{ background: '#F5F0E8' }}
        >
          {/* Shredder SVG illustration */}
          <div className="relative animate-float w-full max-w-[650px]">
            <svg className="w-full h-auto" viewBox="0 0 300 280" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Machine body */}
              <rect x="60" y="40" width="180" height="160" rx="12" fill="#1B5E3B" opacity="0.08" stroke="#1B5E3B" strokeWidth="2"/>
              <rect x="75" y="55" width="150" height="130" rx="8" fill="white" stroke="#E8E5E0" strokeWidth="1.5"/>

              {/* Feed slot at top */}
              <rect x="95" y="62" width="110" height="18" rx="3" fill="#7B1C1C" opacity="0.15" stroke="#7B1C1C" strokeWidth="1.5"/>
              <text x="150" y="75" textAnchor="middle" fontSize="8" fill="#7B1C1C" fontFamily="Outfit,sans-serif" fontWeight="600">SACRED CLOTH INPUT</text>

              {/* Rollers */}
              {[96, 112, 128].map((y, i) => (
                <g key={i}>
                  <rect x="90" y={y} width="120" height="10" rx="5" fill="#1B5E3B" opacity={0.15 + i * 0.05}/>
                  {[0,1,2,3,4,5].map((j) => (
                    <line key={j} x1={92 + j * 20} y1={y + 2} x2={92 + j * 20} y2={y + 8} stroke="#1B5E3B" strokeWidth="1" opacity="0.4"/>
                  ))}
                </g>
              ))}

              {/* Shredder blades */}
              <rect x="90" y="148" width="120" height="24" rx="3" fill="#E87722" opacity="0.12" stroke="#E87722" strokeWidth="1.5"/>
              {[0,1,2,3,4,5,6,7,8].map((j) => (
                <line key={j} x1={93 + j * 13} y1="152" x2={93 + j * 13} y2="168" stroke="#E87722" strokeWidth="1.5" opacity="0.5"/>
              ))}

              {/* Output fibers */}
              {[-20,-10,0,10,20].map((offset, i) => (
                <path
                  key={i}
                  d={`M${148 + offset} 185 Q${150 + offset + 8} 205 ${148 + offset + offset/3} 225`}
                  stroke="#1B5E3B"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  opacity={0.5 + i * 0.08}
                />
              ))}

              {/* Collection bin */}
              <path d="M100 220 L110 260 L190 260 L200 220 Z" fill="#1B5E3B" opacity="0.1" stroke="#1B5E3B" strokeWidth="1.5"/>
              <text x="150" y="248" textAnchor="middle" fontSize="8" fill="#1B5E3B" fontFamily="Outfit,sans-serif" fontWeight="600">FIBER OUTPUT</text>

              {/* Control panel */}
              <rect x="200" y="100" width="28" height="50" rx="4" fill="#1B5E3B" opacity="0.08" stroke="#1B5E3B" strokeWidth="1.5"/>
              <circle cx="214" cy="112" r="5" fill="#1B5E3B" opacity="0.6"/>
              <circle cx="214" cy="126" r="3" fill="#E87722" opacity="0.8"/>
              <rect x="207" y="135" width="14" height="8" rx="2" fill="#E87722" opacity="0.4"/>

              {/* RESHA label */}
              <rect x="90" y="78" width="120" height="14" rx="3" fill="#1B5E3B" opacity="0.06"/>
              <text x="150" y="88" textAnchor="middle" fontSize="8" fill="#1B5E3B" fontFamily="Marcellus,serif" fontWeight="400" opacity="0.7">Moksha Shredder™ MS-007</text>

              {/* Certified badge */}
              <circle cx="245" cy="60" r="18" fill="#1B5E3B" opacity="0.9"/>
              <text x="245" y="56" textAnchor="middle" fontSize="6" fill="white" fontFamily="Outfit,sans-serif" fontWeight="700">DIGNITY</text>
              <text x="245" y="65" textAnchor="middle" fontSize="6" fill="#F5A623" fontFamily="Outfit,sans-serif" fontWeight="700">CERTIFIED</text>
            </svg>
          </div>

          <p className="text-dark-gray text-sm text-center mt-4 max-w-xs leading-relaxed">
            Installed on-premise within consecrated temple grounds.
            Sacred cloth never leaves as intact fabric.
          </p>
        </div>
      </div>

      <div style={{ background: '#F5F0E8' }}>
        <EthnicDivider />
      </div>
    </section>
  );
}
