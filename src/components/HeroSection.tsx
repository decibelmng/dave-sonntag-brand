import { motion } from "framer-motion";
import { Linkedin, Mail, Globe, Phone, User } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/davesonntag/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:dave@decibelevents.com", label: "Email" },
  { icon: Globe, href: "https://www.decibelevents.com", label: "Decibel Events" },
  { icon: Phone, href: "tel:+1XXXXXXXXXX", label: "Phone" },
];

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 40%, hsl(44 52% 55% / 0.04) 0%, transparent 70%)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-center relative z-10"
      >
        {/* Headshot placeholder */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-44 h-44 mx-auto mb-10 rounded-full flex items-center justify-center"
          style={{
            background: "var(--gradient-card)",
            border: "1px solid hsl(0 0% 100% / 0.08)",
            boxShadow: "var(--glow-gold)",
          }}
        >
          <div className="text-center">
            <User size={40} className="mx-auto text-muted-foreground mb-1" strokeWidth={1} />
            <span className="text-[10px] text-muted-foreground font-body tracking-wider uppercase">Photo</span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-medium tracking-[0.08em] text-foreground mb-6"
        >
          DAVID SONNTAG
        </motion.h1>

        {/* Gold line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="w-20 h-px bg-primary mx-auto mb-7 origin-center"
        />

        {/* Title */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-body text-xs md:text-sm tracking-[0.25em] uppercase text-muted-foreground mb-3"
        >
          Global Event Production Executive · Entrepreneur
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground/60 mb-12"
        >
          Founder & Principal —{" "}
          <a
            href="https://www.decibelevents.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary/80 hover:text-primary transition-colors duration-300"
          >
            Decibel Events
          </a>
        </motion.p>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex items-center justify-center gap-8"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={link.label}
              className="text-muted-foreground/50 hover:text-primary transition-colors duration-300"
            >
              <link.icon size={18} strokeWidth={1.2} />
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
