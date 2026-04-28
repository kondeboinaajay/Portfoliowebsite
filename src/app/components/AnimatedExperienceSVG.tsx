export default function AnimatedExperienceSVG() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="expGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" className="[stop-color:rgb(16,185,129)]" />
          <stop offset="100%" className="[stop-color:rgb(6,182,212)]" />
        </linearGradient>
      </defs>

      {/* Briefcase */}
      <rect x="120" y="150" width="160" height="120" rx="8" className="fill-slate-700 dark:fill-slate-800" />
      <rect x="130" y="140" width="140" height="20" rx="4" className="fill-slate-600 dark:fill-slate-700" />
      <rect x="180" y="130" width="40" height="15" rx="4" className="fill-slate-500 dark:fill-slate-600" />

      {/* Lock */}
      <circle cx="200" cy="210" r="15" className="fill-emerald-500" opacity="0.8" />
      <rect x="195" y="215" width="10" height="15" className="fill-emerald-500" opacity="0.8" />

      {/* Rising Stars/Achievements */}
      <g className="animate-pulse">
        <circle cx="150" cy="100" r="4" className="fill-yellow-400">
          <animate attributeName="cy" values="100;80;100" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="200" cy="90" r="5" className="fill-yellow-300">
          <animate attributeName="cy" values="90;70;90" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="250" cy="95" r="4" className="fill-yellow-400">
          <animate attributeName="cy" values="95;75;95" dur="2.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;1;0.3" dur="2.2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Growth Arrow */}
      <path d="M 80 320 L 200 240 L 320 220" stroke="url(#expGradient)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <animate attributeName="stroke-dasharray" values="0,500;500,0" dur="3s" repeatCount="indefinite" />
      </path>

      {/* Data Points */}
      <circle cx="80" cy="320" r="6" className="fill-emerald-500" />
      <circle cx="200" cy="240" r="6" className="fill-cyan-500" />
      <circle cx="320" cy="220" r="6" className="fill-emerald-400" />
    </svg>
  );
}
