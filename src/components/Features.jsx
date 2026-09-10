import { features } from "../data/content";

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 border-b border-line dark:border-lined">
      <div className="container-nova">
        <div className="max-w-md mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Everything routine, handled without a status meeting
          </h2>
        </div>

        <div className="grid md:grid-cols-3 border-t border-l border-line dark:border-lined">
          {features.map((f) => (
            <div
              key={f.title}
              className="group border-r border-b border-line dark:border-lined p-7 min-h-[220px] flex flex-col justify-between transition-colors hover:bg-surface/50 dark:hover:bg-surfaced/50"
            >
              <span className="text-xs text-muted dark:text-mutedd">{f.tag}</span>
              <div>
                <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-signal dark:group-hover:text-signaldark transition-colors">
                  {f.title}
                </h3>
                <p className="text-sm text-muted dark:text-mutedd leading-relaxed">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
