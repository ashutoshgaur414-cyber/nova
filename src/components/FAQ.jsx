import { useState } from "react";
import { faq } from "../data/content";

function FaqItem({ item, isOpen, onToggle, id }) {
  return (
    <div className="border-b border-line dark:border-lined">
      <h3>
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`${id}-panel`}
          id={`${id}-header`}
          className="w-full flex items-center justify-between text-left py-6 gap-6"
        >
          <span className="text-base md:text-lg font-display">{item.q}</span>
          <span
            className={`text-xl shrink-0 text-signal dark:text-signaldark transition-transform duration-200 ${
              isOpen ? "rotate-45" : ""
            }`}
            aria-hidden="true"
          >
            +
          </span>
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-header`}
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="pb-6 text-sm text-muted dark:text-mutedd leading-relaxed max-w-xl">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 md:py-32 border-b border-line dark:border-lined">
      <div className="container-nova grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Questions, answered</h2>
        </div>
        <div className="md:col-span-8 border-t border-line dark:border-lined">
          {faq.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              id={`faq-${i}`}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
