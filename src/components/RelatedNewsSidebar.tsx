import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiCalendar } from './Icons';
import SectionWrapper from './SectionWrapper';

interface Article {
  title: string;
  slug: string;
  date: string;
  category: string;
  image: string;
  shortdescription: string;
}

interface RelatedNewsSidebarProps {
  data: Article[];
  category: string;
}

const RelatedNewsSidebar: React.FC<RelatedNewsSidebarProps> = ({ data, category }) => {
  // Show up to 8 articles - enough for scroll engagement
  const articles = data.slice(0, 8);

  const formatCategory = (cat: string) =>
    cat.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <SectionWrapper title={`More from ${formatCategory(category)}`}>
      {articles.map((article, index) => (
        <div
          key={index}
          className="border-bottom"
          style={{ marginBottom: '0.35rem', paddingBottom: '0.35rem' }}
        >
          <Link
            href={`/${article.category}/${article.slug}`}
            className="text-decoration-none"
            title={article.slug}
          >
            {/* Thumbnail + text side by side */}
            <div className="d-flex align-items-start" style={{ gap: '8px' }}>
              {/* Thumbnail */}
              <div style={{ flexShrink: 0, width: '68px', height: '50px', position: 'relative', overflow: 'hidden', borderRadius: '3px' }}>
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="68px"
                />
              </div>

              {/* Text */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <p
                  style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#111',
                    lineHeight: 1.25,
                    marginBottom: '3px',
                    fontFamily: "'Archivo', Arial, sans-serif",
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {article.title}
                </p>
                <div
                  className="d-flex align-items-center"
                  style={{
                    fontSize: '9.5px',
                    fontWeight: 200,
                    fontFamily: "'Rubik', Arial, sans-serif",
                  }}
                >
                  <BiCalendar size={9} style={{ marginRight: '4px', color: '#000' }} />
                  <span style={{ color: '#000', opacity: 0.6 }}>Published on</span>
                  <span style={{ color: '#555', marginLeft: '4px' }}>{article.date}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </SectionWrapper>
  );
};

export default RelatedNewsSidebar;

