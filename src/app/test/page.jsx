"use client";

import ParallaxProvider from "@/providers/ParallaxProvider";
import { useSession } from "next-auth/react";
import Header from "@/components/common/Header";

export default function Test() {
  const { data } = useSession();
  return (
    <ParallaxProvider pages={1}>
      <Header />
      <pre className="p-24 bg-red-500">{JSON.stringify(data)}</pre>
    </ParallaxProvider>
  );
}
