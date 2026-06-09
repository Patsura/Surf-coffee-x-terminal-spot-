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
  MessageCircle,
  Plane,
  Sparkles,
} from "lucide-react";
import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { competitors, documents } from "@/data/project";
import { cn } from "@/lib/utils";

const nav = [
  ["Идея", "#overview"],
  ["Локация", "#location"],
  ["Концепция", "#concept"],
  ["Стороны", "#stakeholders"],
  ["Документы", "#documents"],
];

const routeSteps = ["RU", "Terminal Spot", "CN"];

const conceptPoints = [
  "кофе с собой перед посадкой",
  "напиток во время ожидания",
  "первая покупка после прибытия",
  "дрипы, зерно, стаканы и мерч как сувенир маршрута",
  "RU/EN/CN навигация",
  "локальная линейка напитков как гипотеза",
];

const brandFit = [
  ["Movement", "международный маршрут"],
  ["Freedom", "пересечение границы"],
  ["Community", "точка встречи пассажиров"],
  ["Visual culture", "фотогеничная среда терминала"],
  ["Merch", "сувенирная логика"],
  [
    "Specialty coffee",
    "премиальная альтернатива стандартному кофе в терминале",
  ],
];

const stakeholderValue = [
  {
    title: "Арендодатель",
    points: [
      "премиальный сервис в пассажирском ядре",
      "дополнительная причина задержаться в терминале",
      "бренд, усиливающий международный образ объекта",
    ],
  },
  {
    title: "Surf Coffee",
    points: [
      "видимый travel-format на маршруте Россия — Китай",
      "новый сценарий потребления бренда",
      "контентная и мерч-логика без городской конкуренции",
    ],
  },
  {
    title: "Инвестор",
    points: [
      "компактный формат с понятной операционной гипотезой",
      "проверяемая модель спроса",
      "потенциал premium-чека и сувенирных продаж",
    ],
  },
];

const readinessDone = [
  "локация определена",
  "барная зона предусмотрена проектом терминала",
  "проектная документация изучена",
  "заявка Surf Coffee отправлена",
  "анализ рынка собран",
  "preliminary pitch подготовлен",
];

const readinessNext = [
  "компактный формат с Surf Coffee",
  "технические условия",
  "аренду",
  "CAPEX",
  "операционную модель",
  "финальную финансовую модель",
];

function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "mx-auto w-full max-w-7xl px-4 py-9 sm:px-6 sm:py-14 lg:px-8 lg:py-18",
        className,
      )}
    >
      <div className="mb-6 max-w-3xl sm:mb-8">
        <p className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[#d9b98c] sm:text-xs sm:tracking-[0.35em]">
          {eyebrow}
        </p>
        <h2 className="text-3xl font-semibold leading-tight tracking-[-0.05em] text-[#fff8ed] sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function RouteDiagram({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={cn("route-diagram", compact && "route-diagram-compact")}
      aria-label="RU to Terminal Spot to CN"
    >
      {routeSteps.map((step, index) => (
        <div
          key={step}
          className={cn("route-pill", index === 1 && "route-pill-center")}
        >
          {step}
        </div>
      ))}
    </div>
  );
}

export default function Home() {
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
        className="relative mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-16 lg:min-h-[calc(92vh-73px)] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8"
      >
        <div className="absolute right-[-10rem] top-20 hidden h-96 w-96 rounded-full bg-[#d9b98c]/10 blur-3xl lg:block" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Badge
            variant="dark"
            className="mb-5 border-[#d9b98c]/25 text-[#f3d7ad]"
          >
            <Globe2 className="mr-2 h-3.5 w-3.5" /> Кофейная точка на маршруте
            Россия — Китай
          </Badge>
          <h1 className="max-w-4xl text-[3rem] font-semibold leading-[0.95] tracking-[-0.07em] text-[#fff8ed] sm:text-6xl lg:text-7xl">
            Surf Coffee Terminal Spot
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            Терминал канатной дороги Благовещенск — Хэйхэ: кофе до отправления,
            после прибытия и во время ожидания.
          </p>
          <p className="mt-6 max-w-3xl rounded-[1.5rem] border border-[#d9b98c]/25 bg-[#d9b98c]/10 p-5 text-lg font-medium leading-8 text-[#ffe2b8]">
            Это не кофейня под эскалатором. Это брендовая точка на международном
            маршруте Россия — Китай.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg">
              <a href="#concept">
                Смотреть концепцию <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="#documents">Материалы по запросу</a>
            </Button>
            <Button
              asChild
              className="hidden sm:inline-flex"
              size="lg"
              variant="outline"
            >
              <a href="#contacts">Связаться</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="hero-terminal glass-panel rounded-[2rem] p-5 sm:p-7"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-[#d9b98c]">
            Premium terminal logic
          </p>
          <RouteDiagram />
          <div className="mt-6 grid gap-3 text-sm leading-6 text-white/68 sm:grid-cols-3">
            <span>До посадки</span>
            <span>Ожидание</span>
            <span>После прибытия</span>
          </div>
        </motion.div>
      </section>

      <Section
        id="location"
        eyebrow="Уникальность локации"
        title="Терминальный формат работает не как городская кофейня"
      >
        <div className="story-block glass-panel rounded-[2rem] p-5 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <p className="text-2xl font-medium leading-9 tracking-[-0.04em] text-[#fff8ed] sm:text-3xl sm:leading-10">
              Городские кофейни конкурируют за привычку. Терминальный формат
              работает иначе: здесь кофе становится частью маршрута, ожидания,
              встречи, возвращения и впечатления от поездки.
            </p>
            <div className="rounded-[1.5rem] border border-[#d9b98c]/20 bg-[#11100f]/70 p-4 sm:p-6">
              <RouteDiagram compact />
              <p className="mt-5 text-sm leading-6 text-white/60">
                Маршрут превращает покупку кофе в travel-ритуал: быстро,
                визуально, понятно на нескольких языках.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="concept"
        eyebrow="Концепция точки"
        title="Compact Terminal Spot: не витрина с кофе, а сервис маршрута"
      >
        <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
          <Card className="bg-[#fff8ed]">
            <CardHeader className="p-5 sm:p-6">
              <CardDescription className="uppercase tracking-[0.22em]">
                Format
              </CardDescription>
              <CardTitle className="text-2xl">Compact Terminal Spot</CardTitle>
              <CardDescription className="text-base leading-7">
                Малый формат с высокой ясностью предложения: кофе, ожидание,
                прибытие, сувенир и навигация для международного пассажира.
              </CardDescription>
            </CardHeader>
          </Card>
          <div className="grid gap-2 sm:grid-cols-2">
            {conceptPoints.map((point) => (
              <div key={point} className="compact-row">
                <Sparkles className="h-4 w-4 shrink-0 text-[#d9b98c]" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        id="brand"
        eyebrow="Почему Surf Coffee"
        title="Brand fit matrix: ценности бренда уже совпадают с маршрутом"
      >
        <div className="matrix-panel overflow-hidden rounded-[2rem] border border-white/10">
          {brandFit.map(([dna, fit]) => (
            <div
              key={dna}
              className="grid gap-2 border-b border-white/10 p-4 last:border-b-0 sm:grid-cols-[0.45fr_1fr] sm:p-5"
            >
              <strong className="text-[#f3d7ad]">{dna}</strong>
              <span className="text-white/68">{fit}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="stakeholders"
        eyebrow="Value split"
        title="Что получают арендодатель, Surf Coffee и инвестор"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {stakeholderValue.map((column) => (
            <Card key={column.title} className="bg-[#fff8ed]">
              <CardHeader className="p-5">
                <CardTitle className="text-xl">{column.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 px-5 pb-5 pt-0">
                {column.points.map((point) => (
                  <div
                    key={point}
                    className="flex gap-3 text-sm leading-6 text-neutral-700"
                  >
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#a57945]" />
                    {point}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="market"
        eyebrow="Market proof"
        title="Конкуренты доказывают спрос, но не закрывают travel coffee niche"
      >
        <div className="grid gap-3 md:grid-cols-2">
          {competitors.map((c) => (
            <div key={c.name} className="proof-row">
              <div>
                <strong>{c.name}</strong>
                <p>{c.role}</p>
              </div>
              <span>{c.format}</span>
            </div>
          ))}
        </div>
        <p className="mt-5 rounded-[1.5rem] border border-[#d9b98c]/20 bg-[#d9b98c]/10 p-5 text-lg font-medium leading-8 text-[#ffe2b8]">
          В Благовещенске уже сформирована кофейная культура, но ниша
          международного travel coffee spot остаётся свободной.
        </p>
      </Section>

      <Section
        id="readiness"
        eyebrow="Project readiness"
        title="Проект готов к деловому согласованию следующего уровня"
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="timeline-panel">
            <Badge variant="done">Уже есть</Badge>
            {readinessDone.map((item) => (
              <div key={item} className="timeline-row">
                <CheckCircle2 className="h-4 w-4 text-[#d9b98c]" />
                {item}
              </div>
            ))}
          </div>
          <div className="timeline-panel">
            <Badge variant="waiting">Нужно согласовать</Badge>
            {readinessNext.map((item) => (
              <div key={item} className="timeline-row">
                <ArrowRight className="h-4 w-4 text-[#d9b98c]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="documents" eyebrow="Data room" title="Материалы по запросу">
        <Card className="bg-[#fff8ed]">
          <CardContent className="divide-y divide-black/10 p-0">
            {documents.map((doc) => (
              <div
                key={doc.title}
                className="flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5"
              >
                <div className="flex items-center gap-3">
                  <FileText className="h-4 w-4 text-[#a57945]" />
                  <strong>{doc.title}</strong>
                </div>
                <span className="text-sm text-neutral-600">{doc.note}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </Section>

      <Section id="contacts" eyebrow="Контакты" title="Инициатор проекта">
        <Card className="bg-[#fff8ed]">
          <CardHeader>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <CardTitle className="text-3xl">Anton Patsura</CardTitle>
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
        Surf Coffee Terminal Spot · Premium investment one-pager · Материалы по
        запросу
      </footer>
    </main>
  );
}
