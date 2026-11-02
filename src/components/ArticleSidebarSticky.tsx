'use client';
import { useRef, useEffect } from 'react';
import RelatedNewsSidebar from './RelatedNewsSidebar';

interface Article {
  title: string;
  slug: string;
  date: string;
  category: string;
  image: string;
  shortdescription: string;
  [key: string]: unknown;
}

interface Props {
  data: Article[];
  category: string;
  /** Pass the article content column height via ref sharing is not possible in RSC,
   *  so we use a data attribute on the parent row and find the sibling column. */
}

export default function ArticleSidebarSticky({ data, category }: Props) {
  const colRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sidebarColEl = colRef.current;
    const sidebarEl = sidebarRef.current;
    if (!sidebarColEl || !sidebarEl) return;

    // Find the sibling content column (first col in the parent row)
    const row = sidebarColEl.parentElement;
    if (!row) return;
    const contentEl = row.querySelector<HTMLElement>('[data-article-content]');
    if (!contentEl) return;

    const TOP_OFFSET = 90;
    let naturalWidth = sidebarColEl.offsetWidth;
    let lastState = '';

    const handleScroll = () => {
      const contentRect = contentEl.getBoundingClientRect();
      const sidebarHeight = sidebarEl.offsetHeight;
      const contentHeight = contentEl.offsetHeight;
      const contentBottom = contentRect.bottom;
      const contentTop = contentRect.top;

      if (contentTop > TOP_OFFSET) {
        if (lastState !== 'natural') {
          lastState = 'natural';
          naturalWidth = sidebarColEl.offsetWidth;
          sidebarColEl.style.height = '';
          sidebarEl.style.position = 'relative';
          sidebarEl.style.top = '';
          sidebarEl.style.width = '';
        }
      } else if (contentBottom > sidebarHeight + TOP_OFFSET) {
        if (lastState !== 'fixed') {
          lastState = 'fixed';
          sidebarColEl.style.height = contentHeight + 'px';
        }
        sidebarEl.style.position = 'fixed';
        sidebarEl.style.top = TOP_OFFSET + 'px';
        sidebarEl.style.width = naturalWidth + 'px';
      } else {
        if (lastState !== 'absolute') {
          lastState = 'absolute';
          sidebarColEl.style.height = contentHeight + 'px';
        }
        sidebarEl.style.position = 'absolute';
        sidebarEl.style.top = (contentHeight - sidebarHeight) + 'px';
        sidebarEl.style.width = naturalWidth + 'px';
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div ref={colRef} className="col-12 col-lg-4 col-xl-3" style={{ position: 'relative' }}>
      <div ref={sidebarRef}>
        <RelatedNewsSidebar data={data} category={category} />
      </div>
    </div>
  );
}

