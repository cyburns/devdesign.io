import { testimonials } from "@/lib/data";

import React from "react";
import { InfiniteCards } from "./ui/InfiniteCards";

const InfiniteWords = () => {
  return (
    <div className="h-[25rem] w-screen flex flex-col antialiased items-center justify-center relative overflow-hidden mb-36">
      <InfiniteCards items={testimonials} direction="left" speed="slow" />
    </div>
  );
};

export default InfiniteWords;
