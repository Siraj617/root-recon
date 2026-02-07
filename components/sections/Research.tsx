"use client";

// Logo Component with real company logos
const CompanyLogo = ({ name, logoUrl }: { name: string; logoUrl: string }) => (
    <div className="flex items-center gap-3">
        <img src={logoUrl} alt={`${name} logo`} className="h-10 w-auto object-contain" />
    </div>
);

const companies = [
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png" },
    { name: "Uber", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/512px-Uber_logo_2018.png" },
    { name: "Airbnb", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_Bélo.svg/512px-Airbnb_Logo_Bélo.svg.png" },
    { name: "Spotify", logo: "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png" },
    { name: "Slack", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/512px-Slack_icon_2019.svg.png" },
    { name: "Stripe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/512px-Stripe_Logo%2C_revised_2016.svg.png" },
    { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/512px-Netflix_2015_logo.svg.png" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/512px-Amazon_logo.svg.png" }
];

export function Research() {
    return (
        <section className="py-16 bg-white border-y border-slate-200 overflow-hidden">
            <div className="w-full mx-auto">
                <p className="text-center text-slate-500 mb-12 text-sm font-semibold uppercase tracking-widest">
                    Trusted by Security Teams at
                </p>

                <div className="relative overflow-hidden">
                    <div className="flex gap-16 items-center logo-scroll">
                        {[...companies, ...companies].map((company, index) => (
                            <div
                                key={`${company.name}-${index}`}
                                className="flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                            >
                                <CompanyLogo name={company.name} logoUrl={company.logo} />
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
                    animation: scroll 30s linear infinite;
                }
            `}</style>
        </section>
    );
}
