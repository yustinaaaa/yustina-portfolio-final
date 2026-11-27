import { createFileRoute, Link, ClientOnly } from "@tanstack/react-router";
import { lazy, Suspense, type ReactNode } from "react";
import { LangSwitch, useLang } from "@/lib/i18n";

const Card3D = lazy(() => import("@/components/Card3D"));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Юстина Селезнёва — креатор и креативный стратег" },
      { name: "description", content: "Креативные платформы, бренд-активации и комплексные кампании для FMCG, beauty и luxury-брендов." },
      { property: "og:title", content: "Юстина Селезнёва — креатор и креативный стратег" },
      { property: "og:description", content: "Креативные платформы, бренд-активации и кампании для FMCG, beauty и luxury." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const B = ({ children }: { children: ReactNode }) => (
  <span className="font-sans font-extrabold font-condensed uppercase tracking-tighter [word-spacing:0.09em] text-[1.08em]">{children}</span>
);

const T = {
  ru: {
    cases: "Кейсы", hint: "(※) 創造 / 戦略 — крути карточку", focus: "Фокус:", focusV: "FMCG, beauty, luxury, события",
    services: "Услуги:", servicesV: "Креативные платформы, бренд-активации, сторителлинг, интегрированные кампании, нейминг, тендерные презентации",
    clients: "Клиенты:", based: "Сейчас:", basedV: "Москва, Россия", contact: "Почта:",
    marquee: ["Кейсы", "(projects)", "Активации", "活動"],
    intro: (<><B>Юстина Селезнёва</B> — креатор и креативный стратег. <B>Работаю на пересечении</B> маркетинга, визуальной культуры и событийных коммуникаций. <B>Специализируюсь на</B> разработке креативных платформ, бренд-активаций, сторителлинге и создании комплексных кампаний для FMCG, beauty и luxury-брендов.</>),
  },
  en: {
    cases: "Cases", hint: "(※) 創造 / 戦略 — spin the card", focus: "Focus:", focusV: "FMCG, beauty, luxury, events",
    services: "Services:", servicesV: "Creative platforms, brand activations, storytelling, integrated campaigns, naming, tender decks",
    clients: "Clients:", based: "Currently:", basedV: "Moscow, Russia", contact: "Email:",
    marquee: ["Cases", "(projects)", "Activations", "活動"],
    intro: (<><B>Yustina Selezneva</B> is a creator and creative strategist. <B>Working at the intersection of</B> marketing, visual culture and event communications. <B>Specializing in</B> creative platforms, brand activations, storytelling and integrated campaigns for FMCG, beauty and luxury brands.</>),
  },
};

function Index() {
  const { lang } = useLang();
  const t = T[lang];
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="flex items-center justify-between gap-3 border-b px-4 py-3 font-mono text-xs uppercase md:px-8">
        <span className="truncate">(01) {lang === "ru" ? "Селезнёва Ю." : "Selezneva Y."} — RU</span>
        <div className="flex items-center gap-2">
          <LangSwitch />
          <Link to="/cases" className="bg-foreground px-3 py-1.5 text-background transition-colors hover:bg-primary">{t.cases} →</Link>
        </div>
      </header>

      <section className="px-4 pt-8 md:px-8 md:pt-12">
        <p className="max-w-5xl font-sans font-light font-wide uppercase tracking-[-0.03em] text-[clamp(1.1rem,2.1vw,2rem)] leading-[1.02]">{t.intro}</p>
      </section>

      <section className="relative grid md:grid-cols-12">
        <div className="order-2 px-4 pb-4 md:order-1 md:col-span-3 md:flex md:flex-col md:justify-end md:px-8 md:pb-10">
          <span className="font-mono text-[0.65rem] uppercase leading-tight">{t.hint}</span>
        </div>
        <div className="order-1 h-[58vh] min-h-[340px] md:order-2 md:col-span-9 md:h-[72vh]">
          <ClientOnly fallback={<div className="h-full" />}>
            <Suspense fallback={<div className="h-full" />}>
              <Card3D />
            </Suspense>
          </ClientOnly>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-6 border-t px-4 py-6 font-mono text-[0.62rem] uppercase leading-snug md:grid-cols-5 md:px-8">
        <div><p className="text-primary">{t.focus}</p><p className="font-semibold">{t.focusV}</p></div>
        <div className="md:col-span-2"><p className="text-primary">{t.services}</p><p className="font-semibold">{t.servicesV}</p></div>
        <div><p className="text-primary">{t.clients}</p><p className="font-semibold">PUIG, Carolina Herrera, Penhaligon's, Добрый, Burn, RICH, Балтика, Parmalat, Магнит</p></div>
        <div className="md:text-right"><p className="text-primary">{t.based}</p><p className="font-semibold">{t.basedV}</p>
          <p className="mt-2 text-primary">{t.contact}</p><a href="mailto:seleznevayustina@gmail.com" className="break-all font-semibold underline">seleznevayustina@gmail.com</a></div>
      </section>

      <Link to="/cases" className="group block border-t">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap py-4 font-condensed text-[clamp(4rem,16vw,13rem)] font-black uppercase leading-[0.85] tracking-tight group-hover:text-primary">
          {[0, 1].flatMap((i) => t.marquee.map((w, j) => (
            <span key={`${i}${j}`} className={j % 2 ? "serif-up font-normal" : ""}>{w}</span>
          )))}
        </div>
      </Link>
    </main>
  );
}
