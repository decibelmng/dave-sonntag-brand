import { motion } from "framer-motion";
import { Building2, LayoutGrid, Briefcase, Shield } from "lucide-react";

const expertise = [
  {
    icon: Building2,
    title: "Government Event Production",
    description:
      "Trusted partner for federal agencies and legislative branch institutions. Deep expertise in FAR-compliant procurement, RFP responses, and delivering mission-critical events under the highest standards of accountability.",
  },
  {
    icon: LayoutGrid,
    title: "Trade Shows & Expos",
    description:
      "End-to-end production of large-scale exhibition environments — from floor plan design and vendor coordination to registration systems and sponsor integration.",
  },
  {
    icon: Briefcase,
    title: "Corporate Conferences & Meetings",
    description:
      "Full-service event production for corporate clients, including AV/IT infrastructure, staffing, content production, and on-site management for conferences, summits, and executive retreats.",
  },
  {
    icon: Shield,
    title: "Political & Advocacy Events",
    description:
      "Production partner for major political conferences and advocacy organizations, managing complex logistics, technology infrastructure, and high-security event environments at scale.",
  },
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-24 md:py-32 px-6 bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-3">Expertise</h2>
          <div className="w-10 h-[2px] bg-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {expertise.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background rounded-lg p-8 border border-border"
            >
              <item.icon
                size={28}
                strokeWidth={1.5}
                className="text-primary mb-4"
              />
              <h3 className="font-heading text-xl text-foreground mb-3">
                {item.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
