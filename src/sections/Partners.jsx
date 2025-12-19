import Container from "../components/layout/Container";
import SectionHeader from "../components/ui/SectionHeader";

import partner1 from "../images/partners/partner-1.jpg";
import partner2 from "../images/partners/partner-2.png";
import partner3 from "../images/partners/partner-3.png";
import partner4 from "../images/partners/partner-4.png";
import partner5 from "../images/partners/partner-5.png";
import partner6 from "../images/partners/partner-6.png";
import partner7 from "../images/partners/partner-7.png";
import partner8 from "../images/partners/partner-8.png";
import partner9 from "../images/partners/partner-9.png";

const partners = [
    { name: "Partner 1", logo: partner1 },
    { name: "Partner 2", logo: partner2 },
    { name: "Partner 3", logo: partner3 },
    { name: "Partner 4", logo: partner4 },
    { name: "Partner 5", logo: partner5 },
    { name: "Partner 6", logo: partner6 },
    { name: "Partner 7", logo: partner7 },
    { name: "Partner 8", logo: partner8 },
    { name: "Partner 9", logo: partner9 },
];

const Partners = () => {
    return (
        <section className="py-16 bg-sky-50 overflow-hidden border-t border-slate-100">
            <Container>
                <div className="text-center mb-8">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Trusted by Global Partners</h3>
                </div>

                <div className="relative w-full overflow-hidden mask-linear-fade">
                    {/* Gradient Masks for smooth fade edges */}
                    <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-sky-50 to-transparent" />
                    <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-sky-50 to-transparent" />

                    {/* Scrolling Track */}
                    <div className="flex w-max animate-scroll gap-12 hover:[animation-play-state:paused]">
                        {/* Quadruple the list for seamless loop on large screens */}
                        {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                            <div
                                key={index}
                                className="group flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer p-4 rounded-xl hover:bg-white hover:shadow-lg"
                            >
                                {/* Partner Logo Image */}
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="h-16 w-auto object-contain transition-all duration-300 opacity-80 group-hover:opacity-100"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Partners;
