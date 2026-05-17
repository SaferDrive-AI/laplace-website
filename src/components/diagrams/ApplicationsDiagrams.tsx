const COMMON_PROPS = {
  viewBox: '0 0 80 60',
  className: 'w-full h-auto',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

export function AVDiagram() {
  return (
    <svg {...COMMON_PROPS}>
      <polygon points="28,36 52,36 49,28 31,28" fill="white" />
      <circle cx={33} cy={38} r={3} fill="white" />
      <circle cx={47} cy={38} r={3} fill="white" />
      <line x1={20} y1={50} x2={26} y2={50} strokeWidth={1.2} />
      <line x1={32} y1={50} x2={48} y2={50} strokeWidth={1.2} />
      <line x1={54} y1={50} x2={60} y2={50} strokeWidth={1.2} />
      <g className="text-coral" strokeDasharray="2 2" opacity={0.8}>
        <line x1={40} y1={26} x2={28} y2={10} />
        <line x1={40} y1={26} x2={52} y2={10} />
      </g>
    </svg>
  )
}

export function CityDiagram() {
  return (
    <svg {...COMMON_PROPS}>
      <line x1={10} y1={30} x2={70} y2={30} />
      <line x1={40} y1={5} x2={40} y2={55} />
      <rect x={15} y={10} width={10} height={10} fill="white" />
      <rect x={55} y={10} width={10} height={10} fill="white" />
      <rect x={15} y={40} width={10} height={10} fill="white" />
      <rect x={55} y={40} width={10} height={10} fill="white" />
      <circle cx={40} cy={30} r={2.5} fill="currentColor" stroke="none" />
      <path d="M 33 18 A 7 7 0 0 1 47 18" className="text-coral" strokeWidth={1.5} />
    </svg>
  )
}

export function WarehouseDiagram() {
  return (
    <svg {...COMMON_PROPS}>
      <polygon points="15,18 25,10 55,10 65,18 65,52 15,52" fill="white" />
      <line x1={25} y1={18} x2={25} y2={48} strokeWidth={1.2} opacity={0.7} />
      <line x1={40} y1={18} x2={40} y2={48} strokeWidth={1.2} opacity={0.7} />
      <line x1={55} y1={18} x2={55} y2={48} strokeWidth={1.2} opacity={0.7} />
      <line x1={15} y1={18} x2={65} y2={18} strokeWidth={1.2} opacity={0.7} />
      <rect x={31} y={45} width={5} height={5} className="text-coral" fill="currentColor" stroke="none" />
      <path d="M 36 47 L 50 47" className="text-coral" strokeDasharray="2 2" />
    </svg>
  )
}

export function AirportDiagram() {
  return (
    <svg {...COMMON_PROPS}>
      <line x1={10} y1={48} x2={70} y2={48} strokeWidth={2} />
      <line x1={14} y1={48} x2={18} y2={48} strokeWidth={1} className="text-coral" />
      <line x1={26} y1={48} x2={30} y2={48} strokeWidth={1} className="text-coral" />
      <line x1={38} y1={48} x2={42} y2={48} strokeWidth={1} className="text-coral" />
      <line x1={50} y1={48} x2={54} y2={48} strokeWidth={1} className="text-coral" />
      <polygon points="40,18 44,28 36,28" fill="white" />
      <line x1={32} y1={24} x2={48} y2={24} strokeWidth={2} />
      <line x1={40} y1={28} x2={40} y2={32} strokeWidth={1.2} />
      <line x1={40} y1={32} x2={40} y2={45} className="text-coral" strokeDasharray="2 2" />
    </svg>
  )
}
