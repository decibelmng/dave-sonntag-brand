import { motion } from "framer-motion";

const MentorshipSection = () => {
  return (
    <section id="mentorship" className="py-24 md:py-36 px-6 bg-card">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Mentorship</h2>
          <div className="w-12 h-0.5 bg-primary mb-10" />

          <div className="space-y-6 text-base md:text-lg font-light leading-relaxed text-muted-foreground">
            <p>
              Dave is passionate about mentoring the next generation of event producers and entrepreneurs. He believes in sharing hard-won knowledge to help others avoid common pitfalls and accelerate their growth.
            </p>
            <p>
              Whether you're launching an event production company, navigating government contracting for the first time, or scaling an existing business, Dave offers practical guidance rooted in real experience — not theory.
            </p>
          </div>

          <div className="mt-10">
            <a
              href="#contact"
              className="inline-block px-8 py-3 border border-primary text-primary font-semibold text-sm tracking-wide uppercase hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              Connect for Mentorship
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MentorshipSection;
