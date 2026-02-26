import React from 'react';
import RegionalNetworkMap from '../components/network/RegionalNetworkMap';
import Container from '../components/layout/Container';

import ethiopiaMap from '../images/network/ethiopia.png';
import ugandaMap from '../images/network/uganda.png';
import kenyaMap from '../images/network/kenya.png';
import sudanMap from '../images/network/sudan.png';
import southSudanMap from '../images/network/southsudan.png';
import djiboutiMap from '../images/network/djibouti.png';
import eritreaMap from '../images/network/eritrea.png';
import somaliaMap from '../images/network/somalia.png';

const NetworkSection = () => {
    const countries = [
        { name: 'Ethiopia', mapUrl: ethiopiaMap, center: true },
        { name: 'Sudan', mapUrl: sudanMap },
        { name: 'Eritrea', mapUrl: eritreaMap },
        { name: 'Djibouti', mapUrl: djiboutiMap },
        { name: 'Somalia', mapUrl: somaliaMap },
        { name: 'Kenya', mapUrl: kenyaMap },
        { name: 'Uganda', mapUrl: ugandaMap },
        { name: 'South Sudan', mapUrl: southSudanMap },
    ];

    return (
        <section id="network" className="py-24 bg-gradient-to-br from-green-50 via-yellow-50 to-blue-50 overflow-hidden relative">
            {/* Abstract Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
                <div className="absolute top-[10%] left-[5%] w-64 h-64 border border-green-200/50 rounded-full animate-pulse" />
                <div className="absolute bottom-[20%] right-[10%] w-96 h-96 border border-blue-200/50 rounded-full" />
            </div>

            <Container>
                <div className="text-center mb-16 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Our Regional <span className="text-blue-600">Network</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Strategically headquartered in Ethiopia, we maintain strong connections and
                            operational coverage across the Horn of Africa and East Africa region.
                        </p>
                    </motion.div>
                </div>

                <div className="relative">
                    <RegionalNetworkMap countries={countries} />
                </div>
            </Container>
        </section>
    );
};

// Added motion import since it's used in the section
import { motion } from 'framer-motion';

export default NetworkSection;
