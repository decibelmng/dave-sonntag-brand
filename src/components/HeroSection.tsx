import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Full background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content — left aligned */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-4"
          >
            DAVID SONNTAG
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl font-light text-foreground/90 mb-4"
          >
            CEO & Founder, Decibel Events
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-2xl italic font-light text-foreground/90 mb-4"
          >
            20+ years producing events that can't fail.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="text-lg text-muted-foreground mb-10"
          >
            Federal agencies. Fortune 500. From the National Mall to the boardroom.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://decibelevents.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold text-sm tracking-wide uppercase hover:bg-primary/85 transition-colors duration-300"
            >
              Work With Decibel Events
            </a>
            <a
              href="#contact"
              className="inline-block px-8 py-3 border border-foreground text-foreground font-semibold text-sm tracking-wide uppercase hover:bg-foreground hover:text-background transition-colors duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll-down chevron */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#about" aria-label="Scroll down">
          <ChevronDown
            size={28}
            strokeWidth={1.5}
            className="text-foreground/50 animate-bounce-slow"
          />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
