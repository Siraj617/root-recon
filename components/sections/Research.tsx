"use client";

const companies = [
    { name: "Microsoft", logo: "/logos/microsoft.svg" },
    { name: "Uber", logo: "/logos/uber.svg" },
    { name: "Airbnb", logo: "/logos/airbnb.svg" },
    { name: "Spotify", logo: "/logos/spotify.svg" },
    { name: "Slack", logo: "/logos/slack.svg" },
    { name: "Stripe", logo: "/logos/stripe.svg" },
    { name: "Netflix", logo: "/logos/netflix.svg" },
    { name: "Amazon", logo: "/logos/amazon.svg" },
];

export function Research() {
    return (
        <section className="py-12 bg-white border-y border-slate-100 overflow-hidden">
            <div className="w-full mx-auto">
                <p className="text-center text-slate-400 mb-8 text-sm font-semibold uppercase tracking-widest">
                    Trusted by Security Teams at
                </p>

                <div className="relative overflow-hidden">
                    <div className="flex items-center logo-scroll">
                        {[...companies, ...companies, ...companies, ...companies].map((company, index) => (
                            <div
                                key={`${company.name}-${index}`}
                                className="flex-shrink-0 px-8 opacity-50 hover:opacity-100 transition-opacity duration-300"
                            >
                                <img
                                    src={company.logo}
                                    alt={`${company.name} logo`}
                                    className="h-12 w-20 object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .logo-scroll {
                    animation: scroll 40s linear infinite;
                    width: max-content;
                }
            `}</style>
        </section>
    );
}
