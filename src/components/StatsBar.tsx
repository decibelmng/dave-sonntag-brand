import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

interface CountUpProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

const CountUp = ({ end, prefix = "", suffix = "", duration = 2000 }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return (
    <span ref={ref} className="text-4xl font-bold text-primary">
      {prefix}{count}{suffix}
    </span>
  );
};

const stats = [
  { end: 20, suffix: "+", label: "Years in Events" },
  { end: 7, label: "Silver Anvils" },
  { end: 11, label: "Telly Awards" },
  { end: 50, suffix: "+", label: "Presidential Events" },
  { end: 15, label: "Years at LOC Festival" },
  { end: 17, prefix: "#", label: "WBJ Top Event Firms — Ranked Since 2019" },
];

const StatsBar = () => {
  return (
    <section className="py-16 px-6" style={{ backgroundColor: "hsl(0 0% 13%)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <CountUp end={stat.end} prefix={stat.prefix} suffix={stat.suffix} />
              <p className="text-sm font-medium uppercase tracking-wider text-foreground mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
