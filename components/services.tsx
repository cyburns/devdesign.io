"use client";

import React, { useCallback } from "react";
import { useSectionInView } from "@/lib/hooks";
import useEmblaCarousel from "embla-carousel-react";
import Carousel from "./carousel";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function Services() {
  const { ref } = useSectionInView("Services", 0.5);

  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <section
        ref={ref}
        className="max-w-[46rem] leading-8 scroll-mt-28  w-full mb-10"
      >
        <div className="flex flex-row justify-between items-center">
          <h2 className="font-medium mb-8 text-[3rem] sm:text-[5rem] uppercase text-center">
            Services
          </h2>
          <div className="flex justify-center items-center pb-8">
            <button
              onClick={scrollPrev}
              className="bg-[#EFEFEF] dark:bg-[#161616] rounded-full h-[4rem] w-[4rem] hover:bg-opacity-50 transition shadow-"
            >
              <ArrowBackIos className="text-black dark:text-white ml-2" />
            </button>
            <button
              onClick={scrollNext}
              className="bg-[#EFEFEF] dark:bg-[#161616] rounded-full h-[4rem] w-[4rem] ml-5 hover:bg-opacity-50 transition shadow-"
            >
              <ArrowForwardIos className="text-black dark:text-white" />
            </button>
          </div>
        </div>
      </section>

      <Carousel emblaRef={emblaRef} />
    </>
  );
}
