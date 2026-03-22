import parallaxBg from "@/assets/parallax-backstage.jpg";

const ParallaxBreak = () => {
  return (
    <section
      className="relative h-[400px] bg-fixed bg-cover"
      style={{ backgroundImage: `url(${parallaxBg})`, backgroundPosition: 'center 30%' }}
      role="img"
      aria-label="David Sonntag coordinating with production crew backstage at a corporate event"
    >
      <div className="absolute inset-0 bg-black/40" />
    </section>
  );
};

export default ParallaxBreak;
