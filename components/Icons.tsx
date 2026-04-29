// Clean SVG icon components — no emojis
// All icons use 24x24 viewBox, stroke-based, forest green by default

interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

const defaults: Required<Pick<IconProps, 'size' | 'color' | 'strokeWidth'>> = {
  size: 20,
  color: 'currentColor',
  strokeWidth: 1.75,
};

const base = (p: IconProps) => ({
  width: p.size ?? defaults.size,
  height: p.size ?? defaults.size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: p.color ?? defaults.color,
  strokeWidth: p.strokeWidth ?? defaults.strokeWidth,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className: p.className,
});

export const IconLeaf = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
);

export const IconMapPin = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

export const IconBuilding = (p: IconProps) => (
  <svg {...base(p)}>
    <rect width="16" height="20" x="4" y="2" rx="2"/>
    <path d="M9 22v-4h6v4"/>
    <path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>
  </svg>
);

export const IconShieldCheck = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
);

export const IconMap = (p: IconProps) => (
  <svg {...base(p)}>
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
    <line x1="9" x2="9" y1="3" y2="18"/>
    <line x1="15" x2="15" y1="6" y2="21"/>
  </svg>
);

export const IconWind = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/>
    <path d="M9.6 4.6A2 2 0 1 1 11 8H2"/>
    <path d="M12.6 19.4A2 2 0 1 0 14 16H2"/>
  </svg>
);

export const IconCheckCircle = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="10"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
);

export const IconRefresh = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
    <path d="M21 3v5h-5"/>
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
    <path d="M8 16H3v5"/>
  </svg>
);

export const IconClipboard = (p: IconProps) => (
  <svg {...base(p)}>
    <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
  </svg>
);

export const IconSettings = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

export const IconPackage = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/>
    <path d="M12 22V12"/>
    <path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"/>
    <path d="m7.5 4.27 9 5.15"/>
  </svg>
);

export const IconBarChart = (p: IconProps) => (
  <svg {...base(p)}>
    <line x1="12" x2="12" y1="20" y2="10"/>
    <line x1="18" x2="18" y1="20" y2="4"/>
    <line x1="6" x2="6" y1="20" y2="16"/>
  </svg>
);

export const IconSprout = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M7 20h10"/>
    <path d="M10 20c5.5-2.5.8-6.4 3-10"/>
    <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/>
    <path d="M14.1 6a7 7 0 0 1 1.7 4.3c-1.2.3-2.4.4-3.6.2"/>
  </svg>
);

export const IconHands = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/>
    <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/>
    <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/>
    <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>
  </svg>
);

export const IconLock = (p: IconProps) => (
  <svg {...base(p)}>
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

export const IconFactory = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>
    <path d="M17 18h1"/>
    <path d="M12 18h1"/>
    <path d="M7 18h1"/>
  </svg>
);

export const IconScissors = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="6" cy="6" r="3"/>
    <circle cx="6" cy="18" r="3"/>
    <line x1="20" x2="8.12" y1="4" y2="15.88"/>
    <line x1="14.47" x2="20" y1="14.48" y2="20"/>
    <line x1="8.12" x2="12" y1="8.12" y2="12"/>
  </svg>
);

// Lotus / sacred symbol icon
export const IconLotus = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 22c0 0-8-5.4-8-12 0-3 1.5-5.5 4-7 0 2.5 1 5 4 6.5C15 8 16 5.5 16 3c2.5 1.5 4 4 4 7 0 6.6-8 12-8 12z"/>
    <path d="M12 10c0 0-3-1.5-4-5"/>
    <path d="M12 10c0 0 3-1.5 4-5"/>
  </svg>
);

export const IconTemple = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M2 20h20"/>
    <path d="M6 20V10"/>
    <path d="M18 20V10"/>
    <path d="M12 4 L3 10 L21 10 Z"/>
    <path d="M12 4V1"/>
    <rect x="9" y="14" width="6" height="6"/>
  </svg>
);

export const IconArrowRight = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 12h14"/>
    <path d="m12 5 7 7-7 7"/>
  </svg>
);

export const IconCheck = (p: IconProps) => (
  <svg {...base(p)}>
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

// Map of string key → component (for data-driven usage)
export const ICON_MAP: Record<string, (p: IconProps) => JSX.Element> = {
  Leaf: IconLeaf,
  MapPin: IconMapPin,
  Building: IconBuilding,
  Shield: IconShieldCheck,
  Map: IconMap,
  Wind: IconWind,
  Check: IconCheckCircle,
  Refresh: IconRefresh,
  Clipboard: IconClipboard,
  Settings: IconSettings,
  Package: IconPackage,
  BarChart: IconBarChart,
  Sprout: IconSprout,
  Hands: IconHands,
  Lock: IconLock,
  Factory: IconFactory,
  Scissors: IconScissors,
  Lotus: IconLotus,
  Temple: IconTemple,
  ArrowRight: IconArrowRight,
};
