import { useState, useEffect } from "react";
import Container from "../components/layout/Container";
import SectionHeader from "../components/ui/SectionHeader";
import Button from "../components/ui/Button";

const images = [
  "/images/hero-bg.png",
  "/images/news-hero.png",
  "/images/hero-bg.png", // Reusing for demo loop
  "/images/news-hero.png"
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // Move backwards through the stack to create "Back to Front" flow
      setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const getCardStyle = (index) => {
    // Calculate position relative to active card
    const offset = (index - activeIndex + images.length) % images.length;

    // We only show 3 cards in the stack. offset 0 is front.
    // Logic: 0 -> Front. 1 -> Behind 1. 2 -> Behind 2.
    // Cards > 2 are hidden behind the stack?
    // User wants "Back picture come to front".
    // When activeIndex decrements:
    // Old Front (0) -> become Offset 1. (Moves Back/Right)
    // Old Back (2) -> becomes Offset 0. (Moves to Front) - BUT wrapped around!
    // Wait. If activeIndex decrements.
    // Index i. Offset = i - current.
    // Current 0. Index 2 offset = 2.
    // Current -1 (2). Index 2 offset = 0.
    // So visual transform: 2 -> 0. (Back -> Front). 

    if (offset === 0) {
      return "z-30 opacity-100 scale-100 translate-x-0 translate-y-0";
    } else if (offset === 1) {
      return "z-20 opacity-90 scale-95 translate-x-4 translate-y-4";
    } else if (offset === 2) {
      return "z-10 opacity-80 scale-90 translate-x-8 translate-y-8";
    } else {
      // Everything else hides behind the last one
      return "z-0 opacity-0 scale-90 translate-x-8 translate-y-8";
    }
  };

  return (
    <section id="about" className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Text */}
          <div className="space-y-8">
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
          </div>

          {/* Right Column: Image Stack Loop */}
          <div className="relative h-[450px] w-full max-w-lg mx-auto lg:max-w-none flex items-center justify-center">

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
                  {/* Overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                  {/* Optional: Text on card? */}
                  {/* <div className="absolute bottom-6 left-6 right-6">
                      <p className="text-white font-bold text-lg drop-shadow-md">Impact Story {index + 1}</p>
                  </div> */}
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
          </div>

        </div>
      </Container>
    </section>
  );
};

export default About;


