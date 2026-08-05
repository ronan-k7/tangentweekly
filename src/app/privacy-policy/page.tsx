import type { Metadata } from "next";
import { Mail, CheckCircle2 } from 'lucide-react';
import SecondHeader from "@/components/SecondHeader";

export async function generateMetadata(): Promise<Metadata> {

    const siteUrl = "https://www.tangentweekly.com";
    const categoryUrl = `${siteUrl}/privacy-policy`;

    return {
        title: "Tangent Weekly – Privacy Policy",
        description: "Learn how Tangent Weekly protects your data, ensures transparency, and safeguards your information while delivering trusted news.",
        alternates: { canonical: categoryUrl },
        openGraph: {
            title: "Tangent Weekly – Privacy Policy",
            description: "Learn how Tangent Weekly protects your data, ensures transparency, and safeguards your information while delivering trusted news.",
            url: "https://www.tangentweekly.com/privacy-policy",
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
            title: "Tangent Weekly – Privacy Policy",
            description: "Learn how Tangent Weekly protects your data, ensures transparency, and safeguards your information while delivering trusted news.",
            images: "https://www.tangentweekly.com/images/tangent-logo.webp",
            site: '@TangentWeekly',
        },
    };
}

export default function PrivacyPolicy() {
    return (
        <>
            <SecondHeader />

            <main style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
                <section className="py-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">

                                {/* Page Title */}
                                <h1 className="text-center fw-bold mb-4" style={{ fontFamily: 'Georgia, serif', color: '#0d1a26' }}>
                                    Privacy Policy
                                </h1>

                                <hr className="mb-5" />

                                {/* Intro / Commitment */}
                                <p className="fs-5 text-dark mb-5" style={{ fontFamily: 'Georgia, serif', lineHeight: '1.6', color: '#2b2b2b' }}>
                                    Tangent Weekly values reader trust. We collect only limited information necessary to operate our newsroom, communicate with readers, and improve our journalism. This policy explains what we collect, why we collect it, and how we protect it.
                                </p>

                                {/* 1. Information We Collect */}
                                <div className="mb-5">
                                    <h2 className="fw-semibold fs-4 mb-2" style={{ fontFamily: 'Georgia, serif', color: '#0d1a26' }}>
                                        Information We Collect
                                    </h2>
                                    <hr className="mt-1 mb-4" style={{ borderColor: '#cccccc', borderWidth: '1px' }} />

                                    <p className="fs-6 text-secondary mb-3" style={{ lineHeight: '1.6' }}>
                                        When you visit our website, basic technical data such as pages viewed, device type, and browser information may be collected automatically. This information helps us understand readership patterns and improve site performance.
                                    </p>
                                    <p className="fs-6 text-secondary mb-3" style={{ lineHeight: '1.6' }}>
                                        If you contact us directly — for tips, corrections, or inquiries — we collect only the information you choose to provide, such as your name and email address.
                                    </p>
                                    <p className="fs-6 text-secondary mb-0" style={{ lineHeight: '1.6' }}>
                                        We do not collect unnecessary personal data, and we do not sell or trade user information.
                                    </p>
                                </div>

                                {/* 2. How Information Is Used */}
                                <div className="mb-5">
                                    <h2 className="fw-semibold fs-4 mb-2" style={{ fontFamily: 'Georgia, serif', color: '#0d1a26' }}>
                                        How Information Is Used
                                    </h2>
                                    <hr className="mt-1 mb-4" style={{ borderColor: '#cccccc', borderWidth: '1px' }} />

                                    <div className="d-flex flex-column gap-3 mb-4">
                                        {[
                                            "To keep the website operating smoothly and securely.",
                                            "To understand which stories resonate with readers.",
                                            "To respond to messages, tips, or correction requests.",
                                            "To provide updates when readers request them."
                                        ].map((item, index) => (
                                            <div key={index} className="d-flex align-items-start">
                                                <CheckCircle2 size={18} className="me-3 mt-1 text-success flex-shrink-0" style={{ color: '#2e7d32' }} />
                                                <span className="fs-6 text-secondary" style={{ lineHeight: '1.5' }}>{item}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <p className="fs-6 text-secondary mb-0" style={{ lineHeight: '1.6' }}>
                                        We do not use personal data for advertising sales, profiling, or promotional targeting.
                                    </p>
                                </div>

                                {/* 3. Cookies and Analytics */}
                                <div className="mb-5">
                                    <h2 className="fw-semibold fs-4 mb-2" style={{ fontFamily: 'Georgia, serif', color: '#0d1a26' }}>
                                        Cookies and Analytics
                                    </h2>
                                    <hr className="mt-1 mb-4" style={{ borderColor: '#cccccc', borderWidth: '1px' }} />

                                    <p className="fs-6 text-secondary mb-3" style={{ lineHeight: '1.6' }}>
                                        We use cookies and analytics tools to understand how readers interact with our content. You may disable cookies in your browser without affecting access to our reporting.
                                    </p>
                                    <p className="fs-6 text-secondary mb-0" style={{ lineHeight: '1.6' }}>
                                        Third-party analytics services may process anonymized data under their own privacy policies.
                                    </p>
                                </div>

                                {/* 4. Your Rights and Choices */}
                                <div className="mb-5">
                                    <h2 className="fw-semibold fs-4 mb-2" style={{ fontFamily: 'Georgia, serif', color: '#0d1a26' }}>
                                        Your Rights and Choices
                                    </h2>
                                    <hr className="mt-1 mb-4" style={{ borderColor: '#cccccc', borderWidth: '1px' }} />

                                    <p className="fs-6 text-secondary mb-4" style={{ lineHeight: '1.6' }}>
                                        Depending on your jurisdiction, you may have rights to access, correct, or request deletion of personal data. Requests can be submitted using the contact below.
                                    </p>

                                    <div className="d-inline-flex align-items-center p-3 rounded-3 bg-light border border-light-subtle">
                                        <Mail size={18} className="me-2 text-dark" />
                                        <a href="mailto:hello@tangentweekly.com" className="fs-6 fw-semibold text-dark text-decoration-none" style={{ transition: 'opacity 0.2s' }}>
                                            hello@tangentweekly.com
                                        </a>
                                    </div>
                                </div>

                                {/* 5. Data Protection */}
                                <div className="mb-5">
                                    <h2 className="fw-semibold fs-4 mb-2" style={{ fontFamily: 'Georgia, serif', color: '#0d1a26' }}>
                                        Data Protection
                                    </h2>
                                    <hr className="mt-1 mb-4" style={{ borderColor: '#cccccc', borderWidth: '1px' }} />

                                    <p className="fs-6 text-secondary mb-0" style={{ lineHeight: '1.6' }}>
                                        We take reasonable technical and organizational measures to protect information from unauthorized access. Because we limit the data we collect, we also limit exposure and risk.
                                    </p>
                                </div>

                                <p className="fs-6 text-secondary mt-5" style={{ fontStyle: 'italic' }}>
                                    Last Updated: May 25, 2026
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
