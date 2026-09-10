import { useState } from "react";
import { pricing } from "../data/content";

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 md:py-32 border-b border-line dark:border-lined">
      <div className="container-nova">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-sm">
            Straightforward pricing, no seat games
          </h2>

          <div className="flex items-center gap-3">
            <span className={`text-sm ${!annual ? "text-ink dark:text-paper" : "text-muted dark:text-mutedd"}`}>
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              role="switch"
              aria-checked={annual}
              aria-label="Toggle annual pricing"
              className="w-12 h-7 border border-line dark:border-lined relative shrink-0"
            >
              <span
                className={`absolute top-0.5 w-5 h-5 bg-signal transition-transform duration-200 ${
                  annual ? "translate-x-[22px]" : "translate-x-0.5"
                }`}
              />
            </button>
            <span className={`text-sm ${annual ? "text-ink dark:text-paper" : "text-muted dark:text-mutedd"}`}>
              Annual <span className="text-mint">— save ~20%</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-line dark:bg-lined">
          {pricing.map((plan) => (
            <div
              key={plan.name}
              className={`bg-paper dark:bg-paperdark p-8 flex flex-col ${
                plan.featured ? "ring-1 ring-inset ring-signal" : ""
              }`}
            >
              {plan.featured && (
                <span className="text-xs text-signal dark:text-signaldark font-medium mb-3">
                  Most teams pick this
                </span>
              )}
              <h3 className="text-lg font-display font-semibold">{plan.name}</h3>
              <p className="text-sm text-muted dark:text-mutedd mt-1">{plan.tagline}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-display font-semibold">
                  ${annual ? plan.annual : plan.monthly}
                </span>
                <span className="text-sm text-muted dark:text-mutedd">/user/mo</span>
              </div>

              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="text-sm flex items-start gap-2">
                    <span className="text-mint mt-0.5">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full py-3 text-sm font-medium transition-colors ${
                  plan.featured
                    ? "bg-signal text-white hover:bg-ink dark:hover:bg-paper dark:hover:text-ink"
                    : "border border-ink dark:border-paper hover:bg-ink hover:text-paper dark:hover:bg-paper dark:hover:text-ink"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
