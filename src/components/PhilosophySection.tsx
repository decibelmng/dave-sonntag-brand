import { motion } from "framer-motion";

const PhilosophySection = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-secondary/50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <blockquote className="font-heading text-xl md:text-2xl italic text-foreground leading-relaxed mb-6">
            "We believe every event is an opportunity to raise the standard. Our commitment to Kaizen — continuous improvement — means we treat every project, every debrief, and every lesson learned as fuel for delivering better results next time."
          </blockquote>
          <div className="w-10 h-[2px] bg-accent mx-auto mb-4" />
          <p className="font-body text-sm text-muted-foreground">
            Dave Sonntag, Founder, Decibel Events
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;
