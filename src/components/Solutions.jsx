import { solutions } from "../data/content";

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 md:py-32 border-b border-line dark:border-lined">
      <div className="container-nova">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-md mb-14">
          Built for how different teams actually work
        </h2>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-10">
          {solutions.map((s) => (
            <div key={s.title} className="flex gap-5">
              <span className="w-10 h-10 shrink-0 border border-line dark:border-lined flex items-center justify-center font-display text-signal dark:text-signaldark">
                {s.title.charAt(0)}
              </span>
              <div>
                <h3 className="text-lg font-display font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted dark:text-mutedd leading-relaxed max-w-sm">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
