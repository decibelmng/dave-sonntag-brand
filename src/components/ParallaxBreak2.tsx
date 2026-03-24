import parallaxBg from "@/assets/parallax-stage.jpg";

const ParallaxBreak2 = () => {
  return (
    <section
      className="relative h-[350px] bg-fixed bg-cover"
      style={{ backgroundImage: `url(${parallaxBg})`, backgroundPosition: 'center 25%' }}
      role="img"
      aria-label="David Sonntag on stage with headset and microphone during event load-in"
    >
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(26,15,15,0.5), rgba(26,15,15,0.4))" }} />
    </section>
  );
};

export default ParallaxBreak2;
