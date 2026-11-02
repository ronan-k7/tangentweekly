
'use client';

import React from 'react';

export const AlinaHababContent: React.FC = () => {
  return (
    <>
      <style jsx>{`
        @media (max-width: 767px) {
          /* Article content - mobile only */
          .article-body-content {
            font-size: 15px !important;
            line-height: 1.4 !important;
            letter-spacing: normal !important;
            word-spacing: normal !important;
            margin-top: 0 !important;
          }

          .article-body-content p {
            text-align: left !important;
            margin-bottom: 0.75rem !important;
          }

          /* Headline - mobile only */
          :global(.alina-article-title) {
            font-size: 32px !important;
            line-height: 1.08 !important;
            margin-bottom: 10px !important;
          }

          /* Featured image spacing - mobile only */
          :global(.alina-article-image-wrapper) {
            margin-bottom: 8px !important;
          }
        }
      `}</style>

      <div
        className="article-body-content text-block"
        style={{
          fontFamily: "'Merriweather', serif",
          fontSize: '18px',
          color: '#1C1C1C',
          lineHeight: 1.45,
          width: '100%',
          maxWidth: '820px',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
          boxSizing: 'border-box',
        }}
      >
        <p style={{ textAlign: 'justify', marginBottom: '1.25rem' }}>
          One of the most accomplished lawyers of her generation, she had secured an extraordinary four-year assignment advising a wealthy international banking family whose business empire spends over $100 million annually on legal, financial, and public relations advisers.
        </p>

        <p style={{ textAlign: 'justify', marginBottom: '1.25rem' }}>
          It was a dream position; it was her chance to build a lasting legacy, secure her financial future, and establish herself among the most influential legal advisers in international finance.
        </p>

        <p style={{ textAlign: 'justify', marginBottom: '1.25rem' }}>
          She had served as Donald Trump’s personal lawyer, general counsel to his Save America PAC, and counselor to the president at the White House.
        </p>

        <p style={{ textAlign: 'justify', marginBottom: '1.25rem' }}>
          That background carried considerable prestige, and an expectation of discipline, consistency and commitment. A source close to the family alleges that she failed to give her responsibilities the sustained attention they required, and her romantic relationship affected her professional performance.
        </p>

        <p style={{ textAlign: 'justify', marginBottom: '1.25rem' }}>
          <strong>Then came a younger man. And her priorities collapsed.</strong>
        </p>

        <p style={{ textAlign: 'justify', marginBottom: '1.25rem' }}>
          She ended her second marriage and embarked on a whirlwind romance with a boyfriend fourteen years her junior. Private jets to Saint Barthélemy, luxurious escapes across Europe, romantic adventures in Turkey, and extravagant summers in Italy replaced the discipline and responsibilities of her professional life.
        </p>

        <p style={{ textAlign: 'justify', marginBottom: '1.25rem' }}>
          According to longtime friends, she claimed to have discovered true love for the first time.
        </p>

        <p style={{ textAlign: 'justify', marginBottom: '1.25rem' }}>
          But was it love, or the intoxicating combination of vanity, attention, and the illusion of eternal youth?
        </p>

        <p style={{ textAlign: 'justify', marginBottom: '1.25rem' }}>
          Apparently, an endless honeymoon was not enough. Marriage, motherhood, and the prospect of a spectacular New York wedding reportedly costing more than $10 million became part of her new vision of happiness. Meanwhile, the four-year professional commitment that could have defined her career was seemingly pushed aside.
        </p>

        <p style={{ textAlign: 'justify', marginBottom: '1.25rem' }}>
          <strong>A person entrusted with protecting a financial empire appeared unable to protect her own future.</strong>
        </p>

        <p style={{ textAlign: 'justify', marginBottom: '1.25rem' }}>
          There is a profound irony in a brilliant lawyer capable of negotiating multimillion-dollar transactions yet seemingly unwilling to calculate the personal cost of her own decisions. She may call it love. Others may see a reckless surrender of professional responsibility to personal gratification.
        </p>

        <p style={{ textAlign: 'justify', marginBottom: '1.25rem' }}>
          The real tragedy, if the reported sacrifices prove true, is not that she fell in love. It is that she may have confused romantic excitement with a reason to abandon everything she had worked to achieve.
        </p>

        <p style={{ textAlign: 'justify', marginBottom: '1.25rem' }}>
          Beauty fades. Passion changes. Private jets eventually land. And the younger lover who makes every day feel like a honeymoon must eventually confront the realities of ordinary life.
        </p>

        <p style={{ textAlign: 'justify', marginBottom: '1.25rem' }}>
          But professional credibility, lost opportunities, and broken commitments cannot always be recovered.
        </p>

        <p style={{ textAlign: 'justify', marginBottom: '1.25rem' }}>
          Perhaps her gamble will pay off. Perhaps she will discover that love was worth every sacrifice.
        </p>

        <p style={{ textAlign: 'justify', marginBottom: '1.25rem' }}>
          <strong>Or perhaps she will learn that the most dangerous form of vanity is believing that intelligence, beauty, and privilege make you immune to consequences.</strong>
        </p>

        <p style={{ textAlign: 'justify', marginBottom: '1.25rem' }}>
          A $10 million wedding may buy the illusion of a fairy tale. A $50 million career sacrifice may become a lifetime of regret.
        </p>

        <p style={{ textAlign: 'justify', marginBottom: '1.25rem' }}>
          <strong>And when the champagne bottles have dried and the honeymoon is over, and reality finally arrives, she may discover that the most expensive man in her life was the one she believed was giving her everything.</strong>
        </p>

        {/* Fact callout block */}
        <div
          style={{
            maxWidth: '820px',
            margin: '2.5rem auto 0',
            border: '1px solid #c8c8c8',
            borderLeft: '4px solid #1C1C1C',
            backgroundColor: '#fafafa',
            padding: '1.4rem 1.6rem',
            boxSizing: 'border-box',
          }}
        >
          {/* Stats row */}
          <div
            style={{
              display: 'flex',
              gap: '2rem',
              flexWrap: 'wrap',
              marginBottom: '1rem',
            }}
          >
            <div style={{ flex: '1 1 120px' }}>
              <div
                style={{
                  fontSize: '28px',
                  fontWeight: 800,
                  fontFamily: "'Archivo', Arial, sans-serif",
                  color: '#1C1C1C',
                  lineHeight: 1,
                  letterSpacing: '-0.5px',
                }}
              >
                20+
              </div>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  fontFamily: "'Rubik', Arial, sans-serif",
                  color: '#555',
                  textTransform: 'uppercase',
                  letterSpacing: '0.8px',
                  marginTop: '4px',
                }}
              >
                Law Firms
              </div>
            </div>

            <div
              style={{
                width: '1px',
                backgroundColor: '#ddd',
                alignSelf: 'stretch',
                flexShrink: 0,
              }}
            />

            <div style={{ flex: '1 1 160px' }}>
              <div
                style={{
                  fontSize: '28px',
                  fontWeight: 800,
                  fontFamily: "'Archivo', Arial, sans-serif",
                  color: '#1C1C1C',
                  lineHeight: 1,
                  letterSpacing: '-0.5px',
                }}
              >
                $100M
              </div>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  fontFamily: "'Rubik', Arial, sans-serif",
                  color: '#555',
                  textTransform: 'uppercase',
                  letterSpacing: '0.8px',
                  marginTop: '4px',
                }}
              >
                Yearly Legal &amp; Advisory Spending
              </div>
            </div>
          </div>

          {/* Italic quote */}
          <p
            style={{
              fontFamily: "'Merriweather', serif",
              fontSize: '14.5px',
              fontStyle: 'italic',
              color: '#3a3a3a',
              lineHeight: 1.7,
              margin: 0,
              borderTop: '1px solid #e0e0e0',
              paddingTop: '0.9rem',
            }}
          >
            Habba&apos;s responsibilities included coordinating more than 20 law firms and overseeing
            approximately $100 million in annual legal and advisory expenditure. If accurate, that
            description would place her at the center of a substantial operation requiring sustained
            coordination, oversight and reporting.
          </p>
        </div>

        {/* Editorial Timeline Section */}
        <div
          className="alina-editorial-timeline"
          style={{
            maxWidth: '820px',
            margin: '2.5rem auto 0',
            padding: '1.6rem',
            backgroundColor: '#fafafa',
            border: '1px solid #d0d0d0',
            borderTop: '3px solid #1c1c1c',
            borderBottom: '3px solid #1c1c1c',
            boxSizing: 'border-box',
          }}
        >
          {/* Heading */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '22px',
              paddingBottom: '14px',
              borderBottom: '1px solid #dedede',
            }}
          >
            <h3
              style={{
                fontFamily: "'Merriweather', Georgia, serif",
                fontSize: '23px',
                fontWeight: 700,
                color: '#1c1c1c',
                margin: 0,
              }}
            >
              Timeline
            </h3>

            <span
              style={{
                fontFamily: "'Rubik', Arial, sans-serif",
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '1.5px',
                color: '#777',
                textTransform: 'uppercase',
              }}
            >
              Key Events
            </span>
          </div>

          {/* Timeline Items */}
          <div className="alina-timeline-list">
            {[
              {
                date: '2024',
                text: 'Habba reportedly first met and worked with the Herrera banking interests, before entering public service.',
              },
              {
                date: 'December 2025',
                text: 'Her public service concluded and that she began considering a different professional future. A reported Friday-afternoon call to the family on [date?]',
              },
              {
                date: 'January 2026',
                text: 'President Trump pardoned Julio Herrera Velutini.',
              },
              {
                date: 'February 26, 2026',
                text: "A reported business lunch with Julio Herrera Velutini, family members and advisers took place at the family’s London headquarters.",
              },
              {
                date: 'Approximately March 23, 2026',
                text: 'Twenty-five days later—Habba reportedly requested another London meeting and discussed her divorce and relationship with Turhan Mildon. The relationship led to an engagement and a wedding celebration reportedly estimated at about $10 million.',
              },
              {
                date: 'October 31, 2026',
                text: 'Trump publicly criticized the reported compensation agreement at Mar-a-Lago.',
              },
            ].map((item, index, arr) => (
              <div
                key={index}
                className="alina-timeline-item"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '24px 1fr',
                  gap: '15px',
                  position: 'relative',
                  paddingBottom: index === arr.length - 1 ? '0' : '22px',
                }}
              >
                {/* Timeline Line and Marker */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  <span
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: '#1c1c1c',
                      border: '2px solid #fafafa',
                      outline: '1px solid #999',
                      marginTop: '4px',
                      zIndex: 2,
                      flexShrink: 0,
                    }}
                  />

                  {index !== arr.length - 1 && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '17px',
                        bottom: '-22px',
                        width: '1px',
                        backgroundColor: '#bdbdbd',
                      }}
                    />
                  )}
                </div>

                {/* Timeline Content */}
                <div
                  style={{
                    backgroundColor: '#fff',
                    border: '1px solid #e2e2e2',
                    padding: '13px 16px',
                    boxSizing: 'border-box',
                  }}
                >
                  <h4
                    style={{
                      fontFamily: "'Rubik', Arial, sans-serif",
                      fontSize: '14px',
                      fontWeight: 700,
                      color: '#202020',
                      margin: '0 0 8px',
                      letterSpacing: '0.3px',
                    }}
                  >
                    {item.date}
                  </h4>

                  <p
                    style={{
                      fontFamily: "'Merriweather', Georgia, serif",
                      fontSize: '13px',
                      lineHeight: 1.8,
                      color: '#444',
                      margin: 0,
                      textAlign: 'left',
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </>
  );
};

export default AlinaHababContent;
