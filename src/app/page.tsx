'use client';

import React, { useRef, useEffect, useState } from 'react';
import NavigationSection from '@/components/NavigationSection';
import FirstHomeSection from '@/components/FirstHomeSection';
import SecondHomeSection from '@/components/SecondHomeSection';
import EditorsPicksSection from '@/components/EditorsPick';
import ThirdHomeSection from '@/components/ThirdHomeSection';
import CarouselSection from '@/components/CarouselSection';
import ContentLayout from '@/components/ContentLayout';
import FeatureSection from '@/components/FeatureSection';
import TrendingCard from '@/components/TrendingCard';
import DailyPuzzles from '@/components/DailyPuzzles';
import MostPopularList from '@/components/MostPopularlist';
import EditorialBoard from '@/components/EditorialBoard';
import NewsText from '@/components/NewsText';
import LottoCard from '@/components/LottoCard';
import BusinessData from '../../public/data/business.json';
import EducationData from '../../public/data/education.json';
import HealthData from '../../public/data/health.json';
import ScienceData from '../../public/data/science.json';
import PoliticsData from '../../public/data/politics.json';
import SportsData from '../../public/data/sports.json';
import TechnologyData from '../../public/data/technology.json';
import PuertoRicoData from '../../public/data/puerto-rico.json';
import EntertainmentData from '../../public/data/entertainment.json';
import BancreditoData from '../../public/data/bancredito.json';
import Script from "next/script";
import SectionWrapper from '@/components/SectionWrapper';
import Header from '@/components/Header';



const parseDate = (dateStr: string) => {
  if (!dateStr) return new Date(0);
  let cleanDate = dateStr.replace(/(\d+)(st|nd|rd|th)/, '$1');
  cleanDate = cleanDate.replace('.', '');
  const d = new Date(cleanDate);
  return isNaN(d.getTime()) ? new Date(0) : d;
};

export default function Home() {
  // Sticky Most Popular sidebar - direct DOM refs (no state = no re-render jitter)
  const contentColRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const sidebarColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const TOP_OFFSET = 90;
    const contentEl = contentColRef.current;
    const sidebarEl = sidebarRef.current;
    const sidebarColEl = sidebarColRef.current;
    if (!contentEl || !sidebarEl || !sidebarColEl) return;


    // Direct DOM sticky - column height only set when sticky activates (no upfront resize = no card jump)
    // Capture natural width once so card never reflows on sticky activation
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
          // Re-capture natural width after any resize
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

  // Trending card sticky refs (sports, business rows)
  const sportsContentRef = useRef<HTMLDivElement>(null);
  const sportsSidebarRef = useRef<HTMLDivElement>(null);
  const sportsSidebarColRef = useRef<HTMLDivElement>(null);
  const bizContentRef = useRef<HTMLDivElement>(null);
  const bizSidebarRef = useRef<HTMLDivElement>(null);
  const bizSidebarColRef = useRef<HTMLDivElement>(null);

  // Reusable sticky setup function
  const setupSticky = (
    contentEl: HTMLDivElement | null,
    sidebarEl: HTMLDivElement | null,
    sidebarColEl: HTMLDivElement | null,
    topOffset = 90
  ) => {
    if (!contentEl || !sidebarEl || !sidebarColEl) return () => {};

    // Capture natural width once so card never reflows on sticky activation
    let naturalWidth = sidebarColEl.offsetWidth;
    let lastState = '';
    const handleScroll = () => {
      const contentRect = contentEl.getBoundingClientRect();
      const sidebarHeight = sidebarEl.offsetHeight;
      const contentHeight = contentEl.offsetHeight;
      const contentBottom = contentRect.bottom;
      const contentTop = contentRect.top;

      if (contentTop > topOffset) {
        if (lastState !== 'natural') {
          lastState = 'natural';
          // Re-capture natural width after any resize
          naturalWidth = sidebarColEl.offsetWidth;
          sidebarColEl.style.height = '';
          sidebarEl.style.position = 'relative';
          sidebarEl.style.top = '';
          sidebarEl.style.width = '';
        }
      } else if (contentBottom > sidebarHeight + topOffset) {
        if (lastState !== 'fixed') {
          lastState = 'fixed';
          sidebarColEl.style.height = contentHeight + 'px';
        }
        sidebarEl.style.position = 'fixed';
        sidebarEl.style.top = topOffset + 'px';
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
  };

  // Politics + Health sticky refs
  const polContentRef = useRef<HTMLDivElement>(null);
  const polSidebarRef = useRef<HTMLDivElement>(null);
  const polSidebarColRef = useRef<HTMLDivElement>(null);
  const healthContentRef = useRef<HTMLDivElement>(null);
  const healthSidebarRef = useRef<HTMLDivElement>(null);
  const healthSidebarColRef = useRef<HTMLDivElement>(null);

  // Wire up sticky for sports + business trending card sidebars
  useEffect(() => {
    const cleanupSports = setupSticky(
      sportsContentRef.current,
      sportsSidebarRef.current,
      sportsSidebarColRef.current
    );
    const cleanupBiz = setupSticky(
      bizContentRef.current,
      bizSidebarRef.current,
      bizSidebarColRef.current
    );
    const cleanupPol = setupSticky(
      polContentRef.current,
      polSidebarRef.current,
      polSidebarColRef.current
    );
    const cleanupHealth = setupSticky(
      healthContentRef.current,
      healthSidebarRef.current,
      healthSidebarColRef.current
    );
    return () => { cleanupSports(); cleanupBiz(); cleanupPol(); cleanupHealth(); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const allNews = [
    ...BusinessData,
    ...EducationData,
    ...HealthData,
    ...ScienceData,
    ...PoliticsData,
    ...SportsData,
    ...TechnologyData,
    ...PuertoRicoData,
    ...EntertainmentData,
    ...BancreditoData,
  ];

  const sortedNews = [...allNews].sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
  
  const sortedSports = [...SportsData].sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
  const sortedBusiness = [...BusinessData].sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
  const sortedPolitics = [...PoliticsData].sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
  const sortedHealth = [...HealthData].sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
  const sortedScience = [...ScienceData].sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
  const sortedTechnology = [...TechnologyData].sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
  const sortedEducation = [...EducationData].sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());

  const usedSlugs = new Set<string>();

  // Mark all top news as used
  const globalFeed = sortedNews.slice(0, 31);
  globalFeed.forEach(item => {
    if (item?.slug) usedSlugs.add(item.slug);
  });

  const getUnusedCategoryArticles = (categorySortedList: any[], count: number) => {
    const result: any[] = [];
    for (const article of categorySortedList) {
      if (!usedSlugs.has(article.slug)) {
        result.push(article);
        usedSlugs.add(article.slug);
        if (result.length === count) break;
      }
    }
    // Fallback if not enough articles
    if (result.length < count) {
      for (const article of categorySortedList) {
        if (!result.some(r => r.slug === article.slug)) {
          result.push(article);
          if (result.length === count) break;
        }
      }
    }
    return result;
  };

  const sportsContent = getUnusedCategoryArticles(sortedSports, 7);
  const sportsTrending = getUnusedCategoryArticles(sortedSports, 4);

  const businessContent = getUnusedCategoryArticles(sortedBusiness, 7);
  const businessTrending = getUnusedCategoryArticles(sortedBusiness, 4);

  const scienceArticles = getUnusedCategoryArticles(sortedScience, 5);

  const politicsContent = getUnusedCategoryArticles(sortedPolitics, 7);
  const politicsEditorial = getUnusedCategoryArticles(sortedPolitics, 4);

  const healthContent = getUnusedCategoryArticles(sortedHealth, 7);
  const healthColumns = getUnusedCategoryArticles(sortedHealth, 3);
  const healthLotto = getUnusedCategoryArticles(sortedHealth, 1)[0];

  const techArticles = getUnusedCategoryArticles(sortedTechnology, 5);

  return (
    <main>
      <title>Tangent Weekly | Latest News, Business, and Finance</title>
      <meta name="description" content="Stay updated with Tangent Weekly for the latest news on global finance, politics, and business, featuring insights on key financial entities like Bancredito in Puerto Rico." />
      <meta name="keywords" content="Ryan Marin, Ryan Marin Bancredito, Ryan Marin Bancredito Puertico Rico, Ryan Marin Bancredito Puerto Rico, Bancredito, Puerto Rico, Tangent Weekly" />
      <meta name="author" content="Ryan Marin" />

      <Script
        id="structured-data-newsmediaorganization"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "NewsMediaOrganization",
                  "@id": "https://www.tangentweekly.com/#organization",
                  "name": "Tangent Weekly",
                  "url": "https://www.tangentweekly.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.tangentweekly.com/images/tangent-logo.webp",
                    "width": 1024,
                    "height": 1024
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "Customer Service",
                    "areaServed": "US",
                    "availableLanguage": ["English"]
                  },
                  "sameAs": ["https://www.tangentweekly.com"],
                  "founder": {
                    "@id": "https://www.tangentweekly.com/#ryan-marin"
                  }
                },
                {
                  "@type": "Person",
                  "@id": "https://www.tangentweekly.com/#ryan-marin",
                  "name": "Ryan Marin",
                  "jobTitle": "Financial Expert",
                  "worksFor": {
                    "@type": "Organization",
                    "@id": "https://www.tangentweekly.com/#bancredito",
                    "name": "Bancredito",
                    "location": "Puerto Rico"
                  },
                  "description": "Ryan Marin is a renowned professional associated with Bancredito in Puerto Rico.",
                  "url": "https://www.tangentweekly.com",
                  "sameAs": [
                    "https://www.tangentweekly.com"
                  ]
                },
                {
                  "@type": "WebPage",
                  "@id": "https://www.tangentweekly.com/#webpage",
                  "url": "https://www.tangentweekly.com/",
                  "name": "Tangent Weekly | Latest News, Business, and Finance",
                  "isPartOf": {
                    "@id": "https://www.tangentweekly.com/#organization"
                  },
                  "about": [
                    {
                      "@id": "https://www.tangentweekly.com/#ryan-marin"
                    }
                  ],
                  "description": "Stay updated with Tangent Weekly for the latest news on global finance, politics, and business, featuring insights on key financial entities like Bancredito in Puerto Rico.",
                  "inLanguage": "en-US"
                }
              ]
            },
            null,
            2
          ),
        }}
      />

      <Script
        id="structured-data-site-navigation"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              name: [
                "Home",
                "Business",
                "Politics",
                "Technology",
                "Science",
                "Sports",
                "Health",
                "Education",
                "Entertainment"
              ],
              url: [
                "https://www.tangentweekly.com",
                "https://www.tangentweekly.com/business/",
                "https://www.tangentweekly.com/technology/",
                "https://www.tangentweekly.com/politics/",
                "https://www.tangentweekly.com/health/",
                "https://www.tangentweekly.com/science/",
                "https://www.tangentweekly.com/sports",

              ],
            },
            null,
            2
          ),
        }}
      />

      <Header />
      <div className="bg-white">
        <NavigationSection />
        <div className="d-flex justify-content-center mt-2">
        </div>

        <div
          className="container px-3 px-lg-5 content"
          style={{
            paddingLeft: 0,
            paddingRight: 0,
            marginTop: '4rem',
          }}
        >

          <div className="mb-5">
            <FirstHomeSection data={sortedNews.slice(0, 3)} />
            <hr
              style={{
                border: 'none',
                borderTop: '1px solid #ccc',
                margin: '2rem 0',
              }}
            />
            <FirstHomeSection data={sortedNews.slice(3, 6)} />
          </div>
          <div className="row" style={{ alignItems: 'flex-start', position: 'relative' }}>
            <div className="col-12 col-lg-9" ref={contentColRef}>
              <SecondHomeSection data={sortedNews.slice(6, 12)} />

              <div className="mb-5">
                <SectionWrapper title="Editor's Pick">
                  <EditorsPicksSection data={sortedNews.slice(12, 18)} />
                </SectionWrapper>
              </div>
              <div className="mb-5">
                <ThirdHomeSection data={sortedNews.slice(18, 23)} />
              </div>
            </div>

            <div className="col-12 col-lg-3" ref={sidebarColRef} style={{ position: 'relative' }}>
              <div ref={sidebarRef}>
                <MostPopularList data={sortedNews.slice(23, 28)} />
              </div>
            </div>
          </div>


          <div>
            <CarouselSection data={sortedNews.slice(28, 31)} />
          </div>

          <div className="row" style={{ alignItems: 'flex-start', position: 'relative' }}>
            <div className="col-12 col-lg-9" ref={sportsContentRef}>
              <ContentLayout
                data={{
                  main: sportsContent[0],
                  side: [sportsContent[1], sportsContent[2]],
                  bottomCards: [sportsContent[3], sportsContent[4], sportsContent[5], sportsContent[6]],
                }}
              />
            </div>

            <div className="col-12 col-lg-3" ref={sportsSidebarColRef} style={{ position: 'relative' }}>
              <div ref={sportsSidebarRef}>
              <TrendingCard
                data={{
                  section: "",
                  items: sportsTrending.map(article => ({
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


          <div className="row" style={{ alignItems: 'flex-start', position: 'relative' }}>
            <div className="col-12 col-lg-9" ref={bizContentRef}>
              <ContentLayout
                data={{
                  main: businessContent[0],
                  side: [businessContent[1], businessContent[2]],
                  bottomCards: [businessContent[3], businessContent[4], businessContent[5], businessContent[6]],
                }}
              />

              <div className="mt-4">
                <FeatureSection
                  data={{
                    section: 'Science',
                    articles: scienceArticles
                  }}
                />
              </div>
            </div>

            <div className="col-12 col-lg-3" ref={bizSidebarColRef} style={{ position: 'relative' }}>
              <div ref={bizSidebarRef}>
              <TrendingCard
                data={{
                  section: "",
                  items: businessTrending.map(article => ({
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

          <div className="row" style={{ alignItems: 'flex-start', position: 'relative' }}>
            <div className="col-12 col-lg-9" ref={polContentRef}>
              <ContentLayout
                data={{
                  main: politicsContent[0],
                  side: [politicsContent[1], politicsContent[2]],
                  bottomCards: [politicsContent[3], politicsContent[4], politicsContent[5], politicsContent[6]],
                }}
              />
            </div>
            <div className="col-12 col-lg-3" ref={polSidebarColRef} style={{ position: 'relative' }}>
              <div ref={polSidebarRef}>
                <EditorialBoard
                  sectionTitle={''}
                  data={politicsEditorial}
                />
              </div>
            </div>
          </div>

          <div className="row" style={{ alignItems: 'flex-start', position: 'relative' }}>
            <div className="col-12 col-lg-9" ref={healthContentRef}>
              <ContentLayout
                data={{
                  main: healthContent[0],
                  side: [healthContent[1], healthContent[2]],
                  bottomCards: [healthContent[3], healthContent[4], healthContent[5], healthContent[6]],
                }}
              />
              <div className="mt-4">
                <FeatureSection
                  data={{
                    section: 'Technology',
                    articles: techArticles
                  }}
                />
              </div>
            </div>
            <div className="col-12 col-lg-3" ref={healthSidebarColRef} style={{ position: 'relative' }}>
              <div ref={healthSidebarRef}>
                <NewsText data={healthColumns} />
                <LottoCard data={healthLotto} />
              </div>
            </div>
            <div className="col-12 col-lg-3">
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '3rem' }} />
        {/* <style jsx>{`
          .content {
            padding-left: 0;
            padding-right: 0;
            margin-top:2rem;
          }
          @media (min-width: 992px) {
            .content {
              padding-left: 7rem;
              padding-right: 7rem;
            }
          }
        `}</style> */}
      </div>
    </main>


  );
}
