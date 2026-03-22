const node = {
  fill: "#1b2942",
  stroke: "rgba(235,245,255,0.14)",
  strokeWidth: 1,
};

const group = {
  fill: "none",
  stroke: "rgba(192,214,238,0.12)",
  strokeWidth: 1,
};

const dash = {
  stroke: "rgba(176,191,209,0.42)",
  strokeWidth: 1.1,
  strokeDasharray: "5 4",
  fill: "none",
};

const labelColor = "rgba(183,202,224,0.82)";
const textColor = "rgba(237, 244, 252, 0.97)";

export function ExponentDiagram() {
  return (
    <>
      <div className="mb-5 flex items-baseline justify-between">
        <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground/90">
          Yield Derivative Flow
        </p>
        <p className="font-mono text-[10px] text-muted-foreground/88">
          Exponent
        </p>
      </div>
      <svg
        viewBox="0 0 800 314"
        fill="none"
        className="w-full"
        role="img"
        aria-label="Exponent flow: base token wraps to SY, SY splits into PT plus YT, and SY plus PT liquidity supports fixed yield trading."
      >
        <defs>
          <marker
            id="exp-arr"
            markerWidth="7"
            markerHeight="7"
            refX="6"
            refY="3.5"
            orient="auto"
          >
            <path d="M0,0 L7,3.5 L0,7 z" fill="rgba(156,163,175,0.45)" />
          </marker>
        </defs>

        <g transform="translate(0 8)">
        <rect x="0" y="0" width="228" height="300" rx="8" {...group} />
        <text
          x="18"
          y="24"
          fontFamily="monospace"
          fontSize="9"
          fill={labelColor}
          letterSpacing="0.12em"
        >
          WRAPPING
        </text>
        <rect x="18" y="84" width="192" height="52" rx="6" {...node} />
        <text
          x="114"
          y="114"
          fontFamily="sans-serif"
          fontSize="12"
          fill={textColor}
          textAnchor="middle"
        >
          Base Token
        </text>
        <rect x="18" y="174" width="192" height="52" rx="6" {...node} />
        <text
          x="114"
          y="204"
          fontFamily="sans-serif"
          fontSize="12"
          fill={textColor}
          textAnchor="middle"
        >
          SY
        </text>
        <line
          x1="114"
          y1="136"
          x2="114"
          y2="174"
          stroke="rgba(176,191,209,0.38)"
          strokeWidth="1.1"
          markerEnd="url(#exp-arr)"
        />
        <text
          x="126"
          y="156"
          fontFamily="monospace"
          fontSize="8"
          fill={labelColor}
        >
          wrap
        </text>
        <line
          x1="102"
          y1="174"
          x2="102"
          y2="136"
          stroke="rgba(176,191,209,0.38)"
          strokeWidth="1.1"
          markerEnd="url(#exp-arr)"
        />
        <text
          x="90"
          y="156"
          fontFamily="monospace"
          fontSize="8"
          fill={labelColor}
          textAnchor="end"
        >
          unwrap
        </text>

        <rect x="286" y="0" width="228" height="300" rx="8" {...group} />
        <text
          x="304"
          y="24"
          fontFamily="monospace"
          fontSize="9"
          fill={labelColor}
          letterSpacing="0.12em"
        >
          STRIPPING
        </text>
        <rect x="304" y="84" width="192" height="52" rx="6" {...node} />
        <text
          x="400"
          y="114"
          fontFamily="sans-serif"
          fontSize="12"
          fill={textColor}
          textAnchor="middle"
        >
          SY
        </text>
        <rect x="304" y="174" width="192" height="52" rx="6" {...node} />
        <text
          x="400"
          y="202"
          fontFamily="sans-serif"
          fontSize="12"
          fill={textColor}
          textAnchor="middle"
        >
          PT + YT
        </text>
        <text
          x="400"
          y="217"
          fontFamily="monospace"
          fontSize="8.5"
          fill={labelColor}
          textAnchor="middle"
        >
          per maturity
        </text>
        <line
          x1="400"
          y1="136"
          x2="400"
          y2="174"
          stroke="rgba(176,191,209,0.38)"
          strokeWidth="1.1"
          markerEnd="url(#exp-arr)"
        />
        <text
          x="413"
          y="156"
          fontFamily="monospace"
          fontSize="8"
          fill={labelColor}
        >
          split 1:1
        </text>
        <line
          x1="388"
          y1="174"
          x2="388"
          y2="136"
          stroke="rgba(176,191,209,0.38)"
          strokeWidth="1.1"
          markerEnd="url(#exp-arr)"
        />
        <text
          x="376"
          y="156"
          fontFamily="monospace"
          fontSize="8"
          fill={labelColor}
          textAnchor="end"
        >
          merge pair
        </text>

        <rect x="572" y="0" width="228" height="300" rx="8" {...group} />
        <text
          x="590"
          y="24"
          fontFamily="monospace"
          fontSize="9"
          fill={labelColor}
          letterSpacing="0.12em"
        >
          YIELD TRADING AMM
        </text>
        <rect x="590" y="84" width="192" height="52" rx="6" {...node} />
        <text
          x="686"
          y="110"
          fontFamily="sans-serif"
          fontSize="12"
          fill={textColor}
          textAnchor="middle"
        >
          SY + PT Pool
        </text>
        <text
          x="686"
          y="124"
          fontFamily="monospace"
          fontSize="8.5"
          fill={labelColor}
          textAnchor="middle"
        >
          fixed yield pricing
        </text>
        <rect x="590" y="174" width="192" height="52" rx="6" {...node} />
        <text
          x="686"
          y="204"
          fontFamily="sans-serif"
          fontSize="12"
          fill={textColor}
          textAnchor="middle"
        >
          LP Providers
        </text>
        <line
          x1="680"
          y1="174"
          x2="680"
          y2="136"
          stroke="rgba(176,191,209,0.38)"
          strokeWidth="1.1"
          markerEnd="url(#exp-arr)"
        />
        <text
          x="667"
          y="156"
          fontFamily="monospace"
          fontSize="8"
          fill={labelColor}
          textAnchor="end"
        >
          deposit
        </text>
        <line
          x1="692"
          y1="136"
          x2="692"
          y2="174"
          stroke="rgba(176,191,209,0.38)"
          strokeWidth="1.1"
          markerEnd="url(#exp-arr)"
        />
        <text
          x="699"
          y="156"
          fontFamily="monospace"
          fontSize="8"
          fill={labelColor}
        >
          fees
        </text>

        <line x1="228" y1="110" x2="286" y2="110" {...dash} markerEnd="url(#exp-arr)" />
        <text
          x="257"
          y="100"
          fontFamily="monospace"
          fontSize="8"
          fill={labelColor}
          textAnchor="middle"
        >
          SY flow
        </text>
        <line x1="514" y1="110" x2="572" y2="110" {...dash} markerEnd="url(#exp-arr)" />
        <text
          x="543"
          y="100"
          fontFamily="monospace"
          fontSize="8"
          fill={labelColor}
          textAnchor="middle"
        >
          PT to AMM
        </text>
        </g>
      </svg>
    </>
  );
}
