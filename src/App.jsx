import { useState } from "react";
import useDarkMode from "./hooks/useDarkMode";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Features from "./components/Features";
import Product from "./components/Product";
import HowItWorks from "./components/HowItWorks";
import Stats from "./components/Stats";
import Solutions from "./components/Solutions";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import DemoModal from "./components/DemoModal";

export default function App() {
  const [isDark, setIsDark] = useDarkMode();
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <Product />
        <HowItWorks />
        <Stats />
        <Solutions />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA onOpenDemo={() => setDemoOpen(true)} />
      </main>
      <Footer />
      <BackToTop />
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
}
