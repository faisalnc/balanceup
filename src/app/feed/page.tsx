'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Heart, Dumbbell, Apple, Brain, Plus } from 'lucide-react';

type Post = {
  id: number;
  name: string;
  avatar: string;
  title: string;
  type: 'Nutrition' | 'Fitness' | 'Mindfulness';
  desc: string;
  likes: number;
  image?: string;
};

const ICONS: Record<string, JSX.Element> = {
  Nutrition: <Apple className="h-4 w-4 text-emerald-600" />,
  Fitness: <Dumbbell className="h-4 w-4 text-cyan-600" />,
  Mindfulness: <Brain className="h-4 w-4 text-violet-600" />,
};

const TYPE_STYLES: Record<string, { bg: string; text: string; ring: string }> = {
  Nutrition: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-700',
    ring: 'ring-emerald-100',
  },
  Fitness: {
    bg: 'bg-cyan-50',
    text: 'text-cyan-700',
    ring: 'ring-cyan-100',
  },
  Mindfulness: {
    bg: 'bg-violet-50',
    text: 'text-violet-700',
    ring: 'ring-violet-100',
  },
};

export default function FeedPage() {
  const [posts, setPosts] = useState<Post[]>(
    Array.from({ length: 12 }).map((_, i) => {
      const types = ['Nutrition', 'Fitness', 'Mindfulness'] as const;
      const type = types[Math.floor(Math.random() * types.length)];
      const randomNames = [
        'Aisha Rahman',
        'Liam Chen',
        'Noah Lee',
        'Zara Patel',
        'Sofia Kim',
        'Farhan Khan',
        'Maya Tan',
        'Ethan Wang',
        'Nafiz Chowdhury',
        'Sienna Roy',
        'Lucas Singh',
        'Olivia Nguyen',
      ];
      const randomTitle = [
        'Morning Energy Routine',
        'Quick Veggie Bowl',
        'Box Breathing Reset',
        'Study Stretch Break',
        'Hydration Habit',
        'Gratitude Moment',
      ];
      const randomDesc = [
        'Start your day with 5 minutes of focused movement.',
        'A simple and energizing plant-based lunch idea.',
        'Try box breathing to calm your nerves before study.',
        'Stretch your neck and shoulders after long screen time.',
        'Drink 2L of water to hit your daily hydration goal!',
        'Reflect on 3 things you’re grateful for today.',
      ];

      // only Nutrition posts get food images
      const foodImages = [
  'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=400',
];


      return {
        id: i + 1,
        name: randomNames[Math.floor(Math.random() * randomNames.length)],
        avatar: `https://randomuser.me/api/portraits/${
          Math.random() > 0.5 ? 'men' : 'women'
        }/${Math.floor(Math.random() * 90)}.jpg`,
        title: randomTitle[Math.floor(Math.random() * randomTitle.length)],
        type,
        desc: randomDesc[Math.floor(Math.random() * randomDesc.length)],
        likes: Math.floor(Math.random() * 300),
        image: type === 'Nutrition'
          ? foodImages[Math.floor(Math.random() * foodImages.length)]
          : undefined,
      };
    })
  );

  const [liked, setLiked] = useState<Set<number>>(new Set());

  const toggleLike = (id: number) => {
    setLiked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

    // adjust like count visually
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, likes: liked.has(id) ? p.likes - 1 : p.likes + 1 }
          : p
      )
    );
  };

  return (
    <main className="mx-auto max-w-md min-h-screen bg-white pb-24">
      {/* Header */}
      <header className="sticky top-0 z-30 -mx-4 border-b border-zinc-200 bg-white/90 px-4 py-4 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <h1 className="text-xl font-bold">Wellness Feed</h1>
        <p className="text-sm text-zinc-500">
          See what others are sharing today
        </p>
      </header>

      {/* Posts */}
      <section className="mt-4 space-y-4 px-4">
        {posts.map((p) => {
          const style = TYPE_STYLES[p.type];
          return (
            <div
              key={p.id}
              className={`rounded-2xl border border-zinc-100 p-4 shadow-sm ring-1 hover:bg-zinc-50 transition ${style.ring}`}
            >
              <div className="flex items-start gap-3">
                <div className="relative h-10 w-10 rounded-full overflow-hidden ring-2 ring-white shadow-sm flex-shrink-0">
                  <Image
                    src={p.avatar}
                    alt={p.name}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-zinc-900">{p.name}</p>
                    <div
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ring-1 ${style.bg} ${style.text} ${style.ring}`}
                    >
                      {ICONS[p.type]}
                      {p.type}
                    </div>
                  </div>

                  <h2 className="mt-1 text-base font-semibold text-zinc-900">
                    {p.title}
                  </h2>
                  <p className="mt-1 text-sm text-zinc-600">{p.desc}</p>

                  {/* Show image only if nutrition post */}
                  {p.image && (
                    <div className="mt-3 h-36 w-full overflow-hidden rounded-xl">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.image}
                        alt={p.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* React bar */}
              <div className="mt-3 flex items-center justify-between text-sm">
                <button
                  onClick={() => toggleLike(p.id)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-3 py-1.5 hover:bg-zinc-50 active:scale-95 transition"
                >
                  <Heart
                    className={`h-4 w-4 ${
                      liked.has(p.id)
                        ? 'fill-rose-500 text-rose-500'
                        : 'text-zinc-500'
                    }`}
                  />
                  <span
                    className={`font-medium ${
                      liked.has(p.id) ? 'text-rose-600' : 'text-zinc-600'
                    }`}
                  >
                    {p.likes}
                  </span>
                </button>
                <p className="text-xs text-zinc-400">💬 4 comments</p>
              </div>
            </div>
          );
        })}
      </section>

      {/* Floating Post Button */}
      <button
        onClick={() => alert('Create a new post (coming soon!)')}
        className="fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-400 text-white shadow-lg hover:scale-105 transition"
      >
        <Plus className="h-6 w-6" />
      </button>
    </main>
  );
}
