export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  tech: string[];
  year: string;
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
  image: string;
}

export const projects: Project[] = [
  {
    slug: 'carbonbits-web-console',
    title: 'Carbonbits Web Console',
    tagline: 'Frontend implementation of a carbon credit portfolio management system.',
    description:
      'A production-grade web console for managing carbon credit portfolios, built with React and real-time data pipelines. Features complex data tables, real-time price feeds, portfolio analytics dashboards, and multi-step verification workflows. Architected the frontend from scratch, establishing the component system and design language used across all Carbonbits products.',
    role: 'Lead Frontend Engineer',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'React Query', 'Recharts', 'Vite'],
    year: '2023–Present',
    liveUrl: 'https://carbonbits.io',
    featured: true,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop&auto=format',
  },
  {
    slug: 'wakulima-farm-management',
    title: 'Wakulima Farm Management',
    tagline: 'End-to-end farm management platform built for smallholder farmers in East Africa.',
    description:
      'A comprehensive farm management dashboard for smallholder farmers — tracking crop cycles, integrating live market prices, and surfacing hyperlocal weather data. Designed and built the entire frontend, including a mobile-responsive field data entry flow optimized for low-bandwidth environments. The platform now serves thousands of farmers across Kenya and Tanzania.',
    role: 'Frontend Engineer',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'PWA', 'Chart.js', 'Mapbox GL JS'],
    year: '2022–2023',
    liveUrl: 'https://wakulima.tech',
    featured: true,
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&h=675&fit=crop&auto=format',
  },
  {
    slug: 'kinara-design-system',
    title: 'Kinara Design System',
    tagline: 'A component library and design system powering consistent UIs at scale.',
    description:
      'An internal design system powering consistent user interfaces across Carbonbits and partner products. Ships 60+ components with full TypeScript APIs, Storybook integration, and Figma token sync. Built with compound component patterns, WCAG AA accessible by default, and tree-shakable for performance-conscious consumers.',
    role: 'Design Systems Engineer',
    tech: ['React', 'TypeScript', 'Storybook', 'Tailwind CSS', 'Figma Tokens', 'Rollup'],
    year: '2024',
    featured: false,
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=675&fit=crop&auto=format',
  },
];
