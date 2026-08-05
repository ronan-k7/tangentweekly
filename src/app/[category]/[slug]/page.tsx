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


