import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "ru" | "en";
const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: "ru", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ru");
  useEffect(() => {
    const s = localStorage.getItem("lang");
    if (s === "en" || s === "ru") setLangState(s);
  }, []);
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  const setLang = (l: Lang) => { setLangState(l); localStorage.setItem("lang", l); };
  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);

export function LangSwitch() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex border font-mono text-xs">
      {(["ru", "en"] as const).map((l) => (
        <button key={l} type="button" onClick={() => setLang(l)}
          className={`px-2 py-1.5 uppercase ${lang === l ? "bg-foreground text-background" : "hover:text-primary"}`}>{l}</button>
      ))}
    </div>
  );
}
