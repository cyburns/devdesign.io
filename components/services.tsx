"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";

export default function Services() {
  const { ref } = useSectionInView("About");

  return (
    <section
      ref={ref}
      className="max-w-[50rem] leading-8 scroll-mt-28  w-full mb-56"
      id="about"
    >
      <div className="flex flex-row justify-between mb-10">
        <div className="max-w-[15rem] ">
          <h2 className="font-medium mb-8 text-[5rem] uppercase">Services</h2>
        </div>
        <div className="max-w-sm">
          <p className="text-[#a3a3a7]"></p>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4 bg-[#161616] p-7 rounded-xl">
            <h3 className="font-medium text-[2rem]">Web Development</h3>
            <p className="text-[#a3a3a7]">
              I build responsive websites and web applications using modern
              technologies such as React, Next.js, and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
