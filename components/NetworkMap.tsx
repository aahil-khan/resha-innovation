'use client';

import dynamic from 'next/dynamic';
import { useMemo } from 'react';

// City nodes with accurate coordinates
const CITY_NODES = [
  { id: 'varanasi',  lat: 25.32, lng: 82.97, city: 'Varanasi',  type: 'active' },
  { id: 'amritsar',  lat: 31.62, lng: 74.88, city: 'Amritsar',  type: 'active' },
  { id: 'tirupati',  lat: 13.63, lng: 79.42, city: 'Tirupati',  type: 'active' },
  { id: 'jaipur',    lat: 26.91, lng: 75.79, city: 'Jaipur',    type: 'active' },
  { id: 'kanpur',    lat: 26.45, lng: 80.33, city: 'Kanpur',    type: 'partner' },
  { id: 'surat',     lat: 21.17, lng: 72.83, city: 'Surat',     type: 'partner' },
  { id: 'mumbai',    lat: 19.08, lng: 72.88, city: 'Mumbai',    type: 'onboarding' },
  { id: 'kolkata',   lat: 22.56, lng: 88.36, city: 'Kolkata',   type: 'onboarding' },
  { id: 'pune',      lat: 18.52, lng: 73.86, city: 'Pune',      type: 'onboarding' },
];

interface NetworkMapProps {
  selectedNodeId?: string;
  onNodeSelect: (id: string) => void;
}

export function NetworkMap({ selectedNodeId, onNodeSelect }: NetworkMapProps) {
  // Dynamically import map to avoid SSR window errors
  const Map = useMemo(() => dynamic(
    () => import('./DynamicMap'),
    { 
      loading: () => <div className="w-full h-full min-h-[460px] flex items-center justify-center bg-[#F5F0E8] text-forest font-medium">Loading map tiles...</div>,
      ssr: false 
    }
  ), []);

  return (
    <div className="relative" style={{ borderRadius: '12px', overflow: 'hidden', height: '460px' }}>
      <Map nodes={CITY_NODES} selectedNodeId={selectedNodeId} onNodeSelect={onNodeSelect} interactive={true} zoom={4.5} />
      
      {/* Legend */}
      <div className="absolute bottom-4 left-4 flex flex-col gap-2 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3 z-[400] shadow-sm border border-light-gray">
        {[
          { color: '#1B5E3B', label: 'Active Pilot' },
          { color: '#F5A623', label: 'Processing Partner' },
          { color: '#E87722', label: 'Onboarding' },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2.5">
            <div className="w-3 h-3 rounded-full" style={{ background: item.color }}/>
            <span className="text-xs text-dark-gray font-medium uppercase tracking-wider">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
