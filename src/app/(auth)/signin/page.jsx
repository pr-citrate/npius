"use client";

import { useRef } from "react";
import { signIn, signOut } from "next-auth/react";
import CredentialFormInput from "@/components/auth/CredentialFormInput";
import AuthFormButton from "@/components/auth/AuthFormButton";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { to } from "@react-spring/web";
export default function signin({}) {
  const emailRef = useRef();
  const passwordRef = useRef(null);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await signIn("credentials", {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      redirect: false,
    });
    console.log(result);
    if (result.error) {
      toast.error(`signin failed! (${result.error})`);
    } else {
      toast.success("login!");
      router.push("/");
    }
  };

  const handleGoogleSubmit = async (event) => {
    const result = await signIn("google", {
      redirect: true,
      callbackUrl: "/",
    });
  };

  const handleGithubSubmit = async (event) => {
    const result = await signIn("Github", {
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <>
      <h1 className="block text-2xl text-center text-slate-900">login</h1>
      <AuthFormButton onClick={signOut}>signout</AuthFormButton>
      <CredentialFormInput
        inputRef={emailRef}
        id="email"
        name="email"
        type="email"
        defaultValue=""
        required
        autoComplete="true"
        autoFocus
      >
        email
      </CredentialFormInput>
      <CredentialFormInput
        inputRef={passwordRef}
        id="password"
        name="password"
        type="password"
        defaultValue=""
        autoComplete="true"
        required
      >
        password
      </CredentialFormInput>

      <AuthFormButton onClick={handleSubmit}>Sign In with email</AuthFormButton>

      <hr className="w-[80%] borer border-slate-500" />

      <AuthFormButton onClick={handleGoogleSubmit}>
        Sign In with Google
      </AuthFormButton>

      <AuthFormButton onClick={handleGithubSubmit}>
        Sign In with GitHub
      </AuthFormButton>
    </>
  );
}
