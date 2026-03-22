import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/30">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs text-muted-foreground/50 mb-1">
          © 2026 David Sonntag. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/40 mb-4">
          <a
            href="https://www.decibelevents.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Decibel Events — decibelevents.com
          </a>
        </p>
        <a
          href="https://www.linkedin.com/in/davesonntag/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="inline-block text-muted-foreground/40 hover:text-primary transition-colors"
        >
          <Linkedin size={16} strokeWidth={1.5} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
