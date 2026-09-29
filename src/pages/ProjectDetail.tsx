import { useParams, Link, Navigate } from 'react-router';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import SEO from '../components/ui/SEO';
import AnimatedSection from '../components/ui/AnimatedSection';
import { GithubIcon } from '../components/ui/SocialIcons';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const idx = projects.findIndex(p => p.slug === slug);

  if (idx === -1) return <Navigate to="/projects" replace />;

  const project = projects[idx];
  const prev = projects[idx - 1];
  const next = projects[idx + 1];

  return (
    <>
      <SEO title={project.title} description={project.tagline} />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-28">
        {/* Back link */}
        <AnimatedSection className="mb-12">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] uppercase text-neutral-400 dark:text-neutral-600 hover:text-accent transition-colors"
          >
            <ArrowLeft size={12} /> All projects
          </Link>
        </AnimatedSection>

        {/* Hero */}
        <AnimatedSection delay={0.04} className="mb-14">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-accent mb-4">{project.year}</p>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tighter text-neutral-900 dark:text-[#ebebeb] mb-5 max-w-2xl leading-tight">
            {project.title}
          </h1>
          <p className="text-[15px] md:text-[17px] text-neutral-500 dark:text-neutral-400 max-w-xl leading-relaxed">
            {project.tagline}
          </p>
        </AnimatedSection>

        {/* Hero image */}
        <AnimatedSection delay={0.08} className="mb-16">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-100 dark:bg-[#111] border border-neutral-200 dark:border-white/[0.06]">
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="w-full h-full object-cover"
            />
          </div>
        </AnimatedSection>

        {/* Body */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-16">
          {/* Description */}
          <AnimatedSection delay={0.1}>
            <h2 className="font-mono text-[11px] tracking-[0.18em] uppercase text-neutral-400 dark:text-neutral-600 mb-5">
              Overview
            </h2>
            <p className="text-[15px] text-neutral-600 dark:text-neutral-400 leading-[1.8] max-w-2xl">
              {project.description}
            </p>
          </AnimatedSection>

          {/* Metadata */}
          <AnimatedSection delay={0.13} className="space-y-8">
            {/* Role */}
            <div>
              <h3 className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-neutral-400 dark:text-neutral-600 mb-2.5">
                Role
              </h3>
              <p className="text-[13.5px] text-neutral-700 dark:text-neutral-300 font-medium">{project.role}</p>
            </div>

            {/* Stack */}
            <div>
              <h3 className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-neutral-400 dark:text-neutral-600 mb-3">
                Tech stack
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map(t => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-[11.5px] border border-neutral-200 dark:border-white/[0.08] text-neutral-600 dark:text-neutral-400 rounded-lg"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-2.5 pt-1">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent text-white text-[13px] font-medium rounded-lg hover:opacity-90 transition-opacity"
                >
                  <ExternalLink size={13} /> Live site
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 border border-neutral-200 dark:border-white/[0.1] text-[13px] font-medium rounded-lg hover:bg-neutral-50 dark:hover:bg-white/[0.04] transition-colors"
                >
                  <GithubIcon size={13} /> Repository
                </a>
              )}
            </div>
          </AnimatedSection>
        </div>

        {/* Prev / Next */}
        <AnimatedSection delay={0.18} className="mt-20 pt-10 border-t border-neutral-100 dark:border-white/[0.06]">
          <div className="flex items-center justify-between gap-4">
            {prev ? (
              <Link to={`/projects/${prev.slug}`} className="group flex flex-col gap-1.5 max-w-xs">
                <span className="font-mono text-[10.5px] tracking-widest uppercase text-neutral-400 dark:text-neutral-600 inline-flex items-center gap-1.5">
                  <ArrowLeft size={10} /> Previous
                </span>
                <span className="text-[13.5px] font-medium group-hover:text-accent transition-colors line-clamp-1">
                  {prev.title}
                </span>
              </Link>
            ) : <div />}

            {next && (
              <Link to={`/projects/${next.slug}`} className="group flex flex-col gap-1.5 max-w-xs text-right">
                <span className="font-mono text-[10.5px] tracking-widest uppercase text-neutral-400 dark:text-neutral-600 inline-flex items-center gap-1.5 justify-end">
                  Next <ArrowRight size={10} />
                </span>
                <span className="text-[13.5px] font-medium group-hover:text-accent transition-colors line-clamp-1">
                  {next.title}
                </span>
              </Link>
            )}
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
