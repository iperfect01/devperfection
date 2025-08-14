export type Job = { slug: string; title: string; location: string; type: string; description: string };

export const jobs: Job[] = [
  { slug: 'senior-frontend', title: 'Senior Frontend Engineer', location: 'Kigali / Remote', type: 'Full-time', description: 'Own complex UIs with performance and accessibility baked in.' },
  { slug: 'product-designer', title: 'Product Designer', location: 'Remote', type: 'Contract', description: 'Design systems, flows and beautiful interfaces.' },
];
