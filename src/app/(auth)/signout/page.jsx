"use client";

import { signOut } from "next-auth/react";
import AuthFormButton from "@/components/auth/AuthFormButton";

export default function SignOut() {
  return (
    <>
      <h1 className="block text-2xl text-center text-slate-900">signout</h1>
      <AuthFormButton onClick={signOut}>signout</AuthFormButton>
    </>
  );
}
