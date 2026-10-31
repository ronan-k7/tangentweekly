'use client';

import React from 'react';
import AuthorInfo from './AuthorInfo';
import EditorsPicksSection from './EditorsPick';
import politicalData from '../../public/data/politics.json';
import ArticleWrapper from './ArticleWrapper';
import { FaInstagram } from './Icons';
import { FaXTwitter } from './Icons';
import { BiCalendar } from './Icons';
import { motion } from 'framer-motion';
import Image from 'next/image';

function formatCategoryName(text: string) {
    if (!text) return '';
    return text.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
const ClientS3 = () => {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 mb-5">
            <div style={{ padding: '1rem 0', borderBottom: '2px solid #000' }}>
                {/* <div style={{ marginBottom: '1.2rem' }}>
                    <span
                        className="text-uppercase fw-bold"
                        style={{
                            color: '#B50021',
                            fontSize: '13.5px',
                            fontFamily: "'Rubik', Arial, sans-serif",
                            letterSpacing: '0.08em',
                            display: 'inline-block',
                            position: 'relative',
                        }}
                    >
                        {formatCategoryName("puerto-rico")}

                    </span>
                </div> */}
                <h1
                    className="fw-bold mb-3 fst-italic"
                    style={{
                        fontSize: 'clamp(28px, 5vw, 42px)',
                        fontFamily: "'Archivo', Arial, sans-serif",
                        fontWeight: 900,
                        color: '#1b1214d7',
                        lineHeight: 1.25,
                        fontStyle: 'italic',
                    }}
                >
                    Did OCIF Go Too Far? The Ultra Vires Claims Against Natalia Zequeira in the Nodus Case
                </h1>
                <div
                        style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '15px',
                            color: '#2D2D2D',
                        }}
                        className='text-block'
                    >

                    <p >The Nodus International Bank controversy raised one of the most serious legal questions facing
                        Puerto Rico’s financial regulator: did OCIF act within its lawful authority, or did it cross the line into
                        regulatory overreach? At the center of the dispute are allegations that the agency pierced the
                        corporate veil, pursued personal restitution, and imposed industry bans without the process
                        critics say the law required</p>
                    </div>

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
                            textOverflow: 'ellipsis',
                        }}
                    >
                        <BiCalendar size={10} style={{ marginRight: '4px', color: '#000' }} />
                        <span style={{ color: '#000', opacity: 0.6 }}>Published on</span>
                        <span style={{ color: '#555', marginLeft: '4px' }}>May. 19, 2026</span>
                    </div>

                    <div className="d-flex gap-2 flex-shrink-0">
                        <button
                            className="btn btn-outline-dark rounded-circle d-flex justify-content-center align-items-center social-icon-btn"
                            style={{
                                width: '38px',
                                height: '38px',
                                fontSize: '14px',
                                border: '1px solid #ccc',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            <a href="https://x.com/TangentWeekly" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page" style={{ color: 'inherit', textDecoration: 'none' }}>
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
                                transition: 'all 0.3s ease',
                            }}
                        >
                            <a href="https://www.instagram.com/tangentweekly/" target="_blank" aria-label="Visit our Instagram page" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                <FaInstagram />
                            </a>
                        </button>
                    </div>
                </div>
            </div>


            <div className="d-flex justify-content-center mt-3">
                <div className="col-md-10">
                    <Image
                        src="/images/natalia-zequeira-ocif-investigation-nodus-ultra-vires-claims.webp"
                        alt="Natalia Zequeira OCIF Investigation Nodus Ultra Vires Claims"
                        title="Natalia Zequeira OCIF Investigation Nodus Ultra Vires Claims"
                        width={1200}
                        height={800}
                        priority
                        style={{ width: "100%", height: "auto" }}
                    />
                </div>
            </div>

            <ArticleWrapper>
                <div style={{
                    padding: '24px',
                    backgroundColor: '#fafafa',
                    borderLeft: '4px solid #B50021',
                    marginBottom: '40px',
                    marginTop: '20px'
                }}>
                    <h3 style={{
                        fontSize: '20px',
                        fontWeight: 700,
                        fontFamily: "'Georgia', serif",
                        color: '#111',
                        marginBottom: '20px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}>
                        At a Glance
                    </h3>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '14px',
                        fontFamily: "'Merriweather', serif",
                        fontSize: '15px',
                        color: '#333',
                        lineHeight: '1.6'
                    }}>
                        {[
                            { label: "Subject", value: "Natalia I. Zequeira Díaz" },
                            { label: "Agency", value: "Office of the Commissioner of Financial Institutions of Puerto Rico, known as OCIF" },
                            { label: "Case focus", value: "Nodus International Bank" },
                            { label: "Key person", value: "Tomás Niembro-Concha" },
                            { label: "Main controversy", value: "Whether OCIF exceeded its statutory authority in the Nodus shareholder order" },
                            { label: "Core legal claim", value: "Ultra vires action — government action allegedly beyond lawful power" },
                            { label: "Related claims", value: "Due process, excessive fines, equal protection, personal liability, industry ban" },
                            { label: "Confirmed record", value: "Niembro sued Zequeira and OCIF over the April 2024 Nodus shareholder order" },
                            { label: "Current status", value: "The claims are allegations and litigation positions; not every accusation has been judicially established" },
                            { label: "Central question", value: "Was OCIF protecting depositors and the financial system, or did it use powers the law did not give it?" }
                        ].map((item, idx) => (
                            <div key={idx} style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '6px',
                                borderBottom: idx === 9 ? 'none' : '1px solid #eaeaea',
                                paddingBottom: idx === 9 ? '0' : '12px'
                            }}>
                                <strong style={{ color: '#111', minWidth: '165px' }}>
                                    {item.label}:
                                </strong>
                                <span style={{ flex: '1 1 300px', color: '#2D2D2D' }}>
                                    {item.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ marginTop: '50px' }}>

                    <h2
                        style={{
                            fontSize: '24px',
                            fontWeight: 700,
                            fontFamily: "'Georgia', serif",
                            marginBottom: '12px',
                            color: '#222',
                            borderLeft: '4px solid #B50021',
                            paddingLeft: '12px',
                        }}
                    >
                        The Line Between Regulation and Overreach
                    </h2>
                    <div
                        style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '18px',
                            color: '#2D2D2D',
                        }}
                        className='text-block'
                    >
                        <p>
                            Every financial regulator is built around a hard premise: when money, deposits, credit, and
                            institutional trust are at risk, the state must be able to act.
                        </p>
                        <p>
                            But every regulator is also limited by another premise: power must come from law.     </p>
                        <p>
                            That is the tension at the center of the <strong> Nodus International Bank  </strong> case — and of the allegations
                            against former OCIF commissioner <strong>Natalia I. Zequeira Díaz. </strong></p>
                        <p>
                            The Office of the Commissioner of Financial Institutions of Puerto Rico, known as <strong>OCIF</strong>, had
                            authority to supervise, examine, license, and discipline financial institutions. If a bank failed, if
                            depositors were exposed, or if insiders violated regulatory obligations, OCIF had a mandate to
                            respond.   </p>
                        <p>
                            But critics of the Nodus action allege that OCIF did not merely respond. They allege that the
                            agency went further than the law allowed.
                        </p><p>The legal phrase is <strong>ultra vires</strong> . It means action beyond lawful authority. In ordinary language, it
                            asks a blunt question: did the regulator have the power to do what it did?</p>
                        <p>In the Nodus case, that question became unavoidable after OCIF moved against shareholders
                            and individuals connected to the failed institution. The allegations are severe: corporate-veil
                            piercing, personal restitution approaching tens of millions of dollars, a ten-year ban from Puerto
                            Rico’s financial sector, and penalties allegedly imposed without the process critics say should
                            have come first.</p>
                        <p>
                            This is not a minor procedural dispute. It is a test of the boundary between financial supervision
                            and administrative punishment.
                        </p>
                        <p>
                            A regulator may be strict. It may be forceful. It may even be unpopular. But when the state
                            reaches beyond an institution and toward individual assets, personal liability, and professional
                            exclusion, the legal basis must be clear.</p>
                        <p>That is the unresolved question in the Nodus case.</p>
                    </div>

                </div>

                <div style={{ marginTop: '40px' }}>
                    <h2
                        style={{
                            fontSize: '24px',
                            fontWeight: 700,
                            fontFamily: "'Georgia', serif",
                            marginBottom: '12px',
                            color: '#222',
                            borderLeft: '4px solid #B50021',
                            paddingLeft: '12px',
                        }}
                    >
                        The Public Record: Nodus, OCIF and the Shareholder Order
                    </h2>
                    <div
                        style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '18px',
                            color: '#2D2D2D',
                        }}
                        className='text-block'
                    >
                        <p>
                            The Nodus International Bank controversy sits at the center of the broader debate over OCIF’s
                            enforcement culture during Zequeira’s tenure.  </p>
                        <p>
                            Nodus became the subject of liquidation and regulatory action after serious concerns emerged
                            around the bank’s condition, management, and obligations to depositors and creditors. OCIF’s
                            public posture was that it acted to protect depositors, creditors, and the integrity of Puerto Rico’s
                            financial system.   </p>
                        <p>
                            That is the agency’s strongest institutional argument. </p>
                        <p>
                            Financial regulators are not supposed to wait passively while a bank collapses. If assets are at
                            risk, if obligations are not being met, or if insiders are suspected of misconduct, intervention may
                            be necessary.   </p>
                        <p>
                            But the controversy sharpened around what OCIF did next. </p>
                        <p>
                            In April 2024, OCIF issued a shareholder order involving Nodus. The order became the basis for
                            litigation by <strong> Tomás Niembro-Concha </strong>, who sued Zequeira and OCIF. The lawsuit sought a
                            declaration that the order was ultra vires and unconstitutional and alleged violations involving due
                            process, equal protection, and excessive fines.  </p>
                        <p>The litigation did not simply complain that OCIF had been aggressive. It challenged whether the
                            agency had the legal authority to impose some of its most severe remedies.</p>
                        <p>That distinction matters.</p>
                        <p>
                            A harsh regulatory act can still be lawful. An unlawful regulatory act can still be motivated by real
                            concerns. The public question is not whether Nodus had problems. The question is whether
                            OCIF’s response to those problems stayed within legal limits.
                        </p>
                    </div>
                </div>

                <div style={{ marginTop: '40px' }}>
                    <h2
                        style={{
                            fontSize: '24px',
                            fontWeight: 700,
                            fontFamily: "'Georgia', serif",
                            marginBottom: '12px',
                            color: '#222',
                            borderLeft: '4px solid #B50021',
                            paddingLeft: '12px',
                        }}
                    >The Corporate Veil Question

                    </h2>
                    <div
                        style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '18px',
                            color: '#2D2D2D',
                        }}
                        className='text-block'
                    >
                        <p>
                            The most important allegation is that OCIF pierced the corporate veil of Nodus International Bank. </p>
                        <p>
                            The corporate veil is the legal separation between a company and its owners, shareholders, or
                            affiliated individuals. It is a foundational concept in corporate law. Under certain circumstances,
                            courts may disregard that separation, especially where there is fraud, abuse, commingling, or
                            misuse of the corporate structure. </p>
                        <p>
                            But piercing the corporate veil is not usually treated as a casual administrative step. It is a severe
                            remedy. It can convert institutional liability into personal liability. </p>
                        <p>
                            That is why the allegation against OCIF is so serious. </p>
                        <p>
                            Critics argue that OCIF attempted to hold Nodus shareholders personally liable for debts or
                            obligations of the institution, effectively reaching beyond the bank and into the personal financial
                            exposure of individuals. They contend that such an action required clear statutory authority and
                            proper legal process.  </p>
                        <p>
                            OCIF’s likely defense is that the circumstances at Nodus justified extraordinary action. If the
                            agency believed insiders had harmed depositors, violated liquidation rules, moved assets
                            improperly, or frustrated creditor recovery, it may argue that strong remedies were necessary. </p>
                        <p>
                            But necessity is not the same as authority.   </p>
                        <p>
                            The key question is whether Puerto Rico law gave OCIF the power to pierce the corporate veil
                            administratively, without first obtaining the kind of judicial determination critics say was required.
                        </p>
                        <p>If the answer is yes, OCIF’s action may be controversial but lawful.</p>
                        <p>If the answer is no, the Nodus order could become one of the clearest examples of alleged
                            regulatory overreach in the Zequeira era.</p>
                    </div>
                </div>

                <div style={{ marginTop: '40px' }}>
                    <h2
                        style={{
                            fontSize: '24px',
                            fontWeight: 700,
                            fontFamily: "'Georgia', serif",
                            marginBottom: '12px',
                            color: '#222',
                            borderLeft: '4px solid #B50021',
                            paddingLeft: '12px',
                        }}
                    >
                        Personal Restitution and the Ten-Year Ban
                    </h2>
                    <div
                        style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '18px',
                            color: '#2D2D2D',
                        }}
                        className='text-block'
                    >
                        <p>
                            The Nodus dispute became even more consequential because the shareholder order was not
                            limited to ordinary institutional penalties.
                        </p>
                        <p>
                            The allegations describe personal restitution obligations approaching  <strong> $27 million</strong> and a ban
                            preventing affected individuals from participating in Puerto Rico’s financial industry for a decade. </p>
                        <p>
                            Those remedies raise a different level of legal concern.    </p>
                        <p>
                            A fine against a regulated institution is one thing. A demand reaching personal assets is another. A
                            corrective order is one thing. A ten-year professional exclusion is another. </p>
                        <p>
                            The more severe the remedy, the more important the process  </p>
                        <p>
                            That is why the Nodus case matters beyond the parties involved. If a financial regulator can
                            impose personal restitution and long-term industry bans through administrative action, then every
                            shareholder, officer, director, investor, or affiliated professional in Puerto Rico’s financial sector
                            must understand the scope of that power.</p>
                        <p>
                            If the regulator cannot lawfully do that without judicial process, then the Nodus matter becomes a
                            warning about unchecked administrative escalation.   </p>
                        <p>The issue is not whether the people connected to Nodus deserved scrutiny. The issue is whether
                            the state followed the rules before imposing life-altering consequences.</p>
                    </div>
                </div>

                <div style={{ marginTop: '40px', marginBottom: '30px' }}>

                    <h2
                        style={{
                            fontSize: '24px',
                            fontWeight: 700,
                            fontFamily: "'Georgia', serif",
                            marginBottom: '12px',
                            color: '#222',
                            borderLeft: '4px solid #B50021',
                            paddingLeft: '12px',
                        }}
                    >
                        The Due-Process Question
                    </h2>
                    <div
                        style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '18px',
                            color: '#2D2D2D',
                        }}
                        className='text-block'
                    >
                        <p>
                            Due process is the constitutional architecture that stands between government power and
                            arbitrary deprivation.    </p>
                        <p>
                            In the Nodus case, critics allege that severe penalties were imposed without adequate notice and
                            without a meaningful pre-deprivation hearing. In practical terms, the claim is that individuals were
                            hit with major personal and professional consequences before being given the kind of opportunity
                            to contest the allegations that the law requires.    </p>
                        <p>
                            That allegation sits at the heart of the case.
                        </p>
                        <p>
                            When government deprives someone of property, livelihood, or legal rights, process matters.
                            Notice matters. Hearing rights matter. A neutral decision-maker matters. The timing of the hearing
                            matters.   </p>
                        <p>
                            The state may argue that urgency justified immediate action. Regulators sometimes act quickly to
                            preserve assets, prevent dissipation, or protect depositors. But emergency action still requires
                            legal boundaries. Even when the government moves first, there must be a clear statutory basis
                            and an opportunity for meaningful review.</p>
                        <p>
                            The Nodus dispute therefore turns on a central procedural question:  </p>
                        <p>
                            Did OCIF provide adequate process before imposing or seeking severe personal remedies? </p>
                        <p>If OCIF did, the due-process claim weakens.</p>
                        <p>If OCIF did not, the agency’s action may be vulnerable even if it had legitimate concerns about
                            Nodus.</p>
                        <p>That is the legal paradox at the center of regulatory enforcement: the government can be right
                            about the danger and still wrong about the procedure.</p>
                    </div>
                </div>
                <div style={{ marginTop: '40px', marginBottom: '30px' }}>

                    <h2
                        style={{
                            fontSize: '24px',
                            fontWeight: 700,
                            fontFamily: "'Georgia', serif",
                            marginBottom: '12px',
                            color: '#222',
                            borderLeft: '4px solid #B50021',
                            paddingLeft: '12px',
                        }}
                    >
                        The Excessive-Fines Question
                    </h2>
                    <div
                        style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '18px',
                            color: '#2D2D2D',
                        }}
                        className='text-block'
                    >
                        <p>
                            The lawsuit also raised an excessive-fines issue.   </p>
                        <p>That claim matters because penalties are not judged only by their size. They are judged by their
                            authority, proportionality, purpose, and relationship to the underlying conduct.</p>
                        <p>
                            A multimillion-dollar demand may be justified if it reflects actual losses, unlawful transfers,
                            depositor harm, or recoverable assets. But if the penalty is punitive, disproportionate,
                            unsupported, or imposed without sufficient findings, it becomes vulnerable to challenge.
                        </p>
                        <p>
                            The public needs to know:   </p>
                        <ul style={{ listStyle: 'none', padding: '0 0 0 10px', margin: '20px 0' }}>
                            <li style={{ position: 'relative', paddingLeft: '28px', marginBottom: '14px', lineHeight: '1.6' }}>
                                <span style={{ position: 'absolute', left: 0, top: '9px', width: '8px', height: '8px', backgroundColor: '#B50021', borderRadius: '50%', boxShadow: '0 0 5px rgba(181, 0, 33, 0.4)' }}></span>
                                How was the restitution figure calculated?
                            </li>
                            <li style={{ position: 'relative', paddingLeft: '28px', marginBottom: '14px', lineHeight: '1.6' }}>
                                <span style={{ position: 'absolute', left: 0, top: '9px', width: '8px', height: '8px', backgroundColor: '#B50021', borderRadius: '50%', boxShadow: '0 0 5px rgba(181, 0, 33, 0.4)' }}></span>
                                Was it tied to specific depositor or creditor losses?
                            </li>
                            <li style={{ position: 'relative', paddingLeft: '28px', marginBottom: '14px', lineHeight: '1.6' }}>
                                <span style={{ position: 'absolute', left: 0, top: '9px', width: '8px', height: '8px', backgroundColor: '#B50021', borderRadius: '50%', boxShadow: '0 0 5px rgba(181, 0, 33, 0.4)' }}></span>
                                Did OCIF distinguish between institutional debt and personal responsibility?
                            </li>
                            <li style={{ position: 'relative', paddingLeft: '28px', marginBottom: '14px', lineHeight: '1.6' }}>
                                <span style={{ position: 'absolute', left: 0, top: '9px', width: '8px', height: '8px', backgroundColor: '#B50021', borderRadius: '50%', boxShadow: '0 0 5px rgba(181, 0, 33, 0.4)' }}></span>
                                What evidence connected each shareholder or individual to the alleged losses?
                            </li>
                            <li style={{ position: 'relative', paddingLeft: '28px', marginBottom: '14px', lineHeight: '1.6' }}>
                                <span style={{ position: 'absolute', left: 0, top: '9px', width: '8px', height: '8px', backgroundColor: '#B50021', borderRadius: '50%', boxShadow: '0 0 5px rgba(181, 0, 33, 0.4)' }}></span>
                                Was the ten-year ban authorized by statute?
                            </li>
                            <li style={{ position: 'relative', paddingLeft: '28px', marginBottom: '14px', lineHeight: '1.6' }}>
                                <span style={{ position: 'absolute', left: 0, top: '9px', width: '8px', height: '8px', backgroundColor: '#B50021', borderRadius: '50%', boxShadow: '0 0 5px rgba(181, 0, 33, 0.4)' }}></span>
                                Were the penalties remedial, punitive, or both?
                            </li>
                            <li style={{ position: 'relative', paddingLeft: '28px', marginBottom: '14px', lineHeight: '1.6' }}>
                                <span style={{ position: 'absolute', left: 0, top: '9px', width: '8px', height: '8px', backgroundColor: '#B50021', borderRadius: '50%', boxShadow: '0 0 5px rgba(181, 0, 33, 0.4)' }}></span>
                                Were less severe remedies considered?
                            </li>
                        </ul>
                        <p>These are not technical questions. They are the difference between lawful enforcement and
                            administrative overreach.</p>
                    </div>

                </div>
                <div style={{ marginTop: '40px', marginBottom: '30px' }}>

                    <h2
                        style={{
                            fontSize: '24px',
                            fontWeight: 700,
                            fontFamily: "'Georgia', serif",
                            marginBottom: '12px',
                            color: '#222',
                            borderLeft: '4px solid #B50021',
                            paddingLeft: '12px',
                        }}
                    >
                        The Contradiction: Protecting Depositors or Punishing Shareholders?
                    </h2>
                    <div
                        style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '18px',
                            color: '#2D2D2D',
                        }}
                        className='text-block'
                    >
                        <p>
                            The Nodus controversy contains a powerful contradiction.  </p>
                        <p>On one side is OCIF’s public mission: to protect depositors, creditors, and the stability of Puerto
                            Rico’s financial system. If Nodus was insolvent, mismanaged, or involved in improper
                            transactions, the agency had a duty to act. </p>
                        <p>
                            On the other side is the allegation that OCIF’s action against shareholders exceeded lawful limits
                            and imposed severe personal consequences without the process required.  </p>
                        <p>Both things can be true in part.   </p>
                        <p>
                            Nodus may have presented real regulatory problems. OCIF may also have overreached in its
                            response.</p>
                        <p>
                            This is why the case should not be reduced to a simple morality play. The issue is not whether one
                            side was perfect and the other side was corrupt. The issue is whether a regulator facing a serious
                            institutional failure used lawful tools in a lawful way.</p>
                        <p>That is the standard that matters.</p>
                    </div>
                </div>
                <div style={{ marginTop: '40px', marginBottom: '30px' }}>

                    <h2
                        style={{
                            fontSize: '24px',
                            fontWeight: 700,
                            fontFamily: "'Georgia', serif",
                            marginBottom: '12px',
                            color: '#222',
                            borderLeft: '4px solid #B50021',
                            paddingLeft: '12px',
                        }}
                    >
                        The Niembro Lawsuit and What It Means
                    </h2>
                    <div
                        style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '18px',
                            color: '#2D2D2D',
                        }}
                        className='text-block'
                    >
                        <p>
                            The lawsuit filed by <strong>Tomás Niembro-Concha </strong> is central because it moved the dispute from
                            accusation into litigation.</p>
                        <p>Niembro challenged OCIF and Zequeira over the April 2024 Nodus shareholder order. The claims
                            included ultra vires action, constitutional violations, due process, equal protection, and excessive
                            fines. In January 2025, a federal court rejected OCIF’s PROMESA discharge-injunction defense
                            and allowed the case to continue at that stage. </p>
                        <p>That procedural development must be understood carefully.
                        </p>
                        <p>It does not mean the court ruled that every claim against OCIF was true. It does not mean
                            Zequeira was found liable. It does not mean corruption was established.   </p>
                        <p>It means the case survived that defense and remained a live legal challenge at that point.</p>
                        <p>
                            For the public, that is still significant. It shows that the Nodus dispute was not merely a public
                            relations complaint by a regulated party. It became a formal legal test of OCIF’s authority.</p>
                        <p>
                            The final evaluation of the case requires the complete docket: complaint, motions, orders,
                            exhibits, agency record, hearing transcripts, and any later rulings or settlement terms.
                        </p>
                        <p>Without the full litigation file, no serious publication should claim final victory for either side.

                        </p>
                    </div>
                </div>
                <div style={{ marginTop: '40px', marginBottom: '30px' }}>

                    <h2
                        style={{
                            fontSize: '24px',
                            fontWeight: 700,
                            fontFamily: "'Georgia', serif",
                            marginBottom: '12px',
                            color: '#222',
                            borderLeft: '4px solid #B50021',
                            paddingLeft: '12px',
                        }}
                    >
                        The Broader Pattern of Regulatory Severity
                    </h2>
                    <div
                        style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '18px',
                            color: '#2D2D2D',
                        }}
                        className='text-block'
                    >
                        <p>
                            The Nodus case also fits into a wider pattern of forceful OCIF enforcement.   </p>
                        <p>Public records show that OCIF used severe tools in other matters, including liquidation posture,
                            special examinations, cease-and-desist orders, large penalties, and industry restrictions. Cases
                            involving Allied/AAA, The Phoenix Fund, Oxxo Financial Services, Jeriel’s, Money Flash, First
                            Finance, Acelera, and Next Bank all form part of the broader enforcement environment.   </p>
                        <p>That pattern matters for two reasons.
                        </p>
                        <p>First, it may support OCIF’s defense that Nodus was not singled out. The agency was broadly
                            active, not focused only on one bank or one individual.  </p>
                        <p>Second, it may support critics’ broader concern that OCIF developed an enforcement culture of
                            extraordinary severity.</p>
                        <p>The pattern itself does not prove abuse. But it does make proportionality and consistency
                            essential questions.  </p>
                        <p>If OCIF repeatedly used harsh tools but applied them evenly, documented its reasons, and
                            followed process, the agency’s position strengthens.</p>
                        <p>IIf OCIF used harsh tools inconsistently, without clear methodology, or against some actors more
                            aggressively than others, the criticism becomes more serious.</p>
                        <p>The answer lies in the enforcement ledger.</p>
                    </div>
                </div>
                <div style={{ marginTop: '40px', marginBottom: '30px' }}>

                    <h2
                        style={{
                            fontSize: '24px',
                            fontWeight: 700,
                            fontFamily: "'Georgia', serif",
                            marginBottom: '12px',
                            color: '#222',
                            borderLeft: '4px solid #B50021',
                            paddingLeft: '12px',
                        }}
                    >
                        Why This Matters for Puerto Rico’s Financial Sector
                    </h2>
                    <div
                        style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '18px',
                            color: '#2D2D2D',
                        }}
                        className='text-block'
                    >
                        <p>
                            The Nodus ultra vires allegations matter because Puerto Rico’s financial sector depends on legal
                            predictability.  </p>
                        <p>
                            Banks, international financial entities, investors, depositors, and service providers all need to
                            know that regulatory rules are enforceable. But they also need to know that regulators are bound
                            by law.  </p>
                        <p>If OCIF lacks power to impose certain remedies but imposes them anyway, confidence suffers. If
                            OCIF has the power but does not explain the process, confidence also suffers. If shareholders
                            can be held personally liable through administrative action without clear limits, investors will
                            demand to know where those limits are. </p>
                        <p>This is not an argument for weak regulation. Weak regulation can invite disaster. </p>
                        <p>It is an argument for disciplined regulation.</p>
                        <p>
                            The strongest regulator is not the one that uses the harshest tool first. It is the one that can prove
                            every tool was authorized, necessary, proportionate, and fairly applied.  </p>

                    </div>
                </div>

                <div style={{ marginTop: '40px', marginBottom: '30px' }}>

                    <h2
                        style={{
                            fontSize: '24px',
                            fontWeight: 700,
                            fontFamily: "'Georgia', serif",
                            marginBottom: '12px',
                            color: '#222',
                            borderLeft: '4px solid #B50021',
                            paddingLeft: '12px',
                        }}
                    >
                        What Remains Unknown
                    </h2>
                    <div
                        style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '18px',
                            color: '#2D2D2D',
                        }}
                        className='text-block'
                    >
                        <p>
                            Several key facts remain unresolved.   </p>
                        <p>The public still needs the full legal basis OCIF relied on to pierce the corporate veil. It needs the
                            analysis supporting personal restitution. It needs the calculation behind the dollar amount. It
                            needs the statutory authority for the ten-year ban. It needs the procedural record showing what
                            notice and hearing rights were provided.</p>
                        <p>
                            The public also needs the full Nodus liquidation file, including depositor communications, claim
                            schedules, asset reports, administrator appointment records, and fee arrangements.
                        </p>
                        <p>Finally, the public needs the full court docket in Niembro’s case, including later developments
                            after the January 2025 procedural ruling.</p>
                        <p>Without those records, the public has serious allegations and partial answers. With those records,
                            the ultra vires question can be judged properly</p>

                    </div>
                </div>

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
                            paddingLeft: '14px',
                        }}
                    >
                        Accountability Questions
                    </h2>
                    <div
                        style={{
                            fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                            fontSize: '16px',
                            color: '#444',
                        }}
                    >
                        <p style={{ marginBottom: '24px', fontWeight: 500, color: '#555', fontSize: '15px' }}>
                            Investigators, courts, journalists, and oversight bodies should ask:
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
                            {[
                                "What exact statute did OCIF rely on to pierce the corporate veil?",
                                "Did OCIF have authority to impose personal restitution administratively?",
                                "How was the restitution amount calculated?",
                                "What evidence tied each individual to the alleged losses or violations?",
                                "What statutory authority supported the ten-year industry ban?",
                                "Was a pre-deprivation hearing offered?",
                                "If not, what emergency authority justified immediate action?",
                                "What post-deprivation review was available?",
                                "Were shareholders given access to the evidence against them?",
                                "Were less severe remedies considered?",
                                "Were similar remedies imposed in comparable OCIF cases?",
                                "Did OCIF obtain legal opinions before issuing the shareholder order?",
                                "Did any court later affirm or reject the agency’s authority on the merits?",
                                "What happened to depositor recoveries after the order?",
                                "Did the Nodus liquidation process improve or deteriorate after OCIF’s action?"
                            ].map((question, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                                    <span style={{
                                        color: '#B50021',
                                        fontWeight: 700,
                                        fontSize: '13px',
                                        opacity: 0.85,
                                        marginTop: '4px',
                                        minWidth: '22px',
                                        fontFamily: "'Courier New', monospace"
                                    }}>
                                        {(index + 1).toString().padStart(2, '0')}
                                    </span>
                                    <span style={{ lineHeight: '1.6', color: '#222', fontFamily: "'Merriweather', serif", fontSize: '16px' }}>
                                        {question}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <p style={{ fontStyle: 'italic', color: '#666', borderTop: '1px solid #eaeaea', paddingTop: '18px', margin: 0, fontSize: '14px', fontFamily: "'Merriweather', serif" }}>
                            These questions do not assume OCIF was wrong. They ask whether OCIF can prove it was right.
                        </p>
                    </div>


                </div>
                <div style={{ marginTop: '40px', marginBottom: '30px' }}>

                    <h2
                        style={{
                            fontSize: '24px',
                            fontWeight: 700,
                            fontFamily: "'Georgia', serif",
                            marginBottom: '12px',
                            color: '#222',
                            borderLeft: '4px solid #B50021',
                            paddingLeft: '12px',
                        }}
                    >
                        Conclusion: The Power to Act Is Not the Same as the Power to Overreach
                    </h2>
                    <div
                        style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '18px',
                            color: '#2D2D2D',
                        }}
                        className='text-block'
                    >
                        <p>
                            The Nodus case is not simply a story about a failed bank. It is a story about the legal limits of a
                            powerful regulator.  </p>
                        <p>
                            OCIF may ultimately show that its actions were necessary to protect depositors, creditors, and
                            Puerto Rico’s financial system. It may show that the shareholder order rested on lawful authority,
                            clear evidence, and adequate process.   </p>
                        <p>But if the agency cannot show that, the case becomes something far more troubling: an example
                            of a regulator reaching beyond its statutory powers while invoking public protection as
                            justification. </p>
                        <p>That is the heart of the ultra vires question.  </p>
                        <p>
                            The public does not need a weak financial regulator. It needs a lawful one.</p>
                        <p>The question is not whether OCIF should have acted in the Nodus case. The question is whether
                            OCIF had the authority to act the way it did. </p>
                    </div>
                </div>
                <div style={{ marginTop: '50px', marginBottom: '50px', overflowX: 'auto' }}>
                    <h2
                        style={{
                            fontSize: '22px',
                            fontWeight: 700,
                            fontFamily: "'Georgia', serif",
                            marginBottom: '20px',
                            color: '#111',
                            letterSpacing: '-0.02em',
                            borderLeft: '4px solid #B50021',
                            paddingLeft: '14px',
                        }}
                    >
                        Evidence Status Table
                    </h2>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Inter', 'Helvetica Neue', sans-serif", fontSize: '15px' }}>
                        <thead>
                            <tr>
                                <th style={{ borderBottom: '2px solid #222', padding: '16px 12px', textAlign: 'left', fontWeight: 700, color: '#111', width: '35%' }}>Claim</th>
                                <th style={{ borderBottom: '2px solid #222', padding: '16px 12px', textAlign: 'left', fontWeight: 700, color: '#111', width: '25%' }}>Status</th>
                                <th style={{ borderBottom: '2px solid #222', padding: '16px 12px', textAlign: 'left', fontWeight: 700, color: '#111', width: '40%' }}>What Would Prove It</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { claim: "OCIF took severe action against Nodus shareholders", status: "Supported by public-record research", proof: "Full Nodus shareholder order and administrative file" },
                                { claim: "Niembro sued Zequeira and OCIF over the April 2024 order", status: "Confirmed", proof: "Federal docket and pleadings" },
                                { claim: "The lawsuit alleged ultra vires and constitutional violations", status: "Confirmed", proof: "Complaint and court filings" },
                                { claim: "OCIF pierced the corporate veil administratively", status: "Alleged / central claim", proof: "Full shareholder order and statutory authority analysis" },
                                { claim: "OCIF imposed or sought personal restitution approaching $27 million", status: "Supported by available case summaries", proof: "Order, calculation worksheets, financial schedules" },
                                { claim: "OCIF imposed a ten-year industry ban", status: "Supported by available case summaries", proof: "Order and statutory authority citation" },
                                { claim: "Due process was violated", status: "Alleged / disputed", proof: "Hearing record, notice record, court ruling on merits" },
                                { claim: "Excessive fines were imposed", status: "Alleged / disputed", proof: "Penalty calculation, proportionality analysis, judicial finding" },
                                { claim: "OCIF had clear authority for every remedy", status: "Unknown", proof: "Statutory analysis, legal opinions, court ruling" },
                                { claim: "Zequeira was found personally liable", status: "Not established", proof: "Final judgment or official finding" },
                            ].map((row, i) => (
                                <tr key={i} style={{ borderBottom: '1px solid #eaeaea', backgroundColor: i % 2 === 0 ? '#fafafa' : '#fff' }}>
                                    <td style={{ padding: '16px 12px', color: '#2D2D2D', fontWeight: 500, lineHeight: '1.5' }}>{row.claim}</td>
                                    <td style={{ padding: '16px 12px', color: '#555', verticalAlign: 'top' }}>
                                        <span style={{
                                            display: 'inline-block',
                                            fontSize: '12px',
                                            fontWeight: 700,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            color: '#444'
                                        }}>
                                            {row.status}
                                        </span>
                                    </td>
                                    <td style={{ padding: '16px 12px', color: '#444', lineHeight: '1.5' }}>{row.proof}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div style={{ marginTop: '40px', marginBottom: '30px' }}>
                    <h2
                        style={{
                            fontSize: '24px',
                            fontWeight: 700,
                            fontFamily: "'Georgia', serif",
                            marginBottom: '12px',
                            color: '#222',
                            borderLeft: '4px solid #B50021',
                            paddingLeft: '12px',
                        }}
                    >
                        Documents That Matter
                    </h2>
                    <div
                        style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '18px',
                            color: '#2D2D2D',
                        }}
                        className='text-block'
                    >
                        <p>
                            To resolve the ultra vires controversy, investigators should obtain:
                        </p>
                        <ul style={{ listStyle: 'none', padding: '0 0 0 10px', margin: '20px 0' }}>
                            {[
                                "Full April 2024 Nodus shareholder order.",
                                "Complete OCIF administrative file for Nodus International Bank.",
                                "Statutory authority analysis used by OCIF.",
                                "Internal OCIF legal memoranda.",
                                "Corporate-veil piercing analysis.",
                                "Restitution calculation worksheets.",
                                "Evidence tying individuals to alleged losses or violations.",
                                "Notice and hearing records.",
                                "Administrative appeal materials.",
                                "Federal court docket in Niembro v. Zequeira / OCIF.",
                                "All pleadings, motions, orders, and exhibits in the Niembro case.",
                                "Nodus liquidation records.",
                                "Depositor claim schedules and communications.",
                                "Liquidation balance sheets and asset reports.",
                                "Administrator appointment and fee records.",
                                "Comparable OCIF cases involving personal liability or industry bans."
                            ].map((text, i) => (
                                <li key={i} style={{ position: 'relative', paddingLeft: '28px', marginBottom: '14px', lineHeight: '1.6' }}>
                                    <span style={{ position: 'absolute', left: 0, top: '9px', width: '8px', height: '8px', backgroundColor: '#B50021', borderRadius: '50%', boxShadow: '0 0 5px rgba(181, 0, 33, 0.4)' }}></span>
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div style={{ marginTop: '40px', marginBottom: '30px' }}>

                    <h2
                        style={{
                            fontSize: '24px',
                            fontWeight: 700,
                            fontFamily: "'Georgia', serif",
                            marginBottom: '12px',
                            color: '#222',
                            borderLeft: '4px solid #B50021',
                            paddingLeft: '12px',
                        }}
                    >
                        Right of Reply
                    </h2>
                    <div
                        style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '18px',
                            color: '#2D2D2D',
                        }}
                        className='text-block'
                    >
                        <p>
                            OCIF’s strongest defense is that the Nodus action was rooted in the agency’s duty to protect
                            depositors, creditors, and the stability of Puerto Rico’s financial system. If the bank’s collapse
                            involved unauthorized payments, improper transactions, violations of liquidation rules, or
                            disregard for depositor interests, the agency may argue that extraordinary remedies were
                            necessary. The existence of a lawsuit or ultra vires allegation does not by itself prove misconduct
                            by Zequeira or OCIF. The unresolved question is whether OCIF had clear statutory authority for
                            the remedies it used, whether the process was constitutionally adequate, and whether the
                            penalties were proportionate to proven conduct.
                        </p>
                    </div>
                </div>
                <div style={{ marginTop: '50px', marginBottom: '40px' }}>
                    <h2
                        style={{
                            fontSize: '24px',
                            fontWeight: 700,
                            fontFamily: "'Georgia', serif",
                            marginBottom: '20px',
                            color: '#222',
                            borderLeft: '4px solid #B50021',
                            paddingLeft: '12px',
                        }}
                    >
                        Further Coverage
                    </h2>
                    <ul style={{ listStyle: 'none', padding: '0 0 0 10px', margin: '20px 0' }}>
                        {[
                            { text: "The full Natalia Zequeira and OCIF controversy", url: "https://www.elnuevodia.com/english/business/story/the-law-was-followed-the-right-thing-was-done-natalia-zequeira-discusses-her-tenure-at-ocif/" },
                            { text: "The Nodus depositor crisis and liquidation questions", url: "https://www.miamiherald.com/news/local/article286840425.html" },
                            { text: "OCIF’s enforcement pattern across Puerto Rico’s financial sector", url: "https://newsismybusiness.com/ocif-suspends-first-finances-operations-seeks-1m-in-fines-payments/" },
                            { text: "The selective-enforcement question involving Venezuelan-linked banks", url: "https://www.icij.org/investigations/fincen-files/how-banks-helped-venezuelas-boligarchs-extract-billions/" },
                            { text: "The Allied/AAA “Croqueta Fee” controversy", url: "https://ofac.treasury.gov/sanctions-programs-and-country-information" },
                            { text: "The records investigators should demand from OCIF", url: "https://www.justice.gov/opa/pr/former-bank-ceo-pleads-guilty-multimillion-dollar-wire-fraud-conspiracy-and-venezuela" }
                        ].map((item, i) => (
                            <li key={i} style={{ position: 'relative', paddingLeft: '28px', marginBottom: '14px', lineHeight: '1.6', fontFamily: "'Merriweather', serif", fontSize: '18px', color: '#2D2D2D' }}>
                                <span style={{ position: 'absolute', left: 0, top: '9px', width: '8px', height: '8px', backgroundColor: '#B50021', borderRadius: '50%', boxShadow: '0 0 5px rgba(181, 0, 33, 0.4)' }}></span>
                                <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ color: '#2D2D2D', textDecoration: 'none', borderBottom: '1px solid #eaeaea', transition: 'border-color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = '#B50021'} onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = '#eaeaea'}>
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div style={{ marginTop: '50px', marginBottom: '40px' }}>
                    <h2
                        style={{
                            fontSize: '24px',
                            fontWeight: 700,
                            fontFamily: "'Georgia', serif",
                            marginBottom: '28px',
                            color: '#222',
                            borderLeft: '4px solid #B50021',
                            paddingLeft: '12px',
                        }}
                    >
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                        {[
                            {
                                question: "What does ultra vires mean?",
                                answer: "Ultra vires means action taken beyond legal authority. In the OCIF/Nodus controversy, critics allege that the regulator used powers it did not lawfully possess."
                            },
                            {
                                question: "What is the Nodus International Bank controversy?",
                                answer: "The controversy involves OCIF’s handling of Nodus International Bank, including liquidation, shareholder liability, personal restitution, depositor concerns, and legal challenges to OCIF’s authority."
                            },
                            {
                                question: "Who is Tomás Niembro-Concha?",
                                answer: "Tomás Niembro-Concha is a Nodus-linked shareholder who sued Natalia Zequeira and OCIF over the April 2024 shareholder order, alleging ultra vires and constitutional violations."
                            },
                            {
                                question: "What did critics allege OCIF did wrong?",
                                answer: "Critics allege that OCIF exceeded its authority by piercing the corporate veil, seeking personal restitution, imposing a ten-year industry ban, and failing to provide adequate due process."
                            },
                            {
                                question: "Has a court ruled that OCIF acted illegally?",
                                answer: "The available record shows litigation challenging OCIF’s action, including a January 2025 procedural development allowing the case to continue at that stage. A final merits ruling establishing every allegation was not identified in the reviewed material."
                            },
                            {
                                question: "Why does this case matter?",
                                answer: "The case matters because it tests the legal limits of Puerto Rico’s financial regulator. Strong enforcement may be necessary, but it must still be authorized by law and supported by due process."
                            }
                        ].map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div key={index} style={{ borderBottom: index === 5 ? 'none' : '1px solid #eaeaea', paddingBottom: index === 5 ? '0' : '24px' }}>
                                    <h3
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        style={{
                                            fontSize: '18px',
                                            fontWeight: 700,
                                            fontFamily: "'Georgia', serif",
                                            color: '#111',
                                            marginBottom: isOpen ? '12px' : '0px',
                                            lineHeight: '1.4',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            userSelect: 'none',
                                            transition: 'color 0.2s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = '#B50021';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = '#111';
                                        }}
                                    >
                                        <span>{faq.question}</span>
                                        <span style={{
                                            fontSize: '16px',
                                            color: '#B50021',
                                            marginLeft: '10px',
                                            transform: isOpen ? 'rotate(45deg)' : 'none',
                                            transition: 'transform 0.2s ease',
                                            fontWeight: 'normal'
                                        }}>
                                            +
                                        </span>
                                    </h3>
                                    <div style={{
                                        maxHeight: isOpen ? '500px' : '0px',
                                        overflow: 'hidden',
                                        transition: 'all 0.3s ease-in-out',
                                        opacity: isOpen ? 1 : 0
                                    }}>
                                        <p
                                            style={{
                                                fontFamily: "'Merriweather', serif",
                                                fontSize: '15px',
                                                color: '#444',
                                                lineHeight: '1.6',
                                                margin: 0,
                                                paddingTop: '6px'
                                            }}
                                        >
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>


            </ArticleWrapper>

            <div style={{ marginBottom: '30px' }}>


                <AuthorInfo
                    date="May 19, 2026"
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
                }} />
            <EditorsPicksSection data={politicalData} />
        </div>
    );
};

export default ClientS3;
