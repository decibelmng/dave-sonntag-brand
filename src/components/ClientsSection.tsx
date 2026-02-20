import { motion } from "framer-motion";

const clients = [
  "Library of Congress — National Book Festival",
  "U.S. Small Business Administration — National Small Business Week",
  "SCORE",
  "CPAC / American Conservative Union",
  "T. Rowe Price",
  "GSA (General Services Administration)",
  "Library of Congress — National Library Service",
];

const ClientsSection = () => {
  return (
    <section id="clients" className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-3">
            Notable Clients & Projects
          </h2>
          <div className="w-10 h-[2px] bg-accent mx-auto mb-12" />

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            {clients.map((client, i) => (
              <span key={client} className="flex items-center">
                <span className="font-body text-sm md:text-base text-muted-foreground">
                  {client}
                </span>
                {i < clients.length - 1 && (
                  <span className="ml-3 text-accent">·</span>
                )}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
