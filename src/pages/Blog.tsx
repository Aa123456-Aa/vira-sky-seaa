import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import { Reveal, SectionHeading } from "../components/Reveal";
import SEO, { breadcrumbSchema } from "../components/SEO";
import { useLang } from "../i18n/LanguageContext";
import { localizeNumber } from "../utils/numbers";
import { IMAGES, SITE } from "../config";
import { blogData } from "../data/blog";

export default function Blog() {
  const { t, lang, isRTL } = useLang();
  const posts = blogData[lang];
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const page = t.pages.blogPage;

  const allLabel = lang === "fa" ? "همه" : "All";
  const categories = useMemo(
    () => [allLabel, ...Array.from(new Set(posts.map((p) => p.category)))],
    [posts, allLabel]
  );
  const [activeCat, setActiveCat] = useState(allLabel);

  const filtered = activeCat === allLabel ? posts : posts.filter((p) => p.category === activeCat);
  const [featured, ...rest] = filtered;

  return (
    <>
      <SEO
        title={`${page.title} | ${SITE.name}`}
        description={page.subtitle}
        image={IMAGES.pageHero.blog}
        path="/blog"
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: page.title, path: "/blog" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            name: page.title,
            url: `${SITE.url}/blog`,
            blogPost: posts.map((p) => ({ "@type": "BlogPosting", headline: p.title, url: `${SITE.url}/blog/${p.slug}` })),
          },
        ]}
      />

      <PageHero
        title={page.title}
        subtitle={page.subtitle}
        image={IMAGES.pageHero.blog}
        alt="Colorful shipping containers at an international port"
        crumbs={[{ label: page.title }]}
      />

      <section className="section-pad bg-mist">
        <div className="container-site">
          {/* Category filter */}
          <Reveal className="mb-12 flex flex-wrap items-center justify-center gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`cursor-pointer rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                  activeCat === cat
                    ? "bg-navy-900 text-white shadow-lg shadow-navy-900/25"
                    : "bg-white text-navy-900 shadow-sm hover:bg-navy-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </Reveal>

          {/* Featured */}
          {featured && (
            <Reveal>
              <Link
                to={`/blog/${featured.slug}`}
                className="group grid overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-lg shadow-navy-950/10 transition-all duration-300 hover:shadow-2xl hover:shadow-navy-950/20 lg:grid-cols-2"
              >
                <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
                  <img
                    src={featured.image}
                    alt={featured.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute top-4 start-4 rounded-full bg-brand-600 px-3.5 py-1.5 text-[10px] font-extrabold tracking-widest text-white uppercase">
                    {t.blog.featured}
                  </span>
                </div>
                <div className="flex flex-col justify-center p-7 lg:p-12">
                  <div className="flex items-center gap-3 text-xs font-semibold text-slate-400">
                    <span className="rounded-full bg-navy-50 px-3 py-1 font-extrabold text-navy-900">
                      {featured.category}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={13} /> {featured.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock3 size={13} /> {localizeNumber(featured.readTime, lang)} {t.blog.minRead}
                    </span>
                  </div>
                  <h2 className="mt-5 text-2xl font-extrabold leading-snug text-navy-900 transition-colors group-hover:text-brand-600 sm:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-slate-500">{featured.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-brand-600">
                    {t.blog.readMore}
                    <Arrow size={16} className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          )}

          {/* Grid */}
          <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 100}>
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
                    <span className="absolute top-3 start-3 rounded-full bg-navy-900/85 px-3 py-1 text-[10px] font-extrabold tracking-wide text-white uppercase backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                      <span className="flex items-center gap-1.5"><CalendarDays size={12} /> {post.date}</span>
                      <span className="h-1 w-1 rounded-full bg-slate-300" />
                      <span className="flex items-center gap-1.5"><Clock3 size={12} /> {localizeNumber(post.readTime, lang)} {t.blog.minRead}</span>
                    </div>
                    <h3 className="mt-3 text-lg font-extrabold leading-snug text-navy-900 transition-colors group-hover:text-brand-600">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-slate-500">{post.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-extrabold text-brand-600">
                      {t.blog.readMore}
                      <Arrow size={15} className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-center">
        <SectionHeading eyebrow={t.blog.eyebrow} title={t.cta.title} subtitle={t.cta.text} />
        <Reveal className="mt-8">
          <Link to="/quote" className="btn btn-red px-8 py-4 text-sm">
            {t.cta.button1}
            <Arrow size={16} className="rtl:rotate-180" />
          </Link>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
