"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[45rem] leading-8 sm:mb-40 scroll-mt-28 flex flex-row justify-between"
      id="about"
    >
      <SectionHeading>
        Fast, reliable, and affordable development services
      </SectionHeading>
      <div>
        <p className="mb-3">
          DevDesign replaces unreliable freelancers and expensive agencies for
          one flat fee, with product delivered so fast that it will blow your
          min
        </p>
      </div>
    </section>
  );
}
