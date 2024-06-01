"use client";

import React, { useCallback } from "react";
import { useSectionInView } from "@/lib/hooks";
import useEmblaCarousel from "embla-carousel-react";
import Carousel from "./carousel";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";
import { useMediaQuery } from "@mui/system";

export default function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const smallScreenSize = useMediaQuery("(min-width:967px)");

  const { ref } = useSectionInView("Services", 0.5);

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
        className="max-w-[46rem] leading-8 scroll-mt-28  w-full mb-0 sm:mb-10"
      >
        <div className="flex flex-row justify-center sm:justify-between items-center">
          <h2 className="font-medium mb-8 text-[3rem] sm:text-[5rem] uppercase text-center">
            Services
          </h2>
          {smallScreenSize && (
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
          )}
        </div>
      </section>

      <Carousel emblaRef={emblaRef} />

      {!smallScreenSize && (
            <div className="flex justify-center items-center pb-8 mb-32 sm:mb-0">
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
          )}
    </>
  );
}
