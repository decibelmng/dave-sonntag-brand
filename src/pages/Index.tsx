import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsBar from "@/components/StatsBar";
import CredentialsSection from "@/components/CredentialsSection";
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
      <CredentialsSection />
      <MediaSection />
      <MentorshipSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
