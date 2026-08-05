import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export const dynamic = 'force-static';

export async function GET() {
    const categories = [
        "politics", "business", "technology", "sports", 
        "science", "health", "education", "entertainment", 
        "puerto-rico", "bancredito"
    ];

    const siteUrl = "https://www.tangentweekly.com";
    let allArticles: any[] = [];

    // Read all JSON files
    for (const category of categories) {
        try {
            const filePath = path.join(process.cwd(), 'public', 'data', `${category}.json`);
            const fileContents = await fs.readFile(filePath, 'utf-8');
            const data = JSON.parse(fileContents);
            
            if (Array.isArray(data)) {
                allArticles = allArticles.concat(data);
            }
        } catch (error) {
            console.error(`Error reading data for category ${category}:`, error);
        }
    }

    // Sort articles by date descending
    allArticles.sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return (isNaN(dateB) ? 0 : dateB) - (isNaN(dateA) ? 0 : dateA);
    });

    // Limit to latest 50 articles for the RSS feed
    const latestArticles = allArticles.slice(0, 50);

    const rssItems = latestArticles.map((article) => {
        const url = `${siteUrl}/${article.category || 'news'}/${article.slug}`;
        
        let pubDate;
        try {
            const dateObj = new Date(article.date);
            pubDate = !isNaN(dateObj.getTime()) ? dateObj.toUTCString() : new Date().toUTCString();
        } catch (e) {
            pubDate = new Date().toUTCString();
        }
        
        return `
        <item>
            <title><![CDATA[${article.title || ''}]]></title>
            <link>${url}</link>
            <guid isPermaLink="true">${url}</guid>
            <description><![CDATA[${article.shortdescription || article.description || ''}]]></description>
            <pubDate>${pubDate}</pubDate>
            <category><![CDATA[${article.category || 'news'}]]></category>
        </item>`;
    }).join('');

    const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
        <title>Tangent Weekly - Latest News</title>
        <link>${siteUrl}</link>
        <description>Get the latest news, updates, and in-depth analysis from Tangent Weekly.</description>
        <language>en-us</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <atom:link href="${siteUrl}/rss" rel="self" type="application/rss+xml" />${rssItems}
    </channel>
</rss>`;

    return new NextResponse(rssFeed, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
        },
    });
}
