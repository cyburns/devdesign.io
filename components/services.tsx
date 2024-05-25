"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";

export default function Services() {
  const { ref } = useSectionInView("About");

  return (
    <section
      ref={ref}
      className="max-w-[50rem] leading-8 scroll-mt-28  w-full "
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
    </section>
  );
}
