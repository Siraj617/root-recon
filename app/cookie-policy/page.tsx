import { Header } from "@/components/layout/Header";
import { Contact } from "@/components/sections/Contact";

export default function CookiePolicyPage() {
    return (
        <main className="min-h-screen font-sans">
            <Header />

            <section className="pt-32 pb-20">
                <div className="container px-4 mx-auto max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">Cookie Policy</h1>
                    <p className="text-slate-500 mb-12">Last updated: December 21, 2024</p>

                    <div className="prose prose-slate prose-lg max-w-none">
                        <h2>1. What Are Cookies</h2>
                        <p>
                            Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
                        </p>

                        <h2>2. How We Use Cookies</h2>
                        <p>We use cookies for the following purposes:</p>
                        <ul>
                            <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly.</li>
                            <li><strong>Analytics Cookies:</strong> These help us understand how visitors interact with our website.</li>
                            <li><strong>Marketing Cookies:</strong> These are used to track visitors across websites to display relevant advertisements.</li>
                        </ul>

                        <h2>3. Types of Cookies We Use</h2>
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-slate-100">
                                    <th className="border p-3 text-left">Cookie Name</th>
                                    <th className="border p-3 text-left">Purpose</th>
                                    <th className="border p-3 text-left">Duration</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border p-3">_ga</td>
                                    <td className="border p-3">Google Analytics - tracks visitors</td>
                                    <td className="border p-3">2 years</td>
                                </tr>
                                <tr>
                                    <td className="border p-3">_gid</td>
                                    <td className="border p-3">Google Analytics - distinguishes users</td>
                                    <td className="border p-3">24 hours</td>
                                </tr>
                                <tr>
                                    <td className="border p-3">session_id</td>
                                    <td className="border p-3">Essential - maintains user session</td>
                                    <td className="border p-3">Session</td>
                                </tr>
                            </tbody>
                        </table>

                        <h2>4. Managing Cookies</h2>
                        <p>
                            You can control and manage cookies in various ways. Most browsers allow you to refuse or accept cookies, delete cookies, or be notified when a cookie is set.
                        </p>

                        <h2>5. Contact Us</h2>
                        <p>
                            If you have questions about our use of cookies, please contact us at privacy@rootrecon.com.
                        </p>
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
}
