import { stats } from "../data/content";
import useInView from "../hooks/useInView";
import useCountUp from "../hooks/useCountUp";

function Stat({ stat }) {
  const value = useCountUp(stat.value, stat.__inView, 1400, stat.decimals || 0);
  return (
    <div className="py-8 md:py-0 md:px-8 first:pl-0 border-t md:border-t-0 md:border-l border-white/15 first:border-t-0 md:first:border-l-0">
      <div className="text-4xl md:text-5xl font-display font-semibold tabular-nums">
        {value}
        <span className="text-mint">{stat.suffix}</span>
      </div>
      <div className="mt-2 text-sm text-white/60">{stat.label}</div>
    </div>
  );
}

export default function Stats() {
  const [ref, inView] = useInView(0.3);

  return (
    <section
      id="stats"
      ref={ref}
      className="py-24 md:py-28 bg-ink text-paper"
    >
      <div className="container-nova">
        <p className="text-xs text-white/50 mb-10">By the numbers</p>
        <div className="grid md:grid-cols-4 gap-y-8 md:gap-y-0">
          {stats.map((s) => (
            <Stat key={s.label} stat={{ ...s, __inView: inView }} />
          ))}
        </div>
      </div>
    </section>
  );
}
