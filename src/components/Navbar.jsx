import { useEffect, useState } from "react";
import { nav } from "../data/content";

export default function Navbar({ isDark, setIsDark }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-paper/90 dark:bg-paperdark/90 backdrop-blur border-b border-line dark:border-lined"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container-nova flex items-center justify-between h-16" aria-label="Primary">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-display font-bold text-lg tracking-tight flex items-center gap-2"
        >
          <span className="inline-block w-2.5 h-2.5 bg-signal" aria-hidden="true" />
          NOVA
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-sm text-muted dark:text-mutedd hover:text-ink dark:hover:text-paper transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="text-sm text-muted dark:text-mutedd hover:text-ink dark:hover:text-paper transition-colors w-8 h-8 flex items-center justify-center border border-line dark:border-lined rounded"
          >
            {isDark ? "☾" : "☀"}
          </button>
          <a
            href="#pricing"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#pricing");
            }}
            className="text-sm font-medium px-4 py-2 bg-ink text-paper dark:bg-paper dark:text-ink hover:bg-signal dark:hover:bg-signal dark:hover:text-paper transition-colors"
          >
            Start free
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span
            className={`block h-[1.5px] w-6 bg-ink dark:bg-paper transition-transform duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-6 bg-ink dark:bg-paper transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[1.5px] w-6 bg-ink dark:bg-paper transition-transform duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-x-0 top-16 bottom-0 bg-paper dark:bg-paperdark transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="container-nova flex flex-col gap-1 pt-8">
          {nav.map((item) => (
            <li key={item.href} className="border-b border-line dark:border-lined">
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="block py-4 text-2xl font-display"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="container-nova mt-8 flex flex-col gap-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className="text-left text-sm text-muted dark:text-mutedd"
          >
            {isDark ? "Switch to light mode" : "Switch to dark mode"}
          </button>
          <a
            href="#pricing"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#pricing");
            }}
            className="text-center text-sm font-medium px-4 py-3 bg-ink text-paper dark:bg-paper dark:text-ink"
          >
            Start free
          </a>
        </div>
      </div>
    </header>
  );
}
