import { LOGO } from "../config";
import { useLang } from "../i18n/LanguageContext";

/**
 * Brand logo placeholder — larger and more prominent.
 * To use the real logo later: set LOGO.image in src/config.ts
 * (e.g. "img/logo.png") — the layout stays unchanged.
 */
export default function Logo({ light = false, size = "md" }: { light?: boolean; size?: "md" | "lg" }) {
  const { lang } = useLang();
  const isFa = lang === "fa";

  const brand = isFa ? "ویرا آسمان دریا" : "Vira Sky Sea";
  const sub = isFa ? "حمل‌ونقل بین‌المللی" : "International Transportation";
  const co = isFa ? "" : "Co.";

  if (LOGO.image) {
    return (
      <img
        src={LOGO.image}
        alt={LOGO.alt}
        className={size === "lg" ? "h-20 w-auto lg:h-24" : "h-20 w-auto lg:h-22"}
        loading="eager"
      />
    );
  }

  const mark =
    size === "lg" ? "h-14 w-14 lg:h-16 lg:w-16" : "h-12 w-12 lg:h-14 lg:w-14";
  const markSvg = size === "lg" ? "h-9 w-9 lg:h-10 lg:w-10" : "h-8 w-8 lg:h-9 lg:w-9";
  const brandCls = isFa
    ? "text-base sm:text-lg lg:text-xl"
    : "text-lg sm:text-xl lg:text-2xl";
  const subCls = isFa ? "text-[11px] lg:text-xs" : "text-[10px] sm:text-[11px] lg:text-xs";

  return (
    <a href="#/" className="group flex items-center gap-3 whitespace-nowrap" aria-label={`${brand} ${co}`}>
      {/* Mark */}
      <span
        className={`relative flex ${mark} shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-navy-800 to-navy-950 shadow-lg shadow-navy-900/25 transition-transform duration-300 group-hover:scale-105`}
      >
        <svg viewBox="0 0 64 64" className={markSvg} aria-hidden="true">
          <path d="M15 16h13l4 12 4-12h13L33 50H31z" fill="#ffffff" />
          <path d="M18 52h28" stroke="#d4202e" strokeWidth="4" strokeLinecap="round" />
        </svg>
        <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-brand-600" />
      </span>
      {/* Wordmark */}
      <span className="flex flex-col leading-none">
        <span
          className={`font-extrabold tracking-tight ${light ? "text-white" : "text-navy-900"} ${brandCls}`}
        >
          {brand}
          <span className="text-brand-600"> {co}</span>
        </span>
        <span
          className={`mt-1.5 font-bold uppercase ${light ? "text-navy-200" : "text-slate-400"} ${
            isFa ? "tracking-normal" : "tracking-[0.18em]"
          } ${subCls}`}
        >
          {sub}
        </span>
      </span>
    </a>
  );
}
