'use client';

import { useState } from 'react';
import { NETWORK_NODES } from '@/lib/constants';

// Accurate equirectangular projection for India
// viewBox: 0 0 520 560
// x = (lng - 66.0) / 32.0 * 480 + 20
// y = (38.0 - lat) / 32.0 * 520 + 20

function lngToX(lng: number) { return ((lng - 66.0) / 32.0) * 480 + 20; }
function latToY(lat: number) { return ((38.0 - lat) / 32.0) * 520 + 20; }

// Accurate India outline — key boundary vertices traced from geography
// Going clockwise from Rann of Kutch/Gujarat NW
const INDIA_PATH = [
  // Gujarat/Kutch NW
  [68.5, 23.5], [69.0, 22.8], [69.5, 22.3],
  // Saurashtra peninsula (going around the bulge)
  [70.2, 21.0], [69.8, 22.0], [70.8, 22.5], [71.2, 21.5],
  // Gujarat coast south
  [72.0, 20.5], [72.5, 20.0], [72.8, 19.0],
  // Maharashtra coast
  [73.2, 17.5], [73.8, 16.0],
  // Goa
  [73.8, 15.5],
  // Karnataka / Kerala coast
  [74.8, 12.5], [75.5, 10.5],
  // Cape Comorin
  [77.5, 8.1],
  // Tamil Nadu east coast
  [79.5, 9.5], [80.0, 11.0], [80.2, 13.5],
  // Andhra Pradesh
  [80.5, 15.0], [80.8, 17.0], [82.0, 18.5],
  // Orissa coast
  [85.0, 19.5], [87.0, 20.0],
  // West Bengal / Sundarbans
  [88.5, 21.5], [89.0, 22.0],
  // Bangladesh/Assam border area
  [91.0, 22.5],
  // Mizoram / Tripura
  [92.5, 22.0],
  // NE states going north
  [93.5, 24.0], [94.0, 24.5],
  // Arunachal far east
  [97.0, 28.0], [96.5, 28.5],
  // Coming back west along Himalayas/NE
  [95.0, 27.5], [93.0, 27.0], [92.0, 27.0],
  // Assam / Sikkim / Nepal border
  [89.0, 27.5], [88.0, 27.0],
  // Nepal border going west
  [84.0, 27.5], [80.0, 30.5],
  // Uttarakhand / HP border
  [79.0, 31.0], [77.5, 31.5],
  // Jammu
  [76.0, 32.5], [74.8, 32.7],
  // J&K border going NW
  [74.0, 33.5], [73.5, 34.0], [72.5, 34.5],
  // Back down Pakistan border
  [71.5, 33.0], [70.5, 32.5], [70.0, 31.0],
  [69.5, 28.0], [69.0, 27.0], [68.5, 24.5],
  // Close back to start
  [68.5, 23.5],
].map(([lng, lat]) => [lngToX(lng), latToY(lat)]);

const INDIA_D = 'M ' + INDIA_PATH.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' L ') + ' Z';

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

const COLORS = {
  active: '#1B5E3B',
  partner: '#F5A623',
  onboarding: '#E87722',
};

interface NetworkMapProps {
  selectedNodeId?: string;
  onNodeSelect: (id: string) => void;
}

export function NetworkMap({ selectedNodeId, onNodeSelect }: NetworkMapProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="relative" style={{ background: '#FAF7F2', borderRadius: '12px', overflow: 'hidden' }}>
      <svg viewBox="0 0 520 560" className="w-full" style={{ maxHeight: '460px' }}>
        {/* India fill */}
        <path d={INDIA_D} fill="#E8F5EE" stroke="#1B5E3B" strokeWidth="1.5" opacity="0.85"/>

        {/* Dashed logistics lines: active sites to partners */}
        {/* Varanasi → Kanpur */}
        <line
          x1={lngToX(82.97)} y1={latToY(25.32)}
          x2={lngToX(80.33)} y2={latToY(26.45)}
          stroke="#E87722" strokeWidth="1" strokeDasharray="4,4" opacity="0.5"
        />
        {/* Amritsar → Jaipur */}
        <line
          x1={lngToX(74.88)} y1={latToY(31.62)}
          x2={lngToX(75.79)} y2={latToY(26.91)}
          stroke="#E87722" strokeWidth="1" strokeDasharray="4,4" opacity="0.5"
        />
        {/* Tirupati → Surat (long route implied) */}
        <line
          x1={lngToX(79.42)} y1={latToY(13.63)}
          x2={lngToX(72.83)} y2={latToY(21.17)}
          stroke="#E87722" strokeWidth="1" strokeDasharray="4,4" opacity="0.4"
        />

        {/* City nodes */}
        {CITY_NODES.map((node) => {
          const cx = lngToX(node.lng);
          const cy = latToY(node.lat);
          const color = COLORS[node.type as keyof typeof COLORS];
          const isSelected = selectedNodeId === node.id;
          const isHovered = hoveredId === node.id;
          const r = isSelected || isHovered ? 8 : 6;

          return (
            <g
              key={node.id}
              onClick={() => onNodeSelect(node.id)}
              onMouseEnter={() => setHoveredId(node.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{ cursor: 'pointer' }}
            >
              {/* Pulse ring for active sites */}
              {node.type === 'active' && (
                <circle cx={cx} cy={cy} r="16" fill={color} opacity="0.1"
                  style={{ animation: 'pulse-dot 2.5s ease-in-out infinite' }}/>
              )}
              {/* Selection ring */}
              {isSelected && (
                <circle cx={cx} cy={cy} r={r + 5} fill="none" stroke={color} strokeWidth="1.5" opacity="0.6"/>
              )}
              {/* Dashed ring for onboarding */}
              {node.type === 'onboarding' && (
                <circle cx={cx} cy={cy} r={r + 5} fill="none" stroke={color} strokeWidth="1.2" strokeDasharray="3,3" opacity="0.5"/>
              )}
              {/* Main dot */}
              <circle cx={cx} cy={cy} r={r} fill={color} stroke="white" strokeWidth="1.8"
                style={{ transition: 'r 0.15s ease' }}/>

              {/* Pin point (downward triangle) */}
              {node.type === 'active' && (
                <polygon
                  points={`${cx},${cy + r + 5} ${cx - 3},${cy + r} ${cx + 3},${cy + r}`}
                  fill={color}
                />
              )}

              {/* City label */}
              <text
                x={cx + 11} y={cy + 4}
                fontSize="9.5" fill="#1B5E3B"
                fontFamily="Outfit, sans-serif" fontWeight="600"
                opacity={isHovered || isSelected ? 1 : 0.7}
              >
                {node.city}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Legend */}
      <div className="absolute bottom-3 left-3 flex flex-col gap-1.5 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2">
        {[
          { color: '#1B5E3B', label: 'Active Pilot' },
          { color: '#F5A623', label: 'Processing Partner' },
          { color: '#E87722', label: 'Onboarding' },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: item.color }}/>
            <span className="text-xs text-dark-gray">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
