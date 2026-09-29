import Link from 'next/link';
import { GithubIcon, LinkedinIcon, XIcon } from '../ui/SocialIcons';

const NAV_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'Writing', to: '/writing' },
  { label: 'Contact', to: '/contact' },
];

const SOCIAL_LINKS = [
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/washingtonkaranja' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com/in/washingtonkaranja' },
  { icon: XIcon, label: 'X / Twitter', href: 'https://x.com/washingtonkaranja' },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-100 dark:border-white/[0.05] mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row justify-between gap-8">
          {/* Identity */}
          <div className="space-y-1.5">
            <p className="font-semibold text-[13.5px] tracking-tight">Washington Karanja</p>
            <p className="text-[12px] text-neutral-400 dark:text-neutral-600">
              Frontend Engineer — Nairobi, KE
            </p>
          </div>

          {/* Nav + socials */}
          <div className="flex flex-col sm:flex-row gap-8 sm:items-start">
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {NAV_LINKS.map(({ label, to }) => (
                <Link
                  key={to}
                  href={to}
                  className="text-[12px] text-neutral-400 dark:text-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="flex gap-3.5">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-neutral-300 dark:text-neutral-700 hover:text-neutral-800 dark:hover:text-neutral-300 transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-white/[0.04] flex flex-col sm:flex-row justify-between gap-2">
          <p className="font-mono text-[11px] text-neutral-300 dark:text-neutral-800">
            © {new Date().getFullYear()} Washington Karanja
          </p>
          <p className="font-mono text-[11px] text-neutral-200 dark:text-neutral-800">
            React · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
