export function EthnicDivider() {
  return (
    <svg
      className="w-full h-24 text-forest"
      viewBox="0 0 1200 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Geometric pattern inspired by Indian textiles */}
      <defs>
        <pattern id="geo-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <rect x="10" y="10" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2" />
          <line x1="20" y1="20" x2="70" y2="70" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
          <line x1="70" y1="20" x2="20" y2="70" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
          <circle cx="40" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="40" cy="40" r="4" fill="currentColor" opacity="0.4" />
        </pattern>
      </defs>

      {/* Main border line */}
      <line x1="0" y1="50" x2="1200" y2="50" stroke="currentColor" strokeWidth="3" />

      {/* Geometric pattern sections */}
      <rect x="0" y="30" width="1200" height="40" fill="url(#geo-pattern)" opacity="0.8" />

      {/* Decorative triangles on top */}
      <polygon points="40,10 55,30 25,30" fill="currentColor" opacity="0.6" />
      <polygon points="140,10 155,30 125,30" fill="currentColor" opacity="0.6" />
      <polygon points="240,10 255,30 225,30" fill="currentColor" opacity="0.6" />
      <polygon points="340,10 355,30 325,30" fill="currentColor" opacity="0.6" />
      <polygon points="440,10 455,30 425,30" fill="currentColor" opacity="0.6" />
      <polygon points="540,10 555,30 525,30" fill="currentColor" opacity="0.6" />
      <polygon points="640,10 655,30 625,30" fill="currentColor" opacity="0.6" />
      <polygon points="740,10 755,30 725,30" fill="currentColor" opacity="0.6" />
      <polygon points="840,10 855,30 825,30" fill="currentColor" opacity="0.6" />
      <polygon points="940,10 955,30 925,30" fill="currentColor" opacity="0.6" />
      <polygon points="1040,10 1055,30 1025,30" fill="currentColor" opacity="0.6" />
      <polygon points="1140,10 1155,30 1125,30" fill="currentColor" opacity="0.6" />

      {/* Decorative triangles on bottom */}
      <polygon points="90,70 105,90 75,90" fill="currentColor" opacity="0.6" />
      <polygon points="190,70 205,90 175,90" fill="currentColor" opacity="0.6" />
      <polygon points="290,70 305,90 275,90" fill="currentColor" opacity="0.6" />
      <polygon points="390,70 405,90 375,90" fill="currentColor" opacity="0.6" />
      <polygon points="490,70 505,90 475,90" fill="currentColor" opacity="0.6" />
      <polygon points="590,70 605,90 575,90" fill="currentColor" opacity="0.6" />
      <polygon points="690,70 705,90 675,90" fill="currentColor" opacity="0.6" />
      <polygon points="790,70 805,90 775,90" fill="currentColor" opacity="0.6" />
      <polygon points="890,70 905,90 875,90" fill="currentColor" opacity="0.6" />
      <polygon points="990,70 1005,90 975,90" fill="currentColor" opacity="0.6" />
      <polygon points="1090,70 1105,90 1075,90" fill="currentColor" opacity="0.6" />
    </svg>
  );
}
