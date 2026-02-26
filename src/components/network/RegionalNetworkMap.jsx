import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RegionalNetworkMap = ({ countries = [] }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const ethiopia = countries.find(c => c.center) || countries[0];
    const neighbors = countries.filter(c => !c.center);

    // - Perfect Geometric Constants (Percentage-based)
    const RADIUS = 35; // 35% radius from center
    const TOTAL_NEIGHBORS = neighbors.length;
    const ANGLE_STEP = (2 * Math.PI) / TOTAL_NEIGHBORS;

    const getPosition = (index) => {
        const angle = index * ANGLE_STEP - Math.PI / 2;
        return {
            x: Math.cos(angle) * RADIUS,
            y: Math.sin(angle) * RADIUS,
        };
    };

    const Node = ({ country, x, y, isCenter, index }) => {
        // Size as percentage of container width
        const size = isCenter ? '18%' : '14%';

        return (
            <motion.div
                className="absolute"
                style={{
                    left: `${50 + x}%`,
                    top: `${50 + y}%`,
                    width: size,
                    height: size,
                    zIndex: isCenter ? 20 : 10,
                    x: "-50%",
                    y: "-50%",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
            >
                <div className="relative w-full h-full group">
                    <div
                        className="w-full h-full drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                        style={{
                            backgroundImage: `url(${country.mapUrl})`,
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        {isCenter && (
                            <div className="absolute inset-0 border-2 border-blue-500/20 rounded-full animate-pulse -z-10" />
                        )}
                    </div>

                    {/* Label - Absolute to prevent shifting the center point of the map icon */}
                    <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 font-bold text-[8px] md:text-[10px] uppercase tracking-wider px-2 py-1 rounded-sm border whitespace-nowrap ${isCenter
                            ? 'bg-blue-600 text-white border-blue-700 shadow-lg scale-110'
                            : 'bg-white text-gray-900 border-gray-200 shadow-sm'
                            }`}
                    >
                        {country.name}
                    </div>
                </div>
            </motion.div>
        );
    };

    const GridGuide = () => (
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '5% 5%' }} />
            <div className="absolute top-1/2 left-0 w-full h-px bg-gray-400" />
            <div className="absolute top-0 left-1/2 w-px h-full bg-gray-400" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] border border-dashed border-gray-400 rounded-full" />
        </div>
    );

    const ConnectionLines = () => {
        if (isMobile) return null;

        return (
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                viewBox="0 0 100 100"
            >
                {neighbors.map((country, index) => {
                    const pos = getPosition(index);
                    return (
                        <line
                            key={`line-${country.name}`}
                            x1="50"
                            y1="50"
                            x2={50 + pos.x}
                            y2={50 + pos.y}
                            stroke="#1B5E20"
                            strokeWidth="0.3"
                            vectorEffect="non-scaling-stroke"
                            className="drop-shadow-sm"
                        />
                    );
                })}
            </svg>
        );
    };

    if (isMobile) {
        return (
            <div className="flex flex-col items-center gap-12 py-10 px-4 max-w-md mx-auto">
                <div className="flex flex-col items-center">
                    <div
                        className="w-48 h-48 drop-shadow-xl"
                        style={{
                            backgroundImage: `url(${ethiopia.mapUrl})`,
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    />
                    <span className="mt-4 font-bold text-gray-900 border-b-2 border-green-700 pb-1 text-xl tracking-tight">{ethiopia.name}</span>
                </div>

                <div className="grid grid-cols-2 gap-10 w-full">
                    {neighbors.map((country, index) => (
                        <motion.div
                            key={country.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center"
                        >
                            <div
                                className="w-32 h-32 drop-shadow-md"
                                style={{
                                    backgroundImage: `url(${country.mapUrl})`,
                                    backgroundSize: 'contain',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            />
                            <span className="mt-3 text-xs text-gray-900 font-bold uppercase tracking-widest">{country.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="relative w-full max-w-[900px] mx-auto flex items-center justify-center bg-gray-50/20 py-20 px-4">
            {/* Force square aspect ratio for the entire map container */}
            <div className="relative w-full aspect-square max-h-[1000px]">
                <GridGuide />
                <ConnectionLines />

                {/* Center - Ethiopia at 50%, 50% mapping to 0,0 offset */}
                <Node country={ethiopia} x={0} y={0} isCenter={true} index={0} />

                {/* Outer Countries at Precise Radial Points */}
                {neighbors.map((country, index) => {
                    const pos = getPosition(index);
                    return (
                        <Node
                            key={country.name}
                            country={country}
                            x={pos.x}
                            y={pos.y}
                            isCenter={false}
                            index={index + 1}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default RegionalNetworkMap;
