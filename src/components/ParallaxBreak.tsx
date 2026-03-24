import parallaxBg from "@/assets/parallax-backstage.jpg";

const ParallaxBreak = () => {
  return (
    <section
      className="relative h-[450px] bg-fixed bg-cover"
      style={{ backgroundImage: `url(${parallaxBg})`, backgroundPosition: 'center 30%' }}
      role="img"
      aria-label="David Sonntag coordinating with production crew backstage at a corporate event"
    >
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(26,15,15,0.5), rgba(26,15,15,0.4))" }} />
    </section>
  );
};

export default ParallaxBreak;
