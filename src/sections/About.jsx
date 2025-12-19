import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Sun, Trees, Waves, BookOpen } from "lucide-react";
import Container from "../components/layout/Container";
import SectionHeader from "../components/ui/SectionHeader";
import Button from "../components/ui/Button";

const images = [
  "/images/hero-bg.png",
  "/images/news-hero.png",
  "/images/hero-bg.png",
  "/images/news-hero.png"
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // existing image rotation logic
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const getCardStyle = (index) => {
    const offset = (index - activeIndex + images.length) % images.length;
    if (offset === 0) return "z-30 opacity-100 scale-100 translate-x-0 translate-y-0";
    if (offset === 1) return "z-20 opacity-90 scale-95 translate-x-4 translate-y-4";
    if (offset === 2) return "z-10 opacity-80 scale-90 translate-x-8 translate-y-8";
    return "z-0 opacity-0 scale-90 translate-x-8 translate-y-8";
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 bg-slate-50 overflow-hidden"
    >
      {/* --- Corner Decorative Elements (Scroll/View Animated) --- */}

      {/* Top Left: Solar/Energy */}
      <motion.div
        initial={{ opacity: 0, x: -50, y: -50 }}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="absolute top-0 left-0 p-8 hidden md:block pointer-events-none z-0"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-yellow-400 blur-2xl opacity-50 rounded-full"></div>
          <Sun className="w-24 h-24 text-yellow-500" strokeWidth={1.5} />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-dashed border-yellow-400/60 rounded-full w-32 h-32 -m-4"
          />
        </div>
      </motion.div>

      {/* Top Right: Conservation/Trees */}
      <motion.div
        initial={{ opacity: 0, x: 50, y: -50 }}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        className="absolute top-0 right-0 p-8 hidden md:block pointer-events-none z-0"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-emerald-400 blur-2xl opacity-50 rounded-full"></div>
          <Trees className="w-24 h-24 text-emerald-600" strokeWidth={1.5} />
        </div>
      </motion.div>

      {/* Bottom Left: Water */}
      <motion.div
        initial={{ opacity: 0, x: -50, y: 50 }}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        className="absolute bottom-0 left-0 p-8 hidden md:block pointer-events-none z-0"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-blue-400 blur-2xl opacity-50 rounded-full"></div>
          <Waves className="w-24 h-24 text-blue-600" strokeWidth={1.5} />
        </div>
      </motion.div>

      {/* Bottom Right: Education */}
      <motion.div
        initial={{ opacity: 0, x: 50, y: 50 }}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        className="absolute bottom-0 right-0 p-8 hidden md:block pointer-events-none z-0"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-indigo-400 blur-2xl opacity-50 rounded-full"></div>
          <BookOpen className="w-24 h-24 text-indigo-600" strokeWidth={1.5} />
        </div>
      </motion.div>


      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <SectionHeader
              eyebrow="Who We Are"
              title="Connecting the Horn for Sustainable Development"
              description="HOAREC&N is a network of environmental organizations and academic institutions dedicated to promoting environmental conservation and sustainable development in the Horn of Africa. We believe in a future where nature and communities thrive together."
              className="text-left items-start"
            />

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Founded on the principles of partnership and innovation, we work across borders to address critical challenges such as climate change, biodiversity loss, and food security.
              </p>
              <p>
                Our approach combines scientific research with community-based action, ensuring that our solutions are both effective and sustainable for the long term.
              </p>
            </div>

            <div className="pt-4">
              <Button variant="primary" className="shadow-xl shadow-emerald-900/10">
                Learn More About Us
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Image Stack Loop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[450px] w-full max-w-lg mx-auto lg:max-w-none flex items-center justify-center"
          >
            <div className="relative w-full h-full max-w-md aspect-[4/5]">
              {/* Fixed decorative frame behind stack */}
              <div className="absolute inset-0 bg-blue-100/50 rounded-3xl -rotate-6 scale-95 transform"></div>
              <div className="absolute inset-0 bg-emerald-100/50 rounded-3xl rotate-6 scale-95 transform"></div>

              {images.map((src, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transition-all duration-700 ease-in-out ${getCardStyle(index)}`}
                >
                  <img
                    src={src}
                    alt={`About Hoarec ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              ))}

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 z-40 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/50 max-w-[180px] animate-bounce-slow">
                <div className="flex items-center gap-2 mb-1">
                  <div className="bg-emerald-100 p-1.5 rounded-full text-emerald-600">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <span className="font-bold text-slate-800">History</span>
                </div>
                <p className="text-slate-600 text-xs leading-snug">Over 15 years of restoring ecosystems.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;


