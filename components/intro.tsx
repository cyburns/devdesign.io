"use client";

import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";
import { Spotlight } from "./ui/Spotlight";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <div className="h-[40rem] max-w-[70rem] w-full dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center flex-col mt-[-8rem]">
      <Spotlight
        className="-top-40 left-0 md:left-10 md:-top-20"
        fill="white"
      />

      <section
        ref={ref}
        id="home"
        className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] flex justify-center flex-col items-center px-4 sm:px-0"
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_25%,black)]" />
        <h1 className="mb-8 text-[5rem] font-medium !leading-[1] ">
          <span className="font-semibold uppercase">
            Make <span className="hero-gradient-text px-2">your ideas </span>{" "}
            come to life.
          </span>
        </h1>
        <h2 className="mb-8 px-4 text-md font-medium !leading-[1.5] max-w-[40rem] text-[#a3a3a7]">
          Crafting seamless digital experiences through cutting-edge
          prototyping, system design, DevOps, and development expertise.
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium ">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2.5px] hover:scale-105 transition">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f37a1d_0%,#932cba_50%,#f37a1d_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-black px-10 py-1 text-lg font-medium text-black dark:text-white backdrop-blur-3xl">
              See Plans
              <BsArrowRight className="ml-4" />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}
