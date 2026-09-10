export default function Product() {
  return (
    <section id="product" className="py-24 md:py-32 border-b border-line dark:border-lined">
      <div className="container-nova grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-sm">
            One place that actually knows what your team is doing
          </h2>
          <p className="mt-6 text-muted dark:text-mutedd leading-relaxed max-w-md">
            Most tools show you tasks. NOVA reads the calendar invites, the docs,
            the chat threads and the tickets, and turns all of it into one
            current picture — who owns what, what's stuck, and what's next.
            You stop chasing updates because there's nothing left to chase.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "Reads context from tools you already use",
              "Updates itself as work happens, not on a schedule",
              "Every automated action stays visible and reversible",
            ].map((line) => (
              <li key={line} className="flex items-start gap-3 text-sm">
                <span className="mt-1.5 w-1.5 h-1.5 bg-signal shrink-0" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-6">
          <div className="border border-line dark:border-lined p-6 md:p-8 bg-surface/40 dark:bg-surfaced/40">
            <div className="grid grid-cols-2 gap-px bg-line dark:bg-lined">
              {[
                { label: "Open tasks", value: "128" },
                { label: "Blocked", value: "4" },
                { label: "Due this week", value: "37" },
                { label: "Automated today", value: "22" },
              ].map((cell) => (
                <div key={cell.label} className="bg-paper dark:bg-paperdark p-5">
                  <div className="text-2xl font-display font-semibold">{cell.value}</div>
                  <div className="text-xs text-muted dark:text-mutedd mt-1">{cell.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
