import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Briefcase,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Globe,
  HeartHandshake,
  Layers,
  Mail,
  PackageCheck,
  Phone,
  ShieldCheck,
  Truck,
} from "lucide-react";
import HeroSwiper from "../components/HeroSwiper";
import ServicesSwiper from "../components/ServicesSwiper";
import PartnersSwiper from "../components/PartnersSwiper";
import QuoteForm from "../components/QuoteForm";
import { Reveal, SectionHeading, CountUp } from "../components/Reveal";
import SEO, { breadcrumbSchema } from "../components/SEO";
import { useLang } from "../i18n/LanguageContext";
import { localizeNumber } from "../utils/numbers";
import { IMAGES, SITE } from "../config";
import { blogData } from "../data/blog";
import { InstagramIcon } from "../components/icons";

const WHY_ICONS = [Award, Globe, HeartHandshake, Briefcase, ShieldCheck, Layers];
const STEP_ICONS = [FileText, ClipboardCheck, Truck, PackageCheck];

export default function Home() {
  const { t, lang, isRTL } = useLang();
  const posts = blogData[lang].slice(0, 3);
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <>
      <SEO
        title={t.meta.title}
        description={t.meta.description}
        image={IMAGES.hero.ocean}
        path="/"
        jsonLd={[breadcrumbSchema([{ name: "Home", path: "/" }])]}
      />

      {/* 1 — Hero */}
      <HeroSwiper />

      {/* 2 — Stats */}
      <section className="relative bg-navy-950">
        <div className="container-site grid grid-cols-2 gap-x-6 gap-y-10 py-12 lg:grid-cols-4 lg:py-16">
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

      {/* 3 — Services */}
      <section className="section-pad bg-mist">
        <div className="container-site">
          <SectionHeading
            eyebrow={t.services.eyebrow}
            title={t.services.title}
            subtitle={t.services.subtitle}
          />
          <Reveal className="mt-12" delay={100}>
            <ServicesSwiper />
          </Reveal>
          <Reveal className="mt-10 text-center">
            <Link to="/services" className="btn btn-navy px-8 py-3.5 text-sm">
              {t.services.viewAll}
              <Arrow size={16} className="rtl:rotate-180" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 4 — About preview */}
      <section className="section-pad overflow-hidden bg-white">
        <div className="container-site grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-navy-950/20">
              <img
                src={IMAGES.about.story}
                alt="Vira Sky Sea Co logistics team planning international transportation"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
            </div>
            <div className="absolute -bottom-7 end-6 flex items-center gap-4 rounded-2xl bg-navy-900 px-6 py-5 text-white shadow-2xl shadow-navy-950/40">
              <span className="text-4xl font-extrabold text-brand-500">
                {t.aboutPreview.experienceYears}
              </span>
              <span className="max-w-[9rem] text-xs font-bold leading-snug">
                {t.aboutPreview.experienceLabel}
              </span>
            </div>
          </Reveal>

          <div>
            <SectionHeading align="start" eyebrow={t.aboutPreview.eyebrow} title={t.aboutPreview.title} />
            <Reveal delay={120}>
              <p className="mt-5 leading-relaxed text-slate-500">{t.aboutPreview.p1}</p>
              <p className="mt-4 leading-relaxed text-slate-500">{t.aboutPreview.p2}</p>
              <ul className="mt-7 space-y-3.5">
                {t.aboutPreview.points.map((p: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 font-semibold text-navy-900">
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-brand-600" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn btn-red mt-9 px-8 py-3.5 text-sm">
                {t.aboutPreview.cta}
                <Arrow size={16} className="rtl:rotate-180" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5 — Why choose us */}
      <section className="relative overflow-hidden bg-navy-950 py-20 lg:py-24">
        <div className="pointer-events-none absolute -top-24 start-1/3 h-80 w-80 rounded-full bg-brand-600/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 end-1/4 h-96 w-96 rounded-full bg-navy-500/15 blur-3xl" />
        <div className="container-site relative">
          <SectionHeading light eyebrow={t.why.eyebrow} title={t.why.title} subtitle={t.why.subtitle} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.why.items.map((item: { title: string; text: string }, i: number) => {
              const Icon = WHY_ICONS[i % WHY_ICONS.length];
              return (
                <Reveal key={i} delay={(i % 3) * 110}>
                  <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:bg-white/10">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white shadow-lg shadow-brand-600/30 transition-transform duration-300 group-hover:scale-110">
                      <Icon size={22} />
                    </span>
                    <h3 className="mt-5 text-lg font-extrabold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-200">{item.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6 — Process */}
      <section className="section-pad bg-mist">
        <div className="container-site">
          <SectionHeading eyebrow={t.process.eyebrow} title={t.process.title} subtitle={t.process.subtitle} />
          <div className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="absolute top-6 end-[12%] start-[12%] hidden h-0.5 bg-gradient-to-r from-navy-200 via-brand-500 to-navy-200 lg:block" />
            {t.process.steps.map((step: { title: string; text: string }, i: number) => {
              const Icon = STEP_ICONS[i % STEP_ICONS.length];
              return (
                <Reveal key={i} delay={i * 120} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 text-white shadow-xl shadow-navy-900/30">
                      <Icon size={20} />
                      <span className="absolute -top-1.5 -end-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-[11px] font-extrabold">
                        {localizeNumber(i + 1, lang)}
                      </span>
                    </span>
                    <h3 className="mt-5 text-lg font-extrabold text-navy-900">{step.title}</h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-500">{step.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7 — Partners */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <SectionHeading eyebrow={t.partners.eyebrow} title={t.partners.title} subtitle={t.partners.subtitle} />
          <Reveal className="mt-12" delay={100}>
            <PartnersSwiper />
          </Reveal>
        </div>
      </section>

      {/* 8 — Quote */}
      <section className="relative overflow-hidden py-20 lg:py-24">
        <img
          src={IMAGES.cta}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy-950/92" />
        <div className="container-site relative grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow bg-white/10 text-brand-400">{t.quote.eyebrow}</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {t.quote.title}
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-navy-200">{t.quote.subtitle}</p>
            <ul className="mt-8 space-y-4">
              <li>
                <a href={`mailto:${SITE.emailInfo}`} className="group flex items-center gap-3 text-navy-100 transition hover:text-white">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-brand-400">
                    <Mail size={17} />
                  </span>
                  <span className="font-bold" dir="ltr">{SITE.emailInfo}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phoneIntl[0]}`} className="group flex items-center gap-3 text-navy-100 transition hover:text-white">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-brand-400">
                    <Phone size={17} />
                  </span>
                  <span className="font-bold" dir="ltr">{localizeNumber(SITE.phones[0], lang)}</span>
                </a>
              </li>
              <li>
                <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-navy-100 transition hover:text-white">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-brand-400">
                    <InstagramIcon size={17} />
                  </span>
                  <span className="font-bold" dir="ltr">@{SITE.instagramHandle}</span>
                </a>
              </li>
            </ul>
          </Reveal>
          <Reveal delay={150}>
            <QuoteForm />
          </Reveal>
        </div>
      </section>

      {/* 9 — Blog preview */}
      <section className="section-pad bg-mist">
        <div className="container-site">
          <SectionHeading eyebrow={t.blog.eyebrow} title={t.blog.title} subtitle={t.blog.subtitle} />
          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 120}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy-950/15"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-3 start-3 rounded-full bg-brand-600 px-3 py-1 text-[10px] font-extrabold tracking-wide text-white uppercase">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                      <span>{post.date}</span>
                      <span className="h-1 w-1 rounded-full bg-slate-300" />
                      <span>{localizeNumber(post.readTime, lang)} {t.blog.minRead}</span>
                    </div>
                    <h3 className="mt-3 text-lg font-extrabold leading-snug text-navy-900 transition-colors group-hover:text-brand-600">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-slate-500">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-extrabold text-brand-600">
                      {t.blog.readMore}
                      <Arrow size={15} className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link to="/blog" className="btn btn-outline-navy px-8 py-3.5 text-sm">
              {t.blog.allPosts}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
