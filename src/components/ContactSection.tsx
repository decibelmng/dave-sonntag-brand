import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Globe } from "lucide-react";

const contactLinks = [
  { icon: Mail, label: "david@decibelevents.com", href: "mailto:david@decibelevents.com" },
  { icon: Phone, label: "703.953.4493", href: "tel:+17039534493" },
  { icon: Linkedin, label: "linkedin.com/in/davesonntag", href: "https://www.linkedin.com/in/davesonntag/", external: true },
  { icon: Globe, label: "Visit Decibel Events", href: "https://decibelevents.com", external: true },
];

const subjectOptions = [
  "Event Production Inquiry",
  "Podcast / Speaking Invitation",
  "Mentorship Conversation",
  "Media / Press",
  "General",
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = "w-full px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-colors duration-200";

  return (
    <section id="contact" className="py-24 md:py-36 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row gap-16">
            {/* Left — 45% */}
            <div className="md:w-[45%]">
              <h2 className="text-3xl font-bold text-foreground mb-10">Get in Touch</h2>

              <div className="space-y-5">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300 group"
                  >
                    <link.icon size={18} strokeWidth={1.5} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                    <span className="text-sm">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right — 55% */}
            <div className="md:w-[55%]">
              {submitted ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
                  <p className="text-2xl font-semibold text-foreground mb-2">Thank you.</p>
                  <p className="text-muted-foreground">I'll be in touch soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input
                    type="text" required maxLength={100} placeholder="Name"
                    value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputStyle}
                    style={{ backgroundColor: "hsl(0 0% 15%)", border: "1px solid hsl(0 0% 20%)" }}
                    onFocus={(e) => e.target.style.borderColor = "hsl(358 87% 52%)"}
                    onBlur={(e) => e.target.style.borderColor = "hsl(0 0% 20%)"}
                  />
                  <input
                    type="email" required maxLength={255} placeholder="Email"
                    value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputStyle}
                    style={{ backgroundColor: "hsl(0 0% 15%)", border: "1px solid hsl(0 0% 20%)" }}
                    onFocus={(e) => e.target.style.borderColor = "hsl(358 87% 52%)"}
                    onBlur={(e) => e.target.style.borderColor = "hsl(0 0% 20%)"}
                  />
                  <select
                    value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className={inputStyle}
                    style={{ backgroundColor: "hsl(0 0% 15%)", border: "1px solid hsl(0 0% 20%)" }}
                    onFocus={(e) => e.target.style.borderColor = "hsl(358 87% 52%)"}
                    onBlur={(e) => e.target.style.borderColor = "hsl(0 0% 20%)"}
                  >
                    {subjectOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                  <textarea
                    required maxLength={1000} rows={4} placeholder="Message"
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputStyle} resize-none`}
                    style={{ backgroundColor: "hsl(0 0% 15%)", border: "1px solid hsl(0 0% 20%)" }}
                    onFocus={(e) => e.target.style.borderColor = "hsl(358 87% 52%)"}
                    onBlur={(e) => e.target.style.borderColor = "hsl(0 0% 20%)"}
                  />
                  <button
                    type="submit"
                    className="w-full py-3 bg-primary text-primary-foreground font-semibold text-sm tracking-wide uppercase hover:bg-primary/85 transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
