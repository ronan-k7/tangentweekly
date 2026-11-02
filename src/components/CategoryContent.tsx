'use client';
import { useRef, useEffect } from 'react';
import DailyPuzzles from './DailyPuzzles';
import TrendingCard from './TrendingCard';
import InteractiveCard from './InteractiveCard';
import NewsGrid from './NewsGridCategory';
import CategoryNewsCard from './CategoryNewsCard';
import CategoryFirstSection from './CategoryFirstSection';
import SectionWrapper from './SectionWrapper';
import EducationData from '../../public/data/education.json';
import HorizontalNews from './HorizontalNews';
import EditorsPicksSection from './EditorsPick';

interface Props {
  activeMain: string;
  data: any[];
}

export default function CategoryContent({ activeMain, data }: Props) {
  const excludeSlugs = [
    "lawyers-switch-sides-bancredito-15-million-lesson",
  ];

  const filteredData = data.filter(item => !excludeSlugs.includes(item.slug));

  function formatCategoryName(text: string) {
    if (!text) return '';
    return text.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

  // -- Sticky sidebar refs --------------------------------------------------
  // Row 1: NewsGrid + InteractiveCard
  const row1ContentRef = useRef<HTMLDivElement>(null);
  const row1SidebarRef = useRef<HTMLDivElement>(null);
  const row1SidebarColRef = useRef<HTMLDivElement>(null);

  // Row 2: CategoryFirstSection + TrendingCard
  const row2ContentRef = useRef<HTMLDivElement>(null);
  const row2SidebarRef = useRef<HTMLDivElement>(null);
  const row2SidebarColRef = useRef<HTMLDivElement>(null);

  // Reusable sticky setup (direct DOM - no React state, no re-render jitter)
  const setupSticky = (
    contentEl: HTMLDivElement | null,
    sidebarEl: HTMLDivElement | null,
    sidebarColEl: HTMLDivElement | null,
    topOffset = 90
  ) => {
    if (!contentEl || !sidebarEl || !sidebarColEl) return () => {};

    // Track last state to avoid redundant style writes
    let lastState = '';

    const handleScroll = () => {
      const contentRect = contentEl.getBoundingClientRect();
      const sidebarHeight = sidebarEl.offsetHeight;
      const contentHeight = contentEl.offsetHeight;
      const contentBottom = contentRect.bottom;
      const contentTop = contentRect.top;

      if (contentTop > topOffset) {
        // Natural - not yet sticky. Column height = auto (no size change to card)
        if (lastState !== 'natural') {
          lastState = 'natural';
          sidebarColEl.style.height = '';
          sidebarEl.style.position = 'relative';
          sidebarEl.style.top = '';
          sidebarEl.style.width = '';
        }
      } else if (contentBottom > sidebarHeight + topOffset) {
        // Sticky - fix sidebar to viewport. Set column height NOW to prevent collapse
        if (lastState !== 'fixed') {
          lastState = 'fixed';
          sidebarColEl.style.height = contentHeight + 'px';
        }
        sidebarEl.style.position = 'fixed';
        sidebarEl.style.top = topOffset + 'px';
        sidebarEl.style.width = sidebarColEl.offsetWidth + 'px';
      } else {
        // Released - anchor to bottom of content column, scrolls away naturally
        if (lastState !== 'absolute') {
          lastState = 'absolute';
          sidebarColEl.style.height = contentHeight + 'px';
        }
        sidebarEl.style.position = 'absolute';
        sidebarEl.style.top = (contentHeight - sidebarHeight) + 'px';
        sidebarEl.style.width = '100%';
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  };

  useEffect(() => {
    const cleanupRow1 = setupSticky(
      row1ContentRef.current,
      row1SidebarRef.current,
      row1SidebarColRef.current
    );
    const cleanupRow2 = setupSticky(
      row2ContentRef.current,
      row2SidebarRef.current,
      row2SidebarColRef.current
    );
    return () => { cleanupRow1(); cleanupRow2(); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-100 container">
      <div>
        <h1
          className="text-black mb-2"
          style={{
            fontSize: '36.496px',
            fontFamily: "'Archivo', Arial, sans-serif",
            fontWeight: 900
          }}
        >
          {formatCategoryName(activeMain)}
        </h1>
        <hr style={{ borderTop: '1px solid #4444' }} />

      </div>

      {/* Row 1: Top news grid + InteractiveCard sidebar (sticky) */}
      <div className="row" style={{ alignItems: 'flex-start', position: 'relative' }}>
        {/* Left Column */}
        <div className="col-lg-9 col-12 mb-3" ref={row1ContentRef}>
          <NewsGrid data={[filteredData[0], filteredData[1], filteredData[2], filteredData[3], filteredData[4]]} />
        </div>

        {/* Right Column */}
        <div className="col-lg-3 col-12 mb-md-3" ref={row1SidebarColRef} style={{ position: 'relative' }}>
          <div ref={row1SidebarRef}>
            <InteractiveCard data={filteredData[5]} />
          </div>
        </div>
      </div>


      {/* Row 2: CategoryFirstSection + More News LEFT | TrendingCard RIGHT (sticky spans both) */}
      <div className="row mt-md-4 mt-3" style={{ alignItems: 'flex-start', position: 'relative' }}>
        <div className="col-lg-9 col-12" ref={row2ContentRef}>
          <CategoryFirstSection
            data={{
              main: filteredData[6],
              side: [filteredData[7], filteredData[8]],
              bottomCards: [filteredData[9], filteredData[10], filteredData[11], filteredData[12]],
            }}
          />

          {/* More News sits inside the left column so TrendingCard spans it too */}
          <div className="mt-5">
            <SectionWrapper title='More News'>
              {filteredData.slice(16).map((item, index) => (
                <CategoryNewsCard key={index + 17} data={item} />
              ))}
            </SectionWrapper>
          </div>
        </div>

        <div className="col-lg-3 col-12" ref={row2SidebarColRef} style={{ position: 'relative' }}>
          <div ref={row2SidebarRef}>
            <TrendingCard
              data={{
                section: filteredData[0]?.category || '',
                items: [filteredData[13], filteredData[14], filteredData[15]]
                  .filter(article => article !== undefined)
                  .map(article => ({
                    image: article.image,
                    title: article.title,
                    description: article.shortdescription,
                    slug: article.slug,
                    date: article.date,
                    category: article.category
                  })),
              }}
            />
          </div>
        </div>
      </div>

    </div>

  );
}
