'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Heart, Dumbbell, Brain, Pencil } from 'lucide-react';

export default function ProfilePage() {
  const friends = [
    { name: 'Farhan', img: 'https://randomuser.me/api/portraits/men/32.jpg', balance: 78 },
    { name: 'Siam', img: 'https://randomuser.me/api/portraits/men/45.jpg', balance: 65 },
    { name: 'Nafiz', img: 'https://randomuser.me/api/portraits/men/12.jpg', balance: 82 },
    { name: 'Noah', img: 'https://randomuser.me/api/portraits/men/22.jpg', balance: 71 },
    { name: 'Zara', img: 'https://randomuser.me/api/portraits/women/29.jpg', balance: 89 },
  ];

  return (
    <main className="mx-auto max-w-md min-h-screen bg-white text-zinc-900 relative">
      {/* Profile Card */}
      <section className="px-5 pt-6 relative">
        <div className="relative rounded-3xl bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-400 text-white p-6 shadow-lg overflow-hidden">
          {/* Floating Edit Icon */}
          <Link
            href="/profile/edit"
            className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition backdrop-blur-sm shadow-md"
          >
            <Pencil className="h-4.5 w-4.5 text-white" />
          </Link>

          {/* Avatar */}
          <div className="flex flex-col items-center text-center">
            <div className="relative h-24 w-24 overflow-hidden rounded-full ring-4 ring-white/70 shadow-lg">
              <Image
                src="/images/avatar.png"
                alt="Profile Picture"
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
            <h1 className="mt-3 text-2xl font-bold">Faisal Chowdhury</h1>
            <p className="text-sm opacity-90">faisal.e923@gmail.com</p>
            <p className="mt-2 rounded-full bg-white/25 px-3 py-1 text-xs font-medium text-white shadow-sm">
              🌟 Premium Subscriber
            </p>
          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="flex flex-col items-center justify-center rounded-2xl bg-white/15 p-3 backdrop-blur-sm shadow-sm">
              <Heart className="h-5 w-5 mb-1 text-white" />
              <p className="text-xs opacity-90">Wellness Streak</p>
              <p className="text-lg font-semibold">14d</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl bg-white/15 p-3 backdrop-blur-sm shadow-sm">
              <Dumbbell className="h-5 w-5 mb-1 text-white" />
              <p className="text-xs opacity-90">Workouts</p>
              <p className="text-lg font-semibold">37</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl bg-white/15 p-3 backdrop-blur-sm shadow-sm">
              <Brain className="h-5 w-5 mb-1 text-white" />
              <p className="text-xs opacity-90">Mind Sessions</p>
              <p className="text-lg font-semibold">22</p>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Details */}
      <section className="px-5 py-6 space-y-6">
        {/* About Section */}
        <div className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-zinc-900 mb-2">About</h3>
          <p className="text-sm text-zinc-700 leading-relaxed">
            Passionate about nutrition and mindful living. Currently exploring plant-based recipes
            and balancing study, fitness, and mental wellbeing. Loves hiking, clean design, and
            meaningful digital experiences.
          </p>
        </div>

        {/* Friends Section */}
        <div className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold">Friends & Balance Scores</h3>
            <Link href="/friends" className="text-xs text-teal-700 hover:underline">
              View all
            </Link>
          </div>

          <div className="space-y-3">
            {friends.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl border border-zinc-100 bg-zinc-50 p-3 hover:bg-zinc-100 transition"
              >
                <div className="relative h-10 w-10 rounded-full overflow-hidden ring-2 ring-white shadow-sm">
                  <Image src={f.img} alt={f.name} fill sizes="40px" className="object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-zinc-900">{f.name}</p>
                  <div className="h-2 mt-1 rounded-full bg-zinc-200">
                    <div
                      className="h-2 rounded-full bg-teal-500"
                      style={{ width: `${f.balance}%` }}
                    />
                  </div>
                </div>
                <p className="text-xs font-semibold text-teal-700">{f.balance}%</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-zinc-500">{friends.length} active friends connected</p>
        </div>

        {/* Social Links */}
        <div className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm">
          <h3 className="text-sm font-semibold mb-3">Linked Socials</h3>
          <div className="flex flex-col gap-2 text-sm">
            <Link
              href="https://www.facebook.com/Gakkmedia/"
              target="_blank"
              className="flex items-center gap-2 rounded-md border border-zinc-100 bg-zinc-50 px-3 py-2 hover:bg-zinc-100"
            >
              <Facebook className="h-4 w-4 text-blue-600" />
              <span>Facebook</span>
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              className="flex items-center gap-2 rounded-md border border-zinc-100 bg-zinc-50 px-3 py-2 hover:bg-zinc-100"
            >
              <Instagram className="h-4 w-4 text-pink-500" />
              <span>Instagram</span>
            </Link>
            <Link
              href="https://twitter.com/"
              target="_blank"
              className="flex items-center gap-2 rounded-md border border-zinc-100 bg-zinc-50 px-3 py-2 hover:bg-zinc-100"
            >
              <Twitter className="h-4 w-4 text-sky-500" />
              <span>X (Twitter)</span>
            </Link>
          </div>
        </div>

        {/* Preferences & Settings */}
        <div className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm">
          <h3 className="text-sm font-semibold mb-3">Preferences</h3>
          <ul className="text-sm space-y-2">
            <li>
              <Link href="/profile/preferences" className="flex items-center justify-between text-teal-700">
                App Preferences
              </Link>
            </li>
            <li>
              <Link href="/profile/settings" className="flex items-center justify-between text-teal-700">
                Account Settings
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="flex items-center justify-between text-teal-700">
                Privacy & Data
              </Link>
            </li>
          </ul>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-zinc-400 mt-8">(c) BalanceUp v1.0</p>
      </section>
    </main>
  );
}
