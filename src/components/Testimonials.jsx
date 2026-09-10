import { useState } from "react";
import { testimonials } from "../data/content";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const go = (dir) => {
    setIndex((prev) => (prev + dir + total) % total);
  };

  const current = testimonials[index];

  return (
    <section id="testimonials" className="py-24 md:py-32 border-b border-line dark:border-lined">
      <div className="container-nova">
        <div className="flex items-end justify-between mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-sm">
            Teams that stopped chasing updates
          </h2>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="w-10 h-10 border border-line dark:border-lined hover:border-ink dark:hover:border-paper transition-colors"
            >
              ←
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="w-10 h-10 border border-line dark:border-lined hover:border-ink dark:hover:border-paper transition-colors"
            >
              →
            </button>
          </div>
        </div>

        <div className="border-t border-line dark:border-lined pt-10 md:pt-14 max-w-2xl" aria-live="polite">
          <blockquote className="text-xl md:text-2xl font-display leading-snug">
            “{current.quote}”
          </blockquote>
          <div className="mt-6 text-sm">
            <span className="font-medium">{current.name}</span>
            <span className="text-muted dark:text-mutedd"> — {current.role}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-10">
          <div className="flex gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial from ${t.name}`}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === index ? "bg-signal" : "bg-line dark:bg-lined"
                }`}
              />
            ))}
          </div>
          <div className="flex md:hidden gap-2 ml-auto">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="w-9 h-9 border border-line dark:border-lined"
            >
              ←
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="w-9 h-9 border border-line dark:border-lined"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
