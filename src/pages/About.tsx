import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, Compass, Eye, Gem } from "lucide-react";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import { Reveal, SectionHeading, CountUp } from "../components/Reveal";
import SEO, { breadcrumbSchema } from "../components/SEO";
import { useLang } from "../i18n/LanguageContext";
import { IMAGES, SITE } from "../config";

const VALUE_ICONS = [Compass, Eye, Gem];

export default function About() {
  const { t, isRTL } = useLang();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const about = t.pages.about;

  return (
    <>
      <SEO
        title={`${about.title} | ${SITE.name}`}
        description={about.subtitle}
        image={IMAGES.pageHero.about}
        path="/about"
        jsonLd={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: about.title, path: "/about" }])]}
      />

      <PageHero
        title={about.title}
        subtitle={about.subtitle}
        image={IMAGES.pageHero.about}
        alt="International cargo vessel at a modern port"
        crumbs={[{ label: about.title }]}
      />

      {/* Story */}
      <section className="section-pad bg-white">
        <div className="container-site grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-3xl shadow-2xl shadow-navy-950/20">
              <img
                src={IMAGES.about.port}
                alt="Container terminal with cranes handling international cargo"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -top-6 start-6 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-2xl shadow-navy-950/15">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white">
                <CheckCircle2 size={20} />
              </span>
              <span className="max-w-[10rem] text-xs font-extrabold text-navy-900">
                {t.aboutPreview.points[0]}
              </span>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading align="start" eyebrow={about.storyEyebrow} title={about.storyTitle} />
            <Reveal delay={120}>
              <p className="mt-5 leading-relaxed text-slate-500">{about.p1}</p>
              <p className="mt-4 leading-relaxed text-slate-500">{about.p2}</p>
              <ul className="mt-7 grid gap-3.5 sm:grid-cols-2">
                {about.points.map((p: string, i: number) => (
                  <li key={i} className="flex items-start gap-2.5 rounded-xl bg-mist px-4 py-3 text-sm font-bold text-navy-900">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-brand-600" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section-pad bg-mist">
        <div className="container-site">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { title: about.missionTitle, text: about.missionText },
              { title: about.visionTitle, text: about.visionText },
              { title: about.valuesTitle, text: about.valuesText },
            ].map((item, i) => {
              const Icon = VALUE_ICONS[i];
              return (
                <Reveal key={i} delay={i * 120}>
                  <div className="group relative h-full overflow-hidden rounded-2xl bg-navy-950 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy-950/30">
                    <span className="absolute -top-10 -end-10 h-28 w-28 rounded-full bg-brand-600/15 transition-transform duration-500 group-hover:scale-150" />
                    <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white shadow-lg shadow-brand-600/30">
                      <Icon size={22} />
                    </span>
                    <h3 className="relative mt-6 text-xl font-extrabold text-white">{item.title}</h3>
                    <p className="relative mt-3 text-sm leading-relaxed text-navy-200">{item.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative bg-navy-950">
        <div className="container-site grid grid-cols-2 gap-x-6 gap-y-10 py-14 lg:grid-cols-4">
          {t.stats.items.map((s: { value: number; suffix: string; label: string }, i: number) => (
            <Reveal key={i} delay={i * 90} className="text-center">
              <div className="text-4xl font-extrabold text-white lg:text-5xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </div>
              <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-brand-600" />
              <div className="mt-3 text-[11px] font-extrabold tracking-widest text-navy-300 uppercase lg:text-xs">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-site">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">{about.ctaTitle}</h2>
            <p className="mt-4 text-slate-500">{about.ctaText}</p>
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
