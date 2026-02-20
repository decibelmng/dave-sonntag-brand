import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, Globe } from "lucide-react";

const subjectOptions = ["Business Inquiry", "Government RFP", "Speaking", "General", "Other"];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "General", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClasses =
    "w-full px-0 py-4 bg-transparent font-body text-sm font-light text-foreground placeholder:text-muted-foreground/30 focus:outline-none transition-all duration-300";

  return (
    <section id="contact" className="py-28 md:py-40 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-primary/15 to-transparent" />

      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <p className="text-[10px] font-body font-light tracking-[0.35em] uppercase text-primary/70 mb-6">Get in Touch</p>
            <p className="font-body text-sm font-light text-muted-foreground/60 max-w-sm mx-auto leading-relaxed">
              Whether you're exploring a partnership, have an upcoming event, or just want to connect.
            </p>
          </div>

          <div className="flex items-center justify-center gap-8 mb-16">
            {[
              { icon: Mail, href: "mailto:dave@decibelevents.com", label: "Email" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/davesonntag/", label: "LinkedIn" },
              { icon: Globe, href: "https://www.decibelevents.com", label: "Decibel" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-muted-foreground/30 hover:text-primary transition-colors duration-500"
                aria-label={link.label}
              >
                <link.icon size={16} strokeWidth={1} />
              </a>
            ))}
          </div>

          {submitted ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
              <p className="font-heading text-lg font-light text-foreground mb-2">Thank you.</p>
              <p className="font-body text-xs font-light text-muted-foreground/50">I'll be in touch soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-0">
              <div style={{ borderBottom: "1px solid hsl(0 0% 100% / 0.05)" }}>
                <input
                  type="text" required maxLength={100} placeholder="Name"
                  value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClasses}
                />
              </div>
              <div style={{ borderBottom: "1px solid hsl(0 0% 100% / 0.05)" }}>
                <input
                  type="email" required maxLength={255} placeholder="Email"
                  value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClasses}
                />
              </div>
              <div style={{ borderBottom: "1px solid hsl(0 0% 100% / 0.05)" }}>
                <select
                  value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className={`${inputClasses} bg-background`}
                >
                  {subjectOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>
              <div style={{ borderBottom: "1px solid hsl(0 0% 100% / 0.05)" }}>
                <textarea
                  required maxLength={1000} rows={3} placeholder="Message"
                  value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClasses} resize-none`}
                />
              </div>
              <div className="pt-10 text-center">
                <button
                  type="submit"
                  className="px-10 py-3 bg-transparent font-body text-[10px] font-light tracking-[0.3em] uppercase text-primary/80 hover:text-background hover:bg-primary transition-all duration-500"
                  style={{ border: "1px solid hsl(44 45% 58% / 0.25)" }}
                >
                  Send
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
