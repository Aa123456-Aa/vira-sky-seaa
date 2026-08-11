import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Anchor,
  CheckCircle2,
  Headset,
  Mail,
  Phone,
} from "lucide-react";
import PageHero from "../components/PageHero";
import QuoteForm from "../components/QuoteForm";
import { Reveal, SectionHeading } from "../components/Reveal";
import SEO, { breadcrumbSchema } from "../components/SEO";
import { useLang } from "../i18n/LanguageContext";
import { localizeNumber } from "../utils/numbers";
import { SITE } from "../config";
import { servicesData } from "../data/services";
import NotFound from "./NotFound";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang, isRTL } = useLang();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const services = servicesData[lang];
  const service = services.find((s) => s.slug === slug);

  if (!service) return <NotFound />;

  const Icon = service.icon;
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <SEO
        title={`${service.title} | ${SITE.name}`}
        description={service.short}
        image={service.image}
        path={`/services/${service.slug}`}
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: t.nav.services, path: "/services" },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.short,
            serviceType: service.title,
            provider: {
              "@type": "Organization",
              name: SITE.name,
              url: SITE.url,
            },
            areaServed: "Worldwide",
            availableLanguage: ["en", "fa"],
          },
        ]}
      />

      <PageHero
        title={service.title}
        subtitle={service.tagline}
        image={service.image}
        alt={service.alt}
        crumbs={[{ label: t.nav.services, to: "/services" }, { label: service.title }]}
      />

      {/* Overview + sidebar */}
      <section className="section-pad bg-white">
        <div className="container-site grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Reveal>
              <span className="eyebrow">{t.services.overviewLabel}</span>
              <h2 className="mt-4 text-2xl font-extrabold text-navy-900 sm:text-3xl">{service.title}</h2>
              <div className="mt-5 space-y-4 leading-relaxed text-slate-500">
                {service.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>

            {/* Features */}
            <Reveal className="mt-12">
              <h3 className="flex items-center gap-2 text-xl font-extrabold text-navy-900">
                <span className="h-6 w-1.5 rounded-full bg-brand-600" />
                {t.services.featuresLabel}
              </h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {service.features.map((f, i) => (
                  <div
                    key={i}
                    className="group rounded-2xl border border-slate-100 bg-mist p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:bg-white hover:shadow-lg"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-brand-600" />
                      <div>
                        <h4 className="font-extrabold text-navy-900">{f.title}</h4>
                        <p className="mt-1 text-sm leading-relaxed text-slate-500">{f.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Ports */}
            {service.ports && (
              <Reveal className="mt-12">
                <div className="rounded-3xl bg-navy-950 p-8 sm:p-10">
                  <h3 className="flex items-center gap-3 text-xl font-extrabold text-white">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white">
                      <Anchor size={20} />
                    </span>
                    {t.services.portsLabel}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-navy-200">
                    {t.services.portsText}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {service.ports.map((port) => (
                      <span
                        key={port}
                        className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-bold text-white transition hover:border-brand-500 hover:bg-brand-600"
                      >
                        {port}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

            {/* Benefits */}
            <Reveal className="mt-12">
              <h3 className="flex items-center gap-2 text-xl font-extrabold text-navy-900">
                <span className="h-6 w-1.5 rounded-full bg-brand-600" />
                {t.services.benefitsLabel}
              </h3>
              <ul className="mt-6 grid gap-3.5 sm:grid-cols-2">
                {service.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 rounded-xl bg-mist px-4 py-3.5 font-semibold text-navy-900">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-600" />
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <div className="overflow-hidden rounded-2xl bg-navy-950 p-7 text-white">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 shadow-lg shadow-brand-600/30">
                  <Icon size={26} />
                </span>
                <h3 className="mt-5 text-xl font-extrabold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-200">{service.tagline}</p>
                <Link to="/quote" className="btn btn-red mt-6 w-full px-6 py-3.5 text-sm">
                  {t.services.requestQuote}
                </Link>
                <div className="mt-6 space-y-3 border-t border-white/10 pt-5 text-sm">
                  <a href={`mailto:${SITE.emailInfo}`} className="flex items-center gap-2.5 text-navy-100 transition hover:text-white">
                    <Mail size={15} className="text-brand-400" />
                    <span dir="ltr">{SITE.emailInfo}</span>
                  </a>
                  <a href={`tel:${SITE.phoneIntl[0]}`} className="flex items-center gap-2.5 text-navy-100 transition hover:text-white">
                    <Phone size={15} className="text-brand-400" />
                    <span dir="ltr">{localizeNumber(SITE.phones[0], lang)}</span>
                  </a>
                  <Link to="/contact" className="flex items-center gap-2.5 text-navy-100 transition hover:text-white">
                    <Headset size={15} className="text-brand-400" />
                    {t.nav.contact}
                  </Link>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="rounded-2xl border border-slate-100 bg-mist p-6">
                <h3 className="font-extrabold text-navy-900">{t.pages.serviceDetail.requestQuoteTitle}</h3>
                <p className="mt-2 text-sm text-slate-500">{t.pages.serviceDetail.requestQuoteText}</p>
                <Link to="/quote" className="btn btn-outline-navy mt-5 w-full px-6 py-3 text-sm">
                  {t.nav.quote}
                </Link>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* Quote form */}
      <section className="relative overflow-hidden bg-mist py-20">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="start"
              eyebrow={t.quote.eyebrow}
              title={t.pages.serviceDetail.requestQuoteTitle}
              subtitle={t.pages.serviceDetail.requestQuoteText}
            />
            <ul className="mt-8 space-y-3">
              {service.benefits.slice(0, 4).map((b, i) => (
                <li key={i} className="flex items-start gap-3 font-semibold text-navy-900">
                  <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-brand-600" />
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={140}>
            <QuoteForm />
          </Reveal>
        </div>
      </section>

      {/* Related */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <SectionHeading eyebrow={t.services.relatedLabel} title={t.services.relatedLabel} />
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {related.map((s, i) => {
              const RelIcon = s.icon;
              return (
                <Reveal key={s.slug} delay={i * 110}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy-950/15"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={s.image}
                        alt={s.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <span className="absolute bottom-3 start-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-navy-900 shadow-lg transition-colors group-hover:bg-brand-600 group-hover:text-white">
                        <RelIcon size={18} />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-extrabold text-navy-900 transition-colors group-hover:text-brand-600">
                        {s.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 flex-1 text-sm text-slate-500">{s.short}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-extrabold text-brand-600">
                        {t.services.learnMore}
                        <Arrow size={15} className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
