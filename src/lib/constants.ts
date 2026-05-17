export const NAV_LINKS = [
  { label: 'Problem', href: '#problem' },
  { label: 'Engine', href: '#engine' },
  { label: 'Applications', href: '#applications' },
  { label: 'Team', href: '#team' },
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

export const WHY_NOW = {
  label: 'WHY NOW',
  headline: 'Customers already pay for what-if — painfully.',
  stats: [
    { value: '$379B', label: 'Digital twin market by 2034' },
    { value: '$1M+', label: '18+ months per implementation' },
    { value: '75%', label: 'of spend on people & services' },
  ],
  body:
    'A $379B digital-twin market grows manually, project by project. Three-quarters of every dollar funds consultants writing rules and modelers hand-building geometry. When the unknown hits, operators pay again in reality — through penalties, lost orders and projects shelved. Agentic world models replace projects with platforms.',
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
    },
    {
      icon: 'Network' as const,
      title: 'Learn the Agents',
      description:
        'Vehicle trajectories, pedestrian flows, robot routes and ops signals train an Agent Foundation Model that captures intent, behavior and multi-agent interaction.',
    },
    {
      icon: 'Workflow' as const,
      title: 'Roll out the Future',
      description:
        'Test signal changes, lane closures, AGV cadence inside the world. Get back risk, delay, throughput — before deploying to reality.',
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

export const TEAM = {
  label: 'TEAM & TRACTION',
  headline: 'Built by the team behind the world\'s first AV test facility.',
  founders: [
    {
      name: 'Howie Sun',
      role: 'CEO & Co-founder',
      bio: 'From Mcity. Researcher → Builder → Seller.',
    },
    {
      name: 'Henry Liu',
      role: 'CTO & Co-founder',
      bio: 'Bruce D. Greenshields Collegiate Professor. Director of UMTRI and Mcity.',
    },
  ],
  stats: [
    { icon: 'DollarSign' as const, value: '$1.65M', label: 'Federal funding secured' },
    { icon: 'TrendingUp' as const, value: '$1M+', label: 'In contracts and pipeline' },
    { icon: 'BookOpen' as const, value: 'Nature', label: 'Cover publication' },
  ],
}

export const CTA = {
  headline: 'The physical world is waiting for its preview.',
  subheadline:
    'If you operate at city, airport, warehouse or fleet scale — or invest in companies that do — let\'s talk.',
  button: 'Talk to Us',
  email: 'contact@inchor.ai',
}
