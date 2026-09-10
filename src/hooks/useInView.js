import { useEffect, useRef, useState } from "react";

// Triggers once when an element enters the viewport. Used sparingly (stats + one hero
// moment) rather than on every section, per the "one orchestrated reveal" principle.
export default function useInView(threshold = 0.4) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}
