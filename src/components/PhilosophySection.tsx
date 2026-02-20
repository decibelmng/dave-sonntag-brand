import { motion } from "framer-motion";

const PhilosophySection = () => {
  return (
    <section className="py-28 md:py-36 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <blockquote className="font-heading text-lg md:text-2xl italic text-foreground/90 leading-relaxed mb-8">
            "We believe every event is an opportunity to raise the standard. Our commitment to Kaizen — continuous improvement — means we treat every project, every debrief, and every lesson learned as fuel for delivering better results next time."
          </blockquote>
          <div className="w-8 h-px bg-primary/40 mx-auto mb-4" />
          <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
            Dave Sonntag · Founder, Decibel Events
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;
