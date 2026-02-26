import { useState, useEffect, useRef } from "react";
import { Flame, Cloud, Home, Zap, Users as Hub, FileText } from "lucide-react";
import Container from "../components/layout/Container";

const stats = [
    {
        id: 1,
        number: 16000,
        suffix: "+",
        label: "Improved cookstoves distributed",
        icon: Flame,
        color: "text-orange-600",
        bgColor: "bg-orange-50",
    },
    {
        id: 2,
        number: 100000,
        suffix: "",
        label: "tCO₂e Estimated emissions reduced",
        sublabel: "over 5 years",
        icon: Cloud,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
    },
    {
        id: 3,
        number: 500,
        suffix: "+",
        label: "Households engaged",
        sublabel: "in climate-resilient initiatives",
        icon: Home,
        color: "text-emerald-600",
        bgColor: "bg-emerald-50",
    },
    {
        id: 4,
        number: 20,
        suffix: "+",
        label: "Renewable energy centres supported",
        icon: Zap,
        color: "text-amber-600",
        bgColor: "bg-amber-50",
    },
    {
        id: 5,
        number: 40,
        suffix: "+",
        label: "Regional network members",
        icon: Hub,
        color: "text-nature-blue-600",
        bgColor: "bg-stone-50",
    },
];

const StatCard = ({ stat }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let start = 0;
        const end = stat.number;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [isVisible, stat.number]);

    return (
        <div
            ref={countRef}
            className="group p-8 bg-white rounded-xl border border-stone-100 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-nature-green-200/50 flex flex-col items-center text-center"
        >
            <div className={`p-4 rounded-full ${stat.bgColor} ${stat.color} mb-6 transition-transform duration-500 group-hover:scale-110`}>
                <stat.icon size={32} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-2">
                <span className="text-4xl md:text-5xl font-black text-stone-900 tracking-tight">
                    {count.toLocaleString()}{stat.suffix}
                </span>
                <div className="flex flex-col gap-1">
                    <span className="text-sm font-bold text-stone-600 uppercase tracking-wider leading-tight">
                        {stat.label}
                    </span>
                    {stat.sublabel && (
                        <span className="text-xs font-medium text-stone-400 italic">
                            {stat.sublabel}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

const ImpactNumbers = () => {
    return (
        <section className="py-24 bg-slate-50 border-y border-stone-100 relative overflow-hidden">
            {/* Structural Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%">
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <Container className="relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nature-green-100 text-nature-green-700 text-xs font-black uppercase tracking-[0.2em] mb-6">
                        <span className="w-2 h-2 rounded-full bg-nature-green-600 animate-pulse" />
                        Impact Assessment
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-stone-900 mb-6 tracking-tight">
                        Our Impact <span className="text-nature-green-600">in Numbers</span>
                    </h2>
                    <p className="text-lg text-stone-600 font-medium leading-relaxed">
                        Delivering measurable environmental and community transformation across the Horn of Africa through data-driven institutional initiatives.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {stats.map((stat) => (
                        <StatCard key={stat.id} stat={stat} />
                    ))}
                </div>

                <div className="mt-20 flex flex-col items-center gap-6">
                    <div className="w-24 h-px bg-stone-200" />
                    <button className="flex items-center gap-3 px-8 py-4 bg-white border-2 border-stone-200 rounded-full text-stone-700 font-bold hover:bg-stone-50 hover:border-nature-blue-300 hover:text-nature-blue-700 transition-all group active:scale-95 shadow-sm">
                        <FileText size={20} className="text-nature-blue-600" />
                        <span>View 2024 Annual Impact Report</span>
                    </button>
                    <p className="text-xs text-stone-400 font-bold uppercase tracking-widest"> Institutional Credibility & Transparency </p>
                </div>
            </Container>
        </section>
    );
};

export default ImpactNumbers;
