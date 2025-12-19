import { useEffect, useRef } from "react";
import Container from "../components/layout/Container";
import SectionHeader from "../components/ui/SectionHeader";

const services = [
  {
    title: "Reforestation & Conservation",
    description:
      "Restoring degraded ecosystems through tree planting, soil conservation, and biodiversity protection across the Horn of Africa.",
    image: "/images/hero-bg.png",
  },
  {
    title: "Climate Action",
    description:
      "Empowering communities with climate-smart agriculture, renewable energy solutions, and carbon offset programs.",
    image: "/images/news-hero.png",
  },
  {
    title: "Clean Water Access",
    description:
      "Building sustainable water infrastructure and promoting water conservation practices in rural communities.",
    image: "/images/hero-bg.png",
  },
  {
    title: "Environmental Education",
    description:
      "Training the next generation of environmental leaders through workshops, school programs, and community outreach.",
    image: "/images/news-hero.png",
  },
];

const Services = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let leaves = [];
    let mouse = { x: undefined, y: undefined };

    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Mouse interaction
    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", () => {
      mouse.x = undefined;
      mouse.y = undefined;
    });

    // Leaf Class
    class Leaf {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height; // Start above
        this.size = Math.random() * 8 + 5; // Size between 5 and 13
        this.speedX = Math.random() * 1 - 0.5; // Drift left/right
        this.speedY = Math.random() * 1 + 0.5; // Fall down
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 2 - 1;
        this.color = `rgba(${Math.floor(Math.random() * 50 + 34)}, ${Math.floor(
          Math.random() * 100 + 139
        )}, ${Math.floor(Math.random() * 50 + 34)}, ${Math.random() * 0.4 + 0.4
          })`; // Varied greens
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX + Math.sin(this.y / 50); // Sway motion
        this.rotation += this.rotationSpeed;

        // Mouse interaction (repel)
        if (mouse.x !== undefined && mouse.y !== undefined) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const maxDistance = 150;
          const force = (maxDistance - distance) / maxDistance;

          if (distance < maxDistance) {
            this.x += forceDirectionX * force * 5;
            this.y += forceDirectionY * force * 5;
          }
        }

        // Reset if off bottom screen
        if (this.y > canvas.height + 10) {
          this.y = -10;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.fillStyle = this.color;
        ctx.beginPath();
        // Draw a simple leaf shape
        ctx.ellipse(0, 0, this.size, this.size / 2, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Initialize leaves
    const init = () => {
      leaves = [];
      const numberOfLeaves = 40;
      for (let i = 0; i < numberOfLeaves; i++) {
        leaves.push(new Leaf());
        // Scatter strictly initially
        leaves[i].y = Math.random() * canvas.height;
      }
    };
    init();

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      leaves.forEach((leaf) => {
        leaf.update();
        leaf.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="services"
      className="section relative border-b-2 border-emerald-100/50 overflow-hidden bg-gradient-to-b from-emerald-50 to-emerald-100"
    >
      {/* Canvas Overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-auto opacity-30"
      />

      <Container className="relative z-10 space-y-12 py-20">
        <SectionHeader
          eyebrow="Our Programs"
          title="Making a Lasting Environmental Impact"
          description="We work across multiple initiatives to protect our environment, combat climate change, and build sustainable communities throughout the Horn of Africa."
          className="text-emerald-900 [&>p]:text-emerald-700 [&>h2]:text-emerald-900"
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative h-80 overflow-hidden rounded-3xl border-2 border-white/20 bg-white/5 backdrop-blur-sm shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/50"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Gradient Overlay - Always visible but darkens on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-70" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform transition-transform duration-300 group-hover:translate-y-0 translate-y-2">
                  <div className="mb-4 h-1 w-12 rounded-full bg-yellow-400" />
                  <h3 className="mb-3 text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-base text-stone-200 opacity-90 leading-relaxed">
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



