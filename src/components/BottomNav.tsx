"use client";
import { Search, Home, UserCircle, List } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

// components/BottomNav.tsx (snippet)
const navItems = [
  { href: '/', label: 'Home',   icon: <Home className="w-5 h-5" /> },
  { href: '/search', label: 'Search', icon: <Search className="w-5 h-5" /> },
  { href: '/feed', label: 'Feed',   icon: <List className="w-5 h-5" /> },
  { href: '/profile', label: 'Profile', icon: <UserCircle className="w-5 h-5" /> },
];


  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20 border-t border-gray-300 bg-white">
      <div className="mx-auto flex max-w-md items-center justify-between px-6 py-2 text-sm font-medium">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center ${
                isActive ? "text-cyan-700" : "text-gray-700 hover:text-gray-900"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
