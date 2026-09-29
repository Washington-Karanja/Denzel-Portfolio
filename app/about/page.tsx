import { projects } from '@/data/projects';
import AnimatedSection from '@/components/ui/AnimatedSection';

const SKILLS = [
  'React', 'TypeScript', 'Next.js', 'Tailwind CSS',
  'Framer Motion', 'React Query', 'Zustand', 'GraphQL', 'REST APIs',
  'Figma', 'Storybook', 'Node.js', 'PostgreSQL', 'Git',
];

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-28 pb-28">
      <AnimatedSection className="mb-16">
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-accent mb-4">About</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-neutral-900 dark:text-[#ebebeb] max-w-md leading-tight">
          Frontend engineer,<br />Nairobi based.
        </h1>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-14 lg:gap-20 mb-20">
        <AnimatedSection delay={0.08} className="space-y-12">
          <div className="space-y-5 text-[15px] text-neutral-600 dark:text-neutral-400 leading-[1.75]">
            <p>
              I&apos;m Washington Karanja — also known as Denzel Mswazi — a frontend engineer with a
              strong focus on the details that make interfaces feel effortless. I&apos;ve spent the
              last several years building production React applications across fintech, agritech,
              and SaaS, and I care deeply about the intersection of engineering quality and
              design craft.
            </p>
            <p>
              At Carbonbits, I lead the frontend architecture of a carbon credit marketplace —
              from the data-dense web console to the design system that unifies it. Before that
              I worked freelance, delivering end-to-end products for startups across East Africa
              and the UK, with a recurring focus on systems that work reliably in low-bandwidth,
              mobile-first environments.
            </p>
            <p>
              Outside of work I write about frontend development — performance, design systems,
              and the craft of building things that feel good to use. I believe the best
              engineering is invisible: users shouldn&apos;t notice the code, they should notice what
              it enables.
            </p>
          </div>

          <div className="pt-8 border-t border-neutral-100 dark:border-white/[0.06]">
            <h2 className="font-mono text-[11px] tracking-[0.18em] uppercase text-neutral-400 dark:text-neutral-600 mb-5">
              Currently focused on
            </h2>
            <ul className="space-y-3 text-[14.5px] text-neutral-600 dark:text-neutral-400">
              {[
                'Real-time data interfaces and WebSocket-backed dashboards at Carbonbits',
                'Design token systems and Tailwind CSS at scale',
                'Writing on frontend craft, engineering culture, and developer experience',
              ].map((focus, index) => (
                <li key={index} className="flex gap-3 leading-relaxed">
                  <span className="text-accent mt-[3px] shrink-0" aria-hidden="true">—</span>
                  {focus}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.14} className="space-y-8">
          <div className="aspect-[4/5] bg-neutral-100 dark:bg-[#111] rounded-xl overflow-hidden border border-neutral-200 dark:border-white/[0.06]">
            <img
              src="/washington-karanja.jpg"
              alt="Washington Karanja"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              loading="lazy"
            />
          </div>

          <div className="grid grid-cols-1 gap-4">
            {[
              { label: 'Based in', value: 'Nairobi, Kenya' },
              { label: 'Currently', value: 'Frontend Engineer @ Carbonbits' },
              { label: 'Available for', value: 'Select freelance projects' },
              { label: 'Reach me at', value: 'washington@example.com' },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-0.5">
                <span className="font-mono text-[10.5px] tracking-widest text-neutral-400 dark:text-neutral-600 uppercase">
                  {label}
                </span>
                <span className="text-[13.5px] text-neutral-700 dark:text-neutral-300">{value}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection delay={0.1} className="border-t border-neutral-100 dark:border-white/[0.06] pt-16">
        <h2 className="font-mono text-[11px] tracking-[0.18em] uppercase text-neutral-400 dark:text-neutral-600 mb-8">
          Technologies
        </h2>
        <div className="flex flex-wrap gap-2">
          {SKILLS.map(skill => (
            <span
              key={skill}
              className="px-3 py-1.5 text-[12.5px] border border-neutral-200 dark:border-white/[0.08] text-neutral-600 dark:text-neutral-400 rounded-lg hover:border-neutral-400 dark:hover:border-white/[0.2] hover:text-neutral-900 dark:hover:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-white/[0.03] transition-all cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
