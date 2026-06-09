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
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  competitors,
  documents,
  heroCards,
  locationPlaceholders,
  locationSignals,
  priceMap,
  productIdeas,
  projectStatuses,
  risks,
  roadmap,
  surfFit,
  type StatusLabel,
} from "@/data/project";
import { cn } from "@/lib/utils";

const badgeVariant: Record<
  StatusLabel,
  "done" | "progress" | "waiting" | "data" | "draft" | "risk"
> = {
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
  ["Статус", "#status"],
  ["Локация", "#location"],
  ["Рынок", "#market"],
  ["Экономика", "#economics"],
  ["Документы", "#documents"],
];

const routeSteps = ["RU", "Terminal Spot", "CN"];

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
    >
      <div className="mb-6 max-w-3xl sm:mb-8">
        <p className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[#d9b98c] sm:mb-3 sm:text-xs sm:tracking-[0.35em]">
          {eyebrow}
        </p>
        <h2 className="text-[1.7rem] font-semibold leading-tight tracking-[-0.04em] text-[#fff8ed] sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function Money({ value }: { value: number }) {
  return (
    <>
      {new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 0 }).format(
        value,
      )}{" "}
      ₽
    </>
  );
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
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#141413]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#overview" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#d9b98c] text-[#181715]">
              <Coffee className="h-5 w-5" />
            </span>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#fff8ed]">
              Terminal Spot
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            {nav.map(([label, href]) => (
              <a
                key={href}
                className="transition hover:text-[#d9b98c]"
                href={href}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section
        id="overview"
        className="relative mx-auto grid min-h-[calc(86vh-73px)] w-full max-w-7xl items-center gap-6 px-4 py-8 sm:min-h-[calc(100vh-73px)] sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8"
      >
        <div className="absolute right-[-10rem] top-20 hidden h-96 w-96 rounded-full bg-[#d9b98c]/10 blur-3xl lg:block" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Badge
            variant="dark"
            className="mb-4 border-[#d9b98c]/25 text-[#f3d7ad] sm:mb-6"
          >
            <Globe2 className="mr-2 h-3.5 w-3.5" /> Тревел-кофе хаб Россия —
            Китай
          </Badge>
          <h1 className="max-w-4xl text-[2.55rem] font-semibold leading-[0.98] tracking-[-0.06em] text-[#fff8ed] sm:text-6xl lg:text-7xl">
            Surf Coffee Terminal Spot
          </h1>
          <p className="mt-4 text-lg text-[#d9b98c] sm:mt-5 sm:text-xl">
            Терминал канатной дороги Благовещенск — Хэйхэ
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/68 sm:mt-6 sm:text-lg sm:leading-8">
            Проектная страница для оценки открытия компактного Surf Coffee
            Terminal Spot в международном пассажирском терминале маршрута Россия
            — Китай.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg">
              <a href="#status">
                Смотреть статус проекта <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="#documents">Открыть документы</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#market">Смотреть анализ рынка</a>
            </Button>
            <Button
              asChild
              className="hidden sm:inline-flex"
              size="lg"
              variant="outline"
            >
              <a href="#contacts">Связаться с инициатором</a>
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="grid gap-3 sm:grid-cols-2 sm:gap-4"
        >
          {heroCards.map((card) => (
            <Card key={card.label} className="pitch-light-card bg-[#f7f1e8]/95">
              <CardHeader className="p-4 sm:p-5">
                <CardDescription className="text-[0.68rem] uppercase tracking-[0.2em] sm:text-sm">
                  {card.label}
                </CardDescription>
                <CardTitle className="text-base sm:text-lg">
                  {card.value}
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </motion.div>
      </section>

      <Section
        id="status"
        eyebrow="Статус проекта"
        title="Рабочий dashboard для Surf Coffee, инвесторов и арендодателя"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projectStatuses.map((item) => (
            <Card key={item.title} className="pitch-light-card">
              <CardHeader className="p-4 sm:p-6">
                <div className="mb-2 flex items-center justify-between gap-3 sm:mb-3">
                  <CheckCircle2 className="h-5 w-5 text-[#a57945]" />
                  <Badge variant={badgeVariant[item.status]}>
                    {statusLabels[item.status]}
                  </Badge>
                </div>
                <CardTitle className="text-base sm:text-lg">
                  {item.title}
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="location"
        eyebrow="Логика локации"
        title="Терминал — это не уличная точка"
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="pitch-light-card bg-[#fff8ed]">
            <CardHeader className="p-5 sm:p-6">
              <CardDescription className="text-[0.95rem] leading-7 sm:text-base sm:leading-8">
                Локация находится внутри международного терминала канатной
                дороги Благовещенск — Хэйхэ. Это не городская кофейня, а
                отдельный travel-сценарий: кофе перед отправлением, после
                прибытия, во время ожидания и как сувенир маршрута Россия —
                Китай.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2 px-5 pb-5 pt-0 sm:gap-3 sm:px-6 sm:pb-6">
              {locationSignals.map((signal) => (
                <div
                  key={signal}
                  className="flex items-center gap-3 rounded-2xl bg-white p-3 text-sm font-medium sm:p-4"
                >
                  <MapPin className="h-4 w-4 text-[#a57945]" />
                  {signal}
                </div>
              ))}
            </CardContent>
          </Card>
          <div className="terminal-route glass-panel rounded-[1.75rem] p-5 sm:p-6 lg:col-span-2">
            <div className="mb-5 flex items-center justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d9b98c]">
                Маршрут Россия — Китай
              </p>
              <span className="rounded-full border border-[#d9b98c]/30 px-3 py-1 text-[0.65rem] uppercase tracking-[0.22em] text-white/60">
                border movement
              </span>
            </div>
            <div className="route-line" aria-label="RU to Terminal Spot to CN">
              {routeSteps.map((step, index) => (
                <div
                  key={step}
                  className={cn(
                    "route-node",
                    index === 1 && "route-node-center",
                  )}
                >
                  <span>{step}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-lg font-medium leading-7 text-[#ffe2b8]">
              Это не кофейня под эскалатором. Это брендовая точка на
              международном маршруте Россия — Китай.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {locationPlaceholders.map((placeholder) => (
              <div
                key={placeholder.title}
                className="glass-panel overflow-hidden rounded-[1.75rem]"
              >
                <div className="flex aspect-[4/3] flex-col items-center justify-center border-b border-white/10 bg-[linear-gradient(135deg,rgba(217,185,140,0.16),rgba(255,255,255,0.04))] p-6 text-center sm:p-8">
                  <span className="mb-3 rounded-full border border-[#d9b98c]/25 px-3 py-1 text-xs uppercase tracking-[0.25em] text-[#d9b98c]">
                    {placeholder.label}
                  </span>
                  <strong className="text-xl font-semibold tracking-[-0.03em] text-[#fff8ed] sm:text-2xl">
                    {placeholder.title}
                  </strong>
                </div>
                <p className="p-4 text-sm leading-6 text-white/60 sm:p-5">
                  {placeholder.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        id="why"
        eyebrow="Brand fit"
        title="Почему Surf Coffee подходит терминальному сценарию"
      >
        <Card className="pitch-light-card">
          <CardContent className="p-0">
            <div className="grid border-b border-black/10 bg-white/45 p-5 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 sm:grid-cols-2">
              <span>Surf Coffee DNA</span>
              <span>Соответствие терминалу</span>
            </div>
            {surfFit.map(([dna, fit]) => (
              <div
                key={dna}
                className="grid gap-2 border-b border-black/10 p-4 leading-6 last:border-b-0 sm:grid-cols-2 sm:p-5"
              >
                <strong>{dna}</strong>
                <span className="text-neutral-600">{fit}</span>
              </div>
            ))}
          </CardContent>
        </Card>
        <p className="mt-5 rounded-[1.75rem] border border-[#d9b98c]/20 bg-[#d9b98c]/10 p-5 text-lg font-medium text-[#ffe2b8] sm:mt-6 sm:p-6 sm:text-xl">
          Surf Coffee может стать первым кофейным ритуалом маршрута Россия —
          Китай.
        </p>
      </Section>

      <Section
        id="market"
        eyebrow="Анализ рынка"
        title="В Благовещенске есть кофейная культура, но ещё нет border travel coffee"
      >
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {competitors.map((c) => (
            <Card key={c.name} className="pitch-list-card">
              <CardHeader className="p-4 sm:p-5">
                <div className="flex flex-col gap-2 sm:min-h-24">
                  <Badge variant="outline">{c.role}</Badge>
                  <CardTitle className="text-base sm:text-lg">
                    {c.name}
                  </CardTitle>
                  <CardDescription>{c.format}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 px-4 pb-4 pt-0 text-sm leading-6 text-neutral-700 sm:px-5 sm:pb-5">
                <p>
                  <strong>Ценовой сигнал:</strong> {c.price}
                </p>
                <p>
                  <strong>Вывод:</strong> {c.insight}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="pitch-light-card mt-5 bg-[#fff8ed] sm:mt-6">
          <CardHeader className="p-5 sm:p-6">
            <CardTitle className="text-lg sm:text-xl">Вывод по рынку</CardTitle>
            <CardDescription className="text-[0.95rem] leading-7 sm:text-base sm:leading-8">
              В Благовещенске уже сформирована кофейная культура. Но сильные
              игроки работают в городских сценариях: торговые центры, улицы,
              районы и «кофе рядом». Ниша международной пограничной travel-точки
              остаётся свободной.
            </CardDescription>
          </CardHeader>
        </Card>
      </Section>

      <Section
        id="price"
        eyebrow="Карта цен"
        title="Авторские напитки формируют premium-коридор"
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="pitch-light-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead className="bg-white/55 text-xs uppercase tracking-[0.2em] text-neutral-500">
                  <tr>
                    {[
                      "Игрок",
                      "Капучино",
                      "Латте",
                      "Авторские напитки",
                      "Средний чек",
                    ].map((h) => (
                      <th key={h} className="p-4">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {priceMap.map((row) => (
                    <tr key={row.player} className="border-t border-black/10">
                      <td className="p-4 font-semibold">{row.player}</td>
                      <td className="p-4">{row.cappuccino}</td>
                      <td className="p-4">{row.latte}</td>
                      <td className="p-4">{row.signature}</td>
                      <td className="p-4">{row.average}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          <Card className="pitch-light-card">
            <CardHeader className="p-5 sm:p-6">
              <CardTitle className="text-lg sm:text-xl">
                Авторские напитки, ₽
              </CardTitle>
            </CardHeader>
            <CardContent className="h-72 px-5 pb-5 pt-0 sm:h-80 sm:px-6 sm:pb-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={priceMap}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="player" tick={{ fontSize: 11 }} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="signatureHigh" radius={[10, 10, 0, 0]}>
                    {priceMap.map((_, i) => (
                      <Cell
                        key={i}
                        fill={["#a57945", "#c89b63", "#d9b98c", "#7c5b35"][i]}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section
        id="economics"
        eyebrow="Экономика сценариев"
        title="Интерактивные сценарии выручки"
      >
        <Card className="pitch-light-card mb-5 bg-[#fff8ed] sm:mb-6">
          <CardContent className="grid gap-4 p-5 sm:p-6 md:grid-cols-2">
            <label className="space-y-2 text-sm font-semibold">
              Годовой пассажиропоток
              <input
                className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3"
                type="number"
                value={annualFlow}
                onChange={(e) => setAnnualFlow(Number(e.target.value))}
              />
            </label>
            <label className="space-y-2 text-sm font-semibold">
              Средний чек, ₽
              <input
                className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3"
                type="number"
                value={averageCheck}
                onChange={(e) => setAverageCheck(Number(e.target.value))}
              />
            </label>
          </CardContent>
        </Card>
        <Card className="pitch-light-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[980px] text-left text-sm">
              <thead className="bg-white/55 text-xs uppercase tracking-[0.18em] text-neutral-500">
                <tr>
                  {[
                    "Сценарий",
                    "Пассажиров/день",
                    "Конверсия",
                    "Покупок/день",
                    "Средний чек",
                    "Выручка/день",
                    "Выручка/месяц",
                    "Выручка/год",
                  ].map((h) => (
                    <th key={h} className="p-4">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {scenarios.map((s) => (
                  <tr key={s.name} className="border-t border-black/10">
                    <td className="p-4 font-semibold">{s.name}</td>
                    <td className="p-4">
                      {Math.round(s.dailyPassengers).toLocaleString("ru-RU")}
                    </td>
                    <td className="p-4">{Math.round(s.conversion * 100)}%</td>
                    <td className="p-4">
                      {Math.round(s.purchases).toLocaleString("ru-RU")}
                    </td>
                    <td className="p-4">
                      <Money value={s.averageCheck} />
                    </td>
                    <td className="p-4">
                      <Money value={s.dailyRevenue} />
                    </td>
                    <td className="p-4">
                      <Money value={s.monthlyRevenue} />
                    </td>
                    <td className="p-4">
                      <Money value={s.annualRevenue} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        <p className="mt-5 text-sm leading-6 text-white/55">
          Сценарии предварительные. Фактические результаты зависят от роста
          трафика, аренды, CAPEX, часов работы, штата, условий франшизы и
          технических условий.
        </p>
      </Section>

      <Section
        id="product"
        eyebrow="Продукт и China traffic"
        title="Быстро, визуально, двуязычно и готово к сувенирному спросу"
      >
        <div className="grid gap-3 md:grid-cols-5">
          {productIdeas.map((idea, i) => (
            <Card
              key={idea}
              className={cn(
                "pitch-list-card md:col-span-1",
                i === 2 && "md:col-span-2",
              )}
            >
              <CardHeader className="flex flex-row items-start gap-3 space-y-0 p-4 sm:p-5">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#a57945] sm:h-5 sm:w-5" />
                <CardTitle className="text-base sm:text-lg">{idea}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="risks"
        eyebrow="Управление рисками"
        title="Известные риски и логика снижения"
      >
        <Card className="pitch-light-card bg-[#fff8ed]">
          <CardContent className="p-4 sm:p-6">
            <Accordion type="single" collapsible>
              {risks.map((item) => (
                <AccordionItem key={item.risk} value={item.risk}>
                  <AccordionTrigger>Риск: {item.risk}</AccordionTrigger>
                  <AccordionContent>
                    <strong>Решение:</strong> {item.solution}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </Section>

      <Section
        id="documents"
        eyebrow="Data room"
        title="Проектные документы и рабочие файлы"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {documents.map((doc) => (
            <Card key={doc.title} className="pitch-list-card">
              <CardHeader className="p-4 sm:p-5">
                <div className="flex items-center justify-between gap-3">
                  <FileText className="h-4 w-4 text-[#a57945] sm:h-5 sm:w-5" />
                  <Badge
                    variant={
                      doc.status === "Pending"
                        ? "waiting"
                        : doc.status === "Shared on request"
                          ? "data"
                          : "draft"
                    }
                  >
                    {documentStatusLabels[doc.status]}
                  </Badge>
                </div>
                <CardTitle className="text-base sm:text-lg">
                  {doc.title}
                </CardTitle>
                <CardDescription>{doc.note}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="roadmap"
        eyebrow="Roadmap"
        title="Kanban-доска следующего проектного спринта"
      >
        <div className="grid gap-4 lg:grid-cols-4">
          {Object.entries(roadmap).map(([column, items]) => (
            <Card key={column} className="pitch-light-card">
              <CardHeader className="p-4 pb-2 sm:p-5 sm:pb-3">
                <Badge
                  variant={
                    column === "Done"
                      ? "done"
                      : column === "In Progress"
                        ? "progress"
                        : column === "Waiting"
                          ? "waiting"
                          : "draft"
                  }
                >
                  {roadmapLabels[column] ?? column}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-2 px-4 pb-4 pt-0 sm:px-5 sm:pb-5">
                {items.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white p-3 text-sm font-medium leading-6 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="contacts" eyebrow="Контакты" title="Инициатор проекта">
        <Card className="pitch-light-card bg-[#fff8ed]">
          <CardHeader className="p-5 sm:p-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <CardTitle className="text-2xl sm:text-3xl">
                  Anton Patsura
                </CardTitle>
                <CardDescription className="mt-3 text-base">
                  Инициатор проекта / маркетинг / ресторанные проекты / развитие
                  бизнеса
                </CardDescription>
                <p className="mt-5 max-w-3xl leading-8 text-neutral-700">
                  Опыт: ресторанные и кофейные проекты, запуск food service,
                  бренд-стратегия, локации с пассажирским трафиком, маркетинг и
                  позиционирование.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <a href="https://t.me/" target="_blank">
                    <MessageCircle className="h-4 w-4" />
                    Telegram
                  </a>
                </Button>
                <Button asChild variant="ghost">
                  <a href="mailto:hello@example.com">
                    <Mail className="h-4 w-4" />
                    Email
                  </a>
                </Button>
                <Button asChild variant="ghost">
                  <a href="https://wa.me/" target="_blank">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
                <Button asChild variant="ghost">
                  <a href="mailto:hello@example.com?subject=Surf%20Coffee%20Terminal%20Spot%20pitch%20deck%20request">
                    <Download className="h-4 w-4" />
                    Запросить pitch deck
                  </a>
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>
      </Section>

      <footer className="border-t border-white/10 px-4 py-10 text-center text-sm text-white/45">
        <Plane className="mx-auto mb-3 h-5 w-5 text-[#d9b98c]" />
        Surf Coffee Terminal Spot · Premium travel coffee dashboard · Data room
        только с placeholder-данными
      </footer>
    </main>
  );
}
