import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CalendarDays, CheckCircle2, Clock3 } from "lucide-react";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import QuoteForm from "../components/QuoteForm";
import { Reveal } from "../components/Reveal";
import SEO, { breadcrumbSchema } from "../components/SEO";
import { useLang } from "../i18n/LanguageContext";
import { localizeNumber } from "../utils/numbers";
import { SITE } from "../config";
import { blogData } from "../data/blog";
import NotFound from "./NotFound";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang, isRTL } = useLang();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const posts = blogData[lang];
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <NotFound />;

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <SEO
        title={`${post.title} | ${SITE.name}`}
        description={post.excerpt}
        image={post.image}
        path={`/blog/${post.slug}`}
        type="article"
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: t.nav.blog, path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: post.image,
            datePublished: post.date,
            inLanguage: lang,
            author: { "@type": "Organization", name: SITE.name },
            publisher: { "@type": "Organization", name: SITE.name },
            mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
          },
        ]}
      />

      <PageHero
        title={post.title}
        subtitle={post.excerpt}
        image={post.image}
        alt={post.alt}
        crumbs={[{ label: t.nav.blog, to: "/blog" }, { label: post.category }]}
      />

      <article className="section-pad bg-white">
        <div className="container-site max-w-4xl">
          <Reveal>
            <div className="flex flex-wrap items-center gap-4 border-b border-slate-100 pb-6 text-sm font-semibold text-slate-500">
              <span className="rounded-full bg-brand-600/10 px-4 py-1.5 font-extrabold text-brand-600">
                {post.category}
              </span>
              <span className="flex items-center gap-2">
                <CalendarDays size={15} className="text-brand-600" /> {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock3 size={15} className="text-brand-600" /> {localizeNumber(post.readTime, lang)} {t.blog.minRead}
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="prose-slate mt-8 space-y-5 leading-relaxed text-slate-600">
              {post.content.map((p, i) => (
                <p key={i} className={i === 0 ? "text-lg text-slate-700" : ""}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-10 rounded-2xl border border-navy-100 bg-mist p-7">
              <h3 className="text-lg font-extrabold text-navy-900">{post.title}</h3>
              <ul className="mt-4 space-y-3">
                {post.keyPoints.map((k, i) => (
                  <li key={i} className="flex items-start gap-3 font-semibold text-navy-900">
                    <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-brand-600" />
                    {k}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 flex items-center justify-between">
              <Link to="/blog" className="btn btn-outline-navy px-6 py-3 text-sm">
                <Arrow size={16} className="rotate-180 rtl:rotate-0" />
                {t.blog.backToBlog}
              </Link>
            </div>
          </Reveal>
        </div>
      </article>

      {/* Quote form */}
      <section className="bg-mist py-20">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-navy-900">{t.cta.title}</h2>
            <p className="mt-4 text-slate-500">{t.cta.text}</p>
            <ul className="mt-7 space-y-3">
              {t.aboutPreview.points.map((p: string, i: number) => (
                <li key={i} className="flex items-start gap-3 font-semibold text-navy-900">
                  <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-brand-600" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={130}>
            <QuoteForm />
          </Reveal>
        </div>
      </section>

      {/* Related */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <h2 className="text-center text-2xl font-extrabold text-navy-900 sm:text-3xl">
            {t.pages.blogPost.relatedTitle}
          </h2>
          <div className="mt-10 grid gap-7 md:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 110}>
                <Link
                  to={`/blog/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy-950/15"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-3 start-3 rounded-full bg-navy-900/85 px-3 py-1 text-[10px] font-extrabold uppercase text-white">
                      {p.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-extrabold leading-snug text-navy-900 transition-colors group-hover:text-brand-600">
                      {p.title}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-extrabold text-brand-600">
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

      <CTASection />
    </>
  );
}
