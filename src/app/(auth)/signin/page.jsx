"use client";

import { useRef } from "react";
import { signIn, signOut } from "next-auth/react";
import CredentialFormInput from "@/components/auth/CredentialFormInput";
import AuthFormButton from "@/components/auth/AuthFormButton";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const router = useRouter();

  const handleCredentialSubmit = async (event) => {
    event.preventDefault();

    console.log("handleCredentialSubmit");

    if (!emailRef.current.value || !passwordRef.current.value) {
      toast.error("Both email and password are required.");
      return null;
    }

    const result = await signIn("credentials", {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      redirect: false,
    });
    console.log("pagejsx result:", result);

    if (result.error) {
      passwordRef.current.value = "";
      toast.error(
        `signin failed! check your email or password. (${result.error})`
      );
      // CredentialsSignin : either email or password is wrong
    } else {
      toast.success("login!");
      router.push("/");
    }
  };

  const handleGoogleSubmit = async (event) => {
    event.preventDefault();

    console.log("handleGoogleSubmit");

    const result = await signIn("google", {
      redirect: true,
      callbackUrl: "/",
    });
  };

  const handleGithubSubmit = async (event) => {
    event.preventDefault();

    console.log("handleGithubSubmit");

    const result = await signIn("github", {
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <>
      <h1 className="block text-2xl text-center text-slate-900">login</h1>
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

      <AuthFormButton onClick={handleCredentialSubmit}>
        Sign In with email
      </AuthFormButton>

      <hr className="w-[80%] borer border-slate-500" />

      <AuthFormButton onClick={handleGoogleSubmit} type="button">
        Sign In with Google
      </AuthFormButton>

      <AuthFormButton onClick={handleGithubSubmit} type="button">
        Sign In with GitHub
      </AuthFormButton>

      <AuthFormButton onClick={signOut}>signout</AuthFormButton>
    </>
  );
}
