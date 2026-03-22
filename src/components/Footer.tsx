const Footer = () => {
  return (
    <footer className="py-10 px-6 text-center" style={{ backgroundColor: "hsl(0 0% 7%)" }}>
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
