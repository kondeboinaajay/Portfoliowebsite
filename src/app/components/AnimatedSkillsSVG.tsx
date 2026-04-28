export default function AnimatedSkillsSVG() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="skillsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" className="[stop-color:rgb(236,72,153)]" />
          <stop offset="100%" className="[stop-color:rgb(251,146,60)]" />
        </linearGradient>
      </defs>

      {/* Central Hub */}
      <circle cx="200" cy="200" r="30" fill="url(#skillsGradient)" opacity="0.9">
        <animate attributeName="r" values="30;35;30" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Orbiting Skill Nodes */}
      <g>
        <circle cx="200" cy="120" r="20" className="fill-blue-500" opacity="0.8">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 200 200"
            to="360 200 200"
            dur="10s"
            repeatCount="indefinite"
          />
        </circle>

        <circle cx="280" cy="160" r="18" className="fill-purple-500" opacity="0.7">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="45 200 200"
            to="405 200 200"
            dur="10s"
            repeatCount="indefinite"
          />
        </circle>

        <circle cx="300" cy="240" r="22" className="fill-pink-500" opacity="0.8">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="90 200 200"
            to="450 200 200"
            dur="10s"
            repeatCount="indefinite"
          />
        </circle>

        <circle cx="240" cy="300" r="19" className="fill-orange-500" opacity="0.7">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="135 200 200"
            to="495 200 200"
            dur="10s"
            repeatCount="indefinite"
          />
        </circle>

        <circle cx="160" cy="300" r="21" className="fill-yellow-500" opacity="0.8">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="180 200 200"
            to="540 200 200"
            dur="10s"
            repeatCount="indefinite"
          />
        </circle>

        <circle cx="100" cy="240" r="17" className="fill-green-500" opacity="0.7">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="225 200 200"
            to="585 200 200"
            dur="10s"
            repeatCount="indefinite"
          />
        </circle>

        <circle cx="120" cy="160" r="20" className="fill-cyan-500" opacity="0.8">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="270 200 200"
            to="630 200 200"
            dur="10s"
            repeatCount="indefinite"
          />
        </circle>

        <circle cx="160" cy="140" r="16" className="fill-indigo-500" opacity="0.7">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="315 200 200"
            to="675 200 200"
            dur="10s"
            repeatCount="indefinite"
          />
        </circle>
      </g>

      {/* Connecting Lines */}
      <g opacity="0.2" stroke="white" strokeWidth="1" fill="none">
        <line x1="200" y1="200" x2="200" y2="120">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 200 200"
            to="360 200 200"
            dur="10s"
            repeatCount="indefinite"
          />
        </line>
        <line x1="200" y1="200" x2="280" y2="160">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="45 200 200"
            to="405 200 200"
            dur="10s"
            repeatCount="indefinite"
          />
        </line>
        <line x1="200" y1="200" x2="300" y2="240">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="90 200 200"
            to="450 200 200"
            dur="10s"
            repeatCount="indefinite"
          />
        </line>
        <line x1="200" y1="200" x2="240" y2="300">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="135 200 200"
            to="495 200 200"
            dur="10s"
            repeatCount="indefinite"
          />
        </line>
      </g>

      {/* Center Icon */}
      <text x="200" y="210" textAnchor="middle" className="fill-white text-2xl">⚡</text>
    </svg>
  );
}
