import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/ui/SEO';

export default function NotFound() {
  return (
    <>
      <SEO title="Page not found" description="The page you're looking for doesn't exist." />
      <div className="max-w-6xl mx-auto px-6 pt-40 pb-40 flex flex-col items-start">
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent mb-6">404</p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-neutral-900 dark:text-[#ebebeb] mb-5 leading-tight">
          Page not found.
        </h1>
        <p className="text-[15px] text-neutral-500 dark:text-neutral-400 mb-10 max-w-sm leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[13.5px] text-neutral-500 dark:text-neutral-400 hover:text-accent transition-colors"
        >
          <ArrowLeft size={14} /> Back home
        </Link>
      </div>
    </>
  );
}
