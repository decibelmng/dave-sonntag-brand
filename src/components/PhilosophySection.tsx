import { motion } from "framer-motion";

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="py-28 md:py-40 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-primary/15 to-transparent" />

      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <blockquote className="font-heading text-lg md:text-xl font-extralight text-foreground/85 leading-relaxed mb-10 tracking-wide">
            "Every event is an opportunity to raise the standard. Our commitment to Kaizen — continuous improvement — means we treat every project, every debrief, and every lesson learned as fuel for delivering better results next time."
          </blockquote>
          <div className="w-6 h-px bg-primary/30 mx-auto mb-4" />
          <p className="font-body text-[10px] font-light tracking-[0.3em] uppercase text-muted-foreground/40">
            Dave Sonntag
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;
