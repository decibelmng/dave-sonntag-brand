import parallaxBg from "@/assets/parallax-backstage.jpg";

const ParallaxBreak = () => {
  return (
    <section
      className="relative h-[400px] bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${parallaxBg})` }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-black/40" />
    </section>
  );
};

export default ParallaxBreak;
