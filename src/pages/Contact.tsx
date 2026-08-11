import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, User } from "lucide-react";
import PageHero from "../components/PageHero";
import QuoteForm from "../components/QuoteForm";
import { Reveal, SectionHeading } from "../components/Reveal";
import SEO, { breadcrumbSchema } from "../components/SEO";
import { useLang } from "../i18n/LanguageContext";
import { localizeNumber } from "../utils/numbers";
import { IMAGES, SITE } from "../config";
import { InstagramIcon, TelegramIcon, WhatsAppIcon } from "../components/icons";

export default function Contact() {
  const { t, lang } = useLang();
  const page = t.pages.contact;

  const cards = [
    {
      icon: Mail,
      title: page.emailTitle,
      lines: [SITE.emailInfo, SITE.emailCeo],
      href: `mailto:${SITE.emailInfo}`,
      ltr: true,
    },
    {
      icon: Phone,
      title: page.phoneTitle,
      lines: [localizeNumber(SITE.phones[0], lang), localizeNumber(SITE.phones[1], lang)],
      href: `tel:${SITE.phoneIntl[0]}`,
      ltr: true,
    },
    {
      icon: User,
      title: page.personTitle,
      lines: [SITE.contactPerson, localizeNumber(SITE.contactPersonPhone, lang)],
      href: `tel:${SITE.contactPersonPhoneRaw}`,
      ltr: false,
    },
  ];

  return (
    <>
      <SEO
        title={`${page.title} | ${SITE.name}`}
        description={page.subtitle}
        image={IMAGES.pageHero.contact}
        path="/contact"
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: page.title, path: "/contact" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: page.title,
            url: `${SITE.url}/contact`,
          },
        ]}
      />

      <PageHero
        title={page.title}
        subtitle={page.subtitle}
        image={IMAGES.pageHero.contact}
        alt="Container ship and cranes at an international port at sunset"
        crumbs={[{ label: page.title }]}
      />

      {/* Info cards */}
      <section className="section-pad bg-mist">
        <div className="container-site">
          <SectionHeading eyebrow={page.infoTitle} title={page.infoTitle} subtitle={page.formText} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <Reveal key={i} delay={i * 110}>
                  <a
                    href={card.href}
                    className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy-950/15"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-white transition-colors group-hover:bg-brand-600">
                      <Icon size={22} />
                    </span>
                    <h3 className="mt-5 text-lg font-extrabold text-navy-900">{card.title}</h3>
                    <div className="mt-2 space-y-1">
                      {card.lines.map((line) => (
                        <p key={line} className="text-sm font-semibold text-slate-500" dir={card.ltr ? "ltr" : undefined}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </a>
                </Reveal>
              );
            })}

            {/* Address card */}
            <Reveal delay={330}>
              <div className="flex h-full flex-col rounded-2xl border border-slate-100 bg-navy-950 p-7 text-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy-950/30">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <MapPin size={22} />
                </span>
                <h3 className="mt-5 text-lg font-extrabold">{page.addressTitle}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-200">
                  {page.addressLines}
                </p>
              </div>
            </Reveal>

            {/* Social card */}
            <Reveal delay={440}>
              <div className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy-950/15">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-white">
                  <InstagramIcon size={22} />
                </span>
                <h3 className="mt-5 text-lg font-extrabold text-navy-900">{page.socialTitle}</h3>
                <p className="mt-2 text-sm font-semibold text-slate-500" dir="ltr">
                  @{SITE.instagramHandle}
                </p>
                <div className="mt-4 flex items-center gap-3">
                  {[
                    { icon: InstagramIcon, href: SITE.instagramUrl, label: "Instagram" },
                    { icon: TelegramIcon, href: SITE.telegramUrl, label: "Telegram" },
                    { icon: WhatsAppIcon, href: SITE.whatsappUrl, label: "WhatsApp" },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-50 text-navy-900 transition hover:bg-brand-600 hover:text-white"
                    >
                      <Icon size={17} />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Form + map */}
      <section className="section-pad bg-white">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading align="start" eyebrow={page.formTitle} title={page.formTitle} subtitle={page.formText} />
            <Reveal className="mt-8" delay={100}>
              <QuoteForm />
            </Reveal>
          </div>
          <div>
            <SectionHeading align="start" eyebrow={page.mapTitle} title={page.mapTitle} subtitle={page.addressLines} />
            <Reveal className="mt-8" delay={120}>
              <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-lg shadow-navy-950/10">
                <iframe
                  title="Vira Sky Sea Co office location — Tehran, Iran"
                  src={SITE.mapEmbed}
                  className="h-[420px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/quote" className="btn btn-red px-7 py-3.5 text-sm">
                  {t.nav.quote}
                </Link>
                <a href={`mailto:${SITE.emailCeo}`} className="btn btn-outline-navy px-7 py-3.5 text-sm">
                  {SITE.emailCeo}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
