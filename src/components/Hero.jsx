export default function Hero() {
  return (
    <section id="top" className="pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="container-nova grid md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-7">
          <h1 className="font-display text-[13vw] leading-[0.95] md:text-6xl md:leading-[1.02] font-semibold tracking-tight max-w-[11ch]">
            Build better.
            <br />
            Work smarter.
          </h1>
          <p className="mt-7 text-lg text-muted dark:text-mutedd max-w-md leading-relaxed">
            NOVA plans your team's work, automates the follow-through, and writes
            the status update before anyone asks for one.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3.5 bg-signal text-white text-sm font-medium hover:bg-ink dark:hover:bg-paper dark:hover:text-ink transition-colors"
            >
              Start free — no card needed
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#how-it-works")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-sm font-medium border-b border-ink dark:border-paper pb-0.5 hover:border-signal hover:text-signal transition-colors"
            >
              See how it works
            </a>
          </div>
        </div>

        <div className="md:col-span-5 md:pt-3">
          <div className="border border-line dark:border-lined bg-surface/60 dark:bg-surfaced/60 p-5">
            <div className="flex items-center justify-between text-xs text-muted dark:text-mutedd mb-4">
              <span>Q3 launch plan</span>
              <span>Auto-updated 2m ago</span>
            </div>
            <ul className="space-y-3">
              {[
                { task: "Finalize pricing copy", owner: "Priya", done: true },
                { task: "QA mobile checkout flow", owner: "Marcus", done: true },
                { task: "Draft launch email", owner: "Lena", done: false },
                { task: "Notify support team", owner: "NOVA", done: false, auto: true },
              ].map((row) => (
                <li
                  key={row.task}
                  className="flex items-center gap-3 text-sm py-2 border-b border-line/70 dark:border-lined/70 last:border-0"
                >
                  <span
                    className={`w-3.5 h-3.5 shrink-0 border ${
                      row.done
                        ? "bg-mint border-mint"
                        : "border-muted dark:border-mutedd"
                    }`}
                  />
                  <span className={`flex-1 ${row.done ? "line-through text-muted dark:text-mutedd" : ""}`}>
                    {row.task}
                  </span>
                  <span
                    className={`text-xs shrink-0 ${
                      row.auto ? "text-signal dark:text-signaldark" : "text-muted dark:text-mutedd"
                    }`}
                  >
                    {row.owner}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
