"use client";

import { testimonials } from "@/lib/data";

import React from "react";
import { InfiniteCards } from "../ui/InfiniteCards";
import { useSectionInView } from "@/lib/hooks";

const InfiniteWords = () => {
  const { ref } = useSectionInView("About");

  return (
    <div
      ref={ref}
      id="services"
      className="h-[25rem] w-screen flex flex-col antialiased items-center justify-center relative overflow-hidden mb-10 sm:mb-36"
    >
      <InfiniteCards items={testimonials} direction="left" speed="slow" />
    </div>
  );
};

export default InfiniteWords;
