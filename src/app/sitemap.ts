import { MetadataRoute } from 'next';
import fs from 'fs/promises';
import path from 'path';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const siteUrl = 'https://www.tangentweekly.com';
    const sitemapData: MetadataRoute.Sitemap = [];

    // Static Routes
    const staticPaths = [
        '',
        '/about',
        '/contact',
        '/privacy-policy',
        '/terms-and-conditions',
        '/editorial-policy',
        '/correction-policy',
        '/source-methodology',
        '/advertising-sponsored-policy',
        '/ownership-funding',
        '/right-of-reply-policy',
        '/legal',
        '/our-team',
    ];

    for (const route of staticPaths) {
        sitemapData.push({
            url: `${siteUrl}${route}`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: route === '' ? 1.0 : 0.8,
        });
    }

    const categories = [
        "politics", "business", "technology", "sports", 
        "science", "health", "education", "entertainment", 
        "puerto-rico", "bancredito"
    ];

    // Category Routes
    for (const category of categories) {
        sitemapData.push({
            url: `${siteUrl}/${category}`,
            lastModified: new Date(),
            changeFrequency: 'hourly',
            priority: 0.9,
        });
    }

    // Dynamic Article Routes
    for (const category of categories) {
        try {
            const filePath = path.join(process.cwd(), 'public', 'data', `${category}.json`);
            const fileContents = await fs.readFile(filePath, 'utf-8');
            const data = JSON.parse(fileContents);
            
            if (Array.isArray(data)) {
                for (const article of data) {
                    if (!article.slug) continue;
                    
                    let lastMod = new Date();
                    if (article.date) {
                        const parsedDate = new Date(article.date);
                        if (!isNaN(parsedDate.getTime())) {
                            lastMod = parsedDate;
                        }
                    }
                    
                    sitemapData.push({
                        url: `${siteUrl}/${article.category || category}/${article.slug}`,
                        lastModified: lastMod,
                        changeFrequency: 'weekly',
                        priority: 0.7,
                    });
                }
            }
        } catch (error) {
            console.error(`Error reading data for sitemap generation in category ${category}:`, error);
        }
    }

    return sitemapData;
}
