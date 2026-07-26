"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/content/stats";

function formatValue(value: number, format: "locale" | "plain" | "year") {
  if (format === "locale") return value.toLocaleString("pt-BR");
  return String(value);
}

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function StatItem({
  value,
  label,
  format,
  start,
}: {
  value: number;
  label: string;
  format: "locale" | "plain" | "year";
  start: boolean;
}) {
  const [current, setCurrent] = useState(format === "year" ? value : 0);

  useEffect(() => {
    if (!start) return;

    let frame = 0;

    if (format === "year" || prefersReducedMotion()) {
      frame = requestAnimationFrame(() => setCurrent(value));
      return () => cancelAnimationFrame(frame);
    }

    const duration = 1400;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, value, format]);

  return (
    <div className="text-center">
      <p className="type-stat">{formatValue(current, format)}</p>
      <p className="type-meta mt-2">{label}</p>
    </div>
  );
}

export function AnimatedStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4 md:gap-x-8 md:gap-y-6">
      {stats.map((stat) => (
        <StatItem
          key={stat.label}
          value={stat.value}
          label={stat.label}
          format={stat.format}
          start={start}
        />
      ))}
    </div>
  );
}
