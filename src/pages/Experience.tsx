import { Download, ExternalLink } from 'lucide-react';
import { roles } from '../data/experience';
import SEO from '../components/ui/SEO';
import AnimatedSection from '../components/ui/AnimatedSection';

export default function Experience() {
  return (
    <>
      <SEO
        title="Experience"
        description="Work history and career timeline of Washington Karanja — frontend engineer based in Nairobi, Kenya."
      />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-28">
        {/* Header row */}
        <AnimatedSection className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-accent mb-4">Experience</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-neutral-900 dark:text-[#ebebeb]">
              Work history
            </h1>
          </div>
          <a
            href="/resume.pdf"
            onClick={e => e.preventDefault()}
            download
            aria-label="Download résumé as PDF"
            className="group inline-flex items-center gap-2 px-4 py-2.5 border border-neutral-200 dark:border-white/[0.1] text-[13px] font-medium rounded-md hover:bg-neutral-50 dark:hover:bg-white/[0.04] hover:border-neutral-300 dark:hover:border-white/[0.18] transition-all shrink-0"
          >
            <Download size={13} className="group-hover:translate-y-0.5 transition-transform" />
            Download résumé
          </a>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative max-w-3xl">
          {/* Vertical track */}
          <div
            className="absolute left-0 top-3 bottom-0 w-px bg-gradient-to-b from-accent/40 via-neutral-200 dark:via-white/[0.07] to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-16 pl-8">
            {roles.map((role, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <article className="relative group">
                  {/* Timeline dot */}
                  <div
                    className="absolute -left-8 top-1.5 w-2 h-2 rounded-full bg-accent ring-2 ring-white dark:ring-[#0a0a0a] ring-offset-0"
                    aria-hidden="true"
                  />

                  {/* Period */}
                  <p className="font-mono text-[11px] tracking-widest text-neutral-400 dark:text-neutral-600 mb-2.5 uppercase">
                    {role.period}
                  </p>

                  {/* Title, company, location */}
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-1">
                    <h2 className="font-semibold text-[15px] text-neutral-900 dark:text-[#ebebeb]">
                      {role.title}
                    </h2>
                    <span className="text-neutral-300 dark:text-neutral-700" aria-hidden="true">@</span>
                    <span className="font-semibold text-[15px] text-accent">{role.company}</span>
                    <span className="text-neutral-300 dark:text-neutral-700 hidden sm:inline" aria-hidden="true">·</span>
                    <span className="font-mono text-xs text-neutral-400 dark:text-neutral-600">{role.location}</span>
                  </div>

                  <p className="text-[14px] text-neutral-500 dark:text-neutral-400 leading-relaxed mb-5 max-w-xl">
                    {role.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2.5">
                    {role.highlights.map((h, j) => (
                      <li key={j} className="flex gap-3 text-[13.5px] text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
                        <span className="text-accent/60 shrink-0 mt-[3px]" aria-hidden="true">—</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Education */}
        <AnimatedSection delay={0.35} className="mt-24 pt-12 border-t border-neutral-100 dark:border-white/[0.06] max-w-3xl">
          <h2 className="font-mono text-[11px] tracking-[0.18em] uppercase text-neutral-400 dark:text-neutral-600 mb-8">
            Education
          </h2>
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 p-5 border border-neutral-200 dark:border-white/[0.06] rounded-xl hover:border-neutral-300 dark:hover:border-white/[0.12] transition-colors">
            <div>
              <p className="font-semibold text-[14px] mb-1">Moringa School — Software Engineering</p>
              <p className="text-[13.5px] text-neutral-500 dark:text-neutral-400">
                Full-stack curriculum · React, Ruby on Rails, Node.js · Graduated top of cohort
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <p className="font-mono text-[11px] text-neutral-400 dark:text-neutral-600">2020 — 2021</p>
              <a
                href="https://moringaschool.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Moringa School website"
                className="text-neutral-300 dark:text-neutral-700 hover:text-accent transition-colors"
              >
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
