import { useEffect, useRef } from "react";
import Container from "../components/layout/Container";
import SectionHeader from "../components/ui/SectionHeader";
import ildpImg from "../images/Integrated Rural Land-Use and Development Plan (ILDP) Programme.png";
import energyImg from "../images/Sustainable energy, Carbon and Urban resilience Program.png";
import climateImg from "../images/Climate Resilience Partnership Programme.png";
import govImg from "../images/The Environmental Governance & Education Program.png";
import socialImg from "../images/Social Ecological Resilience Partnership Programme.png";

const services = [
  {
    title: "Integrated Rural Land-Use and Development Plan (ILDP) Programme",
    description:
      "Restoring degraded ecosystems through tree planting and biodiversity protection.",
    image: ildpImg,
  },
  {
    title: "Sustainable energy, Carbon and Urban resilience Program",
    description:
      "Empowering communities with climate-smart agriculture and renewable energy.",
    image: energyImg,
  },
  {
    title: "Climate Resilience Partnership Programme",
    description:
      "Building sustainable water infrastructure and promoting conservation.",
    image: climateImg,
  },
  {
    title: "The Environmental Governance & Education Program",
    description:
      "Training the next generation of leaders through workshops and outreach.",
    image: govImg,
  },
  {
    title: "Social Ecological Resilience Partnership Programme",
    description:
      "Working with regional bodies to strengthen environmental policies and regional initiatives.",
    image: socialImg,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="section relative border-b-2 border-emerald-100/50 overflow-hidden bg-gradient-to-b from-emerald-50 to-emerald-100"
    >
      <Container className="relative z-10 space-y-12 py-24 max-w-[1700px]">
        <SectionHeader
          eyebrow="Our Programs"
          title="Making a Lasting Environmental Impact"
          description="We work across multiple initiatives to protect our environment and build sustainable communities throughout the Horn of Africa."
          className="text-emerald-900 [&>p]:text-emerald-700 [&>h2]:text-emerald-900"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative h-[450px] overflow-hidden rounded-2xl border-2 border-white/20 bg-white/5 backdrop-blur-sm shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-900/20"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url("${service.image}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-emerald-900/40 to-transparent opacity-80" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform transition-all duration-300">
                  <div className="mb-3 h-0.5 w-8 rounded-full bg-yellow-400" />
                  <h3 className="mb-2 text-xl font-bold text-white group-hover:text-yellow-300 transition-colors leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-stone-200 opacity-90 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;



