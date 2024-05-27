"use client";

import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";
import { Spotlight } from "./ui/Spotlight";
import { useActiveSectionContext } from "@/context/active-section-context";
import Link from "next/link";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <div className="h-screen sm:h-[40rem] max-w-[70rem] w-full dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center flex-col mt-[-13rem] sm:mt-[-9rem] scroll-mt-[100rem]">
      <Spotlight className="-top-10 left-0 sm:left-0 sm:-top-20" fill="white" />

      <section
        ref={ref}
        id="home"
        className="mb-28 max-w-[50rem] text-center sm:mb-0  flex justify-center flex-col items-center px-4 sm:px-0 mt-[12rem] sm:mt-0"
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_25%,black)]" />
        <h1 className="mb-8 mt-10 text-[3rem] sm:text-[5rem] font-medium !leading-[1] ">
          <span className="font-semibold uppercase">
            Make <span className="hero-gradient-text px-2">your ideas </span>{" "}
            come to life.
          </span>
        </h1>

        <div className="relative w-full flex justify-center items-center">
          <div className="absolute inset-0 bg-white dark:bg-black blur-[3rem] w-full h-18 rounded-full z-0" />
          {/* 
          <h2 className="relative mb-8 px-4 text-lg font-medium !leading-[1.5] max-w-[40rem] text-black dark:text-white z-10">
            Crafting seamless digital experiences through cutting-edge
            prototyping, system design, DevOps, and development expertise.
          </h2> */}
          <h2 className="relative mb-8 px-4 text-lg font-medium !leading-[1.5] max-w-[40rem] text-black dark:text-white z-10">
            BRIGHT offers expertise in web development, guiding projects from
            concept through development to deployment <br /> and anything
            in-between.
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium ">
          <Link
            href="#pricing"
            onClick={() => {
              setActiveSection("Pricing");
              setTimeOfLastClick(Date.now());
            }}
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[2.5px] hover:scale-105 transition shadow-xl"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f37a1d_0%,#932cba_50%,#f37a1d_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-black px-10 py-1 text-lg font-medium text-black dark:text-white backdrop-blur-3xl">
              See Plans
              <BsArrowRight className="ml-4" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
