// Line-art schematic diagrams for Engine cards.
// Shared style: viewBox 0 0 200 120, currentColor strokes (text-teal),
// white fills, 1.5 stroke width, no gradients/shadows.

const COMMON_PROPS = {
  viewBox: '0 0 200 120',
  className: 'w-full h-auto',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

// D1: Multiple sensor inputs (camera / sat / lidar / map) → 3D world cube
export function BuildWorldDiagram() {
  const rectX = 10
  const rectW = 22
  const rectH = 15
  const ys = [15, 35, 55, 75]

  // Isometric cube anchored around (150, 60), edge length ~36
  const cx = 150
  const cy = 60
  const s = 22 // half edge for iso projection
  // top face: top, right, bottom, left
  const top = { x: cx, y: cy - s }
  const right = { x: cx + s * 1.4, y: cy - s / 2 }
  const bottom = { x: cx, y: cy }
  const left = { x: cx - s * 1.4, y: cy - s / 2 }
  // bottom verts (drop straight down by s*1.1)
  const drop = s * 1.1
  const rightB = { x: right.x, y: right.y + drop }
  const bottomB = { x: bottom.x, y: bottom.y + drop }
  const leftB = { x: left.x, y: left.y + drop }

  return (
    <svg {...COMMON_PROPS}>
      {/* 4 sensor input rects */}
      {ys.map((y, i) => (
        <g key={i}>
          <rect x={rectX} y={y} width={rectW} height={rectH} fill="white" />
          {/* motif inside each rect */}
          {i === 0 && (
            // camera grid (small X)
            <g opacity={0.7}>
              <line x1={rectX + 5} y1={y + 4} x2={rectX + rectW - 5} y2={y + rectH - 4} strokeWidth={1} />
              <line x1={rectX + rectW - 5} y1={y + 4} x2={rectX + 5} y2={y + rectH - 4} strokeWidth={1} />
            </g>
          )}
          {i === 1 && (
            // sat (dotted circle)
            <circle
              cx={rectX + rectW / 2}
              cy={y + rectH / 2}
              r={4}
              strokeDasharray="1.5 1.5"
              strokeWidth={1}
              opacity={0.75}
            />
          )}
          {i === 2 && (
            // lidar dot grid
            <g fill="currentColor" stroke="none" opacity={0.7}>
              {[0, 1, 2].map((row) =>
                [0, 1, 2, 3].map((col) => (
                  <circle
                    key={`${row}-${col}`}
                    cx={rectX + 4 + col * 4.5}
                    cy={y + 4 + row * 3.5}
                    r={0.8}
                  />
                ))
              )}
            </g>
          )}
          {i === 3 && (
            // map zigzag
            <polyline
              points={`${rectX + 4},${y + rectH - 4} ${rectX + 8},${y + 5} ${rectX + 12},${y + rectH - 5} ${rectX + 16},${y + 4} ${rectX + rectW - 4},${y + rectH - 5}`}
              strokeWidth={1}
              opacity={0.75}
            />
          )}
        </g>
      ))}

      {/* Horizontal arrow from rect column to cube */}
      <g>
        <line x1={rectX + rectW + 6} y1={60} x2={cx - s * 1.4 - 8} y2={60} />
        <polyline points={`${cx - s * 1.4 - 12},${56} ${cx - s * 1.4 - 8},${60} ${cx - s * 1.4 - 12},${64}`} />
      </g>

      {/* 3D cube wireframe (isometric) */}
      <g>
        {/* top face */}
        <polygon
          points={`${top.x},${top.y} ${right.x},${right.y} ${bottom.x},${bottom.y} ${left.x},${left.y}`}
          fill="white"
        />
        {/* front-right face */}
        <polygon
          points={`${right.x},${right.y} ${bottom.x},${bottom.y} ${bottomB.x},${bottomB.y} ${rightB.x},${rightB.y}`}
          fill="white"
        />
        {/* front-left face */}
        <polygon
          points={`${left.x},${left.y} ${bottom.x},${bottom.y} ${bottomB.x},${bottomB.y} ${leftB.x},${leftB.y}`}
          fill="white"
        />
        {/* hidden back edges (dashed) */}
        <g strokeDasharray="2 2" opacity={0.45} strokeWidth={1}>
          <line x1={top.x} y1={top.y} x2={top.x} y2={top.y + drop} />
          <line x1={top.x} y1={top.y + drop} x2={rightB.x} y2={rightB.y} />
          <line x1={top.x} y1={top.y + drop} x2={leftB.x} y2={leftB.y} />
        </g>
      </g>
    </svg>
  )
}

// D2: Trajectories → Agent Foundation Model (hex) → behavior outputs
export function LearnAgentsDiagram() {
  const hex = { cx: 100, cy: 60, r: 18 }
  // hexagon points (flat-top)
  const hexPts = Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i
    return `${(hex.cx + hex.r * Math.cos(a)).toFixed(1)},${(hex.cy + hex.r * Math.sin(a)).toFixed(1)}`
  }).join(' ')

  // Left-side input curves: from varied (x,y) into hex left edge ~ (82, 60)
  const inputs = [
    { x: 8, y: 18 },
    { x: 6, y: 42 },
    { x: 8, y: 78 },
    { x: 10, y: 102 },
    { x: 22, y: 60 },
  ]
  const inEnd = { x: hex.cx - hex.r + 1, y: hex.cy }

  // Right-side output dots from hex right edge ~ (118, 60)
  const outStart = { x: hex.cx + hex.r - 1, y: hex.cy }
  const outputs = [
    { x: 168, y: 28 },
    { x: 178, y: 50 },
    { x: 178, y: 72 },
    { x: 168, y: 94 },
  ]

  return (
    <svg {...COMMON_PROPS}>
      {/* Input trajectory curves (navy, low opacity) */}
      <g opacity={0.5}>
        {inputs.map((p, i) => {
          // control point pulls towards mid-x
          const c1x = (p.x + inEnd.x) / 2
          const c1y = p.y
          const c2x = (p.x + inEnd.x) / 2
          const c2y = inEnd.y
          return (
            <path
              key={`in-${i}`}
              d={`M ${p.x},${p.y} C ${c1x},${c1y} ${c2x},${c2y} ${inEnd.x},${inEnd.y}`}
              strokeWidth={1}
            />
          )
        })}
      </g>

      {/* Output lines (coral) */}
      <g className="text-coral" opacity={0.7}>
        {outputs.map((p, i) => (
          <line key={`out-${i}`} x1={outStart.x} y1={outStart.y} x2={p.x} y2={p.y} strokeWidth={1} />
        ))}
      </g>

      {/* Hexagon node */}
      <polygon points={hexPts} fill="white" />
      {/* Inner core dot */}
      <circle cx={hex.cx} cy={hex.cy} r={3} fill="currentColor" stroke="none" />

      {/* Output dots */}
      <g className="text-coral" fill="currentColor" stroke="none">
        {outputs.map((p, i) => (
          <circle key={`d-${i}`} cx={p.x} cy={p.y} r={2.4} />
        ))}
      </g>
    </svg>
  )
}

// D3: Single decision → branching futures with varied endpoints
export function RollOutDiagram() {
  const start = { x: 25, y: 60 }
  const endpoints = [
    { x: 170, y: 20 }, // up triangle (preferred / good)
    { x: 170, y: 45 }, // square (neutral)
    { x: 170, y: 75 }, // down triangle (degraded)
    { x: 170, y: 100 }, // diamond (edge case)
  ]

  return (
    <svg {...COMMON_PROPS}>
      {/* Branching bezier curves */}
      {endpoints.map((e, i) => {
        const c1x = start.x + 55
        const c1y = start.y
        const c2x = e.x - 35
        const c2y = e.y
        const isPreferred = i === 0
        return (
          <path
            key={`br-${i}`}
            d={`M ${start.x},${start.y} C ${c1x},${c1y} ${c2x},${c2y} ${e.x},${e.y}`}
            strokeWidth={1.5}
            className={isPreferred ? 'text-coral' : undefined}
            opacity={isPreferred ? 0.9 : 0.55}
          />
        )
      })}

      {/* Start dot (navy, filled) */}
      <circle cx={start.x} cy={start.y} r={5} fill="currentColor" stroke="none" />
      <circle cx={start.x} cy={start.y} r={8} opacity={0.25} />

      {/* Endpoint marks */}
      {/* up triangle (preferred) */}
      <polygon
        points={`${endpoints[0].x},${endpoints[0].y - 5} ${endpoints[0].x - 5},${endpoints[0].y + 4} ${endpoints[0].x + 5},${endpoints[0].y + 4}`}
        fill="white"
        className="text-coral"
      />
      {/* square */}
      <rect
        x={endpoints[1].x - 4.5}
        y={endpoints[1].y - 4.5}
        width={9}
        height={9}
        fill="white"
      />
      {/* down triangle */}
      <polygon
        points={`${endpoints[2].x},${endpoints[2].y + 5} ${endpoints[2].x - 5},${endpoints[2].y - 4} ${endpoints[2].x + 5},${endpoints[2].y - 4}`}
        fill="white"
      />
      {/* diamond */}
      <polygon
        points={`${endpoints[3].x},${endpoints[3].y - 5.5} ${endpoints[3].x + 5.5},${endpoints[3].y} ${endpoints[3].x},${endpoints[3].y + 5.5} ${endpoints[3].x - 5.5},${endpoints[3].y}`}
        fill="white"
      />
    </svg>
  )
}
