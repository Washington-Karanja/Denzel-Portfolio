import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 pt-28 pb-28 text-center">
      <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-accent mb-4">404</p>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-neutral-900 dark:text-[#ebebeb] mb-4">
        Page not found
      </h1>
      <p className="text-[15px] text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8">
        The page you were looking for doesn&apos;t exist, or it may have moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
      >
        Return home
      </Link>
    </div>
  );
}
