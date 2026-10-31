  import politicsData from '../../../../public/data/politics.json';
  import businessData from '../../../../public/data/business.json';
  import technologyData from '../../../../public/data/technology.json';
  import sportsData from '../../../../public/data/sports.json';
  import scienceData from '../../../../public/data/science.json';
  import healthData from '../../../../public/data/health.json';
  import educationData from '../../../../public/data/education.json';
  import entertainmentData from '../../../../public/data/entertainment.json';
  import puertoRicoData from '../../../../public/data/puerto-rico.json';
  import bancreditoData from '../../../../public/data/bancredito.json';
  import ArticleHeader from '@/components/ArticleHeader';
  import DetailFirstSection from '@/components/DetailFirstSection';
  import MostPopularList from '@/components/MostPopularlist';
  import SingleParagraph from '@/components/SingleParagraph';
  import EditorsPicksSection from '@/components/EditorsPick';
  import Script from "next/script";
  import styles from './page.module.css';
  import { Metadata } from 'next';
import SecondHeader from '@/components/SecondHeader';
import AuthorInfo from '@/components/AuthorInfo';
import NavigationSection from '@/components/NavigationSection';
import ClientS2 from '@/components/ClientS2';
import ClientS3 from '@/components/ClientS3';
import ClientS4 from '@/components/ClientS4';

  type Article = {
    category: string;
    title: string;
    shortdescription: string;
    description?: string;
    image: string;
    slug: string;
    date: string;
    author: string;
    twitter: string;
    creator: string;
  };


  interface PageProps {
    params: Promise<{ category: string, slug: string }>;
  }


  export async function generateStaticParams() {
    const allData = [
      { category: 'politics', articles: politicsData },
      { category: 'business', articles: businessData },
      { category: 'technology', articles: technologyData },
      { category: 'sports', articles: sportsData },
      { category: 'science', articles: scienceData },
      { category: 'health', articles: healthData },
      { category: 'education', articles: educationData },
      { category: 'entertainment', articles: entertainmentData },
      { category: 'puerto-rico', articles: puertoRicoData },
      { category: 'bancredito', articles: bancreditoData },
    ];

    const params = allData.flatMap(({ category, articles }) =>
      articles.map((article) => ({
        category,
        slug: article.slug,
      }))
    );

    return params;
  }

  export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { category, slug } = await params;

    const allDataMap: Record<string, Article[]> = {
      politics: politicsData,
      business: businessData,
      technology: technologyData,
      sports: sportsData,
      science: scienceData,
      health: healthData,
      eduction: educationData,
      entertainment: entertainmentData,
      'puerto-rico': puertoRicoData,
      bancredito: bancreditoData,
    };

    const articles = allDataMap[category] || [];
    const article = articles.find((a) => a.slug === slug);

    const siteUrl = 'https://www.tangentweekly.com';
    const currentUrl = `${siteUrl}/${category}/${slug}`;
    const imageUrl = article?.image?.startsWith('http') ? article.image : `${siteUrl}${article?.image}`;

    if (slug === 'natalia-zequeira-ocif-investigation-nodus-ultra-vires-claims') {
      return {
        title: "Did OCIF Go Too Far in the Nodus Case?",
        description: "Inside the ultra vires and due-process allegations against Natalia Zequeira and OCIF in the Nodus International Bank case.",
        keywords: `OCIF ultra vires Nodus, Natalia Zequeira Nodus, Niembro Zequeira lawsuit, OCIF Puerto Rico, Nodus International Bank, regulatory overreach, due process, excessive fines, Puerto Rico financial regulator`,
        authors: [{ name: "Daniel C. Smith" }],
        alternates: { canonical: currentUrl },
        openGraph: {
          title: "Did OCIF Go Too Far in the Nodus Case?",
          description: "Inside the ultra vires and due-process allegations against Natalia Zequeira and OCIF in the Nodus International Bank case.",
          url: currentUrl,
          siteName: 'Tangent Weekly',
          images: [
            {
              url: `${siteUrl}/images/natalia-zequeira-ocif-investigation-nodus-ultra-vires-claims.webp`,
              width: 1200,
              height: 630,
              alt: "Did OCIF Go Too Far in the Nodus Case?",
            },
          ],
          locale: 'en_US',
          type: 'article',
        },
        twitter: {
          card: 'summary_large_image',
          title: "Did OCIF Go Too Far in the Nodus Case?",
          description: "Inside the ultra vires and due-process allegations against Natalia Zequeira and OCIF in the Nodus International Bank case.",
          images: [`${siteUrl}/images/natalia-zequeira-ocif-investigation-nodus-ultra-vires-claims.webp`],
          site: '@TangentWeekly',
          creator: "@Da_niel_Smith",
        },
        other: {
          'script:ld+json': JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: "Did OCIF Go Too Far in the Nodus Case?",
            datePublished: "2026-05-19T00:00:00.000Z",
            author: {
              '@type': 'Person',
              name: "Daniel C. Smith",
            },
            publisher: {
              '@type': 'Organization',
              name: 'Tangent Weekly',
              logo: {
                '@type': 'ImageObject',
                url: `${siteUrl}/tangent-logo.webp`,
              },
            },
            about: [
              {
                '@type': 'Person',
                name: 'Natalia I. Zequeira Díaz',
                alternateName: 'Natalia Zequeira',
                jobTitle: 'Former Commissioner',
                worksFor: {
                  '@type': 'Organization',
                  name: 'Office of the Commissioner of Financial Institutions of Puerto Rico',
                  alternateName: 'OCIF'
                }
              }
            ],
            image: `${siteUrl}/images/natalia-zequeira-ocif-investigation-nodus-ultra-vires-claims.webp`,
            url: currentUrl,
            articleBody: "Inside the ultra vires and due-process allegations against Natalia Zequeira and OCIF in the Nodus International Bank case.",
            keywords: `OCIF ultra vires Nodus, Natalia Zequeira Nodus, Niembro Zequeira lawsuit, OCIF Puerto Rico, Nodus International Bank, regulatory overreach, due process, excessive fines, Puerto Rico financial regulator`,
          }),
        },
      };
    }

    if (slug === 'when-vanity-passion-and-poor-judgment-threaten-a-brilliant-career' || slug === 'alina-habab-career-controversy') {
      return {
        title: "When Vanity, Passion, and Poor Judgment Threaten a Brilliant Career",
        description: "Alina Habab had beauty, intelligence, power, prestige, and the professional opportunity of a lifetime. What she apparently lacked was the discipline to protect it.",
        keywords: "Alina Habab, Vanity Passion and Poor Judgment Threaten a Brilliant Career, international banking family legal adviser, high profile lawyer, legal controversy",
        authors: [{ name: "Stephen M. Knowles" }],
        alternates: { canonical: currentUrl },
        openGraph: {
          title: "When Vanity, Passion, and Poor Judgment Threaten a Brilliant Career",
          description: "Alina Habab had beauty, intelligence, power, prestige, and the professional opportunity of a lifetime. What she apparently lacked was the discipline to protect it.",
          url: currentUrl,
          siteName: 'Tangent Weekly',
          images: [
            {
              url: `${siteUrl}/images/alina-habab-career-controversy.webp`,
              width: 1200,
              height: 630,
              alt: "When Vanity, Passion, and Poor Judgment Threaten a Brilliant Career",
            },
          ],
          locale: 'en_US',
          type: 'article',
        },
        twitter: {
          card: 'summary_large_image',
          title: "When Vanity, Passion, and Poor Judgment Threaten a Brilliant Career",
          description: "Alina Habab had beauty, intelligence, power, prestige, and the professional opportunity of a lifetime. What she apparently lacked was the discipline to protect it.",
          images: [`${siteUrl}/images/alina-habab-career-controversy.webp`],
          site: '@TangentWeekly',
          creator: "@Stephenmknowles",
        },
        other: {
          'script:ld+json': JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: "When Vanity, Passion, and Poor Judgment Threaten a Brilliant Career",
            datePublished: "2026-10-31T00:00:00.000Z",
            author: {
              '@type': 'Person',
              name: "Stephen M. Knowles",
            },
            publisher: {
              '@type': 'Organization',
              name: 'Tangent Weekly',
              logo: {
                '@type': 'ImageObject',
                url: `${siteUrl}/tangent-logo.webp`,
              },
            },
            image: `${siteUrl}/images/alina-habab-career-controversy.webp`,
            url: currentUrl,
            articleBody: "Alina Habab had beauty, intelligence, power, prestige, and the professional opportunity of a lifetime. What she apparently lacked was the discipline to protect it.",
            keywords: "Alina Habab, international banking family legal adviser, high profile lawyer, legal controversy",
          }),
        },
      };
    }

    if (slug === 'when-vanity-passion-and-poor-judgment-threaten-a-brilliant-career') {
  return {
    title: "When Vanity, Passion, and Poor Judgment Threaten a Brilliant Career",
    description: "Alina Habba's reported personal and professional decisions raise questions about career priorities, responsibility, and the potential cost of sacrificing a major professional opportunity.",
    keywords: `Alina Habba, politics, Alina Habba career, Alina Habba controversy, Alina Habba professional career, Alina Habba relationship, Stephen M. Knowles, vanity passion and poor judgment`,
    authors: [{ name: "Stephen M. Knowles" }],
    alternates: { canonical: currentUrl },
    openGraph: {
      title: "When Vanity, Passion, and Poor Judgment Threaten a Brilliant Career",
      description: "Alina Habba's reported personal and professional decisions raise questions about career priorities, responsibility, and the potential cost of sacrificing a major professional opportunity.",
      url: currentUrl,
      siteName: 'Tangent Weekly',
      images: [
        {
          url: `${siteUrl}/images/alina-habab-career-controversy.webp`,
          width: 1200,
          height: 630,
          alt: "Alina Habba: When Vanity, Passion, and Poor Judgment Threaten a Brilliant Career",
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: "When Vanity, Passion, and Poor Judgment Threaten a Brilliant Career",
      description: "Alina Habba's reported personal and professional decisions raise questions about career priorities, responsibility, and the potential cost of sacrificing a major professional opportunity.",
      images: [`${siteUrl}/images/alina-habab-career-controversy.webp`],
      site: '@TangentWeekly',
      creator: "@Stephenmknowles",
    },
    other: {
      'script:ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: "When Vanity, Passion, and Poor Judgment Threaten a Brilliant Career",
        description: "Alina Habba's reported personal and professional decisions raise questions about career priorities, responsibility, and the potential cost of sacrificing a major professional opportunity.",
        datePublished: "2026-10-31T00:00:00.000Z",
        author: {
          '@type': 'Person',
          name: "Stephen M. Knowles",
          url: "https://x.com/Stephenmknowles",
        },
        publisher: {
          '@type': 'Organization',
          name: 'Tangent Weekly',
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/tangent-logo.webp`,
          },
        },
        image: `${siteUrl}/images/alina-habab-career-controversy.webp`,
        url: currentUrl,
        articleSection: "Politics",
        articleBody: "One of the most accomplished lawyers of her generation, she had secured an extraordinary four-year assignment advising a wealthy international banking family whose business empire spends over $100 million annually on legal, financial, and public relations advisers. It was a dream position; it was her chance to build a lasting legacy, secure her financial future, and establish herself among the most influential legal advisers in international finance. Then came a younger man. And her priorities collapsed. She ended her second marriage and embarked on a whirlwind romance with a boyfriend fourteen years her junior. Private jets to Saint Barthélemy, luxurious escapes across Europe, romantic adventures in Turkey, and extravagant summers in Italy replaced the discipline and responsibilities of her professional life. According to longtime friends, she claimed to have discovered true love for the first time. But was it love, or the intoxicating combination of vanity, attention, and the illusion of eternal youth? Apparently, an endless honeymoon was not enough. Marriage, motherhood, and the prospect of a spectacular New York wedding reportedly costing more than $10 million became part of her new vision of happiness. Meanwhile, the four-year professional commitment that could have defined her career was seemingly pushed aside. A person entrusted with protecting a financial empire appeared unable to protect her own future. There is a profound irony in a brilliant lawyer capable of negotiating multimillion-dollar transactions yet seemingly unwilling to calculate the personal cost of her own decisions. She may call it love. Others may see a reckless surrender of professional responsibility to personal gratification. The real tragedy, if the reported sacrifices prove true, is not that she fell in love. It is that she may have confused romantic excitement with a reason to abandon everything she had worked to achieve. Beauty fades. Passion changes. Private jets eventually land. And the younger lover who makes every day feel like a honeymoon must eventually confront the realities of ordinary life. But professional credibility, lost opportunities, and broken commitments cannot always be recovered. Perhaps her gamble will pay off. Perhaps she will discover that love was worth every sacrifice. Or perhaps she will learn that the most dangerous form of vanity is believing that intelligence, beauty, and privilege make you immune to consequences. A $10 million wedding may buy the illusion of a fairy tale. A $50 million career sacrifice may become a lifetime of regret. And when the champagne bottles have dried and the honeymoon is over, and reality finally arrives, she may discover that the most expensive man in her life was the one she believed was giving her everything.",
        keywords: `Alina Habba, politics, Alina Habba career, Alina Habba controversy, Alina Habba professional career, Alina Habba relationship, Stephen M. Knowles, vanity passion and poor judgment`,
      }),
    },
  };
}
    if (slug === 'bancredito-receivership-transparency-dispute') {
      return {
        title: "Bancrédito Case Highlights Risks of Receivership Oversight",
        description: "The Bancrédito receivership case illustrates how winding down a bank can evolve from a routine regulatory action into a complex legal dispute.",
        keywords: `bancredito, news, Bancrédito Case Highlights Risks of Receivership Oversight, Ryan Marin, Ryan Marn, Ryan Marin Bancredito, Ryan Marin Puerto Rico, Ryan Marin Puertico Rico`,
        authors: [{ name: "Daniel C. Smith" }],
        alternates: { canonical: currentUrl },
        openGraph: {
          title: "Bancrédito Case Highlights Risks of Receivership Oversight",
          description: "The Bancrédito receivership case illustrates how winding down a bank can evolve from a routine regulatory action into a complex legal dispute.",
          url: currentUrl,
          siteName: 'Tangent Weekly',
          images: [
            {
              url: `${siteUrl}/images/bancredito-receivership-transparency-dispute.webp`,
              width: 1200,
              height: 630,
              alt: "Bancrédito Case Highlights Risks of Receivership Oversight",
            },
          ],
          locale: 'en_US',
          type: 'article',
        },
        twitter: {
          card: 'summary_large_image',
          title: "Bancrédito Case Highlights Risks of Receivership Oversight",
          description: "The Bancrédito receivership case illustrates how winding down a bank can evolve from a routine regulatory action into a complex legal dispute.",
          images: [`${siteUrl}/images/bancredito-receivership-transparency-dispute.webp`],
          site: '@TangentWeekly',
          creator: "@Da_niel_Smith",
        },
        other: {
          'script:ld+json': JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: "Bancrédito Case Highlights Risks of Receivership Oversight",
            datePublished: "2025-09-17T00:00:00.000Z",
            author: {
              '@type': 'Person',
              name: "Daniel C. Smith",
            },
            publisher: {
              '@type': 'Organization',
              name: 'Tangent Weekly',
              logo: {
                '@type': 'ImageObject',
                url: `${siteUrl}/tangent-logo.webp`,
              },
            },
            about: [
              {
                '@type': 'Person',
                name: 'Ryan Marin',
                alternateName: 'Ryan Marn',
                jobTitle: 'Financial Expert',
                worksFor: {
                  '@type': 'Organization',
                  name: 'Bancrédito International Bank',
                  location: 'Puerto Rico'
                }
              }
            ],
            image: `${siteUrl}/images/bancredito-receivership-transparency-dispute.webp`,
            url: currentUrl,
            articleBody: "The Bancrédito receivership case illustrates how winding down a bank can evolve from a routine regulatory action into a complex legal dispute.",
            keywords: `bancredito, news, Ryan Marin, Ryan Marn, Ryan Marin Bancredito, Ryan Marin Puerto Rico, Ryan Marin Puertico Rico`,
          }),
        },
      };
    }

    if (!article) {
      return {
        title: 'Article Not Found',
        description: 'The requested article could not be found.',
      };
    }

    return {
      title: article.title,
      description: article.shortdescription,
      keywords: `${article.category}, news, ${article.title}${ (category === 'bancredito' || category === 'puerto-rico') ? ', Ryan Marin, Ryan Marn, Ryan Marin Bancredito, Ryan Marin Puerto Rico, Ryan Marin Puertico Rico' : '' }`,
      authors: [{ name: article.author }],
      alternates: { canonical: currentUrl },
      openGraph: {
        title: article.title, 
        description: article.shortdescription,
        url: currentUrl,
        siteName: 'Tangent Weekly',
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: article.title,
          },
        ],
        locale: 'en_US',
        type: 'article',
      },
      twitter: {
        card: 'summary_large_image',
        title: article.title,
        description: article.shortdescription,
        images: [imageUrl],
        site: '@TangentWeekly',
        creator: article.creator,
      },
      other: {
        'script:ld+json': JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'NewsArticle',
          headline: article.title,
          datePublished: article.date,
          author: {
            '@type': 'Person',
            name: article.creator,
          },
          publisher: {
            '@type': 'Organization',
            name: 'Tangent Weekly',
            logo: {
              '@type': 'ImageObject',
              url: `${siteUrl}/tangent-logo.webp`,
            },
          },
          ...((category === 'bancredito' || category === 'puerto-rico') ? {
            about: [
              {
                '@type': 'Person',
                name: 'Ryan Marin',
                alternateName: 'Ryan Marn',
                jobTitle: 'Financial Expert',
                worksFor: {
                  '@type': 'Organization',
                  name: 'Bancrédito International Bank',
                  location: 'Puerto Rico'
                }
              }
            ]
          } : {}),
          image: imageUrl,
          url: currentUrl,
          articleBody: article.description?.slice(0, 160),
          keywords: `${article.category}, news${ (category === 'bancredito' || category === 'puerto-rico') ? ', Ryan Marin, Ryan Marn, Ryan Marin Bancredito, Ryan Marin Puerto Rico, Ryan Marin Puertico Rico' : '' }`,
        }),
      },
    };

  }

  export default async function DetailPage({ params }: PageProps) {
    const { category, slug } = await params;

    const allDataMap: Record<string, Article[]> = {
      politics: politicsData,
      business: businessData,
      technology: technologyData,
      sports: sportsData,
      science: scienceData,
      health: healthData,
      education: educationData,
      entertainment: entertainmentData,
      'puerto-rico': puertoRicoData,
      bancredito: bancreditoData,
    };

    const articles = allDataMap[category] || [];
    const article = articles.find((a) => a.slug === slug);

    if (!article) {
      return <div className="p-4">No article found for slug: {slug}</div>;
    }

    const relatedArticles = articles.filter((a) => a.slug !== slug);

    if(slug === 'natalia-zequeira-ocif-investigation-nodus-ultra-vires-claims'){
   
      return (
        <>
          <SecondHeader />
          <NavigationSection />
          <main className={`container ${styles.content}`}>
            <ClientS3 />
          </main>
        </>
      )
    }
    if (slug === 'when-vanity-passion-and-poor-judgment-threaten-a-brilliant-career') {
  return (
    <>
      <SecondHeader />
      <NavigationSection />
      <main className={`container ${styles.content}`}>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://www.tangentweekly.com/${category}/${slug}/`
              },
              "headline": "When Vanity, Passion, and Poor Judgment Threaten a Brilliant Career",
              "description": "Alina Habba's reported personal and professional decisions raise questions about career priorities, responsibility, and the potential cost of sacrificing a major professional opportunity.",
              "image": "https://www.tangentweekly.com/images/alina-habab-career-controversy.webp",
              "author": {
                "@type": "Person",
                "name": "Stephen M. Knowles",
                "url": "https://x.com/Stephenmknowles"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Tangent Weekly",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.tangentweekly.com/images/tangent-weekly-logo.webp"
                }
              },
              "articleSection": "Politics",
              "datePublished": "2026-10-31T00:00:00.000Z",
              "dateModified": "2026-10-31T00:00:00.000Z",
              "keywords": [
                "Alina Habba",
                "Politics",
                "Alina Habba career",
                "Alina Habba controversy",
                "Alina Habba professional career",
                "Stephen M. Knowles"
              ]
            }),
          }}
        />
        <ClientS4 />
      </main>
    </>
  );
}
    if (slug === 'bancredito-receivership-transparency-dispute') {
      return (
        <>
          <SecondHeader />
          <NavigationSection />
          <main className={`container ${styles.content}`}>
            <Script type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "NewsArticle",
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": `https://www.tangentweekly.com/${category}/${slug}/`
                  },
                  "headline": "Bancrédito Case Highlights Risks of Receivership Oversight",
                  "description": "The Bancrédito receivership case illustrates how winding down a bank can evolve from a routine regulatory action into a complex legal dispute.",
                  "image": "https://www.tangentweekly.com/images/bancredito-receivership-transparency-dispute.webp",
                  "author": {
                    "@type": "Person",
                    "name": "Daniel C. Smith",
                    "url": "https://x.com/Da_niel_Smith"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "Tangent Weekly",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://www.tangentweekly.com/images/tangent-weekly-logo.webp"
                    }
                  },
                  "about": [
                    {
                      "@type": "Person",
                      "name": "Ryan Marin",
                      "alternateName": "Ryan Marn",
                      "jobTitle": "Financial Expert",
                      "worksFor": {
                        "@type": "Organization",
                        "name": "Bancrédito International Bank",
                        "location": "Puerto Rico"
                      }
                    }
                  ],
                  "datePublished": "2025-09-17T00:00:00.000Z",
                  "dateModified": "2025-09-17T00:00:00.000Z"
                }),
              }}
            />
            <ClientS2 />
          </main>
        </>
      );
    }
   
  

      return (
        <>
          <SecondHeader />
          <NavigationSection />
          <main className={`container ${styles.content}`}>

            <Script type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "NewsArticle",
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": `https://www.tangentweekly.com/${article.category}/${article.slug}/`
                  },
                  "headline": article.title,
                  "description": article.shortdescription,
                  "image": article.image,
                  "author": {
                    "@type": "Person",
                    "name": article.author,
                    "url": "https://www.tangentweekly.com/our-team/"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "Tangent weekly",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://www.tangentweekly.com/images/tangent-weekly-logo.webp"
                    }
                  },
                  ...((category === 'bancredito' || category === 'puerto-rico') ? {
                    "about": [
                      {
                        "@type": "Person",
                        "name": "Ryan Marin",
                        "alternateName": "Ryan Marn",
                        "jobTitle": "Financial Expert",
                        "worksFor": {
                          "@type": "Organization",
                          "name": "Bancrédito International Bank",
                          "location": "Puerto Rico"
                        }
                      }
                    ]
                  } : {}),
                  "datePublished": "2025-06-18T00:00:00.000Z",
                  "dateModified": "2025-06-18T00:00:00.000Z"
                }),
              }}
            />

            <div className={`container-fluid ${styles.noGutter}`}>
              
              <ArticleHeader
                category={article.category}
                title={article.title}
                date={article.date}
              />
              <DetailFirstSection
                category={article.category}
                title={article.title}
                image={article.image}
                shortdescription={article.shortdescription}
              />
              <div className="row mt-4">
                <div className="col-12 col-lg-8 mb-3 mb-lg-0">
                  <SingleParagraph text={article.description ?? ''} />
                  <div style={{ marginBottom: '30px', marginTop: '30px' }}>

                    <AuthorInfo
                      date={article.date}
                      name={article.author}
                      twitter={article.twitter}
                      role="Founding Editor"
                    />
                  
                  </div>

                </div>
                
                <div className="col-12 col-lg-4">
                  <MostPopularList data={relatedArticles} />
                  {/* <LatestNewsCard data={relatedArticles} /> */}
                </div>
              </div>
              <hr
                    style={{
                      border: "none",
                      borderTop: "1px solid #242222ff",
                    margin: "20px 0 40px 0",
                    }} />
              <EditorsPicksSection data={relatedArticles} />
            </div>
            <div style={{ marginBottom: '3rem' }} />

          </main>
        </>
      );
    }


