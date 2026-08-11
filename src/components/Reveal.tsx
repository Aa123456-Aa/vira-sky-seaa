import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { useLang } from "../i18n/LanguageContext";
import { localizeNumber } from "../utils/numbers";

/** Fade-up scroll reveal wrapper powered by IntersectionObserver. */
export function Reveal({
  children,
  delay = 0,
  className = "",
  style,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "reveal-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}

/** Eyebrow badge + title + subtitle block used across sections. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "start";
  light?: boolean;
  className?: string;
}) {
  const centered = align === "center";
  return (
    <Reveal className={`${centered ? "mx-auto text-center" : "text-start"} max-w-3xl ${className}`}>
      {eyebrow && (
        <span className={`eyebrow ${centered ? "" : ""} ${light ? "bg-white/10 text-brand-400" : ""}`}>
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? "text-navy-200" : "text-slate-500"}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

/** Animated counter that starts when scrolled into view. */
export function CountUp({
  value,
  suffix = "",
  duration = 1600,
  className = "",
}: {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);
  const { lang } = useLang();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplay(Math.round(eased * value));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {localizeNumber(display, lang)}
      {suffix ? localizeNumber(suffix, lang) : ""}
    </span>
  );
}
