"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";

export default function Services() {
  const { ref } = useSectionInView("Services");

  return (
    <section className="max-w-[50rem] leading-8 scroll-mt-28  w-full mb-10">
      <h2 className="font-medium mb-8 text-[3rem] sm:text-[5rem] uppercase text-center">
        Services
      </h2>
    </section>
  );
}
