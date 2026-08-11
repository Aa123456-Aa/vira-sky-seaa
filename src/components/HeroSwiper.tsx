import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Anchor, ChevronLeft, ChevronRight, Plane } from "lucide-react";
import { IMAGES } from "../config";
import { useLang } from "../i18n/LanguageContext";

export default function HeroSwiper() {
  const { t, isRTL } = useLang();
  const swiperRef = useRef<SwiperType | null>(null);
  const [active, setActive] = useState(0);

  const slides = [
    {
      img: IMAGES.hero.ocean,
      alt: "Aerial view of a container port at dusk",
      eyebrow: t.hero.slides[0].eyebrow,
      title: t.hero.slides[0].title,
      text: t.hero.slides[0].text,
    },
    {
      img: IMAGES.hero.air,
      alt: "Cargo aircraft on the runway at twilight",
      eyebrow: t.hero.slides[1].eyebrow,
      title: t.hero.slides[1].title,
      text: t.hero.slides[1].text,
    },
    {
      img: IMAGES.hero.road,
      alt: "Freight truck traveling along a scenic highway",
      eyebrow: t.hero.slides[2].eyebrow,
      title: t.hero.slides[2].title,
      text: t.hero.slides[2].text,
    },
  ];

  const PrevIcon = isRTL ? ChevronRight : ChevronLeft;
  const NextIcon = isRTL ? ChevronLeft : ChevronRight;

  return (
    <section className="relative h-[94svh] min-h-[600px] w-full overflow-hidden bg-navy-950">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        speed={1100}
        autoplay={{ delay: 6200, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActive(swiper.realIndex)}
        className="h-full w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full w-full">
              <img
                src={slide.img}
                alt={slide.alt}
                className={`absolute inset-0 h-full w-full object-cover ${
                  active === i ? "kenburns" : ""
                }`}
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "auto"}
                decoding="async"
              />
              <div className="hero-overlay absolute inset-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-navy-950/40" />

              <div className="container-site relative flex h-full items-center">
                <div key={active} className="max-w-3xl pt-28 pb-32 lg:pt-36">
                  <span className="hero-in inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-extrabold tracking-[0.14em] text-white uppercase backdrop-blur-md sm:text-xs">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-500" />
                    {slide.eyebrow}
                  </span>
                  <h1 className="hero-in hero-in-d1 mt-6 text-4xl leading-[1.08] font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.6rem]">
                    {slide.title}
                  </h1>
                  <p className="hero-in hero-in-d2 mt-6 max-w-xl text-base leading-relaxed text-navy-100 sm:text-lg">
                    {slide.text}
                  </p>
                  <div className="hero-in hero-in-d3 mt-9 flex flex-col gap-4 sm:flex-row">
                    <Link to="/quote" className="btn btn-red px-8 py-4 text-sm">
                      {t.hero.cta1}
                    </Link>
                    <Link to="/contact" className="btn btn-outline-light px-8 py-4 text-sm">
                      {t.hero.cta2}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Floating badges */}
      <div className="absolute bottom-28 end-8 z-10 hidden flex-col gap-3 xl:flex">
        <div className="float-y flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-md">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white shadow-lg">
            <Anchor size={18} />
          </span>
          <span className="text-sm font-extrabold text-white">{t.hero.badge1}</span>
        </div>
        <div className="float-y flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-md" style={{ animationDelay: "1.4s" }}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-700 text-white shadow-lg">
            <Plane size={18} />
          </span>
          <span className="text-sm font-extrabold text-white">{t.hero.badge2}</span>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        aria-label="Previous slide"
        className="absolute bottom-8 start-5 z-10 hidden h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition hover:bg-brand-600 hover:border-brand-600 sm:flex"
      >
        <PrevIcon size={20} />
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        aria-label="Next slide"
        className="absolute bottom-8 end-5 z-10 hidden h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition hover:bg-brand-600 hover:border-brand-600 sm:flex"
      >
        <NextIcon size={20} />
      </button>
    </section>
  );
}
