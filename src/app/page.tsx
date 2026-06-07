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
  heroCards,
  locationPlaceholders,
  locationSignals,
  priceMap,
  productIdeas,
  projectStatuses,
  risks,
  roadmap,
  scenarioConfigs,
  siteCopy,
  surfFit,
  tableLabels,
  type StatusLabel,
} from "@/data/project";
import { cn } from "@/lib/utils";

const badgeVariant: Record<StatusLabel, "done" | "progress" | "waiting" | "data" | "draft" | "risk"> = {
  Готово: "done",
  "В работе": "progress",
  Ожидаем: "waiting",
  "Нужны данные": "data",
  Черновик: "draft",
  Риск: "risk",
};

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto w-full max-w-7xl scroll-mt-20 px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="mb-6 max-w-3xl sm:mb-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#d9b98c]">{eyebrow}</p>
        <h2 className="text-[1.65rem] font-semibold leading-tight tracking-[-0.04em] text-[#fff8ed] sm:text-4xl lg:text-5xl">{title}</h2>
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
      scenarioConfigs.map((scenario) => {
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
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#d9b98c] text-[#181715]"><Coffee className="h-5 w-5" /></span>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#fff8ed]">{siteCopy.headerLabel}</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            {siteCopy.nav.map(([label, href]) => <a key={href} className="transition hover:text-[#d9b98c]" href={href}>{label}</a>)}
          </nav>
        </div>
      </header>

      <section id="overview" className="relative mx-auto grid min-h-[calc(92vh-73px)] w-full lg:min-h-[calc(100vh-73px)] max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="absolute right-[-10rem] top-20 hidden h-96 w-96 rounded-full bg-[#d9b98c]/10 blur-3xl lg:block" />
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <Badge variant="dark" className="mb-6 border-[#d9b98c]/25 text-[#f3d7ad]"><Globe2 className="mr-2 h-3.5 w-3.5" /> {siteCopy.brandAccent}</Badge>
          <h1 className="max-w-4xl text-[2.65rem] font-semibold leading-[0.98] tracking-[-0.06em] text-[#fff8ed] sm:text-6xl sm:leading-[0.95] lg:text-7xl">
            {siteCopy.hero.title}
          </h1>
          <p className="mt-5 text-xl text-[#d9b98c]">{siteCopy.hero.subtitle}</p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/68 sm:mt-6 sm:text-lg sm:leading-8">
            {siteCopy.hero.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {siteCopy.hero.buttons.map((button, index) => (
              <Button key={button.href} asChild size="lg" variant={button.variant}>
                <a href={button.href}>{button.label}{index === 0 && <ArrowRight className="h-4 w-4" />}</a>
              </Button>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="grid gap-4 sm:grid-cols-2">
          {heroCards.map((card) => (
            <Card key={card.label} className="bg-[#f7f1e8]/95">
              <CardHeader className="p-5">
                <CardDescription className="uppercase tracking-[0.2em]">{card.label}</CardDescription>
                <CardTitle className="text-lg">{card.value}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </motion.div>
      </section>

      <Section id="status" eyebrow={siteCopy.sections.status.eyebrow} title={siteCopy.sections.status.title}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projectStatuses.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#a57945]" />
                  <Badge variant={badgeVariant[item.status]}>{item.status}</Badge>
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="location" eyebrow={siteCopy.sections.location.eyebrow} title={siteCopy.sections.location.title}>
        <div className="grid gap-5 sm:gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="bg-[#fff8ed]">
            <CardHeader>
              <CardDescription className="text-base leading-6 sm:leading-7">
                {siteCopy.locationText}
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
              {locationSignals.map((signal) => <div key={signal} className="flex items-center gap-3 rounded-2xl bg-white p-4 text-sm font-medium"><MapPin className="h-4 w-4 text-[#a57945]" />{signal}</div>)}
            </CardContent>
          </Card>
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
            {locationPlaceholders.map((placeholder) => (
              <div key={placeholder.title} className="glass-panel overflow-hidden rounded-[1.75rem]">
                <div className="flex aspect-[4/3] flex-col items-center justify-center border-b border-white/10 bg-[linear-gradient(135deg,rgba(217,185,140,0.16),rgba(255,255,255,0.04))] p-8 text-center">
                  <span className="mb-3 rounded-full border border-[#d9b98c]/25 px-3 py-1 text-xs uppercase tracking-[0.25em] text-[#d9b98c]">{placeholder.label}</span>
                  <strong className="text-2xl font-semibold tracking-[-0.03em] text-[#fff8ed]">{placeholder.title}</strong>
                </div>
                <p className="p-4 text-sm leading-5 text-white/60 sm:p-5 sm:leading-6">{placeholder.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="why" eyebrow={siteCopy.sections.why.eyebrow} title={siteCopy.sections.why.title}>
        <Card>
          <CardContent className="p-0">
            <div className="grid border-b border-black/10 bg-white/45 p-5 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 sm:grid-cols-2"><span>{tableLabels.surfDna}</span><span>{tableLabels.terminalFit}</span></div>
            {surfFit.map(([dna, fit]) => <div key={dna} className="grid gap-2 border-b border-black/10 p-5 last:border-b-0 sm:grid-cols-2"><strong>{dna}</strong><span className="text-neutral-600">{fit}</span></div>)}
          </CardContent>
        </Card>
        <p className="mt-5 rounded-[1.75rem] border border-[#d9b98c]/20 bg-[#d9b98c]/10 p-5 text-lg font-medium leading-7 text-[#ffe2b8] sm:mt-6 sm:p-6 sm:text-xl">{siteCopy.surfCoffeeRitual}</p>
      </Section>

      <Section id="market" eyebrow={siteCopy.sections.market.eyebrow} title={siteCopy.sections.market.title}>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {competitors.map((c) => (
            <Card key={c.name}>
              <CardHeader>
                <Badge variant="outline">{c.role}</Badge>
                <CardTitle>{c.name}</CardTitle>
                <CardDescription>{c.format}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-5 sm:leading-6 text-neutral-700">
                <p><strong>{siteCopy.competitorLabels.priceSignal}:</strong> {c.price}</p>
                <p><strong>{siteCopy.competitorLabels.insight}:</strong> {c.insight}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="mt-5 bg-[#fff8ed] sm:mt-6"><CardHeader><CardTitle>{siteCopy.marketConclusionTitle}</CardTitle><CardDescription className="text-base leading-6 sm:leading-7">{siteCopy.marketConclusion}</CardDescription></CardHeader></Card>
      </Section>

      <Section id="price" eyebrow={siteCopy.sections.price.eyebrow} title={siteCopy.sections.price.title}>
        <div className="grid gap-5 sm:gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead className="bg-white/55 text-xs uppercase tracking-[0.2em] text-neutral-500"><tr>{tableLabels.priceColumns.map((h) => <th key={h} className="p-4">{h}</th>)}</tr></thead>
                <tbody>{priceMap.map((row) => <tr key={row.player} className="border-t border-black/10"><td className="p-4 font-semibold">{row.player}</td><td className="p-4">{row.cappuccino}</td><td className="p-4">{row.latte}</td><td className="p-4">{row.signature}</td><td className="p-4">{row.average}</td></tr>)}</tbody>
              </table>
            </div>
          </Card>
          <Card><CardHeader><CardTitle>{tableLabels.chartTitle}</CardTitle></CardHeader><CardContent className="h-80"><ResponsiveContainer width="100%" height="100%" minWidth={0}><BarChart data={priceMap}><CartesianGrid strokeDasharray="3 3" vertical={false} /><XAxis dataKey="player" tick={{ fontSize: 11 }} /><YAxis /><Tooltip /><Bar dataKey="signatureHigh" radius={[10, 10, 0, 0]}>{priceMap.map((_, i) => <Cell key={i} fill={["#a57945", "#c89b63", "#d9b98c", "#7c5b35"][i]} />)}</Bar></BarChart></ResponsiveContainer></CardContent></Card>
        </div>
      </Section>

      <Section id="economics" eyebrow={siteCopy.sections.economics.eyebrow} title={siteCopy.sections.economics.title}>
        <Card className="mb-5 bg-[#fff8ed] sm:mb-6"><CardContent className="grid gap-4 p-5 sm:p-6 md:grid-cols-2">
          <label className="space-y-2 text-sm font-semibold">{tableLabels.annualFlow}<input className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3" type="number" value={annualFlow} onChange={(e) => setAnnualFlow(Number(e.target.value))} /></label>
          <label className="space-y-2 text-sm font-semibold">{tableLabels.averageCheck}<input className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3" type="number" value={averageCheck} onChange={(e) => setAverageCheck(Number(e.target.value))} /></label>
        </CardContent></Card>
        <Card className="overflow-hidden"><div className="overflow-x-auto"><table className="w-full min-w-[980px] text-left text-sm"><thead className="bg-white/55 text-xs uppercase tracking-[0.18em] text-neutral-500"><tr>{tableLabels.scenarioColumns.map((h) => <th key={h} className="p-4">{h}</th>)}</tr></thead><tbody>{scenarios.map((s) => <tr key={s.name} className="border-t border-black/10"><td className="p-4 font-semibold">{s.name}</td><td className="p-4">{Math.round(s.dailyPassengers).toLocaleString("ru-RU")}</td><td className="p-4">{Math.round(s.conversion * 100)}%</td><td className="p-4">{Math.round(s.purchases).toLocaleString("ru-RU")}</td><td className="p-4"><Money value={s.averageCheck} /></td><td className="p-4"><Money value={s.dailyRevenue} /></td><td className="p-4"><Money value={s.monthlyRevenue} /></td><td className="p-4"><Money value={s.annualRevenue} /></td></tr>)}</tbody></table></div></Card>
        <p className="mt-4 text-sm leading-5 text-white/55 sm:mt-5 sm:leading-6">{siteCopy.economicsDisclaimer}</p>
      </Section>

      <Section id="product" eyebrow={siteCopy.sections.product.eyebrow} title={siteCopy.sections.product.title}>
        <div className="grid gap-4 md:grid-cols-5">{productIdeas.map((idea, i) => <Card key={idea} className={cn("md:col-span-1", i === 2 && "md:col-span-2")}><CardHeader><Sparkles className="h-5 w-5 text-[#a57945]" /><CardTitle className="text-lg">{idea}</CardTitle></CardHeader></Card>)}</div>
      </Section>

      <Section id="risks" eyebrow={siteCopy.sections.risks.eyebrow} title={siteCopy.sections.risks.title}>
        <Card className="bg-[#fff8ed]"><CardContent className="p-5 sm:p-6"><Accordion type="single" collapsible>{risks.map((item) => <AccordionItem key={item.risk} value={item.risk}><AccordionTrigger>{siteCopy.riskLabels.risk}: {item.risk}</AccordionTrigger><AccordionContent><strong>{siteCopy.riskLabels.solution}:</strong> {item.solution}</AccordionContent></AccordionItem>)}</Accordion></CardContent></Card>
      </Section>

      <Section id="documents" eyebrow={siteCopy.sections.documents.eyebrow} title={siteCopy.sections.documents.title}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{documents.map((doc) => <Card key={doc.title}><CardHeader><div className="flex items-center justify-between gap-3"><FileText className="h-5 w-5 text-[#a57945]" /><Badge variant={doc.status === "Pending" ? "waiting" : doc.status === "Shared on request" ? "data" : "draft"}>{doc.status}</Badge></div><CardTitle className="text-lg">{doc.title}</CardTitle><CardDescription>{doc.note}</CardDescription></CardHeader></Card>)}</div>
      </Section>

      <Section id="roadmap" eyebrow={siteCopy.sections.roadmap.eyebrow} title={siteCopy.sections.roadmap.title}>
        <div className="grid gap-5 lg:grid-cols-4">{Object.entries(roadmap).map(([column, items]) => <Card key={column}><CardHeader><Badge variant={column === "Готово" ? "done" : column === "В работе" ? "progress" : column === "Ожидаем" ? "waiting" : "draft"}>{column}</Badge></CardHeader><CardContent className="space-y-3">{items.map((item) => <div key={item} className="rounded-2xl bg-white p-4 text-sm font-medium shadow-sm">{item}</div>)}</CardContent></Card>)}</div>
      </Section>

      <Section id="contacts" eyebrow={siteCopy.sections.contacts.eyebrow} title={siteCopy.sections.contacts.title}>
        <Card className="bg-[#fff8ed]"><CardHeader><div className="flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-end lg:justify-between"><div><CardTitle className="text-2xl sm:text-3xl">{siteCopy.contacts.name}</CardTitle><CardDescription className="mt-3 text-base">{siteCopy.contacts.role}</CardDescription><p className="mt-4 max-w-3xl leading-6 text-neutral-700 sm:mt-5 sm:leading-7">{siteCopy.contacts.experience}</p></div><div className="flex flex-wrap gap-3"><Button asChild><a href="https://t.me/" target="_blank"><MessageCircle className="h-4 w-4" />{siteCopy.contacts.buttons.telegram}</a></Button><Button asChild variant="ghost"><a href="mailto:hello@example.com"><Mail className="h-4 w-4" />{siteCopy.contacts.buttons.email}</a></Button><Button asChild variant="ghost"><a href="https://wa.me/" target="_blank"><MessageCircle className="h-4 w-4" />{siteCopy.contacts.buttons.whatsapp}</a></Button><Button asChild variant="ghost"><a href="mailto:hello@example.com?subject=Surf%20Coffee%20Terminal%20Spot%20pitch%20deck%20request"><Download className="h-4 w-4" />{siteCopy.contacts.buttons.pitch}</a></Button></div></div></CardHeader></Card>
      </Section>

      <footer className="border-t border-white/10 px-4 py-8 text-center text-sm leading-6 text-white/45 sm:py-10"><Plane className="mx-auto mb-3 h-5 w-5 text-[#d9b98c]" />{siteCopy.footer}</footer>
    </main>
  );
}
