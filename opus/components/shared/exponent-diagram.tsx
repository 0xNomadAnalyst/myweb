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
        className="mx-auto w-[94%]"
        role="img"
        aria-label="Exponent flow: base token wraps to SY, SY splits into PT plus YT, and SY plus PT liquidity supports fixed yield trading."
      >
        <defs>
          <linearGradient id="exp-corner-top-accent" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={diagramTopEdgeAccentStrong} />
            <stop offset="70%" stopColor={diagramTopEdgeAccentSoft} />
            <stop offset="92%" stopColor={diagramTopEdgeAccentTail} />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="exp-corner-left-accent" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={diagramEdgeAccentStrong} />
            <stop offset="22%" stopColor={diagramEdgeAccentSoft} />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <marker
            id="exp-arr"
            markerWidth="7"
            markerHeight="7"
            refX="6"
            refY="3.5"
            orient="auto"
          >
            <path d="M0,0 L7,3.5 L0,7 z" fill={diagramPalette.markerFill} />
          </marker>
        </defs>

        <g transform="translate(0 8)">
          <rect x="0" y="0" width="228" height="300" rx="8" {...group} />
          <path d="M0.9,188 L0.9,8 Q0.9,0.9 8,0.9" stroke="url(#exp-corner-left-accent)" strokeWidth="0.75" fill="none" />
          <rect x="8" y="0.5" width="178" height="0.72" fill="url(#exp-corner-top-accent)" />
          <path
            d="M0.9,188 L0.9,8 Q0.9,0.9 8,0.9"
            stroke="url(#exp-corner-left-accent)"
            strokeWidth="1.45"
            opacity="0.34"
            fill="none"
            style={{ filter: diagramEdgeAccentFilter }}
          />
          <rect
            x="8"
            y="0.7"
            width="178"
            height="1.1"
            fill="url(#exp-corner-top-accent)"
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
          <line x1="114" y1="136" x2="114" y2="174" {...connector} markerEnd="url(#exp-arr)" />
          <text
            x="126"
            y="156"
            fontFamily="monospace"
            fontSize="8"
            fill={diagramPalette.annotationColor}
          >
            wrap
          </text>
          <line x1="102" y1="174" x2="102" y2="136" {...connector} markerEnd="url(#exp-arr)" />
          <text
            x="90"
            y="156"
            fontFamily="monospace"
            fontSize="8"
            fill={diagramPalette.annotationColor}
            textAnchor="end"
          >
            unwrap
          </text>

          <rect x="286" y="0" width="228" height="300" rx="8" {...group} />
          <path d="M286.9,188 L286.9,8 Q286.9,0.9 294,0.9" stroke="url(#exp-corner-left-accent)" strokeWidth="0.75" fill="none" />
          <rect x="294" y="0.5" width="178" height="0.72" fill="url(#exp-corner-top-accent)" />
          <path
            d="M286.9,188 L286.9,8 Q286.9,0.9 294,0.9"
            stroke="url(#exp-corner-left-accent)"
            strokeWidth="1.45"
            opacity="0.34"
            fill="none"
            style={{ filter: diagramEdgeAccentFilter }}
          />
          <rect
            x="294"
            y="0.7"
            width="178"
            height="1.1"
            fill="url(#exp-corner-top-accent)"
            opacity="0.26"
            style={{ filter: diagramEdgeAccentFilter }}
          />
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
          <line x1="400" y1="136" x2="400" y2="174" {...connector} markerEnd="url(#exp-arr)" />
          <text
            x="413"
            y="156"
            fontFamily="monospace"
            fontSize="8"
            fill={diagramPalette.annotationColor}
          >
            split 1:1
          </text>
          <line x1="388" y1="174" x2="388" y2="136" {...connector} markerEnd="url(#exp-arr)" />
          <text
            x="376"
            y="156"
            fontFamily="monospace"
            fontSize="8"
            fill={diagramPalette.annotationColor}
            textAnchor="end"
          >
            merge pair
          </text>

          <rect x="572" y="0" width="228" height="300" rx="8" {...group} />
          <path d="M572.9,188 L572.9,8 Q572.9,0.9 580,0.9" stroke="url(#exp-corner-left-accent)" strokeWidth="0.75" fill="none" />
          <rect x="580" y="0.5" width="178" height="0.72" fill="url(#exp-corner-top-accent)" />
          <path
            d="M572.9,188 L572.9,8 Q572.9,0.9 580,0.9"
            stroke="url(#exp-corner-left-accent)"
            strokeWidth="1.45"
            opacity="0.34"
            fill="none"
            style={{ filter: diagramEdgeAccentFilter }}
          />
          <rect
            x="580"
            y="0.7"
            width="178"
            height="1.1"
            fill="url(#exp-corner-top-accent)"
            opacity="0.26"
            style={{ filter: diagramEdgeAccentFilter }}
          />
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
          <line x1="680" y1="174" x2="680" y2="136" {...connector} markerEnd="url(#exp-arr)" />
          <text
            x="667"
            y="156"
            fontFamily="monospace"
            fontSize="8"
            fill={diagramPalette.annotationColor}
            textAnchor="end"
          >
            deposit
          </text>
          <line x1="692" y1="136" x2="692" y2="174" {...connector} markerEnd="url(#exp-arr)" />
          <text
            x="699"
            y="156"
            fontFamily="monospace"
            fontSize="8"
            fill={diagramPalette.annotationColor}
          >
            fees
          </text>

          <line x1="228" y1="110" x2="286" y2="110" {...dash} markerEnd="url(#exp-arr)" />
          <text
            x="257"
            y="100"
            fontFamily="monospace"
            fontSize="8"
            fill={diagramPalette.annotationColor}
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
            fill={diagramPalette.annotationColor}
            textAnchor="middle"
          >
            PT to AMM
          </text>
        </g>
      </svg>
    </>
  );
}
