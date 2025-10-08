import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FirmSection from "@/components/FirmSection";
import ServicesSection from "@/components/ServicesSection";
import DealsSection from "@/components/DealsSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <FirmSection />
        <ServicesSection />
        <DealsSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
