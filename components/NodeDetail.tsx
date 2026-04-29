'use client';

import { NETWORK_NODES } from '@/lib/constants';

interface NodeDetailProps {
  nodeId?: string;
}

export function NodeDetail({ nodeId }: NodeDetailProps) {
  const node = NETWORK_NODES.find((n) => n.id === nodeId);

  if (!node) {
    return (
      <div className="bg-light-gray rounded-lg p-8 text-center border border-light-gray">
        <p className="text-dark-gray font-sans">Select a node to view details</p>
      </div>
    );
  }

  const typeEmoji: Record<string, string> = {
    processing: '⚙️',
    hub: '🔄',
    distribution: '📦',
  };

  return (
    <div className="bg-white rounded-lg border-2 border-saffron p-8 shadow-lg">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{typeEmoji[node.type] || '📍'}</span>
            <h2 className="text-2xl font-sans font-bold text-forest">{node.city}</h2>
          </div>
          <p className="text-dark-gray font-sans text-sm">{node.name}</p>
        </div>
        <div className="bg-saffron/20 px-4 py-2 rounded text-saffron font-semibold text-sm font-sans capitalize">
          {node.type}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-light-gray mb-6" />

      {/* Stats Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div>
          <p className="text-dark-gray font-sans text-sm mb-2">Active Members</p>
          <p className="text-3xl font-sans font-bold text-forest">{node.members}</p>
        </div>
        <div>
          <p className="text-dark-gray font-sans text-sm mb-2">Devices Processed</p>
          <p className="text-3xl font-sans font-bold text-saffron">{node.devices_processed.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-dark-gray font-sans text-sm mb-2">CO₂ Saved (tons)</p>
          <p className="text-3xl font-sans font-bold text-forest">{node.co2_saved}</p>
        </div>
      </div>

      {/* Progress bar example */}
      <div className="bg-light-gray rounded p-4">
        <p className="text-sm font-sans text-dark-gray mb-2">Processing Capacity</p>
        <div className="w-full bg-light-gray rounded-full h-2">
          <div
            className="bg-saffron h-2 rounded-full transition-all"
            style={{ width: `${(node.members / 70) * 100}%` }}
          />
        </div>
        <p className="text-xs text-dark-gray font-sans mt-2">
          {Math.round((node.members / 70) * 100)}% of network capacity
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 mt-6">
        <button className="flex-1 px-4 py-3 bg-forest text-parchment rounded-lg font-sans font-semibold hover:bg-saffron transition-colors text-sm">
          Learn More
        </button>
        <button className="flex-1 px-4 py-3 border-2 border-forest text-forest rounded-lg font-sans font-semibold hover:bg-forest hover:text-parchment transition-colors text-sm">
          Connect
        </button>
      </div>
    </div>
  );
}
