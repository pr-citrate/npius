"use client";

import { SessionProvider } from "next-auth/react";

export default function ServerSessionProvider({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
