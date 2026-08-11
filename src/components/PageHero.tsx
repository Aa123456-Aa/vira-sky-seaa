import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import { Reveal } from "./Reveal";

export interface Crumb {
  label: string;
  to?: string;
}

export default function PageHero({
  title,
  subtitle,
  image,
  alt,
  crumbs,
}: {
  title: string;
  subtitle?: string;
  image: string;
  alt: string;
  crumbs: Crumb[];
}) {
  const { t, isRTL } = useLang();
  const Next = isRTL ? ChevronRight : ChevronLeft;

  return (
    <section className="relative overflow-hidden bg-navy-950">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/85 to-navy-900/60 rtl:bg-gradient-to-l" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-950/60 to-transparent" />

      <div className="container-site relative flex min-h-[300px] flex-col justify-end pb-10 pt-32 sm:min-h-[340px] lg:min-h-[380px] lg:pt-36">
        <Reveal>
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1.5 text-xs font-semibold text-navy-200">
            <Link to="/" className="transition hover:text-white">{t.pages.breadcrumb.home}</Link>
            {crumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <Next size={13} className="opacity-60" />
                {crumb.to ? (
                  <Link to={crumb.to} className="transition hover:text-white">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-brand-400">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
          <h1 className="max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {subtitle && <p className="mt-4 max-w-2xl text-sm leading-relaxed text-navy-200 sm:text-base">{subtitle}</p>}
        </Reveal>
      </div>
    </section>
  );
}
