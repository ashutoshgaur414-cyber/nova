import { howItWorks } from "../data/content";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 border-b border-line dark:border-lined">
      <div className="container-nova">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-md mb-14">
          From connected tools to finished work
        </h2>

        <div className="grid md:grid-cols-4 gap-8 md:gap-6">
          {howItWorks.map((step) => (
            <div key={step.step} className="relative pt-6 border-t-2 border-ink dark:border-paper">
              <span className="text-sm text-signal dark:text-signaldark font-display">{step.step}</span>
              <h3 className="mt-3 text-lg font-display font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted dark:text-mutedd leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
