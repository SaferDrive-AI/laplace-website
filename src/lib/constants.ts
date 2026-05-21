export const NAV_LINKS = [
  { label: 'Problem', href: '#problem' },
  { label: 'Engine', href: '#engine' },
  { label: 'Applications', href: '#applications' },
  { label: 'AV', href: '#av' },
  { label: 'City', href: '#city' },
] as const

export const HERO = {
  eyebrow: 'LAPLACE WORLD',
  headline: 'The What-if Engine for the Physical World.',
  subheadline:
    'Agentic world models for physical-world decisions — build the world, learn the agents, roll out the future.',
  body:
    'Every change to the physical world today is a live experiment. Cities, ports, warehouses and AV fleets ship updates without preview. Laplace turns real-world data into editable 3D worlds with foundation-model agents inside — so operators can rehearse what-ifs, surface unknown risks, and roll out the future before it happens.',
  cta1: 'See the Engine',
  cta1Href: '#engine',
  cta2: 'Talk to Us',
  cta2Href: '#contact',
}

export const PROBLEM = {
  label: 'THE PROBLEM',
  headline: 'The physical world has no preview.',
  body: 'Without preview, every major change becomes a live experiment.',
  knownCard: {
    title: 'Known what-ifs',
    description:
      'What happens if we change X? Operators try to plan ahead — through hand-built models, months of consulting, and project-by-project work that doesn\'t scale.',
  },
  unknownCard: {
    title: 'Unknown risks',
    description:
      'What could go wrong that nobody asked? The questions you didn\'t think to ask are the ones you pay for in production.',
  },
  verticalsLabel: 'One engine across every physical vertical',
  brandLabel: 'LAPLACE',
}


export const ENGINE = {
  label: 'ENGINE',
  headline: 'Laplace World: an Agentic World Model.',
  cards: [
    {
      icon: 'Layers' as const,
      title: 'Build the World',
      description:
        'Multi-camera images, satellite, LiDAR and HD maps go in. An editable 3D world comes out — explore in 3D, rotate, pan, zoom.',
      bullets: [
        'Multi-sensor fusion (camera / LiDAR / satellite)',
        'HD-map alignment',
        'Editable 3D scene graph',
      ],
    },
    {
      icon: 'Network' as const,
      title: 'Learn the Agents',
      description:
        'Vehicle trajectories, pedestrian flows, robot routes and ops signals train an Agent Foundation Model that captures intent, behavior and multi-agent interaction.',
      bullets: [
        'Trajectory + intent modeling',
        'Multi-agent interaction',
        'Self-supervised across worldwide data',
      ],
    },
    {
      icon: 'Workflow' as const,
      title: 'Roll out the Future',
      description:
        'Test signal changes, lane closures, AGV cadence inside the world. Get back risk, delay, throughput — before deploying to reality.',
      bullets: [
        'Counterfactual rollout',
        'Probabilistic outcome distributions',
        'Closed-loop with operational data',
      ],
    },
  ],
  pipelineLabel: 'FOUNDATION MODEL TRAINING',
  pipeline: [
    {
      icon: 'Globe' as const,
      title: 'Pre-training',
      body:
        'Worldwide trajectory, intent and demand data — the base distribution of physical-world behavior.',
    },
    {
      icon: 'Database' as const,
      title: 'Post-training',
      body:
        'Customer data — site-specific behavior, rules and scene context tuned per deployment.',
    },
    {
      icon: 'Sparkles' as const,
      title: 'Fine-tuning',
      body:
        'Counterfactual rollouts that observe, simulate and calibrate the model with every what-if run.',
    },
  ],
  footer: 'Every deployment teaches the agents. Every what-if calibrates the model.',
}

export const APPLICATIONS = {
  label: 'APPLICATIONS',
  headline: 'One engine, every physical vertical.',
  cards: [
    {
      icon: 'Car' as const,
      title: 'AV / Robotics',
      description: 'Counterfactual rollout for fleet decisions and edge-case rehearsal.',
    },
    {
      icon: 'Building2' as const,
      title: 'Smart City',
      description: 'Signal, lane and transit what-ifs at city scale.',
    },
    {
      icon: 'Warehouse' as const,
      title: 'Warehouse',
      description: 'AGV cadence + multi-agent routing under live ops.',
    },
    {
      icon: 'Plane' as const,
      title: 'Airport',
      description: 'Gate, taxiway and surface-ops what-ifs.',
    },
  ],
}

export const AV = {
  label: 'ON THE ROAD',
  headline: 'What-if for autonomous fleets.',
  subhead:
    'AV programs ship lane policies, perception updates and routing tweaks every sprint — each one a live experiment on public roads. Laplace rehearses each change against an Agent Foundation Model first.',
  cards: [
    {
      icon: 'Route' as const,
      title: 'Lane policy changes',
      body:
        'Test new keep-right rules, gap-acceptance thresholds and lane-change cadences against realistic mixed-traffic populations.',
    },
    {
      icon: 'Footprints' as const,
      title: 'Pedestrian & cyclist what-ifs',
      body:
        'Stress-test perception and prediction against pedestrian and cyclist behavior the fleet rarely sees in logs.',
    },
    {
      icon: 'AlertOctagon' as const,
      title: 'Edge-case rehearsal',
      body:
        'Synthesize the long-tail intersection, the late-night double-park, the merging cement truck — before the fleet sees them live.',
    },
    {
      icon: 'Share2' as const,
      title: 'Fleet decisions',
      body:
        'Compare routing, dispatch and rebalancing strategies under counterfactual demand and incident scenarios.',
    },
  ],
  outputs: [
    { icon: 'ShieldAlert' as const, label: 'Edge cases surfaced' },
    { icon: 'Activity' as const, label: 'Behavior modeled' },
    { icon: 'BarChart3' as const, label: 'Outcome distribution' },
    { icon: 'Repeat' as const, label: 'Closed-loop feedback' },
  ],
  footer: 'Every release becomes a rehearsal, not a real-world trial.',
}

export const CITY = {
  label: 'IN THE CITY',
  headline: 'What-if for urban operations.',
  subhead:
    'Cities ship signal changes, lane closures and transit updates every week — without preview. Laplace turns each change into a rehearsal first.',
  cards: [
    {
      icon: 'TrafficCone' as const,
      title: 'Signal & lane changes',
      body:
        'Rehearse new signal timings or temporary lane closures across the network. See the spillback, the missed throughput, the cascading delays — before a single cone hits the street.',
    },
    {
      icon: 'CalendarClock' as const,
      title: 'Event & surge planning',
      body:
        'Model game-day, concert and protest traffic. Stress-test detours and shuttle routes against the agent population that actually shows up.',
    },
    {
      icon: 'Construction' as const,
      title: 'Construction detours',
      body:
        'Phase a multi-month project and watch the network adapt week by week. Pick the detour plan that loses the fewest hours per commuter.',
    },
    {
      icon: 'BusFront' as const,
      title: 'Transit reroutes',
      body:
        'Test new bus routes, headways and stop relocations against ridership behavior. Surface the trip pairs that quietly get worse.',
    },
  ],
  outputs: [
    { icon: 'AlertTriangle' as const, label: 'Risk surfaced' },
    { icon: 'Timer' as const, label: 'Delay quantified' },
    { icon: 'Gauge' as const, label: 'Throughput modeled' },
    { icon: 'Activity' as const, label: 'Cascade traced' },
  ],
  footer: 'Every signal change becomes a what-if, not a live experiment.',
}

export const CTA = {
  headline: 'The physical world is waiting for its preview.',
  subheadline:
    'If you operate at city, airport, warehouse or fleet scale — or invest in companies that do — let\'s talk.',
  button: 'Talk to Us',
  email: 'contact@inchor.ai',
}
