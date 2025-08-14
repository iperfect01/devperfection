export type Post = { slug: string; title: string; excerpt: string; date: string; tags: string[]; content: string };

export const posts: Post[] = [
  {
    slug: 'crafting-performance-for-conversion',
    title: 'Crafting Performance for Conversion',
    excerpt: 'How we squeeze milliseconds to unlock revenue and user joy.',
    date: '2025-07-01',
    tags: ['performance', 'ux'],
    content: 'At DevPerfection, performance is a product feature. We approach speed as a narrative—loading states, perceived performance and real metrics that directly impact your bottom line. Every optimization we make is measured against revenue impact.'
  },
  {
    slug: 'ai-that-earns-its-keep',
    title: 'AI that earns its keep',
    excerpt: 'Practical AI that augments teams and pays for itself fast.',
    date: '2025-06-15',
    tags: ['ai', 'strategy'],
    content: 'AI isn\'t a checkbox. We design assistants that integrate with your operations and create measurable value. Our AI implementations focus on automating repetitive tasks and enhancing human decision-making.'
  },
  {
    slug: 'the-modern-stack-architecture',
    title: 'The Modern Stack Architecture',
    excerpt: 'Building scalable applications with the right technology choices.',
    date: '2025-06-01',
    tags: ['architecture', 'technology'],
    content: 'Modern applications require thoughtful architecture decisions. We explore the latest stack technologies that provide scalability, maintainability, and developer productivity without unnecessary complexity.'
  },
  {
    slug: 'user-experience-that-converts',
    title: 'User Experience That Converts',
    excerpt: 'Designing interfaces that guide users toward meaningful actions.',
    date: '2025-05-20',
    tags: ['ux', 'design', 'conversion'],
    content: 'Great UX isn\'t just about looking good—it\'s about creating seamless paths to conversion. We analyze user behavior patterns and design interfaces that naturally guide users toward desired outcomes.'
  },
  {
    slug: 'database-optimization-strategies',
    title: 'Database Optimization Strategies',
    excerpt: 'Scaling your data layer for performance and reliability.',
    date: '2025-05-10',
    tags: ['database', 'performance', 'scaling'],
    content: 'Database performance can make or break your application. We share proven strategies for query optimization, indexing, and scaling that keep your data layer responsive under load.'
  },
  {
    slug: 'api-design-best-practices',
    title: 'API Design Best Practices',
    excerpt: 'Creating APIs that developers love and businesses depend on.',
    date: '2025-04-25',
    tags: ['api', 'development', 'architecture'],
    content: 'Well-designed APIs are the backbone of modern applications. We cover essential patterns for REST and GraphQL APIs that ensure scalability, security, and developer experience.'
  },
  {
    slug: 'security-first-development',
    title: 'Security-First Development',
    excerpt: 'Building secure applications from the ground up.',
    date: '2025-04-15',
    tags: ['security', 'development'],
    content: 'Security isn\'t an afterthought—it\'s a foundational requirement. We implement security measures at every layer, from authentication and authorization to data encryption and secure deployment practices.'
  },
  {
    slug: 'cloud-native-deployment',
    title: 'Cloud-Native Deployment Strategies',
    excerpt: 'Leveraging cloud platforms for scalable and reliable deployments.',
    date: '2025-04-01',
    tags: ['cloud', 'deployment', 'devops'],
    content: 'Cloud-native deployment transforms how we deliver applications. We explore containerization, orchestration, and automated deployment pipelines that ensure reliable, scalable application delivery.'
  },
  {
    slug: 'mobile-first-responsive-design',
    title: 'Mobile-First Responsive Design',
    excerpt: 'Creating experiences that work beautifully across all devices.',
    date: '2025-03-20',
    tags: ['mobile', 'responsive', 'design'],
    content: 'Mobile-first design isn\'t just about screen sizes—it\'s about understanding how users interact with different devices. We create responsive experiences that feel native on every platform.'
  },
  {
    slug: 'testing-strategies-that-work',
    title: 'Testing Strategies That Work',
    excerpt: 'Building confidence in your code with comprehensive testing.',
    date: '2025-03-10',
    tags: ['testing', 'quality', 'development'],
    content: 'Effective testing strategies reduce bugs and increase development velocity. We implement unit, integration, and end-to-end testing approaches that catch issues early and maintain code quality.'
  },
  {
    slug: 'microservices-vs-monolith',
    title: 'Microservices vs Monolith: Making the Right Choice',
    excerpt: 'Choosing the right architecture for your team and business goals.',
    date: '2025-02-28',
    tags: ['architecture', 'microservices', 'strategy'],
    content: 'The microservices vs monolith debate isn\'t about right or wrong—it\'s about what fits your context. We help you evaluate trade-offs and choose the architecture that supports your growth.'
  },
  {
    slug: 'progressive-web-apps',
    title: 'Progressive Web Apps: The Future of Web',
    excerpt: 'Building web applications that feel like native apps.',
    date: '2025-02-15',
    tags: ['pwa', 'web', 'mobile'],
    content: 'Progressive Web Apps bridge the gap between web and native applications. We implement PWA features that provide offline functionality, push notifications, and app-like experiences.'
  },
  {
    slug: 'data-driven-decisions',
    title: 'Making Data-Driven Product Decisions',
    excerpt: 'Using analytics and user feedback to guide product development.',
    date: '2025-02-01',
    tags: ['analytics', 'product', 'data'],
    content: 'Data-driven decisions remove guesswork from product development. We implement analytics frameworks that provide actionable insights into user behavior and business metrics.'
  },
  {
    slug: 'css-architecture-at-scale',
    title: 'CSS Architecture at Scale',
    excerpt: 'Maintaining consistent and scalable styles in large applications.',
    date: '2025-01-20',
    tags: ['css', 'architecture', 'frontend'],
    content: 'CSS architecture becomes critical as applications grow. We establish design systems and CSS methodologies that maintain consistency while allowing for rapid development.'
  },
  {
    slug: 'real-time-applications',
    title: 'Building Real-Time Applications',
    excerpt: 'Creating responsive, real-time user experiences with WebSockets.',
    date: '2025-01-10',
    tags: ['realtime', 'websockets', 'ux'],
    content: 'Real-time features transform user engagement. We implement WebSocket connections and real-time data synchronization that create responsive, collaborative user experiences.'
  },
  {
    slug: 'accessibility-by-design',
    title: 'Accessibility by Design',
    excerpt: 'Creating inclusive digital experiences for all users.',
    date: '2024-12-25',
    tags: ['accessibility', 'design', 'inclusive'],
    content: 'Accessibility isn\'t compliance—it\'s about creating inclusive experiences. We implement WCAG guidelines and accessibility best practices that serve all users effectively.'
  },
  {
    slug: 'performance-monitoring',
    title: 'Performance Monitoring and Optimization',
    excerpt: 'Continuous performance improvement through monitoring and analysis.',
    date: '2024-12-15',
    tags: ['performance', 'monitoring', 'optimization'],
    content: 'Performance monitoring provides insights into real-world application behavior. We implement comprehensive monitoring solutions that identify bottlenecks and optimization opportunities.'
  },
  {
    slug: 'serverless-architecture',
    title: 'Serverless Architecture Benefits and Challenges',
    excerpt: 'Understanding when and how to implement serverless solutions.',
    date: '2024-12-01',
    tags: ['serverless', 'architecture', 'cloud'],
    content: 'Serverless architecture offers scalability and cost benefits but requires careful consideration. We explore serverless patterns that reduce operational overhead while maintaining performance.'
  },
  {
    slug: 'frontend-state-management',
    title: 'Modern Frontend State Management',
    excerpt: 'Choosing the right state management solution for your application.',
    date: '2024-11-20',
    tags: ['frontend', 'state', 'react'],
    content: 'State management complexity grows with application size. We evaluate state management solutions from local component state to global stores, helping you choose the right approach.'
  },
  {
    slug: 'agile-development-practices',
    title: 'Agile Development Practices That Deliver',
    excerpt: 'Implementing agile methodologies that improve team productivity.',
    date: '2024-11-10',
    tags: ['agile', 'process', 'productivity'],
    content: 'Agile development is about delivering value quickly and responding to change. We implement agile practices that improve team collaboration and product delivery velocity.'
  }
];
