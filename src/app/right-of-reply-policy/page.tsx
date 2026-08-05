import type { Metadata } from "next";
import { ShieldCheck, Clock, VolumeX, Edit, FileText } from 'lucide-react';
import SecondHeader from "@/components/SecondHeader";

export async function generateMetadata(): Promise<Metadata> {
    const siteUrl = "https://www.tangentweekly.com";
    const categoryUrl = `${siteUrl}/right-of-reply-policy`;

    return {
        title: "Tangent Weekly – Right of Reply Policy",
        description: "Discover Tangent Weekly’s Right of Reply Policy: our commitment to giving subjects of critical reporting a fair opportunity to respond.",
        alternates: { canonical: categoryUrl },
        openGraph: {
            title: "Tangent Weekly – Right of Reply Policy",
            description: "Discover Tangent Weekly’s Right of Reply Policy: our commitment to giving subjects of critical reporting a fair opportunity to respond.",
            url: "https://www.tangentweekly.com/right-of-reply-policy",
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
            title: "Tangent Weekly – Right of Reply Policy",
            description: "Discover Tangent Weekly’s Right of Reply Policy: our commitment to giving subjects of critical reporting a fair opportunity to respond.",
            images: "https://www.tangentweekly.com/images/tangent-logo.webp",
            site: '@TangentWeekly',
        },
    };
}

export default function RightOfReplyPolicy() {
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
                                    Right of Reply Policy
                                </h1>

                                <hr className="mb-4" />

                                {/* Intro */}
                                <p className="fs-6 text-secondary mb-4">
                                    At Tangent Weekly, fairness and accuracy are central to our editorial mission. We believe that anyone who is the subject of critical reporting, allegations, or investigative scrutiny has a fundamental right of reply.
                                </p>
                                <p className="fs-6 text-secondary mb-4">
                                    This policy outlines how we ensure subjects of our stories are given a fair, prompt opportunity to present their side of the story, ensuring our readers receive a complete and balanced picture.
                                </p>

                                {/* Sourcing Pillars */}
                                <h2 className="fw-semibold mb-4" style={{ color: '#0d1a26' }}>
                                    Our Core Commitments:
                                </h2>

                                <div className="d-grid gap-4 mb-5">
                                    {[
                                        {
                                            icon: <ShieldCheck size={20} className="me-2 text-danger" />,
                                            title: "Fair Opportunity & Pre-Publication Outreach",
                                            description:
                                                "We strive to contact the subjects of any critical reporting, investigations, or serious allegations before publication. We aim to clearly explain the nature of the allegations and provide a reasonable timeframe for them to respond, explain, or refute the claims. Their response, or a fair summary of it, will be included in the published story."
                                        },
                                        {
                                            icon: <Clock size={20} className="me-2 text-primary" />,
                                            title: "Defining a Reasonable Response Window",
                                            description:
                                                "A 'reasonable window' depends on the urgency and complexity of the story. For breaking news, we may request a response within a few hours, while for detailed investigative pieces, we typically provide several days. If a subject requires additional time to consult counsel or retrieve records, we will accommodate this request whenever feasible, provided it does not compromise key public interest timelines."
                                        },
                                        {
                                            icon: <VolumeX size={20} className="me-2 text-warning" />,
                                            title: "Handling Refusals or Silence",
                                            description:
                                                "If a subject declines to comment or does not respond within the provided window, we will state this clearly in the published article (e.g., 'Company X did not respond to multiple requests for comment'). Should they choose to respond after publication, we will update the story promptly to include their perspective, in accordance with our Correction Policy."
                                        },
                                        {
                                            icon: <Edit size={20} className="me-2 text-success" />,
                                            title: "Post-Publication Right of Reply",
                                            description:
                                                "If we publish a story containing critical claims about an individual or entity without their prior response—due to immediate breaking news demands or unsuccessful contact attempts—they maintain a post-publication right of reply. We invite them to contact our editors directly to submit a response, which we will evaluate and, if factual and relevant, append to the article."
                                        },
                                        {
                                            icon: <FileText size={20} className="me-2 text-info" />,
                                            title: "Submission Guidelines & Accuracy",
                                            description:
                                                "Responses must be factual, directly address the allegations in the article, and comply with legal standards (free from defamation or hate speech). We reserve the right to edit responses for length, clarity, and grammar, but we will never alter the core message or meaning of the subject's statement."
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
                                    <p className="fw-bold mb-2" style={{ color: '#0d1a26' }}>A Note on Collaborative Integrity:</p>
                                    <p className="fs-6 text-secondary mb-2">
                                        The right of reply is not a tool to delay or block publication, but rather a mechanism to ensure completeness. 
                                    </p>
                                    <p className="fs-6 text-secondary mb-0">
                                        We welcome constructive dialogue with all subjects of our reporting, including corporate entities (such as Bancredito), regulatory bodies (like OCIF), and public officials, to guarantee that the information presented to our readers is as accurate and balanced as possible.
                                    </p>
                                </div>

                                {/* Final Section */}
                                <p className="fs-6 text-secondary mb-4">
                                    Our right of reply policy is designed to maintain balance, fairness, and trust in all our reporting. We are committed to getting the whole story.
                                </p>

                                <p className="fs-6 text-secondary">
                                    If you are the subject of an article and wish to exercise your right of reply, or if you have questions about this policy, please{' '}
                                    <a
                                        href="/contact"
                                        className="fw-semibold text-decoration-underline text-dark"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        get in touch with our editorial desk
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
