'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BottomNav from '@/components/BottomNav';
import { Apple, Dumbbell, Brain, Info, ChevronDown, ChevronUp } from 'lucide-react';

type PillProps = { label: string; icon?: React.ReactNode; className?: string };
const Pill: React.FC<PillProps> = ({ label, icon, className }) => (
  <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${className}`}>
    {icon} {label}
  </span>
);

type StatBarProps = { label: string; value: number; barClass: string };
const StatBar: React.FC<StatBarProps> = ({ label, value, barClass }) => (
  <div className="space-y-1">
    <div className="flex items-center justify-between text-sm">
      <span className="text-zinc-600">{label}</span>
      <span className="font-semibold">{value}%</span>
    </div>
    <div className="h-2 w-full rounded-full bg-zinc-100">
      <div
        className={`h-2 rounded-full ${barClass}`}
        style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }}
      />
    </div>
  </div>
);

export default function Home() {
  // Placeholder daily values (wire up to real data later)
  const nutrition = 70;   // % of today’s target met
  const fitness = 40;
  const mind = 55;

  // Simple Balance Score (avg) – swap for your real formula
  const balanceScore = Math.round((nutrition + fitness + mind) / 3);

  // Accordion: only one section open at a time
  type Panel = 'nutrition' | 'fitness' | 'mind' | null;
  const [openPanel, setOpenPanel] = useState<Panel>(null);
  const toggle = (p: Panel) => setOpenPanel(prev => (prev === p ? null : p));

  const tips = [
    'Short on time? Try a 5–7 minute movement burst between classes.',
    'Hydration target: 2 more glasses to hit today’s goal.',
  ];

  return (
    <main className="mx-auto min-h-screen max-w-md bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-zinc-100 bg-white/85 backdrop-blur">
        <div className="mx-auto max-w-md px-5 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-zinc-200">
                <Image
                  src="/images/avatar.png" // add a placeholder avatar to /public/images
                  alt="Profile"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-zinc-500">BalanceUp</p>
                <h1 className="text-xl font-bold leading-tight">Welcome back, <span className="text-zinc-800">Faisal</span></h1>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-zinc-500">Today</p>
              <p className="text-sm font-medium">{new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="mx-auto max-w-md space-y-6 px-5 py-5 pb-20">
        {/* Balance Score Card */}
        <section className="rounded-2xl border border-zinc-100 p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-zinc-600">Balance Score</p>
              <p className="text-3xl font-extrabold">{balanceScore}</p>
            </div>
            <div className="text-right space-y-2">
              <Pill
                label="Nutrition"
                icon={<Apple className="h-3.5 w-3.5" />}
                className="bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100"
              />
              <Pill
                label="Fitness"
                icon={<Dumbbell className="h-3.5 w-3.5" />}
                className="bg-cyan-50 text-cyan-700 ring-1 ring-cyan-100"
              />
              <Pill
                label="Mind"
                icon={<Brain className="h-3.5 w-3.5" />}
                className="bg-violet-50 text-violet-700 ring-1 ring-violet-100"
              />
            </div>
          </div>

          <div className="mt-4 space-y-3">
            <StatBar label="Nutrition" value={nutrition} barClass="bg-emerald-500" />
            <StatBar label="Fitness" value={fitness} barClass="bg-cyan-500" />
            <StatBar label="Mindfulness" value={mind} barClass="bg-violet-500" />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            <Link
              href="/nutrition"
              className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-center text-sm font-medium text-emerald-800 hover:bg-emerald-100 active:scale-[0.99]"
            >
              Log Meal
            </Link>
            <Link
              href="/fitness"
              className="rounded-xl border border-cyan-200 bg-cyan-50 px-3 py-2 text-center text-sm font-medium text-cyan-800 hover:bg-cyan-100 active:scale-[0.99]"
            >
              Quick Fit
            </Link>
            <Link
              href="/mind"
              className="rounded-xl border border-violet-200 bg-violet-50 px-3 py-2 text-center text-sm font-medium text-violet-800 hover:bg-violet-100 active:scale-[0.99]"
            >
              Breathe 2m
            </Link>
          </div>
        </section>

        {/* Expandable Widgets (Accordion style) */}
        <section className="grid grid-cols-1 gap-4">
          {/* Nutrition widget */}
          <button
            onClick={() => toggle('nutrition')}
            className={`w-full rounded-2xl border p-4 text-left shadow-sm transition
              ${openPanel === 'nutrition'
                ? 'border-emerald-300 bg-emerald-50'
                : 'border-zinc-100 bg-white hover:bg-zinc-50'}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                  <Apple className="h-4 w-4 text-emerald-700" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">Nutrition</p>
                  <p className="text-xs text-zinc-600">2/3 meals logged · +1 hydration reminder</p>
                </div>
              </div>
              {openPanel === 'nutrition'
                ? <ChevronUp className="h-5 w-5 text-emerald-700" />
                : <ChevronDown className="h-5 w-5 text-zinc-400" />}
            </div>

            {openPanel === 'nutrition' && (
              <div className="mt-3 space-y-2 text-sm text-zinc-700">
                <div className="rounded-lg border border-emerald-200 bg-white p-3">
                  <p className="font-medium">Today’s suggestion</p>
                  <p className="mt-1 text-zinc-600">High-lecture day: aim for a protein+carb lunch box and 2L of water.</p>
                </div>
                <div className="flex gap-2">
                  <Link href="/nutrition" className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-emerald-800 hover:bg-emerald-100">
                    View Planner
                  </Link>
                  <Link href="/nutrition" className="rounded-md border border-emerald-200 bg-white px-3 py-1.5 text-emerald-800 hover:bg-emerald-50">
                    Log Meal
                  </Link>
                </div>
              </div>
            )}
          </button>

          {/* Fitness widget */}
          <button
            onClick={() => toggle('fitness')}
            className={`w-full rounded-2xl border p-4 text-left shadow-sm transition
              ${openPanel === 'fitness'
                ? 'border-cyan-300 bg-cyan-50'
                : 'border-zinc-100 bg-white hover:bg-zinc-50'}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100">
                  <Dumbbell className="h-4 w-4 text-cyan-700" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">Quick Fit</p>
                  <p className="text-xs text-zinc-600">Suggested: 7-min full-body • No equipment</p>
                </div>
              </div>
              {openPanel === 'fitness'
                ? <ChevronUp className="h-5 w-5 text-cyan-700" />
                : <ChevronDown className="h-5 w-5 text-zinc-400" />}
            </div>

            {openPanel === 'fitness' && (
              <div className="mt-3 space-y-2 text-sm text-zinc-700">
                <div className="rounded-lg border border-cyan-200 bg-white p-3">
                  <p className="font-medium">Mini routine</p>
                  <ul className="mt-1 list-disc pl-5 text-zinc-600">
                    <li>1 min marching + arm swings</li>
                    <li>5 × 20s air squats / 10s rest</li>
                    <li>2 min mobility: hips + shoulders</li>
                  </ul>
                </div>
                <div className="flex gap-2">
                  <Link href="/fitness" className="rounded-md border border-cyan-200 bg-cyan-50 px-3 py-1.5 text-cyan-800 hover:bg-cyan-100">
                    Start Session
                  </Link>
                  <Link href="/fitness" className="rounded-md border border-cyan-200 bg-white px-3 py-1.5 text-cyan-800 hover:bg-cyan-50">
                    Browse Workouts
                  </Link>
                </div>
              </div>
            )}
          </button>

          {/* Mindfulness widget */}
          <button
            onClick={() => toggle('mind')}
            className={`w-full rounded-2xl border p-4 text-left shadow-sm transition
              ${openPanel === 'mind'
                ? 'border-violet-300 bg-violet-50'
                : 'border-zinc-100 bg-white hover:bg-zinc-50'}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-violet-100">
                  <Brain className="h-4 w-4 text-violet-700" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">Mindfulness</p>
                  <p className="text-xs text-zinc-600">2-minute box breathing • Boost focus</p>
                </div>
              </div>
              {openPanel === 'mind'
                ? <ChevronUp className="h-5 w-5 text-violet-700" />
                : <ChevronDown className="h-5 w-5 text-zinc-400" />}
            </div>

            {openPanel === 'mind' && (
              <div className="mt-3 space-y-2 text-sm text-zinc-700">
                <div className="rounded-lg border border-violet-200 bg-white p-3">
                  <p className="font-medium">Try this now</p>
                  <p className="mt-1 text-zinc-600">Box breathing: inhale 4 • hold 4 • exhale 4 • hold 4 — repeat 6 times.</p>
                </div>
                <div className="flex gap-2">
                  <Link href="/mind" className="rounded-md border border-violet-200 bg-violet-50 px-3 py-1.5 text-violet-800 hover:bg-violet-100">
                    Start Breathing
                  </Link>
                  <Link href="/mind" className="rounded-md border border-violet-200 bg-white px-3 py-1.5 text-violet-800 hover:bg-violet-50">
                    More Sessions
                  </Link>
                </div>
              </div>
            )}
          </button>
        </section>

        {/* Tip of the day */}
        <section className="rounded-2xl border border-zinc-100 p-4 shadow-sm">
          <div className="mb-2 inline-flex items-center gap-1 text-sm font-semibold">
            <Info className="h-4 w-4 text-zinc-700" />
            <span>Tips</span>
          </div>
          <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-zinc-700">
            {tips.map((t, i) => (<li key={i}>{t}</li>))}
          </ul>
        </section>
      </div>

      <BottomNav />
    </main>
  );
}
