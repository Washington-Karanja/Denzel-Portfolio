export interface Role {
  company: string;
  title: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export const roles: Role[] = [
  {
    company: 'Carbonbits',
    title: 'Frontend Engineer',
    period: '2023 — Present',
    location: 'Nairobi, KE',
    description:
      'Building the frontend infrastructure and product UI for a carbon credit marketplace — from the data-heavy web console to the design system that powers it all.',
    highlights: [
      'Architected the React component system powering the Carbonbits Web Console from the ground up',
      'Led frontend migration from a CRA monolith to a modular Vite-based architecture, cutting build times by 4×',
      'Built real-time portfolio dashboards with WebSocket-backed data streams and optimistic UI updates',
      'Established PR review culture, coding standards, and frontend hiring processes for a growing team',
    ],
  },
  {
    company: 'Freelance',
    title: 'Frontend Developer',
    period: '2021 — 2023',
    location: 'Remote',
    description:
      'Designed and built custom web applications for startups and agencies across East Africa and the UK.',
    highlights: [
      'Delivered Wakulima farm management platform from design spec to production, now serving 3,000+ farmers',
      'Built e-commerce storefronts and SaaS dashboards for 8+ clients in agri, fintech, and media',
      'Introduced systematic design token workflows and Tailwind CSS to multiple client codebases',
    ],
  },
  {
    company: 'Coursera',
    title: 'Front-End Software Engineering Student',
    period: '2020 — 2021',
    location: 'Online',
    description:
      'Completed professional coursework in front-end software engineering and UI/UX design, focused on building responsive, accessible, and user-centered digital experiences.',
    highlights: [
      'Completed hands-on front-end development coursework covering modern web technologies, responsive interfaces, and software engineering practices',
      'Completed Foundations of User Experience (UX) Design coursework, covering user-centered design, wireframing, prototyping, and usability principles',
    ],
  },
];
