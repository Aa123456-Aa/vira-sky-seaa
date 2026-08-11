import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { useLang } from "../i18n/LanguageContext";
import { localizeNumber } from "../utils/numbers";

export default function NotFound() {
  const { t, lang } = useLang();
  const nf = t.pages.notFound;

  return (
    <section className="relative flex min-h-[72vh] items-center justify-center overflow-hidden bg-navy-950 px-5 pt-28 pb-20">
      <div className="pointer-events-none absolute -top-20 start-1/4 h-72 w-72 rounded-full bg-brand-600/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 end-1/4 h-80 w-80 rounded-full bg-navy-500/15 blur-3xl" />
      <SEO title={`404 — ${nf.title}`} path="/404" />
      <div className="relative text-center">
        <div className="text-8xl font-extrabold text-brand-600 drop-shadow-lg">
          {localizeNumber(404, lang)}
        </div>
        <h1 className="mt-5 text-3xl font-extrabold text-white">{nf.title}</h1>
        <p className="mx-auto mt-3 max-w-md text-navy-200">{nf.text}</p>
        <Link to="/" className="btn btn-red mt-9 px-8 py-4 text-sm">
          {nf.button}
        </Link>
      </div>
    </section>
  );
}
