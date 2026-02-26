import { Link } from "react-router-dom";
import Container from "../components/layout/Container";
import newsHeader from "../images/newsheader.jpg";

const newsItems = [
    {
        id: 1,
        title: "Capacity-Building Training on Evidence-Based, Inclusive Responses to Climate-Induced Migration Underway in Mombasa, Kenya  ",
        date: "February 25, 2026",
        summary: "Our new initiative aims to strengthen community-based adaptation strategies across the Horn of Africa, focusing on sustainable water management and agricultural security for vulnerable populations.",
        image: newsHeader,
        category: "Climate Action",
    },
    {
        id: 2,
        title: "New Research on Biodiversity Corridors in Ethiopia",
        date: "February 10, 2024",
        image: newsHeader,
        category: "Research",
    },
    {
        id: 3,
        title: "Regional Environment Forum Highlights Sustainable Growth",
        date: "February 05, 2024",
        image: "/images/news-hero.png",
        category: "Events",
    },
    {
        id: 4,
        title: "Success Stories: Sustainable Land Management in Arid Zones",
        date: "January 28, 2024",
        image: "/images/hero-bg.png",
        category: "Success Story",
    },
];

const News = () => {
    const featured = newsItems[0];
    const secondary = newsItems.slice(1, 4);

    return (
        <section id="news" className="bg-white py-24">
            <Container>
                {/* Section Header */}
                <div className="mb-16">
                    <p className="text-nature-green-600 font-bold uppercase tracking-wider text-sm mb-2">
                        Latest News
                    </p>
                    <div className="relative inline-block">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-4">
                            What's New
                        </h2>
                        {/* Elegant dual-color underline */}
                        <div className="flex w-full h-1">
                            <div className="w-1/2 bg-nature-green-500 rounded-l-full"></div>
                            <div className="w-1/2 bg-nature-blue-500 rounded-r-full"></div>
                        </div>
                    </div>
                </div>

                {/* Main Layout Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Side: Featured Article (65%) */}
                    <div className="lg:col-span-8">
                        <Link
                            to={`/news/${featured.id}`}
                            className="group block"
                        >
                            <div className="overflow-hidden rounded-2xl shadow-sm border border-stone-100 mb-6 bg-white transition-all duration-500 hover:shadow-xl">
                                <div className="aspect-[16/9] overflow-hidden">
                                    <img
                                        src={featured.image}
                                        alt={featured.title}
                                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-xs font-bold text-nature-green-600 bg-nature-green-50 px-3 py-1 rounded-full uppercase tracking-wide">
                                            {featured.category}
                                        </span>
                                        <span className="text-sm text-stone-400">
                                            {featured.date}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 group-hover:text-nature-green-600 transition-colors duration-300">
                                        {featured.title}
                                    </h3>
                                    <p className="text-stone-600 leading-relaxed text-lg line-clamp-3">
                                        {featured.summary}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Right Side: News List (35%) */}
                    <div className="lg:col-span-4 flex flex-col gap-8">
                        {secondary.map((item, index) => (
                            <Link
                                key={item.id}
                                to={`/news/${item.id}`}
                                className="group flex gap-4 transition-all duration-300"
                            >
                                <div className="w-24 h-24 shrink-0 overflow-hidden rounded-xl border border-stone-100 shadow-sm">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h4 className="font-bold text-stone-900 leading-tight mb-2 group-hover:text-nature-blue-600 transition-colors duration-300 line-clamp-2">
                                        {item.title}
                                    </h4>
                                    <span className="text-xs text-stone-400 font-medium">
                                        {item.date}
                                    </span>
                                    {index < secondary.length - 1 && (
                                        <div className="mt-6 border-b border-stone-100 w-full group-last:hidden"></div>
                                    )}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <Link
                        to="/news"
                        className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white bg-nature-green-700 rounded-full transition-all duration-300 hover:bg-nature-green-800 hover:scale-105 hover:shadow-lg shadow-md uppercase tracking-wide"
                    >
                        View More News
                    </Link>
                </div>
            </Container>
        </section>
    );
};

export default News;
