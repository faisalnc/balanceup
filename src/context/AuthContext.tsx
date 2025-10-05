// src/context/AuthContext.tsx
"use client";
import { createContext, useContext, ReactNode } from "react";

type AuthCtx = { user: null };
const AuthContext = createContext<AuthCtx>({ user: null });

export function AuthProvider({ children }: { children: ReactNode }) {
  return <AuthContext.Provider value={{ user: null }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext); // always { user: null }
}
