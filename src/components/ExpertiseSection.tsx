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
    title: "Corporate Conferences",
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
    <section id="expertise" className="py-28 md:py-36 px-6 relative">
      {/* Divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs font-body tracking-[0.25em] uppercase text-primary mb-4">Expertise</p>
          <div className="w-8 h-px bg-primary/40 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {expertise.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-lg transition-all duration-500"
              style={{
                background: "var(--gradient-card)",
                border: "1px solid hsl(0 0% 100% / 0.05)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "1px solid hsl(44 52% 55% / 0.15)";
                e.currentTarget.style.boxShadow = "var(--glow-gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "1px solid hsl(0 0% 100% / 0.05)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <item.icon
                size={24}
                strokeWidth={1.2}
                className="text-primary/70 mb-5 group-hover:text-primary transition-colors duration-300"
              />
              <h3 className="font-heading text-lg text-foreground mb-3 tracking-wide">
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
