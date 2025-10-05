// app/content/[id]/page.tsx
import { CONTENT } from "@/data/content";
import type { Category, ContentItem } from "@/types/Content";
import {
  Apple,
  Dumbbell,
  Brain,
  Newspaper,
  Clock,
  Flame,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const CATEGORY_STYLES: Record<
  Category,
  { ring: string; badge: string; label: string; icon: JSX.Element }
> = {
  nutrition: {
    ring: "ring-emerald-300",
    badge: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    label: "Nutrition",
    icon: <Apple className="h-4 w-4" />,
  },
  fitness: {
    ring: "ring-cyan-300",
    badge: "bg-cyan-50 text-cyan-700 ring-cyan-200",
    label: "Fitness",
    icon: <Dumbbell className="h-4 w-4" />,
  },
  mind: {
    ring: "ring-violet-300",
    badge: "bg-violet-50 text-violet-700 ring-violet-200",
    label: "Mind",
    icon: <Brain className="h-4 w-4" />,
  },
  post: {
    ring: "ring-amber-300",
    badge: "bg-amber-50 text-amber-800 ring-amber-200",
    label: "Post",
    icon: <Newspaper className="h-4 w-4" />,
  },
};

export default function ContentDetail({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // ---- rebuild ?q=&cat= so Back goes to the SAME search state ----
  const qs = new URLSearchParams();
  const q = typeof searchParams.q === "string" ? searchParams.q.trim() : "";
  const cat =
    typeof searchParams.cat === "string" ? searchParams.cat.trim() : "";
  if (q) qs.set("q", q);
  if (cat) qs.set("cat", cat);
  const backHref = `/search${qs.toString() ? `?${qs.toString()}` : ""}`;

  // ---- find the item ----
  const item = CONTENT.find((x) => x.id === params.id) as
    | ContentItem
    | undefined;

  if (!item) {
    return (
      <main className="mx-auto max-w-md min-h-screen bg-white px-4 py-6">
        <h1 className="text-xl font-bold">Not found</h1>
        <p className="mt-2 text-sm text-zinc-600">
          We couldn&apos;t find that item.
        </p>
        <div className="mt-4">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-700 shadow-sm hover:bg-zinc-50 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to search
          </Link>
        </div>
      </main>
    );
  }

  const style = CATEGORY_STYLES[item.category];

  return (
    <main className="mx-auto max-w-md min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-zinc-100 bg-white/85 px-4 py-4 backdrop-blur">
        <div
          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ring-1 ${style.badge}`}
        >
          {style.icon}
          <span>{style.label}</span>
        </div>
        <h1 className="mt-2 text-xl font-bold">{item.title}</h1>
        <p className="text-xs text-zinc-500">
          {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : ""}
        </p>
      </header>

      {/* Body */}
      <section
        className={`mx-4 mt-4 rounded-2xl border border-zinc-200 p-4 shadow-sm ring-1 ${style.ring}`}
      >
        {item.coverImage && (
          <div className="mb-3 overflow-hidden rounded-xl">
            <Image
              src={item.coverImage}
              alt=""
              width={800}
              height={450}
              className="h-auto w-full object-cover"
            />
          </div>
        )}

        <p className="text-sm text-zinc-700">{item.description}</p>

        {/* Meta depending on type */}
        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
          {item.durationMinutes !== undefined && (
            <div className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2">
              <Clock className="h-4 w-4 text-zinc-500" />
              <span>{item.durationMinutes} min</span>
            </div>
          )}
          {item.calories !== undefined && (
            <div className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2">
              <Flame className="h-4 w-4 text-zinc-500" />
              <span>{item.calories} kcal</span>
            </div>
          )}
          {item.difficulty && (
            <div className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2">
              <span className="text-zinc-500">Level</span>
              <span className="font-medium capitalize">{item.difficulty}</span>
            </div>
          )}
          {item.macros && (
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2">
              <p className="text-zinc-500">Macros</p>
              <p className="text-sm">
                {item.macros.protein ?? 0}g P · {item.macros.carbs ?? 0}g C ·{" "}
                {item.macros.fat ?? 0}g F
              </p>
            </div>
          )}
        </div>

        {item.tags?.length ? (
          <div className="mt-4 flex flex-wrap gap-1">
            {item.tags.map((t) => (
              <span
                key={t}
                className="rounded bg-zinc-100 px-2 py-0.5 text-xs text-zinc-700"
              >
                #{t}
              </span>
            ))}
          </div>
        ) : null}

        {item.externalUrl && (
          <a
            href={item.externalUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-sm font-medium text-cyan-700 underline"
          >
            Open resource
          </a>
        )}
      </section>

      {/* Back button */}
      <div className="px-4 py-6">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-700 shadow-sm hover:bg-zinc-50 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to search
        </Link>
      </div>
    </main>
  );
}
