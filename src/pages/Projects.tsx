import { projects } from '../data/projects';
import SEO from '../components/ui/SEO';
import AnimatedSection from '../components/ui/AnimatedSection';
import ProjectCard from '../components/ui/ProjectCard';

export default function Projects() {
  return (
    <>
      <SEO
        title="Projects"
        description="Selected frontend engineering projects — web consoles, dashboards, and design systems built by Washington Karanja."
      />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-28">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-accent mb-4">Projects</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-neutral-900 dark:text-[#ebebeb]">
            Selected work
          </h1>
          <p className="mt-3 text-[15px] text-neutral-500 dark:text-neutral-400 max-w-sm leading-relaxed">
            A small collection of things I've built — products, platforms, and systems.
          </p>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <AnimatedSection key={project.slug} delay={i * 0.07}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </>
  );
}
