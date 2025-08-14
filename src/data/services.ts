export type Service = { slug: string; title: string; summary: string; features: string[] };

export const services: Service[] = [
  {
    slug: 'web-development',
    title: 'Web Development',
    summary: 'High-performance websites and web apps built with modern stacks that scale.',
    features: ['React/TypeScript', 'Accessibility-first', 'SEO & performance', 'CMS integration']
  },
  {
    slug: 'mobile-apps',
    title: 'Mobile Apps',
    summary: 'iOS & Android apps with native feel, robust architecture and delightful UX.',
    features: ['React Native', 'Offline-first', 'Push notifications', 'App store readiness']
  },
  {
    slug: 'ui-ux',
    title: 'UI/UX Design',
    summary: 'Research-driven experiences that convert and delight users across platforms.',
    features: ['Design systems', 'Prototyping', 'User testing', 'Motion & micro-interactions']
  },
  {
    slug: 'branding',
    title: 'Branding',
    summary: 'Distinctive brand identities with bold typography, colors and voice.',
    features: ['Logo & visual ID', 'Guidelines', 'Collateral', 'Launch toolkit']
  },
  {
    slug: 'devops',
    title: 'DevOps',
    summary: 'Automated CI/CD, containerization, observability and cloud infrastructure.',
    features: ['Docker & Kubernetes', 'Monitoring', 'Performance', 'Security best practices']
  },
  {
    slug: 'ai-integration',
    title: 'AI Integration',
    summary: 'Practical AI that augments your workflows: assistants, RAG, and analytics.',
    features: ['OpenAI/Supabase', 'RAG pipelines', 'Automation', 'Data visualization']
  }
];
