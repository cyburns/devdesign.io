"use client";

import React, { useState } from "react";

const Accordion = ({ title, link, answer }: any) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2 border-b border-b-black dark:border-b-white">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full"
      >
        <span className="text-3xl mt-5 text-black dark:text-white hover:underline">
          <a href={link}>{title}</a>
        </span>
        <svg
          className="shrink-0 ml-8 mb-5 mt-7"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f37a1d" />
              <stop offset="100%" stopColor="#932cba" />
            </linearGradient>
          </defs>
          <rect
            y="11"
            width="24"
            height="3"
            rx="1.5"
            fill="url(#gradient)"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="11"
            width="24"
            height="3"
            rx="1.5"
            fill="url(#gradient)"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-white text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-lg mb-5 text-black dark:text-white">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
