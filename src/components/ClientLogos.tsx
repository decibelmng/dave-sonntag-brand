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

        <div className="flex flex-wrap justify-center gap-8">
          {clients.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="w-[120px] h-[60px] rounded flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundColor: "hsl(0 0% 20%)" }}
            >
              <span className="text-foreground text-[10px] font-medium text-center leading-tight px-2">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
