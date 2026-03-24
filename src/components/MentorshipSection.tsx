import { motion } from "framer-motion";
import SectionHeadingAccent from "./SectionHeadingAccent";
import mentorshipPhoto from "@/assets/mentorship-photo.jpg";

const MentorshipSection = () => {
  return (
    <section id="mentorship" className="py-24 md:py-36 px-6" style={{ backgroundColor: "hsl(0 0% 7%)" }}>
      <div className="max-w-[700px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={mentorshipPhoto}
            alt="David Sonntag, event production mentor and CEO of Decibel Events"
            className="w-[150px] h-[150px] md:w-[180px] md:h-[180px] rounded-full object-cover mx-auto mb-8"
            style={{ objectPosition: "center 20%", boxShadow: "0 0 0 2px #ED1C24, 0 0 15px rgba(237,28,36,0.15)" }}
            loading="lazy"
          />

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Mentorship</h2>
          <SectionHeadingAccent />
          <div className="mb-8" />

          <p className="text-base leading-[1.7] text-muted-foreground mb-10">
            I got my start in events managing a trade show booth for the National Park Foundation. Twenty-three years later, I'm still learning. If you're early in your event production career and looking for guidance — on building a firm, navigating government contracting, or just figuring out the industry — I'm happy to make time for a conversation.
          </p>

          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold text-sm tracking-wide uppercase hover:bg-primary/85 transition-colors duration-300"
          >
            Start a Conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MentorshipSection;
