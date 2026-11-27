import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { cases, type Case } from "@/lib/cases";
import { LangSwitch, useLang } from "@/lib/i18n";

export const Route = createFileRoute("/cases")({
  head: () => ({
    meta: [
      { title: "Кейсы — Юстина Селезнёва" },
      { name: "description", content: "Избранные проекты: бренд-активации, креативные платформы и кампании для FMCG, beauty и luxury." },
      { property: "og:title", content: "Кейсы — Юстина Селезнёва" },
      { property: "og:description", content: "Избранные проекты для Балтики, PUIG, Carolina Herrera, Penhaligon's, Добрый и других." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Cases,
});

const L = {
  ru: { back: "← Селезнёва Ю.", title: "Кейсы", task: "Задача", sol: "Решение", role: "Мой вклад", res: "Результат", nda: "Конфиденциальный проект" },
  en: { back: "← Selezneva Y.", title: "Cases", task: "Task", sol: "Solution", role: "My role", res: "Result", nda: "Confidential project" },
};
const pad = (n: number) => String(n).padStart(2, "0");

const PRESET_ROWS: Record<number, number[]> = { 4: [2, 2], 5: [2, 3], 6: [3, 3] };

function rowsFor(n: number): number[] {
  const preset = PRESET_ROWS[n];
  if (preset) return preset;
  const out: number[] = [];
  let left = n;
  while (left > 0) {
    const take = left >= 3 ? 3 : left;
    out.push(take);
    left -= take;
  }
  if (out.length > 1 && out[out.length - 1] === 1) {
    const last = out.length - 2;
    out[last] = (out[last] ?? 0) + 1;
    out.pop();
  }
  return out;
}

function Gallery({ c, i }: { c: Case; i: number }) {
  const { lang } = useLang();
  const imgs = c.imgs ?? [];
  const [ratios, setRatios] = useState<number[]>(() => imgs.map(() => 1.5));

  const remember = (n: number, el: HTMLImageElement) => {
    const r = el.naturalWidth / el.naturalHeight;
    if (!Number.isFinite(r) || r <= 0) return;
    setRatios((prev) => {
      const cur = prev[n] ?? 1.5;
      return Math.abs(cur - r) < 0.01 ? prev : prev.map((v, k) => (k === n ? r : v));
    });
  };

  let cursor = 0;
  return (
    <div className="space-y-4">
      {rowsFor(imgs.length).map((size, r) => {
        const idx = Array.from({ length: size }, (_, k) => cursor + k);
        cursor += size;
        return (
          <div key={r} className="flex items-start gap-2">
            {idx.map((n) => {
              const ratio = ratios[n] ?? 1.5;
              return (
                <figure key={n} className="group min-w-0" style={{ flex: `${ratio} 1 0px` }}>
                  <div className="overflow-hidden border" style={{ aspectRatio: ratio }}>
                    <img
                      src={imgs[n]}
                      alt={`${c.client} — ${n + 1}`}
                      loading="lazy"
                      onLoad={(e) => remember(n, e.currentTarget)}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="mt-1 flex justify-between gap-2 font-mono text-[0.55rem] uppercase">
                    <span className="text-primary">fig.{pad(i + 1)}.{n + 1}</span>
                    {n === 0 && <span className="hidden truncate sm:inline">{c.tag[lang]}</span>}
                  </figcaption>
                </figure>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

function Cases() {
  const { lang } = useLang();
  const t = L[lang];
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b bg-background px-4 py-3 font-mono text-xs uppercase md:px-8">
        <Link to="/" className="hover:text-primary">{t.back}</Link>
        <div className="flex items-center gap-3"><span className="hidden sm:inline">(02) {t.title}</span><LangSwitch /></div>
      </header>

      <section className="px-4 pb-6 pt-10 md:px-8">
        <h1 className="font-condensed text-[clamp(5rem,22vw,18rem)] font-black uppercase leading-[0.85]">
          {t.title}<sup className="ml-2 align-top font-mono text-[0.14em] font-normal tracking-normal text-primary">({cases.length})</sup>
        </h1>
      </section>

      <ol className="border-t">
        {cases.map((c, i) => (
          <li key={c.client}>
            <a href={`#case-${i + 1}`} className="grid grid-cols-12 items-baseline gap-2 border-b px-4 py-2 hover:text-primary md:px-8">
              <span className="col-span-2 font-wide text-base font-black md:col-span-1 md:text-2xl">({pad(i + 1)})</span>
              <span className="col-span-10 font-condensed text-2xl font-black uppercase leading-none md:col-span-8 md:text-5xl">{c.client}</span>
              <span className="hidden text-right font-mono text-[0.6rem] uppercase md:col-span-3 md:block">{c.sub[lang]}</span>
            </a>
          </li>
        ))}
      </ol>

      {cases.map((c, i) => {
        const flip = i % 2 === 1;
        return (
          <article key={c.client} id={`case-${i + 1}`} className="grid scroll-mt-14 gap-8 border-b px-4 py-14 md:grid-cols-12 md:gap-6 md:px-8 md:py-24">
            <div className={`md:col-span-5 ${flip ? "md:order-2 md:col-start-8" : ""}`}>
              <p className="font-mono text-[0.65rem] uppercase text-primary">Case.{pad(i + 1)} / {c.tag[lang]}</p>
              <h2 className="mt-3 font-condensed text-3xl font-black uppercase leading-none md:text-5xl">{c.client}</h2>
              <p className="serif-up mt-4 break-words text-[clamp(2.4rem,5.5vw,5rem)] leading-[0.9] hyphens-auto text-primary">{c.big[lang]}</p>
              <p className="mt-1 font-mono text-[0.65rem] uppercase">{c.sub[lang]}</p>
              <dl className="mt-8 space-y-4 border-t pt-4 text-sm leading-snug">
                {([[t.task, c.task], [t.sol, c.solution], [t.role, c.role]] as const).map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[6.5rem_1fr] gap-3">
                    <dt className="font-mono text-[0.62rem] uppercase">({k})</dt><dd>{v[lang]}</dd>
                  </div>
                ))}
                {c.result && (
                  <div className="grid grid-cols-[6.5rem_1fr] gap-3">
                    <dt className="font-mono text-[0.62rem] uppercase">({t.res})</dt><dd>{c.result[lang]}</dd>
                  </div>
                )}
              </dl>
            </div>
            {(c.imgs || c.img || c.nda) ? <div className={`relative md:col-span-7 ${flip ? "md:order-1 md:col-start-1" : ""}`}>
              {c.imgs ? (
                <Gallery c={c} i={i} />
              ) : c.img ? (
                <img src={c.img} alt={c.client} loading="lazy" className="w-full border object-cover" />
              ) : c.nda ? (
                <div className="flex aspect-[4/3] flex-col items-center justify-center gap-3 border bg-muted">
                  <span className="bg-foreground px-6 py-3 font-wide text-4xl font-black tracking-[0.4em] text-background md:text-6xl">NDA</span>
                  <span className="font-mono text-[0.65rem] uppercase">{t.nda}</span>
                </div>
              ) : null}
              <span className="absolute bottom-0 right-2 translate-y-full font-wide text-6xl font-black text-primary md:text-8xl" aria-hidden>{pad(i + 1)}</span>
            </div> : (
              <div className={`hidden md:flex md:col-span-7 items-end justify-end ${flip ? "md:order-1 md:col-start-1" : ""}`}>
                <span className="font-wide text-8xl font-black text-primary md:text-[12rem] leading-none" aria-hidden>{pad(i + 1)}</span>
              </div>
            )}
          </article>
        );
      })}

      <footer className="px-4 py-16 md:px-8">
        <a href="mailto:seleznevayustina@gmail.com" className="block break-all font-wide text-[clamp(1.6rem,6vw,5rem)] font-black leading-none hover:text-primary">seleznevayustina@gmail.com</a>
      </footer>
    </main>
  );
}
