import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-36 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">About</h2>
          <div className="w-12 h-0.5 bg-primary mb-10" />

          <div className="space-y-6 text-base md:text-lg font-light leading-relaxed text-muted-foreground">
            <p>
              Dave Sonntag is the founder and CEO of Decibel Events, a Washington, D.C.-based event production company specializing in government contracts, large-scale trade shows, corporate conferences, and high-profile political events.
            </p>
            <p>
              For over two decades, Dave has led the planning, production, and execution of events for some of the nation's most recognized institutions — from the Library of Congress National Book Festival and the U.S. Small Business Administration's National Small Business Week to CPAC and Fortune 500 corporate programs including T. Rowe Price.
            </p>
            <p>
              His approach blends operational precision with genuine partnership. Whether navigating federal procurement requirements, managing complex multi-vendor productions, or building long-term client relationships, Dave brings a hands-on leadership style grounded in accountability, continuous improvement, and an unwavering commitment to flawless execution.
            </p>
            <p>
              Beyond the business, Dave is a husband and father who values family, loyalty, and building something that lasts.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
