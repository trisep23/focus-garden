import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";

function Landing() {
  return (
    <div className="min-h-screen bg-[#F8FFF8]">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default Landing;