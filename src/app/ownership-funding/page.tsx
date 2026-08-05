import type { Metadata } from "next";
import { ShieldCheck, DollarSign, FileText, Building, Heart } from 'lucide-react';
import SecondHeader from "@/components/SecondHeader";

export async function generateMetadata(): Promise<Metadata> {
    const siteUrl = "https://www.tangentweekly.com";
    const categoryUrl = `${siteUrl}/ownership-funding`;

    return {
        title: "Tangent Weekly – Ownership & Funding",
        description: "Discover Tangent Weekly’s Ownership & Funding policy: our independent structure and how we fund our politics, business, and tech reporting.",
        alternates: { canonical: categoryUrl },
        openGraph: {
            title: "Tangent Weekly – Ownership & Funding",
            description: "Discover Tangent Weekly’s Ownership & Funding policy: our independent structure and how we fund our politics, business, and tech reporting.",
            url: "https://www.tangentweekly.com/ownership-funding",
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
            title: "Tangent Weekly – Ownership & Funding",
            description: "Discover Tangent Weekly’s Ownership & Funding policy: our independent structure and how we fund our politics, business, and tech reporting.",
            images: "https://www.tangentweekly.com/images/tangent-logo.webp",
            site: '@TangentWeekly',
        },
    };
}

export default function OwnershipFunding() {
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
                                    Ownership & Funding Disclosure
                                </h1>

                                <hr className="mb-4" />

                                {/* Intro */}
                                <p className="fs-6 text-secondary mb-4">
                                    Trust is the cornerstone of independent journalism. At Tangent Weekly, we believe that transparency about our corporate structure and how we fund our operations is essential to maintaining that trust.
                                </p>
                                <p className="fs-6 text-secondary mb-4">
                                    This disclosure details who owns Tangent Weekly, how our independent reporting is supported, and how we ensure our funding never compromises our editorial integrity.
                                </p>

                                {/* Sourcing Pillars */}
                                <h2 className="fw-semibold mb-4" style={{ color: '#0d1a26' }}>
                                    Key Disclosures:
                                </h2>

                                <div className="d-grid gap-4 mb-5">
                                    {[
                                        {
                                            icon: <Building size={20} className="me-2 text-primary" />,
                                            title: "Independent Ownership",
                                            description:
                                                "Tangent Weekly is owned and operated by Stephen M. Knowles, who serves as both the Founder and Editor-in-Chief. We are a privately held, independent digital news outlet. We are not owned by any media conglomerate, hedge fund, or corporate parent. All editorial control rests entirely with our Editor-in-Chief and our editorial desk."
                                        },
                                        {
                                            icon: <DollarSign size={20} className="me-2 text-success" />,
                                            title: "Diversified Funding Channels",
                                            description:
                                                "To cover our operational expenses, web hosting, and journalism compensation, we rely on a diversified revenue model. This includes programmatic digital advertisements (display ads served via ad networks), sponsored content (partnerships and sponsored sections that are strictly separated from editorial work), and reader contributions."
                                        },
                                        {
                                            icon: <ShieldCheck size={20} className="me-2 text-danger" />,
                                            title: "Absolute Editorial Independence",
                                            description:
                                                "No advertiser, sponsor, donor, or corporate partner has any influence over our coverage. Our reporting is driven solely by journalistic value, facts, and public interest. We have a strict internal firewall that ensures our newsroom remains completely isolated from commercial influence. We do not accept funding that carries conditions regarding editorial direction."
                                        },
                                        {
                                            icon: <Heart size={20} className="me-2 text-warning" />,
                                            title: "Reader Contributions",
                                            description:
                                                "We accept voluntary, direct contributions from readers who choose to support independent, non-sensational news. Reader support enables us to focus on deep-dive reporting, keeping our coverage accessible to all without placing articles behind paywalls."
                                        },
                                        {
                                            icon: <FileText size={20} className="me-2 text-info" />,
                                            title: "Reinvestment in Journalism",
                                            description:
                                                "All revenues generated through advertising, sponsorships, and reader support are reinvested directly into our operations. This includes hiring qualified journalists, expanding our technical infrastructure, and funding the research required for our in-depth reporting across politics, business, science, technology, health, and sports."
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
                                    <p className="fw-bold mb-2" style={{ color: '#0d1a26' }}>A Note on Our Independent Mission:</p>
                                    <p className="fs-6 text-secondary mb-2">
                                        Because we are small and independent, we do not answer to corporate shareholders or seek short-term profits at the expense of journalistic integrity. 
                                    </p>
                                    <p className="fs-6 text-secondary mb-0">
                                        This freedom allows us to cover complex stories—such as banking oversight, regional politics in Puerto Rico, and regulatory accountability—with the depth, patience, and neutrality they deserve.
                                    </p>
                                </div>

                                {/* Final Section */}
                                <p className="fs-6 text-secondary mb-4">
                                    Our ownership and funding policies are designed to keep our journalism free, fair, and independent. We are accountable to you, our readers.
                                </p>

                                <p className="fs-6 text-secondary">
                                    If you have questions about our corporate structure, or if you would like to support our work through reader contributions, please{' '}
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
