import { useEffect, useState } from "react";

/**
 * Tracks which section (matched by hash href, e.g. "#producto") is
 * currently in view. Hrefs with no matching element in the DOM are
 * ignored, so this is safe to use before those sections exist.
 */
export function useScrollSpy(hrefs: string[]) {
  const [activeHref, setActiveHref] = useState<string | null>(null);

  useEffect(() => {
    const sections = hrefs
      .map((href) => ({ href, el: document.querySelector(href) }))
      .filter(
        (entry): entry is { href: string; el: Element } => entry.el !== null,
      );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const match = sections.find((section) => section.el === entry.target);
          if (match) setActiveHref(match.href);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach(({ el }) => observer.observe(el));
    return () => observer.disconnect();
  }, [hrefs]);

  return activeHref;
}
