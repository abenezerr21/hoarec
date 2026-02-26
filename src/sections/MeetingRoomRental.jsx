import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import { Monitor, Users, Calendar, ArrowRight } from 'lucide-react';
import rental1 from '../images/rental1.jpg';

const features = [
    {
        icon: <Monitor className="w-6 h-6 text-blue-400" />,
        title: "Modern Equipment",
        description: "High-speed Wi-Fi, 4K projectors, and premium conference call systems."
    },
    {
        icon: <Users className="w-6 h-6 text-emerald-400" />,
        title: "Comfortable Capacity",
        description: "Spacious layout seating up to 20 people with ergonomic furniture."
    },
    {
        icon: <Calendar className="w-6 h-6 text-yellow-400" />,
        title: "Flexible Booking",
        description: "Hourly and daily rates available with easy online reservation."
    }
];

const MeetingRoomRental = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-emerald-500/5 to-transparent rounded-bl-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-blue-500/5 to-transparent rounded-tr-full pointer-events-none" />

            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
                    >
                        Rent Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">Meeting Rooms</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-600 leading-relaxed"
                    >
                        Fully equipped, professional meeting spaces available for business sessions, workshops, and executive discussions. Elevate your meetings in a premium environment.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                            <div className="aspect-[4/3] bg-slate-200">
                                <img
                                    src={rental1}
                                    alt="Premium Meeting Room"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60" />

                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="text-sm font-medium uppercase tracking-wider mb-1 text-emerald-300">Executive Suite</p>
                                <h3 className="text-xl font-bold">Main Conference Hall</h3>
                            </div>
                        </div>

                        {/* Decorative Square */}
                        <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-emerald-500/20 rounded-2xl" />
                    </motion.div>

                    {/* Features Side */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.2 }}
                                    className="group p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-emerald-500/30 transition-all duration-300 flex items-start gap-4"
                                >
                                    <div className="p-3 bg-slate-50 rounded-lg group-hover:bg-white border border-slate-100 group-hover:border-emerald-500/20 transition-colors">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">{feature.title}</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="pt-4"
                        >
                            <button className="group px-8 py-4 bg-slate-900 text-white font-bold rounded-lg shadow-xl hover:shadow-2xl hover:bg-slate-800 transition-all duration-300 flex items-center gap-3">
                                Request Booking
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-emerald-400" />
                            </button>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default MeetingRoomRental;
