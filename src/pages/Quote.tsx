import { CheckCircle2, Clock3, Headset, ShieldCheck } from "lucide-react";
import PageHero from "../components/PageHero";
import QuoteForm from "../components/QuoteForm";
import { Reveal, SectionHeading } from "../components/Reveal";
import SEO, { breadcrumbSchema } from "../components/SEO";
import { useLang } from "../i18n/LanguageContext";
import { IMAGES, SITE } from "../config";

export default function Quote() {
  const { t, lang } = useLang();
  const page = t.pages.quote;
  const perks = [
    { icon: Clock3, text: lang === "fa" ? "پاسخگویی سریع" : "Fast response" },
    { icon: ShieldCheck, text: lang === "fa" ? "حمل امن" : "Secure handling" },
    { icon: Headset, text: lang === "fa" ? "پشتیبانی تخصصی" : "Expert support" },
  ];

  return (
    <>
      <SEO
        title={`${page.title} | ${SITE.name}`}
        description={page.subtitle}
        image={IMAGES.pageHero.quote}
        path="/quote"
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: page.title, path: "/quote" },
          ]),
        ]}
      />

      <PageHero
        title={page.title}
        subtitle={page.subtitle}
        image={IMAGES.pageHero.quote}
        alt="Port cranes and container ship at night"
        crumbs={[{ label: page.title }]}
      />

      <section className="section-pad bg-mist">
        <div className="container-site grid items-start gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeading
              align="start"
              eyebrow={t.quote.eyebrow}
              title={t.quote.title}
              subtitle={t.quote.subtitle}
            />
            <Reveal delay={100}>
              <ul className="mt-8 space-y-4">
                {t.aboutPreview.points.map((p: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 font-semibold text-navy-900">
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-brand-600" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-wrap gap-4">
                {perks.map(({ icon: Icon, text }, i) => (
                  <span key={i} className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-extrabold text-navy-900 shadow-sm">
                    <Icon size={15} className="text-brand-600" />
                    {text}
                  </span>
                ))}
              </div>
              <p className="mt-9 rounded-2xl border border-navy-100 bg-navy-50 px-5 py-4 text-sm font-semibold text-navy-900">
                {t.quote.note}
              </p>
            </Reveal>
          </div>
          <Reveal delay={140} className="lg:col-span-3">
            <QuoteForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
