interface BVLogoProps {
  className?: string;
  /** compact = icon + stacked text (navbar); full = icon + side-by-side text (footer) */
  variant?: "compact" | "full";
}

export default function BVLogo({ className = "", variant = "compact" }: BVLogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Shield SVG */}
      <svg
        width="36"
        height="40"
        viewBox="0 0 36 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Shield path */}
        <path
          d="M18 1L2 8v12c0 10.5 6.9 20.3 16 23 9.1-2.7 16-12.5 16-23V8L18 1z"
          fill="white"
          fillOpacity="0.08"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* BV text inside shield */}
        <text
          x="18"
          y="24"
          textAnchor="middle"
          fill="white"
          fontSize="13"
          fontFamily="IBM Plex Sans, system-ui, sans-serif"
          fontWeight="700"
          letterSpacing="-0.5"
        >
          BV
        </text>
      </svg>

      {/* Wordmark */}
      {variant === "compact" ? (
        <div className="leading-none">
          <div className="text-white font-bold text-base tracking-wide">BV CYBER</div>
          <div className="text-[#00c8e0] font-bold text-base tracking-widest">GUARDIAN</div>
        </div>
      ) : (
        <div className="leading-none">
          <div className="text-white font-bold text-lg tracking-wide">BV CYBER</div>
          <div className="text-[#00c8e0] font-bold text-lg tracking-widest">GUARDIAN</div>
        </div>
      )}
    </div>
  );
}
