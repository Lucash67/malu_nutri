import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal], [data-desk-reveal]");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktop = window.matchMedia("(min-width: 980px)").matches;

    if (reduced) {
      nodes.forEach((el) => el.classList.add("is-in"));
      return;
    }

    nodes.forEach((el, i) => {
      el.style.setProperty("--reveal-i", String(i % 8));
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        });
      },
      {
        threshold: desktop ? 0.14 : 0.08,
        rootMargin: desktop ? "0px 0px -8% 0px" : "0px 0px -4% 0px",
      },
    );

    nodes.forEach((el) => {
      if (!desktop) {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92) {
          el.classList.add("is-in");
          return;
        }
      }
      io.observe(el);
    });

    const failsafe = window.setTimeout(() => {
      nodes.forEach((el) => {
        if (el.classList.contains("is-in")) return;
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("is-in");
        }
      });
    }, 1600);

    return () => {
      window.clearTimeout(failsafe);
      io.disconnect();
    };
  }, []);
}
