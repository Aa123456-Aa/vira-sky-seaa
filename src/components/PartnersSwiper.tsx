import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { partners } from "../data/partners";
import { useLang } from "../i18n/LanguageContext";

export default function PartnersSwiper() {
  const { t } = useLang();

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={1.25}
      breakpoints={{
        560: { slidesPerView: 2 },
        900: { slidesPerView: 3 },
        1200: { slidesPerView: 4 },
      }}
      loop
      autoplay={{ delay: 1900, disableOnInteraction: false, pauseOnMouseEnter: true }}
      speed={650}
      grabCursor
      className="!pb-2"
    >
      {partners.map((p) => (
        <SwiperSlide key={p.name} className="h-auto">
          <div className="group flex h-full items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-navy-950/10">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 text-xl font-extrabold text-white shadow-md transition-colors duration-300 group-hover:from-brand-600 group-hover:to-brand-700">
              {p.letter}
            </span>
            <span className="min-w-0">
              <span className="block truncate text-base font-extrabold text-navy-900">{p.name}</span>
              <span className="mt-0.5 block truncate text-xs text-slate-400">{p.localName}</span>
              <span className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-brand-600/10 px-2.5 py-0.5 text-[10px] font-extrabold tracking-wide text-brand-600 uppercase">
                {t.partners.label}
              </span>
            </span>
          </div>
        </SwiperSlide>
      ))}
      {/* padding copy for seamless loop */}
      {partners.slice(0, 2).map((p) => (
        <SwiperSlide key={`dup-${p.name}`} className="h-auto" aria-hidden="true">
          <div className="group flex h-full items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 text-xl font-extrabold text-white">
              {p.letter}
            </span>
            <span className="min-w-0">
              <span className="block truncate text-base font-extrabold text-navy-900">{p.name}</span>
              <span className="mt-0.5 block truncate text-xs text-slate-400">{p.localName}</span>
              <span className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-brand-600/10 px-2.5 py-0.5 text-[10px] font-extrabold tracking-wide text-brand-600 uppercase">
                {t.partners.label}
              </span>
            </span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
