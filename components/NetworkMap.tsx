'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { NETWORK_NODES } from '@/lib/constants';

// Custom marker icon
const createCustomIcon = (isActive: boolean) => {
  return L.divIcon({
    html: `<div style="
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: ${isActive ? '#E87722' : '#1B5E3B'};
      border: 3px solid #F5F0E8;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 ${isActive ? '15px' : '8px'} rgba(${isActive ? '232, 119, 34' : '27, 94, 59'}, 0.4);
      transition: all 0.3s ease;
      cursor: pointer;
    ">
      <div style="
        width: 10px;
        height: 10px;
        background-color: #F5F0E8;
        border-radius: 50%;
      "></div>
    </div>`,
    iconSize: [32, 32],
    className: 'custom-marker',
  });
};

interface NetworkMapProps {
  onNodeSelect: (nodeId: string) => void;
  selectedNodeId?: string;
}

function MapContent({ onNodeSelect, selectedNodeId }: NetworkMapProps) {
  const map = useMap();

  useEffect(() => {
    // Set map bounds to focus on India with padding
    const bounds = L.latLngBounds([
      [8, 68],
      [35, 97],
    ]);
    map.fitBounds(bounds, { padding: [50, 50] });
  }, [map]);

  return (
    <>
      {NETWORK_NODES.map((node) => (
        <Marker
          key={node.id}
          position={[node.lat, node.lng]}
          icon={createCustomIcon(selectedNodeId === node.id)}
          eventHandlers={{
            click: () => {
              onNodeSelect(node.id);
            },
          }}
        >
          <Popup className="custom-popup">
            <div className="font-sans text-forest p-2 w-48">
              <h3 className="font-bold text-sm text-saffron mb-1">{node.name}</h3>
              <p className="text-xs text-dark-gray mb-2">{node.city}</p>
              <div className="border-t border-light-gray pt-2 mt-2 space-y-1 text-xs">
                <p><span className="font-semibold">Type:</span> {node.type}</p>
                <p><span className="font-semibold">Members:</span> {node.members}</p>
                <p><span className="font-semibold">Devices:</span> {node.devices_processed}</p>
                <p><span className="font-semibold">CO₂ Saved:</span> {node.co2_saved}t</p>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
}

export function NetworkMap({ onNodeSelect, selectedNodeId }: NetworkMapProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full bg-parchment rounded-lg border-2 border-forest flex items-center justify-center">
        <p className="text-forest font-sans">Loading interactive map...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full rounded-lg border-2 border-forest overflow-hidden">
      <MapContainer
        center={[20, 78]}
        zoom={5}
        style={{ width: '100%', height: '100%', zIndex: 0 }}
        zoomControl={true}
        attributionControl={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
          maxZoom={13}
          minZoom={4}
        />
        <MapContent onNodeSelect={onNodeSelect} selectedNodeId={selectedNodeId} />
      </MapContainer>
    </div>
  );
}
