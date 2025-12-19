import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Container from "../components/layout/Container";
import SectionHeader from "../components/ui/SectionHeader";

const allNews = [
    {
        title: "Community Reforestation Initiative 2024",
        date: "December 15, 2024",
        image: "/images/hero-bg.png",
        category: "Environmental Action",
        excerpt: "Our massive reforestation campaign has successfully planted over 500,000 trees across degraded landscapes in the Horn of Africa, involving thousands of local community members."
    },
    {
        title: "Clean Water Access Expansion",
        date: "December 10, 2024",
        image: "/images/news-hero.png",
        category: "Community Development",
        excerpt: "We've completed the construction of 15 new solar-powered water wells, providing clean and safe drinking water to over 5,000 households in remote rural areas."
    },
    {
        title: "Climate-Smart Agriculture Training",
        date: "December 5, 2024",
        image: "/images/hero-bg.png",
        category: "Education",
        excerpt: "Over 200 farmers have graduated from our climate-smart agriculture workshop, equipping them with sustainable farming techniques resilient to changing climate patterns."
    },
    {
        title: "Launch of Youth Environmental Club",
        date: "November 28, 2024",
        image: "/images/news-hero.png",
        category: "Youth Engagement",
        excerpt: "A new initiative to engage high school students in environmental stewardship, fostering the next generation of eco-conscious leaders."
    },
    {
        title: "Renewable Energy Partnership",
        date: "November 15, 2024",
        image: "/images/hero-bg.png",
        category: "Sustainability",
        excerpt: "HOAREC has partnered with leading renewable energy firms to bring affordable solar home systems to off-grid communities."
    },
    {
        title: "Biodiversity Research Report Released",
        date: "October 30, 2024",
        image: "/images/news-hero.png",
        category: "Research",
        excerpt: "Our latest research highlights the critical state of biodiversity in key hotspots and proposes urgent conservation strategies for endangered species."
    },
];

// Extract categories for the filter tabs
const categories = ["All", "Environmental Action", "Community Development", "Education", "Sustainability", "Research"];

const NewsPage = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredNews = activeCategory === "All"
        ? allNews
        : allNews.filter(item => item.category === activeCategory || (activeCategory === "Research" && item.category === "Youth Engagement")); // Mapping for demo purposes if categories don't perfectly align

    return (
        <div className="min-h-screen bg-emerald-50 relative flex flex-col">
            {/* Yellow Grid Pattern Background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-30"
                style={{
                    backgroundImage: `linear-gradient(#facc15 1px, transparent 1px), linear-gradient(90deg, #facc15 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <Navbar />
            <main className="flex-grow pt-24 pb-20 relative z-10">
                <Container>
                    <div className="text-center mb-12">
                        <div className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold tracking-wide">
                            Our Impact Stories
                        </div>
                        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-4">
                            Latest <span className="text-emerald-600">Updates</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-slate-600 text-lg">
                            Explore our portfolio of successful projects and initiatives across environmental conservation and community development.
                        </p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex justify-center mb-16">
                        <div className="inline-flex flex-wrap justify-center gap-2 p-2 bg-white rounded-full shadow-lg border border-slate-100">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeCategory === category
                                        ? "bg-emerald-600 text-white shadow-md transform scale-105"
                                        : "text-slate-500 hover:text-emerald-600 hover:bg-emerald-50"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                        {filteredNews.map((item, index) => (
                            <div
                                key={index}
                                className="group relative flex flex-col h-[480px] w-full bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-emerald-900/20 transition-all duration-500 ease-out border border-slate-100"
                            >
                                {/* Image Area with Creative Reveal */}
                                <div className="relative h-1/2 w-full overflow-hidden p-3">
                                    <div className="relative h-full w-full rounded-[1.5rem] overflow-hidden">
                                        <div
                                            className="absolute inset-0 transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-1"
                                            style={{
                                                backgroundImage: `url(${item.image})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                            }}
                                        />

                                        {/* Overlay with noise texture/gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                                        {/* Floating Date Badge */}
                                        <div className="absolute top-4 right-4 flex flex-col items-center justify-center w-14 h-14 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/50 group-hover:scale-110 transition-transform duration-300 delay-100">
                                            <span className="text-xl font-bold text-slate-800 leading-none">{item.date.split(" ")[1].replace(",", "")}</span>
                                            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wide">{item.date.split(" ")[0].substring(0, 3)}</span>
                                        </div>

                                        {/* Category Tag */}
                                        <div className="absolute top-4 left-4">
                                            <span className="inline-block px-3 py-1 text-[10px] font-extrabold tracking-widest uppercase text-white bg-emerald-600/90 backdrop-blur-sm rounded-full shadow-lg group-hover:bg-yellow-400 group-hover:text-emerald-950 transition-colors duration-300">
                                                {item.category}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="flex flex-col flex-grow px-8 pt-4 pb-8 relative">
                                    {/* Decorative Line */}
                                    <div className="w-12 h-1 bg-yellow-400 rounded-full mb-4 group-hover:w-24 transition-all duration-500" />

                                    <h3 className="text-xl font-bold text-slate-800 mb-3 leading-snug group-hover:text-emerald-700 transition-colors line-clamp-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-slate-500 leading-relaxed mb-6 line-clamp-3 group-hover:text-slate-600 transition-colors">
                                        {item.excerpt}
                                    </p>

                                    <div className="mt-auto flex items-center justify-between">
                                        <button className="text-sm font-bold text-emerald-600 flex items-center gap-2 group/btn">
                                            <span className="relative">
                                                Read Story
                                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover/btn:w-full" />
                                            </span>
                                        </button>

                                        <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center transform group-hover:bg-emerald-600 group-hover:text-white group-hover:rotate-45 transition-all duration-300 shadow-sm">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </main>

            {/* Smooth Transition to Footer */}
            <div className="relative h-32 w-full overflow-hidden -mb-1 z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-50/50 pointer-events-none" />
                <svg
                    className="absolute bottom-0 w-full h-full text-emerald-50"
                    preserveAspectRatio="none"
                    viewBox="0 0 1440 320"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="footer-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#ecfdf5" /> {/* emerald-50 */}
                            <stop offset="50%" stopColor="#fefce8" /> {/* yellow-50 */}
                            <stop offset="100%" stopColor="#d1fae5" /> {/* emerald-100 */}
                        </linearGradient>
                    </defs>
                    <path
                        fill="url(#footer-gradient)"
                        fillOpacity="1"
                        d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>
            </div>

            <Footer />
        </div>
    );
};

export default NewsPage;
