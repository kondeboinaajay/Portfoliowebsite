export default function AnimatedProjectSVG() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="projectGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" className="[stop-color:rgb(99,102,241)]" />
          <stop offset="100%" className="[stop-color:rgb(139,92,246)]" />
        </linearGradient>
      </defs>

      {/* Monitor Frame */}
      <rect x="80" y="80" width="240" height="180" rx="8" className="fill-slate-700 dark:fill-slate-800" />
      <rect x="90" y="90" width="220" height="150" className="fill-slate-900 dark:fill-slate-950" />

      {/* Browser Window */}
      <rect x="100" y="100" width="200" height="20" rx="4" className="fill-slate-800 dark:fill-slate-900" />
      <circle cx="110" cy="110" r="3" className="fill-red-500" />
      <circle cx="120" cy="110" r="3" className="fill-yellow-500" />
      <circle cx="130" cy="110" r="3" className="fill-green-500" />

      {/* Content Blocks with Animation */}
      <g className="animate-pulse">
        <rect x="110" y="135" width="80" height="40" rx="4" className="fill-indigo-500" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="200" y="135" width="80" height="40" rx="4" className="fill-purple-500" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2.3s" repeatCount="indefinite" />
        </rect>
        <rect x="110" y="185" width="170" height="10" rx="2" className="fill-slate-600" opacity="0.7" />
        <rect x="110" y="200" width="140" height="10" rx="2" className="fill-slate-600" opacity="0.7" />
      </g>

      {/* Monitor Stand */}
      <rect x="180" y="260" width="40" height="40" className="fill-slate-700 dark:fill-slate-800" />
      <rect x="140" y="300" width="120" height="10" rx="5" className="fill-slate-600 dark:fill-slate-700" />

      {/* Floating Elements */}
      <g opacity="0.4">
        <circle cx="60" cy="150" r="8" className="fill-indigo-400">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; -5,-10; 0,0"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="340" cy="200" r="6" className="fill-purple-400">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 5,10; 0,0"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </svg>
  );
}
