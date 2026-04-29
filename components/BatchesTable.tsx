'use client';

import { useState } from 'react';
import { PROCESSING_BATCHES } from '@/lib/constants';

interface Batch {
  id: string;
  status: 'processing' | 'completed' | 'pending';
  device_count: number;
  location: string;
  progress: number;
  materials_extracted: string;
}

export function BatchesTable() {
  const [selectedBatch, setSelectedBatch] = useState<Batch | null>(null);

  const statusColor: Record<string, string> = {
    processing: 'bg-saffron/20 text-saffron',
    completed: 'bg-forest/20 text-forest',
    pending: 'bg-dark-gray/20 text-dark-gray',
  };

  return (
    <>
      <div className="bg-white rounded-lg border border-light-gray overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-light-gray border-b border-light-gray">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-sans font-semibold text-forest">
                  Batch ID
                </th>
                <th className="px-6 py-4 text-left text-sm font-sans font-semibold text-forest">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-sans font-semibold text-forest">
                  Devices
                </th>
                <th className="px-6 py-4 text-left text-sm font-sans font-semibold text-forest">
                  Progress
                </th>
                <th className="px-6 py-4 text-left text-sm font-sans font-semibold text-forest">
                  Location
                </th>
                <th className="px-6 py-4 text-left text-sm font-sans font-semibold text-forest">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {PROCESSING_BATCHES.map((batch) => (
                <tr
                  key={batch.id}
                  className="border-b border-light-gray hover:bg-parchment/50 transition-colors"
                >
                  <td className="px-6 py-4 font-sans font-semibold text-forest text-sm">
                    {batch.id}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-sans font-semibold capitalize ${
                        statusColor[batch.status]
                      }`}
                    >
                      {batch.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-sans text-dark-gray text-sm">
                    {batch.device_count}
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-32 bg-light-gray rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-saffron h-2 transition-all"
                        style={{ width: `${batch.progress}%` }}
                      />
                    </div>
                    <p className="text-xs text-dark-gray font-sans mt-1">{batch.progress}%</p>
                  </td>
                  <td className="px-6 py-4 font-sans text-dark-gray text-sm">
                    {batch.location}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => setSelectedBatch(batch)}
                      className="text-saffron font-sans font-semibold text-sm hover:text-forest transition-colors"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedBatch && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-sans font-bold text-forest">
                {selectedBatch.id}
              </h2>
              <button
                onClick={() => setSelectedBatch(null)}
                className="text-dark-gray hover:text-forest transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <p className="text-sm text-dark-gray font-sans mb-1">Status</p>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-sans font-semibold capitalize ${
                    statusColor[selectedBatch.status]
                  }`}
                >
                  {selectedBatch.status}
                </span>
              </div>

              <div>
                <p className="text-sm text-dark-gray font-sans mb-1">Devices</p>
                <p className="text-2xl font-sans font-bold text-forest">
                  {selectedBatch.device_count}
                </p>
              </div>

              <div>
                <p className="text-sm text-dark-gray font-sans mb-1">Location</p>
                <p className="font-sans text-forest">{selectedBatch.location}</p>
              </div>

              <div>
                <p className="text-sm text-dark-gray font-sans mb-2">Progress</p>
                <div className="w-full bg-light-gray rounded-full h-3 overflow-hidden mb-2">
                  <div
                    className="bg-saffron h-3 transition-all"
                    style={{ width: `${selectedBatch.progress}%` }}
                  />
                </div>
                <p className="text-sm font-sans text-dark-gray">{selectedBatch.progress}% complete</p>
              </div>

              <div>
                <p className="text-sm text-dark-gray font-sans mb-1">Materials</p>
                <p className="font-sans text-forest">{selectedBatch.materials_extracted}</p>
              </div>
            </div>

            <button
              onClick={() => setSelectedBatch(null)}
              className="w-full py-2 bg-forest text-parchment rounded-lg font-sans font-semibold hover:bg-saffron transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
