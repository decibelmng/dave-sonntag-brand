const Footer = () => {
  return (
    <footer className="py-10 px-6 text-center relative" style={{ backgroundColor: "hsl(0 0% 7%)" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #ED1C24, transparent)" }} />
      <span className="text-2xl font-bold text-primary/30 mb-3 block">dB</span>
      <p className="italic text-lg text-primary mb-4">
        yeah, we can handle that.®
      </p>
      <p className="text-sm mb-2" style={{ color: "hsl(0 0% 40%)" }}>
        © 2026 David Sonntag. All rights reserved.
      </p>
      <a
        href="https://decibelevents.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm hover:text-foreground transition-colors duration-300"
        style={{ color: "hsl(0 0% 60%)" }}
      >
        decibelevents.com
      </a>
    </footer>
  );
};

export default Footer;
