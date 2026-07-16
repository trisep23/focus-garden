import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HowItWorks from "../components/landing/HowItWorks";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import PlantEvolution from "../components/landing/PlantEvolution";

function Landing() {
  return (
    <div className="min-h-screen bg-[#F8FFF8]">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <PlantEvolution />
      <Footer />
    </div>
  );
}

export default Landing;