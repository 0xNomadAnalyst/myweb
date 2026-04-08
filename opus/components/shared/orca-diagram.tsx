import {
  createDiagramNodeStyle,
  diagramEdgeAccentSoft,
  diagramEdgeAccentFilter,
  diagramEdgeAccentStrong,
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

export function OrcaDiagram() {
  return (
    <>
      <div className="mb-5 flex items-baseline justify-between">
        <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground/90">
          Concentrated Liquidity Architecture
        </p>
        <p className="font-mono text-[10px] text-muted-foreground/88">
          Orca / Raydium
        </p>
      </div>
      <svg
        viewBox="0 0 800 300"
        fill="none"
        className="w-full"
        role="img"
        aria-label="DEX layout: token vaults and pool in left column, tick arrays in middle-right column, and position accounts with NFTs in right column."
      >
        <defs>
          <linearGradient id="dex-corner-top-accent" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={diagramEdgeAccentStrong} />
            <stop offset="22%" stopColor={diagramEdgeAccentSoft} />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="dex-corner-left-accent" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={diagramEdgeAccentStrong} />
            <stop offset="22%" stopColor={diagramEdgeAccentSoft} />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <marker
            id="dex-arr"
            markerWidth="7"
            markerHeight="7"
            refX="6"
            refY="3.5"
            orient="auto"
          >
            <path d="M0,0 L7,3.5 L0,7 z" fill={diagramPalette.markerFill} />
          </marker>
        </defs>
        <g transform="translate(0 10)">
          {/* Left column: vaults */}
          <rect x="14" y="20" width="220" height="118" rx="8" {...group} />
          <path d="M14.9,108 L14.9,28 Q14.9,20.9 22,20.9" stroke="url(#dex-corner-left-accent)" strokeWidth="0.75" fill="none" />
          <path d="M22,20.9 L152,20.9" stroke="url(#dex-corner-top-accent)" strokeWidth="0.75" fill="none" />
          <path
            d="M14.9,108 L14.9,28 Q14.9,20.9 22,20.9"
            stroke="url(#dex-corner-left-accent)"
            strokeWidth="1.45"
            opacity="0.34"
            fill="none"
            style={{ filter: diagramEdgeAccentFilter }}
          />
          <path
            d="M22,20.9 L152,20.9"
            stroke="url(#dex-corner-top-accent)"
            strokeWidth="1.45"
            opacity="0.34"
            fill="none"
            style={{ filter: diagramEdgeAccentFilter }}
          />
          <text
            x="32"
            y="42"
            fontFamily="monospace"
            fontSize="9"
            fill={labelColor}
            letterSpacing="0.12em"
          >
            TOKEN VAULTS
          </text>
          <rect x="30" y="72" width="88" height="42" rx="6" {...node} />
          <text
            x="74"
            y="98"
            fontFamily="sans-serif"
            fontSize="11.5"
            fill={textColor}
            textAnchor="middle"
          >
            Token Vault A
          </text>
          <rect x="130" y="72" width="88" height="42" rx="6" {...node} />
          <text
            x="174"
            y="98"
            fontFamily="sans-serif"
            fontSize="11.5"
            fill={textColor}
            textAnchor="middle"
          >
            Token Vault B
          </text>

          {/* Left column: pool strictly below vaults */}
          <rect x="14" y="156" width="220" height="118" rx="8" {...group} />
          <path d="M14.9,244 L14.9,164 Q14.9,156.9 22,156.9" stroke="url(#dex-corner-left-accent)" strokeWidth="0.75" fill="none" />
          <path d="M22,156.9 L152,156.9" stroke="url(#dex-corner-top-accent)" strokeWidth="0.75" fill="none" />
          <path
            d="M14.9,244 L14.9,164 Q14.9,156.9 22,156.9"
            stroke="url(#dex-corner-left-accent)"
            strokeWidth="1.45"
            opacity="0.34"
            fill="none"
            style={{ filter: diagramEdgeAccentFilter }}
          />
          <path
            d="M22,156.9 L152,156.9"
            stroke="url(#dex-corner-top-accent)"
            strokeWidth="1.45"
            opacity="0.34"
            fill="none"
            style={{ filter: diagramEdgeAccentFilter }}
          />
          <text
            x="32"
            y="178"
            fontFamily="monospace"
            fontSize="9"
            fill={labelColor}
            letterSpacing="0.12em"
          >
            POOL ACCOUNT
          </text>
          <rect x="30" y="192" width="188" height="54" rx="6" {...node} />
          <text
            x="124"
            y="213"
            fontFamily="sans-serif"
            fontSize="12"
            fill={textColor}
            textAnchor="middle"
          >
            Pool Account
          </text>
          <text
            x="124"
            y="229"
            fontFamily="monospace"
            fontSize="8.5"
            fill={labelColor}
            textAnchor="middle"
          >
            sqrtPrice + liquidity + tickCurrentIndex
          </text>

          {/* Middle-right: tick arrays (aligned top/bottom with positions) */}
          <rect x="284" y="20" width="220" height="254" rx="8" {...group} />
          <path d="M284.9,188 L284.9,28 Q284.9,20.9 292,20.9" stroke="url(#dex-corner-left-accent)" strokeWidth="0.75" fill="none" />
          <path d="M292,20.9 L448,20.9" stroke="url(#dex-corner-top-accent)" strokeWidth="0.75" fill="none" />
          <path
            d="M284.9,188 L284.9,28 Q284.9,20.9 292,20.9"
            stroke="url(#dex-corner-left-accent)"
            strokeWidth="1.45"
            opacity="0.34"
            fill="none"
            style={{ filter: diagramEdgeAccentFilter }}
          />
          <path
            d="M292,20.9 L448,20.9"
            stroke="url(#dex-corner-top-accent)"
            strokeWidth="1.45"
            opacity="0.34"
            fill="none"
            style={{ filter: diagramEdgeAccentFilter }}
          />
          <text
            x="302"
            y="42"
            fontFamily="monospace"
            fontSize="9"
            fill={labelColor}
            letterSpacing="0.12em"
          >
            TICKARRAY ACCOUNTS
          </text>
          <rect x="300" y="88" width="188" height="32" rx="6" {...node} />
          <text
            x="394"
            y="108"
            fontFamily="sans-serif"
            fontSize="11"
            fill={textColor}
            textAnchor="middle"
          >
            TickArray 1
          </text>
          <rect x="300" y="132" width="188" height="32" rx="6" {...node} />
          <text
            x="394"
            y="152"
            fontFamily="sans-serif"
            fontSize="11"
            fill={textColor}
            textAnchor="middle"
          >
            TickArray 2
          </text>
          <rect x="300" y="176" width="188" height="32" rx="6" {...node} />
          <text
            x="394"
            y="196"
            fontFamily="sans-serif"
            fontSize="11"
            fill={textColor}
            textAnchor="middle"
          >
            TickArray 3
          </text>

          {/* Right column: position accounts + NFTs (aligned top/bottom with tick arrays) */}
          <rect x="538" y="20" width="248" height="254" rx="8" {...group} />
          <path d="M538.9,188 L538.9,28 Q538.9,20.9 546,20.9" stroke="url(#dex-corner-left-accent)" strokeWidth="0.75" fill="none" />
          <path d="M546,20.9 L708,20.9" stroke="url(#dex-corner-top-accent)" strokeWidth="0.75" fill="none" />
          <path
            d="M538.9,188 L538.9,28 Q538.9,20.9 546,20.9"
            stroke="url(#dex-corner-left-accent)"
            strokeWidth="1.45"
            opacity="0.34"
            fill="none"
            style={{ filter: diagramEdgeAccentFilter }}
          />
          <path
            d="M546,20.9 L708,20.9"
            stroke="url(#dex-corner-top-accent)"
            strokeWidth="1.45"
            opacity="0.34"
            fill="none"
            style={{ filter: diagramEdgeAccentFilter }}
          />
          <text
            x="556"
            y="42"
            fontFamily="monospace"
            fontSize="9"
            fill={labelColor}
            letterSpacing="0.12em"
          >
            POSITION ACCOUNTS
          </text>

          <rect x="554" y="98" width="118" height="44" rx="6" {...node} />
          <text
            x="613"
            y="116"
            fontFamily="sans-serif"
            fontSize="11"
            fill={textColor}
            textAnchor="middle"
          >
            Position 1
          </text>
          <text
            x="613"
            y="129"
            fontFamily="monospace"
            fontSize="8"
            fill={labelColor}
            textAnchor="middle"
          >
            tickLower, tickUpper
          </text>
          <rect x="686" y="98" width="84" height="44" rx="6" {...node} />
          <text
            x="728"
            y="116"
            fontFamily="sans-serif"
            fontSize="10.5"
            fill={textColor}
            textAnchor="middle"
          >
            NFT 1
          </text>
          <text
            x="728"
            y="129"
            fontFamily="monospace"
            fontSize="7.8"
            fill={labelColor}
            textAnchor="middle"
          >
            positionMint
          </text>

          <rect x="554" y="154" width="118" height="44" rx="6" {...node} />
          <text
            x="613"
            y="172"
            fontFamily="sans-serif"
            fontSize="11"
            fill={textColor}
            textAnchor="middle"
          >
            Position 2
          </text>
          <text
            x="613"
            y="185"
            fontFamily="monospace"
            fontSize="8"
            fill={labelColor}
            textAnchor="middle"
          >
            tickLower, tickUpper
          </text>
          <rect x="686" y="154" width="84" height="44" rx="6" {...node} />
          <text
            x="728"
            y="172"
            fontFamily="sans-serif"
            fontSize="10.5"
            fill={textColor}
            textAnchor="middle"
          >
            NFT 2
          </text>
          <text
            x="728"
            y="185"
            fontFamily="monospace"
            fontSize="7.8"
            fill={labelColor}
            textAnchor="middle"
          >
            positionMint
          </text>

          {/* Connections */}
          <path
            d="M74,114 C84,145 100,170 110,192"
            {...connector}
            markerEnd="url(#dex-arr)"
          />
          <path
            d="M174,114 C168,142 150,168 138,192"
            {...connector}
            markerEnd="url(#dex-arr)"
          />
          <text
            x="156"
            y="152"
            fontFamily="monospace"
            fontSize="8"
            fill={diagramPalette.annotationColor}
          >
            held by pool
          </text>

          <path d="M218,212 C250,190 270,130 300,104" {...dash} markerEnd="url(#dex-arr)" />
          <path d="M218,219 C252,204 272,170 300,148" {...dash} markerEnd="url(#dex-arr)" />
          <path d="M218,226 C252,226 276,206 300,192" {...dash} markerEnd="url(#dex-arr)" />
          <text
            x="258"
            y="204"
            fontFamily="monospace"
            fontSize="8"
            fill={diagramPalette.annotationColor}
            textAnchor="middle"
          >
            partitions liquidity
          </text>

          <path d="M488,104 C516,104 534,112 554,120" {...dash} markerEnd="url(#dex-arr)" />
          <path d="M488,148 C516,150 534,166 554,176" {...dash} markerEnd="url(#dex-arr)" />
          <path d="M488,192 C516,192 534,184 554,176" {...dash} markerEnd="url(#dex-arr)" />
          <text
            x="520"
            y="160"
            fontFamily="monospace"
            fontSize="8"
            fill={diagramPalette.annotationColor}
            textAnchor="middle"
          >
            spans ranges
          </text>

          <path d="M672,120 C678,120 682,120 686,120" {...connector} markerEnd="url(#dex-arr)" />
          <path d="M672,176 C678,176 682,176 686,176" {...connector} markerEnd="url(#dex-arr)" />
        </g>
      </svg>
    </>
  );
}
