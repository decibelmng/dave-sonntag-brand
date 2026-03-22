import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsBar from "@/components/StatsBar";
import ParallaxBreak from "@/components/ParallaxBreak";
import CredentialsSection from "@/components/CredentialsSection";
import ClientLogos from "@/components/ClientLogos";
import ParallaxBreak2 from "@/components/ParallaxBreak2";
import MediaSection from "@/components/MediaSection";
import MentorshipSection from "@/components/MentorshipSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsBar />
      <ParallaxBreak />
      <CredentialsSection />
      <ClientLogos />
      <ParallaxBreak2 />
      <MediaSection />
      <MentorshipSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
