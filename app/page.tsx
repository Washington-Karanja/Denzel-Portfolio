import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ProjectCard from '@/components/ui/ProjectCard';

const featured = projects.filter(project => project.featured);

const container = {
  animate: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};
const item = {
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="hero-glow" aria-hidden="true" />

        <div className="relative max-w-6xl mx-auto px-6 pt-36 pb-24">
          <motion.div variants={container} initial="initial" animate="animate">
            <motion.p
              variants={item}
              className="font-mono text-xs tracking-[0.18em] uppercase text-accent mb-8 inline-flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" aria-hidden="true" />
              Frontend Engineer — Nairobi, KE
            </motion.p>

            <motion.h1
              variants={item}
              className="text-[clamp(2.8rem,8vw,5.5rem)] font-bold tracking-tighter leading-[1.01] text-neutral-900 dark:text-[#ebebeb] mb-7 max-w-3xl"
            >
              Building interfaces<br />
              that feel<br />
              <span className="text-accent">inevitable.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-base md:text-[17px] text-neutral-500 dark:text-neutral-400 max-w-[26rem] leading-[1.7] mb-10"
            >
              I&apos;m Washington Karanja — I design and engineer frontend systems that are fast,
              precise, and a pleasure to use.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
              >
                View work <ArrowRight size={14} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-neutral-200 dark:border-white/[0.1] text-sm font-medium rounded-md hover:bg-neutral-50 dark:hover:bg-white/[0.04] transition-colors"
              >
                Get in touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <AnimatedSection>
          <div className="flex items-center justify-between mb-10 pb-4 border-b border-neutral-100 dark:border-white/[0.05]">
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-neutral-400 dark:text-neutral-600">
              Selected work
            </span>
            <Link
              href="/projects"
              className="text-xs text-neutral-400 dark:text-neutral-500 hover:text-accent transition-colors inline-flex items-center gap-1.5"
            >
              All projects <ArrowRight size={12} />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featured.map((project, index) => (
            <AnimatedSection key={project.slug} delay={index * 0.09}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </section>

      <AnimatedSection>
        <section className="max-w-6xl mx-auto px-6 pb-32">
          <div className="relative overflow-hidden border border-neutral-200 dark:border-white/[0.07] rounded-xl px-8 py-10 md:px-14 md:py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-neutral-50/60 dark:bg-white/[0.02]">
            <div
              className="absolute right-0 top-0 bottom-0 w-64 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 60% 80% at 100% 50%, var(--accent-glow), transparent 70%)' }}
              aria-hidden="true"
            />
            <div className="relative">
              <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-accent mb-2">
                Available
              </p>
              <h2 className="font-semibold text-[15px] mb-1.5">Open to select projects</h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-xs leading-relaxed">
                Open to frontend freelance work and collaborations.
              </p>
            </div>
            <Link
              href="/contact"
              className="relative shrink-0 inline-flex items-center gap-2 px-5 py-2.5 border border-neutral-200 dark:border-white/[0.1] text-sm font-medium rounded-md hover:bg-white dark:hover:bg-white/[0.06] transition-colors whitespace-nowrap"
            >
              Let&apos;s talk <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
