import { useEffect, useRef } from "react";

export default function DemoModal({ open, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    dialogRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
    >
      <div
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={dialogRef}
        tabIndex={-1}
        className="relative bg-paper dark:bg-paperdark border border-line dark:border-lined max-w-md w-full p-8 outline-none"
      >
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center hover:text-signal transition-colors"
        >
          ✕
        </button>
        <h2 id="demo-modal-title" className="text-2xl font-display font-semibold">
          See NOVA on your work
        </h2>
        <p className="mt-3 text-sm text-muted dark:text-mutedd leading-relaxed">
          Leave your email and we'll set up a 20-minute walkthrough with your
          actual tools connected — no generic slide deck.
        </p>
        <form
          className="mt-6 flex flex-col gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
          }}
        >
          <label htmlFor="demo-email" className="sr-only">
            Work email
          </label>
          <input
            id="demo-email"
            type="email"
            required
            placeholder="you@company.com"
            className="border border-line dark:border-lined bg-transparent px-4 py-3 text-sm focus:border-signal"
          />
          <button
            type="submit"
            className="bg-signal text-white text-sm font-medium py-3 hover:bg-ink dark:hover:bg-paper dark:hover:text-ink transition-colors"
          >
            Request a walkthrough
          </button>
        </form>
      </div>
    </div>
  );
}
