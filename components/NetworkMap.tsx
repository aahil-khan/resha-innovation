'use client';

import { useState } from 'react';
import { NETWORK_NODES } from '@/lib/constants';

const NODE_POSITIONS: Record<string, { x: number; y: number }> = {
  varanasi: { x: 320, y: 200 },
  amritsar: { x: 200, y: 115 },
  tirupati: { x: 290, y: 380 },
  jaipur: { x: 220, y: 208 },
  kanpur: { x: 305, y: 205 },
  surat: { x: 195, y: 278 },
  mumbai: { x: 185, y: 310 },
  kolkata: { x: 368, y: 232 },
  pune: { x: 200, y: 325 },
};

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
    <div className="relative" style={{ background: '#FAF7F2', borderRadius: '12px', overflow: 'hidden', minHeight: '420px' }}>
      <svg
        viewBox="0 0 520 480"
        className="w-full"
        style={{ minHeight: '380px' }}
      >
        {/* India simplified outline */}
        <path
          d="M175 72 L190 60 L210 62 L235 58 L255 65 L272 60 L290 70 L308 74 L325 84 L342 94 L352 108 L360 124 L374 136 L370 150 L380 164 L385 178 L375 192 L382 208 L372 224 L368 242 L374 256 L365 272 L372 288 L360 305 L348 320 L336 335 L322 350 L310 365 L298 380 L286 394 L276 408 L268 420 L260 432 L252 438 L244 432 L240 418 L236 405 L232 392 L224 378 L212 362 L200 348 L190 335 L180 320 L173 306 L168 292 L163 278 L160 262 L162 248 L157 232 L153 218 L148 204 L150 188 L157 174 L150 158 L147 142 L154 126 L158 110 L168 96 L175 82 L175 72Z"
          fill="#E8F5EE"
          stroke="#1B5E3B"
          strokeWidth="1.5"
          opacity="0.7"
        />

        {/* Connection lines between active sites and partners */}
        <line x1="320" y1="200" x2="305" y2="205" stroke="#E87722" strokeWidth="1" strokeDasharray="4,4" opacity="0.5"/>
        <line x1="200" y1="115" x2="195" y2="278" stroke="#E87722" strokeWidth="1" strokeDasharray="4,4" opacity="0.5"/>
        <line x1="290" y1="380" x2="195" y2="278" stroke="#E87722" strokeWidth="1" strokeDasharray="4,4" opacity="0.5"/>

        {/* City nodes */}
        {NETWORK_NODES.map((node) => {
          const pos = NODE_POSITIONS[node.id];
          if (!pos) return null;
          const color = COLORS[node.type as keyof typeof COLORS] || '#4A4A4A';
          const isSelected = selectedNodeId === node.id;
          const isHovered = hoveredId === node.id;

          return (
            <g
              key={node.id}
              className="cursor-pointer"
              onClick={() => onNodeSelect(node.id)}
              onMouseEnter={() => setHoveredId(node.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Pulse ring */}
              {node.type === 'active' && (
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r="18"
                  fill={color}
                  opacity="0.12"
                  style={{
                    animation: 'pulse-dot 2.5s ease-in-out infinite',
                  }}
                />
              )}

              {/* Selection ring */}
              {isSelected && (
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r="14"
                  fill="none"
                  stroke={color}
                  strokeWidth="2"
                  opacity="0.7"
                />
              )}

              {/* Main dot */}
              <circle
                cx={pos.x}
                cy={pos.y}
                r={isSelected || isHovered ? 9 : 7}
                fill={color}
                stroke="white"
                strokeWidth="2"
                style={{ transition: 'r 0.2s ease' }}
              />

              {/* Dashed border for onboarding */}
              {node.type === 'onboarding' && (
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r="11"
                  fill="none"
                  stroke={color}
                  strokeWidth="1.5"
                  strokeDasharray="3,3"
                  opacity="0.6"
                />
              )}

              {/* Label */}
              <text
                x={pos.x + 13}
                y={pos.y + 4}
                fontSize="10"
                fill="#1B5E3B"
                fontFamily="Outfit, sans-serif"
                fontWeight="600"
                opacity={isHovered || isSelected ? 1 : 0.75}
              >
                {node.city}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Legend */}
      <div className="absolute bottom-3 left-3 flex flex-col gap-1.5">
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
