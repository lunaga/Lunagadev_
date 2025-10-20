"use client"

export function WolfLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Moon */}
      <circle cx="100" cy="60" r="35" fill="currentColor" className="text-primary/30 animate-glow" />

      {/* Wolf silhouette */}
      <g className="text-primary" fill="currentColor">
        {/* Body */}
        <ellipse cx="100" cy="140" rx="25" ry="35" />

        {/* Head */}
        <ellipse cx="100" cy="110" rx="20" ry="22" />

        {/* Snout */}
        <ellipse cx="100" cy="120" rx="12" ry="10" />

        {/* Ears */}
        <path d="M 85 100 L 80 85 L 90 95 Z" />
        <path d="M 115 100 L 120 85 L 110 95 Z" />

        {/* Howling pose - head tilted up */}
        <path d="M 100 110 Q 95 90 100 75" strokeWidth="3" stroke="currentColor" fill="none" />

        {/* Front legs */}
        <rect x="90" y="165" width="6" height="25" rx="3" />
        <rect x="104" y="165" width="6" height="25" rx="3" />

        {/* Tail */}
        <path d="M 75 145 Q 60 140 55 155" strokeWidth="8" stroke="currentColor" fill="none" strokeLinecap="round" />
      </g>

      {/* Howl lines */}
      <g className="text-primary/40" stroke="currentColor" fill="none" strokeWidth="2">
        <path d="M 100 70 Q 90 50 85 40" className="animate-pulse" />
        <path d="M 100 70 Q 100 45 100 35" className="animate-pulse" style={{ animationDelay: "0.2s" }} />
        <path d="M 100 70 Q 110 50 115 40" className="animate-pulse" style={{ animationDelay: "0.4s" }} />
      </g>
    </svg>
  )
}
