import en from "./en";
import fa from "./fa";

export type Lang = "en" | "fa";

export type Dict = any;

export const translations: Record<Lang, Dict> = { en, fa };

export const LANG_META: Record<Lang, { label: string; short: string; dir: "ltr" | "rtl" }> = {
  en: { label: "English", short: "EN", dir: "ltr" },
  fa: { label: "فارسی", short: "FA", dir: "rtl" },
};
