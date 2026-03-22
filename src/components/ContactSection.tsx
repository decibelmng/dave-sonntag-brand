import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, Globe } from "lucide-react";

const subjectOptions = ["Business Inquiry", "Government RFP", "Speaking", "Mentorship", "General", "Other"];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "General", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-36 px-6">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Contact</h2>
          <div className="w-12 h-0.5 bg-primary mb-8" />

          <p className="text-base md:text-lg font-light text-muted-foreground mb-8">
            Whether you're exploring a partnership, have an upcoming event, or just want to connect — I'd love to hear from you.
          </p>

          <div className="flex items-center gap-6 mb-12">
            {[
              { icon: Mail, href: "mailto:dave@decibelevents.com", label: "Email" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/davesonntag/", label: "LinkedIn" },
              { icon: Globe, href: "https://www.decibelevents.com", label: "Decibel Events" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label={link.label}
              >
                <link.icon size={20} strokeWidth={1.5} />
              </a>
            ))}
          </div>

          {submitted ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <p className="text-2xl font-semibold text-foreground mb-2">Thank you.</p>
              <p className="text-muted-foreground">I'll be in touch soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text" required maxLength={100} placeholder="Name"
                value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email" required maxLength={255} placeholder="Email"
                value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
              />
              <select
                value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
              >
                {subjectOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </select>
              <textarea
                required maxLength={1000} rows={4} placeholder="Message"
                value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
              />
              <button
                type="submit"
                className="px-10 py-3 bg-primary text-primary-foreground font-semibold text-sm tracking-wide uppercase hover:bg-primary/85 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
