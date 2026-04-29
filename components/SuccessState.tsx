import Link from 'next/link';

interface SuccessStateProps {
  institutionName?: string;
}

export function SuccessState({ institutionName }: SuccessStateProps) {
  const requestId = `RQ-2025-0089`;

  return (
    <div className="text-center py-8">
      {/* Check icon */}
      <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(135deg, #1B5E3B, #2a7a4f)', boxShadow: '0 8px 32px rgba(27,94,59,0.3)' }}>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="7,18 14,26 29,10"/>
        </svg>
      </div>

      <h2 className="text-4xl text-forest mb-2" style={{ fontFamily: 'Marcellus, serif' }}>
        Request Received
      </h2>
      <p className="text-dark-gray mb-10">
        Thank you{institutionName ? `, ${institutionName}` : ''}. Our coordinator will be in touch shortly.
      </p>

      {/* Receipt card */}
      <div className="rounded-2xl overflow-hidden text-left max-w-lg mx-auto shadow-lg mb-8" style={{ background: '#F5F0E8', borderLeft: '4px solid #E87722' }}>
        <div className="px-6 py-4 flex items-center gap-3" style={{ background: '#FAF7F2', borderBottom: '1px solid #E8E5E0' }}>
          <div className="w-2 h-2 rounded-full bg-saffron"/>
          <span className="text-saffron font-bold text-sm tracking-widest" style={{ fontFamily: 'Courier New, monospace' }}>
            REQUEST ID: {requestId}
          </span>
        </div>

        <div className="p-6 space-y-3">
          {[
            { label: 'Status', value: 'Under Review' },
            { label: 'Est. Response', value: 'Within 7 business days' },
            { label: 'Assigned To', value: 'Priya Sharma — North India Region' },
          ].map((row, i) => (
            <div key={i} className="flex gap-4 pb-3 border-b border-light-gray last:border-0">
              <span className="text-dark-gray text-xs uppercase tracking-wider w-32 flex-shrink-0 pt-0.5" style={{ fontFamily: 'Courier New, monospace' }}>
                {row.label}:
              </span>
              <span className="text-forest text-sm font-medium">{row.value}</span>
            </div>
          ))}
        </div>

        {/* Projected impact */}
        <div className="px-6 py-5" style={{ background: 'rgba(27,94,59,0.05)', borderTop: '1px solid #E8E5E0' }}>
          <p className="text-forest text-xs font-bold uppercase tracking-wider mb-3">Projected Impact (if onboarded)</p>
          <div className="space-y-2">
            {[
              '~120 kg/month diverted from rivers',
              '1,440 kg/year circular material created',
              'Qualifies for RESHA ESG Partner Certificate',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E87722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span className="text-dark-gray text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-forest text-white rounded-xl font-semibold text-sm hover:bg-forest-dark transition-all duration-300">
          Back to Home
        </Link>
        <Link href="/network" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-forest text-forest rounded-xl font-semibold text-sm hover:bg-forest hover:text-white transition-all duration-300">
          Explore Network
        </Link>
      </div>
    </div>
  );
}
