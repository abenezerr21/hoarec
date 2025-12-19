import { Link } from "react-router-dom";
import Container from "../components/layout/Container";
import SectionHeader from "../components/ui/SectionHeader";

const newsItems = [
    {
        title: "Community Reforestation Initiative 2024",
        date: "December 15, 2024",
        image: "/images/hero-bg.png",
        category: "Environmental Action",
    },
    {
        title: "Clean Water Access Expansion",
        date: "December 10, 2024",
        image: "/images/news-hero.png",
        category: "Community Development",
    },
    {
        title: "Climate-Smart Agriculture Training",
        date: "December 5, 2024",
        image: "/images/hero-bg.png",
        category: "Education",
    },
];

const News = () => (
    <section
        id="news"
        className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-emerald-100/50"
    >
        <Container className="relative py-24">
            {/* Header Section */}
            <div className="mb-12 text-center">
                <SectionHeader
                    eyebrow="Latest Updates"
                    title="News & Impact Stories"
                    description="Stay informed about our latest environmental initiatives and community impact across the Horn of Africa"
                    className="text-stone-900 [&>p]:text-stone-600"
                />
            </div>

            {/* News Cards */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {newsItems.map((item, index) => (
                    <div
                        key={index}
                        className="group relative h-[400px] cursor-pointer overflow-hidden rounded-3xl bg-stone-100 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/30"
                    >
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                            style={{
                                backgroundImage: `url(${item.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                        {/* Content */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            {/* Decorative Line */}
                            <div className="mb-4 h-1 w-12 rounded-full bg-yellow-400 transform origin-left transition-all duration-300 group-hover:w-20" />

                            {/* Meta */}
                            <div className="mb-3 flex items-center gap-3 text-sm font-medium text-emerald-100/90">
                                <span className="rounded-full bg-emerald-800/50 backdrop-blur-sm border border-emerald-400/30 px-3 py-1">
                                    {item.category}
                                </span>
                                <span>{item.date}</span>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold leading-tight text-white group-hover:text-yellow-300 transition-colors">
                                {item.title}
                            </h3>

                            {/* Hover Arrow */}
                            <div className="mt-6 flex items-center gap-2 text-sm font-bold text-yellow-300 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                READ STORY
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 text-center">
                <Link to="/news" className="group relative inline-flex items-center gap-3 rounded-full bg-emerald-900 px-8 py-4 text-base font-bold text-white shadow-xl shadow-emerald-900/20 hover:shadow-emerald-900/40 hover:bg-emerald-800 transition-all duration-300 hover:scale-105">
                    <span>View All News</span>
                    <svg
                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                    </svg>
                </Link>
            </div>
        </Container>
    </section>
);

export default News;
