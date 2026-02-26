import Navbar from "../components/layout/Navbar";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import News from "../sections/News";
import About from "../sections/About";
import Partners from "../sections/Partners";
import ImpactNumbers from "../sections/ImpactNumbers";

import VisitHeadquarters from "../sections/VisitHeadquarters";
import MeetingRoomRental from "../sections/MeetingRoomRental";
import NetworkSection from "../sections/NetworkSection";
import Footer from "../components/layout/Footer";
import FloatingAnnouncement from "../components/ui/FloatingAnnouncement";


const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <ImpactNumbers />
        <Partners />
        <NetworkSection />

        <VisitHeadquarters />
        <News />
        <MeetingRoomRental />
      </main>
      <Footer />
      <FloatingAnnouncement />
    </div>
  );
};

export default Home;


