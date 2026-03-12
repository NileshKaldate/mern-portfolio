import { useEffect, useRef } from "react";

type Options = {
  threshold?: number;
  rootMargin?: string;
};

export const useReveal = (options: Options = {}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px", ...options }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [options]);

  return ref;
};
