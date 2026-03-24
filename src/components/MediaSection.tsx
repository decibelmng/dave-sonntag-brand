import { motion } from "framer-motion";
import { Mic } from "lucide-react";
import SectionHeadingAccent from "./SectionHeadingAccent";
import mediaPortrait from "@/assets/media-portrait.jpg";

const topics = [
  "Producing events at scale for federal agencies and Fortune 500",
  "The operational reality of presidential campaign advance",
  "What corporate event buyers look for in a production partner",
  "AI and technology's impact on event production and scenic design",
  "Building a boutique firm in a large-agency market",
  "15 years producing the Library of Congress National Book Festival",
];

const MediaSection = () => {
  return (
    <section id="media" className="py-24 md:py-36 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          {/* Left — 35% */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:w-[35%] flex-shrink-0"
          >
            <div className="relative">
              <img
                src={mediaPortrait}
                alt="David Sonntag in suit with production headset, available for podcast and speaking appearances"
                className="w-full md:max-w-[300px] rounded-lg object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 md:right-auto md:w-[300px] h-1 bg-primary rounded-b-lg" />
            </div>
          </motion.div>

          {/* Right — 65% */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-[65%]"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Media & Speaking</h2>
            <SectionHeadingAccent />
            <div className="mb-6" />

            <p className="text-base leading-[1.7] text-muted-foreground mb-10">
              David is available for podcast appearances, conference panels, keynote presentations, and media interviews on topics at the intersection of event production, government contracting, and experiential marketing.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {topics.map((topic, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-center gap-3 p-4 rounded-lg h-full"
                  style={{ backgroundColor: "hsl(0 0% 15%)" }}
                >
                  <Mic size={16} className="text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-base text-foreground leading-snug">{topic}</span>
                </motion.div>
              ))}
            </div>

            <div className="text-center md:text-left">
              <a
                href="#contact"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold text-sm tracking-wide uppercase hover:bg-primary/85 transition-colors duration-300"
              >
                Book David for Your Podcast or Event
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
