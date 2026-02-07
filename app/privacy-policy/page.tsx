import { Header } from "@/components/layout/Header";
import { Contact } from "@/components/sections/Contact";

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen font-sans">
            <Header />

            <section className="pt-32 pb-20">
                <div className="container px-4 mx-auto max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">Privacy Policy</h1>
                    <p className="text-slate-500 mb-12">Last updated: December 21, 2024</p>

                    <div className="prose prose-slate prose-lg max-w-none">
                        <h2>1. Introduction</h2>
                        <p>
                            RootRecon ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                        </p>

                        <h2>2. Information We Collect</h2>
                        <p>We may collect information about you in a variety of ways, including:</p>
                        <ul>
                            <li><strong>Personal Data:</strong> Name, email address, phone number, company name, and job title when you fill out our forms.</li>
                            <li><strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, and pages visited.</li>
                            <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to track activity on our website.</li>
                        </ul>

                        <h2>3. How We Use Your Information</h2>
                        <p>We use the information we collect to:</p>
                        <ul>
                            <li>Provide, operate, and maintain our services</li>
                            <li>Improve, personalize, and expand our services</li>
                            <li>Communicate with you about updates, promotions, and other news</li>
                            <li>Process transactions and send related information</li>
                            <li>Comply with legal obligations</li>
                        </ul>

                        <h2>4. Sharing Your Information</h2>
                        <p>
                            We do not sell your personal information. We may share your information with service providers who assist us in operating our website and conducting our business, as long as those parties agree to keep this information confidential.
                        </p>

                        <h2>5. Security</h2>
                        <p>
                            We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
                        </p>

                        <h2>6. Your Rights</h2>
                        <p>
                            Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data.
                        </p>

                        <h2>7. Contact Us</h2>
                        <p>
                            If you have questions about this Privacy Policy, please contact us at privacy@rootrecon.com.
                        </p>
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
}
