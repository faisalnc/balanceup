'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import {
  Search as SearchIcon,
  Apple,
  Dumbbell,
  Brain,
  Newspaper,
  XCircle,
} from 'lucide-react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { CONTENT } from '@/data/content';
import type { ContentItem, Category } from '@/types/Content';

const CATEGORY_STYLES: Record<
  Category,
  {
    ring: string;
    badge: string;
    icon: JSX.Element;
    label: string;
    chip: string;
    chipActive: string;
  }
> = {
  nutrition: {
    ring: 'ring-emerald-300',
    badge: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
    icon: <Apple className="h-4 w-4" />,
    label: 'Nutrition',
    chip: 'border-emerald-200 text-emerald-700',
    chipActive:
      'bg-emerald-50 border-emerald-300 text-emerald-800 ring-1 ring-emerald-200',
  },
  fitness: {
    ring: 'ring-cyan-300',
    badge: 'bg-cyan-50 text-cyan-700 ring-cyan-200',
    icon: <Dumbbell className="h-4 w-4" />,
    label: 'Fitness',
    chip: 'border-cyan-200 text-cyan-700',
    chipActive:
      'bg-cyan-50 border-cyan-300 text-cyan-800 ring-1 ring-cyan-200',
  },
  mind: {
    ring: 'ring-violet-300',
    badge: 'bg-violet-50 text-violet-700 ring-violet-200',
    icon: <Brain className="h-4 w-4" />,
    label: 'Mind',
    chip: 'border-violet-200 text-violet-700',
    chipActive:
      'bg-violet-50 border-violet-300 text-violet-800 ring-1 ring-violet-200',
  },
  post: {
    ring: 'ring-amber-300',
    badge: 'bg-amber-50 text-amber-800 ring-amber-200',
    icon: <Newspaper className="h-4 w-4" />,
    label: 'Post',
    chip: 'border-amber-200 text-amber-800',
    chipActive:
      'bg-amber-50 border-amber-300 text-amber-900 ring-1 ring-amber-200',
  },
};

export default function SearchPage() {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();

  const initialQ = sp.get('q') ?? '';
  const initialCats = (sp.get('cat') ?? '')
    .split(',')
    .filter(Boolean) as Category[];

  const [query, setQuery] = useState(initialQ);
  const [selected, setSelected] = useState<Set<Category>>(new Set(initialCats));

  const buildQS = () => {
    const p = new URLSearchParams();
    if (query.trim()) p.set('q', query.trim());
    if (selected.size) p.set('cat', [...selected].join(','));
    const s = p.toString();
    return s ? `?${s}` : '';
  };

  useEffect(() => {
    router.replace(`${pathname}${buildQS()}`, { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, selected]);

  const toggleCat = (cat: Category) =>
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(cat) ? next.delete(cat) : next.add(cat);
      return next;
    });

  const clearFilters = () => setSelected(new Set());
  const clearAll = () => {
    setQuery('');
    setSelected(new Set());
  };

  const textMatches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return CONTENT;
    return CONTENT.filter((item: ContentItem) => {
      const hay = `${item.title} ${item.description} ${
        item.tags?.join(' ') ?? ''
      }`.toLowerCase();
      return hay.includes(q);
    });
  }, [query]);

  const results = useMemo(() => {
    if (selected.size === 0) return textMatches;
    return textMatches.filter((i) => selected.has(i.category));
  }, [textMatches, selected]);

  const qs = buildQS();

  // ✅ random static working food images from Pexels
  const foodImages = [
    'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=400',
  ];

  return (
    <main className="mx-auto max-w-md min-h-screen bg-white px-4 py-0">
      {/* STICKY TOP */}
      <div className="sticky top-0 z-30 -mx-4 border-b border-zinc-200 bg-white/90 px-4 py-4 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <header className="mb-3">
          <h1 className="text-xl font-bold">Search</h1>
          <p className="text-sm text-zinc-500">
            Find meals, workouts, mindfulness, and posts
          </p>
        </header>

        <div className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2">
          <SearchIcon className="h-5 w-5 text-zinc-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type to search…"
            className="w-full text-sm outline-none placeholder:text-zinc-400"
            aria-label="Search content"
          />
          {(query || selected.size > 0) && (
            <button
              onClick={clearAll}
              className="inline-flex items-center gap-1 rounded-md border border-zinc-200 px-2 py-1 text-xs text-zinc-600 hover:bg-zinc-50"
              aria-label="Clear search and filters"
            >
              <XCircle className="h-4 w-4" />
              Clear
            </button>
          )}
        </div>

        {/* Chips */}
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            onClick={clearFilters}
            className={`rounded-full border px-3 py-1 text-xs font-medium ${
              selected.size === 0
                ? 'bg-zinc-50 border-zinc-300 text-zinc-900 ring-1 ring-zinc-200'
                : 'border-zinc-200 text-zinc-700 hover:bg-zinc-50'
            }`}
            aria-pressed={selected.size === 0}
          >
            All
          </button>

          {(Object.keys(CATEGORY_STYLES) as Category[]).map((cat) => {
            const s = CATEGORY_STYLES[cat];
            const active = selected.has(cat);
            return (
              <button
                key={cat}
                onClick={() => toggleCat(cat)}
                aria-pressed={active}
                className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium transition ${
                  active ? s.chipActive : `${s.chip} hover:bg-zinc-50`
                }`}
              >
                {s.icon}
                {s.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* RESULTS LIST */}
      <section className="space-y-3 px-0 py-4">
        {!query && selected.size === 0 && (
          <p className="px-1 text-sm text-zinc-500">
            Try keywords like <span className="font-medium">oats</span>,{' '}
            <span className="font-medium">mobility</span>,{' '}
            <span className="font-medium">breathing</span>, or{' '}
            <span className="font-medium">exam</span>.
          </p>
        )}

        {results.length === 0 && (
          <p className="px-1 text-sm text-zinc-500">No results found.</p>
        )}

        {results.map((item, i) => {
          const style = CATEGORY_STYLES[item.category];

          // add image if nutrition and missing
          const img =
            item.coverImage ||
            (item.category === 'nutrition'
              ? foodImages[i % foodImages.length]
              : undefined);

          return (
            <Link
              href={`/content/${item.id}${qs}`}
              key={item.id}
              className={`block rounded-xl border border-zinc-200 p-4 shadow-sm ring-1 hover:bg-zinc-50 ${style.ring}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ring-1 ${style.badge}`}
                  >
                    {style.icon}
                    <span>{style.label}</span>
                  </div>
                  <h2 className="mt-2 text-base font-semibold text-zinc-900">
                    {item.title}
                  </h2>
                  <p className="mt-1 line-clamp-2 text-sm text-zinc-600">
                    {item.description}
                  </p>
                  {item.tags?.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {item.tags.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="rounded bg-zinc-100 px-2 py-0.5 text-xs text-zinc-700"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {img && (
                  <div className="hidden h-14 w-20 flex-shrink-0 overflow-hidden rounded-md sm:block">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
