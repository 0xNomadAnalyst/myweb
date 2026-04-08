const accentOrangeRgb = "248, 169, 74"; // Matches --cta in globals.css

export const diagramPalette = {
  nodeFill: "#1b2942",
  nodeStroke: "rgba(235, 245, 255, 0.14)",
  groupStroke: "rgba(192,214,238,0.12)",
  groupFill: "rgba(7, 20, 38, 0.34)",
  dashStroke: `rgba(${accentOrangeRgb}, 0.42)`,
  connectorStroke: `rgba(${accentOrangeRgb}, 0.42)`,
  labelColor: "rgba(183,202,224,0.82)",
  textColor: "rgba(237, 244, 252, 0.97)",
  annotationColor: `rgba(${accentOrangeRgb}, 0.82)`,
  markerStroke: `rgba(${accentOrangeRgb}, 0.8)`,
  markerFill: `rgba(${accentOrangeRgb}, 0.76)`,
} as const;

export const diagramGroupStyle = {
  fill: diagramPalette.groupFill,
  stroke: diagramPalette.groupStroke,
  strokeWidth: 1,
  style: {
    filter:
      "drop-shadow(3px 4px 8px rgba(2, 8, 20, 0.34)) " +
      "drop-shadow(1px 1.5px 3px rgba(2, 8, 20, 0.22))",
  },
} as const;

export const diagramEdgeAccentStrong = `rgba(${accentOrangeRgb}, 0.64)`;
export const diagramEdgeAccentSoft = `rgba(${accentOrangeRgb}, 0.22)`;
export const diagramTopEdgeAccentStrong = `rgba(${accentOrangeRgb}, 0.86)`;
export const diagramTopEdgeAccentSoft = `rgba(${accentOrangeRgb}, 0.42)`;
export const diagramTopEdgeAccentTail = `rgba(${accentOrangeRgb}, 0.08)`;
export const diagramEdgeAccentFilter =
  `drop-shadow(0 0 0.7px rgba(${accentOrangeRgb}, 0.26)) ` +
  `drop-shadow(0 0 4px rgba(${accentOrangeRgb}, 0.12))`;

export const diagramDashStyle = {
  stroke: diagramPalette.dashStroke,
  strokeWidth: 1.1,
  strokeDasharray: "5 4",
  fill: "none",
} as const;

export const diagramConnectorStyle = {
  stroke: diagramPalette.connectorStroke,
  strokeWidth: 1.1,
  fill: "none",
} as const;

export function createDiagramNodeStyle() {
  return {
    fill: diagramPalette.nodeFill,
    stroke: diagramPalette.nodeStroke,
    strokeWidth: 1,
  } as const;
}
