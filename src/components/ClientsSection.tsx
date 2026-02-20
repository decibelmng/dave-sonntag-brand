import { motion } from "framer-motion";

const clients = [
  "Library of Congress — National Book Festival",
  "U.S. Small Business Administration",
  "SCORE",
  "CPAC / American Conservative Union",
  "T. Rowe Price",
  "GSA",
  "Library of Congress — National Library Service",
];

const ClientsSection = () => {
  return (
    <section id="clients" className="py-28 md:py-36 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs font-body tracking-[0.25em] uppercase text-primary mb-4">Select Clients</p>
          <div className="w-8 h-px bg-primary/40 mx-auto mb-14" />

          <div className="space-y-4">
            {clients.map((client, i) => (
              <motion.p
                key={client}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="font-body text-sm md:text-base tracking-wide text-muted-foreground"
              >
                {client}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
