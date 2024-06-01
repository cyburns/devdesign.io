"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";

const Contact = () => {
  const { ref } = useSectionInView("Contact");

  return (
    <div
      id="contact"
      ref={ref}
      className="h-[30rem] w-full dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative items-center justify-center flex flex-col max-w-[50rem] mt-[4rem] sm:mt-[-15rem]"
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]" />
      <h1 className="mb-8 text-[3rem] sm:text-[5rem] font-medium !leading-[1] text-black dark:text-white max-w-[50rem] text-center">
        <span className="font-semibold uppercase text-center">
          let&apos;s <span className="hero-gradient-text px-2">create</span>{" "}
          great things.
        </span>
      </h1>

      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2.5px] hover:scale-105 transition shadow-xl">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f37a1d_0%,#932cba_50%,#f37a1d_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-black px-10 py-1 text-lg font-medium text-black dark:text-white backdrop-blur-3xl">
          <a href={"https://calendly.com/cyrusburns/30min"}>Contact</a>
        </span>
      </button>
    </div>
  );
};

export default Contact;
