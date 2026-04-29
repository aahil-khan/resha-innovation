'use client';

import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix leaflet icon path issues in nextjs
if (typeof window !== 'undefined') {
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  });
}

const createCustomIcon = (color: string, isPulsing: boolean) => {
  return L.divIcon({
    className: 'custom-leaflet-icon',
    html: `
      <div style="position: relative; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;">
        ${isPulsing ? `<div style="position: absolute; width: 32px; height: 32px; background-color: ${color}; opacity: 0.2; border-radius: 50%; animation: pulse-dot 2.5s ease-in-out infinite;"></div>` : ''}
        <div style="width: 14px; height: 14px; background-color: ${color}; border: 2.5px solid white; border-radius: 50%; z-index: 10; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });
};

export interface Node {
  id: string;
  lat: number;
  lng: number;
  city: string;
  type: string;
}

interface DynamicMapProps {
  nodes: Node[];
  selectedNodeId?: string;
  onNodeSelect?: (id: string) => void;
  zoom?: number;
  interactive?: boolean;
}

const COLORS: Record<string, string> = {
  active: '#1B5E3B',
  partner: '#F5A623',
  onboarding: '#E87722',
};

export default function DynamicMap({ nodes, selectedNodeId, onNodeSelect, zoom = 4.5, interactive = true }: DynamicMapProps) {
  const center: [number, number] = [22.5, 80.0];

  return (
    <MapContainer 
      center={center} 
      zoom={zoom} 
      scrollWheelZoom={interactive}
      style={{ height: '100%', width: '100%', minHeight: '100%', zIndex: 10, background: '#E8F5EE' }}
      dragging={interactive}
      zoomControl={interactive}
      doubleClickZoom={interactive}
    >
      <TileLayer
        attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      
      {/* Dashed lines between specific routes */}
      <Polyline positions={[[25.32, 82.97], [26.45, 80.33]]} pathOptions={{ color: '#E87722', dashArray: '5, 5', weight: 2, opacity: 0.6 }} />
      <Polyline positions={[[31.62, 74.88], [26.91, 75.79]]} pathOptions={{ color: '#E87722', dashArray: '5, 5', weight: 2, opacity: 0.6 }} />
      <Polyline positions={[[13.63, 79.42], [21.17, 72.83]]} pathOptions={{ color: '#E87722', dashArray: '5, 5', weight: 2, opacity: 0.6 }} />

      {nodes.map(node => (
        <Marker 
          key={node.id} 
          position={[node.lat, node.lng]}
          icon={createCustomIcon(COLORS[node.type] || '#000', node.type === 'active')}
          eventHandlers={{
            click: () => onNodeSelect && onNodeSelect(node.id),
          }}
        >
          <Popup>
            <div className="font-sans min-w-[120px] text-center p-1">
              <p className="font-bold text-forest mb-1 text-base" style={{ fontFamily: 'DM Serif Display, serif' }}>{node.city}</p>
              <p className="text-[10px] uppercase tracking-wider text-dark-gray font-semibold">
                {node.type === 'active' ? 'Active Pilot' : node.type === 'partner' ? 'Processing Partner' : 'Onboarding'}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
