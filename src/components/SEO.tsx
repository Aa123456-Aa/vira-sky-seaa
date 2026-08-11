import { useEffect } from "react";
import { SITE } from "../config";

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  type?: string;
  path?: string;
  jsonLd?: object | object[];
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/** Per-page SEO: title, meta description, Open Graph, canonical + JSON-LD schemas. */
export default function SEO({ title, description, image, type = "website", path = "/", jsonLd }: SEOProps) {
  const schemaKey = JSON.stringify(jsonLd ?? null);

  useEffect(() => {
    document.title = title;
    const desc = description ?? "";
    setMeta("name", "description", desc);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:type", type);
    setMeta("property", "og:url", `${SITE.url}${path}`);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", desc);
    if (image) {
      setMeta("property", "og:image", image);
      setMeta("name", "twitter:image", image);
    }

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE.url}${path}`;

    document.head.querySelectorAll("script[data-seo-jsonld]").forEach((s) => s.remove());
    const schemas = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];
    schemas.forEach((schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-jsonld", "true");
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, image, type, path, schemaKey]);

  return null;
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}
