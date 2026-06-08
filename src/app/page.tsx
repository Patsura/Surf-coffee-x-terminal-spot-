"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Coffee,
  Download,
  FileText,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Plane,
  Sparkles,
} from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  competitors,
  documents,
  guestScenarios,
  heroBadges,
  heroCards,
  locationPlaceholders,
  locationSignals,
  landlordValue,
  priceMap,
  productIdeas,
  projectStatuses,
  readinessCards,
  risks,
  roadmap,
  surfFit,
  investorValue,
  surfValue,
  type StatusLabel,
} from "@/data/project";
import { cn } from "@/lib/utils";

const badgeVariant: Record<StatusLabel, "done" | "progress" | "waiting" | "data" | "draft" | "risk"> = {
  Done: "done",
  "In Progress": "progress",
  Waiting: "waiting",
  "Needs Data": "data",
  Draft: "draft",
  Risk: "risk",
};

const statusLabels: Record<StatusLabel, string> = {
  Done: "Готово",
  "In Progress": "В работе",
  Waiting: "Ожидание",
  "Needs Data": "Нужны данные",
  Draft: "Черновик",
  Risk: "Риск",
};

const documentStatusLabels = {
  Pending: "Ожидает",
  "Shared on request": "По запросу",
  "Placeholder only": "Placeholder",
};

const roadmapLabels: Record<string, string> = {
  Backlog: "Бэклог",
  "In Progress": "В работе",
  Waiting: "Ожидание",
  Done: "Готово",
};

const nav = [
  ["Проект", "#project"],
  ["Сценарии", "#scenarios"],
  ["Рынок", "#market"],
  ["Готовность", "#readiness"],
  ["Документы", "#documents"],
];

const stakeholderThemes = [
  "border-[#d9b98c]/35 bg-[linear-gradient(145deg,#fff8ed,#f0dcc1)]",
  "border-[#7db4c3]/25 bg-[linear-gradient(145deg,#f6fbff,#e6f1f3)]",
  "border-[#c69a63]/30 bg-[linear-gradient(145deg,#fff4df,#ead0ac)]",
];

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="relative mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <div className="mb-8 max-w-3xl sm:mb-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#d9b98c]">{eyebrow}</p>
        <h2 className="text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#fff8ed] sm:text-4xl lg:text-5xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Money({ value }: { value: number }) {
  return <>{new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 0 }).format(value)} ₽</>;
}

export default function Home() {
  const [annualFlow, setAnnualFlow] = useState(2500000);
  const [averageCheck, setAverageCheck] = useState(550);
  const operatingDays = 365;
  const scenarios = useMemo(
    () =>
      [
        { name: "Консервативный", conversion: 0.03 },
        { name: "Базовый", conversion: 0.05 },
        { name: "Оптимистичный", conversion: 0.08 },
      ].map((scenario) => {
        const dailyPassengers = annualFlow / operatingDays;
        const purchases = dailyPassengers * scenario.conversion;
        const dailyRevenue = purchases * averageCheck;
        return {
          ...scenario,
          dailyPassengers,
          purchases,
          averageCheck,
          dailyRevenue,
          monthlyRevenue: dailyRevenue * 30.4,
          annualRevenue: dailyRevenue * operatingDays,
        };
      }),
    [annualFlow, averageCheck],
  );

  return (
    <main className="min-h-screen overflow-hidden">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#11100f]/80 shadow-[0_16px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          <a href="#overview" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#d9b98c] text-[#181715]"><Coffee className="h-5 w-5" /></span>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#fff8ed]">Terminal Spot</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            {nav.map(([label, href]) => <a key={href} className="transition hover:text-[#d9b98c]" href={href}>{label}</a>)}
          </nav>
        </div>
      </header>

      <section id="overview" className="relative mx-auto grid min-h-[calc(100vh-69px)] w-full max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:px-8">
        <div className="pointer-events-none absolute inset-x-4 top-6 hidden h-[36rem] overflow-hidden rounded-[3rem] border border-white/10 bg-[radial-gradient(circle_at_18%_18%,rgba(217,185,140,0.28),transparent_24rem),radial-gradient(circle_at_78%_18%,rgba(73,112,129,0.22),transparent_22rem),linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.025))] shadow-[0_48px_160px_rgba(0,0,0,0.52)] lg:block" />
        <div className="pointer-events-none absolute right-[-10rem] top-20 hidden h-96 w-96 rounded-full bg-[#d9b98c]/10 blur-3xl lg:block" />
        <motion.div className="relative" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-6 flex flex-wrap gap-2">
            {heroBadges.map((badge) => <Badge key={badge} variant="dark" className="border-[#d9b98c]/25 bg-black/25 text-[#f3d7ad]"><Globe2 className="mr-2 h-3.5 w-3.5" /> {badge}</Badge>)}
          </div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.45em] text-[#d9b98c]">Premium travel pitch</p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.06em] text-[#fff8ed] drop-shadow-[0_16px_48px_rgba(0,0,0,0.45)] sm:text-6xl lg:text-7xl">
            Surf Coffee Terminal Spot
          </h1>
          <p className="mt-5 max-w-2xl text-2xl font-medium leading-tight text-[#d9b98c] sm:text-3xl">Кофейная точка на маршруте Россия — Китай</p>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
            Проект компактного кофейного формата в международном терминале канатной дороги Благовещенск — Хэйхэ: первая чашка перед отправлением, последняя — после возвращения.
          </p>
          <p className="mt-5 max-w-2xl rounded-3xl border border-[#d9b98c]/20 bg-[#d9b98c]/10 p-4 text-sm font-medium leading-6 text-[#ffe2b8] sm:text-base">
            Это не кофейня под эскалатором. Это брендовая точка на международном маршруте Россия — Китай.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg" className="shadow-[0_16px_44px_rgba(217,185,140,0.22)]"><a href="#project">Смотреть проект <ArrowRight className="h-4 w-4" /></a></Button>
            <Button asChild size="lg" variant="secondary"><a href="#economics">Оценить потенциал</a></Button>
            <Button asChild size="lg" variant="outline"><a href="#documents">Документы</a></Button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative grid gap-4 sm:grid-cols-2">
          <div className="glass-panel premium-glow col-span-full rounded-[2rem] p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d9b98c]">Маршрут / терминал / кофе</p>
            <p className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-[#fff8ed] sm:text-5xl">RU → CN</p>
            <p className="mt-3 text-sm leading-6 text-white/62">Гипотеза premium travel coffee spot внутри пассажирского сценария, где кофе работает как часть ожидания, встречи и возвращения.</p>
          </div>
          {heroCards.map((card) => (
            <Card key={card.label} className="premium-card border-[#d9b98c]/10 bg-[#f7f1e8]/95 shadow-2xl shadow-black/20">
              <CardHeader className="p-4 sm:p-5">
                <CardDescription className="uppercase tracking-[0.2em]">{card.label}</CardDescription>
                <CardTitle className="text-lg leading-snug">{card.value}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </motion.div>
      </section>

      <Section id="project" eyebrow="Project logic" title="Почему это не обычная кофейня">
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="premium-card overflow-hidden bg-[#fff8ed]">
            <CardHeader className="p-5 sm:p-7">
              <CardTitle className="text-2xl tracking-[-0.04em] sm:text-3xl">Кофе как часть маршрута, а не просто точка продаж</CardTitle>
              <CardDescription className="mt-4 text-base leading-7 text-neutral-700 sm:leading-8">
                Городские кофейни конкурируют за привычку. Терминальный формат работает иначе: здесь кофе становится частью маршрута, ожидания, встречи, возвращения и впечатления от поездки.
              </CardDescription>
            </CardHeader>
          </Card>
          <div className="glass-panel premium-glow rounded-[2rem] p-5 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d9b98c]">Investment & brand proposal</p>
            <p className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-[#fff8ed] sm:text-4xl">Travel-сценарий создаёт другой уровень ценности</p>
            <p className="mt-4 text-sm leading-7 text-white/62">Проектная логика строится вокруг компактного формата, понятного продукта, пассажирского потока и эмоциональной связки Surf Coffee с маршрутом Россия — Китай.</p>
          </div>
        </div>
      </Section>

      <Section id="scenarios" eyebrow="Guest journey" title="Сценарии гостя">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {guestScenarios.map((scenario, index) => (
            <Card key={scenario.title} className="premium-card group overflow-hidden bg-[#fff8ed]">
              <CardHeader className="p-5">
                <span className="mb-2 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#181715] text-sm font-semibold text-[#d9b98c] shadow-[0_10px_30px_rgba(24,23,21,0.18)] transition group-hover:scale-105">0{index + 1}</span>
                <CardTitle className="text-xl">{scenario.title}</CardTitle>
                <CardDescription className="text-sm leading-6">{scenario.text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="why-surf" eyebrow="Brand fit" title="Почему Surf Coffee">
        <Card className="premium-card bg-[#fff8ed]">
          <CardHeader className="p-5 sm:p-7">
            <CardTitle className="text-2xl tracking-[-0.04em] sm:text-3xl">Lifestyle-бренд, который может создать место</CardTitle>
            <CardDescription className="mt-4 text-base leading-7 text-neutral-700 sm:leading-8">
              Surf Coffee подходит не только как кофейня, а как lifestyle-бренд с узнаваемой культурой, визуальным языком и способностью создавать место, а не просто точку продаж.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 p-5 pt-0 sm:p-7 sm:pt-0 md:grid-cols-2 lg:grid-cols-3">
            {surfFit.map(([dna, fit]) => <div key={dna} className="rounded-2xl border border-black/5 bg-white/80 p-4 text-sm leading-6 shadow-sm"><strong>{dna}</strong><span className="mt-1 block text-neutral-600">{fit}</span></div>)}
          </CardContent>
        </Card>
      </Section>

      <Section id="value" eyebrow="Value for stakeholders" title="Что получают ключевые стороны">
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            ["Арендодатель", landlordValue],
            ["Surf Coffee", surfValue],
            ["Инвестор", investorValue],
          ].map(([title, items], index) => (
            <Card key={title as string} className={cn("premium-card overflow-hidden", stakeholderThemes[index])}>
              <CardHeader className="p-5">
                <CardTitle className="text-2xl tracking-[-0.04em]">{title as string}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 p-5 pt-0">
                {(items as string[]).map((item) => <div key={item} className="flex gap-3 rounded-2xl border border-black/5 bg-white/75 p-3 text-sm leading-6 shadow-sm"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#a57945]" />{item}</div>)}
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="status" eyebrow="Статус проекта" title="Рабочий dashboard для Surf Coffee, инвесторов и арендодателя">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projectStatuses.map((item) => (
            <Card key={item.title} className="premium-card bg-[#fff8ed]">
              <CardHeader className="p-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#a57945]" />
                  <Badge variant={badgeVariant[item.status]}>{statusLabels[item.status]}</Badge>
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="location" eyebrow="Логика локации" title="Терминал — это не уличная точка">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="bg-[#fff8ed]">
            <CardHeader>
              <CardDescription className="text-base leading-7 sm:leading-8">
                Локация находится внутри международного терминала канатной дороги Благовещенск — Хэйхэ. Это не городская кофейня, а отдельный travel-сценарий: кофе перед отправлением, после прибытия, во время ожидания и как сувенир маршрута Россия — Китай.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
              {locationSignals.map((signal) => <div key={signal} className="flex items-center gap-3 rounded-2xl bg-white p-4 text-sm font-medium"><MapPin className="h-4 w-4 text-[#a57945]" />{signal}</div>)}
            </CardContent>
          </Card>
          <div className="grid gap-6 md:grid-cols-2">
            {locationPlaceholders.map((placeholder) => (
              <div key={placeholder.title} className="glass-panel overflow-hidden rounded-[1.75rem]">
                <div className="flex aspect-[4/3] flex-col items-center justify-center border-b border-white/10 bg-[linear-gradient(135deg,rgba(217,185,140,0.16),rgba(255,255,255,0.04))] p-8 text-center">
                  <span className="mb-3 rounded-full border border-[#d9b98c]/25 px-3 py-1 text-xs uppercase tracking-[0.25em] text-[#d9b98c]">{placeholder.label}</span>
                  <strong className="text-2xl font-semibold tracking-[-0.03em] text-[#fff8ed]">{placeholder.title}</strong>
                </div>
                <p className="p-5 text-sm leading-6 text-white/60">{placeholder.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="market" eyebrow="Market proof" title="Кофейная культура уже есть. Свободна ниша международного travel coffee spot">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {competitors.map((c) => (
            <Card key={c.name} className="premium-card overflow-hidden bg-[#fff8ed]">
              <CardHeader className="p-5">
                <Badge variant="outline" className="w-fit">{c.role}</Badge>
                <CardTitle className="text-2xl tracking-[-0.04em]">{c.name}</CardTitle>
                <CardDescription>{c.format}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-6 text-neutral-700">
                <p><strong>Ценовой сигнал:</strong> {c.price}</p>
                <p><strong>Вывод:</strong> {c.insight}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="premium-card mt-6 bg-[#fff8ed]"><CardHeader className="p-5 sm:p-7"><CardTitle className="text-2xl tracking-[-0.04em]">Вывод по рынку</CardTitle><CardDescription className="text-base leading-8">В Благовещенске уже сформирована кофейная культура, но свободна ниша международного travel coffee spot. Конкуренты здесь работают как market proof: они подтверждают привычку, ценовой коридор и готовность аудитории к современному кофейному продукту, но не закрывают сценарий терминала Россия — Китай.</CardDescription></CardHeader></Card>
      </Section>

      <Section id="price" eyebrow="Карта цен" title="Авторские напитки формируют premium-коридор">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead className="bg-white/55 text-xs uppercase tracking-[0.2em] text-neutral-500"><tr>{["Игрок", "Капучино", "Латте", "Авторские напитки", "Средний чек"].map((h) => <th key={h} className="p-4">{h}</th>)}</tr></thead>
                <tbody>{priceMap.map((row) => <tr key={row.player} className="border-t border-black/10"><td className="p-4 font-semibold">{row.player}</td><td className="p-4">{row.cappuccino}</td><td className="p-4">{row.latte}</td><td className="p-4">{row.signature}</td><td className="p-4">{row.average}</td></tr>)}</tbody>
              </table>
            </div>
          </Card>
          <Card><CardHeader><CardTitle>Авторские напитки, ₽</CardTitle></CardHeader><CardContent className="h-80"><ResponsiveContainer width="100%" height="100%"><BarChart data={priceMap}><CartesianGrid strokeDasharray="3 3" vertical={false} /><XAxis dataKey="player" tick={{ fontSize: 11 }} /><YAxis /><Tooltip /><Bar dataKey="signatureHigh" radius={[10, 10, 0, 0]}>{priceMap.map((_, i) => <Cell key={i} fill={["#a57945", "#c89b63", "#d9b98c", "#7c5b35"][i]} />)}</Bar></BarChart></ResponsiveContainer></CardContent></Card>
        </div>
      </Section>

      <Section id="readiness" eyebrow="Project readiness" title="Проектная готовность">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {readinessCards.map((item, index) => (
            <Card key={item} className="premium-card bg-[#fff8ed]">
              <CardHeader className="flex-row items-start gap-4 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#181715] text-sm font-semibold text-[#d9b98c]">{index + 1}</span>
                <CardTitle className="text-lg leading-snug">{item}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="economics" eyebrow="Экономика сценариев" title="Интерактивные сценарии выручки">
        <Card className="mb-6 bg-[#fff8ed]"><CardContent className="grid gap-4 p-6 md:grid-cols-2">
          <label className="space-y-2 text-sm font-semibold">Годовой пассажиропоток<input className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3" type="number" value={annualFlow} onChange={(e) => setAnnualFlow(Number(e.target.value))} /></label>
          <label className="space-y-2 text-sm font-semibold">Средний чек, ₽<input className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3" type="number" value={averageCheck} onChange={(e) => setAverageCheck(Number(e.target.value))} /></label>
        </CardContent></Card>
        <Card className="overflow-hidden"><div className="overflow-x-auto"><table className="w-full min-w-[980px] text-left text-sm"><thead className="bg-white/55 text-xs uppercase tracking-[0.18em] text-neutral-500"><tr>{["Сценарий", "Пассажиров/день", "Конверсия", "Покупок/день", "Средний чек", "Выручка/день", "Выручка/месяц", "Выручка/год"].map((h) => <th key={h} className="p-4">{h}</th>)}</tr></thead><tbody>{scenarios.map((s) => <tr key={s.name} className="border-t border-black/10"><td className="p-4 font-semibold">{s.name}</td><td className="p-4">{Math.round(s.dailyPassengers).toLocaleString("ru-RU")}</td><td className="p-4">{Math.round(s.conversion * 100)}%</td><td className="p-4">{Math.round(s.purchases).toLocaleString("ru-RU")}</td><td className="p-4"><Money value={s.averageCheck} /></td><td className="p-4"><Money value={s.dailyRevenue} /></td><td className="p-4"><Money value={s.monthlyRevenue} /></td><td className="p-4"><Money value={s.annualRevenue} /></td></tr>)}</tbody></table></div></Card>
        <p className="mt-5 text-sm leading-6 text-white/55">Сценарии предварительные. Фактические результаты зависят от роста трафика, аренды, CAPEX, часов работы, штата, условий франшизы и технических условий.</p>
      </Section>

      <Section id="product" eyebrow="Продукт и China traffic" title="Быстро, визуально, двуязычно и готово к сувенирному спросу">
        <div className="grid gap-4 md:grid-cols-5">{productIdeas.map((idea, i) => <Card key={idea} className={cn("premium-card bg-[#fff8ed] md:col-span-1", i === 2 && "md:col-span-2")}><CardHeader className="p-5"><Sparkles className="h-5 w-5 text-[#a57945]" /><CardTitle className="text-lg">{idea}</CardTitle></CardHeader></Card>)}</div>
      </Section>

      <Section id="risks" eyebrow="Управление рисками" title="Известные риски и логика снижения">
        <Card className="bg-[#fff8ed]"><CardContent className="p-4 sm:p-6"><Accordion type="single" collapsible>{risks.map((item) => <AccordionItem key={item.risk} value={item.risk}><AccordionTrigger>Риск: {item.risk}</AccordionTrigger><AccordionContent><strong>Решение:</strong> {item.solution}</AccordionContent></AccordionItem>)}</Accordion></CardContent></Card>
      </Section>

      <Section id="documents" eyebrow="Data room" title="Проектные документы и рабочие файлы">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{documents.map((doc) => <Card key={doc.title} className="premium-card bg-[#fff8ed]"><CardHeader className="p-5"><div className="flex items-center justify-between gap-3"><FileText className="h-5 w-5 text-[#a57945]" /><Badge variant={doc.status === "Pending" ? "waiting" : doc.status === "Shared on request" ? "data" : "draft"}>{documentStatusLabels[doc.status]}</Badge></div><CardTitle className="text-lg">{doc.title}</CardTitle><CardDescription>{doc.note}</CardDescription></CardHeader></Card>)}</div>
      </Section>

      <Section id="roadmap" eyebrow="Roadmap" title="Kanban-доска следующего проектного спринта">
        <div className="grid gap-5 lg:grid-cols-4">{Object.entries(roadmap).map(([column, items]) => <Card key={column} className="premium-card bg-[#fff8ed]"><CardHeader className="p-5"><Badge variant={column === "Done" ? "done" : column === "In Progress" ? "progress" : column === "Waiting" ? "waiting" : "draft"}>{roadmapLabels[column] ?? column}</Badge></CardHeader><CardContent className="space-y-3">{items.map((item) => <div key={item} className="rounded-2xl bg-white p-3 text-sm font-medium leading-6 shadow-sm sm:p-4">{item}</div>)}</CardContent></Card>)}</div>
      </Section>

      <Section id="contacts" eyebrow="Контакты" title="Инициатор проекта">
        <Card className="premium-card bg-[#fff8ed]"><CardHeader className="p-5 sm:p-7"><div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"><div><CardTitle className="text-3xl">Anton Patsura</CardTitle><CardDescription className="mt-3 text-base">Инициатор проекта / маркетинг / ресторанные проекты / развитие бизнеса</CardDescription><p className="mt-5 max-w-3xl leading-8 text-neutral-700">Опыт: ресторанные и кофейные проекты, запуск food service, бренд-стратегия, локации с пассажирским трафиком, маркетинг и позиционирование.</p></div><div className="flex flex-wrap gap-3"><Button asChild><a href="https://t.me/" target="_blank"><MessageCircle className="h-4 w-4" />Telegram</a></Button><Button asChild variant="ghost"><a href="mailto:hello@example.com"><Mail className="h-4 w-4" />Email</a></Button><Button asChild variant="ghost"><a href="https://wa.me/" target="_blank"><MessageCircle className="h-4 w-4" />WhatsApp</a></Button><Button asChild variant="ghost"><a href="mailto:hello@example.com?subject=Surf%20Coffee%20Terminal%20Spot%20pitch%20deck%20request"><Download className="h-4 w-4" />Запросить pitch deck</a></Button></div></div></CardHeader></Card>
      </Section>

      <footer className="border-t border-white/10 px-4 py-10 text-center text-sm text-white/45"><Plane className="mx-auto mb-3 h-5 w-5 text-[#d9b98c]" />Surf Coffee Terminal Spot · Premium travel coffee dashboard · Data room только с placeholder-данными</footer>
    </main>
  );
}
