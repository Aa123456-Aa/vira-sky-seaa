import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translations, LANG_META, type Lang, type Dict } from "./index";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dict;
  dir: "ltr" | "rtl";
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "vss-lang";

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
  if (stored && stored in translations) return stored;
  const nav = window.navigator.language?.toLowerCase() ?? "";
  if (nav.startsWith("fa")) return "fa";
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    const meta = LANG_META[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = meta.dir;
    document.documentElement.style.colorScheme = "light";
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      t: translations[lang],
      dir: LANG_META[lang].dir,
      isRTL: LANG_META[lang].dir === "rtl",
    }),
    [lang, setLang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
