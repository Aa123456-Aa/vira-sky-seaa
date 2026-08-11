import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { servicesData } from "../data/services";
import { useLang } from "../i18n/LanguageContext";

export default function ServicesSwiper() {
  const { t, lang, isRTL } = useLang();
  const services = servicesData[lang];
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      className="swiper-custom-nav !pb-14"
      spaceBetween={24}
      slidesPerView={1.15}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1400: { slidesPerView: 4 },
      }}
      autoplay={{ delay: 3400, disableOnInteraction: false, pauseOnMouseEnter: true }}
      navigation
      pagination={{ clickable: true }}
      loop
      grabCursor
      speed={750}
    >
      {services.map((s) => {
        const Icon = s.icon;
        return (
          <SwiperSlide key={s.slug} className="h-auto">
            <Link
              to={`/services/${s.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy-950/15"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent" />
                <span className="absolute bottom-3 start-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-navy-900 shadow-lg transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                  <Icon size={20} />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-extrabold text-navy-900 transition-colors group-hover:text-brand-600">
                  {s.title}
                </h3>
                <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-slate-500">{s.short}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-extrabold text-brand-600">
                  {t.services.learnMore}
                  <Arrow
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
                  />
                </span>
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
