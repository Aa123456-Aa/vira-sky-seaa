import type { Lang } from "../i18n";

const FA_DIGITS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

/** Converts all ASCII digits in a string to Persian (Farsi) numerals. */
export function toFaDigits(input: string | number): string {
  return String(input).replace(/[0-9]/g, (d) => FA_DIGITS[Number(d)]);
}

/** Formats a number/string using Persian digits when the active language is fa. */
export function localizeNumber(input: string | number, lang: Lang): string {
  return lang === "fa" ? toFaDigits(input) : String(input);
}
