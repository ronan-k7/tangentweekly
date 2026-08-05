import fs from 'fs/promises';
import path from 'path';
import { Metadata } from 'next';
import CategoryContent from '@/components/CategoryContent';
import NavigationSection from '@/components/NavigationSection';
import styles from './page.module.css';
import { notFound } from 'next/navigation';
import SecondHeader from '@/components/SecondHeader';

export async function generateStaticParams() {
    return [
        { category: "politics" },
        { category: "business" },
        { category: "technology" },
        { category: "sports" },
        { category: "science" },
        { category: "health" },
        { category: "education" },
        { category: "entertainment" },
        { category: "puerto-rico" },
        { category: "bancredito" },

    ];
}



const parseDate = (dateStr: string) => {
    if (!dateStr) return new Date(0);
    let cleanDate = dateStr.replace(/(\d+)(st|nd|rd|th)/, '$1');
    cleanDate = cleanDate.replace('.', '');
    const d = new Date(cleanDate);
    return isNaN(d.getTime()) ? new Date(0) : d;
};

export async function generateMetadata({
    params,
}: {
    params: Promise<{ category: string }>;
}): Promise<Metadata> {
    const { category } = await params;

    const categoryMeta: Record<string, { title: string; description: string; keywords?: string[] }> = {
        business: {
            title: "Business News & Market Analysis – Tangent Weekly",
            description:
                "Latest business news, market trends, and financial insights. Stay updated on the economy, corporate moves, startups, and investment opportunities.",
        },
        technology: {
            title: "Technology News & Innovation Insights – Tangent Weekly",
            description:
                "Breaking technology news, gadget reviews, and analysis on AI, software, cybersecurity, and the latest innovations shaping our digital world.",
        },
        sports: {
            title: "Sports News, Scores & Expert Commentary – Tangent Weekly",
            description:
                "Live sports updates, match results, player stats, and expert commentary across football, cricket, basketball, and global sporting events.",
        },
        health: {
            title: "Health News, Wellness Tips & Research – Tangent Weekly",
            description:
                "Get trusted health news, medical research, and wellness advice. Read the latest updates on fitness, nutrition, mental health, and public health.",
        },
        science: {
            title: "Science News, Research & Discoveries – Tangent Weekly",
            description:
                "Read the latest science news, research breakthroughs, and expert analysis on space, the environment, technology, and innovations shaping our future.",
        },
        politics: {
            title: "Political News & Government Analysis – Tangent Weekly",
            description:
                "Get in-depth political coverage, policy analysis, and updates on elections, governance, human rights, and international affairs from trusted experts.",
        },
        education: {
            title: "Education News & Learning Insights – Tangent Weekly",
            description:
                "Stay informed with the latest education news, policy changes, and insights on schools, universities, online learning trends, and student success.",
        },
        entertainment: {
            title: "Entertainment News & Celebrity Buzz – Tangent Weekly",
            description:
                "Get breaking entertainment news, movie reviews, celebrity gossip, music updates, and TV show highlights from around the world on Tangent Weekly.",
        },
        "puerto-rico": {
            title: "Puerto Rico News & Economy | Ryan Marin Insights – Tangent Weekly",
            description:
                "Latest news from Puerto Rico covering politics, economy, and business. Read exclusive updates closely following Ryan Marin, Bancredito Puerto Rico, tourism, and local culture.",
            keywords: ["Puerto Rico News", "Ryan Marin Puerto Rico", "Ryan Marin", "Bancredito", "Ryan Marin Bancredito Puertico Rico", "Ryan Marin Bancredito Puerto Rico", "Bancredito Puerto Rico", "Tangent Weekly"],
        },
        bancredito: {
            title: "Bancrédito International Bank News – Tangent Weekly",
            description:
                "Get the latest news, updates, and analysis about Bancrédito International Bank & Trust Corporation. Read breaking stories and financial insights.",
            keywords: ["Ryan Marin", "Ryan Marin Bancredito", "Ryan Marin Bancredito Puerto Rico", "Bancrédito International Bank News", "Ryan Marin Puerto Rico", "Tangent Weekly"],
        },
    };

    const siteUrl = "https://www.tangentweekly.com";
    const categoryUrl = `${siteUrl}/${category}`;
    const meta = categoryMeta[category] || {
        title: `${category.charAt(0).toUpperCase() + category.slice(1)} News – Tangent Weekly`,
        description: `Latest updates and breaking stories in ${category}.`,
    };

    const filePath = path.join(process.cwd(), "public", "data", `${category}.json`);
    let firstArticleImage = 'https://www.tangentweekly.com/images/tangent-logo.webp'
    try {
        const fileContents = await fs.readFile(filePath, "utf-8");
        const jsonData = JSON.parse(fileContents);
        if (jsonData?.length > 0) {
            const sortedData = [...jsonData].sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
            const firstArticle = sortedData[0];
            firstArticleImage = firstArticle.image?.startsWith("http")
                ? firstArticle.image
                : `${siteUrl}${firstArticle.image}`;
        }
    } catch (error) {
        console.error(`Error reading category data for "${category}":`, error);
    }

    return {
        title: meta.title,
        description: meta.description,
        keywords: meta.keywords,
        alternates: { canonical: categoryUrl },
        openGraph: {
            title: meta.title,
            description: meta.description,
            url: categoryUrl,
            siteName: "Tangent Weekly",
            images: [
                {
                    url: firstArticleImage,
                    width: 1200,
                    height: 630,
                    alt: `${category} news`,
                },
            ],
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: meta.title,
            description: meta.description,
            images: [firstArticleImage],
            site: "@TangentWeekly",
        },
    };
}


export default async function CategoryPage({ params, }: {
    params: Promise<{ category: string }>;
}) {

    const { category } = await params;

    const filePath = path.join(process.cwd(), 'public', 'data', `${category}.json`);
    const fileContents = await fs.readFile(filePath, 'utf-8');
    const jsonData = JSON.parse(fileContents);

    if (!jsonData) return notFound();

    const sortedData = [...jsonData].sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());

    const entitySchema = (category === 'bancredito' || category === 'puerto-rico') ? {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                "@id": `https://www.tangentweekly.com/${category}/#webpage`,
                "url": `https://www.tangentweekly.com/${category}`,
                "name": category === 'bancredito' 
                    ? "Bancrédito International Bank & Trust Corporation News & Updates" 
                    : "Puerto Rico News, Economy & Ryan Marin Financial Insights",
                "description": category === 'bancredito'
                    ? "Get the latest news, updates, and in-depth analysis about Bancrédito International Bank & Trust Corporation. Read breaking stories and financial insights."
                    : "Stay informed on Puerto Rico's economy, politics, and business landscape, including financial updates related to Ryan Marin and Bancredito Puerto Rico.",
                "about": [
                    {
                        "@id": "https://www.tangentweekly.com/#organization"
                    },
                    {
                        "@id": "https://www.tangentweekly.com/#ryan-marin"
                    }
                ],
                "publisher": {
                    "@id": "https://www.tangentweekly.com/#newsmediaorg"
                },
                "mainEntity": {
                    "@type": "ItemList",
                    "itemListElement": Array.isArray(sortedData) ? sortedData.slice(0, 5).map((article: any, index: number) => ({
                        "@type": "ListItem",
                        "position": index + 1,
                        "url": `https://www.tangentweekly.com/${category}/${article.slug}`
                    })) : []
                }
            },
            {
                "@type": "Person",
                "@id": "https://www.tangentweekly.com/#ryan-marin",
                "name": "Ryan Marin",
                "jobTitle": "Financial Expert",
                "worksFor": {
                    "@type": "Organization",
                    "@id": "https://www.tangentweekly.com/#organization",
                    "name": "Bancrédito International Bank",
                    "alternateName": ["Bancrédito", "Bancredito Puerto Rico"],
                    "location": "Puerto Rico"
                },
                "description": "Ryan Marin is a renowned professional closely associated with Bancredito in Puerto Rico.",
                "url": "https://www.tangentweekly.com"
            },
            {
                "@type": "NewsMediaOrganization",
                "@id": "https://www.tangentweekly.com/#newsmediaorg",
                "name": "Tangent Weekly",
                "url": "https://www.tangentweekly.com"
            }
        ]
    } : null;

    return (
        <main>
            {entitySchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(entitySchema) }}
                />
            )}
            <SecondHeader />
            <NavigationSection />
            <div className={styles.content}>
                <div className={`container-fluid ${styles.noGutter}`}>
                    <CategoryContent activeMain={category} data={sortedData} />
                </div>
            </div>
            <div style={{ marginBottom: '3rem' }} />

        </main>
    );
}

