import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, User } from "lucide-react";
import Logo from "./Logo";
import { SITE } from "../config";
import { useLang } from "../i18n/LanguageContext";
import { localizeNumber } from "../utils/numbers";
import { servicesData } from "../data/services";
import { InstagramIcon, TelegramIcon, WhatsAppIcon } from "./icons";

export default function Footer() {
  const { t, lang } = useLang();
  const year = new Date().getFullYear();
  const services = servicesData[lang];
  const address = t.pages.contact.addressLines;

  const socials = [
    { icon: InstagramIcon, href: SITE.instagramUrl, label: "Instagram" },
    { icon: TelegramIcon, href: SITE.telegramUrl, label: "Telegram" },
    { icon: WhatsAppIcon, href: SITE.whatsappUrl, label: "WhatsApp" },
  ];

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-navy-200">
      {/* decorative glow */}
      <div className="pointer-events-none absolute -top-32 start-1/4 h-72 w-72 rounded-full bg-brand-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 end-1/4 h-80 w-80 rounded-full bg-navy-500/10 blur-3xl" />

      <div className="container-site relative pt-16 pb-8 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-300">{t.footer.about}</p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-navy-100 transition hover:bg-brand-600 hover:text-white"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-extrabold tracking-widest text-white uppercase">
              {t.footer.quickTitle}
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { to: "/", label: t.nav.home },
                { to: "/about", label: t.nav.about },
                { to: "/services", label: t.nav.services },
                { to: "/blog", label: t.nav.blog },
                { to: "/contact", label: t.nav.contact },
                { to: "/quote", label: t.nav.quote },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="inline-flex items-center gap-2 text-navy-300 transition hover:text-white"
                  >
                    <span className="h-1 w-1 rounded-full bg-brand-500" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-extrabold tracking-widest text-white uppercase">
              {t.footer.servicesTitle}
            </h3>
            <ul className="mt-5 grid grid-cols-1 gap-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="inline-flex items-center gap-2 text-navy-300 transition hover:text-white"
                  >
                    <span className="h-1 w-1 rounded-full bg-brand-500" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-extrabold tracking-widest text-white uppercase">
              {t.footer.contactTitle}
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-brand-500" />
                <span className="flex flex-col gap-1">
                  <a href={`mailto:${SITE.emailInfo}`} className="text-navy-200 transition hover:text-white" dir="ltr">
                    {SITE.emailInfo}
                  </a>
                  <a href={`mailto:${SITE.emailCeo}`} className="text-navy-200 transition hover:text-white" dir="ltr">
                    {SITE.emailCeo}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-brand-500" />
                <span className="flex flex-col gap-1" dir="ltr">
                  <a href={`tel:${SITE.phoneIntl[0]}`} className="text-navy-200 transition hover:text-white">
                    {localizeNumber(SITE.phones[0], lang)}
                  </a>
                  <a href={`tel:${SITE.phoneIntl[1]}`} className="text-navy-200 transition hover:text-white">
                    {localizeNumber(SITE.phones[1], lang)}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <User size={16} className="mt-0.5 shrink-0 text-brand-500" />
                <span className="flex flex-col">
                  <span className="font-semibold text-white">{SITE.contactPerson}</span>
                  <a
                    href={`tel:${SITE.contactPersonPhoneRaw}`}
                    className="text-navy-200 transition hover:text-white"
                    dir="ltr"
                  >
                    {localizeNumber(SITE.contactPersonPhone, lang)}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand-500" />
                <span className="text-navy-300">{address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-xs text-navy-400 sm:flex-row">
          <p>
            © {localizeNumber(year, lang)}{" "}
            {lang === "fa" ? SITE.faName : SITE.name}. {t.footer.rights}
          </p>
          <p className="flex items-center gap-2" dir="ltr">
            <InstagramIcon size={12} className="text-brand-500" />
            @{SITE.instagramHandle}
          </p>
        </div>
      </div>
    </footer>
  );
}
