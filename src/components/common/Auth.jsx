"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function Auth({ className, ...props }) {
  const [isLoading, setIsLoading] = useState(false);

  const loginWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn("google");
      console.log("logged in!");
    } catch (error) {
      console.error("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`flex justify-center ${className}`} {...props}>
      <button className="bg-w" onClick={loginWithGoogle}>
        {isLoading && "loading"}
        Google
      </button>
    </div>
  );
}
