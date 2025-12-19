import Navbar from "../components/layout/Navbar";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import News from "../sections/News";
import About from "../sections/About";
import Partners from "../sections/Partners";
import Founders from "../sections/Founders";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <News />
        <Partners />
        <Founders />
      </main>
      <Footer />
    </div>
  );
};

export default Home;


