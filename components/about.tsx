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
          Fast, reliable, and affordable full-stack development services
        </h2>
      </div>
      <div className="max-w-sm">
        <p className="text-[#a3a3a7]">
          Blur replaces unreliable freelancers and expensive agencies for
          one flat fee, with product delivered so fast that it will blow your
          mind.
        </p>
      </div>
    </section>
  );
}
