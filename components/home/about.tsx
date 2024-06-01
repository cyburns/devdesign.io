"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import Calendar from "@/components/home/calendar";
import { FlipWords } from "../ui/flip-words";

export default function About() {
  const { ref } = useSectionInView("About");
  const words = ["affordable", "beautiful", "responsive", "modern"];

  return (
    <section
      ref={ref}
      className="max-w-[50rem] leading-8 scroll-mt-28 flex flex-col justify-between w-full sm:flex-row mt-16 sm:mt-0"
      id="about"
    >
      <div className="max-w-[20rem]">
        <h2 className="text-3xl font-medium mb-8 mt-7">
          Fast, reliable,
          <br /> and
          <FlipWords words={words} /> <br />
          full-stack development services
        </h2>
        <p className="text-[#a3a3a7]">
          BRIGHT replaces unreliable freelancers and expensive agencies for
          <span className="text-black dark:text-white">
            {" "}
            one flat fee,{" "}
          </span>{" "}
          with product delivered so fast that it will blow your mind. We deliver{" "}
          <span className="text-black dark:text-white">
            unique, flexible, and scalable{" "}
          </span>{" "}
          solutions for your business.
        </p>
      </div>
      <div className="max-w-sm sm:mt-0 mt-12">
        <Calendar />
      </div>
    </section>
  );
}
