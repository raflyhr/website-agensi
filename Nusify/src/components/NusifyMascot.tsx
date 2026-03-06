const NusifyMascot = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_20px_50px_rgba(59,130,246,0.3)] animate-float"
      >
        {/* Gradients Definition */}
        <defs>
          <linearGradient
            id="body-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <filter id="eye-glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="wing-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        {/* Main Body (Round Owl Shape) */}
        <rect
          x="40"
          y="50"
          width="160"
          height="150"
          rx="80"
          fill="url(#body-gradient)"
        />

        {/* Tech Wings (Minimalist) */}
        <path
          d="M40 100 Q10 120 40 160"
          stroke="white"
          strokeWidth="2"
          strokeOpacity="0.3"
          fill="none"
        />
        <path
          d="M200 100 Q230 120 200 160"
          stroke="white"
          strokeWidth="2"
          strokeOpacity="0.3"
          fill="none"
        />

        {/* Digital Eyes Container (Goggles Style) */}
        <rect
          x="65"
          y="85"
          width="110"
          height="45"
          rx="22.5"
          fill="rgba(15, 23, 42, 0.4)"
          stroke="white"
          strokeWidth="1"
          strokeOpacity="0.1"
        />

        {/* Left Digital Eye */}
        <g className="animate-pulse">
          <rect
            x="82"
            y="98"
            width="18"
            height="18"
            rx="4"
            fill="white"
            filter="url(#eye-glow)"
          />
          <rect x="86" y="102" width="10" height="10" rx="2" fill="#3b82f6" />
        </g>

        {/* Right Digital Eye */}
        <g className="animate-pulse" style={{ animationDelay: "0.2s" }}>
          <rect
            x="140"
            y="98"
            width="18"
            height="18"
            rx="4"
            fill="white"
            filter="url(#eye-glow)"
          />
          <rect x="144" y="102" width="10" height="10" rx="2" fill="#3b82f6" />
        </g>

        {/* Tech Beak (Minimalist Yellow) */}
        <path d="M115 135 L125 135 L120 145 Z" fill="#fbbf24" />

        {/* Circuit Pattern on Belly */}
        <g opacity="0.1">
          <circle cx="120" cy="170" r="15" stroke="white" strokeWidth="1" />
          <line
            x1="120"
            y1="155"
            x2="120"
            y2="145"
            stroke="white"
            strokeWidth="1"
          />
          <line
            x1="105"
            y1="170"
            x2="95"
            y2="170"
            stroke="white"
            strokeWidth="1"
          />
          <line
            x1="135"
            y1="170"
            x2="145"
            y2="170"
            stroke="white"
            strokeWidth="1"
          />
        </g>

        {/* Tech Ears/Antennas */}
        <path
          d="M70 55 L55 35"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeOpacity="0.5"
        />
        <path
          d="M170 55 L185 35"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeOpacity="0.5"
        />

        {/* Glowing Tip (Connectivity Indicator) */}
        <circle cx="55" cy="35" r="4" fill="#fbbf24" className="animate-ping" />
        <circle
          cx="185"
          cy="35"
          r="4"
          fill="#fbbf24"
          className="animate-ping"
          style={{ animationDelay: "0.5s" }}
        />

        {/* Digital Particles around mascot */}
        <circle
          cx="30"
          cy="80"
          r="2"
          fill="white"
          opacity="0.4"
          className="animate-float"
        />
        <circle
          cx="210"
          cy="180"
          r="3"
          fill="#3b82f6"
          opacity="0.6"
          className="animate-bounce-slow"
        />
        <rect
          x="220"
          y="60"
          width="4"
          height="4"
          fill="#8b5cf6"
          opacity="0.5"
          transform="rotate(45 222 62)"
          className="animate-pulse"
        />
      </svg>

      {/* Floating Shadow Below */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-4 bg-slate-900/10 dark:bg-white/5 blur-xl rounded-full scale-x-150 animate-pulse"></div>
    </div>
  );
};

export default NusifyMascot;
