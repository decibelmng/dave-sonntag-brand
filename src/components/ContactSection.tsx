import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, Globe } from "lucide-react";

const subjectOptions = [
  "Business Inquiry",
  "Government RFP",
  "Speaking",
  "General",
  "Other",
];

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "General",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — form submission logic to be added
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-3 text-center">
            Let's Connect
          </h2>
          <div className="w-10 h-[2px] bg-accent mx-auto mb-8" />
          <p className="font-body text-center text-muted-foreground mb-10 max-w-lg mx-auto">
            Whether you're exploring a partnership, have an upcoming event, or just want to say hello — I'd love to hear from you.
          </p>

          {/* Contact links */}
          <div className="flex items-center justify-center gap-8 mb-12">
            <a
              href="mailto:dave@decibelevents.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body"
            >
              <Mail size={16} strokeWidth={1.5} />
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/davesonntag/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body"
            >
              <Linkedin size={16} strokeWidth={1.5} />
              LinkedIn
            </a>
            <a
              href="https://www.decibelevents.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body"
            >
              <Globe size={16} strokeWidth={1.5} />
              Decibel Events
            </a>
          </div>

          {/* Contact form */}
          {submitted ? (
            <div className="text-center py-12">
              <p className="font-heading text-xl text-foreground mb-2">Thank you!</p>
              <p className="font-body text-sm text-muted-foreground">
                Your message has been received. I'll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-body text-muted-foreground mb-1.5 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-background border border-border rounded-md font-body text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-shadow"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-body text-muted-foreground mb-1.5 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-background border border-border rounded-md font-body text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-shadow"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-body text-muted-foreground mb-1.5 uppercase tracking-wider">
                  Subject
                </label>
                <select
                  id="subject"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-md font-body text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-shadow"
                >
                  {subjectOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-body text-muted-foreground mb-1.5 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  maxLength={1000}
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-md font-body text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-shadow resize-none"
                />
              </div>

              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="px-8 py-2.5 bg-primary text-primary-foreground font-body text-sm tracking-wide rounded-md hover:opacity-90 transition-opacity border border-accent/30"
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
