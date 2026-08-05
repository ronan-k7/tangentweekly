import type { Metadata } from "next";
import { ShieldCheck, BookOpenText, FileText, CheckSquare, Search, Award } from 'lucide-react';
import SecondHeader from "@/components/SecondHeader";

export async function generateMetadata(): Promise<Metadata> {
    const siteUrl = "https://www.tangentweekly.com";
    const categoryUrl = `${siteUrl}/source-methodology`;

    return {
        title: "Tangent Weekly – Source Methodology",
        description: "Discover Tangent Weekly’s source methodology: how we gather, verify, and attribute information across politics, business, tech, health, and science.",
        alternates: { canonical: categoryUrl },
        openGraph: {
            title: "Tangent Weekly – Source Methodology",
            description: "Discover Tangent Weekly’s source methodology: how we gather, verify, and attribute information across politics, business, tech, health, and science.",
            url: "https://www.tangentweekly.com/source-methodology",
            siteName: "Tangent Weekly",
            images: [
                {
                    url: "https://www.tangentweekly.com/images/tangent-logo.webp",
                    width: 1200,
                    height: 630,
                    alt: "Tangent Weekly Logo",
                },
            ],
            type: "website",
        },
        twitter: {
            card: 'summary_large_image',
            title: "Tangent Weekly – Source Methodology",
            description: "Discover Tangent Weekly’s source methodology: how we gather, verify, and attribute information across politics, business, tech, health, and science.",
            images: "https://www.tangentweekly.com/images/tangent-logo.webp",
            site: '@TangentWeekly',
        },
    };
}

export default function SourceMethodology() {
    return (
        <>
            <SecondHeader />

            <main style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
                <section className="py-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                {/* Heading */}
                                <h1 className="text-center fw-bold mb-4" style={{ fontFamily: 'Georgia, serif', color: '#0d1a26' }}>
                                    Our Sourcing Standards
                                </h1>

                                <hr className="mb-4" />

                                {/* Intro */}
                                <p className="fs-6 text-secondary mb-4">
                                    Trust is built on transparency. At Tangent Weekly, we believe you have a right to know not just what we report, but how we got the information. 
                                </p>
                                <p className="fs-6 text-secondary mb-4">
                                    Our journalists follow a strict verify-first model. We do not chase clickbait or repeat unconfirmed rumors. Every story we publish is grounded in rigorous investigation and verified facts. This page outlines the standards and methods we use to gather, verify, and attribute our information.
                                </p>

                                {/* Sourcing Pillars */}
                                <h2 className="fw-semibold mb-4" style={{ color: '#0d1a26' }}>
                                    The Pillars of Our Methodology:
                                </h2>

                                <div className="d-grid gap-4 mb-5">
                                    {[
                                        {
                                            icon: <FileText size={20} className="me-2 text-primary" />,
                                            title: "Primary Sources & Public Records",
                                            description:
                                                "We prioritize direct evidence. We rely on official court transcripts, regulatory filings (such as Puerto Rico's OCIF decisions, SEC files, and financial audits), legislative texts, and peer-reviewed scientific studies. If a document is central to a story, we seek to obtain and review it directly."
                                        },
                                        {
                                            icon: <CheckSquare size={20} className="me-2 text-success" />,
                                            title: "Verification & Multi-Sourcing",
                                            description:
                                                "We do not publish major factual claims based on a single uncorroborated source. Important details—such as names, dates, financial figures, and direct quotes—must be cross-referenced with independent archives, databases, or secondary corroboration before publication."
                                        },
                                        {
                                            icon: <Search size={20} className="me-2 text-warning" />,
                                            title: "Handling Anonymous Sources",
                                            description:
                                                "We always prefer sources who speak on-the-record. We only grant anonymity if the source has direct, first-hand knowledge and faces real danger of professional, legal, or personal retaliation. Anonymous tips must be corroborated by independent documentation before being included in our reporting."
                                        },
                                        {
                                            icon: <ShieldCheck size={20} className="me-2 text-danger" />,
                                            title: "Fairness & Opportunity to Respond",
                                            description:
                                                "We believe in fair representation. When we report on allegations, investigations, or criticisms of individuals or organizations, we always contact the subjects to request their perspective and provide a reasonable window for a response."
                                        },
                                        {
                                            icon: <Award size={20} className="me-2 text-info" />,
                                            title: "Independence & Conflict of Interest",
                                            description:
                                                "Our journalists sign and adhere to a strict conflict-of-interest policy. They are prohibited from holding financial interests or active political roles in industries they cover, ensuring our coverage is entirely free from external bias."
                                        }
                                    ].map((item, idx) => (
                                        <div key={idx} className="bg-white p-4 border rounded shadow-sm">
                                            <p className="fw-bold d-flex align-items-center mb-2" style={{ color: '#0d1a26' }}>
                                                {item.icon}
                                                <span>{item.title}</span>
                                            </p>
                                            <p className="text-secondary fs-6 mb-0">{item.description}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Special Note Block */}
                                <div className="p-4 rounded mb-5" style={{ backgroundColor: '#f1f5f9' }}>
                                    <p className="fw-bold mb-2" style={{ color: '#0d1a26' }}>Localized and Specialized Reporting:</p>
                                    <p className="fs-6 text-secondary mb-2">
                                        For complex financial, legal, or regulatory topics (such as banking oversight, corporate litigation, or tech policy), we regularly engage independent industry experts and legal professionals. 
                                    </p>
                                    <p className="fs-6 text-secondary mb-0">
                                        Their expertise helps us translate complex terminology into clear, accessible language, ensuring our reporting is both understandable and technically precise.
                                    </p>
                                </div>

                                {/* Final Section */}
                                <p className="fs-6 text-secondary mb-4">
                                    Our sourcing standards are not static; they represent our daily commitment to truth and fairness. We are accountable to you, our readers.
                                </p>

                                <p className="fs-6 text-secondary">
                                    If you have questions about our sourcing, or if you want to submit a tip or share documentation with our team, please{' '}
                                    <a
                                        href="/contact"
                                        className="fw-semibold text-decoration-underline text-dark"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        get in touch
                                    </a>.
                                </p>
                             </div>
                        </div>
                    </div>
                </section>
                <div style={{ marginBottom: '3rem' }} />
            </main>
        </>
    );
}
