import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Globe } from "lucide-react";
import SectionHeadingAccent from "./SectionHeadingAccent";

const HUBSPOT_PORTAL_ID = "24432826";
const HUBSPOT_FORM_GUID = "520b5960-f871-465b-8272-95fc6b8a75c8";

const contactLinks = [
  { icon: Mail, label: "david@decibelevents.com", href: "mailto:david@decibelevents.com" },
  { icon: Phone, label: "703.953.4493", href: "tel:+17039534493" },
  {
    icon: Linkedin,
    label: "linkedin.com/in/davesonntag",
    href: "https://www.linkedin.com/in/davesonntag/",
    external: true,
  },
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
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields: [
              { name: "firstname", value: form.firstName },
              { name: "lastname", value: form.lastName },
              { name: "email", value: form.email },
              { name: "subject", value: form.subject },
              { name: "message", value: form.message },
            ],
            context: {
              pageUri: "https://davesonntag.com",
              pageName: "David Sonntag Contact",
            },
          }),
        },
      );

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    setError(false);
  };

  const inputStyle =
    "w-full px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-colors duration-200";

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
              <h2 className="text-3xl font-bold text-foreground mb-2">Get in Touch</h2>
              <div className="flex justify-start"><SectionHeadingAccent /></div>
              <div className="mb-10" />

              <div className="space-y-5">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300 group"
                  >
                    <link.icon
                      size={18}
                      strokeWidth={1.5}
                      className="text-muted-foreground group-hover:text-foreground transition-colors"
                    />
                    <span className="text-sm">{link.label}</span>
                  </a>
                ))}
              </div>
              <p className="text-sm text-muted-foreground/50 mt-12 leading-relaxed">Based in Washington, DC<br/>Serving clients nationwide</p>
            </div>

            {/* Right — 55% */}
            <div className="md:w-[55%]">
              {submitted ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
                  <p className="text-2xl font-semibold text-foreground mb-2">Thank you.</p>
                  <p className="text-muted-foreground">I'll be in touch soon.</p>
                </motion.div>
              ) : error ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
                  <p className="text-destructive mb-4">
                    Something went wrong. Please email{" "}
                    <a href="mailto:david@decibelevents.com" className="underline">
                      david@decibelevents.com
                    </a>{" "}
                    directly.
                  </p>
                  <button
                    onClick={handleRetry}
                    className="px-6 py-2 rounded-sm bg-primary text-primary-foreground font-semibold text-sm tracking-wide uppercase hover:bg-primary/85 transition-colors duration-300"
                  >
                    Try Again
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex flex-col md:flex-row gap-4">
                    <input
                      type="text"
                      required
                      maxLength={100}
                      placeholder="First Name"
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      className={`flex-1 ${inputStyle}`}
                      disabled={loading}
                      style={{ backgroundColor: "hsl(0 0% 15%)", border: "1px solid hsl(0 0% 20%)" }}
                      onFocus={(e) => (e.target.style.borderColor = "hsl(358 87% 52%)")}
                      onBlur={(e) => (e.target.style.borderColor = "hsl(0 0% 20%)")}
                    />
                    <input
                      type="text"
                      required
                      maxLength={100}
                      placeholder="Last Name"
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      className={`flex-1 ${inputStyle}`}
                      disabled={loading}
                      style={{ backgroundColor: "hsl(0 0% 15%)", border: "1px solid hsl(0 0% 20%)" }}
                      onFocus={(e) => (e.target.style.borderColor = "hsl(358 87% 52%)")}
                      onBlur={(e) => (e.target.style.borderColor = "hsl(0 0% 20%)")}
                    />
                  </div>
                  <input
                    type="email"
                    required
                    maxLength={255}
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputStyle}
                    disabled={loading}
                    style={{ backgroundColor: "hsl(0 0% 15%)", border: "1px solid hsl(0 0% 20%)" }}
                    onFocus={(e) => (e.target.style.borderColor = "hsl(358 87% 52%)")}
                    onBlur={(e) => (e.target.style.borderColor = "hsl(0 0% 20%)")}
                  />
                  <select
                    value={form.subject}
                    required
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className={`${inputStyle} ${!form.subject ? "text-muted-foreground/50" : ""}`}
                    disabled={loading}
                    style={{ backgroundColor: "hsl(0 0% 15%)", border: "1px solid hsl(0 0% 20%)" }}
                    onFocus={(e) => (e.target.style.borderColor = "hsl(358 87% 52%)")}
                    onBlur={(e) => (e.target.style.borderColor = "hsl(0 0% 20%)")}
                  >
                    <option value="" disabled style={{ color: "#666" }}>
                      Select a topic...
                    </option>
                    {subjectOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <textarea
                    required
                    maxLength={1000}
                    rows={4}
                    placeholder="Message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputStyle} resize-none`}
                    disabled={loading}
                    style={{ backgroundColor: "hsl(0 0% 15%)", border: "1px solid hsl(0 0% 20%)" }}
                    onFocus={(e) => (e.target.style.borderColor = "hsl(358 87% 52%)")}
                    onBlur={(e) => (e.target.style.borderColor = "hsl(0 0% 20%)")}
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-primary text-primary-foreground font-semibold text-sm tracking-wide uppercase hover:bg-primary/85 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send Message"}
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
