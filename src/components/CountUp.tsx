"use client";

import { useEffect, useRef, useState } from "react";

// Animates the numeric part of a stat like "20M+", "1.7M+" or "30%" when it scrolls into view.
// `delay` lets the count start after any fade-in, so visitors actually see it run.
export default function CountUp({
  value,
  duration = 2000,
  delay = 0,
}: {
  value: string;
  duration?: number;
  delay?: number;
}) {
  const match = value.match(/^([\d.]+)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const decimals = match?.[1].includes(".") ? match[1].split(".")[1].length : 0;

  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const node = ref.current;
    if (!node || !match) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        let start: number | undefined;
        const tick = (now: number) => {
          start ??= now;
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(`${(target * eased).toFixed(decimals)}${suffix}`);
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        setDisplay(`${(0).toFixed(decimals)}${suffix}`);
        timer = setTimeout(() => {
          frame = requestAnimationFrame(tick);
        }, delay);
      },
      { threshold: 0.5 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration, delay]);

  return (
    <span ref={ref} aria-label={value}>
      {display}
    </span>
  );
}
