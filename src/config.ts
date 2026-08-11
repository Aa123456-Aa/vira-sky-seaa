/**
 * Central site configuration.
 * All images are stored locally in the public/img folder and referenced
 * with relative paths (img/...) so they work from any hosting path.
 * Replace the logo placeholder in LOGO.image once the real logo is provided.
 */

export const SITE = {
  name: "Vira Sky Sea Co",
  faName: "ویرا آسمان دریا",
  url: "https://virasky-co.com",
  emailInfo: "Info@virasky-co.com",
  emailCeo: "Ceo@virasky-co.com",
  phones: ["021-88823001", "021-88823002"],
  phoneIntl: ["+982188823001", "+982188823002"],
  contactPerson: "Shabnam Shafiei",
  contactPersonPhone: "+98 912 397 6507",
  contactPersonPhoneRaw: "+989123976507",
  address: {
    lines: [
      "Iran",
      "Tehran",
      "Ghaem Magham Farahani Street",
      "Shabnam Alley, No.14, First Floor",
    ],
    short: "Tehran, Iran",
  },
  instagramHandle: "viraskyseaco.ltd",
  instagramUrl: "https://instagram.com/viraskyseaco.ltd",
  whatsappUrl: "https://wa.me/989123976507",
  telegramUrl: "https://t.me/viraskyseaco",
  mapEmbed:
    "https://maps.google.com/maps?q=Ghaem%20Magham%20Farahani%20Street%2C%20Tehran%2C%20Iran&z=15&output=embed",
};

/** Set to a local image path (e.g. "img/logo.png") once the real logo is provided. */
export const LOGO = {
  image: "/img/logo.png",
  alt: "Vira Sky Sea Co — International Transportation & Logistics",
};

/**
 * Local image registry — every photo on the site is referenced here.
 * All files live in public/img and are copied to dist/img at build time.
 */
const img = (name: string) => `img/${name}.jpg`;

export const IMAGES = {
  hero: {
    ocean: img("hero-ocean"),
    air: img("hero-air"),
    road: img("hero-road"),
  },
  services: {
    consulting: img("consulting"),
    ocean: img("hero-ocean"),
    road: img("hero-road"),
    air: img("hero-air"),
    transit: img("port"),
    project: img("project"),
    doorToDoor: img("warehouse"),
    rail: img("rail"),
  },
  about: {
    story: img("containers"),
    port: img("port"),
    team: img("consulting"),
  },
  blog: {
    ocean: img("hero-ocean"),
    airVsSea: img("hero-air"),
    customs: img("customs"),
    ports: img("port"),
    containers: img("containers"),
    road: img("hero-road"),
  },
  pageHero: {
    about: img("port"),
    services: img("hero-ocean"),
    blog: img("containers"),
    contact: img("customs"),
    quote: img("port"),
  },
  cta: img("port"),
};
