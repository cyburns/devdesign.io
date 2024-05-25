"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { serviceCardsData } from "@/lib/data";
import {
  IntegrationInstructions,
  Assistant,
  AccountBox,
  Extension,
} from "@mui/icons-material";

const serviceIcons = [
  <IntegrationInstructions
    sx={{ fontSize: "3rem", color: "#fff" }}
    key="icon1"
  />,
  <Assistant sx={{ fontSize: "3rem", color: "#fff" }} key="icon2" />,
  <AccountBox sx={{ fontSize: "3rem", color: "#fff" }} key="icon3" />,
  <Extension sx={{ fontSize: "3rem", color: "#fff" }} key="icon4" />,
];

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="w-screen mb-56">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container ml-[30%] mr-[30%]">
          {serviceCardsData.map((item, index) => (
            <div
              key={index}
              className="embla__slide bg-[#EFEFEF] dark:bg-[#161616] p-7 rounded-lg mx-5"
            >
              <div className="flex flex-row min-h-[10rem]">
                <div className="gradient-background min-w-16 h-16 rounded-full flex justify-center items-center">
                  <span key={`icon-${index}`} className="px-2">
                    {serviceIcons[index]}
                  </span>
                </div>

                <div className="ml-10">
                  <p>{item.description}</p>
                </div>
              </div>

              <div className="flex flex-row justify-between">
                <h1 className="text-3xl font-bold mt-5">{item.title}</h1>
                <h2 className="text-3xl font-bold mt-5 text-[#a3a3a7]">
                  {item.num}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
