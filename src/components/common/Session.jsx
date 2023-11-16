"use client";

import { useSession } from "next-auth/react";

export default function Session() {
  const { data, status } = useSession();

  return (
    <pre className="text-sm bg-slate-200">{`${JSON.stringify(
      data
    )}, ${status}`}</pre>
  );
}
