"use client";

import { useRef } from "react";

export default function signin({}) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(
      JSON.stringify({
        email: emailRef.current.value,
        pw: passwordRef.current.value,
      })
    );
  };

  return (
    <>
      <form className="flex flex-col items-center justify-center w-full h-full bg-sky-100">
        <div className="flex flex-col items-center justify-center gap-4 p-12 border rounded-xl bg-sky-200 border-sky-300">
          <h1 className="block text-center">login</h1>

          <div className="flex flex-col items-center justify-center">
            <label htmlFor="email" className="block w-full text-sm text-left">
              email
            </label>
            <input
              ref={emailRef}
              id="email"
              name="email"
              type="email"
              required
              autoFocus={true}
              className=""
            />
          </div>

          <div className="flex flex-col items-center justify-center">
            <label
              htmlFor="password"
              className="block w-full text-sm text-left"
            >
              password
            </label>
            <input
              ref={passwordRef}
              id="password"
              name="password"
              type="password"
              required
              className=""
            />
          </div>

          <button onClick={handleSubmit} className="">
            Log In
          </button>
        </div>
      </form>
    </>
  );
}
