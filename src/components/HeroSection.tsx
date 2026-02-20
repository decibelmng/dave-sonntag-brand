import { motion } from "framer-motion";
import { Linkedin, Mail, Globe, Phone, User } from "lucide-react";

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/davesonntag/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:dave@decibelevents.com",
    label: "Email",
  },
  {
    icon: Globe,
    href: "https://www.decibelevents.com",
    label: "Decibel Events",
  },
  {
    icon: Phone,
    href: "tel:+1XXXXXXXXXX",
    label: "Phone",
  },
];

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Subtle geometric background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--navy)) 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center relative z-10"
      >
        {/* Headshot placeholder */}
        <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-secondary flex items-center justify-center border-2 border-border">
          <div className="text-center">
            <User size={48} className="mx-auto text-muted-foreground mb-1" />
            <span className="text-xs text-muted-foreground font-body">Photo Coming Soon</span>
          </div>
        </div>

        {/* Name */}
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide text-foreground mb-4">
          DAVID SONNTAG
        </h1>

        {/* Gold accent rule */}
        <div className="w-16 h-[2px] bg-accent mx-auto mb-6" />

        {/* Positioning statement */}
        <p className="font-body text-base md:text-lg text-muted-foreground tracking-wide mb-2 max-w-xl mx-auto">
          Event Production Executive · Entrepreneur · Government & Corporate Events
        </p>
        <p className="font-body text-sm text-muted-foreground mb-10">
          Founder & Principal — <a href="https://www.decibelevents.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">Decibel Events</a>
        </p>

        {/* Social links */}
        <div className="flex items-center justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={link.label}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <link.icon size={20} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
