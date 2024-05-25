"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <section
      ref={ref}
      className="max-w-[50rem] leading-8 scroll-mt-28 flex flex-row justify-between w-full"
      id="about"
    >
      <div className="max-w-[15rem]">
        <h2 className="text-3xl font-medium capitalize mb-8">
          Fast, reliable, and affordable development services
        </h2>
        <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 flex flex-row">
          About
        </button>
      </div>
      <div className="max-w-sm">
        <p className="text-[#a3a3a7]">
          DevDesign replaces unreliable freelancers and expensive agencies for
          one flat fee, with product delivered so fast that it will blow your
          min
        </p>
      </div>
    </section>
  );
}
