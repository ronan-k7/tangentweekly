import type { Metadata } from "next";
import { ShieldCheck, Eye, DollarSign, FileText, Lock, AlertTriangle } from 'lucide-react';
import SecondHeader from "@/components/SecondHeader";

export async function generateMetadata(): Promise<Metadata> {
    const siteUrl = "https://www.tangentweekly.com";
    const categoryUrl = `${siteUrl}/advertising-sponsored-policy`;

    return {
        title: "Tangent Weekly – Advertising & Sponsored Policy",
        description: "Discover Tangent Weekly’s Advertising & Sponsored Policy, outlining our strict editorial firewall, content labeling, and advertising standards.",
        alternates: { canonical: categoryUrl },
        openGraph: {
            title: "Tangent Weekly – Advertising & Sponsored Policy",
            description: "Discover Tangent Weekly’s Advertising & Sponsored Policy, outlining our strict editorial firewall, content labeling, and advertising standards.",
            url: "https://www.tangentweekly.com/advertising-sponsored-policy",
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
            title: "Tangent Weekly – Advertising & Sponsored Policy",
            description: "Discover Tangent Weekly’s Advertising & Sponsored Policy, outlining our strict editorial firewall, content labeling, and advertising standards.",
            images: "https://www.tangentweekly.com/images/tangent-logo.webp",
            site: '@TangentWeekly',
        },
    };
}

export default function AdvertisingSponsoredPolicy() {
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
                                    Advertising & Sponsored Policy
                                </h1>

                                <hr className="mb-4" />

                                {/* Intro */}
                                <p className="fs-6 text-secondary mb-4">
                                    To support our independent journalism and keep our reporting accessible to all, Tangent Weekly accepts advertising, sponsored content, and commercial partnerships. 
                                </p>
                                <p className="fs-6 text-secondary mb-4">
                                    However, our first loyalty is always to our readers. We maintain a strict separation between our newsroom's editorial decisions and our commercial operations. This policy outlines how we protect that independence, ensure clear transparency, and enforce high standards for all paid content.
                                </p>

                                {/* Guidelines list */}
                                <h2 className="fw-semibold mb-4" style={{ color: '#0d1a26' }}>
                                    Our Advertising Commitments:
                                </h2>

                                <div className="d-grid gap-4 mb-5">
                                    {[
                                        {
                                            icon: <AlertTriangle size={20} className="me-2 text-danger" />,
                                            title: "The Editorial Firewall",
                                            description:
                                                "Our editorial decisions are entirely independent of commercial interests. Advertisers, sponsors, and business partners have no influence over our story selection, reporting, writing, or editorial opinions. Our journalists operate independently of our advertising sales team, and commercial partners are never permitted to preview, edit, or approve stories prior to publication."
                                        },
                                        {
                                            icon: <Eye size={20} className="me-2 text-primary" />,
                                            title: "Clear Labeling & Transparency",
                                            description:
                                                "We believe readers should always know who paid for content. We clearly distinguish editorial work from advertising and commercial promotions. Standard advertisements are visually separated from content, and any articles co-developed or funded by sponsors are explicitly labeled as 'Sponsored Content' or 'Presented by [Sponsor]'."
                                        },
                                        {
                                            icon: <ShieldCheck size={20} className="me-2 text-success" />,
                                            title: "Advertising Acceptability Standards",
                                            description:
                                                "We retain absolute discretion to decline or remove any advertisement. We do not accept advertising that is misleading, fraudulent, defamatory, or promotes illegal goods, hate speech, or predatory services. The presence of an advertisement on our site is never an endorsement of the product, service, or company."
                                        },
                                        {
                                            icon: <DollarSign size={20} className="me-2 text-warning" />,
                                            title: "Sponsored Content Guidelines",
                                            description:
                                                "Sponsored content must meet our high standards of relevance, accuracy, and presentation. We do not permit sponsored content that mimics our investigative reporting or misleads readers about its promotional nature. Sponsors are responsible for the factual accuracy of their claims."
                                        },
                                        {
                                            icon: <Lock size={20} className="me-2 text-info" />,
                                            title: "Reader Privacy & Data Protection",
                                            description:
                                                "We protect our readers' data. We do not share personal subscriber or reader information with advertisers without explicit consent. Any tracking or targeting cookies used on our platform must comply with our strict privacy standards and applicable regulations. For details, see our Privacy Policy."
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
                                    <p className="fw-bold mb-2" style={{ color: '#0d1a26' }}>A Note on Commercial Integrity:</p>
                                    <p className="fs-6 text-secondary mb-2">
                                        Tangent Weekly is funded by a combination of digital advertisements, sponsored sections, and reader contributions. Our financial sustainability relies on these sources, but our editorial credibility is our most valuable asset.
                                    </p>
                                    <p className="fs-6 text-secondary mb-0">
                                        We will never compromise our journalistic standards for commercial gain.
                                    </p>
                                </div>

                                {/* Final Section */}
                                <p className="fs-6 text-secondary mb-4">
                                    Our advertising policy is designed to keep our journalism free, fair, and independent. We are accountable to you, our readers.
                                </p>

                                <p className="fs-6 text-secondary">
                                    If you have questions about our advertising guidelines, or if you are interested in advertising opportunities with Tangent Weekly, please{' '}
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
