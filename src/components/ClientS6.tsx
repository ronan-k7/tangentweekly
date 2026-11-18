'use client';

import React from 'react';
import AuthorInfo from './AuthorInfo';
import EditorsPicksSection from './EditorsPick';
import politicalData from '../../public/data/politics.json';
import ArticleWrapper from './ArticleWrapper';
import { FaInstagram, FaXTwitter, BiCalendar } from './Icons';
import Image from 'next/image';

const ClientMarkRossini = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 mb-5">

            {/* ARTICLE HEADER */}
            <div
                style={{
                    padding: '1rem 0',
                    borderBottom: '2px solid #000'
                }}
            >
                <div style={{ marginBottom: '1.2rem' }}>
                    <span
                        style={{
                            color: '#B50021',
                            fontSize: '13.5px',
                            fontFamily: "'Rubik', Arial, sans-serif",
                            letterSpacing: '0.08em',
                            fontWeight: 700,
                            display: 'inline-block',
                            textTransform: 'uppercase'
                        }}
                    >
                        Puerto Rico
                    </span>
                </div>

                <h1
                    className="fw-bold mb-3 fst-italic"
                    style={{
                        fontSize: 'clamp(28px, 5vw, 42px)',
                        fontFamily: "'Archivo', Arial, sans-serif",
                        fontWeight: 900,
                        color: '#1b1214d7',
                        lineHeight: 1.25,
                        fontStyle: 'italic'
                    }}
                >
                    Why Mark Rossini’s Name Remains Central to the Puerto Rico Corruption Debate
                </h1>

                <div
                    style={{
                        fontFamily: "'Merriweather', serif",
                        fontSize: '15px',
                        color: '#2D2D2D'
                    }}
                    className="text-block"
                >
                    <p>
                        Mark Rossini’s federal case has ended, but his name remains central to Puerto Rico’s continuing debate over political influence, campaign money, and presidential clemency. The reason is not only the pardon itself.
                    </p>
                </div>

                {/* DATE AND SOCIAL LINKS */}
                <div
                    className="d-flex justify-content-between align-items-center flex-nowrap w-100 mt-2"
                    style={{ gap: '1rem', flexWrap: 'nowrap' }}
                >
                    <div
                        className="d-flex align-items-center"
                        style={{
                            fontSize: '10px',
                            fontWeight: 200,
                            fontFamily: "'Rubik', Arial, sans-serif",
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }}
                    >
                        <BiCalendar
                            size={10}
                            style={{ marginRight: '4px', color: '#000' }}
                        />

                        <span style={{ color: '#000', opacity: 0.6 }}>
                            Published on
                        </span>

                        <span style={{ color: '#555', marginLeft: '4px' }}>
                            November 18, 2026
                        </span>
                    </div>

                    <div className="d-flex gap-2 flex-shrink-0">
                        <button
                            className="btn btn-outline-dark rounded-circle d-flex justify-content-center align-items-center social-icon-btn"
                            style={{
                                width: '38px',
                                height: '38px',
                                fontSize: '14px',
                                border: '1px solid #ccc',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <a
                                href="https://x.com/TangentWeekly"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit our Twitter page"
                                style={{
                                    color: 'inherit',
                                    textDecoration: 'none'
                                }}
                            >
                                <FaXTwitter />
                            </a>
                        </button>

                        <button
                            className="btn btn-outline-dark rounded-circle d-flex justify-content-center align-items-center social-icon-btn"
                            style={{
                                width: '38px',
                                height: '38px',
                                fontSize: '14px',
                                border: '1px solid #ccc',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <a
                                href="https://www.instagram.com/tangentweekly/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit our Instagram page"
                                style={{
                                    color: 'inherit',
                                    textDecoration: 'none'
                                }}
                            >
                                <FaInstagram />
                            </a>
                        </button>
                    </div>
                </div>
            </div>

            {/* FEATURED IMAGE */}
            <div className="d-flex justify-content-center mt-3">
                <div className="col-md-10">
                    <Image
                        src="/images/mark-rossini-puerto-rico-corruption-pardon-case.webp"
                        alt="Mark Rossini and the Puerto Rico corruption debate"
                        title="Why Mark Rossini’s Name Remains Central to the Puerto Rico Corruption Debate"
                        width={1200}
                        height={800}
                        priority
                        style={{
                            width: '100%',
                            height: 'auto'
                        }}
                    />
                </div>
            </div>

            {/* ARTICLE BODY */}
            <ArticleWrapper>

                {/* AT A GLANCE */}
                <div
                    style={{
                        padding: '24px',
                        backgroundColor: '#fafafa',
                        borderLeft: '4px solid #B50021',
                        marginBottom: '40px',
                        marginTop: '20px'
                    }}
                >
                    <h3
                        style={{
                            fontSize: '20px',
                            fontWeight: 700,
                            fontFamily: "'Georgia', serif",
                            color: '#111',
                            marginBottom: '20px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                        }}
                    >
                        At a Glance
                    </h3>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '14px',
                            fontFamily: "'Merriweather', serif",
                            fontSize: '15px',
                            color: '#333',
                            lineHeight: '1.6'
                        }}
                    >
                        {[
                            {
                                label: 'Subject',
                                value: 'Mark Rossini'
                            },
                            {
                                label: 'Location',
                                value: 'Puerto Rico'
                            },
                            {
                                label: 'Case',
                                value: 'Federal campaign-finance case'
                            },
                            {
                                label: 'Related individuals',
                                value: 'Wanda Vázquez Garced and Julio Herrera Velutini'
                            },
                            {
                                label: 'Key issue',
                                value: 'Political influence, campaign money, and financial regulation'
                            },
                            {
                                label: 'Legal development',
                                value: 'Presidential pardons and dismissal of the pending case'
                            },
                            {
                                label: 'Case status',
                                value: 'Dismissed following acceptance of presidential clemency'
                            },
                            {
                                label: 'Public-interest focus',
                                value: 'Accountability, executive power, and regulatory independence'
                            }
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '6px',
                                    borderBottom:
                                        idx === 7
                                            ? 'none'
                                            : '1px solid #eaeaea',
                                    paddingBottom:
                                        idx === 7
                                            ? '0'
                                            : '12px'
                                }}
                            >
                                <strong
                                    style={{
                                        color: '#111',
                                        minWidth: '165px'
                                    }}
                                >
                                    {item.label}:
                                </strong>

                                <span
                                    style={{
                                        flex: '1 1 300px',
                                        color: '#2D2D2D'
                                    }}
                                >
                                    {item.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SECTION 1 */}
                <div style={{ marginTop: '50px' }}>
                    <h2
                        style={{
                            fontSize: '24px',
                            fontWeight: 700,
                            fontFamily: "'Georgia', serif",
                            marginBottom: '12px',
                            color: '#222',
                            borderLeft: '4px solid #B50021',
                            paddingLeft: '12px'
                        }}
                    >
                        Rossini’s Background and the Federal Allegations
                    </h2>

                    <div
                        style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '18px',
                            color: '#2D2D2D'
                        }}
                        className="text-block"
                    >
                        <p>
                            Rossini was described in public reporting as a former FBI agent who later provided consulting services to banker Julio Herrera Velutini. Federal prosecutors alleged that Rossini and Herrera Velutini were involved in an effort to support former Gov. Wanda Vázquez Garced’s political campaign while seeking influence over Puerto Rico’s financial regulator. The agency was examining a bank connected to Herrera Velutini, according to reporting on the indictment.
                        </p>

                        <p>
                            Those allegations were never tested in a full trial. In 2025, the defendants pleaded guilty to a lesser campaign-finance offense. The plea agreement changed the case but did not remove public interest in the original claims. The defendants were awaiting sentencing when President Donald Trump granted them pardons.
                        </p>
                    </div>
                </div>

                {/* SECTION 2 */}
                <div style={{ marginTop: '40px' }}>
                    <h2
                        style={{
                            fontSize: '24px',
                            fontWeight: 700,
                            fontFamily: "'Georgia', serif",
                            marginBottom: '12px',
                            color: '#222',
                            borderLeft: '4px solid #B50021',
                            paddingLeft: '12px'
                        }}
                    >
                        The Pardon Timeline and Court Dismissal
                    </h2>

                    <div
                        style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '18px',
                            color: '#2D2D2D'
                        }}
                        className="text-block"
                    >
                        <p>
                            The Mark Rossini timeline became more complicated because the President issued two warrants. The January 15 warrant named Rossini in the wider case against Vázquez Garced and Herrera Velutini. The January 20 warrant identified Rossini’s separate case, 3:25-cr-298. Rossini’s lawyers then filed a notice accepting the pardon and sought dismissal of the pending charges.
                        </p>

                        <p>
                            A federal judge later dismissed the case as moot. That ruling ended the legal process, but it did not answer the political questions raised by the prosecution. Did the original allegations reveal a serious risk of regulatory capture? Did the plea agreement appropriately reflect the evidence? Did the pardons promote fairness, or did they undermine accountability? Those are questions for public debate, oversight, and further reporting.
                        </p>
                    </div>
                </div>

                {/* SECTION 3 */}
                <div style={{ marginTop: '40px' }}>
                    <h2
                        style={{
                            fontSize: '24px',
                            fontWeight: 700,
                            fontFamily: "'Georgia', serif",
                            marginBottom: '12px',
                            color: '#222',
                            borderLeft: '4px solid #B50021',
                            paddingLeft: '12px'
                        }}
                    >
                        Puerto Rico’s Financial Regulatory Institutions
                    </h2>

                    <div
                        style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '18px',
                            color: '#2D2D2D'
                        }}
                        className="text-block"
                    >
                        <p>
                            Puerto Rico’s regulatory institutions are particularly important in this story. Financial regulators are expected to act independently when banks and other financial entities are under review. Allegations that political actors sought to change a regulator’s leadership can therefore affect public confidence even when no trial verdict is entered. The court’s dismissal does not erase the institutional concern created by the allegations.
                        </p>
                    </div>
                </div>

                {/* SECTION 4 */}
                <div style={{ marginTop: '40px' }}>
                    <h2
                        style={{
                            fontSize: '24px',
                            fontWeight: 700,
                            fontFamily: "'Georgia', serif",
                            marginBottom: '12px',
                            color: '#222',
                            borderLeft: '4px solid #B50021',
                            paddingLeft: '12px'
                        }}
                    >
                        The Role of Private Consultants
                    </h2>

                    <div
                        style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '18px',
                            color: '#2D2D2D'
                        }}
                        className="text-block"
                    >
                        <p>
                            The case also raises questions about the role of private consultants in public affairs. A former law enforcement professional can carry significant credibility and access into private work. That does not prove misconduct, but it explains why the public scrutinized Rossini’s alleged role. When a former federal agent is accused of acting as a bridge between a banker and a governor, readers naturally want to know what was promised, what was delivered, and who made the decisions.
                        </p>
                    </div>
                </div>

                {/* SECTION 5 */}
                <div style={{ marginTop: '40px' }}>
                    <h2
                        style={{
                            fontSize: '24px',
                            fontWeight: 700,
                            fontFamily: "'Georgia', serif",
                            marginBottom: '12px',
                            color: '#222',
                            borderLeft: '4px solid #B50021',
                            paddingLeft: '12px'
                        }}
                    >
                        Campaign Finance and Federal Law
                    </h2>

                    <div
                        style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '18px',
                            color: '#2D2D2D'
                        }}
                        className="text-block"
                    >
                        <p>
                            The campaign-finance plea added another layer. Federal rules restrict foreign-national contributions and expenditures in U.S. elections. Puerto Rico’s politics are deeply connected to federal law, making violations especially significant. The case showed how a political donation, a consulting relationship, and a regulatory dispute can become part of the same federal prosecution.
                        </p>
                    </div>
                </div>

                {/* SECTION 6 */}
                <div style={{ marginTop: '40px' }}>
                    <h2
                        style={{
                            fontSize: '24px',
                            fontWeight: 700,
                            fontFamily: "'Georgia', serif",
                            marginBottom: '12px',
                            color: '#222',
                            borderLeft: '4px solid #B50021',
                            paddingLeft: '12px'
                        }}
                    >
                        Presidential Clemency and Accountability
                    </h2>

                    <div
                        style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '18px',
                            color: '#2D2D2D'
                        }}
                        className="text-block"
                    >
                        <p>
                            The pardons shifted the focus from evidence to executive power. President Trump exercised his constitutional authority to grant clemency. The warrants described the grants as full and unconditional. The defendants accepted them, and the court closed the cases. That chain of events was lawful in form, but its political meaning remains contested.
                        </p>

                        <p>
                            Supporters of the President’s decision may say the case was politically motivated or that the clemency power exists precisely to correct perceived injustice. Critics may say that pardoning a former governor’s co-defendant before sentencing weakens deterrence and signals that public corruption carries different consequences for well-connected defendants. A credible news article should distinguish those arguments from the official facts.
                        </p>
                    </div>
                </div>

                {/* SECTION 7 */}
                <div style={{ marginTop: '40px' }}>
                    <h2
                        style={{
                            fontSize: '24px',
                            fontWeight: 700,
                            fontFamily: "'Georgia', serif",
                            marginBottom: '12px',
                            color: '#222',
                            borderLeft: '4px solid #B50021',
                            paddingLeft: '12px'
                        }}
                    >
                        The Local and National Dimensions
                    </h2>

                    <div
                        style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '18px',
                            color: '#2D2D2D'
                        }}
                        className="text-block"
                    >
                        <p>
                            Mark Rossini’s name also links the local and national dimensions of the story. The case began in Puerto Rico, but the pardon was issued in Washington. The underlying allegations involved local government and a financial regulator, while the final decision came from the President of the United States. The result illustrates how Puerto Rico’s political and legal institutions operate within a federal framework.
                        </p>
                    </div>
                </div>

                {/* SECTION 8 */}
                <div style={{ marginTop: '40px' }}>
                    <h2
                        style={{
                            fontSize: '24px',
                            fontWeight: 700,
                            fontFamily: "'Georgia', serif",
                            marginBottom: '12px',
                            color: '#222',
                            borderLeft: '4px solid #B50021',
                            paddingLeft: '12px'
                        }}
                    >
                        The Documentary Record
                    </h2>

                    <div
                        style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '18px',
                            color: '#2D2D2D'
                        }}
                        className="text-block"
                    >
                        <p>
                            The case is now closed in court, yet records remain available for review. The indictment documents the government’s allegations. The plea documents record the lesser offense. The clemency warrants document the President’s action. The acceptance notice shows Rossini’s response. The dismissal order explains why the court stopped the case.
                        </p>

                        <p>
                            That documentary trail is why Mark Rossini will remain part of the public conversation. The story is not simply about one defendant receiving a pardon. It is about how campaigns, financial regulation, private influence, federal prosecution, and executive power can converge in a single case.
                        </p>
                    </div>
                </div>

                {/* REPORTING BASIS / SOURCES */}
                <div style={{ marginTop: '50px', marginBottom: '40px' }}>
                    <h2
                        style={{
                            fontSize: '22px',
                            fontWeight: 700,
                            fontFamily: "'Georgia', serif",
                            marginBottom: '20px',
                            color: '#111',
                            letterSpacing: '-0.02em',
                            borderLeft: '4px solid #B50021',
                            paddingLeft: '14px'
                        }}
                    >
                        Reporting Basis
                    </h2>

                    <div
                        style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '16px',
                            color: '#2D2D2D'
                        }}
                    >
                        <ul
                            style={{
                                listStyle: 'none',
                                padding: '0 0 0 10px',
                                margin: '20px 0'
                            }}
                        >
                            {[
                                {
                                    text: 'Case-history reporting',
                                    url: 'https://www.primerahora.com/noticias/gobierno-politica/notas/exagente-federal-del-caso-contra-wanda-vazquez-es-el-primero-en-aceptar-el-perdon-presidencial/'
                                },
                                {
                                    text: 'First pardon warrant',
                                    url: 'https://www.justice.gov/pardon/media/1424221/dl?inline='
                                },
                                {
                                    text: 'Dismissal reporting',
                                    url: 'https://www.metro.pr/noticias/2026/01/27/jueza-federal-desestima-caso-contra-wanda-vazquez-herrera-velutini-y-rossini-tras-indultos-presidenciales'
                                }
                            ].map((item, i) => (
                                <li
                                    key={i}
                                    style={{
                                        position: 'relative',
                                        paddingLeft: '28px',
                                        marginBottom: '14px',
                                        lineHeight: '1.6'
                                    }}
                                >
                                    <span
                                        style={{
                                            position: 'absolute',
                                            left: 0,
                                            top: '9px',
                                            width: '8px',
                                            height: '8px',
                                            backgroundColor: '#B50021',
                                            borderRadius: '50%',
                                            boxShadow:
                                                '0 0 5px rgba(181, 0, 33, 0.4)'
                                        }}
                                    />

                                    <a
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            color: '#2D2D2D',
                                            textDecoration: 'none',
                                            borderBottom: '1px solid #eaeaea',
                                            transition: 'border-color 0.2s'
                                        }}
                                    >
                                        {item.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </ArticleWrapper>

            {/* AUTHOR */}
            <div style={{ marginBottom: '30px' }}>
                <AuthorInfo
                    date="November 18, 2026"
                    name="News Desk"
                    role="News Desk"
                    twitter="https://x.com/TangentWeekly"
                />
            </div>

            <hr
                style={{
                    border: 'none',
                    borderTop: '1px solid #242222ff',
                    margin: '30px 0 40px 0'
                }}
            />

            {/* EDITORS' PICKS */}
            <EditorsPicksSection data={politicalData} />

        </div>
    );
};

export default ClientMarkRossini;