import { motion } from "framer-motion";

const MediaSection = () => {
  return (
    <section id="media" className="py-24 md:py-36 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Media & Speaking</h2>
          <div className="w-12 h-0.5 bg-primary mb-10" />

          <div className="space-y-6 text-base md:text-lg font-light leading-relaxed text-muted-foreground">
            <p>
              Dave is available for speaking engagements, panel discussions, and media appearances on topics including large-scale event production, government contracting, entrepreneurship, and operational leadership.
            </p>
            <p>
              With 20+ years of experience producing events for federal agencies, Fortune 500 companies, and major political organizations, Dave brings real-world insights to every conversation.
            </p>
          </div>

          <div className="mt-10">
            <a
              href="#contact"
              className="inline-block px-8 py-3 border border-primary text-primary font-semibold text-sm tracking-wide uppercase hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              Booking Inquiries
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MediaSection;
