import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import { posts } from '@/data/posts';
import AnimatedSection from '@/components/ui/AnimatedSection';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = posts.findIndex(post => post.slug === slug);

  if (index === -1) {
    notFound();
  }

  const post = posts[index];
  const previousPost = posts[index - 1];
  const nextPost = posts[index + 1];

  return (
    <article className="max-w-3xl mx-auto px-6 pt-28 pb-28">
      <AnimatedSection className="mb-12">
        <Link
          href="/writing"
          className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] uppercase text-neutral-400 dark:text-neutral-600 hover:text-accent transition-colors"
        >
          <ArrowLeft size={12} /> All writing
        </Link>
      </AnimatedSection>

      <AnimatedSection delay={0.04} className="mb-14">
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <time dateTime={post.date} className="font-mono text-[11px] text-neutral-400 dark:text-neutral-600">
            {formatDate(post.date)}
          </time>
          <span className="text-neutral-200 dark:text-neutral-800" aria-hidden="true">
            ·
          </span>
          <span className="font-mono text-[11px] text-neutral-400 dark:text-neutral-600">
            {post.readingTime} read
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tighter text-neutral-900 dark:text-[#ebebeb] leading-tight">
          {post.title}
        </h1>
        <p className="mt-6 text-[17px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-6">
          {post.tags.map(tag => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[11.5px] border border-neutral-200 dark:border-white/[0.08] text-neutral-600 dark:text-neutral-400 rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>
      </AnimatedSection>

      <div className="border-t border-neutral-100 dark:border-white/[0.06] pt-12">
        {post.sections.map((section, sectionIndex) => (
          <AnimatedSection
            key={section.heading ?? sectionIndex}
            delay={Math.min(0.08 + sectionIndex * 0.03, 0.2)}
            className="mb-10 last:mb-0"
          >
            {section.heading && (
              <h2 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-[#ebebeb] mb-4">
                {section.heading}
              </h2>
            )}
            <div className="space-y-5">
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p
                  key={`${section.heading ?? sectionIndex}-${paragraphIndex}`}
                  className="text-[15px] md:text-base text-neutral-600 dark:text-neutral-400 leading-[1.85]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection
        delay={0.2}
        className="mt-20 pt-10 border-t border-neutral-100 dark:border-white/[0.06]"
      >
        <div className="flex items-center justify-between gap-4">
          {previousPost ? (
            <Link href={`/writing/${previousPost.slug}`} className="group flex flex-col gap-1.5 max-w-xs">
              <span className="font-mono text-[10.5px] tracking-widest uppercase text-neutral-400 dark:text-neutral-600 inline-flex items-center gap-1.5">
                <ArrowLeft size={10} /> Previous
              </span>
              <span className="text-[13.5px] font-medium group-hover:text-accent transition-colors line-clamp-1">
                {previousPost.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextPost && (
            <Link href={`/writing/${nextPost.slug}`} className="group flex flex-col gap-1.5 max-w-xs text-right">
              <span className="font-mono text-[10.5px] tracking-widest uppercase text-neutral-400 dark:text-neutral-600 inline-flex items-center gap-1.5 justify-end">
                Next <ArrowRight size={10} />
              </span>
              <span className="text-[13.5px] font-medium group-hover:text-accent transition-colors line-clamp-1">
                {nextPost.title}
              </span>
            </Link>
          )}
        </div>
      </AnimatedSection>
    </article>
  );
}
