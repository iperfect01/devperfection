export type Project = {
  slug: string;
  title: string;
  tags: string[];
  summary: string;
  results: string[];
  images: string[];
  tech: string[];
};

export const projects: Project[] = [
  {
    slug: 'apollo-commerce',
    title: 'Apollo Commerce',
    tags: ['ecommerce', 'web'],
    summary: 'A conversion-optimized storefront with blazing performance and a delightful checkout.',
    results: ['+32% conversion', '-45% bounce', '+18% AOV'],
    images: ['/src/assets/portfolio/apollo.png'],
    tech: ['React', 'Vite', 'Tailwind', 'Supabase']
  },
  {
    slug: 'neon-bank',
    title: 'Neon Bank',
    tags: ['fintech', 'mobile'],
    summary: 'A secure mobile banking experience with real-time insights and alerts.',
    results: ['99.98% uptime', 'AppStore 4.8★', '100k MAU'],
    images: ['/src/assets/portfolio/bank.png'],
    tech: ['React Native', 'Supabase', 'Framer Motion']
  },
  {
    slug: 'ilearn-future-lms',
    title: 'ilearn future lms',
    tags: ['saas', 'analytics'],
    summary: 'future-proof learning management system with advanced analytics and AI-driven insights.',
    results: ['+150% user engagement', '40% faster insights', '95% user satisfaction'],
    images: ['/src/assets/portfolio/ilearn.png'],
    tech: ['React', 'D3.js', 'TypeScript', 'PostgreSQL']
  },
  {
    slug: 'AgriTrade-pro',
    title: 'AgriTrade pro',
    tags: ['mobile', 'wellness'],
    summary: 'connects farmers with buyers, streamlining agricultural trade.',
    results: ['500k+ downloads', '4.9★ rating', '85% retention'],
    images: ['/src/assets/portfolio/farmer.png'],
    tech: ['React Native', 'Expo', 'Redux', 'Firebase']
  },
  {
    slug: 'football team',
    title: 'football team',
    tags: ['enterprise', 'logistics'],
    summary: 'fleet management system for a professional football team, optimizing logistics and operations.',
    results: ['-25% delivery time', '+40% efficiency', '$2M cost savings'],
    images: ['/src/assets/portfolio/foot.png'],
    tech: ['React', 'Node.js', 'MongoDB', 'AWS']
  },
  {
    slug: 'creative-studio-portfolio',
    title: 'Creative Studio Portfolio',
    tags: ['portfolio', 'creative'],
    summary: 'Stunning portfolio website for a design agency with smooth animations.',
    results: ['+200% inquiries', '60% longer sessions', '90% mobile score'],
    images: ['/src/assets/portfolio/studio.png'],
    tech: ['React', 'Three.js', 'GSAP', 'Vercel']
  },
  {
    slug: 'edutech-learning',
    title: 'EduTech Learning Platform',
    tags: ['education', 'saas'],
    summary: 'Interactive online learning platform with video streaming and assessments.',
    results: ['1M+ students', '95% completion rate', 'A+ accessibility'],
    images: ['/src/assets/portfolio/edu.png'],
    tech: ['Next.js', 'Prisma', 'Vercel', 'Stripe']
  },
  {
    slug: 'green-energy-monitor',
    title: 'Green Energy Monitor',
    tags: ['iot', 'sustainability'],
    summary: 'Real-time energy consumption tracking for smart homes and businesses.',
    results: ['-30% energy usage', '10k+ devices', 'Award winning'],
    images: ['/src/assets/portfolio/reen.png'],
    tech: ['React', 'IoT', 'Chart.js', 'MQTT']
  },
  {
    slug: 'foodie-delivery',
    title: 'Foodie Delivery App',
    tags: ['mobile', 'delivery'],
    summary: 'On-demand food delivery platform with real-time tracking and payments.',
    results: ['2M+ orders', '15min avg delivery', '4.7★ rating'],
    images: ['/src/assets/portfolio/food.png'],
    tech: ['Flutter', 'Firebase', 'Google Maps', 'Stripe']
  },
  {
    slug: 'crypto-trading-bot',
    title: 'Crypto Trading Bot Dashboard',
    tags: ['fintech', 'crypto'],
    summary: 'Automated cryptocurrency trading platform with advanced analytics.',
    results: ['+45% returns', '24/7 trading', '99.9% uptime'],
    images: ['/src/assets/portfolio/trade.png'],
    tech: ['React', 'Python', 'WebSocket', 'TradingView']
  },
  {
    slug: 'healthcare-telemedicine',
    title: 'Healthcare Telemedicine',
    tags: ['healthcare', 'telemedicine'],
    summary: 'HIPAA-compliant telemedicine platform connecting patients with doctors.',
    results: ['50k+ consultations', 'HIPAA compliant', '98% satisfaction'],
    images: ['/src/assets/portfolio/care.png'],
    tech: ['React', 'WebRTC', 'Supabase', 'Twilio']
  },
  {
    slug: 'real-estate-crm',
    title: 'Real Estate CRM System',
    tags: ['crm', 'real-estate'],
    summary: 'Comprehensive CRM for real estate agents with lead management and analytics.',
    results: ['+80% lead conversion', '500+ agents', '3x faster closings'],
    images: ['/src/assets/portfolio/state.png'],
    tech: ['Vue.js', 'Laravel', 'MySQL', 'Mailgun']
  },
  {
    slug: 'social-fitness-app',
    title: 'Social Fitness Community',
    tags: ['mobile', 'fitness', 'social'],
    summary: 'Social fitness app with workout tracking, challenges, and community features.',
    results: ['100k+ users', '90% monthly active', '4.8★ store rating'],
    images: ['/src/assets/portfolio/fit.png'],
    tech: ['React Native', 'GraphQL', 'Apollo', 'AWS']
  },
  {
    slug: 'inventory-management',
    title: 'Smart Inventory Management',
    tags: ['enterprise', 'inventory'],
    summary: 'AI-powered inventory management system with predictive analytics.',
    results: ['-50% stockouts', '+25% efficiency', '$1.5M saved'],
    images: ['/src/assets/portfolio/smart.png'],
    tech: ['Angular', 'Python', 'TensorFlow', 'PostgreSQL']
  },
  {
    slug: 'event-planning-platform',
    title: 'Event Planning Platform',
    tags: ['saas', 'events'],
    summary: 'All-in-one event planning platform with vendor management and ticketing.',
    results: ['10k+ events', '95% success rate', '+300% bookings'],
    images: ['/src/assets/portfolio/event.png'],
    tech: ['React', 'Stripe', 'SendGrid', 'Cloudinary']
  },
  {
    slug: 'podcast-streaming',
    title: 'Podcast Streaming Platform',
    tags: ['media', 'streaming'],
    summary: 'Podcast hosting and streaming platform with analytics and monetization.',
    results: ['1M+ listeners', '500+ podcasts', '$100k revenue'],
    images: ['/src/assets/portfolio/plat.png'],
    tech: ['React', 'Node.js', 'CDN', 'Analytics']
  }
];
