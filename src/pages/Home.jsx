import HeroSection from "@/components/solar-gamer/HeroSection";
import ComponentsSection from "@/components/solar-gamer/ComponentsSection";
import CalculatorSection from "@/components/solar-gamer/CalculatorSection";
import Navbar from "@/components/solar-gamer/Navbar";
import Footer from "@/components/solar-gamer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ComponentsSection />
      <CalculatorSection />
      <Footer />
    </div>
  );
}
