import { HOME_SECTIONS } from '@/lib/constants';
import { EthnicDivider } from './EthnicDivider';
import { FadeIn } from './FadeIn';

export function TraceabilitySection() {
  const { traceability } = HOME_SECTIONS;
  const batch = traceability.featured_batch;

  const miniBatches = [
    { id: 'RSH-2025-AMR-0026', kg: '28.7', source: 'Amritsar', status: 'Processing' },
    { id: 'RSH-2025-TPT-0013', kg: '51.3', source: 'Tirupati', status: 'Certified' },
    { id: 'RSH-2025-JPR-0005', kg: '19.8', source: 'Jaipur', status: 'In Transit' },
  ];

  return (
    <section className="py-20 md:py-28 px-6" style={{ background: '#1B5E3B' }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-saffron"/>
              <span className="text-saffron text-xs font-semibold uppercase tracking-widest">Chain of Custody</span>
              <div className="w-6 h-px bg-saffron"/>
            </div>
            <h2
              className="text-4xl md:text-6xl text-white mb-4"
              style={{ fontFamily: 'Marcellus, serif' }}
            >
              {traceability.title}
            </h2>
            <p className="text-white/70 max-w-xl mx-auto leading-relaxed">
              {traceability.description}
            </p>
          </div>
        </FadeIn>

        {/* Featured batch card */}
        <FadeIn direction="up" delay={200}>
          <div
            className="rounded-2xl overflow-hidden mb-6 shadow-2xl"
            style={{ background: '#F5F0E8', borderLeft: '5px solid #1B5E3B', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
          >
            {/* Card header */}
            <div
              className="px-6 py-4 flex items-center justify-between"
              style={{ background: '#FAF7F2', borderBottom: '1px solid #E8E5E0' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-forest"/>
                <span
                  className="text-forest font-bold tracking-widest text-sm"
                  style={{ fontFamily: 'Courier New, monospace' }}
                >
                  BATCH ID: {batch.id}
                </span>
              </div>
              <div className="verified-badge flex items-center gap-1">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                Verified by RESHA Network
              </div>
            </div>

            {/* Card body */}
            <div className="p-6 grid md:grid-cols-2 gap-4">
              {[
                { label: 'Source', value: batch.source },
                { label: 'Collection Date', value: batch.collection_date },
                { label: 'Shredder Unit', value: batch.shredder },
                { label: 'Processing Partner', value: batch.partner },
                { label: 'Material Output', value: batch.output },
                { label: 'Final Destination', value: batch.destination },
              ].map((row, i) => (
                <div key={i} className="flex gap-3">
                  <span
                    className="text-dark-gray text-xs uppercase tracking-wider w-36 flex-shrink-0 pt-0.5"
                    style={{ fontFamily: 'Courier New, monospace' }}
                  >
                    {row.label}:
                  </span>
                  <span className="text-forest text-sm font-medium">{row.value}</span>
                </div>
              ))}
            </div>

            {/* Status bar */}
            <div
              className="px-6 py-3 flex items-center gap-3"
              style={{ background: 'rgba(27,94,59,0.06)', borderTop: '1px solid #E8E5E0' }}
            >
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-6 h-6 rounded-full" style={{ background: 'rgba(27,94,59,0.15)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1B5E3B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <span className="text-forest font-bold text-sm">Status: {batch.status}</span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Mini batch cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {miniBatches.map((mb, i) => (
            <FadeIn key={i} direction="up" delay={400 + i * 100}>
              <div
                className="rounded-xl p-4 border border-white/10 hover:border-saffron/40 transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.06)' }}
              >
                <p
                  className="text-white/50 text-xs mb-2 tracking-widest"
                  style={{ fontFamily: 'Courier New, monospace' }}
                >
                  {mb.id}
                </p>
                <p className="text-white font-semibold text-sm mb-1">{mb.source}</p>
                <div className="flex items-center justify-between">
                  <span className="text-saffron text-sm font-bold">{mb.kg} kg</span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background: mb.status === 'Certified' ? 'rgba(27,94,59,0.3)' : 'rgba(232,119,34,0.2)',
                      color: mb.status === 'Certified' ? '#7ae3a8' : '#f0944a',
                    }}
                  >
                    {mb.status}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '60px' }}>
        <EthnicDivider color="#F5A623" />
      </div>
    </section>
  );
}
