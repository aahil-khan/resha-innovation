'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { NetworkMap } from '@/components/NetworkMap';
import { NodeDetail } from '@/components/NodeDetail';
import { ActivityFeed } from '@/components/ActivityFeed';
import { BatchesTable } from '@/components/BatchesTable';
import { IconMapPin, IconScissors, IconFactory, IconClipboard } from '@/components/Icons';
import { Footer } from '@/components/Footer';

const METRIC_CARDS = [
  { label: 'Active Pilot Sites', value: '8', Icon: IconMapPin, note: 'Across 3 states' },
  { label: 'Textile Processed (MTD)', value: '1,840 kg', Icon: IconScissors, note: 'April 2025' },
  { label: 'Processing Partners', value: '5', Icon: IconFactory, note: 'Certified' },
  { label: 'Onboarding Requests', value: '14', Icon: IconClipboard, note: 'Pending review' },
];

export default function NetworkPage() {
  const [selectedNodeId, setSelectedNodeId] = useState<string | undefined>();

  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16 min-h-screen" style={{ background: '#F5F0E8' }}>
        {/* Header bar */}
        <div className="px-6 py-6" style={{ background: '#1B5E3B' }}>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl text-white" style={{ fontFamily: 'Marcellus, serif' }}>
                RESHA Operations Network
              </h1>
              <p className="text-white/60 text-sm mt-1">
                Last updated: {new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"/>
              <span className="text-white/80 text-sm font-semibold">8 Sites Active</span>
            </div>
          </div>
        </div>

        {/* Metrics row */}
        <div className="px-6 py-6 border-b border-light-gray">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {METRIC_CARDS.map((card, i) => (
              <div key={i} className="sacred-card p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'rgba(27,94,59,0.08)' }}>
                    <card.Icon size={15} color="#1B5E3B" />
                  </div>
                  <p className="text-dark-gray text-xs font-medium uppercase tracking-wider">{card.label}</p>
                </div>
                <p className="text-2xl font-bold text-forest" style={{ fontFamily: 'Marcellus, serif' }}>
                  {card.value}
                </p>
                <p className="text-dark-gray/60 text-xs mt-1">{card.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="px-6 py-8">
          <div className="max-w-7xl mx-auto">
            {/* Map + Detail */}
            <div className="grid lg:grid-cols-5 gap-6 mb-8">
              <div className="lg:col-span-3 sacred-card overflow-hidden">
                <div className="px-6 py-4 border-b border-light-gray">
                  <h2 className="text-lg font-bold text-forest" style={{ fontFamily: 'Marcellus, serif' }}>Network Map</h2>
                  <p className="text-dark-gray text-xs mt-0.5">Click a site node to view institution details</p>
                </div>
                <div className="p-4">
                  <NetworkMap selectedNodeId={selectedNodeId} onNodeSelect={setSelectedNodeId} />
                </div>
              </div>
              <div className="lg:col-span-2">
                <NodeDetail nodeId={selectedNodeId} />
              </div>
            </div>

            {/* Activity + Stats */}
            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-2"><ActivityFeed /></div>
              <div className="rounded-2xl p-6" style={{ background: '#7B1C1C', color: 'white' }}>
                <h3 className="text-lg mb-6" style={{ fontFamily: 'Marcellus, serif' }}>Network Overview</h3>
                <div className="space-y-5">
                  {[
                    { label: 'Active Shredder Units', value: '8' },
                    { label: 'Total Fibre Produced', value: '4.2 MT' },
                    { label: 'ESG Batches Certified', value: '47' },
                  ].map((item, i) => (
                    <div key={i}>
                      <p className="text-white/50 text-xs mb-1">{item.label}</p>
                      <p className="text-3xl font-bold text-white" style={{ fontFamily: 'Marcellus, serif' }}>{item.value}</p>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-white/10">
                    <button className="w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90" style={{ background: '#E87722', color: 'white' }}>
                      Download ESG Report
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Batches */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-forest" style={{ fontFamily: 'Marcellus, serif' }}>Traceability Records</h2>
                <span className="text-xs text-dark-gray">Showing last 5 batches</span>
              </div>
              <BatchesTable />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
