import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { posts } from '../data/posts';
import SEO from '../components/ui/SEO';
import AnimatedSection from '../components/ui/AnimatedSection';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function Writing() {
  return (
    <>
      <SEO
        title="Writing"
        description="Articles on frontend engineering, design systems, and developer craft by Washington Karanja."
      />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-28">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-accent mb-4">Writing</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-neutral-900 dark:text-[#ebebeb]">
            Notes on craft
          </h1>
          <p className="mt-3 text-[15px] text-neutral-500 dark:text-neutral-400 max-w-sm leading-relaxed">
            Occasional writing on frontend engineering, design systems, and developer experience.
          </p>
        </AnimatedSection>

        {/* Posts */}
        <div className="max-w-2xl">
          {posts.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.08}>
              <article className="group py-10 border-b border-neutral-100 dark:border-white/[0.05] first:border-t first:border-neutral-100 first:dark:border-white/[0.05]">
                {/* Meta row */}
                <div className="flex items-center gap-3 mb-3">
                  <time
                    dateTime={post.date}
                    className="font-mono text-[11px] text-neutral-400 dark:text-neutral-600"
                  >
                    {formatDate(post.date)}
                  </time>
                  <span className="text-neutral-200 dark:text-neutral-800" aria-hidden="true">·</span>
                  <span className="font-mono text-[11px] text-neutral-400 dark:text-neutral-600">
                    {post.readingTime} read
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-[17px] font-semibold tracking-tight text-neutral-900 dark:text-[#ebebeb] mb-3 group-hover:text-accent transition-colors leading-snug">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-[14px] text-neutral-500 dark:text-neutral-400 leading-relaxed mb-5">
                  {post.excerpt}
                </p>

                {/* Tags + CTA */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[11px] bg-neutral-100 dark:bg-white/[0.05] text-neutral-500 dark:text-neutral-500 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/writing/${post.slug}`}
                    className="inline-flex items-center gap-1 text-[12px] text-accent font-medium"
                    aria-label={`Read ${post.title}`}
                  >
                    Read more <ArrowRight size={12} />
                  </Link>
                </div>
              </article>
            </AnimatedSection>
          ))}

          {/* Note: posts are placeholders */}
          <AnimatedSection delay={0.3}>
            <p className="mt-10 text-[12px] font-mono text-neutral-300 dark:text-neutral-800 text-center">
              — More posts coming soon —
            </p>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
}
