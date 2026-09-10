import { useState } from "react";
import { nav } from "../data/content";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // null | "error" | "success"

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailPattern.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  };

  return (
    <footer className="pt-20 pb-10">
      <div className="container-nova">
        <div className="grid md:grid-cols-12 gap-10 pb-16 border-b border-line dark:border-lined">
          <div className="md:col-span-5">
            <div className="font-display font-semibold text-lg flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 bg-signal" aria-hidden="true" />
              NOVA
            </div>
            <p className="mt-4 text-sm text-muted dark:text-mutedd max-w-xs leading-relaxed">
              The AI productivity platform that plans, automates and reports on
              your team's work.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 max-w-xs" noValidate>
              <label htmlFor="newsletter-email" className="text-xs text-muted dark:text-mutedd">
                Get product updates
              </label>
              <div className="mt-2 flex">
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status) setStatus(null);
                  }}
                  placeholder="you@company.com"
                  aria-invalid={status === "error"}
                  aria-describedby="newsletter-feedback"
                  className={`flex-1 min-w-0 bg-transparent border px-3 py-2.5 text-sm focus:border-signal ${
                    status === "error" ? "border-red-500" : "border-line dark:border-lined"
                  }`}
                />
                <button
                  type="submit"
                  className="shrink-0 px-4 py-2.5 bg-ink text-paper dark:bg-paper dark:text-ink text-sm hover:bg-signal dark:hover:bg-signal dark:hover:text-white transition-colors"
                >
                  Join
                </button>
              </div>
              <p id="newsletter-feedback" className="mt-2 text-xs min-h-[1em]" aria-live="polite">
                {status === "error" && (
                  <span className="text-red-500">Enter a valid email address.</span>
                )}
                {status === "success" && (
                  <span className="text-mint">You're on the list.</span>
                )}
              </p>
            </form>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <p className="text-xs text-muted dark:text-mutedd mb-4">Product</p>
            <ul className="space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="hover:text-signal dark:hover:text-signaldark transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs text-muted dark:text-mutedd mb-4">Company</p>
            <ul className="space-y-3 text-sm">
              {["About", "Careers", "Blog", "Contact"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-signal dark:hover:text-signaldark transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs text-muted dark:text-mutedd mb-4">Legal</p>
            <ul className="space-y-3 text-sm">
              {["Privacy", "Terms", "Security"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-signal dark:hover:text-signaldark transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted dark:text-mutedd">
          <span>© {new Date().getFullYear()} NOVA. This is a fictional brand built for a design assignment.</span>
          <span>Made with React &amp; Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
