import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6" style={{ borderTop: "1px solid hsl(0 0% 100% / 0.04)" }}>
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-body text-[11px] tracking-[0.15em] uppercase text-muted-foreground/40 mb-2">
          © 2026 David Sonntag. All rights reserved.
        </p>
        <p className="font-body text-[11px] tracking-[0.15em] uppercase text-muted-foreground/30 mb-6">
          Decibel Events —{" "}
          <a
            href="https://www.decibelevents.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-300"
          >
            decibelevents.com
          </a>
        </p>
        <a
          href="https://www.linkedin.com/in/davesonntag/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="inline-block text-muted-foreground/30 hover:text-primary transition-colors duration-300"
        >
          <Linkedin size={14} strokeWidth={1.2} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
