import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-20 px-6" style={{ borderTop: "1px solid hsl(0 0% 100% / 0.03)" }}>
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-body text-[10px] font-light tracking-[0.2em] uppercase text-muted-foreground/25 mb-2">
          © 2026 David Sonntag
        </p>
        <p className="font-body text-[10px] font-light tracking-[0.2em] uppercase text-muted-foreground/20 mb-6">
          <a
            href="https://www.decibelevents.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary/50 transition-colors duration-500"
          >
            Decibel Events
          </a>
        </p>
        <a
          href="https://www.linkedin.com/in/davesonntag/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="inline-block text-muted-foreground/20 hover:text-primary/50 transition-colors duration-500"
        >
          <Linkedin size={13} strokeWidth={1} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
