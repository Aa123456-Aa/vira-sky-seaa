import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "../config";
import { useLang } from "../i18n/LanguageContext";
import { Reveal } from "./Reveal";

export default function CTASection() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden">
      <img
        src={IMAGES.cta}
        alt="Container ship at a busy international port at sunset"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/90 to-navy-900/70 rtl:bg-gradient-to-l" />
      <div className="container-site relative py-20 lg:py-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{t.cta.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-navy-200 sm:text-lg">
            {t.cta.text}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/quote" className="btn btn-red px-8 py-4 text-sm">
              {t.cta.button1}
              <ArrowRight size={17} className="rtl:rotate-180" />
            </Link>
            <Link to="/contact" className="btn btn-outline-light px-8 py-4 text-sm">
              {t.cta.button2}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
