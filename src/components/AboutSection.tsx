import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-3">About</h2>
          <div className="w-10 h-[2px] bg-accent mb-10" />

          <div className="space-y-5 font-body text-base md:text-lg leading-relaxed text-muted-foreground">
            <p>
              Dave Sonntag is the founder and principal of Decibel Events, a Washington, D.C.-based event production company specializing in government contracts, large-scale trade shows, corporate conferences, and high-profile political events.
            </p>
            <p>
              For over a decade, Dave has led the planning, production, and execution of events for some of the nation's most recognized institutions — from the Library of Congress National Book Festival and the U.S. Small Business Administration's National Small Business Week to CPAC (Conservative Political Action Conference) and Fortune 500 corporate programs including T. Rowe Price.
            </p>
            <p>
              His approach blends operational precision with genuine partnership. Whether navigating federal procurement requirements, managing complex multi-vendor productions, or building long-term client relationships, Dave brings a hands-on leadership style grounded in accountability, continuous improvement, and an unwavering commitment to flawless execution.
            </p>
            <p>
              Dave operates Decibel Events using the Entrepreneurial Operating System (EOS/Traction), bringing structure and scalability to a business built on trust, expertise, and results.
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
