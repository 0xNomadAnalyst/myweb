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

export function SystemDiagram() {
  return (
    <>
      <div className="mb-5 flex items-baseline justify-between">
        <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground/90">
          Protocol Account Architecture
        </p>
        <p className="font-mono text-[10px] text-muted-foreground/88">
          Kamino Lending
        </p>
      </div>
      <svg
        viewBox="0 0 800 300"
        fill="none"
        className="w-full"
        role="img"
        aria-label="Kamino lending protocol account architecture: Market owns Reserves, Obligations hold positions in Reserves and belong to Market"
      >
        <defs>
          <marker
            id="arr-down"
            markerWidth="7"
            markerHeight="7"
            refX="3.5"
            refY="7"
            orient="auto"
          >
            <path
              d="M0.5,0 L3.5,6.5 L6.5,0"
              fill="none"
              stroke="rgba(156,163,175,0.35)"
              strokeWidth="1.2"
            />
          </marker>
        </defs>

        {/* – Left group: Lending Market – */}
        <rect x="0" y="0" width="350" height="300" rx="8" {...group} />
        <text
          x="18"
          y="24"
          fontFamily="monospace"
          fontSize="9"
          fill={labelColor}
          letterSpacing="0.12em"
        >
          LENDING MARKET
        </text>

        <rect x="18" y="40" width="314" height="44" rx="6" {...node} />
        <text
          x="175"
          y="67"
          fontFamily="sans-serif"
          fontSize="13"
          fill={textColor}
          textAnchor="middle"
        >
          Market Account
        </text>

        <line
          x1="175"
          y1="84"
          x2="175"
          y2="118"
          stroke="rgba(156,163,175,0.3)"
          strokeWidth="1"
          markerEnd="url(#arr-down)"
        />
        <text
          x="189"
          y="106"
          fontFamily="monospace"
          fontSize="8.5"
          fill={labelColor}
        >
          owns
        </text>

        <text
          x="18"
          y="140"
          fontFamily="monospace"
          fontSize="8.5"
          fill={labelColor}
          letterSpacing="0.1em"
        >
          RESERVE ACCOUNTS
        </text>

        <rect x="18" y="150" width="314" height="34" rx="4" {...node} />
        <text x="32" y="172" fontFamily="sans-serif" fontSize="11.5" fill={textColor}>
          Reserve: USDG
        </text>
        <text
          x="318"
          y="172"
          fontFamily="monospace"
          fontSize="8.5"
          fill={labelColor}
          textAnchor="end"
        >
          borrow
        </text>

        <rect x="18" y="190" width="314" height="34" rx="4" {...node} />
        <text x="32" y="212" fontFamily="sans-serif" fontSize="11.5" fill={textColor}>
          Reserve: USDC
        </text>
        <text
          x="318"
          y="212"
          fontFamily="monospace"
          fontSize="8.5"
          fill={labelColor}
          textAnchor="end"
        >
          borrow
        </text>

        <rect x="18" y="230" width="314" height="34" rx="4" {...node} />
        <text x="32" y="252" fontFamily="sans-serif" fontSize="11.5" fill={textColor}>
          Reserve: SOL
        </text>
        <text
          x="318"
          y="252"
          fontFamily="monospace"
          fontSize="8.5"
          fill={labelColor}
          textAnchor="end"
        >
          collateral
        </text>

        {/* – Right group: Obligation Accounts – */}
        <rect x="455" y="0" width="345" height="300" rx="8" {...group} />
        <text
          x="473"
          y="24"
          fontFamily="monospace"
          fontSize="9"
          fill={labelColor}
          letterSpacing="0.12em"
        >
          OBLIGATION ACCOUNTS
        </text>

        <rect x="473" y="50" width="309" height="44" rx="6" {...node} />
        <text x="487" y="77" fontFamily="sans-serif" fontSize="13" fill={textColor}>
          Obligation
        </text>
        <text
          x="768"
          y="77"
          fontFamily="monospace"
          fontSize="9.5"
          fill={labelColor}
          textAnchor="end"
        >
          user_1
        </text>

        <rect x="473" y="110" width="309" height="44" rx="6" {...node} />
        <text x="487" y="137" fontFamily="sans-serif" fontSize="13" fill={textColor}>
          Obligation
        </text>
        <text
          x="768"
          y="137"
          fontFamily="monospace"
          fontSize="9.5"
          fill={labelColor}
          textAnchor="end"
        >
          user_2
        </text>

        <rect x="473" y="170" width="309" height="44" rx="6" {...node} />
        <text x="487" y="197" fontFamily="sans-serif" fontSize="13" fill={textColor}>
          Obligation
        </text>
        <text
          x="768"
          y="197"
          fontFamily="monospace"
          fontSize="9.5"
          fill={labelColor}
          textAnchor="end"
        >
          user_n
        </text>

        {/* – Connections – */}
        <line x1="455" y1="62" x2="332" y2="62" {...dash} />
        <text
          x="393"
          y="54"
          fontFamily="monospace"
          fontSize="8"
          fill="rgba(188,203,221,0.74)"
          textAnchor="middle"
        >
          belongs to
        </text>

        <path d="M473,72 C415,72 385,167 332,167" {...dash} />
        <path d="M473,132 C415,132 385,207 332,207" {...dash} />
        <path d="M473,192 C415,192 385,247 332,247" {...dash} />
        <text
          x="393"
          y="155"
          fontFamily="monospace"
          fontSize="8"
          fill="rgba(188,203,221,0.74)"
          textAnchor="middle"
        >
          positions
        </text>
      </svg>
    </>
  );
}

