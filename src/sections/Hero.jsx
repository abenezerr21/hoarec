import { useState, useEffect } from "react";
import Container from "../components/layout/Container";
import Button from "../components/ui/Button";

const slogans = [
  "Building a Sustainable Future",
  "Empowering Local Communities",
  "Conserving Nature's Beauty",
  "Innovating for Climate Action"
];

const Hero = () => {
  const [currentSlogan, setCurrentSlogan] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 2000); // Changing every 2 seconds for better readability
    return () => clearInterval(interval);
  }, [isPaused]);
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: 'url(/images/hero-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/85 via-green-800/75 to-blue-900/80" />

      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(234,179,8,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.2),transparent_50%)]" />

      <Container className="relative z-10 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content - Slogans and CTAs */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-block">
              <p className="inline-flex items-center gap-2 rounded-full bg-yellow-400/20 backdrop-blur-sm border-2 border-yellow-400/50 px-6 py-3 text-sm font-bold uppercase tracking-wider text-yellow-300 shadow-lg shadow-yellow-500/30">
                <span className="animate-pulse">🌍</span>
                Protecting Our Planet Together
              </p>
            </div>

            {/* Main Headline */}
            {/* Rotating Slogans */}
            <h1 className="min-h-[280px] text-5xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl drop-shadow-2xl transition-all duration-300 flex flex-col justify-center">
              <span
                className="block cursor-pointer bg-gradient-to-r from-yellow-300 via-green-300 to-emerald-300 bg-clip-text text-transparent hover:scale-105 hover:brightness-125 transition-transform duration-300 pb-2"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {slogans[currentSlogan]}
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl mt-2 text-emerald-50 opacity-90">
                for the Horn of Africa
              </span>
            </h1>

            {/* Subheadline Removed */}

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-12">
              <button className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 px-8 py-4 text-lg font-bold text-emerald-900 shadow-2xl shadow-yellow-500/50 hover:shadow-yellow-400/70 transition-all duration-300 hover:scale-105">
                <span>💚 Donate Now</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>

              <button className="group inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300">
                <span>Learn Our Story</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t-2 border-white/20">
              <div className="text-center lg:text-left">
                <p className="text-4xl font-extrabold text-yellow-300 drop-shadow-lg">500K+</p>
                <p className="text-sm text-emerald-100 mt-1">Trees Planted</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-4xl font-extrabold text-yellow-300 drop-shadow-lg">15+</p>
                <p className="text-sm text-emerald-100 mt-1">Communities Served</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-4xl font-extrabold text-yellow-300 drop-shadow-lg">25K</p>
                <p className="text-sm text-emerald-100 mt-1">Tons CO₂ Offset</p>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] hidden lg:block perspective-1000">
            {/* Vision Card */}
            <div className="absolute top-8 left-4 w-80 group z-10 transition-all duration-500 hover:z-50">
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition duration-500" />
              <div className="relative rounded-2xl border-2 border-white/30 bg-white/95 backdrop-blur-sm p-8 shadow-2xl hover:shadow-yellow-400/30 transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                <div className="mb-4 flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="h-3 w-3 rounded-full bg-blue-500 animate-pulse delay-75" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400 animate-pulse delay-150" />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
                  👁️ Our Vision
                </p>
                <h3 className="text-lg font-bold text-stone-900 mb-3">
                  A Sustainable Horn of Africa
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  We envision a region where communities thrive in harmony with a restored and resilient natural environment, ensuring prosperity for generations to come.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="absolute top-24 left-48 w-80 group z-20 transition-all duration-500 hover:z-50">
              <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition duration-500" />
              <div className="relative rounded-2xl border-2 border-white/30 bg-gradient-to-br from-white to-emerald-50/80 backdrop-blur-sm p-8 shadow-2xl hover:shadow-green-400/30 transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-3">
                  🚀 Our Mission
                </p>
                <h3 className="text-lg font-bold text-stone-900 mb-3">
                  Empowering Change
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed">
                  To specific promote environmental conservation and sustainable development through action-oriented research, capacity building, and community partnership.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-stone-600">
                  <li className="flex items-center gap-2">✓ Biodiversity Protection</li>
                  <li className="flex items-center gap-2">✓ Climate Resilience</li>
                  <li className="flex items-center gap-2">✓ Community Livelihoods</li>
                </ul>
              </div>
            </div>

            {/* Values Card / Badge */}
            <div className="absolute bottom-10 right-10 group z-30 transition-all duration-500 hover:z-50">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition duration-500" />
              <div className="relative rounded-2xl border-2 border-white/40 bg-white/95 backdrop-blur-sm px-6 py-6 shadow-2xl hover:shadow-blue-400/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105">
                <div className="flex items-center gap-3 mb-2">
                  <span className="rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-3 py-1 text-xs font-bold text-white shadow-lg">
                    CORE VALUES
                  </span>
                </div>
                <div className="flex gap-4 text-2xl">
                  <span title="Integrity">🤝</span>
                  <span title="Innovation">💡</span>
                  <span title="Inclusivity">🤗</span>
                  <span title="Impact">🌟</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-xs text-white/70 mb-2 uppercase tracking-wider">Scroll to explore</p>
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-yellow-300 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
