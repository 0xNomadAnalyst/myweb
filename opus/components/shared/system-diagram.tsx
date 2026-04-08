import {
  createDiagramNodeStyle,
  diagramEdgeAccentSoft,
  diagramEdgeAccentFilter,
  diagramEdgeAccentStrong,
  diagramTopEdgeAccentSoft,
  diagramTopEdgeAccentStrong,
  diagramTopEdgeAccentTail,
  diagramConnectorStyle,
  diagramDashStyle,
  diagramGroupStyle,
  diagramPalette,
} from "@/components/shared/diagram-theme";

const node = createDiagramNodeStyle();
const group = diagramGroupStyle;
const dash = diagramDashStyle;
const connector = diagramConnectorStyle;
const labelColor = diagramPalette.labelColor;
const textColor = diagramPalette.textColor;

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
        viewBox="0 0 800 314"
        fill="none"
        className="mx-auto w-[94%]"
        role="img"
        aria-label="Kamino lending protocol account architecture: Market owns Reserves, Obligations hold positions in Reserves and belong to Market"
      >
        <defs>
          <linearGradient id="sys-corner-top-accent" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={diagramTopEdgeAccentStrong} />
            <stop offset="70%" stopColor={diagramTopEdgeAccentSoft} />
            <stop offset="92%" stopColor={diagramTopEdgeAccentTail} />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="sys-corner-left-accent" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={diagramEdgeAccentStrong} />
            <stop offset="22%" stopColor={diagramEdgeAccentSoft} />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
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
              stroke={diagramPalette.markerStroke}
              strokeWidth="1.2"
            />
          </marker>
        </defs>
        <g transform="translate(0 8)">
          {/* Left group: Lending Market */}
          <rect x="0" y="0" width="350" height="300" rx="8" {...group} />
          <path d="M0.9,188 L0.9,8 Q0.9,0.9 8,0.9" stroke="url(#sys-corner-left-accent)" strokeWidth="0.75" fill="none" />
          <rect x="8" y="0.5" width="276" height="0.72" fill="url(#sys-corner-top-accent)" />
          <path
            d="M0.9,188 L0.9,8 Q0.9,0.9 8,0.9"
            stroke="url(#sys-corner-left-accent)"
            strokeWidth="1.45"
            opacity="0.34"
            fill="none"
            style={{ filter: diagramEdgeAccentFilter }}
          />
          <rect
            x="8"
            y="0.7"
            width="276"
            height="1.1"
            fill="url(#sys-corner-top-accent)"
            opacity="0.26"
            style={{ filter: diagramEdgeAccentFilter }}
          />
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
            {...connector}
            markerEnd="url(#arr-down)"
          />
          <text
            x="189"
            y="106"
            fontFamily="monospace"
            fontSize="8.5"
            fill={diagramPalette.annotationColor}
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

          {/* Right group: Obligation Accounts */}
          <rect x="455" y="0" width="345" height="300" rx="8" {...group} />
          <path d="M455.9,188 L455.9,8 Q455.9,0.9 463,0.9" stroke="url(#sys-corner-left-accent)" strokeWidth="0.75" fill="none" />
          <rect x="463" y="0.5" width="273" height="0.72" fill="url(#sys-corner-top-accent)" />
          <path
            d="M455.9,188 L455.9,8 Q455.9,0.9 463,0.9"
            stroke="url(#sys-corner-left-accent)"
            strokeWidth="1.45"
            opacity="0.34"
            fill="none"
            style={{ filter: diagramEdgeAccentFilter }}
          />
          <rect
            x="463"
            y="0.7"
            width="273"
            height="1.1"
            fill="url(#sys-corner-top-accent)"
            opacity="0.26"
            style={{ filter: diagramEdgeAccentFilter }}
          />
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

          {/* Connections */}
          <line x1="455" y1="62" x2="332" y2="62" {...dash} />
          <text
            x="393"
            y="54"
            fontFamily="monospace"
            fontSize="8"
            fill={diagramPalette.annotationColor}
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
            fill={diagramPalette.annotationColor}
            textAnchor="middle"
          >
            positions
          </text>
        </g>
      </svg>
    </>
  );
}
