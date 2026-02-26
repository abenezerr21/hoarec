import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import { MapPin, ArrowRight, Clock, Phone } from 'lucide-react';
import visit1 from '../images/visit1.jpg';
import visit2 from '../images/visit2.jpg';
import visit3 from '../images/visit3.jpg';
import visit4 from '../images/visit4.jpg';

const VisitHeadquarters = () => {
    return (
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-emerald-950 via-green-900 to-blue-950">
            {/* Background Pattern - Subtle Map/Grid */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="white" strokeWidth="1" fill="none" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                </svg>
            </div>

            {/* Glow Effects */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-yellow-500/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none" />

            <Container className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Image Area */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Image Grid Collage */}
                        <div className="grid grid-cols-2 gap-4 relative z-10">
                            <div className="space-y-4 pt-8">
                                <div className="rounded-2xl overflow-hidden shadow-lg h-48 sm:h-64 border border-white/10 group relative">
                                    <img src={visit1} alt="HQ Exterior" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <span className="text-white text-sm font-medium">Main Building</span>
                                    </div>
                                </div>
                                <div className="rounded-2xl overflow-hidden shadow-lg h-32 sm:h-40 border border-white/10 group relative">
                                    <img src={visit2} alt="Interior View" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="rounded-2xl overflow-hidden shadow-lg h-32 sm:h-40 border border-white/10 group relative">
                                    <img src={visit3} alt="Office Space" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="rounded-2xl overflow-hidden shadow-lg h-48 sm:h-64 border border-white/10 group relative">
                                    <img src={visit4} alt="Meeting Area" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <span className="text-white text-sm font-medium">Conference Center</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-full shadow-2xl z-20 animate-pulse">
                            <div className="bg-emerald-500 rounded-full p-3 text-white">
                                <MapPin className="w-6 h-6" />
                            </div>
                        </div>

                        {/* Decorative detailed elements around image */}
                        <div className="absolute -top-12 -left-12 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl -z-10" />
                        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl -z-10" />
                    </motion.div>

                    {/* Right Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-bold uppercase tracking-wider mb-4">
                                <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                                Open for Visitors
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                                Visit Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-emerald-400">Headquarters</span>
                            </h2>
                            <p className="text-lg text-emerald-100/80 leading-relaxed">
                                We welcome partners, clients, and visitors to experience our facilities and operations in person. Our regional hub is designed to foster collaboration and transparency.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition-colors duration-300">
                                <Clock className="w-6 h-6 text-yellow-400 mb-3" />
                                <h4 className="text-white font-semibold mb-1">Open Hours</h4>
                                <p className="text-sm text-emerald-200/60">Mon - Fri: 8:00 AM - 6:00 PM</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition-colors duration-300">
                                <Phone className="w-6 h-6 text-yellow-400 mb-3" />
                                <h4 className="text-white font-semibold mb-1">Contact Us</h4>
                                <p className="text-sm text-emerald-200/60">+251 11 123 4567</p>
                            </div>
                        </div>

                        <p className="text-sm text-emerald-200/60 italic border-l-2 border-yellow-500/50 pl-4">
                            "A space where innovation meets implementation. Come see how we are shaping the future of regional trade."
                        </p>

                        <button className="group relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-emerald-950 font-bold rounded-lg overflow-hidden shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:scale-105 transition-all duration-300">
                            <span className="relative z-10 flex items-center gap-2">
                                Plan Your Visit
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </button>
                    </motion.div>

                </div>
            </Container>
        </section >
    );
};

export default VisitHeadquarters;
