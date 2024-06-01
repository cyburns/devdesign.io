"use client";

import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const index = 1;
  const isExtended = index === 1;

  const buyButtonStyles = isExtended
    ? "bg-[#2563eb] w-full text-white shadow-sm transition hover:bg-blue-500"
    : "text-black dark:text-white ring-1 ring-inset ring-black dark:ring-white hover:ring-blue-300 transition";

  return (
    <section className="flex justify-center items-center ">
      <div className="flex flex-col w-full justify-center items-center max-w-xs">
        <h1 className="text-[3rem] sm:text-[5rem] font-thin">
          <span className="hero-gradient-text">BRIGHT</span>
        </h1>

        <h2 className="mb-2 text-black dark:text-white text-center">
          Sign up to see and write posts or ask any questions.
        </h2>

        <input
          type="text"
          className="bg-[#EFEFEF] dark:bg-[#161616] w-full m-1 px-3 py-3 rounded-lg placeholder:text-[#a5a5a6]"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          className="bg-[#EFEFEF] dark:bg-[#161616] w-full m-1 px-3 py-3 rounded-lg placeholder:text-[#a5a5a6]"
          placeholder="Full Name"
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="text"
          className="bg-[#EFEFEF] dark:bg-[#161616] w-full m-1 px-3 py-3 rounded-lg placeholder:text-[#a5a5a6]"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          className="bg-[#EFEFEF] dark:bg-[#161616] w-full m-1 px-3 py-3 rounded-lg placeholder:text-[#a5a5a6]"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="text-xs text-center mt-3">
          By signing up, you agree to our Terms , Privacy Policy and Cookies
          Policy .
        </p>
        <button
          aria-describedby={`tier-join-now`}
          className={`${buyButtonStyles} mt-6 block rounded-md py-2 px-3 text-center text-base font-medium leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-60 disabled:cursor-not-allowed`}
          rel="noopener noreferrer"
          disabled={!email || !fullName || !username || !password || isLoading}
        >
          Sign up
        </button>
      </div>
    </section>
  );
};

export default SignUp;
