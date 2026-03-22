import parallaxBg from "@/assets/parallax-stage.jpg";

const ParallaxBreak2 = () => {
  return (
    <section
      className="relative h-[350px] bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${parallaxBg})` }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-black/40" />
    </section>
  );
};

export default ParallaxBreak2;
