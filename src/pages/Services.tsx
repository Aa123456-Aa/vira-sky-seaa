import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import { Reveal, SectionHeading } from "../components/Reveal";
import SEO, { breadcrumbSchema } from "../components/SEO";
import { useLang } from "../i18n/LanguageContext";
import { IMAGES, SITE } from "../config";
import { servicesData } from "../data/services";

export default function Services() {
  const { t, lang, isRTL } = useLang();
  const services = servicesData[lang];
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const page = t.pages.services;

  return (
    <>
      <SEO
        title={`${page.title} | ${SITE.name}`}
        description={page.subtitle}
        image={IMAGES.pageHero.services}
        path="/services"
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: page.title, path: "/services" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: page.title,
            itemListElement: services.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: s.title,
              url: `${SITE.url}/services/${s.slug}`,
            })),
          },
        ]}
      />

      <PageHero
        title={page.title}
        subtitle={page.subtitle}
        image={IMAGES.pageHero.services}
        alt="Container ship being unloaded at an international port"
        crumbs={[{ label: page.title }]}
      />

      <section className="section-pad bg-mist">
        <div className="container-site">
          <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} subtitle={t.services.subtitle} />
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.slug} delay={(i % 4) * 90}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy-950/15"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={s.image}
                        alt={s.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
                      <span className="absolute bottom-3 start-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-navy-900 shadow-lg transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                        <Icon size={20} />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-lg font-extrabold text-navy-900 transition-colors group-hover:text-brand-600">
                        {s.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-500">{s.short}</p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-extrabold text-brand-600">
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

      <section className="section-pad bg-white">
        <div className="container-site">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              {page.ctaTitle}
            </h2>
            <p className="mt-4 text-slate-500">{page.ctaText}</p>
            <Link to="/quote" className="btn btn-red mt-8 px-8 py-4 text-sm">
              {t.cta.button1}
              <Arrow size={16} className="rtl:rotate-180" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
