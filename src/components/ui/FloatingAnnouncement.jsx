import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Megaphone, X, Calendar, ArrowRight } from "lucide-react";

const announcements = [
    {
        id: 1,
        title: "Regional Climate Summit 2026",
        date: "March 15, 2026",
        link: "#",
    },
    {
        id: 2,
        title: "New Reforestation Grant Application Open",
        date: "March 01, 2026",
        link: "#",
    },
    {
        id: 3,
        title: "Webinar: Sustainable Agriculture Practices",
        date: "February 28, 2026",
        link: "#",
    },
    {
        id: 4,
        title: "Annual HoAREC Network Meeting",
        date: "April 10, 2026",
        link: "#",
    }
];

const FloatingAnnouncement = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <>
            <div className="fixed bottom-6 right-6 z-50">
                <motion.button
                    onClick={() => setIsOpen(true)}
                    className="bg-emerald-600 shadow-lg flex items-center justify-center rounded-full w-14 h-14 hover:shadow-emerald-500/50 hover:bg-emerald-500 transition-all focus:outline-none focus:ring-4 focus:ring-emerald-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Open Announcements"
                    aria-expanded={isOpen}
                >
                    <Megaphone className="text-white w-6 h-6" />
                </motion.button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm cursor-pointer"
                            aria-hidden="true"
                        />

                        {/* Sidebar */}
                        <motion.div
                            initial={{ x: "100%", opacity: 0.5 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "100%", opacity: 0.5 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 w-full max-w-sm h-full bg-white shadow-2xl z-[70] flex flex-col"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="announcement-title"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-emerald-100 bg-emerald-50">
                                <h2 id="announcement-title" className="text-xl font-bold text-gray-800 flex items-center gap-2">
                                    <Megaphone className="text-emerald-600 w-5 h-5" />
                                    Announcements & Events
                                </h2>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 text-gray-500 hover:text-gray-800 hover:bg-emerald-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    aria-label="Close Announcements"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Content List */}
                            <div className="flex-1 overflow-y-auto p-6">
                                <ul className="space-y-4">
                                    {announcements.map((item, index) => (
                                        <motion.li
                                            key={item.id}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="group"
                                        >
                                            <a
                                                href={item.link}
                                                className="block p-4 rounded-xl border border-gray-100 bg-white hover:border-emerald-200 hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                            >
                                                <div className="flex items-center text-xs text-emerald-600 font-medium mb-2 uppercase tracking-wide">
                                                    <Calendar className="w-3 h-3 mr-1" />
                                                    {item.date}
                                                </div>
                                                <h3 className="font-semibold text-gray-800 group-hover:text-emerald-700 transition-colors mb-2 leading-snug">
                                                    {item.title}
                                                </h3>
                                                <div className="flex items-center text-sm text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 transform duration-300">
                                                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                                                </div>
                                            </a>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            {/* Footer */}
                            <div className="p-6 border-t border-gray-100 bg-gray-50">
                                <a
                                    href="#"
                                    className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg shadow transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-emerald-300"
                                >
                                    View All Events
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence >
        </>
    );
};

export default FloatingAnnouncement;
