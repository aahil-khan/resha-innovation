'use client';

import { NETWORK_NODES } from '@/lib/constants';

type NetworkNode = typeof NETWORK_NODES[number];

interface NodeDetailProps {
  nodeId?: string;
}

const TYPE_LABELS = {
  active: { label: 'Active Pilot', className: 'badge-active' },
  partner: { label: 'Processing Partner', className: 'badge-partner' },
  onboarding: { label: 'Onboarding', className: 'badge-onboarding' },
};

export function NodeDetail({ nodeId }: NodeDetailProps) {
  const node: NetworkNode | undefined = nodeId ? NETWORK_NODES.find((n) => n.id === nodeId) : undefined;

  if (!node) {
    return (
      <div
        className="rounded-2xl border border-dashed border-light-gray p-8 h-full flex flex-col items-center justify-center text-center min-h-[300px]"
        style={{ background: '#FAF7F2' }}
      >
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 opacity-30" style={{ background: 'rgba(27,94,59,0.1)' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1B5E3B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
              <line x1="9" x2="9" y1="3" y2="18"/>
              <line x1="15" x2="15" y1="6" y2="21"/>
            </svg>
          </div>
        <p className="text-forest font-semibold mb-2" style={{ fontFamily: 'Marcellus, serif' }}>
          Select a site
        </p>
        <p className="text-dark-gray text-sm">Click on a node on the map to see institution details.</p>
      </div>
    );
  }

  const typeInfo = TYPE_LABELS[node.type as keyof typeof TYPE_LABELS];

  return (
    <div
      className="rounded-2xl overflow-hidden shadow-lg"
      style={{ background: '#F5F0E8', borderLeft: '4px solid #1B5E3B' }}
    >
      {/* Header */}
      <div className="px-6 py-5" style={{ background: '#1B5E3B' }}>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Institution</p>
            <h3
              className="text-white text-lg leading-snug"
              style={{ fontFamily: 'Marcellus, serif' }}
            >
              {node.name}
            </h3>
          </div>
          <span className={typeInfo?.className || 'badge-active'}>
            {typeInfo?.label || node.type}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 space-y-3">
        {[
          { label: 'City', value: `${node.city}, ${node.state}` },
          { label: 'Type', value: node.institution_type },
          { label: 'Status', value: node.status },
          node.installed && { label: 'Installed', value: node.installed },
          node.shredder && { label: 'Shredder', value: `${node.shredder} | Capacity: ${node.capacity}` },
          node.waste_diverted > 0 && { label: 'Waste Diverted', value: `${node.waste_diverted.toLocaleString('en-IN')} kg total` },
          node.last_pickup && { label: 'Last Pickup', value: node.last_pickup },
          node.partner && { label: 'Assigned Partner', value: node.partner },
          node.batches && { label: 'Traceability', value: node.batches },
        ].filter(Boolean).map((row: any, i) => (
          <div key={i} className="flex gap-3 pb-3 border-b border-light-gray last:border-0">
            <span className="text-dark-gray text-xs uppercase tracking-wider w-28 flex-shrink-0 pt-0.5" style={{ fontFamily: 'Courier New, monospace' }}>
              {row.label}:
            </span>
            <span className="text-forest text-sm font-medium leading-tight">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
