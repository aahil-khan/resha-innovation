'use client';

import { useState } from 'react';
import { PROCESSING_BATCHES } from '@/lib/constants';

type Batch = typeof PROCESSING_BATCHES[number];

const STATUS_STYLES: Record<string, { bg: string; color: string }> = {
  completed: { bg: 'rgba(27,94,59,0.1)', color: '#1B5E3B' },
  processing: { bg: 'rgba(232,119,34,0.1)', color: '#E87722' },
  transit: { bg: 'rgba(245,166,35,0.1)', color: '#b37a0d' },
  collected: { bg: 'rgba(74,74,74,0.1)', color: '#4A4A4A' },
};

function BatchModal({ batch, onClose }: { batch: Batch; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"/>
      <div
        className="relative bg-parchment rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{ borderLeft: '4px solid #1B5E3B' }}
      >
        {/* Header */}
        <div className="px-6 py-4 flex items-center justify-between" style={{ background: '#F5F0E8', borderBottom: '1px solid #E8E5E0' }}>
          <div>
            <p className="text-xs text-dark-gray uppercase tracking-widest mb-1" style={{ fontFamily: 'Courier New, monospace' }}>Batch Record</p>
            <p className="font-bold text-forest" style={{ fontFamily: 'Courier New, monospace' }}>{batch.id}</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-dark-gray hover:bg-light-gray transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          {[
            { label: 'Source Institution', value: batch.source },
            { label: 'Collection Date', value: batch.date },
            { label: 'Batch Weight', value: batch.weight },
            { label: 'Processing Partner', value: batch.partner },
            { label: 'Material Output', value: batch.output },
          ].map((row, i) => (
            <div key={i} className="flex gap-4 pb-3 border-b border-light-gray last:border-0">
              <span className="text-dark-gray text-xs uppercase tracking-wider w-36 flex-shrink-0 pt-0.5" style={{ fontFamily: 'Courier New, monospace' }}>
                {row.label}:
              </span>
              <span className="text-forest text-sm font-medium">{row.value}</span>
            </div>
          ))}

          <div className="flex items-center gap-3 mt-4 pt-4 border-t border-light-gray">
            <div
              className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
              style={STATUS_STYLES[batch.status_type]}
            >
              {batch.status}
            </div>
            <div className="verified-badge text-xs">✓ RESHA Verified</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BatchesTable() {
  const [selectedBatch, setSelectedBatch] = useState<Batch | null>(null);

  return (
    <>
      <div className="sacred-card overflow-hidden">
        <div className="px-6 py-4 border-b border-light-gray">
          <h3 className="text-lg font-bold text-forest" style={{ fontFamily: 'DM Serif Display, serif' }}>
            Recent Batches
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ background: '#FAF7F2', borderBottom: '1px solid #E8E5E0' }}>
                {['Batch ID', 'Source', 'Date', 'Weight', 'Partner', 'Status', ''].map((col) => (
                  <th
                    key={col}
                    className="px-4 py-3 text-left text-xs font-semibold text-dark-gray uppercase tracking-wider"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PROCESSING_BATCHES.map((batch) => (
                <tr
                  key={batch.id}
                  className="border-b border-light-gray hover:bg-parchment-dark transition-colors duration-150"
                >
                  <td className="px-4 py-4">
                    <span className="text-xs text-forest font-bold" style={{ fontFamily: 'Courier New, monospace' }}>
                      {batch.id}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-dark-gray max-w-[180px] block truncate">{batch.source}</span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-dark-gray whitespace-nowrap">{batch.date}</span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm font-bold text-saffron">{batch.weight}</span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-dark-gray max-w-[160px] block truncate">{batch.partner}</span>
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap"
                      style={STATUS_STYLES[batch.status_type] || STATUS_STYLES.collected}
                    >
                      {batch.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <button
                      onClick={() => setSelectedBatch(batch)}
                      className="text-xs text-forest font-semibold hover:text-saffron transition-colors underline underline-offset-2"
                    >
                      View →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedBatch && (
        <BatchModal batch={selectedBatch} onClose={() => setSelectedBatch(null)} />
      )}
    </>
  );
}
