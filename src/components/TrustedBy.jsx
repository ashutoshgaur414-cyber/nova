import { trustedBy } from "../data/content";

export default function TrustedBy() {
  const doubled = [...trustedBy, ...trustedBy];

  return (
    <section aria-label="Companies using NOVA" className="border-y border-line dark:border-lined py-8 overflow-hidden">
      <div className="container-nova mb-5">
        <p className="text-xs text-muted dark:text-mutedd">Trusted by teams at</p>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee motion-reduce:animate-none">
          {doubled.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display text-xl md:text-2xl text-muted dark:text-mutedd px-8 whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
