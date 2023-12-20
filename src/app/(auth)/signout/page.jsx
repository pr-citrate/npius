"use client";

import { signOut } from "next-auth/react";
import AuthFormButton from "@/components/auth/AuthFormButton";
import Session from "@/components/common/Session";

export default function SignOut() {
  const handleSignOutSubmit = (event) => {
    event.preventDefault();
    console.log("logout f");
    const result = signOut("credentials");
    console.log("logout res", result);
  };
  return (
    <>
      <h1 className="block text-2xl text-center text-slate-900">signout</h1>
      <Session />
      <AuthFormButton onClick={handleSignOutSubmit}>signout</AuthFormButton>
    </>
  );
}
