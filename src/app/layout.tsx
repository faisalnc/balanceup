// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import BottomNav from "@/components/BottomNav";

export const metadata: Metadata = {
  title: "BalanceUp",
  description: "Your daily balance, simplified.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-zinc-50 text-zinc-900 antialiased">
        <div className="pb-16"> {/* extra bottom padding so content doesn’t hide behind nav */}
          {children}
        </div>
        <BottomNav /> {/* 👈 Always visible on every page */}
      </body>
    </html>
  );
}
