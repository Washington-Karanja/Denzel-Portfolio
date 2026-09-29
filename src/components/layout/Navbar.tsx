'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const NAV_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'Writing', to: '/writing' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/85 dark:bg-[#0a0a0a]/85 backdrop-blur-xl border-b border-neutral-200/50 dark:border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <nav
          className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between"
          aria-label="Main navigation"
        >
          <Link href="/" className="text-[13.5px] font-semibold tracking-tight hover:text-accent transition-colors">
            Washington Karanja
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(({ label, to }) => {
              const isActive = pathname === to || pathname.startsWith(`${to}/`);
              return (
                <Link
                  key={to}
                  href={to}
                  className={`relative text-[13px] transition-colors nav-link-hover pb-px ${
                    isActive
                      ? 'text-accent font-medium'
                      : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
                  }`}
                  data-active={isActive ? 'true' : undefined}
                >
                  {label}
                </Link>
              );
            })}

            <span className="w-px h-4 bg-neutral-200 dark:bg-white/[0.1]" aria-hidden="true" />

            <button
              onClick={toggle}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="w-8 h-8 flex items-center justify-center rounded-md text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-white/[0.06] transition-colors"
            >
              {theme === 'dark' ? <Sun size={15} strokeWidth={1.75} /> : <Moon size={15} strokeWidth={1.75} />}
            </button>
          </div>

          <div className="flex md:hidden items-center gap-1">
            <button
              onClick={toggle}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="w-8 h-8 flex items-center justify-center rounded-md text-neutral-400 dark:text-neutral-500 hover:bg-neutral-100 dark:hover:bg-white/[0.06] transition-colors"
            >
              {theme === 'dark' ? <Sun size={15} strokeWidth={1.75} /> : <Moon size={15} strokeWidth={1.75} />}
            </button>
            <button
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="w-8 h-8 flex items-center justify-center rounded-md text-neutral-400 dark:text-neutral-500 hover:bg-neutral-100 dark:hover:bg-white/[0.06] transition-colors"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={menuOpen ? 'close' : 'open'}
                  initial={{ opacity: 0, rotate: -45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.15 }}
                >
                  {menuOpen ? <X size={15} strokeWidth={1.75} /> : <Menu size={15} strokeWidth={1.75} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 dark:bg-black/50 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="fixed top-0 right-0 bottom-0 z-50 w-64 bg-white dark:bg-[#0d0d0d] border-l border-neutral-200 dark:border-white/[0.06] md:hidden flex flex-col"
            >
              <div className="h-14 flex items-center justify-between px-5 border-b border-neutral-100 dark:border-white/[0.06]">
                <span className="text-[13px] font-semibold">Menu</span>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="w-8 h-8 flex items-center justify-center rounded-md text-neutral-400 dark:text-neutral-500 hover:bg-neutral-100 dark:hover:bg-white/[0.06] transition-colors"
                >
                  <X size={15} strokeWidth={1.75} />
                </button>
              </div>

              <nav className="flex-1 flex flex-col px-5 py-6 gap-1">
                {NAV_LINKS.map(({ label, to }, i) => {
                  const isActive = pathname === to || pathname.startsWith(`${to}/`);
                  return (
                    <motion.div
                      key={to}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.06 + i * 0.04, duration: 0.2 }}
                    >
                      <Link
                        href={to}
                        onClick={() => setMenuOpen(false)}
                        className={`flex items-center justify-between py-3 px-3 rounded-lg text-[14px] transition-colors ${
                          isActive
                            ? 'text-accent font-medium bg-accent/5'
                            : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-white/[0.05]'
                        }`}
                      >
                        {label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="px-5 py-5 border-t border-neutral-100 dark:border-white/[0.06]">
                <p className="text-[11px] text-neutral-400 dark:text-neutral-600 font-mono">
                  Washington Karanja · Nairobi, KE
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
