
'use client';

import React from 'react';
import AuthorInfo from './AuthorInfo';
import EditorsPicksSection from './EditorsPick';
import politicalData from '../../public/data/politics.json';
import ArticleWrapper from './ArticleWrapper';
import { FaInstagram, FaXTwitter, BiCalendar } from './Icons';
import Image from 'next/image';
import AlinaHababContent from './AlinaHababContent';

const ClientS4 = () => {
  const title =
    'When Vanity, Passion, and Poor Judgment Threaten a Brilliant Career';

  const excerpt =
    'Alina Habab had beauty, intelligence, power, prestige, and the professional opportunity of a lifetime. What she apparently lacked was the discipline to protect it.';

  return (
    <main
      style={{
        background: '#ffffff',
        color: '#252525',
        padding: '35px 24px 65px',
      }}
    >
      <div
        style={{
          maxWidth: '1160px',
          margin: '0 auto',
        }}
      >

        {/* Main Editorial Heading */}
        <header>

          <div
            className="article-heading-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.65fr 0.8fr',
              gap: '55px',
              alignItems: 'center',
              paddingBottom: '32px',
            }}
          >

            {/* Left: Headline */}
            <div>
              <div
                style={{
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '1.8px',
                  color: '#a51d35',
                  marginBottom: '17px',
                  textTransform: 'uppercase',
                }}
              >
                Politics
              </div>

              <h1
                style={{
                  fontFamily: 'Georgia, Times New Roman, serif',
                  fontSize: 'clamp(32px, 4vw, 45px)',
                  fontWeight: 700,
                  lineHeight: 1.19,
                  letterSpacing: '-0.9px',
                  color: '#242424',
                  margin: 0,
                  maxWidth: '750px',
                }}
              >
                {title}
              </h1>
            </div>

            {/* Right: Excerpt */}
            <div
              style={{
                borderLeft: '1px solid #dedbd6',
                paddingLeft: '25px',
              }}
            >
              <span
                style={{
                  display: 'block',
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '1.5px',
                  color: '#999',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                }}
              >
           
              </span>

              <p
                style={{
                  fontFamily: 'Georgia, Times New Roman, serif',
                  fontSize: '15px',
                  lineHeight: 1.45,
                  color: '#66605b',
                  margin: 0,
                }}
              >
                {excerpt}
              </p>
            </div>
          </div>

          {/* Publication Information */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '15px',
              padding: '16px 0',
              borderTop: '1px solid #dedbd6',
              borderBottom: '1px solid #dedbd6',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '12px',
                fontFamily: 'Arial, sans-serif',
                fontSize: '11px',
                color: '#777',
              }}
            >
              <span
                style={{
                  fontWeight: 700,
                  color: '#302d2a',
                }}
              >
                Stephen M. Knowles
              </span>

              <span style={{ color: '#ccc' }}>|</span>

              <BiCalendar size={14} />

              <span>October 31, 2026</span>

              <span style={{ color: '#ccc' }}>|</span>

            </div>

            {/* Social Sharing */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '9px',
              }}
            >
              <a
                href="https://x.com/TangentWeekly"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tangent Weekly on X"
                style={socialStyle}
              >
                <FaXTwitter />
              </a>

              <a
                href="https://www.instagram.com/tangentweekly/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tangent Weekly on Instagram"
                style={socialStyle}
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <figure
          style={{
            margin: '30px 0 0',
            width: '100%',
          }}
        >
          <div
            style={{
              width: '100%',
              overflow: 'hidden',
              background: '#f1efec',
            }}
          >
            <Image
              src="/images/alina-habab-career-controversy.webp"
              alt="Alina Habba and the controversy surrounding her reported professional and personal decisions"
              title={title}
              width={1200}
              height={800}
              priority
              sizes="(max-width: 768px) 100vw, 1160px"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'cover',
              }}
            />
          </div>
        </figure>

        {/* Main Article */}
        <article
          style={{
            maxWidth: '790px',
            margin: '42px auto 0',
          }}
        >
          <ArticleWrapper>
            <AlinaHababContent />
          </ArticleWrapper>

          {/* Author Information */}
          {/* <div
            style={{
              marginTop: '50px',
              padding: '25px 0',
              borderTop: '1px solid #dedbd6',
              borderBottom: '1px solid #dedbd6',
            }}
          >
            <AuthorInfo
              date="Oct. 31, 2026"
              name="Stephen M. Knowles"
              role="Founding Editor"
              twitter="https://x.com/Stephenmknowles"
            />
          </div> */}
        </article>

        {/* Related Stories */}
        <section
          style={{
            marginTop: '65px',
            paddingTop: '22px',
            borderTop: '2px solid #292929',
          }}
        >
          <h2
            style={{
              fontFamily: 'Georgia, Times New Roman, serif',
              fontSize: '25px',
              fontWeight: 700,
              margin: '0 0 25px',
              color: '#252525',
            }}
          >
            More News
          </h2>

          <EditorsPicksSection
            data={politicalData.slice(1, 10)}
          />
        </section>
      </div>

      {/* Responsive Layout */}
      <style jsx>{`
        @media (max-width: 700px) {
          .article-heading-grid {
            grid-template-columns: 1fr !important;
            gap: 22px !important;
          }
        }
      `}</style>
    </main>
  );
};

const socialStyle: React.CSSProperties = {
  width: '32px',
  height: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid #e3dfda',
  borderRadius: '50%',
  color: '#555',
  textDecoration: 'none',
  fontSize: '14px',
};

export default ClientS4;
