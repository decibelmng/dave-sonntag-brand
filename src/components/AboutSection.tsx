import { motion } from "framer-motion";
import SectionHeadingAccent from "./SectionHeadingAccent";
import headshot from "@/assets/headshot.jpg";

const DecibelLink = ({ children }: { children: React.ReactNode }) => (
  <a
    href="https://decibelevents.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-foreground hover:underline decoration-primary underline-offset-2 transition-colors duration-300"
  >
    {children}
  </a>
);

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          {/* Left column — 40% */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:w-[40%] flex-shrink-0"
          >
            <div className="relative">
              <img
                src={headshot}
                alt="David Sonntag, CEO of Decibel Events, professional headshot"
                className="w-full md:max-w-[350px] rounded-lg object-cover"
              />
              {/* Red accent border on bottom */}
              <div className="absolute bottom-0 left-0 right-0 md:right-auto md:w-[350px] h-1 bg-primary rounded-b-lg" />
            </div>
          </motion.div>

          {/* Right column — 60% */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-[60%]"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">About David</h2>

            <div className="space-y-6 text-base leading-[1.7] text-muted-foreground">
              <p>
                David Sonntag has spent over two decades producing high-stakes live events for federal agencies, Fortune 500 corporations, and national associations. As CEO and Founder of <DecibelLink>Decibel Events</DecibelLink> — a Washington, DC-based event production firm continuously ranked on the Washington Business Journal's Largest Meeting & Event Planners list since 2019 — he has led productions ranging from the Library of Congress National Book Festival to Department of Defense trade shows, presidential campaign events, and Fortune 500 leadership conferences.
              </p>
              <p>
                Before founding <DecibelLink>Decibel Events</DecibelLink>, David served as Vice President at FleishmanHillard, where he produced multi-million-dollar programs for the Library of Congress, AARP, and the Social Security Administration. He served as Lead Site Advance for the 2008 Presidential Campaign and as Personal Aide to Senator Fred Thompson during his presidential run — experiences that built the operational rigor and zero-margin-for-error standard that define Decibel's approach today.
              </p>
              <p>
                David holds a BA in Economics from Wake Forest University and a Marketing Advantage Certificate from Georgetown University. He was named to Triangle Business Journal's 40 Under 40 and is a founding investor in the Triangle Tweener Fund. He is available for podcast appearances, industry speaking engagements, and mentorship conversations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
