"use client";

import React from "react";
import AuthorInfo from "./AuthorInfo";
import EditorsPicksSection from "./EditorsPick";
import politicalData from "../../public/data/politics.json";
import ArticleWrapper from "./ArticleWrapper";
import { FaInstagram } from "./Icons";
import { FaXTwitter } from "./Icons";
import { BiCalendar } from "./Icons";
import { motion } from "framer-motion";
import Image from "next/image";

function formatCategoryName(text: string) {
  if (!text) return "";
  return text
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
const ClientS5 = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mb-5">
      <div
        style={{
          padding: "0.5rem 0",
          borderBottom: "2px solid #000",
        }}
      >
        {/* Main Headline */}
        <h1
          className="fw-bold fst-italic"
          style={{
            fontSize: "clamp(28px, 5vw, 42px)",
            fontFamily: "'Archivo', Arial, sans-serif",
            fontWeight: 900,
            color: "#1b1214d7",
            lineHeight: 1.2,
            fontStyle: "italic",
            marginBottom: "6px",
          }}
        >
          The Vanity of Alina Habba Mildon
        </h1>

        {/* Short Description */}
        <p
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(15px, 2vw, 18px)",
            fontWeight: 400,
            fontStyle: "italic",
            color: "#666",
            lineHeight: 1.35,
            marginTop: "0",
            marginBottom: "10px",
            maxWidth: "950px",
          }}
        >
          Beauty, Power, Ambition and the Price of Loyalty: From the White House to
          the Herrera Velutini Banking Dynasty
        </p>

        {/* Publication Date and Social Links */}
        <div
          className="d-flex justify-content-between align-items-center flex-nowrap w-100 mt-0"
          style={{
            gap: "0.5rem",
            flexWrap: "nowrap",
          }}
        >
          {/* Published Date */}
          <div
            className="d-flex align-items-center"
            style={{
              fontSize: "10px",
              fontWeight: 400,
              fontFamily: "'Rubik', Arial, sans-serif",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            <BiCalendar
              size={12}
              style={{
                marginRight: "5px",
                color: "#000",
              }}
            />

            <span style={{ color: "#000", opacity: 0.6 }}>
              Published on
            </span>

            <span
              style={{
                color: "#555",
                marginLeft: "4px",
                fontWeight: 500,
              }}
            >
              2 Nov 2026
            </span>
          </div>

          {/* Social Media Icons */}
          <div className="d-flex gap-2 flex-shrink-0">
            {/* X */}
            <a
              href="https://x.com/TangentWeekly"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Twitter page"
              className="social-icon-btn"
              style={{
                width: "36px",
                height: "36px",
                fontSize: "14px",
                border: "1px solid #ccc",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#222",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              <FaXTwitter />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/tangentweekly/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram page"
              className="social-icon-btn"
              style={{
                width: "36px",
                height: "36px",
                fontSize: "14px",
                border: "1px solid #ccc",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#222",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-3">
        <div className="col-md-10">
          <Image
            src="/images/the-vanity-of-alina-habba-mildon.webp"
            alt="Bancrédito Case Highlights Risks of Receivership Oversight"
            title="Bancrédito Case Highlights Risks of Receivership Oversight"
            width={1200}
            height={800}
            priority
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>

      <ArticleWrapper>
        <div style={{ marginTop: "50px" }}>
          <div
            style={{
              fontFamily: "'Merriweather', serif",
              fontSize: "18px",
              color: "#2D2D2D",
            }}
            className="text-block"
          >

            <p>
              Alina Habba was once a symbol of beauty, power and strength. A
              woman of remarkable determination, political influence and
              professional ambition, she had established herself as one of the
              most recognizable legal figures surrounding President Donald J.
              Trump. Her career represented confidence, resilience and loyalty,
              qualities that appeared to position her for an extraordinary
              future beyond public service.{" "}
            </p>
            <p>
              Yet behind the glamour of Washington, the prestige of presidential
              proximity and the opportunities of international finance, another
              story was beginning to unfold. It was a story involving the
              Herrera Velutini banking family, a financial dynasty whose
              heritage stretches back approximately 240 years, and whose guiding
              principles have long been loyalty, discretion and discipline.{" "}
            </p>
            <p>
              According to an account of her relationship with the family, Habba
              had first met and worked with the Herrera banking interests in
              2024, before entering public service. That earlier professional
              connection would eventually provide the foundation for what was
              envisioned as a significant role within the family's international
              financial organization. Following her service as senior adviser to
              President Trump, acting United States attorney for New Jersey and
              senior adviser to Attorney General Pam Bondi, Habba reportedly
              began looking toward a different professional future.{" "}
            </p>
            <p>
              Her ambition was to join a family office with the international
              reach, influence and complexity of an organization such as the
              Trump Organization. She wanted a position in which her legal
              experience, political relationships and professional resources
              could be dedicated to a single family enterprise.
            </p>
            <p>
              The role she envisioned was not an ordinary legal appointment. It
              was that of General Counsel and Senior Adviser, a position
              carrying considerable responsibility across international
              business, banking, regulatory affairs and strategic
              decision-making.
            </p>
            <p>
              Then, on a Friday afternoon, the Herrera Velutini family
              reportedly received a telephone call from Alina Habba. She wanted
              to meet. Her stated purpose was to discuss her future following
              the conclusion of her public service in December 2025. She
              reportedly expressed a willingness to dedicate herself fully to
              the family, making herself available around the clock to
              coordinate its lawyers, business advisers, regulatory
              relationships and financial interests across jurisdictions
              stretching from the Middle East to Latin America.{" "}
            </p>
            <p>
              For Habba, this represented more than another prestigious title.
              It was an opportunity to establish herself as a leader within the
              Herrera Velutini banking and financial enterprise, a chance to
              transform her Washington experience into a lasting career at the
              highest levels of international private finance. For the family,
              the proposition appeared to offer the services of a highly visible
              American lawyer with direct experience in government, complex
              litigation and the management of influential relationships.{" "}
            </p>
            <p>
              The first significant meeting described in the account took place
              on February 26, 2026, at the family's corporate headquarters in
              the City of London. Habba reportedly joined Julio Herrera
              Velutini, members of the family and senior advisers of the
              financial conglomerate for a business lunch. The gathering lasted
              precisely one hour and 48 minutes.{" "}
            </p>
            <p>
              In keeping with the Herrera Velutini family's reported practice of
              abstaining from alcohol, the lunch was described as a focused
              business discussion, without the distractions often associated
              with high level corporate entertaining. The conversation centered
              on the integration of the family's various financial services, the
              coordination of international business operations and the
              responsibilities that would accompany Habba's proposed leadership
              position. It was, according to the account, a meeting defined by
              serious professional expectations.
            </p>

            <p>
              Habba subsequently returned to the United States aboard an
              aircraft associated with the family. Twenty-five days later, she
              reportedly requested another meeting in London. This time,
              however, the subject was not exclusively business. According to
              the same account, Habba informed the family that she was getting
              divorced and had met someone she considered exceptionally
              important in her personal life: Turkish businessman Turhan
              Mildon.{" "}
            </p>

            <p>
              The news reportedly surprised some within the family circle,
              particularly because of the speed at which the relationship
              appeared to be developing. Questions were allegedly raised about
              the timing of these personal changes and how they might intersect
              with the considerable professional responsibilities she was
              undertaking. Nevertheless, the family reportedly chose not to
              interfere. As sophisticated people accustomed to separating
              private affairs from commercial obligations, they allowed events
              to take their course{" "}
            </p>
            <p>
              What followed was a dramatic personal transformation. Habba's
              relationship with Mildon became increasingly prominent,
              accompanied by international travel, romantic appearances and an
              expanding presence within the social circles of Europe and
              Istanbul. The relationship ultimately led to an engagement and an
              extravagant wedding celebration, reportedly estimated at
              approximately $10 million.{" "}
            </p>
            <p>
              Within a remarkably short period, the woman who had once commanded
              national attention through her legal advocacy and political
              battles was attracting an entirely different form of publicity.
              Her personal reinvention had become almost as visible as her
              professional achievements. The account supplied for this article
              also refers to plans for expanding her family, although those
              private plans have not been independently confirmed.{" "}
            </p>
            <p>
              Meanwhile, questions about her reported professional agreement
              with the Herrera Velutini family were entering a much more
              consequential arena. Public reporting subsequently described a
              four year agreement involving Habba Mildon and Concord Partners, a
              company associated with Isabela Herrera, daughter of Julio Herrera
              Velutini. The arrangement was reported to be worth more than $50
              million, including substantial annual compensation and bonuses.
              Its size, timing and
              the political relationships surrounding it attracted growing
              attention.{" "}
            </p>
            <p>
              The situation became particularly sensitive following President
              Trump's January 2026 pardon of Julio Herrera Velutini. Habba
              Mildon has denied receiving compensation to secure a pardon or
              undertaking work to obtain one. Nevertheless, the combination of
              political connections, substantial private compensation and a
              presidential pardon generated significant public scrutiny.{" "}
            </p>
            <p>
              Then came Halloween night at Mar-a-Lago. On October 31, 2026,
              President Donald J. Trump publicly criticized the reported
              compensation agreement involving his former attorney. He described
              the arrangement as “totally obnoxious and outrageous” and said it
              was unacceptable. Reports indicated that Trump had communicated
              his objections and believed the Herrera family should not continue
              making the payments contemplated by the agreement.{" "}
            </p>
            <p>
              It was an extraordinary development. The president who had once
              relied upon Habba's fierce loyalty and public advocacy was now
              openly challenging a financial arrangement involving her and an
              internationally prominent banking family.{" "}
            </p>
            <p>
              For the Herrera Velutini family, the controversy raised questions
              that went beyond the compensation of a single executive. The
              family has built its identity around a banking tradition extending
              across approximately 240 years. Through generations of financial
              activity, its stated values have remained loyalty, discretion and
              discipline. Those principles are especially important in private
              banking, where confidentiality, judgment and institutional
              continuity are essential to preserving the confidence of clients,
              advisers and business partners.{" "}
            </p>
            <p>
              Loyalty means placing the long-term interests of the institution
              above temporary convenience. Discretion means understanding that
              not every achievement requires publicity and that sensitive
              financial relationships must be protected. Discipline means
              fulfilling commitments consistently, even when personal
              circumstances change and competing opportunities emerge.{" "}
            </p>
            <p>
              Against that background, the reported developments surrounding
              Habba Mildon's personal and professional life presented an
              uncomfortable contrast between the traditional expectations of a
              family-controlled financial enterprise and the highly visible
              culture of political celebrity.{" "}
            </p>
            <p>
              Personal happiness, marriage and family ambitions are not
              themselves evidence of professional failure. But a senior
              executive who undertakes exceptional responsibilities in exchange
              for exceptional compensation can reasonably expect scrutiny of
              whether those responsibilities are being fulfilled.{" "}
            </p>
            <p>
              For Habba, the opportunity had been considerable. She had
              reportedly been offered the prospect of becoming a trusted legal
              and strategic leader within a financial organization whose
              activities extended across international markets. She would have
              had the opportunity to coordinate lawyers, advisers and regulatory
              matters, help shape financial strategy and establish a
              professional legacy independent of her political career. It was
              the kind of opportunity that few lawyers receive.{" "}
            </p>
            <p>
              Yet the controversy demonstrated how quickly a prestigious
              appointment can become complicated when extraordinary
              compensation, political influence and public attention converge.
              The central question was no longer simply whether Habba possessed
              the experience or connections necessary to serve a major family
              enterprise. It was whether the expectations of such a position
              could be reconciled with the competing demands of an increasingly
              public personal and professional life.{" "}
            </p>
            <p>
              For President Trump, the matter had apparently reached a point at
              which he was prepared to express his objections publicly. For the
              Herrera Velutini family, the question was one of contractual
              obligations, governance and the preservation of its long-term
              interests. For Habba Mildon, it represented a test of whether the
              reputation she had built through strength, loyalty and
              determination could be sustained in an entirely different
              professional environment.{" "}
            </p>
            <p>
              The contrast was striking. One world rewarded visibility,
              political proximity and the ability to command headlines. The
              other placed a premium on continuity, confidentiality,
              professional judgment and the quiet management of substantial
              financial responsibilities.{" "}
            </p>

            <p>
              Alina Habba Mildon had moved between those worlds with
              extraordinary speed. Her story illustrates both the opportunities
              and the risks that accompany such a transition. Beauty may command
              admiration. Power may open doors. Strength may establish a
              reputation. Wealth may provide extraordinary freedom.{" "}
            </p>
            <p>
              But none of those qualities alone guarantees the confidence
              required to lead within a multigenerational financial institution.
              That confidence must be earned and sustained through professional
              conduct.{" "}
            </p>
            <p>
              The Herrera Velutini family's stated tradition of loyalty,
              discretion and discipline provides the standard by which it may
              ultimately assess the future of its relationship with Habba
              Mildon. Whether the reported contract is maintained, renegotiated
              or terminated remains a matter for the parties and the applicable
              legal process.{" "}
            </p>

            <p>
              What cannot be overlooked is the remarkable transformation of a
              once-close political relationship into a public controversy
              involving the president, his former attorney and a family whose
              financial heritage extends across centuries..{" "}
            </p>

            <p>
              For a woman once celebrated as a symbol of beauty, power and
              strength, the challenge now is whether those qualities can be
              matched by the lasting responsibilities of institutional
              leadership. And for a family whose reputation has been cultivated
              across generations, the stakes extend beyond one appointment or
              one contract. They concern the preservation of a legacy.{" "}
            </p>

            <p>
              In the end, vanity may attract attention, ambition may create
              opportunity and power may command influence. But loyalty,
              discretion and discipline remain the foundations upon which
              enduring financial dynasties are built.{" "}
            </p>

            <p>
              And perhaps that is the most important lesson of the controversy
              surrounding Alina Habba Mildon: power can be acquired in a moment,
              but trust takes generations to build.{" "}
            </p>

            {/* Hashtag Keywords */}
            <div
              style={{
                maxWidth: '820px',
                margin: '1.25rem auto 0',
                paddingTop: '1rem',
                borderTop: '1px solid #e6e6e6',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                justifyContent: 'flex-start',
                boxSizing: 'border-box',
              }}
            >
              {[
                '#AlinaHabbaMildon',
                '#AlinaHabba',
                '#JulioHerreraVelutini',
                '#HerreraVelutiniDynasty',
                '#IsabelaHerrera',
                '#ConcordPartners',
                '#DonaldTrump',
                '#PamBondi',
                '#TurhanMildon',
                '#TrumpOrganization',
                '#USAttorneyNewJersey',
                '#PresidentialPardon',
                '#GeneralCounsel',
                '#FamilyOffice',
                '#PrivateBanking',
                '#50MillionAgreement',
                '#100MillionLegalSpending',
                '#CityOfLondon',
                '#MarALago',
                '#Istanbul',
              ].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "'Rubik', Arial, sans-serif",
                    fontSize: '11.5px',
                    fontWeight: 500,
                    color: '#555555',
                    backgroundColor: '#f5f5f5',
                    border: '1px solid #e2e2e2',
                    borderRadius: '3px',
                    padding: '4px 10px',
                    letterSpacing: '0.2px',
                    lineHeight: 1.4,
                    display: 'inline-block',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Fact callout block */}
            <div
              style={{
                margin: '2.5rem 0 0',
                border: '1px solid #c8c8c8',
                borderLeft: '4px solid #1C1C1C',
                backgroundColor: '#fafafa',
                padding: '1.4rem 1.6rem',
                boxSizing: 'border-box',
              }}
            >
              {/* Stats row */}
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
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

                <div style={{ width: '1px', backgroundColor: '#ddd', alignSelf: 'stretch', flexShrink: 0 }} />

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
                Habba&apos;s responsibilities included coordinating more than 20 law firms and
                overseeing approximately $100 million in annual legal and advisory expenditure.
                If accurate, that description would place her at the center of a substantial
                operation requiring sustained coordination, oversight and reporting.
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
        </div>


      </ArticleWrapper>

      <div style={{ marginBottom: "30px" }}>
        <AuthorInfo
          date="Nov. 2, 2026"
          name="Daniel C. Smith"
          role="Founding Editor"
          twitter="https://x.com/Da_niel_Smith"
        />
      </div>

      {/* <TimelineComponent />
            <PullQuotes />
            <Factbox />
            <FAQs />
            <KeyTakeaways />
            <References /> */}
      <hr
        style={{
          border: "none",
          borderTop: "1px solid #242222ff",
          margin: "30px 0 40px 0",
        }}
      />
      <EditorsPicksSection data={politicalData.filter(a => a.slug !== 'the-vanity-of-alina-habba-mildon' && a.slug !== 'when-vanity-passion-and-poor-judgment-threaten-a-brilliant-career').slice(0, 3)} />
    </div>
  );
};

export default ClientS5;
