import type { Metadata } from "next";
import { BookOpen, ShieldCheck, Scale, FileText, Settings, Key, HeartHandshake, AlertCircle } from 'lucide-react';
import SecondHeader from "@/components/SecondHeader";

export async function generateMetadata(): Promise<Metadata> {
    const siteUrl = "https://www.tangentweekly.com";
    const categoryUrl = `${siteUrl}/legal`;

    return {
        title: "Tangent Weekly – Legal & Policies Directory",
        description: "Access Tangent Weekly’s legal directory, terms and conditions, privacy guidelines, editorial policies, and disclosure documents.",
        alternates: { canonical: categoryUrl },
        openGraph: {
            title: "Tangent Weekly – Legal & Policies Directory",
            description: "Access Tangent Weekly’s legal directory, terms and conditions, privacy guidelines, editorial policies, and disclosure documents.",
            url: "https://www.tangentweekly.com/legal",
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
            title: "Tangent Weekly – Legal & Policies Directory",
            description: "Access Tangent Weekly’s legal directory, terms and conditions, privacy guidelines, editorial policies, and disclosure documents.",
            images: "https://www.tangentweekly.com/images/tangent-logo.webp",
            site: '@TangentWeekly',
        },
    };
}

export default function LegalDirectory() {
    const categories = [
        {
            title: "Editorial & Sourcing Guidelines",
            icon: <BookOpen size={24} className="text-primary me-2" />,
            items: [
                {
                    name: "Editorial Policy",
                    href: "/editorial-policy",
                    description: "Our core promise of accuracy, independence, and fairness in all our reporting."
                },
                {
                    name: "Source Methodology",
                    href: "/source-methodology",
                    description: "How our newsroom gathers, evaluates, and verifies information and documents."
                },
                {
                    name: "Right of Reply Policy",
                    href: "/right-of-reply-policy",
                    description: "Our process for ensuring subjects of critical stories have a timely opportunity to respond."
                }
            ]
        },
        {
            title: "Business & Commercial Disclosures",
            icon: <Scale size={24} className="text-success me-2" />,
            items: [
                {
                    name: "Ownership & Funding",
                    href: "/ownership-funding",
                    description: "Transparency regarding our corporate structure, founding, and revenue model."
                },
                {
                    name: "Advertising & Sponsored Policy",
                    href: "/advertising-sponsored-policy",
                    description: "The strict firewall protecting our editorial desk from commercial placements."
                },
                {
                    name: "Correction Policy",
                    href: "/correction-policy",
                    description: "Our standards for identifying, correcting, and documenting reporting errors."
                }
            ]
        },
        {
            title: "Terms & Data Protection",
            icon: <Key size={24} className="text-warning me-2" />,
            items: [
                {
                    name: "Privacy Policy",
                    href: "/privacy-policy",
                    description: "How we collect, handle, and secure your personal data and digital footprint."
                },
                {
                    name: "Terms and Conditions",
                    href: "/terms-and-conditions",
                    description: "The legal terms, agreements, and rights governing your use of our site."
                }
            ]
        }
    ];

    return (
        <>
            <SecondHeader />

            <main style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
                <section className="py-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                {/* Heading */}
                                <h1 className="text-center fw-bold mb-4" style={{ fontFamily: 'Georgia, serif', color: '#0d1a26' }}>
                                    Legal & Policies Directory
                                </h1>

                                <p className="fs-5 text-secondary text-center mb-5 max-w-2xl mx-auto">
                                    At Tangent Weekly, we hold ourselves accountable to our readers. Here you can find all our legal terms, editorial guidelines, and corporate policies.
                                </p>

                                <hr className="mb-5" />

                                {/* Grid layout of categories */}
                                <div className="row g-4">
                                    {categories.map((category, idx) => (
                                        <div key={idx} className="col-md-6 col-lg-4">
                                            <div className="card h-100 border shadow-sm p-4 bg-light">
                                                <div className="d-flex align-items-center mb-3">
                                                    {category.icon}
                                                    <h3 className="h5 fw-bold mb-0" style={{ color: '#0d1a26' }}>{category.title}</h3>
                                                </div>
                                                <div className="d-grid gap-3">
                                                    {category.items.map((item, itemIdx) => (
                                                        <div key={itemIdx} className="bg-white p-3 border rounded">
                                                            <a href={item.href} className="fw-bold text-decoration-underline text-dark d-block mb-1">
                                                                {item.name}
                                                            </a>
                                                            <small className="text-secondary d-block">{item.description}</small>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Callout box */}
                                <div className="p-4 rounded mt-5 mb-5" style={{ backgroundColor: '#f1f5f9' }}>
                                    <p className="fw-bold mb-2" style={{ color: '#0d1a26' }}>
                                        <AlertCircle size={18} className="me-2 text-primary align-text-bottom" />
                                        Our Commitment to Compliance
                                    </p>
                                    <p className="fs-6 text-secondary mb-2">
                                        These policies are updated regularly to ensure alignment with global standards of privacy (such as GDPR and CCPA) and the highest industry practices in digital journalism. 
                                    </p>
                                    <p className="fs-6 text-secondary mb-0">
                                        Major updates to these agreements will be noted transparently on this website.
                                    </p>
                                </div>

                                {/* Contact CTA */}
                                <p className="fs-6 text-secondary text-center">
                                    For legal inquiries, copyright claims (DMCA notifications), or questions about these policies, please{' '}
                                    <a
                                        href="/contact"
                                        className="fw-semibold text-decoration-underline text-dark"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        contact our legal desk
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
