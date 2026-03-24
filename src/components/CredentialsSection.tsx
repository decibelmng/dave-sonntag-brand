import { motion } from "framer-motion";
import { Trophy, Award, Star, Newspaper, Building2, GraduationCap, BookOpen, ExternalLink } from "lucide-react";

const awards = [
  { icon: Trophy, name: "7 Silver Anvil Awards", desc: "PRSA's highest honor, including Excellence winners" },
  { icon: Award, name: "11 Telly Awards", desc: "Gold, Silver, and Bronze across multiple categories" },
  { icon: Star, name: "2 PR Week Awards", desc: "National recognition for campaign excellence" },
  { icon: Award, name: "Peabody Award — Voices of Civil Rights", desc: "Produced the 70-day AARP bus tour featured in Peabody Award-winning broadcast coverage" },
  { icon: Building2, name: "WBJ Top Event Firm", desc: "Continuously ranked since 2019, #17 in 2026" },
  { icon: GraduationCap, name: "40 Under 40", desc: "Triangle Business Journal Leadership Award" },
  {
    icon: BookOpen,
    name: "Wake Forest Magazine",
    desc: "Featured career profile",
    href: "https://magazine.wfu.edu/2017/06/28/they-can-handle-that/",
  },
];

const CredentialsSection = () => {
  return (
    <section id="credentials" className="py-24 md:py-36 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Recognition</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {awards.map((award, i) => {
            const CardContent = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="p-6 rounded-lg border border-border/40 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
                style={{ backgroundColor: "hsl(0 0% 15%)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(237,28,36,0.12), 0 4px 20px rgba(0,0,0,0.3)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
                style={{ backgroundColor: "hsl(0 0% 15%)" }}
              >
                <award.icon size={22} className="text-primary mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-bold text-foreground mb-1 flex items-center gap-1.5">
                  {award.name}
                  {award.href && <ExternalLink size={14} className="text-muted-foreground" strokeWidth={1.5} />}
                </h3>
                <p className="text-sm text-muted-foreground">{award.desc}</p>
              </motion.div>
            );

            return award.href ? (
              <a key={award.name} href={award.href} target="_blank" rel="noopener noreferrer">
                {CardContent}
              </a>
            ) : (
              <div key={award.name}>{CardContent}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
