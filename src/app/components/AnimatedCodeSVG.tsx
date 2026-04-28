export default function AnimatedCodeSVG() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'var(--theme-primary)' }} />
          <stop offset="100%" style={{ stopColor: 'var(--theme-secondary)' }} />
        </linearGradient>
      </defs>

      {/* Laptop Base */}
      <rect x="80" y="180" width="240" height="160" rx="8" className="fill-slate-700 dark:fill-slate-800" />
      <rect x="90" y="190" width="220" height="120" className="fill-slate-900 dark:fill-slate-950" />

      {/* Code Lines - Animated */}
      <g className="animate-pulse">
        <rect x="110" y="210" width="80" height="4" rx="2" fill="var(--theme-primary)" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="110" y="225" width="120" height="4" rx="2" fill="var(--theme-secondary)" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2.5s" repeatCount="indefinite" />
        </rect>
        <rect x="110" y="240" width="60" height="4" rx="2" fill="var(--theme-accent)" opacity="0.7">
          <animate attributeName="opacity" values="0.7;0.4;0.7" dur="1.8s" repeatCount="indefinite" />
        </rect>
        <rect x="110" y="255" width="100" height="4" rx="2" fill="var(--theme-primary)" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2.2s" repeatCount="indefinite" />
        </rect>
        <rect x="110" y="270" width="140" height="4" rx="2" fill="var(--theme-secondary)" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.5;0.8" dur="1.9s" repeatCount="indefinite" />
        </rect>
        <rect x="110" y="285" width="70" height="4" rx="2" fill="var(--theme-accent)" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2.3s" repeatCount="indefinite" />
        </rect>
      </g>

      {/* Floating Code Brackets */}
      <g className="opacity-30">
        <text x="250" y="150" className="text-4xl font-mono" fill="var(--theme-primary)">{"<"}</text>
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 0,-10; 0,0"
          dur="3s"
          repeatCount="indefinite"
        />
      </g>

      <g className="opacity-30">
        <text x="300" y="100" className="text-4xl font-mono" fill="var(--theme-secondary)">{">"}</text>
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 0,10; 0,0"
          dur="2.5s"
          repeatCount="indefinite"
        />
      </g>

      {/* Cursor Blink */}
      <rect x="180" y="282" width="3" height="8" fill="var(--theme-primary)">
        <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
}
