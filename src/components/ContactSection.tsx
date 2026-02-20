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
    "w-full px-4 py-3 bg-transparent font-body text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all duration-300";

  return (
    <section id="contact" className="py-28 md:py-36 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-14">
            <p className="text-xs font-body tracking-[0.25em] uppercase text-primary mb-4">Contact</p>
            <div className="w-8 h-px bg-primary/40 mx-auto mb-8" />
            <p className="font-body text-sm text-muted-foreground max-w-md mx-auto">
              Whether you're exploring a partnership, have an upcoming event, or just want to say hello — I'd love to hear from you.
            </p>
          </div>

          {/* Contact links */}
          <div className="flex items-center justify-center gap-8 mb-14">
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
                className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-muted-foreground/60 hover:text-primary transition-colors duration-300 font-body"
              >
                <link.icon size={14} strokeWidth={1.2} />
                {link.label}
              </a>
            ))}
          </div>

          {/* Form */}
          {submitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="font-heading text-xl text-foreground mb-2">Thank you.</p>
              <p className="font-body text-sm text-muted-foreground">
                Your message has been received. I'll be in touch soon.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-0">
              <div className="grid md:grid-cols-2">
                <div style={{ borderBottom: "1px solid hsl(0 0% 100% / 0.06)", borderRight: "1px solid hsl(0 0% 100% / 0.06)" }}>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClasses}
                  />
                </div>
                <div style={{ borderBottom: "1px solid hsl(0 0% 100% / 0.06)" }}>
                  <input
                    type="email"
                    required
                    maxLength={255}
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClasses}
                  />
                </div>
              </div>

              <div style={{ borderBottom: "1px solid hsl(0 0% 100% / 0.06)" }}>
                <select
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className={`${inputClasses} bg-background`}
                >
                  {subjectOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div style={{ borderBottom: "1px solid hsl(0 0% 100% / 0.06)" }}>
                <textarea
                  required
                  maxLength={1000}
                  rows={4}
                  placeholder="Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <div className="pt-8 text-center">
                <button
                  type="submit"
                  className="px-10 py-3 bg-transparent font-body text-xs tracking-[0.2em] uppercase text-primary hover:bg-primary hover:text-background transition-all duration-500 rounded-none"
                  style={{ border: "1px solid hsl(44 52% 55% / 0.4)" }}
                >
                  Send Message
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
