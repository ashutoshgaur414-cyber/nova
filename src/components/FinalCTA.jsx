export default function FinalCTA({ onOpenDemo }) {
  return (
    <section className="py-24 md:py-36 border-b border-line dark:border-lined">
      <div className="container-nova text-center">
        <h2 className="text-4xl md:text-6xl font-display font-semibold tracking-tight max-w-2xl mx-auto">
          Stop reporting on work. Start shipping it.
        </h2>
        <p className="mt-6 text-muted dark:text-mutedd max-w-md mx-auto">
          Free for teams up to 5. No credit card, no sales call required to start.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-5">
          <a
            href="#pricing"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-7 py-3.5 bg-signal text-white text-sm font-medium hover:bg-ink dark:hover:bg-paper dark:hover:text-ink transition-colors"
          >
            Start free
          </a>
          <button
            onClick={onOpenDemo}
            className="text-sm font-medium border-b border-ink dark:border-paper pb-0.5 hover:border-signal hover:text-signal transition-colors"
          >
            Book a walkthrough
          </button>
        </div>
      </div>
    </section>
  );
}
