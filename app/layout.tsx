import './globals.css';
import type { Metadata } from 'next';
import Layout from '@/components/layout/Layout';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata: Metadata = {
  title: {
    default: 'Washington Karanja',
    template: '%s — Washington Karanja',
  },
  description:
    'Frontend engineer from Nairobi building precise, performant web products.',
  openGraph: {
    title: 'Washington Karanja',
    description: 'Frontend engineer from Nairobi building precise, performant web products.',
    type: 'website',
    siteName: 'Washington Karanja',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-neutral-900 antialiased dark:bg-[#0a0a0a] dark:text-[#ededed] transition-colors duration-200">
        <ThemeProvider>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
