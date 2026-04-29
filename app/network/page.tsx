'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { NetworkMap } from '@/components/NetworkMap';
import { NodeDetail } from '@/components/NodeDetail';
import { ActivityFeed } from '@/components/ActivityFeed';
import { BatchesTable } from '@/components/BatchesTable';

export default function NetworkPage() {
  const [selectedNodeId, setSelectedNodeId] = useState<string | undefined>();

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 px-6 bg-parchment min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-sans font-bold text-forest mb-4">
              RESHA Network Dashboard
            </h1>
            <p className="text-lg text-dark-gray font-sans max-w-2xl">
              Explore our network of processing centers, distribution hubs, and partner institutions across India.
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Map Section */}
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg border border-light-gray">
                <h2 className="text-2xl font-sans font-bold text-forest mb-6">
                  Network Map
                </h2>
                <NetworkMap
                  selectedNodeId={selectedNodeId}
                  onNodeSelect={setSelectedNodeId}
                />
                <p className="text-sm text-dark-gray font-sans mt-4">
                  Click on any location to view details about that processing center.
                </p>
              </div>
            </div>

            {/* Node Details */}
            <div>
              <NodeDetail nodeId={selectedNodeId} />
            </div>
          </div>

          {/* Two Column Layout for Activity and Batches */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Activity Feed */}
            <ActivityFeed />

            {/* Stats Card */}
            <div className="bg-forest text-parchment p-8 rounded-lg">
              <h3 className="text-xl font-sans font-bold mb-6">Network Overview</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-parchment/70 font-sans text-sm mb-2">Active Locations</p>
                  <p className="text-4xl font-sans font-bold">5</p>
                </div>
                <div>
                  <p className="text-parchment/70 font-sans text-sm mb-2">Total Members</p>
                  <p className="text-4xl font-sans font-bold">240+</p>
                </div>
                <div>
                  <p className="text-parchment/70 font-sans text-sm mb-2">This Month</p>
                  <p className="text-xl font-sans">
                    <span className="text-saffron font-bold">850</span> devices processed
                  </p>
                </div>
                <div className="pt-6 border-t border-parchment/30">
                  <button className="w-full py-3 bg-saffron text-white rounded-lg font-sans font-semibold hover:bg-saffron/90 transition-colors text-sm">
                    Download Report
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Batches Section */}
          <div>
            <h2 className="text-2xl font-sans font-bold text-forest mb-6">
              Processing Batches
            </h2>
            <BatchesTable />
          </div>
        </div>
      </main>

      <footer className="bg-dark-gray text-parchment py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-sans mb-2">© 2024 RESHA. All rights reserved.</p>
          <p className="text-sm text-parchment/70 font-sans">
            Reshaping Electronics Supply Chain for Humanity & the Environment
          </p>
        </div>
      </footer>
    </>
  );
}
