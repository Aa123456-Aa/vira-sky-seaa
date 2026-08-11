import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Globe, Mail, Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { SITE } from "../config";
import { useLang } from "../i18n/LanguageContext";
import { LANG_META, type Lang } from "../i18n";
import { localizeNumber } from "../utils/numbers";
import { servicesData } from "../data/services";
import { InstagramIcon, TelegramIcon, WhatsAppIcon } from "./icons";

const SOCIALS = [
  { icon: InstagramIcon, href: SITE.instagramUrl, label: "Instagram", handle: SITE.instagramHandle },
  { icon: TelegramIcon, href: SITE.telegramUrl, label: "Telegram", handle: "Telegram" },
  { icon: WhatsAppIcon, href: SITE.whatsappUrl, label: "WhatsApp", handle: "WhatsApp" },
];

function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition hover:bg-white/10"
        aria-label="Change language"
      >
        <Globe size={14} />
        <span>{LANG_META[lang].short}</span>
        <ChevronDown size={12} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="dropdown-in absolute end-0 top-full z-50 mt-2 w-36 overflow-hidden rounded-xl border border-slate-100 bg-white py-1 shadow-xl">
          {(Object.keys(LANG_META) as Lang[]).map((key) => (
            <button
              key={key}
              onClick={() => {
                setLang(key);
                setOpen(false);
              }}
              className={`flex w-full cursor-pointer items-center justify-between px-4 py-2.5 text-sm font-semibold transition hover:bg-navy-50 ${
                lang === key ? "text-brand-600" : "text-navy-900"
              }`}
            >
              <span>{LANG_META[key].label}</span>
              {lang === key && <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const { t, lang, setLang } = useLang();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const onHome = pathname === "/";
  const transparent = onHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const services = servicesData[lang];

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative rounded-full px-4 py-2 text-sm font-bold transition-colors duration-200 ${
      transparent
        ? isActive
          ? "text-white"
          : "text-white/80 hover:text-white"
        : isActive
          ? "text-brand-600"
          : "text-navy-900 hover:text-brand-600"
    }`;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          transparent ? "bg-transparent" : "bg-white/95 shadow-lg shadow-navy-950/5 backdrop-blur-md"
        }`}
      >
        {/* Top bar */}
        <div className={`hidden bg-navy-950/95 text-white/75 lg:block ${transparent ? "" : "border-b border-slate-100"}`}>
          <div className="container-site flex h-10 items-center justify-between text-xs">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5" dir="ltr">
                <Phone size={12} className="text-brand-500" />
                {localizeNumber(SITE.phones[0], lang)} &nbsp;•&nbsp;{" "}
                {localizeNumber(SITE.phones[1], lang)}
              </span>
              <a
                href={`mailto:${SITE.emailInfo}`}
                className="flex items-center gap-1.5 transition hover:text-white"
              >
                <Mail size={12} className="text-brand-500" />
                {SITE.emailInfo}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden text-white/50 xl:inline">{t.topbar.tagline}</span>
              <div className="flex items-center gap-2">
                {SOCIALS.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-6 w-6 items-center justify-center rounded-full transition hover:bg-brand-600 hover:text-white"
                  >
                    <Icon size={13} />
                  </a>
                ))}
              </div>
              <span className="h-4 w-px bg-white/15" />
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className="container-site flex h-[72px] items-center justify-between gap-4 lg:h-20">
          <Logo light={transparent} />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            <NavLink to="/" end className={navLinkClass}>
              {t.nav.home}
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              {t.nav.about}
            </NavLink>

            {/* Services dropdown */}
            <div className="group relative">
              <NavLink
                to="/services"
                className={`${navLinkClass} flex items-center gap-1`}
              >
                {t.nav.services}
                <ChevronDown
                  size={14}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
              </NavLink>
              <div className="invisible absolute start-1/2 top-full z-50 w-[620px] -translate-x-1/2 translate-y-3 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 rtl:translate-x-1/2">
                <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white p-3 shadow-2xl shadow-navy-950/15">
                  <div className="mb-1 flex items-center justify-between px-3 py-2">
                    <span className="text-xs font-extrabold tracking-widest text-slate-400 uppercase">
                      {t.nav.servicesLabel}
                    </span>
                    <Link
                      to="/services"
                      className="text-xs font-bold text-brand-600 hover:underline"
                    >
                      {t.nav.viewAllServices}
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    {services.map((s) => {
                      const Icon = s.icon;
                      return (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          className="group/item flex items-start gap-3 rounded-xl p-3 transition hover:bg-navy-50"
                        >
                          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-white transition group-hover/item:bg-brand-600">
                            <Icon size={17} />
                          </span>
                          <span>
                            <span className="block text-sm font-bold text-navy-900 group-hover/item:text-brand-600">
                              {s.title}
                            </span>
                            <span className="mt-0.5 line-clamp-1 block text-xs text-slate-400">
                              {s.tagline}
                            </span>
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <NavLink to="/blog" className={navLinkClass}>
              {t.nav.blog}
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              {t.nav.contact}
            </NavLink>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link to="/quote" className="btn btn-red px-6 py-3 text-sm">
              {t.nav.quote}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(true)}
            className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl transition lg:hidden ${
              transparent ? "text-white" : "text-navy-900"
            }`}
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[70] lg:hidden">
          <div className="fade-in absolute inset-0 bg-navy-950/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="drawer-in absolute end-0 top-0 flex h-full w-[88%] max-w-sm flex-col overflow-y-auto bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <Logo />
              <button
                onClick={() => setMobileOpen(false)}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-slate-100 text-navy-900 transition hover:bg-brand-600 hover:text-white"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex-1 px-4 py-4" aria-label="Mobile navigation">
              {[
                { to: "/", label: t.nav.home },
                { to: "/about", label: t.nav.about },
                { to: "/blog", label: t.nav.blog },
                { to: "/contact", label: t.nav.contact },
              ].map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `mb-1 block rounded-xl px-4 py-3.5 text-base font-bold transition ${
                      isActive ? "bg-navy-900 text-white" : "text-navy-900 hover:bg-navy-50"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              {/* Services accordion */}
              <button
                onClick={() => setMobileServicesOpen((v) => !v)}
                className={`mb-1 flex w-full cursor-pointer items-center justify-between rounded-xl px-4 py-3.5 text-base font-bold transition ${
                  mobileServicesOpen ? "bg-navy-50 text-brand-600" : "text-navy-900 hover:bg-navy-50"
                }`}
              >
                {t.nav.services}
                <ChevronDown size={18} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div className="mb-2 rounded-xl bg-mist p-2">
                  {services.map((s) => {
                    const Icon = s.icon;
                    return (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-navy-900 transition hover:bg-white hover:text-brand-600"
                      >
                        <Icon size={16} className="text-brand-600" />
                        {s.title}
                      </Link>
                    );
                  })}
                  <Link
                    to="/services"
                    className="mt-1 block rounded-lg bg-navy-900 px-3 py-2.5 text-center text-sm font-bold text-white"
                  >
                    {t.nav.viewAllServices}
                  </Link>
                </div>
              )}
            </nav>

            <div className="border-t border-slate-100 px-5 py-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-bold text-navy-900">{t.nav.language}</span>
                <div className="flex gap-2">
                  {(Object.keys(LANG_META) as Lang[]).map((key) => (
                    <button
                      key={key}
                      onClick={() => {
                        setLang(key);
                        setMobileOpen(false);
                      }}
                      className={`cursor-pointer rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                        lang === key
                          ? "bg-brand-600 text-white"
                          : "bg-slate-100 text-navy-900 hover:bg-navy-50"
                      }`}
                      dir={LANG_META[key].dir}
                    >
                      {LANG_META[key].short}
                    </button>
                  ))}
                </div>
              </div>
              <Link to="/quote" className="btn btn-red w-full px-6 py-3.5 text-sm">
                {t.nav.quote}
              </Link>
              <div className="mt-5 flex items-center justify-center gap-3">
                {SOCIALS.map(({ icon: Icon, href, label }) => (
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
          </div>
        </div>
      )}
    </>
  );
}
