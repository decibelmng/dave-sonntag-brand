import { motion } from "framer-motion";
import { Linkedin, Mail, Globe, Phone, User } from "lucide-react";
import textureBg from "@/assets/texture-bg.jpg";

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
      {/* Texture background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(${textureBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark overlay for depth */}
      <div className="absolute inset-0 bg-background/60" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center relative z-10"
      >
        {/* Headshot placeholder */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-40 h-40 mx-auto mb-12 rounded-full flex items-center justify-center bg-card"
          style={{
            border: "1px solid hsl(0 0% 100% / 0.06)",
            boxShadow: "var(--glow-gold)",
          }}
        >
          <div className="text-center">
            <User size={36} className="mx-auto text-muted-foreground/50 mb-1" strokeWidth={1} />
            <span className="text-[9px] text-muted-foreground/40 font-body tracking-[0.15em] uppercase">Photo</span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="font-heading text-3xl md:text-5xl lg:text-6xl font-extralight tracking-[0.15em] text-foreground mb-6 uppercase"
        >
          David Sonntag
        </motion.h1>

        {/* Gold line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-12 h-px bg-primary mx-auto mb-7 origin-center"
        />

        {/* Title */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="font-body text-[11px] md:text-xs font-light tracking-[0.3em] uppercase text-muted-foreground mb-3"
        >
          Event Producer · Entrepreneur · Builder
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="font-body text-[10px] tracking-[0.25em] uppercase text-muted-foreground/40 mb-14"
        >
          Founder —{" "}
          <a
            href="https://www.decibelevents.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary/60 hover:text-primary transition-colors duration-500"
          >
            Decibel Events
          </a>
        </motion.p>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex items-center justify-center gap-10"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={link.label}
              className="text-muted-foreground/30 hover:text-primary transition-colors duration-500"
            >
              <link.icon size={16} strokeWidth={1} />
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
