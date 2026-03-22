import { motion } from "framer-motion";

const clients = [
  "Library of Congress",
  "Department of Defense",
  "DSCA",
  "T. Rowe Price",
  "Trane Technologies",
  "Amtrak",
  "AARP",
  "SSA",
  "National Park Foundation",
  "RISE",
];

const ClientLogos = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-foreground text-center mb-14"
        >
          Trusted By
        </motion.h2>

        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {clients.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="text-foreground text-sm uppercase tracking-[3px] font-light opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default"
            >
              {name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
