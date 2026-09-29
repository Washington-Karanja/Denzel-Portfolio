import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex flex-col overflow-hidden border border-neutral-200 dark:border-white/[0.06] rounded-xl bg-white dark:bg-[#0e0e0e] hover:border-neutral-300 dark:hover:border-white/[0.14] transition-all duration-300 h-full"
    >
      <div className="aspect-[16/9] bg-neutral-100 dark:bg-[#141414] overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5">
              <h3 className="font-semibold text-[13.5px] leading-snug group-hover:text-accent transition-colors">
                {project.title}
              </h3>
            </div>
            <p className="text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
              {project.tagline}
            </p>
          </div>
          <div className="shrink-0 w-7 h-7 rounded-md border border-neutral-200 dark:border-white/[0.08] flex items-center justify-center text-neutral-400 dark:text-neutral-600 group-hover:border-accent group-hover:text-accent group-hover:bg-accent/5 transition-all duration-200">
            <ArrowUpRight size={13} />
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
          {project.tech.slice(0, 4).map(t => (
            <span
              key={t}
              className="px-2 py-0.5 text-[11px] bg-neutral-100 dark:bg-white/[0.05] text-neutral-500 dark:text-neutral-500 rounded-md"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-0.5 text-[11px] text-neutral-400 dark:text-neutral-600">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
      </div>

      <span className="absolute top-3 right-3 font-mono text-[10px] tracking-wide text-white/80 bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded">
        {project.year}
      </span>
    </Link>
  );
}