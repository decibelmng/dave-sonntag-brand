import { motion } from "framer-motion";

const credentials = [
  "Library of Congress — National Book Festival",
  "U.S. Small Business Administration — National Small Business Week",
  "CPAC / American Conservative Union",
  "T. Rowe Price",
  "SCORE",
  "GSA (General Services Administration)",
  "Library of Congress — National Library Service",
  "Blue Cross Blue Shield — FEP",
];

const CredentialsSection = () => {
  return (
    <section id="credentials" className="py-24 md:py-36 px-6 bg-card">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Credentials</h2>
          <div className="w-12 h-0.5 bg-primary mb-10" />

          <p className="text-base md:text-lg font-light text-muted-foreground mb-10">
            Select clients and projects produced under Decibel Events.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {credentials.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center gap-3 py-3 border-b border-border/30"
              >
                <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                <span className="text-sm md:text-base font-light text-foreground/80">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CredentialsSection;
