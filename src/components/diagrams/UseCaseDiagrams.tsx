type Props = { className?: string }

const baseProps = {
  viewBox: '0 0 100 60',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

const cls = (extra?: string) => `w-full h-auto ${extra ?? ''}`.trim()

export function SignalLaneDiagram({ className }: Props) {
  return (
    <svg {...baseProps} className={cls(className)}>
      <line x1={10} y1={20} x2={90} y2={20} />
      <line x1={10} y1={40} x2={90} y2={40} />
      <rect x={45} y={22} width={10} height={16} fill="white" />
      <circle cx={50} cy={25} r={1.4} fill="currentColor" stroke="none" />
      <circle cx={50} cy={30} r={1.4} fill="currentColor" stroke="none" />
      <circle cx={50} cy={35} r={1.4} fill="currentColor" stroke="none" />
      <circle cx={50} cy={35} r={3} className="text-coral" strokeWidth={1.2} />
    </svg>
  )
}

export function EventSurgeDiagram({ className }: Props) {
  const dots = [
    [22, 24], [28, 22], [34, 26], [20, 32], [26, 34],
    [32, 32], [22, 38], [28, 40], [34, 38], [18, 28],
    [30, 28], [24, 30], [36, 30], [22, 36], [30, 36],
  ] as const
  return (
    <svg {...baseProps} className={cls(className)}>
      {dots.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={1.4} fill="currentColor" stroke="none" />
      ))}
      <line x1={42} y1={30} x2={56} y2={30} className="text-coral" strokeWidth={1.5} />
      <polyline points="52,27 56,30 52,33" className="text-coral" strokeWidth={1.5} />
      <circle cx={66} cy={30} r={6} fill="white" />
    </svg>
  )
}

export function ConstructionDiagram({ className }: Props) {
  return (
    <svg {...baseProps} className={cls(className)}>
      <line x1={10} y1={30} x2={38} y2={30} />
      <line x1={62} y1={30} x2={90} y2={30} />
      <g strokeWidth={1.2} opacity={0.7}>
        <line x1={40} y1={27} x2={45} y2={33} />
        <line x1={45} y1={27} x2={50} y2={33} />
        <line x1={50} y1={27} x2={55} y2={33} />
        <line x1={55} y1={27} x2={60} y2={33} />
      </g>
      <path
        d="M 35 30 C 38 45, 62 45, 65 30"
        className="text-coral"
        strokeDasharray="2 2"
      />
      <polyline points="62,32 65,30 62,28" className="text-coral" />
    </svg>
  )
}

export function TransitDiagram({ className }: Props) {
  return (
    <svg {...baseProps} className={cls(className)}>
      <line x1={15} y1={40} x2={50} y2={20} />
      <line x1={50} y1={20} x2={85} y2={40} />
      <circle cx={15} cy={40} r={2.5} fill="white" />
      <circle cx={50} cy={20} r={2.5} fill="white" />
      <circle cx={85} cy={40} r={2.5} fill="white" />
      <polyline
        points="15,40 30,15 70,15 85,40"
        className="text-coral"
        strokeDasharray="2 2"
      />
    </svg>
  )
}

export function LanePolicyDiagram({ className }: Props) {
  return (
    <svg {...baseProps} className={cls(className)}>
      <line x1={10} y1={15} x2={90} y2={15} strokeWidth={1} opacity={0.6} />
      <line x1={10} y1={30} x2={90} y2={30} strokeDasharray="3 3" strokeWidth={1} opacity={0.6} />
      <line x1={10} y1={45} x2={90} y2={45} strokeWidth={1} opacity={0.6} />
      <rect x={28} y={28} width={8} height={4} fill="white" />
      <path
        d="M 36 30 C 50 30, 50 45, 64 45"
        className="text-coral"
        strokeWidth={1.5}
      />
      <polyline points="61,42 64,45 61,48" className="text-coral" />
    </svg>
  )
}

export function PedestrianDiagram({ className }: Props) {
  return (
    <svg {...baseProps} className={cls(className)}>
      <polygon points="18,35 30,35 28,30 20,30" fill="white" />
      <circle cx={22} cy={37} r={1.5} fill="white" />
      <circle cx={28} cy={37} r={1.5} fill="white" />
      <circle cx={70} cy={22} r={2.5} fill="white" />
      <line x1={70} y1={25} x2={70} y2={35} />
      <line x1={70} y1={28} x2={66} y2={32} />
      <line x1={70} y1={28} x2={74} y2={32} />
      <line x1={70} y1={35} x2={67} y2={42} />
      <line x1={70} y1={35} x2={73} y2={42} />
      <line
        x1={32}
        y1={32}
        x2={62}
        y2={28}
        className="text-coral"
        strokeDasharray="2 2"
      />
    </svg>
  )
}

export function EdgeCaseDiagram({ className }: Props) {
  return (
    <svg {...baseProps} className={cls(className)}>
      <polygon points="44,32 56,32 54,27 46,27" fill="white" />
      <circle cx={47} cy={33} r={1.5} fill="white" />
      <circle cx={53} cy={33} r={1.5} fill="white" />
      <rect x={12} y={17} width={10} height={6} fill="white" />
      <path d="M 70 38 A 6 6 0 0 1 80 42" />
      <circle cx={50} cy={10} r={2} fill="white" />
      <polygon points="50,52 46,58 54,58" fill="white" />
      <g className="text-coral" strokeDasharray="2 2" opacity={0.85}>
        <line x1={44} y1={28} x2={22} y2={20} />
        <line x1={56} y1={28} x2={70} y2={40} />
        <line x1={50} y1={27} x2={50} y2={14} />
        <line x1={50} y1={32} x2={50} y2={50} />
      </g>
    </svg>
  )
}

export function FleetDiagram({ className }: Props) {
  const cars = [
    { x: 15, y: 15 },
    { x: 40, y: 10 },
    { x: 75, y: 20 },
    { x: 25, y: 45 },
    { x: 70, y: 50 },
  ]
  const hub = { x: 50, y: 30 }
  return (
    <svg {...baseProps} className={cls(className)}>
      <g className="text-coral" opacity={0.7} strokeWidth={1}>
        {cars.map((c, i) => (
          <line key={i} x1={c.x} y1={c.y} x2={hub.x} y2={hub.y} />
        ))}
      </g>
      {cars.map((c, i) => (
        <circle key={i} cx={c.x} cy={c.y} r={2.4} fill="currentColor" stroke="none" />
      ))}
      <polygon
        points={`${hub.x - 5},${hub.y - 3} ${hub.x},${hub.y - 6} ${hub.x + 5},${hub.y - 3} ${hub.x + 5},${hub.y + 3} ${hub.x},${hub.y + 6} ${hub.x - 5},${hub.y + 3}`}
        fill="white"
      />
    </svg>
  )
}
