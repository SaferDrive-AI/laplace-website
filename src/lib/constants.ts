export const NAV_LINKS = [
  { label: 'Vision', href: '#vision' },
  { label: 'Technology', href: '#technology' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Team', href: '#team' },
] as const

export const HERO = {
  eyebrow: 'INCHOR',
  headline: 'We\'re building the safety instinct for robots.',
  subheadline:
    'Robots are getting smarter every day. But smart isn\'t safe. Before they enter our world, they need to know when to stop.',
  cta1: 'Learn More',
  cta2: 'Talk to Us',
}

export const PROBLEM = {
  label: 'The Vision',
  headline: 'Rules Break. Instincts Don\'t.',
  body: 'Safety shouldn\'t be a checklist. It should be an instinct — trained, embedded, and shared across every robot.',
  ruleCard: {
    title: 'Rule-Based Safety',
    code: 'IF obstacle AND dist < 0.5m\n  AND speed > 1m/s\n  THEN stop',
    problem: 'Finite rules for an infinite world',
  },
  instinctCard: {
    title: 'Safety Instinct',
    description: 'Trained across millions of danger scenarios. Responds to threats never seen before.',
    advantage: 'Understands WHY something is dangerous',
  },
}

export const HOW_IT_WORKS = {
  label: 'Technology',
  headline: 'How We Train the Instinct',
  cards: [
    {
      icon: 'BrainCircuit' as const,
      title: 'Dense Learning',
      description:
        'Danger is rare in normal data. Dense learning focuses on what matters — extracting maximum signal from critical safety moments instead of drowning in routine operations.',
    },
    {
      icon: 'Globe' as const,
      title: 'World Model',
      description:
        'A learned model of the physical world that understands cause and effect. It predicts what happens next — so the system can see danger before it arrives.',
    },
    {
      icon: 'Repeat' as const,
      title: 'Reinforcement Learning',
      description:
        'The instinct is forged through trial and error in simulation — millions of scenarios where the system learns the boundary between safe and unsafe.',
    },
  ],
}

export const ROADMAP = {
  label: 'Roadmap',
  headline: 'Building the Standard',
  phases: [
    {
      status: 'NOW' as const,
      title: 'Risk Awareness',
      description:
        'Real-time danger detection and early warning. The first step: giving robots the ability to sense risk.',
    },
    {
      status: 'NEXT' as const,
      title: 'Safety Layer',
      description:
        'An active safety layer that advises and constrains. The instinct begins shaping robot behavior.',
    },
    {
      status: 'VISION' as const,
      title: 'Safety Infrastructure',
      description:
        'Every robot ships with a safety instinct — like every car ships with AEB. The universal standard for Physical AI safety.',
    },
  ],
}

export const CREDENTIALS = {
  label: 'Team',
  headline: 'Built on a Decade of Safety Research',
  items: [
    { icon: 'BookOpen' as const, title: 'Nature Cover', description: 'Cover article on Nature' },
    { icon: 'Globe' as const, title: 'World Model', description: 'World model safety research' },
    { icon: 'Car' as const, title: 'AV to Robotics', description: 'From autonomous driving to robotics safety' },
    { icon: 'Award' as const, title: 'DARPA Challenge', description: 'Robotics challenge veterans' },
  ],
  stats: [
    { value: 10, suffix: '+', label: 'Years of safety research' },
  ],
}

export const CTA = {
  headline: 'The age of Physical AI is here. Let\'s make it safe.',
  subheadline:
    'We\'re building the safety instinct that every robot will need. If you\'re shaping the future of Physical AI, let\'s talk.',
  button: 'Talk to Us',
  email: 'contact@inchor.ai',
}
