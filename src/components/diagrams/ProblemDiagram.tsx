const COMMON_PROPS = {
  viewBox: '0 0 600 220',
  className: 'w-full h-auto',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

export function ProblemDiagram() {
  const leftGridXs = [60, 110, 160]
  const leftGridYs = [80, 125, 170]
  const rightGridXs = [380, 430, 480]
  const rightGridYs = [80, 125, 170]
  const burstCx = 260
  const burstCy = 125

  const endpoints = [
    { x: 580, y: 50 },
    { x: 580, y: 95 },
    { x: 580, y: 140 },
    { x: 580, y: 185 },
  ]
  const branchStart = { x: 500, y: 125 }
  const preferredIdx = 1

  return (
    <svg {...COMMON_PROPS}>
      <g className="text-teal">
        {leftGridXs.map((x) =>
          leftGridYs.map((y) => (
            <circle key={`l-${x}-${y}`} cx={x} cy={y} r={3} fill="currentColor" stroke="none" />
          ))
        )}
        <line x1={180} y1={burstCy} x2={250} y2={burstCy} strokeWidth={2} />
        <polyline points={`244,120 250,${burstCy} 244,130`} strokeWidth={2} />
      </g>

      <g className="text-coral">
        <circle cx={burstCx} cy={burstCy} r={3} fill="currentColor" stroke="none" />
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const a = (Math.PI * 2 * i) / 6
          const x1 = burstCx + 7 * Math.cos(a)
          const y1 = burstCy + 7 * Math.sin(a)
          const x2 = burstCx + 16 * Math.cos(a)
          const y2 = burstCy + 16 * Math.sin(a)
          return <line key={`b-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth={1.5} />
        })}
      </g>

      <line
        x1={300}
        y1={30}
        x2={300}
        y2={200}
        strokeDasharray="3 4"
        className="text-teal"
        opacity={0.3}
      />

      <g className="text-teal">
        {rightGridXs.map((x) =>
          rightGridYs.map((y) => (
            <circle key={`r-${x}-${y}`} cx={x} cy={y} r={3} fill="currentColor" stroke="none" />
          ))
        )}
      </g>

      <polygon
        points="430,35 437,48 423,48"
        className="text-coral"
        fill="white"
      />

      {endpoints.map((e, i) => {
        const isPreferred = i === preferredIdx
        return (
          <path
            key={`br-${i}`}
            d={`M ${branchStart.x},${branchStart.y} C ${branchStart.x + 30},${branchStart.y} ${e.x - 30},${e.y} ${e.x},${e.y}`}
            className={isPreferred ? 'text-coral' : 'text-teal'}
            opacity={isPreferred ? 0.9 : 0.55}
            strokeWidth={1.5}
          />
        )
      })}

      <g className="text-teal">
        <polygon
          points={`${endpoints[0].x},${endpoints[0].y - 6} ${endpoints[0].x - 6},${endpoints[0].y + 5} ${endpoints[0].x + 6},${endpoints[0].y + 5}`}
          fill="white"
          className="text-coral"
        />
        <rect
          x={endpoints[1].x - 6}
          y={endpoints[1].y - 6}
          width={12}
          height={12}
          fill="white"
          className="text-coral"
        />
        <polygon
          points={`${endpoints[2].x},${endpoints[2].y - 7} ${endpoints[2].x + 7},${endpoints[2].y - 2} ${endpoints[2].x + 4},${endpoints[2].y + 6} ${endpoints[2].x - 4},${endpoints[2].y + 6} ${endpoints[2].x - 7},${endpoints[2].y - 2}`}
          fill="white"
        />
        <circle cx={endpoints[3].x} cy={endpoints[3].y} r={6} fill="white" />
      </g>
    </svg>
  )
}

export default ProblemDiagram
