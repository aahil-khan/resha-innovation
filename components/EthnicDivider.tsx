export function EthnicDivider({ color = '#1B5E3B', goldAccent = false }) {
  const c = color;
  const g = goldAccent ? '#F5A623' : color;

  return (
    <div className="w-full overflow-hidden" style={{ height: '48px', lineHeight: 0 }}>
      <svg
        width="100%"
        height="48"
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main horizontal line */}
        <line x1="0" y1="24" x2="1440" y2="24" stroke={c} strokeWidth="0.8" opacity="0.3" />

        {/* Repeating diamond chevron motif */}
        {Array.from({ length: 37 }, (_, i) => {
          const x = i * 40;
          return (
            <g key={i} transform={`translate(${x}, 24)`}>
              {/* Diamond */}
              <polygon
                points="0,-8 8,0 0,8 -8,0"
                fill="none"
                stroke={g}
                strokeWidth="1"
                opacity="0.55"
              />
              {/* Inner dot */}
              <circle cx="0" cy="0" r="1.5" fill={g} opacity="0.4" />
            </g>
          );
        })}

        {/* Top accent line */}
        <line x1="0" y1="8" x2="1440" y2="8" stroke={g} strokeWidth="0.5" strokeDasharray="4,8" opacity="0.3" />
        {/* Bottom accent line */}
        <line x1="0" y1="40" x2="1440" y2="40" stroke={g} strokeWidth="0.5" strokeDasharray="4,8" opacity="0.3" />
      </svg>
    </div>
  );
}
