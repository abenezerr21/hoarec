import Container from "../components/layout/Container";
import SectionHeader from "../components/ui/SectionHeader";

const founders = [
    {
        name: "Dr. Amanuel Tadesse",
        role: "Executive Director",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    },
    {
        name: "Sarah Ahmed",
        role: "Director of Operations",
        image: "https://images.unsplash.com/photo-1573496359-7013119ac63b?auto=format&fit=crop&q=80&w=400",
    },
    {
        name: "David Chen",
        role: "Head of Research",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    },
    {
        name: "Elena Rodriguez",
        role: "Conservation Lead",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    },
    {
        name: "Michael Chang",
        role: "Community Liaison",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    },
    {
        name: "Dr. Rebecca Mola",
        role: "Policy Advisor",
        image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=400",
    },
];

const Founders = () => {
    return (
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-yellow-50 via-emerald-50 to-yellow-100">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <Container className="relative z-10">
                <SectionHeader
                    eyebrow="Leadership"
                    title="Meet the Board Members"
                    description="Our distinguished Board Members who guide HOAREC's strategic direction and ensure our commitment to environmental conservation."
                    className="text-center mb-16"
                />

                <div className="grid gap-12 lg:grid-cols-12">
                    {/* Group Photo Section - Spans full width on mobile, 7 cols on large */}
                    <div className="lg:col-span-12 mb-8">
                        <div className="relative group overflow-hidden rounded-3xl shadow-xl shadow-yellow-900/10 hover:shadow-2xl hover:shadow-emerald-900/20 transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
                                alt="HOAREC Founding Team"
                                className="w-full h-96 object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute bottom-0 left-0 p-8 z-20">
                                <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-yellow-900 uppercase bg-yellow-400 rounded-full">
                                    Since 2010
                                </span>
                                <h3 className="text-3xl font-bold text-white mb-2">
                                    Building a Sustainable Future Together
                                </h3>
                                <p className="text-yellow-50 max-w-2xl">
                                    Our founding team started with a shared vision: to create a lasting harmony between nature and community development in the Horn of Africa.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Individual Founders Grid - 3 cols per row */}
                    <div className="lg:col-span-12">
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {founders.map((founder, index) => (
                                <div
                                    key={founder.name}
                                    className="group relative flex flex-col items-center p-6 bg-white/60 backdrop-blur-md rounded-2xl border border-white/50 shadow-lg hover:shadow-xl hover:bg-white/80 transition-all duration-300 transform hover:-translate-y-2"
                                >
                                    <div className="relative mb-6">
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 to-emerald-500 blur opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
                                        <img
                                            src={founder.image}
                                            alt={founder.name}
                                            className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute bottom-2 right-2 flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-sm text-emerald-600">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-4 h-4"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 12c0 5.056 3.125 9.272 7.525 11.08a.75.75 0 00.56.075 3.004 3.004 0 012.33 0 .75.75 0 00.56-.075C17.625 21.272 20.75 17.056 20.75 12a12.74 12.74 0 00-1.635-6.235.75.75 0 00-.722-.515 11.209 11.209 0 01-7.877-3.08zM12 4.672a9.71 9.71 0 005.156 2.37l.013.003L12 20.364 6.83 7.045l.014-.003A9.71 9.71 0 0012 4.672z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-emerald-700 transition-colors">
                                        {founder.name}
                                    </h4>
                                    <p className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mb-3">
                                        {founder.role}
                                    </p>
                                    <p className="text-center text-sm text-slate-500 leading-relaxed px-2">
                                        Expert in sustainable ecosystems with over 15 years of experience in the field.
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Founders;
