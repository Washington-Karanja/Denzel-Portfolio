import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
}

export default function SEO({ title, description, ogTitle, ogDescription }: SEOProps) {
  useEffect(() => {
    document.title = `${title} — Washington Karanja`;

    const setMeta = (key: string, value: string, prop = false) => {
      const attr = prop ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.content = value;
    };

    setMeta('description', description);
    setMeta('og:title', ogTitle ?? title, true);
    setMeta('og:description', ogDescription ?? description, true);
    setMeta('og:type', 'website', true);
    setMeta('og:site_name', 'Washington Karanja', true);
  }, [title, description, ogTitle, ogDescription]);

  return null;
}
